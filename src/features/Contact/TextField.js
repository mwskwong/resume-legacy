import { FilledInput, FormControl, FormHelperText, InputLabel } from "@mui/material";

import PropTypes from "prop-types";
import { memo } from "react";
import { useController } from "react-hook-form";

/**
 * This is a stripped down version of the MUI TextField.
 * Only essential features for the contact form are kept.
 */
const TextField = ({ name, control, fullWidth, label, autoComplete, multiline, rows }) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, error }
  } = useController({ name: name, control: control });

  const helperTextId = `${name}-helper-text`;

  return (
    <FormControl fullWidth={fullWidth} error={invalid}>
      <InputLabel>{label}</InputLabel>
      <FilledInput
        inputRef={ref}
        autoComplete={autoComplete}
        multiline={multiline}
        rows={rows}
        aria-describedby={helperTextId}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      <FormHelperText id={helperTextId}>{error?.message || " "}</FormHelperText>
    </FormControl>
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object,
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  autoComplete: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number
};
TextField.whyDidYouRender = true;

export default memo(TextField);