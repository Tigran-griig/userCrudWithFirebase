import React, { useEffect } from "react";
import styles from "./AdminLayout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { UserType } from "../../redux/reducers/user";
import Navbar from "./Navbar";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from "next/link";
import { usePaths } from "@/lib/paths";
import useWindowSize from "../../hooks/useWindowSize";
import { useRouter } from "next/router";
import UserActions from "../../redux/actions/user";

export interface AdminLayoutProps {
  children?: React.ReactNode;
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { user } = useSelector((state: { user: { isAuth: boolean, user: UserType } }) => state);
  const paths = usePaths();
  const [value, setValue] = React.useState(0);
  const { width } = useWindowSize();
  const router = useRouter();
  const redirectURL = paths.account.login.$url();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user?.isAuth) {
      dispatch(UserActions.getUserData(redirectURL, router))
    }
  }, [user])

  return (
    <>
      {!!user?.isAuth && <Navbar user={user}/>}
      <main className={styles.main}>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            height: "auto",
            marginRight: width > 768 ? '15px' : "",
            padding: width > 768 ? "0 20px" : "",
            minWidth: "150",
            flexDirection: width > 768 ? "row" : "column"
          }}
        >
          <Tabs
            orientation={width > 768 ? "vertical" : "horizontal"}
            variant="scrollable"
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider', marginRight: width > 768 ? "15px" : "", minWidth: "140px" }}
            value={value}
          >
            <Link href={paths.dashboard.$url()}>
              <a style={{ color: "black" }} onClick={() => setValue(0)}>
                <Tab label="Dashboard" {...a11yProps(0)}/>
              </a>
            </Link>
            <Link href={paths.customers.$url()}>
              <a style={{ color: "black" }}>
                <Tab label="Customers" {...a11yProps(1)} onClick={() => setValue(1)}/>
              </a>
            </Link>
          </Tabs>
          <div style={{ width: "100%", padding: width > 768 ? "0 20px" : "", marginTop: width < 768 ? "20px" : "" }}>
            {children}
          </div>
        </Box>
      </main>
    </>
  );
};

export default AdminLayout;
