import ArcticOceanFractal from "arctic-ocean-fractal";
import { useInView } from "react-intersection-observer";

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
