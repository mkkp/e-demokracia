//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components/dialog/ConfirmationDialog.tsx'
// Template name: actor/src/components/dialog/ConfirmationDialog.tsx
// Template file: actor/src/components/dialog/ConfirmationDialog.tsx.hbs

import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import type { ConfirmationDialogProps } from '~/components-api';
import { SlideUpTransition } from '~/theme/animations';

export const ConfirmationDialog = ({
  id,
  confirmationMessage,
  title,
  resolve,
  open,
  handleClose,
}: ConfirmationDialogProps) => {
  const { t } = useTranslation();
  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const cancel = () => {
    handleClose();
    resolve(false);
  };

  const ok = () => {
    handleClose();
    resolve(true);
  };

  return (
    <Dialog
      id={id}
      open={open}
      onClose={handleClose}
      scroll="paper"
      fullWidth={true}
      maxWidth={'xs'}
      TransitionComponent={SlideUpTransition}
    >
      {title && <DialogTitle id={`${id}-dialog-title`}>{title}</DialogTitle>}
      <DialogContent dividers={!!title}>
        <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}>
          {confirmationMessage}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button id={`${id}-action-cancel`} variant="text" onClick={cancel}>
          {t('judo.modal.confirm.cancel', { defaultValue: 'No' }) as string}
        </Button>
        <Button id={`${id}-action-confirm`} variant="contained" onClick={ok}>
          {t('judo.modal.confirm.confirm', { defaultValue: 'Yes' }) as string}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
