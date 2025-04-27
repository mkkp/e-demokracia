//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/utilities/layout-helper.tsx'
// Template name: actor/src/utilities/layout-helper.tsx
// Template file: actor/src/utilities/layout-helper.tsx.hbs

import { Theme, useMediaQuery } from '@mui/material';
import { DRAWER_WIDTH, MINI_DRAWER_WIDTH, MenuOrientation } from '~/config/layout';
import { useConfig } from '~/hooks/useConfig';
import { density } from '~/theme';

interface LayoutState {
  downLG: boolean;
  downMD: boolean;
  downSM: boolean;
  isXs: boolean;
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;

  miniDrawer: boolean;
  horizontalMenuPresented: boolean;
  headerPresented: boolean;
  pageHeaderOffset: number;
  container: boolean;
  bottomMenu: boolean;
  marginTop: number;
}
export const useLayoutHelper = (): LayoutState => {
  const downLG = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
  const downMD = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const downSM = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery((theme: Theme) => theme.breakpoints.between('md', 'lg'));
  const isLg = useMediaQuery((theme: Theme) => theme.breakpoints.between('lg', 'xl'));
  const isXl = useMediaQuery((theme: Theme) => theme.breakpoints.up('xl'));

  const { menuOrientation, miniDrawer, header, container } = useConfig();
  const horizontalMenuPresented = menuOrientation === MenuOrientation.HORIZONTAL && !downLG;
  const headerPresented = horizontalMenuPresented && (header ?? true);
  const bottomMenu = downSM;

  let pageHeaderOffset = 0;
  if ((menuOrientation === MenuOrientation.HORIZONTAL && downLG) || menuOrientation === MenuOrientation.VERTICAL) {
    pageHeaderOffset = miniDrawer ? MINI_DRAWER_WIDTH : DRAWER_WIDTH;
  }
  if (downSM) {
    pageHeaderOffset = 0;
  }

  let marginTop = density.mainMarginTop ?? 3;
  let size = '';
  if (isXs) {
    marginTop = density.mainMarginTopXs ?? marginTop;
    size = 'xs';
  } else if (isSm) {
    marginTop = density.mainMarginTopSm ?? marginTop;
    size = 'sm';
  } else if (isMd) {
    marginTop = density.mainMarginTopMd ?? marginTop;
    size = 'md';
  } else if (isLg) {
    marginTop = (density.mainMarginTopLg ?? marginTop) + (horizontalMenuPresented ? 3 : 0);
    size = 'lg';
  } else if (isXl) {
    marginTop = (density.mainMarginTopXl ?? marginTop) + (horizontalMenuPresented ? 3 : 0);
    size = 'xl';
  }

  //  console.log(
  //    'size: ' +
  //      size +
  //     ' downLG: ' +
  //      downLG +
  //      ' downMD: ' +
  //     downMD +
  //     ' miniDrawer: ' +
  //     miniDrawer +
  //     ' horizontalMenuPresented: ' +
  //     horizontalMenuPresented +
  //     ' headerPresented: ' +
  //     headerPresented +
  //     ' pageHeaderOffset: ' +
  //     pageHeaderOffset +
  //     ' marginTop: ' +
  //     marginTop +
  //     ' container: ' +
  //     container,
  // );

  return {
    downLG,
    downMD,
    downSM,
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    miniDrawer,
    horizontalMenuPresented,
    headerPresented,
    pageHeaderOffset,
    container,
    bottomMenu,
    marginTop,
  };
};
