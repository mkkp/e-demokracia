//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Header/HeaderContent/Profile/index.tsx'
// Template name: actor/src/layout/Header/HeaderContent/Profile/index.tsx
// Template file: actor/src/layout/Header/HeaderContent/Profile/index.tsx.hbs

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { ThemeMode } from '~/config';
import { useHeroProps } from '~/hooks';
import { ProfilePopup } from '~/layout/ProfilePopup';
import { Transitions } from '~/layout/Transitions';
import { routeToServiceUserUserProfileAccessViewPage } from '~/routes';
import { useLayoutHelper } from '~/utilities/layout-helper';

export const HeaderProfile = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const heroProps = useHeroProps();
  const { navigate } = useJudoNavigation();
  const openProfilePage = async () => {
    setOpen(false);
    navigate(routeToServiceUserUserProfileAccessViewPage());
  };
  const { downLG } = useLayoutHelper();

  const anchorRef = useRef<any>(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    console.log('Handle: ' + event);
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const iconBackColorOpen = theme.palette.mode === ThemeMode.DARK ? 'grey.200' : 'grey.300';

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <ButtonBase
        sx={{
          p: 0.25,
          bgcolor: open ? iconBackColorOpen : 'transparent',
          borderRadius: 1,
          '&:hover': { bgcolor: theme.palette.mode === ThemeMode.DARK ? 'secondary.light' : 'secondary.lighter' },
          '&:focus-visible': {
            outline: `2px solid ${theme.palette.secondary.dark}`,
            outlineOffset: 2,
          },
        }}
        aria-label="open profile"
        ref={anchorRef}
        aria-controls={open ? 'profile-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 0.5 }}>
          <Avatar alt="profile user" src={heroProps.imgSrc} />
          {!downLG ? <Typography variant="subtitle1">{heroProps.preferredUsername}</Typography> : <></>}
        </Stack>
      </ButtonBase>
      <ClickAwayListener onClickAway={handleClose}>
        <Popper
          placement="bottom-end"
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          popperOptions={{
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 9],
                },
              },
            ],
          }}
        >
          {({ TransitionProps }) => (
            <Transitions type="grow" position="top-right" in={open} {...TransitionProps}>
              <Paper
                sx={{
                  width: 290,
                  minWidth: 240,
                  maxWidth: 290,
                  [theme.breakpoints.down('md')]: {
                    maxWidth: 250,
                  },
                }}
              >
                <ProfilePopup openProfilePage={openProfilePage} />
              </Paper>
            </Transitions>
          )}
        </Popper>
      </ClickAwayListener>
    </Box>
  );
};
