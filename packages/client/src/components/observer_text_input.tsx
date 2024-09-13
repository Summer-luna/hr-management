import { useFormikContext } from "formik";
import { FormControl, TextFieldProps } from "@mui/material";
import { PrimaryTextField } from "@components/primary_text_field";

export type ObserverTextInputProps = TextFieldProps & {
  id: string;
};

export const ObserverTextInput = (props: ObserverTextInputProps) => {
  const { handleChange, handleBlur, values, touched, errors, isSubmitting } =
    useFormikContext<any>();
  return (
    <FormControl variant={props.variant} fullWidth={props.fullWidth}>
      <PrimaryTextField
        {...props}
        onWheel={(e) => {
          e.currentTarget.blur();
          e.stopPropagation();
        }}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[props.id]}
        disabled={props.disabled || isSubmitting}
        variant="filled"
        error={!!errors[props.id]}
        helperText={(touched[props.id] && errors[props.id]) as string}
      />
    </FormControl>
  );
};
