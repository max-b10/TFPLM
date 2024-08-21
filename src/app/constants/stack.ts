import {
  SiTypescript,
  SiCypress,
  SiRedux,
  SiAxios,
  SiSwr,
  SiShadcnui,
  SiFramer,
  SiNextdotjs,
  SiJest,
  SiStorybook,
} from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';

export const stack = [
  {
    title: 'React',
    icon: FaReact,
    description: 'A JavaScript library for building user interfaces',
    comments: 'My frontend library of choice for the foreseeable future.',
  },
  {
    title: 'TypeScript',
    icon: SiTypescript,
    description:
      'A statically typed superset of JavaScript that compiles to plain JavaScript',
    comments:
      'Static typing, early error detection and wide general adoption across codebases makes TypeScript a no-brainer.',
  },
  {
    title: 'Tailwind',
    icon: RiTailwindCssFill,
    description:
      'A utility-first CSS framework for rapidly building custom user interfaces',
    comments:
      'I have been converted into a fan of Tailwind. Make sure you have the Tailwind CSS IntelliSense extension!',
  },
  {
    title: 'shadcn/ui',
    icon: SiShadcnui,
    description:
      'An accessible and customisable collection of components to copy and paste into your apps',
    comments:
      'I had to see what all the fuss what about - I was not disappointed!',
  },
  {
    title: 'Redux',
    icon: SiRedux,
    description: 'A predictable state container for JavaScript apps',
    comments: 'Redux Toolkit to be precise. Who wants all that boilerplate?',
  },
  {
    title: 'Axios',
    icon: SiAxios,
    description: 'A promise-based HTTP client for the browser and node.js',
    comments:
      'Axios automatically stringifies the data when sending requests which means one less step than fetch.',
  },
  {
    title: 'useSWR',
    icon: SiSwr,
    description: 'A React Hooks library for remote data fetching',
    comments:
      'This app has no POST, PUT or DELETE requests, so I chose SWR over react-query.',
  },
  {
    title: 'Cypress',
    icon: SiCypress,
    description:
      'An end-to-end testing framework designed to simplify the testing process',
    comments:
      'Cypress makes it nice and easy to write tests and see them run in real-time.',
  },
  {
    title: 'Framer Motion',
    icon: SiFramer,
    description:
      'Framer Motion is a simple yet powerful motion library for React.',
    comments: "I don't want gimmicky, I want a smooth and professional UX.",
  },
  {
    title: 'Next.js',
    icon: SiNextdotjs,
    description: 'A React framework for production',
    comments:
      'Provides server-side rendering and generating static websites for React based web applications.',
  },
  {
    title: 'Jest',
    icon: SiJest,
    description:
      'A delightful JavaScript Testing Framework with a focus on simplicity.',
    comments:
      'It works out of the box for any React project and has great community support.',
  },
  {
    title: 'Storybook',
    icon: SiStorybook,
    description:
      'An open source tool for developing UI components in isolation for React, Vue, and Angular.',
    comments: 'It makes building stunning UIs organized and efficient.',
  },
];
export const STACK_LENGTH = 13;
