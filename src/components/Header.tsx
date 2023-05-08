import {
  IconButton,
  MobileNav,
  Navbar,
  Typography,
} from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// type Props = {}

const navList = (
  <ul className="mb-4 mt-2 flex flex-col gap-2 lg:my-0 lg:flex-row lg:items-center lg:gap-6">
    <Typography as="li" variant="small" className="p-1 font-bold">
      <Link
        href="/"
        className="flex items-center hover:text-teal-500 focus:text-teal-600"
      >
        Home
      </Link>
    </Typography>
    <Typography as="li" variant="small" className="p-1 font-bold">
      <Link
        href="/"
        className="flex items-center hover:text-teal-500 focus:text-teal-600"
      >
        About Us
      </Link>
    </Typography>
    <Typography as="li" variant="small" className="p-1 font-bold">
      <Link
        href="/"
        className="flex items-center hover:text-teal-500 focus:text-teal-600"
      >
        Our Services
      </Link>
    </Typography>
    <Typography as="li" variant="small" className="p-1 font-bold">
      <Link
        href="/"
        className="flex items-center hover:text-teal-500 focus:text-teal-600"
      >
        How It Works
      </Link>
    </Typography>
    <Typography as="li" variant="small" className="p-1 font-bold">
      <Link
        href="/"
        className="flex items-center hover:text-teal-500 focus:text-teal-600"
      >
        Business
      </Link>
    </Typography>
    <Typography as="li" variant="small" className="p-1 font-bold">
      <Link
        href="/"
        className="flex items-center hover:text-teal-500 focus:text-teal-600"
      >
        Contact Us
      </Link>
    </Typography>
  </ul>
);

const navListItems = (
  <ul className="flex flex-col gap-2 lg:my-0 lg:flex-row lg:items-center lg:gap-6">
    <Link href="https://www.instagram.com/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 hover:fill-current hover:text-pink-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    </Link>
    <Link href="https://twitter.com/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 hover:fill-current hover:text-blue-400"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
    </Link>
    <Link href="https://www.facebook.com/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 hover:fill-current hover:text-blue-700"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
    </Link>
  </ul>
);

// const Header = ({}: Props) => {
const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="sticky inset-0 h-24 max-w-full rounded-none bg-neutral-800 px-4 py-2 lg:px-8 lg:py-5">
      <div className="flex items-center justify-around text-white">
        <Link href="/">
          <Image
            src="/images/logoGoCellFix.png"
            width={194}
            height={60}
            alt="goCellFix Logo"
          />
        </Link>

        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="mr-4 hidden lg:block">{navListItems}</div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
};

export { Header };
