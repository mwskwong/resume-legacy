// For importing CSS 
declare module "*.css";
declare module "*.css" {
  const content: { readonly [className: string]: string };
  export default content;
}
