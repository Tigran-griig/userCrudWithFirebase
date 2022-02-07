import React, { ReactElement, ReactNode, useEffect } from "react";
import { Provider, useDispatch } from 'react-redux';
import type { AppProps } from 'next/app'
import store from '../src/redux/store';
import { NextPage } from "next";
import UserActions from "../src/redux/actions/user";


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return (
    <Provider store={store}>
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  );
}

export default MyApp