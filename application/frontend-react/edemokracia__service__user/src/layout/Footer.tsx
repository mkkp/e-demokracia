//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Footer.tsx'
// Template name: actor/src/layout/Footer.tsx
// Template file: actor/src/layout/Footer.tsx.hbs

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';

export const FOOTER_TEXT_HOOK_INTERFACE_KEY = 'FooterTextHook';
export type FooterTextHook = () => () => string;

export const Footer = () => {
  const { service: useFooterText } = useTrackService<FooterTextHook>(
    `(${OBJECTCLASS}=${FOOTER_TEXT_HOOK_INTERFACE_KEY})`,
  );
  const getFooterText = useFooterText && useFooterText();

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: '24px 16px 0px', mt: 'auto' }}>
      <Typography variant="caption">
        {getFooterText ? getFooterText() : `edemokracia - ${new Date().getFullYear()}.`}
      </Typography>
    </Stack>
  );
};
