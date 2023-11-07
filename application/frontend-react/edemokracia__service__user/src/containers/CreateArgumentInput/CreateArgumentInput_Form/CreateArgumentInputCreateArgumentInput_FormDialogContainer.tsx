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
import type { CreateArgumentInputCreateArgumentInput_FormActionDefinitions } from './CreateArgumentInputCreateArgumentInput_Form';
import type {
  CreateArgumentInput,
  CreateArgumentInputStored,
  CreateArgumentInputQueryCustomizer,
} from '~/services/data-api';

const CreateArgumentInputCreateArgumentInput_Form = lazy(
  () => import('~/containers/CreateArgumentInput/CreateArgumentInput_Form/CreateArgumentInputCreateArgumentInput_Form'),
);

export interface CreateArgumentInputCreateArgumentInput_FormDialogActions
  extends CreateArgumentInputCreateArgumentInput_FormActionDefinitions {
  createArgumentInputCreateArgumentInput_FormGetTemplate?: () => Promise<CreateArgumentInput>;
  createArgumentInputCreateArgumentInput_FormBack?: () => Promise<void>;
  createArgumentInputCreateArgumentInput_FormCreate?: () => Promise<void>;
  serviceConCon_View_EditArgumentsConsActionsCreateConArgument?: () => Promise<void>;
  serviceConCon_View_EditArgumentsProsActionsCreateProArgument?: () => Promise<void>;
  serviceIssueIssue_View_EditOtherArgumentsConsActionsCreateConArgument?: () => Promise<void>;
  serviceIssueIssue_View_EditOtherArgumentsProsActionsCreateProArgument?: () => Promise<void>;
  serviceProPro_View_EditArgumentsConsActionsCreateConArgument?: () => Promise<void>;
  serviceProPro_View_EditArgumentsProsActionsCreateProArgument?: () => Promise<void>;
}

export interface CreateArgumentInputCreateArgumentInput_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: CreateArgumentInputCreateArgumentInput_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: CreateArgumentInput;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof CreateArgumentInput, value: any) => void;
  validation: Map<keyof CreateArgumentInput, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof CreateArgumentInput, string>>>;
}

// Name: CreateArgumentInput::CreateArgumentInput_Form
export default function CreateArgumentInputCreateArgumentInput_FormDialog(
  props: CreateArgumentInputCreateArgumentInput_FormDialogProps,
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
  const queryCustomizer: CreateArgumentInputQueryCustomizer = {
    _mask: '{description,title}',
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="CreateArgumentInputCreateArgumentInput_Form-dialog-close-wrapper"
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
          <CreateArgumentInputCreateArgumentInput_Form
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
        {editMode && actions.createArgumentInputCreateArgumentInput_FormBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="CreateArgumentInput::CreateArgumentInput_Form::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.createArgumentInputCreateArgumentInput_FormBack!();
              }}
            >
              <span>
                {t('CreateArgumentInput.CreateArgumentInput.Form.CreateArgumentInput::CreateArgumentInput_Form::Back', {
                  defaultValue: 'Back',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.createArgumentInputCreateArgumentInput_FormCreate && (
          <Grid className="page-action" item>
            <LoadingButton
              id="CreateArgumentInput::CreateArgumentInput_Form::Create"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.createArgumentInputCreateArgumentInput_FormCreate!();
              }}
            >
              <span>
                {t(
                  'CreateArgumentInput.CreateArgumentInput.Form.CreateArgumentInput::CreateArgumentInput_Form::Create',
                  { defaultValue: 'Create' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceIssueIssue_View_EditOtherArgumentsProsActionsCreateProArgument && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::Issue::Issue_View_Edit::other::arguments::pros::actions::createProArgument::OperationFormCallButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="chat-plus" />}
              onClick={async () => {
                await actions.serviceIssueIssue_View_EditOtherArgumentsProsActionsCreateProArgument!();
              }}
            >
              <span>
                {t(
                  'CreateArgumentInput.CreateArgumentInput.Form.service::Issue::Issue_View_Edit::other::arguments::pros::actions::createProArgument::OperationFormCallButton',
                  { defaultValue: 'Submit' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceConCon_View_EditArgumentsConsActionsCreateConArgument && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::Con::Con_View_Edit::Arguments::cons::actions::createConArgument::OperationFormCallButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="chat-minus" />}
              onClick={async () => {
                await actions.serviceConCon_View_EditArgumentsConsActionsCreateConArgument!();
              }}
            >
              <span>
                {t(
                  'CreateArgumentInput.CreateArgumentInput.Form.service::Con::Con_View_Edit::Arguments::cons::actions::createConArgument::OperationFormCallButton',
                  { defaultValue: 'Submit' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceProPro_View_EditArgumentsConsActionsCreateConArgument && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::Pro::Pro_View_Edit::Arguments::cons::actions::createConArgument::OperationFormCallButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="chat-minus" />}
              onClick={async () => {
                await actions.serviceProPro_View_EditArgumentsConsActionsCreateConArgument!();
              }}
            >
              <span>
                {t(
                  'CreateArgumentInput.CreateArgumentInput.Form.service::Pro::Pro_View_Edit::Arguments::cons::actions::createConArgument::OperationFormCallButton',
                  { defaultValue: 'Submit' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceProPro_View_EditArgumentsProsActionsCreateProArgument && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::Pro::Pro_View_Edit::Arguments::pros::actions::createProArgument::OperationFormCallButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="chat-plus" />}
              onClick={async () => {
                await actions.serviceProPro_View_EditArgumentsProsActionsCreateProArgument!();
              }}
            >
              <span>
                {t(
                  'CreateArgumentInput.CreateArgumentInput.Form.service::Pro::Pro_View_Edit::Arguments::pros::actions::createProArgument::OperationFormCallButton',
                  { defaultValue: 'Submit' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceIssueIssue_View_EditOtherArgumentsConsActionsCreateConArgument && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::Issue::Issue_View_Edit::other::arguments::cons::actions::createConArgument::OperationFormCallButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="chat-minus" />}
              onClick={async () => {
                await actions.serviceIssueIssue_View_EditOtherArgumentsConsActionsCreateConArgument!();
              }}
            >
              <span>
                {t(
                  'CreateArgumentInput.CreateArgumentInput.Form.service::Issue::Issue_View_Edit::other::arguments::cons::actions::createConArgument::OperationFormCallButton',
                  { defaultValue: 'Submit' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceConCon_View_EditArgumentsProsActionsCreateProArgument && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::Con::Con_View_Edit::Arguments::pros::actions::createProArgument::OperationFormCallButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="chat-plus" />}
              onClick={async () => {
                await actions.serviceConCon_View_EditArgumentsProsActionsCreateProArgument!();
              }}
            >
              <span>
                {t(
                  'CreateArgumentInput.CreateArgumentInput.Form.service::Con::Con_View_Edit::Arguments::pros::actions::createProArgument::OperationFormCallButton',
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
