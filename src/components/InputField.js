import { FormControl, OutlinedInput } from "@mui/material";
import React from "react";

function InputField(props) {
  const {
    keyVal,
    labelText,
    placeholderText,
    optional,
    typeEmail,
    changetext,
    value,
  } = props;

  return (
    <div className="d-grid gap-2">
      <label className="form-label">
        {labelText}{" "}
        {optional ? <span className="fw-lighter">(optional)</span> : null}
      </label>
      <FormControl variant="outlined">
        {typeEmail ? (
          <OutlinedInput
            id={keyVal}
            value={value}
            placeholder={placeholderText}
            onChange={changetext(keyVal)}
          />
        ) : (
          <OutlinedInput
            id={keyVal}
            value={value}
            placeholder={placeholderText}
            onChange={changetext(keyVal)}
          />
        )}
      </FormControl>
    </div>
  );
}

export default InputField;
