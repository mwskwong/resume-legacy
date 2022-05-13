import DividerSvg from "./DividerSvg";
import React from "react";
import { darken } from "@mui/system";
import { nord1 } from "nord";

const Footer = props => {
  const fillColorWave1 = darken(nord1, .06);
  const fillColorWave2 = darken(nord1, .03);

  return (
    <DividerSvg {...props} viewBox="0 0 1920 250" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1920 250H0V0s126.707 78.536 349.975 80.05c177.852 1.203 362.805-63.874 553.803-63.874 290.517 0 383.458 57.712 603.992 61.408 220.527 3.696 278.059-61.408 412.23-17.239"
        fill={fillColorWave1}
      />
      <path
        d="M1920 144s-467.917 116.857-1027.243-17.294C369.986 1.322 0 45.578 0 45.578V250h1920V144z"
        fill={fillColorWave2}
      />
      <path
        d="M0 195.553s208.547-75.581 701.325-20.768c376.707 41.908 520.834-67.962 722.545-67.962 222.926 0 311.553 83.523 496.129 86.394V250H0v-54.447z"
        fill="currentColor"
      />
    </DividerSvg>
  );
};

Footer.whyDidYouRender = true;

export default Footer;