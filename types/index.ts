import type { Timestamp } from "firebase/firestore";

export {};

declare global {
  export interface NewPost {
    title: string;
    text: string;
    createdAt: Timestamp;
  }

  export interface Post extends NewPost {
    id: string;
  }
}
