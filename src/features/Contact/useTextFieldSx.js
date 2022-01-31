import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  formHelperText: {
    "&::first-letter": {
      textTransform: "uppercase"
    }
  }
}), []);

export default useSx;