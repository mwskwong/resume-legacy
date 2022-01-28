import { SvgIcon } from "@mui/material";

const Phone = props => (
  <SvgIcon {...props}>
    <path d="M13 21a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1zM10.5 3h3c.277 0 .5-.223.5-.5s-.223-.5-.5-.5h-3c-.277 0-.5.223-.5.5s.223.5.5.5zm-4-3C5.678 0 5 .678 5 1.5v21c0 .822.678 1.5 1.5 1.5h11c.822 0 1.5-.678 1.5-1.5v-21c0-.822-.678-1.5-1.5-1.5zm0 1h11c.286 0 .5.214.5.5v21c0 .286-.214.5-.5.5h-11c-.286 0-.5-.214-.5-.5v-21c0-.286.214-.5.5-.5z" />
  </SvgIcon>
);

Phone.muiName = SvgIcon.muiName;
Phone.whyDidYouRender = true;

export default Phone;
