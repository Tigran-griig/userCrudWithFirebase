import { useMemo, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import MakeRequest from "../../../api/makeRequest";
import { firebaseAuth } from '@/lib/configs/firebaseConfig';
import { ENDPOINT_URLS, SIGN_IN } from "@/lib/constants/api";
import UserActions from "../../redux/actions/user";
import { useDispatch } from "react-redux";
import { setStorageItem } from "../../../api/storage";

export const useSignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({});
  const dispatch = useDispatch();
  const SignInSchema = useMemo(() => Yup.object().shape({
    email: Yup.string().email()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('email is required'),
    password: Yup.string()
      .min(6, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  }), []);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SignInSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      const { email, password } = values;
      new MakeRequest().postJson(ENDPOINT_URLS[SIGN_IN](firebaseAuth?.config?.apiKey), {
        email: email,
        password: password,
        returnSecureToken: true,
        returnIdpCredential:true,
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then((res) => {
          setStorageItem("user", {
            "refresh_token": res.refreshToken,
            "id_token": res.idToken,
          })
          setIsSubmitting(false);
          return dispatch(UserActions.setUserData(res));
        })
        .catch((err) => {
          setMessage({ type: "error", text: err.message })
          setIsSubmitting(false);
        });
    },
  });

  return {
    formik,
    isSubmitting,
    message,
    setMessage,
  }
};
