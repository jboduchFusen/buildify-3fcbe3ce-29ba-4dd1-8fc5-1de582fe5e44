
import { PlantIdentification } from '../types';
import { supabase } from '../lib/supabase';

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
    
    // Upload image to Supabase Storage
    const user = supabase.auth.getUser();
    if (!user) {
      throw new Error('User not authenticated');
    }
    
    // Generate a unique file name
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = `plants/${fileName}`;
    
    // Upload to Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('plant-images')
      .upload(filePath, file);
      
    if (uploadError) {
      console.error('Error uploading image:', uploadError);
      throw new Error('Failed to upload image');
    }
    
    // Get the public URL for the uploaded image
    const { data: { publicUrl } } = supabase.storage
      .from('plant-images')
      .getPublicUrl(filePath);
    
    // Create a plant identification object
    const identification: PlantIdentification = {
      id: generateId(),
      plantName: mockResponse.plantName,
      scientificName: mockResponse.scientificName,
      confidence: mockResponse.confidence,
      description: mockResponse.description,
      careInfo: mockResponse.careInfo,
      imageUrl: publicUrl || base64Image, // Use public URL if available, otherwise fallback to base64
      timestamp: new Date().toISOString()
    };
    
    // Save to Supabase
    const { data: userData } = await supabase.auth.getUser();
    if (userData?.user) {
      const { error: insertError } = await supabase
        .from('plants')
        .insert({
          user_id: userData.user.id,
          plant_name: identification.plantName,
          scientific_name: identification.scientificName,
          confidence: identification.confidence,
          description: identification.description || null,
          image_url: identification.imageUrl
        });
        
      if (insertError) {
        console.error('Error saving plant to database:', insertError);
      }
      
      // If we have care info, save it as well
      if (identification.careInfo && identification.careInfo.length > 0) {
        // Get the plant ID we just inserted
        const { data: plantData } = await supabase
          .from('plants')
          .select('id')
          .eq('user_id', userData.user.id)
          .order('created_at', { ascending: false })
          .limit(1);
          
        if (plantData && plantData.length > 0) {
          const plantId = plantData[0].id;
          
          // Insert care info
          for (const info of identification.careInfo) {
            await supabase
              .from('care_info')
              .insert({
                plant_id: plantId,
                info
              });
          }
        }
      }
    }
    
    return identification;
  } catch (error) {
    console.error('Error identifying plant:', error);
    throw new Error('Failed to identify plant');
  }
}

export async function getPlantHistory(): Promise<PlantIdentification[]> {
  try {
    const { data: userData } = await supabase.auth.getUser();
    if (!userData?.user) {
      return [];
    }
    
    // Get plants from Supabase
    const { data: plants, error } = await supabase
      .from('plants')
      .select(`
        id,
        plant_name,
        scientific_name,
        confidence,
        description,
        image_url,
        created_at,
        care_info (
          info
        )
      `)
      .eq('user_id', userData.user.id)
      .order('created_at', { ascending: false });
      
    if (error) {
      console.error('Error fetching plants:', error);
      return [];
    }
    
    // Convert to PlantIdentification format
    return plants.map(plant => ({
      id: plant.id,
      plantName: plant.plant_name,
      scientificName: plant.scientific_name,
      confidence: plant.confidence,
      description: plant.description || undefined,
      careInfo: plant.care_info ? plant.care_info.map(ci => ci.info) : undefined,
      imageUrl: plant.image_url,
      timestamp: plant.created_at
    }));
  } catch (error) {
    console.error('Error fetching plant history:', error);
    return [];
  }
}

export async function deletePlant(id: string): Promise<void> {
  try {
    const { error } = await supabase
      .from('plants')
      .delete()
      .eq('id', id);
      
    if (error) {
      console.error('Error deleting plant:', error);
      throw new Error('Failed to delete plant');
    }
  } catch (error) {
    console.error('Error deleting plant:', error);
    throw new Error('Failed to delete plant');
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