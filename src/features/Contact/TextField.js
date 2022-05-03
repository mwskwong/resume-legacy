import { FilledInput, FormControl, FormHelperText, InputLabel } from "@mui/material";

import PropTypes from "prop-types";
import { memo } from "react";
import { useController } from "react-hook-form";

/**
 * This is a stripped down version of the MUI TextField.
 * Only essential features for the contact form are kept.
 */
const TextField = ({ name, control, label, autoComplete, multiline, rows, disabled }) => {
  const {
    field: { ref, ...field },
    fieldState: { error }
  } = useController({ name, control });

  const inputId = `${name}-input`;
  const helperTextId = `${name}-helper-text`;

  return (
    <FormControl fullWidth error={Boolean(error)} disabled={disabled}>
      <InputLabel htmlFor={inputId}>{label}</InputLabel>
      <FilledInput
        inputRef={ref}
        {...field}
        id={inputId}
        aria-describedby={helperTextId}
        autoComplete={autoComplete}
        multiline={multiline}
        rows={rows}
      />
      <FormHelperText id={helperTextId}>{error?.message || " "}</FormHelperText>
    </FormControl>
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object,
  label: PropTypes.string,
  autoComplete: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  disabled: PropTypes.bool
};
TextField.whyDidYouRender = true;

export default memo(TextField);