
import { useState, useRef } from 'react';
import { Camera, Upload, Loader2, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { toast } from 'sonner';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { PlantIdentification } from '../types';
import { identifyPlant } from '../services/plantService';

const IdentificationPage = () => {
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PlantIdentification | null>(null);
  const [apiKey, setApiKey] = useState<string>('');
  const [history, setHistory] = useLocalStorage<PlantIdentification[]>('plant-history', []);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
      };
      reader.readAsDataURL(selectedFile);
      
      // Reset result when new image is selected
      setResult(null);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      setFile(droppedFile);
      
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
      };
      reader.readAsDataURL(droppedFile);
      
      // Reset result when new image is selected
      setResult(null);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const clearImage = () => {
    setImage(null);
    setFile(null);
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleIdentify = async () => {
    if (!file) {
      toast.error('Please upload an image first');
      return;
    }

    if (!apiKey) {
      toast.error('Please enter your Plant.id API key');
      return;
    }

    setLoading(true);
    try {
      const identification = await identifyPlant(file, apiKey);
      setResult(identification);
      
      // Save to history
      setHistory([identification, ...history.slice(0, 19)]);
      
      toast.success('Plant identified successfully!');
    } catch (error) {
      console.error('Error identifying plant:', error);
      toast.error('Failed to identify plant. Please check your API key and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Identify Your Plant</h1>
        <p className="text-muted-foreground">
          Upload a photo of a plant to identify its species
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <div 
            className="border-2 border-dashed rounded-lg p-4 h-80 flex flex-col items-center justify-center cursor-pointer relative"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => fileInputRef.current?.click()}
          >
            {image ? (
              <div className="relative w-full h-full">
                <img 
                  src={image} 
                  alt="Plant preview" 
                  className="w-full h-full object-contain"
                />
                <button 
                  className="absolute top-2 right-2 bg-background/80 p-1 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    clearImage();
                  }}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <>
                <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                <p className="text-muted-foreground text-center">
                  Drag and drop an image here, or click to select
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Supported formats: JPG, PNG, JPEG
                </p>
              </>
            )}
            <input 
              type="file" 
              ref={fileInputRef}
              className="hidden" 
              accept="image/jpeg,image/png,image/jpg" 
              onChange={handleFileChange}
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="api-key" className="text-sm font-medium">
                Plant.id API Key
              </label>
              <input
                id="api-key"
                type="text"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter your Plant.id API key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                You need a Plant.id API key to use this service. Get one at{" "}
                <a 
                  href="https://plant.id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  plant.id
                </a>
              </p>
            </div>

            <Button 
              onClick={handleIdentify} 
              disabled={!image || loading}
              className="w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Identifying...
                </>
              ) : (
                <>
                  <Camera className="mr-2 h-4 w-4" />
                  Identify Plant
                </>
              )}
            </Button>
          </div>
        </div>

        <div>
          {result ? (
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">{result.plantName}</h2>
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Scientific Name</h3>
                    <p>{result.scientificName}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Confidence</h3>
                    <p>{result.confidence}%</p>
                  </div>
                  
                  {result.description && (
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Description</h3>
                      <p className="text-sm">{result.description}</p>
                    </div>
                  )}
                  
                  {result.careInfo && (
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Care Information</h3>
                      <ul className="list-disc pl-5 text-sm">
                        {result.careInfo.map((info, index) => (
                          <li key={index}>{info}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Identified On</h3>
                    <p>{new Date(result.timestamp).toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 border rounded-lg">
              <Leaf className="h-12 w-12 text-muted-foreground mb-4" />
              <h2 className="text-xl font-semibold mb-2">No Plant Identified Yet</h2>
              <p className="text-muted-foreground">
                Upload a photo and click "Identify Plant" to see the results here
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IdentificationPage;