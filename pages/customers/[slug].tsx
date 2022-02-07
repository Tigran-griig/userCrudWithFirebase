import React, { ReactElement } from 'react';
import AdminLayout from "@/components/AdminLayout/Admin.Layout";
import { RegisterForm } from "@/components/RegisterForm/RegisterForm";

const Customer = () => {
  return (
    <div>
      <RegisterForm mode={"EDIT"}/>
    </div>
  );
};

Customer.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Customer;
