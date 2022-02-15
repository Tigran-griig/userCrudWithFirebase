import { UserType, UserTypesEnum } from "../reducers/user";
import { Dispatch } from "redux";
import MakeRequest from "../../../api/makeRequest";
import { ENDPOINT_URLS, SIGN_IN, SIGN_IN_WITH_TOKEN } from "@/lib/constants/api";
import { firebaseAuth } from "@/lib/configs/firebaseConfig";
import { getStorageItem, removeStorageItem, setStorageItem } from "../../../api/storage";
import { NextRouter } from 'next/router'
import { OptionalQuery } from "../../../pages/account/login";

const CustomerActions = {
  setUCustomerData: (data: UserType) => ({
    type: UserTypesEnum.USER_SET_DATA,
    payload: data
  }),

  getCustomerData: () => async (dispatch: Dispatch) => {
    const id_token  = getStorageItem("id_token");
    if (id_token) {
      try {
        const response = await new MakeRequest().postJson(ENDPOINT_URLS[SIGN_IN_WITH_TOKEN](firebaseAuth?.config?.apiKey), {
          idToken: `${id_token}`,
        }, {
          headers: {
            "Content-Type": "application/json",
          }
        })
        const { users } = response;
        dispatch(CustomerActions.setUCustomerData(users[0]))
        return users;
      } catch (err) {
          removeStorageItem("user")
        }
    }
  },
}

export default CustomerActions