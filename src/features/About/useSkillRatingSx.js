import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  ratingContainer: {
    display: "flex",
    alignItems: "center"
  },
  skillName: {
    flexGrow: 1,
    fontWeight: "bold",
    "@supports (font-variation-settings: normal)": theme => ({
      fontVariationSettings: `'wght' ${theme.typography.fontWeightBold}`
    })
  },
  rating: {
    color: "primary.main"
  }
}), []);

export default useSx;