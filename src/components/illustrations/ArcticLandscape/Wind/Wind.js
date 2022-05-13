import { outline } from "../styles";
import { outlinePath } from "./pathData";

const Wind = () => <path className={outline} p={outlinePath} />;

Wind.whyDidYouRender = true;

export default Wind;