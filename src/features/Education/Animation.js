import { Box } from "@mui/material";
import loadable from "@loadable/component";
import { useInView } from "react-intersection-observer";
import useSx from "./useAnimationSx";

const ArcticOceanFractal = loadable(() => import("components/ArcticOceanFractal"), { ssr: false });

const Animation = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const sx = useSx();

  return (
    <Box ref={ref} sx={sx.root}>
      <Box sx={sx.wrapper}>
        <ArcticOceanFractal pose={inView ? "show" : "hide"} />
      </Box>
    </Box>
  );
};

Animation.whyDidYouRender = true;

export default Animation;
