//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components/dialog/StackableDialogProvider.tsx'
// Template name: actor/src/components/dialog/StackableDialogProvider.tsx
// Template file: actor/src/components/dialog/StackableDialogProvider.tsx.hbs

import type { ReactNode } from 'react';
import { useRef, createContext, useContext, useState } from 'react';
import { Dialog } from '@mui/material';
import type { DialogProps } from '@mui/material';
import { SlideUpTransition } from '~/theme/animations';

export type DialogOption = Omit<DialogProps, 'open'>;

type ProviderContext = readonly [(option: DialogOption) => void, () => void, () => void];

const EMPTY_FUNC = () => {};
const DialogContext = createContext<ProviderContext>([EMPTY_FUNC, EMPTY_FUNC, EMPTY_FUNC]);

export const useDialog = () => useContext(DialogContext);

export function StackableDialogProvider({ children }: { children: ReactNode }) {
  const [dialogs, setDialogs] = useState<DialogProps[]>([]);
  const createDialog = (option: DialogOption) => {
    const dialog = { ...option, open: true };
    setDialogs((d) => [...d, dialog]);
  };
  const closeDialog = () => {
    setDialogs((d) => {
      // const tmp = d[d.length - 1];
      //
      // if (tmp && tmp.disableBackdropClick && reason === 'backdropClick') {
      //     return d;
      // }

      const latestDialog = d.pop();
      if (!latestDialog) return d;
      // if (latestDialog.onClose) latestDialog.onClose({}, undefined);
      latestDialog.open = false;
      return [...d];
      // return [...d].concat({ ...latestDialog, open: false });
    });
  };
  const closeAllDialogs = () => {
    setDialogs((d) => {
      for (const dialog of d) {
        dialog.open = false;
      }
      return [];
    });
  };
  const contextValue = useRef([createDialog, closeDialog, closeAllDialogs] as const);

  return (
    <DialogContext.Provider value={contextValue.current}>
      {children}
      {dialogs.map((dialog, i) => {
        const { ...dialogParams } = dialog;
        // const handleKill = () => {
        //     if (dialog.onExited) dialog.onExited();
        //     setDialogs((dialogs) => dialogs.slice(0, dialogs.length - 1));
        // };

        return (
          <Dialog
            TransitionComponent={SlideUpTransition}
            key={i}
            // onKill={handleKill}
            {...dialogParams}
          />
        );
      })}
    </DialogContext.Provider>
  );
}
