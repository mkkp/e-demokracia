//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Transitions.tsx'
// Template name: actor/src/layout/Transitions.tsx
// Template file: actor/src/layout/Transitions.tsx.hbs

import { forwardRef } from 'react';
import type { CSSProperties, ExoticComponent, ReactElement, Ref } from 'react';
import { Collapse, Fade, Box, Grow, Slide, Zoom } from '@mui/material';
import type { ZoomProps } from '@mui/material';

export interface TransitionProps {
  children?: ReactElement;
  position?: string;
  sx?: CSSProperties;
  in?: boolean;
  type?: string;
  direction?: 'up' | 'right' | 'left' | 'down';
  [others: string]: any;
}

export const Transitions = forwardRef(
  (
    { children, position = 'top-left', sx, type = 'grow', direction = 'up', ...others }: TransitionProps,
    ref: Ref<ExoticComponent>,
  ) => {
    let positionSX = {
      transformOrigin: '0 0 0',
    };

    switch (position) {
      case 'top-right':
        positionSX = {
          transformOrigin: 'top right',
        };
        break;
      case 'top':
        positionSX = {
          transformOrigin: 'top',
        };
        break;
      case 'bottom-left':
        positionSX = {
          transformOrigin: 'bottom left',
        };
        break;
      case 'bottom-right':
        positionSX = {
          transformOrigin: 'bottom right',
        };
        break;
      case 'bottom':
        positionSX = {
          transformOrigin: 'bottom',
        };
        break;
      case 'top-left':
      default:
        positionSX = {
          transformOrigin: '0 0 0',
        };
        break;
    }

    return (
      <Box ref={ref}>
        {type === 'grow' && (
          <Grow
            {...others}
            timeout={{
              appear: 0,
              enter: 150,
              exit: 150,
            }}
          >
            <Box sx={positionSX}>{children}</Box>
          </Grow>
        )}

        {type === 'collapse' && (
          <Collapse {...others} sx={positionSX}>
            {children}
          </Collapse>
        )}

        {type === 'fade' && (
          <Fade
            {...others}
            timeout={{
              appear: 0,
              enter: 300,
              exit: 150,
            }}
          >
            <Box sx={positionSX}>{children}</Box>
          </Fade>
        )}

        {type === 'slide' && (
          <Slide
            {...others}
            timeout={{
              appear: 0,
              enter: 150,
              exit: 150,
            }}
            direction={direction}
          >
            <Box sx={positionSX}>{children}</Box>
          </Slide>
        )}

        {type === 'zoom' && (
          <Zoom {...others}>
            <Box sx={positionSX}>{children}</Box>
          </Zoom>
        )}
      </Box>
    );
  },
);

export const PopupTransition = forwardRef(function Transition(props: ZoomProps, ref: Ref<unknown>) {
  return <Zoom ref={ref} timeout={200} {...props} />;
});
