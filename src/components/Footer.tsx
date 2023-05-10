import { Typography } from '@material-tailwind/react';

const Footer = () => {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center border-t bg-gray-600 text-white md:justify-between">
      <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
        <li>
          <Typography
            as="a"
            href="#"
            color="inherit"
            className="font-semibold transition-colors hover:text-teal-500 focus:text-teal-600"
          >
            Our Services
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="inherit"
            className="font-semibold transition-colors hover:text-teal-500 focus:text-teal-600"
          >
            How It Works
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="inherit"
            className="font-semibold transition-colors hover:text-teal-500 focus:text-teal-600"
          >
            Business
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="inherit"
            className="font-semibold transition-colors hover:text-teal-500 focus:text-teal-600"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
      GoCellFix© Copyright {new Date().getFullYear()}. All Rights Reserved
    </footer>
  );
};

export { Footer };
