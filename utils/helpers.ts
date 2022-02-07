import { getStorageItem } from "../api/storage";

export const removeKeyFromObject = <T>(obj: T, ...keys: Array<string>) => {
  return Object.keys(obj).reduce((acc, curr) => {
    return {
      ...acc,
      ...(keys.includes(curr) ? {} : { [curr]: obj[curr as keyof T] }),
    };
  }, {});
};

export const cloneDeep = (data: object | any) => JSON.parse(JSON.stringify(data));

//
// export const addHeaderParams = () => {
//   return {
//     authorization: getStorageItem('users')?.id_token,
//   };
// };
//
//
// export const handleRequestsErrors = (response = {}) => {
//   const errorMsg = response?.data?.message;
//   const errorObj = {
//     title: ERROR,
//     iconProps: {
//       icon: 'bc-icon-error',
//     },
//   };
//
//   switch (response?.status) {
//     case ERROR_CODES.UNAUTHORIZED:
//       errorObj.message = errorMsg || UNAUTHORIZED_ERROR;
//       AppControllerService.setAppStatus(APP_STATUSES.IS_LOGGED_OUT);
//       break;
//     case ERROR_CODES.BAD_REQUEST:
//     case ERROR_CODES.CONFLICT:
//       errorObj.message = errorMsg || BAD_REQUEST;
//       break;
//     case ERROR_CODES.NOT_FOUND:
//       if (response?.config?.url?.includes(ENDPOINT_URLS[PARTNER_CURRENCY_ALL_CONFIG_UPDATE]())) {
//         errorObj.message = NOT_FOUND_FOR_PARTNER_CURRENCY || errorMsg;
//       } else {
//         errorObj.message = WENT_WRONG;
//       }
//       break;
//     default:
//       errorObj.message = WENT_WRONG;
//       break;
//   }
//
//   Toaster?.error(errorObj);
// };