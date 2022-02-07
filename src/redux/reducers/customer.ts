export type CustomerType = {
  firsName: string,
  lastName: string,
  phone: number | string,
  email: string,
  address: string,
}

const initialState: CustomerType[] = [{} as CustomerType];

export enum CustomerTypesEnum {
  CUSTOMERS_SET_DATA = "CUSTOMERS_SET_DATA",
}

interface CustomerProps {
  type: keyof typeof CustomerTypesEnum,
  payload: CustomerType,
}

export default (state: CustomerType[] = initialState, { type, payload }: CustomerProps) => {
  switch (type) {
    case CustomerTypesEnum.CUSTOMERS_SET_DATA:
      return {
        ...state,
        user: { ...payload, isAuth: true },
        isAuth: true
      };
    default:
      return state;
  }

}