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
import type { CloseDebateInputCloseDebateInput_FormActionDefinitions } from './CloseDebateInputCloseDebateInput_Form';
import type { CloseDebateInput, CloseDebateInputStored, CloseDebateInputQueryCustomizer } from '~/services/data-api';

const CloseDebateInputCloseDebateInput_Form = lazy(
  () => import('~/containers/CloseDebateInput/CloseDebateInput_Form/CloseDebateInputCloseDebateInput_Form'),
);

export interface CloseDebateInputCloseDebateInput_FormDialogActions
  extends CloseDebateInputCloseDebateInput_FormActionDefinitions {
  getTemplateAction?: () => Promise<CloseDebateInput>;
  backAction?: () => Promise<void>;
  createAction?: () => Promise<void>;
  closeDebateForIssueAction?: () => Promise<void>;
}

export interface CloseDebateInputCloseDebateInput_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => Promise<void>;
  actions: CloseDebateInputCloseDebateInput_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: CloseDebateInputStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof CloseDebateInput, value: any) => void;
  validation: Map<keyof CloseDebateInput, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof CloseDebateInput, string>>>;
  submit: () => Promise<void>;
}

// Name: CloseDebateInput::CloseDebateInput_Form
export default function CloseDebateInputCloseDebateInput_FormDialog(
  props: CloseDebateInputCloseDebateInput_FormDialogProps,
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
  const queryCustomizer: CloseDebateInputQueryCustomizer = {
    _mask: '{closeAt,description,title,voteType}',
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="User/(esm/_NG8HoG6JEe2wNaja8kBvcQ)/TransferObjectFormPageContainer-dialog-close-wrapper"
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
          <CloseDebateInputCloseDebateInput_Form
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
              id="User/(esm/_NG8HoG6JEe2wNaja8kBvcQ)/TransferObjectFormBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('CloseDebateInput.CloseDebateInput_Form.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.createAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_NG8HoG6JEe2wNaja8kBvcQ)/TransferObjectFormCreateButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.createAction!();
              }}
            >
              <span>{t('CloseDebateInput.CloseDebateInput_Form.Create', { defaultValue: 'Create' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.closeDebateForIssueAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_8M4nYHj_Ee6cB8og8p0UuQ)/OperationFormCallButton/(discriminator/User/(esm/_NG8HoG6JEe2wNaja8kBvcQ)/TransferObjectFormButtonGroup)"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="vote" />}
              onClick={async () => {
                await actions.closeDebateForIssueAction!();
              }}
            >
              <span>
                {t('service.Issue.Issue_View_Edit.actions.PageActionButtons.closeDebate.OperationFormCallButton', {
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
