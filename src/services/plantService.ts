
import { PlantIdentification } from '../types';

export async function identifyPlant(file: File, apiKey: string): Promise<PlantIdentification> {
  try {
    // Convert file to base64
    const base64Image = await fileToBase64(file);
    
    // In a real app, you would send this to the Plant.id API
    // For this demo, we'll simulate a response
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Create a mock response based on the image
    const mockResponse = createMockResponse(file.name);
    
    // Create a plant identification object from the response
    const identification: PlantIdentification = {
      id: generateId(),
      plantName: mockResponse.plantName,
      scientificName: mockResponse.scientificName,
      confidence: mockResponse.confidence,
      description: mockResponse.description,
      careInfo: mockResponse.careInfo,
      imageUrl: base64Image,
      timestamp: new Date().toISOString()
    };
    
    return identification;
  } catch (error) {
    console.error('Error identifying plant:', error);
    throw new Error('Failed to identify plant');
  }
}

// Helper function to convert File to base64
function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
}

// Helper function to generate a unique ID
function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}

// Mock response generator
function createMockResponse(fileName: string): {
  plantName: string;
  scientificName: string;
  confidence: number;
  description: string;
  careInfo: string[];
} {
  // In a real app, this would be the response from the Plant.id API
  // For this demo, we'll return mock data based on the file name
  
  const plants = [
    {
      plantName: "Monstera Deliciosa",
      scientificName: "Monstera deliciosa",
      confidence: 95,
      description: "The Monstera deliciosa is a species of flowering plant native to tropical forests of southern Mexico, south to Panama. It has been introduced to many tropical areas, and has become a mildly invasive species in Hawaii, Seychelles, Ascension Island and the Society Islands.",
      careInfo: [
        "Water when the top inch of soil is dry",
        "Prefers bright, indirect light",
        "Keep in humid environment",
        "Fertilize monthly during growing season"
      ]
    },
    {
      plantName: "Snake Plant",
      scientificName: "Dracaena trifasciata",
      confidence: 92,
      description: "The snake plant, commonly referred to as mother-in-law's tongue, is one of the most popular and hardy species of houseplants. It features stiff, sword-like leaves and can range from six inches to eight feet tall.",
      careInfo: [
        "Water sparingly, allowing soil to dry completely between waterings",
        "Tolerates low light but grows best in bright, indirect light",
        "Prefers warm temperatures between 70-90°F",
        "Fertilize lightly during the growing season"
      ]
    },
    {
      plantName: "Peace Lily",
      scientificName: "Spathiphyllum wallisii",
      confidence: 89,
      description: "The peace lily is a popular indoor plant known for its ability to clean the air and its beautiful white flowers. It's relatively easy to care for and can thrive in low light conditions.",
      careInfo: [
        "Keep soil consistently moist but not soggy",
        "Thrives in low to medium indirect light",
        "Prefers high humidity",
        "Fertilize every 6-8 weeks during growing season"
      ]
    },
    {
      plantName: "Fiddle Leaf Fig",
      scientificName: "Ficus lyrata",
      confidence: 87,
      description: "The fiddle leaf fig is a popular indoor tree with large, violin-shaped leaves that grow upright. These plants are native to tropical parts of Africa, where they thrive in warm and humid conditions.",
      careInfo: [
        "Water when the top inch of soil is dry",
        "Requires bright, filtered light",
        "Prefers consistent temperatures around 65-75°F",
        "Rotate regularly to ensure even growth"
      ]
    },
    {
      plantName: "Pothos",
      scientificName: "Epipremnum aureum",
      confidence: 94,
      description: "Pothos is an easy-to-grow indoor plant that's excellent for beginners. It features heart-shaped leaves and is known for its air-purifying qualities. It can be grown in water or soil and is very forgiving.",
      careInfo: [
        "Allow soil to dry between waterings",
        "Thrives in a variety of light conditions",
        "Trim regularly to promote bushier growth",
        "Can be propagated easily in water"
      ]
    }
  ];
  
  // Select a random plant from the list
  const randomIndex = Math.floor(Math.random() * plants.length);
  return plants[randomIndex];
}