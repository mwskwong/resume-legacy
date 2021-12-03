import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  supplementarySkillsContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    mt: 6
  },
  supplementarySkill: {
    m: 0.5
  }
}), []);

export default useSx;