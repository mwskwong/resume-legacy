import { SvgIcon } from "@mui/material";
import useSx from "./useThirdPartyIconSx";

const StackOverflow = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.root} {...props}>
      <path d="m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z" />
    </SvgIcon>
  );
};


StackOverflow.muiName = SvgIcon.muiName;
StackOverflow.whyDidYouRender = true;

export default StackOverflow;
