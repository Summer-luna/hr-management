import { AdminLayout } from "@pages/admin/AdminLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Paths } from "@constants/paths";
import { NavbarProvider } from "@context/navbar.context";
import { Employee } from "@pages/employee/Employee";
import { SettingsProvider } from "@context/setting.context.js";
import { GraphqlProvider } from "@graphql/graphql-provider";
import { EmployeeCreateForm } from "@pages/employee/components/form/EmployeeCreateForm";

function App() {
  return (
    <Router>
      <SettingsProvider>
        <GraphqlProvider>
          <NavbarProvider>
            <Routes>
              <Route path={Paths.ADMIN} element={<AdminLayout />}>
                <Route path={Paths.EMPLOYEE_lIST} element={<Employee />} />
                <Route path={Paths.NEW_USER} element={<EmployeeCreateForm />} />
              </Route>
            </Routes>
          </NavbarProvider>
        </GraphqlProvider>
      </SettingsProvider>
    </Router>
  );
}

export default App;
