//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components/dialog/OperationFaultDialog.tsx'
// Template name: actor/src/components/dialog/OperationFaultDialog.tsx
// Template file: actor/src/components/dialog/OperationFaultDialog.tsx.hbs

import { useTranslation } from 'react-i18next';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { MdiIcon } from '../MdiIcon';

interface OperationFaultDialogProps {
  faultObjectKey: string;
  content: Record<string, any> | object;
  close: () => void;
}

export const OperationFaultDialog = ({ faultObjectKey, content, close }: OperationFaultDialogProps) => {
  const { palette } = useTheme();
  const { t } = useTranslation();

  return (
    <>
      <DialogTitle id="fault-dialog-title" sx={{ display: 'flex', alignItems: 'center' }}>
        <MdiIcon path="alert-circle-outline" color={palette.error.main} />
        <Typography sx={{ color: (theme) => theme.palette.error.main }} variant="h6" component="h6">
          {t('judo.error.error', { defaultValue: 'Error' }) as string}
        </Typography>
      </DialogTitle>
      <DialogContent id="fault-dialog-content">
        <DialogContentText>
          {
            t('judo.error.business-fault', {
              defaultValue: 'An error occurred while processing your request.',
            }) as string
          }
        </DialogContentText>
        <List sx={{ listStyleType: 'disc', pl: (theme) => theme.spacing(2) }}>
          {Object.entries(content).map(([key, value]) => (
            <ListItem id={'fault.' + faultObjectKey + '.' + key} key={key} sx={{ display: 'list-item', p: 0 }}>
              <Typography>
                <strong>{t('fault.' + faultObjectKey + '.' + key, { defaultValue: key }) as string}:</strong>{' '}
                {value.toString()}
              </Typography>
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button id="close-fault-dialog" onClick={close} variant="outlined" color="error">
          {t('judo.modal.close', { defaultValue: 'Close' }) as string}
        </Button>
      </DialogActions>
    </>
  );
};