import { Box, Stack, Typography } from "@mui/material";
import { BasicTable } from "@components/table/BasicTable";
import { TableChip } from "@components/TableChip";
import { QuickEditIcon } from "@components/icons/QuickEdit";
import { SvgIconButtonWrapper } from "@components/SvgIconButtonWrapper";
import { useGetUsersQuery } from "@graphql/user/user";
import { PrimaryButton } from "@components/primary_button";
import AddIcon from "@mui/icons-material/Add";
import { Paths } from "@constants/paths";
import { useEffect, useState } from "react";

function createData(
  id: string,
  name: string,
  email: string,
  role: string,
  status: string,
) {
  return { id, name, email, role, status };
}

enum EmployeeStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

function create_column(
  filed: string,
  headerName: string,
  renderCell: any = null,
) {
  return { filed, headerName, renderCell };
}

const rows = [
  createData("1", "test1", "test@testuni.com", "user", "active"),
  createData("2", "test2", "test1@testuni.com", "admin", "inactive"),
];

export const Employee = () => {
  const { data, error } = useGetUsersQuery();
  const employees = data?.users || [];
  const [rows, setRows] = useState([]);

  useEffect(() => {
    let rows = [];
    for (const employee of employees) {
      const { id, name, email, role, user_state } = employee;

      rows.push(createData(id, name, email, role.name, user_state.name));
    }
    setRows(rows);
  }, []);

  const columns = [
    create_column("name", "Name", (row: any) => row.name),
    create_column("email", "Email", (row: any) => row.email),
    create_column("role", "Role", (row: any) => row.role),
    create_column("active", "Active", (row: any) => (
      <TableChip
        label={row.status}
        backgroundColor={
          row.status == EmployeeStatus.ACTIVE ? "success.light" : "error.light"
        }
        color={
          row.status == EmployeeStatus.ACTIVE ? "success.dark" : "error.dark"
        }
      />
    )),
    create_column("actions", "", (row: any) => (
      <SvgIconButtonWrapper
        title="quick edit"
        onClick={() => console.log(row.name)}
      >
        <QuickEditIcon fontSize="small" />
      </SvgIconButtonWrapper>
    )),
  ];

  return (
    <Stack gap={2}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="h4">List</Typography>
          <Typography variant="body1">Dashboard * User * List</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <PrimaryButton href={Paths.NEW_USER} icon={<AddIcon />}>
            New user
          </PrimaryButton>
        </Box>
      </Box>
      <BasicTable rows={rows} columns={columns} />
    </Stack>
  );
};
