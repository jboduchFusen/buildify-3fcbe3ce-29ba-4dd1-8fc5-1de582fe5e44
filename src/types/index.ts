
export interface PlantIdentification {
  id: string;
  plantName: string;
  scientificName: string;
  confidence: number;
  description?: string;
  careInfo?: string[];
  imageUrl: string;
  timestamp: string;
}