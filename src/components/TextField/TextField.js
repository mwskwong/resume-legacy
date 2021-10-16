import { FormControl, FormHelperText, InputLabel, OutlinedInput } from "@mui/material";
import { forwardRef, memo } from "react";

import PropTypes from "prop-types";

const TextField = forwardRef(({
  name,
  color,
  fullWidth,
  label,
  autoComplete,
  onChange,
  error,
  helperText,
  required,
  multiline,
  rows,
  value
}, ref) => {
  return (
    <FormControl
      ref={ref}
      color={color}
      error={error}
      fullWidth={fullWidth}
      required={required}
    >
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <OutlinedInput
        id={name}
        name={name}
        onChange={onChange}
        label={label}
        autoComplete={autoComplete}
        aria-describedby={`${name}-helper-text`}
        multiline={multiline}
        rows={rows}
        value={value}
      />
      <FormHelperText id={`${name}-helper-text`}>
        {helperText}
      </FormHelperText>
    </FormControl>
  );
});

TextField.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  autoComplete: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  required: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  value: PropTypes.string
};

TextField.whyDidYouRender = true;
TextField.displayName = "TextField";

export default memo(TextField);