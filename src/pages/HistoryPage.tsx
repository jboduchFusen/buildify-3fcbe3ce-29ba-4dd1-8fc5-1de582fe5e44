
import { useState } from 'react';
import { Trash2, Search, Leaf } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { PlantIdentification } from '../types';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../components/ui/dialog';
import { Link } from 'react-router-dom';

const HistoryPage = () => {
  const [history, setHistory] = useLocalStorage<PlantIdentification[]>('plant-history', []);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlant, setSelectedPlant] = useState<PlantIdentification | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

  const filteredHistory = history.filter(
    (item) => 
      item.plantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (index: number) => {
    setDeleteIndex(index);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    if (deleteIndex !== null) {
      const newHistory = [...history];
      newHistory.splice(deleteIndex, 1);
      setHistory(newHistory);
      setShowDeleteDialog(false);
      setDeleteIndex(null);
    }
  };

  const clearAllHistory = () => {
    setHistory([]);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Identification History</h1>
          <p className="text-muted-foreground">
            View all your previous plant identifications
          </p>
        </div>
        
        {history.length > 0 && (
          <Button 
            variant="destructive" 
            onClick={() => {
              setDeleteIndex(null);
              setShowDeleteDialog(true);
            }}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Clear All
          </Button>
        )}
      </div>

      {history.length > 0 ? (
        <>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search plants..."
              className="pl-10 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHistory.length > 0 ? (
              filteredHistory.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={item.imageUrl} 
                      alt={item.plantName} 
                      className="w-full h-full object-cover"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(index);
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-1">{item.plantName}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.scientificName}</p>
                    <p className="text-sm mb-2">Confidence: {item.confidence}%</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(item.timestamp).toLocaleString()}
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full mt-4"
                      onClick={() => setSelectedPlant(item)}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center text-center p-8">
                <Search className="h-12 w-12 text-muted-foreground mb-4" />
                <h2 className="text-xl font-semibold mb-2">No Results Found</h2>
                <p className="text-muted-foreground">
                  Try a different search term
                </p>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center text-center p-12 border rounded-lg">
          <Leaf className="h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-semibold mb-2">No History Yet</h2>
          <p className="text-muted-foreground mb-6">
            Your plant identification history will appear here once you identify some plants
          </p>
          <Link to="/identify">
            <Button>Identify a Plant</Button>
          </Link>
        </div>
      )}

      {/* Plant Details Dialog */}
      {selectedPlant && (
        <Dialog open={!!selectedPlant} onOpenChange={(open) => !open && setSelectedPlant(null)}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>{selectedPlant.plantName}</DialogTitle>
              <DialogDescription>{selectedPlant.scientificName}</DialogDescription>
            </DialogHeader>
            
            <div className="flex flex-col gap-4">
              <img 
                src={selectedPlant.imageUrl} 
                alt={selectedPlant.plantName} 
                className="w-full h-48 object-cover rounded-md"
              />
              
              <div>
                <h3 className="text-sm font-semibold mb-1">Confidence</h3>
                <p className="text-sm">{selectedPlant.confidence}%</p>
              </div>
              
              {selectedPlant.description && (
                <div>
                  <h3 className="text-sm font-semibold mb-1">Description</h3>
                  <p className="text-sm">{selectedPlant.description}</p>
                </div>
              )}
              
              {selectedPlant.careInfo && selectedPlant.careInfo.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold mb-1">Care Information</h3>
                  <ul className="list-disc pl-5 text-sm">
                    {selectedPlant.careInfo.map((info, index) => (
                      <li key={index}>{info}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div>
                <h3 className="text-sm font-semibold mb-1">Identified On</h3>
                <p className="text-sm">{new Date(selectedPlant.timestamp).toLocaleString()}</p>
              </div>
            </div>
            
            <DialogFooter>
              <Button onClick={() => setSelectedPlant(null)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {deleteIndex !== null ? "Delete this identification?" : "Clear all history?"}
            </DialogTitle>
            <DialogDescription>
              {deleteIndex !== null 
                ? "This action cannot be undone. This identification will be permanently deleted from your history."
                : "This action cannot be undone. All identifications will be permanently deleted from your history."
              }
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={deleteIndex !== null ? confirmDelete : clearAllHistory}
            >
              {deleteIndex !== null ? "Delete" : "Clear All"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HistoryPage;