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
import type { CloseDebateInputCloseDebateInput_FormActionDefinitions } from './CloseDebateInputCloseDebateInput_Form';
import type { CloseDebateInput, CloseDebateInputStored, CloseDebateInputQueryCustomizer } from '~/services/data-api';

const CloseDebateInputCloseDebateInput_Form = lazy(
  () => import('~/containers/CloseDebateInput/CloseDebateInput_Form/CloseDebateInputCloseDebateInput_Form'),
);

export interface CloseDebateInputCloseDebateInput_FormDialogActions
  extends CloseDebateInputCloseDebateInput_FormActionDefinitions {
  closeDebateInputCloseDebateInput_FormGetTemplate?: () => Promise<CloseDebateInput>;
  closeDebateInputCloseDebateInput_FormBack?: () => Promise<void>;
  closeDebateInputCloseDebateInput_FormCreate?: () => Promise<void>;
  serviceIssueIssue_View_EditActionsPageActionButtonsCloseDebate?: () => Promise<void>;
}

export interface CloseDebateInputCloseDebateInput_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: CloseDebateInputCloseDebateInput_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: CloseDebateInput;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof CloseDebateInput, value: any) => void;
  validation: Map<keyof CloseDebateInput, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof CloseDebateInput, string>>>;
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
  } = props;
  const queryCustomizer: CloseDebateInputQueryCustomizer = {
    _mask: '{voteType,description,title,closeAt}',
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="CloseDebateInputCloseDebateInput_Form-dialog-close-wrapper"
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
          />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {editMode && actions.closeDebateInputCloseDebateInput_FormBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="CloseDebateInput::CloseDebateInput_Form::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.closeDebateInputCloseDebateInput_FormBack!();
              }}
            >
              <span>
                {t('CloseDebateInput.CloseDebateInput.Form.CloseDebateInput::CloseDebateInput_Form::Back', {
                  defaultValue: 'Back',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.closeDebateInputCloseDebateInput_FormCreate && (
          <Grid className="page-action" item>
            <LoadingButton
              id="CloseDebateInput::CloseDebateInput_Form::Create"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.closeDebateInputCloseDebateInput_FormCreate!();
              }}
            >
              <span>
                {t('CloseDebateInput.CloseDebateInput.Form.CloseDebateInput::CloseDebateInput_Form::Create', {
                  defaultValue: 'Create',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceIssueIssue_View_EditActionsPageActionButtonsCloseDebate && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::Issue::Issue_View_Edit::actions::PageActionButtons::closeDebate::OperationFormCallButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="vote" />}
              onClick={async () => {
                await actions.serviceIssueIssue_View_EditActionsPageActionButtonsCloseDebate!();
              }}
            >
              <span>
                {t(
                  'CloseDebateInput.CloseDebateInput.Form.service::Issue::Issue_View_Edit::actions::PageActionButtons::closeDebate::OperationFormCallButton',
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
