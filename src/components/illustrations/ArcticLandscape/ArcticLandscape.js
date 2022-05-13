import AuroraBorealis from "./AuroraBorealis";
import Clouds from "./Clouds";
import Mountains from "./Mountains";
import SnowHills from "./SnowHills";
import Wind from "./Wind";

const ArcticLandscape = () => (
  <svg viewBox="0 0 624.443 278.807" xmlns="http://www.w3.org/2000/svg">
    <AuroraBorealis />
    <Clouds />
    <Wind />
    <Mountains />
    <SnowHills />
  </svg>
);

ArcticLandscape.whyDidYouRender = true;

export default ArcticLandscape;