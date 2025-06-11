
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      plants: {
        Row: {
          id: string
          user_id: string
          plant_name: string
          scientific_name: string
          confidence: number
          description: string | null
          image_url: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          plant_name: string
          scientific_name: string
          confidence: number
          description?: string | null
          image_url: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          plant_name?: string
          scientific_name?: string
          confidence?: number
          description?: string | null
          image_url?: string
          created_at?: string
        }
      }
      care_info: {
        Row: {
          id: string
          plant_id: string
          info: string
        }
        Insert: {
          id?: string
          plant_id: string
          info: string
        }
        Update: {
          id?: string
          plant_id?: string
          info?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}