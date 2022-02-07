import React, { ReactElement } from 'react';
import { RegisterForm } from "@/components/RegisterForm/RegisterForm";
import styles from "/styles/Customer.module.css";
import AdminLayout from "@/components/AdminLayout/Admin.Layout";

const Add = () => {
  return (
    <div className={styles.addRoot}>
      <RegisterForm mode={"CREATE"}/>
    </div>
  );
};


Add.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Add