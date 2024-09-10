import React, { FC, useState } from "react";
import { Box, Button, Chip, IconButton, Stack, Tooltip } from "@mui/material";
import { BasicTable } from "@components/table/BasicTable";

interface EmployeeTableProps {
  data: any[];
}

export const EmployeeTable: FC<EmployeeTableProps> = ({ data }) => {
  const columns: any[] = [
    {
      field: "name",
      headerName: "Employee NAME",
      width: 150,
    },
    { field: "email", headerName: "EMAIL", width: 130 },
    {
      field: "status",
      headerName: "Status",
      renderCell: (row: any) => (
        <Chip
          label={row.status}
          sx={{
            backgroundColor:
              row.status === "Active" ? "success.light" : "error.light",
            color: row.status === "Active" ? "success.main" : "error.main",
            padding: "0 10px",
            borderRadius: "8px",
            fontWeight: "medium",
          }}
        />
      ),
      width: 150,
    },
    {
      field: "actions",
      headerName: "",
      headerAlign: "right",
      align: "right",
      renderCell: (row: any) => (
        <Stack direction="row" gap={2} justifyContent="end">
          <Tooltip title="Edit">
            <IconButton></IconButton>
          </Tooltip>
          <IconButton></IconButton>
        </Stack>
      ),
    },
  ];

  // const ToolBar = (
  //   <>
  //     <Stack direction="row" justifyContent="space-between" mb={5}>
  //       <Typography variant="h6">All Employees</Typography>
  //     </Stack>
  //     <Stack direction="row" gap={2} mb={3}>
  //       <DropDownMenu data={dropdownData} onChange={handleDropdownOnChange} label="Status" name="employee-status-dropdown" id="employee-status-dropdown" value={filter} />
  //       <SearchBar id="search projects" value={searchText} setValue={setSearchText} />
  //     </Stack>
  //   </>
  // );

  const keyFun = (row: any) => row.id;

  return (
    <Box>
      <BasicTable
        rows={[]}
        columns={columns}
        keyFun={keyFun}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
      />
      {data.length === 0 && (
        <Box>
          <Button sx={{ width: "100%", height: "200px", fontSize: "1.2rem" }}>
            Add Your First Employee
          </Button>
        </Box>
      )}
    </Box>
  );
};
