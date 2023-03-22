import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import { useEffect } from "react";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {
    if (!token) {
      return;
    }
    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, 1000 * 60 * 60);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
