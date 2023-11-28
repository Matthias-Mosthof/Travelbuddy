export {};

declare global {
  export interface NewPost {
    title: string;
    text: string;
  }

  export interface Post extends NewPost {
    id: string;
  }
}
