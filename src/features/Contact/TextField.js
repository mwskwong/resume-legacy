import { FilledInput, FormControl, FormHelperText, InputLabel } from "@mui/material";
import { forwardRef, memo } from "react";

import PropTypes from "prop-types";

/**
 * This is a stripped down version of the MUI TextField.
 * Only essential features for the contact form are kept.
 */
const TextField = forwardRef((props, ref) => (
  <FormControl ref={ref} fullWidth={props.fullWidth} required={props.required} error={props.error}>
    <InputLabel>{props.label}</InputLabel>
    <FilledInput
      autoComplete={props.autoComplete}
      onChange={props.onChange}
      multiline={props.multiline}
      rows={props.rows}
      aria-describedby={`${props.label}-helper-text`}
      inputProps={props.inputProps}
    />
    <FormHelperText id={`${props.label}-helper-text`}>{props.helperText}</FormHelperText>
  </FormControl>
));

TextField.propTypes = {
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  autoComplete: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  inputProps: PropTypes.object
};
TextField.whyDidYouRender = true;
TextField.displayName = "TextField";

export default memo(TextField);