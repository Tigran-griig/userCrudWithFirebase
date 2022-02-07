import React from 'react';
import { UserType } from "../../redux/reducers/user";
import styles from "./AdminLayout.module.css";

interface NavbarProps {
  user: {
    isAuth: boolean,
    user: UserType
  };
}

const Navbar = ({ user }: NavbarProps) => {
  return (
    <div className={styles.navbar}>
      <h1>Hello {user.user.email}</h1>
    </div>
  );
};

export default Navbar;