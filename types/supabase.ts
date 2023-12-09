export {};

declare global {

  export type Json =
  | string
  | number
  | boolean

  | { [key: string]: Json | undefined }
  | Json[]

  export interface Database {
    public: {
      Tables: {
        posts: {
          Row: {
            age: number;
            created_at: string;
            email: string;
            gender: string;
            id: number;
            name: string;
            rejected: boolean;
            released: boolean;
            text: string;
            title: string;
          };
          Insert: {
            age?: number;
            created_at?: string;
            email?: string;
            gender?: string;
            id?: number;
            name?: string;
            rejected?: boolean;
            released?: boolean;
            text?: string;
            title?: string;
          };
          Update: {
            age?: number;
            created_at?: string;
            email?: string;
            gender?: string;
            id?: number;
            name?: string;
            rejected?: boolean;
            released?: boolean;
            text?: string;
            title?: string;
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
