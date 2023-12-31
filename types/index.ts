export {};

declare global {
  export interface NewPost {
    title: string;
    text: string;
    name: string;
    age: number;
    gender: string | 'männlich' | 'weiblich' | 'divers';
    email: string;
    theme: string;
    released: boolean | false;
    rejected: boolean | false;
  }

  export interface Post extends NewPost {
    id: number;
    created_at: string;
  }

  export interface Message {
    text: string;
    fromEmail: string;
    toEmail: string;
    toName: string;
    fromName: string;
  }

  export interface AgeRange {
    min: number;
    max: number;
  }

  export interface SearchFilter {
    searchTerm: string;
    advancedSearch: {
      isActive: boolean;
      ageRange: AgeRange;
      gender: string | 'M' | 'W' | 'D';
    };
  }
}
