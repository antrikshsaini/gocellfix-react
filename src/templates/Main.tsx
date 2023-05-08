import type { ReactNode } from 'react';
import React from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  // OR export default function Main(props: IMainProps) { -- using this then export will not be required.

  return (
    <div className="w-full text-gray-700">
      {props.meta}

      <Header />

      <main className="content text-xl">
        {props.children}
        <img
          className="h-full w-full"
          src="images\bg-gocellfix.png"
          alt="Background"
        />
      </main>

      <Footer />
    </div>
  );
};

export { Main };
