import { ImageDataLike } from "gatsby-plugin-image";

type SupportDocument = {
  title?: string,
  url?: string,
  thumbnail?: ImageDataLike | null
}

export default SupportDocument;