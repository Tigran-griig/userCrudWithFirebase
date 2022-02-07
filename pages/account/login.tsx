import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
import { usePaths } from "../../src/lib/paths";

import { useSelector } from "react-redux";
import { UserType } from "../../src/redux/reducers/user";
import Layout from "../../src/components/Layout/Layout";
import styles from "/styles/Account.module.css";
import LoginForm from "../../src/components/LoginForm/LoginForm";
import { RegisterForm } from "@/components/RegisterForm/RegisterForm";

export type OptionalQuery = {
  next?: string;
};

const LoginPage = () => {
  const router = useRouter();
  const paths = usePaths();
  const { user } = useSelector((state: { user: UserType }) => state)
  const redirectURL = router.query.next?.toString() || paths.dashboard.$url();

  useEffect(() => {
    if (user?.isAuth) {
      void router.push(redirectURL)
    }
  }, [user])

  return (
    <div className={styles.main}>
          <LoginForm/>
    </div>
  );
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default LoginPage;



