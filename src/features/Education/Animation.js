import { Box } from "@mui/material";
import loadable from "@loadable/component";
import { useInView } from "react-intersection-observer";
import useSx from "./useAnimationSx";

const ArcticOceanFractal = loadable(() => import("arctic-ocean-fractal"), { ssr: false });

const Animation = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const sx = useSx();

  return (
    <div ref={ref}>
      <Box sx={sx.root}>
        <ArcticOceanFractal pose={inView ? "show" : "hide"} />
      </Box>
    </div>
  );
};

Animation.whyDidYouRender = true;

export default Animation;
