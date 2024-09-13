import { FilledTextFieldProps, TextField } from "@mui/material";
import { capitalize } from "lodash";

export interface PrimaryTextFieldProps extends FilledTextFieldProps {}

export const PrimaryTextField = ({ id, ...props }: PrimaryTextFieldProps) => {
  return (
    <TextField
      id={id}
      name={id}
      label={capitalize(id)}
      placeholder={capitalize(id)}
      {...props}
    />
  );
};
