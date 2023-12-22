import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import type { TransitionProps } from '@mui/material/transitions';
import type { ReactElement, Ref } from 'react';
import { forwardRef, useRef } from 'react';
import { fadeTimeout, slideTimeout } from '~/config/general';

export const SlideUpTransition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const PageContainerTransition = (props: { children: ReactElement; in?: boolean }) => {
  const wrapper = useRef(null);

  // - divs are necessary because animations are crashing otherwise, at least for now
  // - since Slide needs a parent with overflow hidden, the potential box shadows of Cards are cut off, so we need a slight offset...
  return (
    <Box sx={{ overflow: 'hidden', m: -1, p: 1 }} ref={wrapper}>
      <Slide
        direction="right"
        in={props.in ?? true}
        mountOnEnter
        unmountOnExit
        timeout={slideTimeout}
        container={wrapper.current}
        easing={'cubic-bezier(0, 0.9, 0.2, 0.98)'}
      >
        <Box>
          <Fade in={props.in ?? true} timeout={fadeTimeout}>
            <Box>{props.children}</Box>
          </Fade>
        </Box>
      </Slide>
    </Box>
  );
};
