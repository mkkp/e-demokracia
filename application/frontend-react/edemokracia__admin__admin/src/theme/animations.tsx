import { forwardRef } from 'react';
import type { ReactElement, ReactNode, Ref } from 'react';
import { useRef, createContext, useContext, useState } from 'react';
import { Slide } from '@mui/material';
import type { DialogProps } from '@mui/material';
import type { TransitionProps } from '@mui/material/transitions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { animationDuration, delayDuration } from '~/config/general';

export const SlideUpTransition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const pageContainerMotion = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { delay: delayDuration, duration: animationDuration } },
  exit: { opacity: 0, x: -50, transition: { delay: delayDuration, duration: animationDuration } },
};

export const PageContainerTransition = ({ children }: { children: ReactElement }) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div initial="initial" animate="animate" exit="exit" variants={pageContainerMotion}>
        {children}
      </m.div>
    </LazyMotion>
  );
};
