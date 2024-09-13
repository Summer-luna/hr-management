import * as Yup from "yup";
import { Form, Formik } from "formik";
import { Box, Button, MenuItem, Stack, Typography } from "@mui/material";
import { ObserverTextInput } from "@components/observer_text_input";
import { useCreateUserMutation } from "@graphql/user/user";
import { GetUsersDocument } from "@graphql/user/user";

const FormValidation = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  role: Yup.string().required("Required"),
  status: Yup.string().required("Required"),
});

interface EmployeeFormType {
  name: string;
  email: string;
  role: number;
  status: number;
}

const initialValue: EmployeeFormType = {
  name: "",
  email: "",
  role: 1,
  status: 1,
};

export const EmployeeCreateForm = () => {
  const [createUser] = useCreateUserMutation();

  const createNewUser = async (values: EmployeeFormType) => {
    await createUser({
      variables: {
        user: {
          name: values.name,
          email: values.email,
          role_id: values.role,
          user_state_id: values.status,
        },
      },
      refetchQueries: [GetUsersDocument],
    });
  };

  return (
    <Box>
      <Box>
        <Typography variant="h5">Create a new user</Typography>
        <Typography>Dashboard * User * New user</Typography>
      </Box>
      <Formik
        initialValues={initialValue}
        validationSchema={FormValidation}
        onSubmit={(values) => createNewUser(values)}
      >
        <Form>
          <Stack
            sx={{
              gap: 3,
              marginTop: "2rem",
            }}
          >
            <ObserverTextInput id="name" type="text" variant="filled" />
            <ObserverTextInput id="email" type="email" variant="filled" />

            <ObserverTextInput select id="role" variant="filled">
              <MenuItem value="0">User</MenuItem>
              <MenuItem value="1">Admin</MenuItem>
            </ObserverTextInput>

            <ObserverTextInput id="status" select variant="filled">
              <MenuItem value="0">Active</MenuItem>
              <MenuItem value="1">Inactive</MenuItem>
            </ObserverTextInput>
            <Button type="submit">Create user</Button>
          </Stack>
        </Form>
      </Formik>
    </Box>
  );
};
