import { AdminNavbar } from "@pages/admin/components/AdminNavbar";
import { Outlet } from "react-router-dom";
import { SplitScreen } from "@pages/admin/components/SplitScreen";
import { Container, useMediaQuery, useTheme } from "@mui/material";
import { useNavbar } from "@context/navbar.context";

export const AdminLayout = () => {
  const { open } = useNavbar();
  const theme = useTheme();
  const lessThanLarge = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <SplitScreen
      leftWeight={1}
      rightWeight={open ? 9 : 20}
      direction={lessThanLarge ? "column" : "row"}
    >
      <AdminNavbar />
      <Container>
        <Outlet />
      </Container>
    </SplitScreen>
  );
};
