import { Outlet } from "react-router-dom";
 import UserHeader from "../../components/user/UserHeader";

const UserLayout = () => {
  return (
    <div>
      <UserHeader />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
