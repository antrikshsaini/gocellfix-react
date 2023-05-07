// import { useRouter } from 'next/router';

// import { Meta } from '@/layouts/Meta';
// import { Main } from '@/templates/Main';

// const Index = () => {
//   const router = useRouter();

//   return (
//     <Main
//       meta={
//         <Meta
//           title="Next.js Boilerplate Presentation"
//           description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
//         />
//       }
//     >
//       <a href="https://github.com/ixartz/Next-js-Boilerplate">
//         <img
//           src={`${router.basePath}/assets/images/nextjs-starter-banner.png`}
//           alt="Nextjs starter banner"
//         />
//       </a>
//       <h2 className="text-2xl font-bold">
//         Boilerplate code for your Nextjs project with Tailwind CSS
//       </h2>
//       <p>
//         <span role="img" aria-label="rocket">
//           🚀
//         </span>{' '}
//         Next.js Boilerplate is a starter code for your Next js project by
//         putting developer experience first .{' '}
//         <span role="img" aria-label="zap">
//           ⚡️
//         </span>{' '}
//         Made with Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged,
//         VSCode, Netlify, PostCSS, Tailwind CSS.
//       </p>
//       <h3 className="text-lg font-semibold">Next js Boilerplate Features</h3>
//       <p>Developer experience first:</p>
//       <ul>
//         <li>
//           <span role="img" aria-label="fire">
//             🔥
//           </span>{' '}
//           <a href="https://nextjs.org" rel="nofollow">
//             Next.js
//           </a>{' '}
//           for Static Site Generator
//         </li>
//         <li>
//           <span role="img" aria-label="art">
//             🎨
//           </span>{' '}
//           Integrate with{' '}
//           <a href="https://tailwindcss.com" rel="nofollow">
//             Tailwind CSS
//           </a>
//         </li>
//         <li>
//           <span role="img" aria-label="nail_care">
//             💅
//           </span>{' '}
//           PostCSS for processing Tailwind CSS
//         </li>
//         <li>
//           <span role="img" aria-label="tada">
//             🎉
//           </span>{' '}
//           Type checking Typescript
//         </li>
//         <li>
//           <span role="img" aria-label="pencil2">
//             ✏️
//           </span>{' '}
//           Linter with{' '}
//           <a href="https://eslint.org" rel="nofollow">
//             ESLint
//           </a>
//         </li>
//         <li>
//           <span role="img" aria-label="hammer_and_wrench">
//             🛠
//           </span>{' '}
//           Code Formatter with{' '}
//           <a href="https://prettier.io" rel="nofollow">
//             Prettier
//           </a>
//         </li>
//         <li>
//           <span role="img" aria-label="fox_face">
//             🦊
//           </span>{' '}
//           Husky for Git Hooks
//         </li>
//         <li>
//           <span role="img" aria-label="no_entry_sign">
//             🚫
//           </span>{' '}
//           Lint-staged for running linters on Git staged files
//         </li>
//         <li>
//           <span role="img" aria-label="no_entry_sign">
//             🗂
//           </span>{' '}
//           VSCode configuration: Debug, Settings, Tasks and extension for
//           PostCSS, ESLint, Prettier, TypeScript
//         </li>
//         <li>
//           <span role="img" aria-label="robot">
//             🤖
//           </span>{' '}
//           SEO metadata, JSON-LD and Open Graph tags with Next SEO
//         </li>
//         <li>
//           <span role="img" aria-label="robot">
//             ⚙️
//           </span>{' '}
//           <a
//             href="https://www.npmjs.com/package/@next/bundle-analyzer"
//             rel="nofollow"
//           >
//             Bundler Analyzer
//           </a>
//         </li>
//         <li>
//           <span role="img" aria-label="rainbow">
//             🌈
//           </span>{' '}
//           Include a FREE minimalist theme
//         </li>
//         <li>
//           <span role="img" aria-label="hundred">
//             💯
//           </span>{' '}
//           Maximize lighthouse score
//         </li>
//       </ul>
//       <p>Built-in feature from Next.js:</p>
//       <ul>
//         <li>
//           <span role="img" aria-label="coffee">
//             ☕
//           </span>{' '}
//           Minify HTML &amp; CSS
//         </li>
//         <li>
//           <span role="img" aria-label="dash">
//             💨
//           </span>{' '}
//           Live reload
//         </li>
//         <li>
//           <span role="img" aria-label="white_check_mark">
//             ✅
//           </span>{' '}
//           Cache busting
//         </li>
//       </ul>
//       <h3 className="text-lg font-semibold">Our Stater code Philosophy</h3>
//       <ul>
//         <li>Minimal code</li>
//         <li>SEO-friendly</li>
//         <li>
//           <span role="img" aria-label="rocket">
//             🚀
//           </span>{' '}
//           Production-ready
//         </li>
//       </ul>
//       <p>
//         Check our GitHub project for more information about{' '}
//         <a href="https://github.com/ixartz/Next-js-Boilerplate">
//           Nextjs Boilerplate
//         </a>
//         . You can also browse our{' '}
//         <a href="https://creativedesignsguru.com/category/nextjs/">
//           Premium NextJS Templates
//         </a>{' '}
//         on our website to support this project.
//       </p>
//     </Main>
//   );
// };

// export default Index;

import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
 
export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Material Tailwind
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>Buy Now</span>
            </Button>
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
        <MobileNav open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </MobileNav>
      </Navbar>
      <div className="mx-auto max-w-screen-md py-12">
        <Card className="mb-12 overflow-hidden">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
          />
        </Card>
        <Typography variant="h2" color="blue-gray" className="mb-2">
          What is Material Tailwind
        </Typography>
        <Typography color="gray" className="font-normal">
          Can you help me out? you will get a lot of free exposure doing this
          can my website be in english?. There is too much white space do less
          with more, so that will be a conversation piece can you rework to make
          the pizza look more delicious other agencies charge much lesser can
          you make the blue bluer?. I think we need to start from scratch can my
          website be in english?, yet make it sexy i&apos;ll pay you in a week
          we don&apos;t need to pay upfront i hope you understand can you make
          it stand out more?. Make the font bigger can you help me out? you will
          get a lot of free exposure doing this that&apos;s going to be a chunk
          of change other agencies charge much lesser. Are you busy this
          weekend? I have a new project with a tight deadline that&apos;s going
          to be a chunk of change. There are more projects lined up charge extra
          the next time.
        </Typography>
      </div>
    </>
  );
}