import type { Timestamp } from "firebase/firestore";

export {};

declare global {
  export interface NewPost {
    title: string;
    text: string;
    name: string;
    age: number;
    gender: string | "männlich" | "weiblich" | "divers";
    email: string;
  }

  export interface Post extends NewPost {
    id: string;
    createdAt: Timestamp;
  }
}
