import React, { ReactElement } from 'react';
import AdminLayout from "@/components/AdminLayout/Admin.Layout";
import Table from "../../src/components/CustomersTable"
import DataService from "../../services/data.service";
import { ADMIN_GET_USERS, ENDPOINT_URLS } from "@/lib/constants/api";

const Customers = ({ customers }: any) => {
  console.log(customers, "responseresponse")

  if(!customers?.length){
    return <div>Not found</div>
  }

  return (
    <>
      <Table data={customers}/>
    </>
  );
};
Customers.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Customers;

export const getStaticProps = async () => {
  let response = await DataService.getJson(ENDPOINT_URLS[ADMIN_GET_USERS]())
  return {
    props: {
      customers: response
    }
  }
}