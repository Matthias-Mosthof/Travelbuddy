import type { Timestamp } from 'firebase/firestore';

export {};

declare global {
  export interface NewPost {
    title: string;
    text: string;
    name: string;
    age: number;
    gender: string | 'männlich' | 'weiblich' | 'divers';
    email: string;
    released: boolean | false;
    rejected: boolean | false;
  }

  export interface Post extends NewPost {
    id: string;
    created_at: Timestamp;
  }
}
