//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components/dialog/PageDialog.tsx'
// Template name: actor/src/components/dialog/PageDialog.tsx
// Template file: actor/src/components/dialog/PageDialog.tsx.hbs

import { Dialog, DialogContent, DialogActions, Button } from '@mui/material';
import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { SlideUpTransition } from '~/theme/animations';

interface PageDialogProps {
  page: ReactNode;
  open: boolean;
  handleClose: () => void;
  resolve: () => void;
}

export const PageDialog = ({ page, open, handleClose, resolve }: PageDialogProps) => {
  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const ok = () => {
    resolve();
    handleClose();
  };

  return (
    <Dialog open={open} onClose={ok} scroll="paper" TransitionComponent={SlideUpTransition}>
      <DialogContent dividers={true}>{page}</DialogContent>
      <DialogActions>
        <Button onClick={ok}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};
