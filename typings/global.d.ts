declare module '*.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.svg?url' {
  const content: import('next/dist/shared/lib/get-img-props').StaticImageData;
  export default content;
}

