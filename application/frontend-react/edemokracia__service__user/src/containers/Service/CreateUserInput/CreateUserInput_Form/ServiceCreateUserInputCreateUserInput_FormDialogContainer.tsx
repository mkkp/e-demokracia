//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.pageContainers
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'DialogContainer.tsx'
// Template name: actor/src/containers/dialog.tsx
// Template file: actor/src/containers/dialog.tsx.hbs

import { lazy, Suspense } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import LoadingButton from '@mui/lab/LoadingButton';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation, MdiIcon } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { processQueryCustomizer } from '~/utilities';
import type { ServiceCreateUserInputCreateUserInput_FormActionDefinitions } from './ServiceCreateUserInputCreateUserInput_Form';
import type {
  ServiceCreateUserInput,
  ServiceCreateUserInputStored,
  ServiceCreateUserInputQueryCustomizer,
} from '~/services/data-api';

const ServiceCreateUserInputCreateUserInput_Form = lazy(
  () => import('~/containers/Service/CreateUserInput/CreateUserInput_Form/ServiceCreateUserInputCreateUserInput_Form'),
);

export interface ServiceCreateUserInputCreateUserInput_FormDialogActions
  extends ServiceCreateUserInputCreateUserInput_FormActionDefinitions {
  getTemplateAction?: () => Promise<ServiceCreateUserInput>;
  backAction?: () => Promise<void>;
  createAction?: () => Promise<void>;
  createUserForUserManagerAction?: () => Promise<void>;
}

export interface ServiceCreateUserInputCreateUserInput_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => Promise<void>;
  actions: ServiceCreateUserInputCreateUserInput_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: ServiceCreateUserInputStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceCreateUserInput, value: any) => void;
  validation: Map<keyof ServiceCreateUserInput, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceCreateUserInput, string>>>;
  submit: () => Promise<void>;
}

// Name: service::CreateUserInput::CreateUserInput_Form
export default function ServiceCreateUserInputCreateUserInput_FormDialog(
  props: ServiceCreateUserInputCreateUserInput_FormDialogProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const {
    ownerData,
    title,
    onClose,
    actions,
    isLoading,
    editMode,
    refreshCounter,
    data,
    isFormUpdateable,
    isFormDeleteable,
    storeDiff,
    validation,
    setValidation,
    submit,
  } = props;
  const queryCustomizer: ServiceCreateUserInputQueryCustomizer = {
    _mask: '{email,firstName,hasAdminAccess,lastName,phone,userName}',
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="User/(esm/_eNqicI1eEe2J66C5CrhpQw)/TransferObjectFormPageContainer-dialog-close-wrapper"
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <MdiIcon path="close" />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Suspense>
          <ServiceCreateUserInputCreateUserInput_Form
            actions={actions}
            refreshCounter={refreshCounter}
            data={data}
            isLoading={isLoading}
            editMode={editMode}
            storeDiff={storeDiff}
            isFormUpdateable={isFormUpdateable}
            isFormDeleteable={isFormDeleteable}
            validation={validation}
            setValidation={setValidation}
            submit={submit}
          />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_eNqicI1eEe2J66C5CrhpQw)/TransferObjectFormBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('service.CreateUserInput.CreateUserInput_Form.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.createAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_eNqicI1eEe2J66C5CrhpQw)/TransferObjectFormCreateButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.createAction!();
              }}
            >
              <span>{t('service.CreateUserInput.CreateUserInput_Form.Create', { defaultValue: 'Create' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.createUserForUserManagerAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_rDBEIFv6Ee6nEc5rp_Qy4A)/OperationFormCallButton/(discriminator/User/(esm/_eNqicI1eEe2J66C5CrhpQw)/TransferObjectFormButtonGroup)"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="account-plus" />}
              onClick={async () => {
                await actions.createUserForUserManagerAction!();
              }}
            >
              <span>
                {t(
                  'service.UserManager.UserManager_View_Edit.userManagerActionGroup.createUser.OperationFormCallButton',
                  { defaultValue: 'Submit' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
