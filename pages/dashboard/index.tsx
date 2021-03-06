import { useRouter } from "next/router";
import { usePaths } from "../../src/lib/paths";
import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserType } from "../../src/redux/reducers/user";
import UserActions from "../../src/redux/actions/user";
import AdminLayout from "@/components/AdminLayout/Admin.Layout";

const DashboardPage = () => {

  return (
    <>
      <h1>Dashborad</h1>
    </>
  );
};

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default DashboardPage;
