import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { MdiIcon } from '~/components';
import type { RowStylerConfigured } from '~/theme/table-row-highlighting';

export function RowHighlightLegend(props: { rowStylings: RowStylerConfigured<any>[] }) {
  const { t } = useTranslation();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      {props.rowStylings.map((s, idx) => (
        <div key={s.name}>
          <Box sx={{ mt: 1, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <MdiIcon path="record" sx={{ mr: 1, ml: idx > 0 ? 3 : 0, color: s.backgroundColor }} />
            <Typography variant="body1" sx={s.fontColor ? { color: s.fontColor } : {}}>
              {t(`table-custom-row-style-${s.name}`, { defaultValue: s.label }) as string}
            </Typography>
          </Box>
        </div>
      ))}
    </Box>
  );
}
