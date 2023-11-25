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
  getTemplateAction?: () => Promise<CreateArgumentInput>;
  backAction?: () => Promise<void>;
  createAction?: () => Promise<void>;
  createConArgumentForConAction?: () => Promise<void>;
  createProArgumentForConAction?: () => Promise<void>;
  createConArgumentForIssueAction?: () => Promise<void>;
  createProArgumentForIssueAction?: () => Promise<void>;
  createConArgumentForProAction?: () => Promise<void>;
  createProArgumentForProAction?: () => Promise<void>;
}

export interface CreateArgumentInputCreateArgumentInput_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => Promise<void>;
  actions: CreateArgumentInputCreateArgumentInput_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: CreateArgumentInputStored;
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
          id="User/(esm/_GavqUHW5Ee2LTNnGda5kaw)/TransferObjectFormPageContainer-dialog-close-wrapper"
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
        {editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_GavqUHW5Ee2LTNnGda5kaw)/TransferObjectFormBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('CreateArgumentInput.CreateArgumentInput_Form.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.createAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_GavqUHW5Ee2LTNnGda5kaw)/TransferObjectFormCreateButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.createAction!();
              }}
            >
              <span>{t('CreateArgumentInput.CreateArgumentInput_Form.Create', { defaultValue: 'Create' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.createProArgumentForConAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_DBZYMHjsEe6cB8og8p0UuQ)/OperationFormCallButton/(discriminator/_FQqYEoujEe6laYH8Xw7WEw)"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="chat-plus" />}
              onClick={async () => {
                await actions.createProArgumentForConAction!();
              }}
            >
              <span>
                {t('service.Con.Con_View_Edit.Arguments.pros.actions.createProArgument.OperationFormCallButton', {
                  defaultValue: 'Submit',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.createConArgumentForProAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_KRUbO3jvEe6cB8og8p0UuQ)/OperationFormCallButton/(discriminator/_FQqYEoujEe6laYH8Xw7WEw)"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="chat-minus" />}
              onClick={async () => {
                await actions.createConArgumentForProAction!();
              }}
            >
              <span>
                {t('service.Pro.Pro_View_Edit.Arguments.cons.actions.createConArgument.OperationFormCallButton', {
                  defaultValue: 'Submit',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.createConArgumentForConAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_DBYxIHjsEe6cB8og8p0UuQ)/OperationFormCallButton/(discriminator/_FQqYEoujEe6laYH8Xw7WEw)"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="chat-minus" />}
              onClick={async () => {
                await actions.createConArgumentForConAction!();
              }}
            >
              <span>
                {t('service.Con.Con_View_Edit.Arguments.cons.actions.createConArgument.OperationFormCallButton', {
                  defaultValue: 'Submit',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.createConArgumentForIssueAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_qJPPC3jvEe6cB8og8p0UuQ)/OperationFormCallButton/(discriminator/_FQqYEoujEe6laYH8Xw7WEw)"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="chat-minus" />}
              onClick={async () => {
                await actions.createConArgumentForIssueAction!();
              }}
            >
              <span>
                {t(
                  'service.Issue.Issue_View_Edit.other.arguments.cons.actions.createConArgument.OperationFormCallButton',
                  { defaultValue: 'Submit' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.createProArgumentForIssueAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_qJPPA3jvEe6cB8og8p0UuQ)/OperationFormCallButton/(discriminator/_FQqYEoujEe6laYH8Xw7WEw)"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="chat-plus" />}
              onClick={async () => {
                await actions.createProArgumentForIssueAction!();
              }}
            >
              <span>
                {t(
                  'service.Issue.Issue_View_Edit.other.arguments.pros.actions.createProArgument.OperationFormCallButton',
                  { defaultValue: 'Submit' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.createProArgumentForProAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_KRUbM3jvEe6cB8og8p0UuQ)/OperationFormCallButton/(discriminator/_FQqYEoujEe6laYH8Xw7WEw)"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="chat-plus" />}
              onClick={async () => {
                await actions.createProArgumentForProAction!();
              }}
            >
              <span>
                {t('service.Pro.Pro_View_Edit.Arguments.pros.actions.createProArgument.OperationFormCallButton', {
                  defaultValue: 'Submit',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
