import { Divider, styled } from "@mui/material";
import { Home, AssignmentInd, WatchLater } from "@mui/icons-material";
import { Paths } from "@constants/paths";
import { SideListItem } from "@pages/admin/components/SideListItem";
import { SideList } from "@pages/admin/components/SideList";

export const AdminNavbar = () => {
  const Nav = styled("nav")(({ theme }) => ({
    padding: "0 1rem",
    borderRight: `1px dashed rgba(145, 158, 171, 0.2)`,
    backgroundColor: "white",
    height: "100vh",
    color: theme.palette.grey["600"],
  }));

  return (
    <Nav>
      <SideList>
        <SideListItem
          path={Paths.EMPLOYEE_lIST}
          icon={<AssignmentInd sx={{ color: "customColors.iconColor" }} />}
          text="Employees"
        />
        <Divider />
        <SideListItem
          path={Paths.TRACK}
          icon={<WatchLater sx={{ color: "customColors.iconColor" }} />}
          text="Time Entry"
        />
      </SideList>
    </Nav>
  );
};
