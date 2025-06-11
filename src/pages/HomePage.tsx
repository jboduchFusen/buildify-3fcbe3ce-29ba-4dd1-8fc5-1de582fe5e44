
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Leaf, Camera, History, Info } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12 py-8">
      <section className="flex flex-col items-center text-center gap-6 py-12">
        <Leaf className="h-16 w-16 text-green-600" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Identify Any Plant in Seconds
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Take a photo of any plant and instantly discover what it is. Our plant identification app uses advanced AI to recognize thousands of plant species.
        </p>
        <Link to="/identify">
          <Button size="lg" className="mt-4">
            Identify a Plant
          </Button>
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
        <div className="flex flex-col items-center text-center gap-4 p-6 border rounded-lg">
          <Camera className="h-10 w-10 text-green-600" />
          <h2 className="text-xl font-semibold">Take a Photo</h2>
          <p className="text-muted-foreground">
            Upload a clear photo of the plant you want to identify. The clearer the image, the more accurate the results.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center gap-4 p-6 border rounded-lg">
          <Leaf className="h-10 w-10 text-green-600" />
          <h2 className="text-xl font-semibold">Get Instant Results</h2>
          <p className="text-muted-foreground">
            Our AI will analyze your photo and provide you with the plant's name, species information, and care tips.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center gap-4 p-6 border rounded-lg">
          <History className="h-10 w-10 text-green-600" />
          <h2 className="text-xl font-semibold">Save Your Discoveries</h2>
          <p className="text-muted-foreground">
            Keep track of all the plants you've identified and access their information anytime in your history.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-6 py-8">
        <h2 className="text-3xl font-bold text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div className="bg-muted rounded-lg p-8 flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Upload a Photo</h3>
            <p>
              Take a clear photo of the plant you want to identify. Make sure the plant is well-lit and the distinctive features (leaves, flowers, etc.) are visible.
            </p>
          </div>
          <div className="bg-muted rounded-lg p-8 flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Get Identification</h3>
            <p>
              Our AI will analyze your photo and compare it with our database of thousands of plant species to provide you with accurate identification results.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;