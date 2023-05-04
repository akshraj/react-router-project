import { Navigate, Outlet } from "react-router-dom";
import { getUserFromLocalStorage } from "../../utils";
function AuthRequiredLayout() {
  const userToken = getUserFromLocalStorage();
  if (!userToken) {
    return (
      <Navigate to="/login" state={{ message: "Your must login first" }} />
    );
  }
  return <Outlet />;
}

export default AuthRequiredLayout;
