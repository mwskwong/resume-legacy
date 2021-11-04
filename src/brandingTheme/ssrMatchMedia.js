import mediaQuery from "css-mediaquery";
import parser from "ua-parser-js";

const deviceType = (navigator && parser(navigator.userAgent).device.type) || "desktop";
const ssrMatchMedia = query => ({
  matches: mediaQuery.match(query, {
    width: deviceType === "mobile" ? "0px" : "1024px"
  })
});

export default ssrMatchMedia;