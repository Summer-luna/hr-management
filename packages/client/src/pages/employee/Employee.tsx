import { Stack } from "@mui/material";
import { BasicTable } from "@components/table/BasicTable";
import { TableChip } from "@components/TableChip";
import { QuickEditIcon } from "@components/icons/QuickEdit";
import { SvgIconButtonWrapper } from "@components/SvgIconButtonWrapper";
import { useGetUsersQuery } from "@graphql/user/user";

function createData(id: string, name: string, email: string, status: string) {
  return { id, name, email, status };
}

enum EmployeeStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

function create_column(
  filed: string,
  headerName: string,
  renderCell: any = null,
) {
  return { filed, headerName, renderCell };
}

const rows = [
  createData("1", "test1", "test@testuni.com", "ACTIVE"),
  createData("2", "test2", "test1@testuni.com", "INACTIVE"),
];

export const Employee = () => {
  const { data, error } = useGetUsersQuery();
  const employees = data?.users || [];

  console.log(employees);
  console.log(error);

  const columns = [
    create_column("name", "Name", (row: any) => row.name),
    create_column("email", "Email", (row: any) => row.email),
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
      <Stack>Header</Stack>
      <BasicTable rows={rows} columns={columns} />
    </Stack>
  );
};
