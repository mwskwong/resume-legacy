import { FormControl, FormHelperText, InputLabel, OutlinedInput } from "@mui/material";

import PropTypes from "prop-types";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
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
  rows
}, ref) => {
  return (
    <FormControl
      ref={ref}
      color={color}
      error={error}
      fullWidth={fullWidth}
      required={required}
    >
      <InputLabel htmlFor="input">{label}</InputLabel>
      <OutlinedInput
        id="input"
        name={name}
        onChange={onChange}
        label={label}
        autoComplete={autoComplete}
        aria-describedby="helper-text"
        multiline={multiline}
        rows={rows}
      />
      <FormHelperText id="helper-text">
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
  rows: PropTypes.number
};

TextField.whyDidYouRender = true;

export default TextField;