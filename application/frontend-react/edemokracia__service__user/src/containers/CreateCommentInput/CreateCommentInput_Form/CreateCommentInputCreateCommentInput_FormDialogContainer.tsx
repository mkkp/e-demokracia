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
  getTemplateAction?: () => Promise<CreateCommentInput>;
  backAction?: () => Promise<void>;
  createAction?: () => Promise<void>;
  createCommentForIssueAction?: () => Promise<void>;
}

export interface CreateCommentInputCreateCommentInput_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => Promise<void>;
  actions: CreateCommentInputCreateCommentInput_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: CreateCommentInputStored;
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
          id="User/(esm/_kYYi4Ie5Ee2kLcMqsIbMgQ)/TransferObjectFormPageContainer-dialog-close-wrapper"
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
        {editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_kYYi4Ie5Ee2kLcMqsIbMgQ)/TransferObjectFormBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('CreateCommentInput.CreateCommentInput_Form.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.createAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_kYYi4Ie5Ee2kLcMqsIbMgQ)/TransferObjectFormCreateButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.createAction!();
              }}
            >
              <span>{t('CreateCommentInput.CreateCommentInput_Form.Create', { defaultValue: 'Create' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.createCommentForIssueAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_S8tEQIydEe2VSOmaAz6G9Q)/OperationFormCallButton/(discriminator/_sQX8wY1KEe6sgdrBpAinBQ)"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="comment-text-multiple" />}
              onClick={async () => {
                await actions.createCommentForIssueAction!();
              }}
            >
              <span>
                {t('service.Issue.Issue_View_Edit.other.comments.actions.createComment.OperationFormCallButton', {
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
