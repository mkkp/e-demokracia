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
import type { CreateCommentInputCreateCommentInput_FormActionDefinitions } from './CreateCommentInputCreateCommentInput_Form';
import type {
  CreateCommentInput,
  CreateCommentInputStored,
  CreateCommentInputQueryCustomizer,
} from '~/services/data-api';

const CreateCommentInputCreateCommentInput_Form = lazy(
  () => import('~/containers/CreateCommentInput/CreateCommentInput_Form/CreateCommentInputCreateCommentInput_Form'),
);

export interface CreateCommentInputCreateCommentInput_FormDialogActions
  extends CreateCommentInputCreateCommentInput_FormActionDefinitions {
  createCommentInputCreateCommentInput_FormGetTemplate?: () => Promise<CreateCommentInput>;
  createCommentInputCreateCommentInput_FormBack?: () => Promise<void>;
  createCommentInputCreateCommentInput_FormCreate?: () => Promise<void>;
  serviceIssueIssue_View_EditOtherCommentsActionsCreateComment?: () => Promise<void>;
}

export interface CreateCommentInputCreateCommentInput_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: CreateCommentInputCreateCommentInput_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: CreateCommentInput;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof CreateCommentInput, value: any) => void;
  validation: Map<keyof CreateCommentInput, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof CreateCommentInput, string>>>;
}

// Name: CreateCommentInput::CreateCommentInput_Form
export default function CreateCommentInputCreateCommentInput_FormDialog(
  props: CreateCommentInputCreateCommentInput_FormDialogProps,
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
  const queryCustomizer: CreateCommentInputQueryCustomizer = {
    _mask: '{comment}',
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="CreateCommentInputCreateCommentInput_Form-dialog-close-wrapper"
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
          <CreateCommentInputCreateCommentInput_Form
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
        {editMode && actions.createCommentInputCreateCommentInput_FormBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="CreateCommentInput::CreateCommentInput_Form::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.createCommentInputCreateCommentInput_FormBack!();
              }}
            >
              <span>
                {t('CreateCommentInput.CreateCommentInput.Form.CreateCommentInput::CreateCommentInput_Form::Back', {
                  defaultValue: 'Back',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.createCommentInputCreateCommentInput_FormCreate && (
          <Grid className="page-action" item>
            <LoadingButton
              id="CreateCommentInput::CreateCommentInput_Form::Create"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.createCommentInputCreateCommentInput_FormCreate!();
              }}
            >
              <span>
                {t('CreateCommentInput.CreateCommentInput.Form.CreateCommentInput::CreateCommentInput_Form::Create', {
                  defaultValue: 'Create',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceIssueIssue_View_EditOtherCommentsActionsCreateComment && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::Issue::Issue_View_Edit::other::comments::actions::createComment::OperationFormCallButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="comment-text-multiple" />}
              onClick={async () => {
                await actions.serviceIssueIssue_View_EditOtherCommentsActionsCreateComment!();
              }}
            >
              <span>
                {t(
                  'CreateCommentInput.CreateCommentInput.Form.service::Issue::Issue_View_Edit::other::comments::actions::createComment::OperationFormCallButton',
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
