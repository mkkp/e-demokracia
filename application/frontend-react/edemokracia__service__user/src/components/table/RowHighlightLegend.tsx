import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { MdiIcon } from '~/components';
import type { RowStylerConfigured } from '~/theme/table-row-highlighting';

export function RowHighlightLegend(props: { rowStylings: RowStylerConfigured<any>[] }) {
  const { t } = useTranslation();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {props.rowStylings.map((s) => (
        <div key={s.name}>
          <Box sx={{ mt: 1, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <MdiIcon path="record" sx={{ mr: 1, color: s.backgroundColor }} />
            <Typography variant="body1">
              {t(`table-custom-row-style-${s.name}`, { defaultValue: s.label }) as string}
            </Typography>
          </Box>
        </div>
      ))}
    </Box>
  );
}
