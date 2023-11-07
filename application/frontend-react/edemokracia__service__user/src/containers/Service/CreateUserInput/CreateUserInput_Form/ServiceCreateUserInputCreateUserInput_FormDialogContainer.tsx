//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.pageContainers
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'DialogContainer.tsx'
// Template name: actor/src/containers/dialog.tsx
// Template file: actor/src/containers/dialog.tsx.hbs

import { lazy, Suspense } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { Grid, Button, DialogTitle, IconButton, DialogContent, DialogActions } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation, MdiIcon, PageHeader } from '~/components';
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
  serviceCreateUserInputCreateUserInput_FormGetTemplate?: () => Promise<ServiceCreateUserInput>;
  serviceCreateUserInputCreateUserInput_FormBack?: () => Promise<void>;
  serviceCreateUserInputCreateUserInput_FormCreate?: () => Promise<void>;
  serviceUserManagerUserManager_View_EditUserManagerActionGroupCreateUser?: () => Promise<void>;
}

export interface ServiceCreateUserInputCreateUserInput_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceCreateUserInputCreateUserInput_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: ServiceCreateUserInput;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceCreateUserInput, value: any) => void;
  validation: Map<keyof ServiceCreateUserInput, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceCreateUserInput, string>>>;
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
  } = props;
  const queryCustomizer: ServiceCreateUserInputQueryCustomizer = {
    _mask: '{firstName,lastName,phone,userName,email,hasAdminAccess}',
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="ServiceCreateUserInputCreateUserInput_Form-dialog-close-wrapper"
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
          />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {editMode && actions.serviceCreateUserInputCreateUserInput_FormBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::CreateUserInput::CreateUserInput_Form::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceCreateUserInputCreateUserInput_FormBack!();
              }}
            >
              <span>
                {t(
                  'service.CreateUserInput.CreateUserInput.Form.service::CreateUserInput::CreateUserInput_Form::Back',
                  { defaultValue: 'Back' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceCreateUserInputCreateUserInput_FormCreate && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::CreateUserInput::CreateUserInput_Form::Create"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.serviceCreateUserInputCreateUserInput_FormCreate!();
              }}
            >
              <span>
                {t(
                  'service.CreateUserInput.CreateUserInput.Form.service::CreateUserInput::CreateUserInput_Form::Create',
                  { defaultValue: 'Create' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceUserManagerUserManager_View_EditUserManagerActionGroupCreateUser && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::UserManager::UserManager_View_Edit::userManagerActionGroup::createUser::OperationFormCallButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="account-plus" />}
              onClick={async () => {
                await actions.serviceUserManagerUserManager_View_EditUserManagerActionGroupCreateUser!();
              }}
            >
              <span>
                {t(
                  'service.CreateUserInput.CreateUserInput.Form.service::UserManager::UserManager_View_Edit::userManagerActionGroup::createUser::OperationFormCallButton',
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
