/// <reference types="vite/client" />

// env.d.ts
declare module "*.jpg" {
    const value: string;
    export default value;
}

declare module "*.png" {
    const value: string;
    export default value;
}

declare module "*.svg" {
    const content: string;
    export default content;
}
