export {};

declare global {

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
        posts: {
          Row: {
            age: number | null;
            created_at: string;
            email: string | null;
            gender: string | null;
            id: number;
            name: string | null;
            rejected: boolean | null;
            released: boolean | null;
            text: string | null;
            title: string | null;
          };
          Insert: {
            age?: number | null;
            created_at?: string;
            email?: string | null;
            gender?: string | null;
            id?: number;
            name?: string | null;
            rejected?: boolean | null;
            released?: boolean | null;
            text?: string | null;
            title?: string | null;
          };
          Update: {
            age?: number | null;
            created_at?: string;
            email?: string | null;
            gender?: string | null;
            id?: number;
            name?: string | null;
            rejected?: boolean | null;
            released?: boolean | null;
            text?: string | null;
            title?: string | null;
          };
          Relationships: [];
        };
      };
      Views: {
        [_ in never]: never
      };
      Functions: {
        [_ in never]: never
      };
      Enums: {
        [_ in never]: never
      };
      CompositeTypes: {
        [_ in never]: never
      };
    };
  }
}
