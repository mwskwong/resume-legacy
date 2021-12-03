import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  supplementarySkillsContainer: {
    display: "flex",
    justifyContent: "center",
    mt: 6
  },
  supplementarySkill: {
    m: 0.5
  }
}), []);

export default useSx;