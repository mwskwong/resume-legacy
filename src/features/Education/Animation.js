import loadable from "@loadable/component";
import { useInView } from "react-intersection-observer";

const ArcticOceanFractal = loadable(() => import("arctic-ocean-fractal"), { ssr: false });

const Animation = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
      <ArcticOceanFractal pose={inView ? "show" : "hide"} />
    </div>
  );
};

Animation.whyDidYouRender = true;

export default Animation;
