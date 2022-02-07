import React, { useMemo, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ADMIN_CREATE_USER, ENDPOINT_URLS, SIGN_UP } from "@/lib/constants/api";
import UserActions from "../../redux/actions/user";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { usePaths } from "@/lib/paths";
import DataService from "../../../services/data.service";
import CustomerActions from "../../redux/actions/customer";

export const useSignUp = (mode:string) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({});
  const dispatch = useDispatch();
  const router = useRouter();
  const paths = usePaths();
  const SignInSchema = useMemo(() => Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('first name is required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('name is required'),
    email: Yup.string().email()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('email is required'),
    phone: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Phone is required'),
    address: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('address is required'),
    password: Yup.string()
      .min(6, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  }), []);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      password: '',
    },
    validationSchema: SignInSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      const { firstName, lastName, phone, password, email } = values;
      try {
        await DataService.postJson(ENDPOINT_URLS[ADMIN_CREATE_USER](), {
          email: values.email,
          password: values.password,
          firstName:values.firstName,
          lastName:values.lastName,
          address:values.address,
          phone:values.phone,
        }, {
          headers: {
            "Content-Type": "application/json",
          }
        })
          .then((res) => {
            router.push(paths.customers.$url());
            return  dispatch(CustomerActions.getCustomerData());
          })
          .catch((err) => {
           setMessage({type:"error",text:err.message})
          });
        setIsSubmitting(false);

      } catch (err) {
        setIsSubmitting(false);
      }

    },
  });
  return {
    formik,
    isSubmitting,
    message,
    setMessage,
  }
};
