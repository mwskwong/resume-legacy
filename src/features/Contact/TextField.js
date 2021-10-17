import { FilledInput, FormControl, FormHelperText, InputLabel } from "@mui/material";
import { forwardRef, memo } from "react";

import PropTypes from "prop-types";

/**
 * This is a stripped down version of the MUI TextField.
 * Only essential features for the contact form are kept.
 */
const TextField = forwardRef((
  { name, fullWidth, label, autoComplete, required, onChange, error, helperText, multiline, rows },
  ref
) => (
  <FormControl ref={ref} fullWidth={fullWidth} required={required} error={error}>
    <InputLabel>{label}</InputLabel>
    <FilledInput
      name={name}
      autoComplete={autoComplete}
      onChange={onChange}
      multiline={multiline}
      rows={rows}
    />
    <FormHelperText>{helperText}</FormHelperText>
  </FormControl>
));

TextField.propTypes = {
  name: PropTypes.string,
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  autoComplete: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number
};
TextField.whyDidYouRender = true;
TextField.displayName = "TextField";

export default memo(TextField);