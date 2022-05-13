import { outline } from "../styles";
import { outlinePath } from "./pathData";

const Outline = () => <path d={outlinePath} className={outline} />;

Outline.whyDidYouRender = true;

export default Outline;