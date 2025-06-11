
import { Leaf, Camera, Database, Info } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">About PlantID</h1>
        <p className="text-muted-foreground">
          Learn more about our plant identification app and how it works
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Leaf className="h-8 w-8 text-green-600" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p>
                PlantID was created to help people identify and learn about the plants around them. 
                Our mission is to connect people with nature by making plant identification accessible to everyone.
              </p>
              <p>
                Whether you're a gardening enthusiast, a hiker curious about the flora you encounter, 
                or someone who wants to ensure a plant is safe before bringing it home, 
                PlantID is designed to be your botanical companion.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Camera className="h-8 w-8 text-green-600" />
                <h2 className="text-2xl font-bold">How It Works</h2>
              </div>
              <p>
                PlantID uses advanced image recognition technology to identify plants from photos. 
                When you upload a photo, our system analyzes it and compares it with a vast database 
                of plant species to provide you with the most accurate identification.
              </p>
              <p>
                The app integrates with the Plant.id API, which uses machine learning algorithms 
                trained on millions of plant images to deliver reliable results. The more clear and 
                focused your photo is, the more accurate the identification will be.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Info className="h-8 w-8 text-green-600" />
              <h2 className="text-2xl font-bold">Tips for Better Identification</h2>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Take clear, well-lit photos</strong> - Make sure your plant is well-lit and the image is in focus.
              </li>
              <li>
                <strong>Include distinctive features</strong> - Capture leaves, flowers, fruits, or other distinctive parts of the plant.
              </li>
              <li>
                <strong>Multiple angles help</strong> - If possible, take photos from different angles for more accurate identification.
              </li>
              <li>
                <strong>Avoid backlit situations</strong> - Try not to take photos with the sun directly behind the plant.
              </li>
              <li>
                <strong>Isolate the plant</strong> - Try to focus on one plant at a time rather than a group of different plants.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Database className="h-8 w-8 text-green-600" />
              <h2 className="text-2xl font-bold">Privacy & Data</h2>
            </div>
            <p>
              PlantID values your privacy. All plant identifications are stored locally on your device, 
              not on our servers. Your photos are only sent to the Plant.id API for identification purposes 
              and are not stored permanently.
            </p>
            <p>
              You need to provide your own Plant.id API key to use the identification service. 
              This ensures that you have full control over your usage and billing with the Plant.id service.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;
