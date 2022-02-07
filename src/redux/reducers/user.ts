export type UserType = {
  name: string,
  lastName: string,
  phone: number,
  email: string,
  address?:string,
  isAuth: boolean,
}

const initialState: UserType = {} as UserType;

export enum UserTypesEnum {
  USER_SET_DATA = "USER_SET_DATA",
}

interface UserProps {
  type: keyof typeof UserTypesEnum,
  payload: UserType,
}

export default (state: UserType = initialState, { type, payload }: UserProps) => {
  switch (type) {
    case UserTypesEnum.USER_SET_DATA:
      return {
        ...state,
        user: { ...payload, isAuth: true },
        isAuth: true
      };
    default:
      return state;
  }

}