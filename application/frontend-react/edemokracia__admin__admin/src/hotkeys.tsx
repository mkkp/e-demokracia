import { useHotkeys } from 'react-hotkeys-hook';
import { useTranslation } from 'react-i18next';
import { useDialog } from '~/components/dialog';
// To import your actions and extra stuff here you can override the `actor/src/hotkeys.tsx.imports.fragment.hbs` file.

export const registerGlobalHotkeys = () => {
  const { t } = useTranslation();
  const [createDialog, closeDialog] = useDialog();

  // To implement / add hotkeys you can override the `actor/src/hotkeys.tsx.body.fragment.hbs` file.
};
