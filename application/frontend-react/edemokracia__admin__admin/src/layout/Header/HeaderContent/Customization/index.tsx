//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Header/HeaderContent/Customization/index.tsx'
// Template name: actor/src/layout/Header/HeaderContent/Customization/index.tsx
// Template file: actor/src/layout/Header/HeaderContent/Customization/index.tsx.hbs

import { useMemo, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Card, Drawer, IconButton, Stack, Typography } from '@mui/material';
import { useConfig } from '~/hooks';
import { ThemeMode as ThemeModeEnum } from '~/config';
import { MdiIcon } from '~/components';
import { ThemeMode } from './ThemeMode';
import { ThemeWidth } from './ThemeWidth';
import { ThemeMenuLayout } from './ThemeMenuLayout';
import { SimpleBar } from '../../../Drawer/DrawerContent/SimpleBar';

export const Customization = () => {
  const theme = useTheme();
  const { container, mode, menuOrientation } = useConfig();

  const themeMenuLayout = useMemo(() => <ThemeMenuLayout />, [menuOrientation]);
  const themeMode = useMemo(() => <ThemeMode />, [mode]);
  const themeWidth = useMemo(() => <ThemeWidth />, [container]);

  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  const iconBackColorOpen = theme.palette.mode === ThemeModeEnum.DARK ? 'grey.200' : 'grey.300';
  const iconBackColor = theme.palette.mode === ThemeModeEnum.DARK ? 'background.default' : 'grey.100';
  const experimentOn = window.localStorage.getItem('judo.experiment');

  return (
    <>
      {experimentOn && (
        <Box sx={{ flexShrink: 0, ml: 0.75 }}>
          <IconButton
            sx={{ color: 'text.primary', bgcolor: open ? iconBackColorOpen : iconBackColor }}
            onClick={handleToggle}
          >
            <MdiIcon path="cog-outline" />
          </IconButton>
        </Box>
      )}
      <Drawer
        sx={{ zIndex: 2001 }}
        anchor="right"
        onClose={handleToggle}
        open={open}
        PaperProps={{
          sx: {
            width: 340,
          },
        }}
      >
        {open && (
          <Card
            title="Theme Customization"
            sx={{
              border: 'none',
              borderRadius: 0,
              height: '100vh',
              '& .MuiCardHeader-root': {
                color: 'background.paper',
                bgcolor: 'primary.main',
                '& .MuiTypography-root': { fontSize: '1rem' },
              },
            }}
          >
            <SimpleBar
              sx={{
                '& .simplebar-content': {
                  display: 'flex',
                  flexDirection: 'column',
                },
              }}
            >
              <Box
                sx={{
                  height: 'calc(100vh - 64px)',
                  padding: 2,
                  '& .MuiAccordion-root': {
                    borderColor: theme.palette.divider,
                    '& .MuiAccordionSummary-root': {
                      bgcolor: 'transparent',
                      flexDirection: 'row',
                      pl: 1,
                    },
                    '& .MuiAccordionDetails-root': {
                      border: 'none',
                    },
                    '& .Mui-expanded': {
                      color: theme.palette.primary.main,
                    },
                  },
                }}
              >
                <Stack direction="column">
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Stack>
                      <Typography variant="subtitle1" color="textPrimary">
                        Menu Orientation
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack direction="column" sx={{ ml: '10px' }}>
                    {themeMenuLayout}
                  </Stack>
                </Stack>
                <Stack direction="column">
                  <Stack direction="row" spacing={1.25} alignItems="center">
                    <Stack>
                      <Typography variant="subtitle1" color="textPrimary">
                        Theme Mode
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack direction="column" sx={{ ml: '10px' }}>
                    {themeMode}
                  </Stack>
                </Stack>
                <Stack direction="column">
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Stack>
                      <Typography variant="subtitle1" color="textPrimary">
                        Layout Width
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack direction="column" sx={{ ml: '10px' }}>
                    {themeWidth}
                  </Stack>
                </Stack>
              </Box>
            </SimpleBar>
          </Card>
        )}
      </Drawer>
    </>
  );
};
