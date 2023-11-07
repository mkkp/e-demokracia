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
import type { CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditActionDefinitions } from './CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_Edit';
import type {
  CloseDebateOutputVoteDefinitionReference,
  CloseDebateOutputVoteDefinitionReferenceStored,
  CloseDebateOutputVoteDefinitionReferenceQueryCustomizer,
} from '~/services/data-api';

const CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_Edit = lazy(
  () =>
    import(
      '~/containers/CloseDebateOutputVoteDefinitionReference/CloseDebateOutputVoteDefinitionReference_View_Edit/CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_Edit'
    ),
);

export interface CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditDialogActions
  extends CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditActionDefinitions {
  closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditBack?: () => Promise<void>;
  closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditCancel?: () => Promise<void>;
  closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditDelete?: () => Promise<void>;
  closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditRefresh?: (
    queryCustomizer: CloseDebateOutputVoteDefinitionReferenceQueryCustomizer,
  ) => Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
  closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditUpdate?: () => Promise<void>;
}

export interface CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: CloseDebateOutputVoteDefinitionReference;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof CloseDebateOutputVoteDefinitionReference, value: any) => void;
  validation: Map<keyof CloseDebateOutputVoteDefinitionReference, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof CloseDebateOutputVoteDefinitionReference, string>>>;
}

// Name: CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_View_Edit
export default function CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditDialog(
  props: CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditDialogProps,
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
  const queryCustomizer: CloseDebateOutputVoteDefinitionReferenceQueryCustomizer = {
    _mask: '{context}',
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_Edit-dialog-close-wrapper"
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
          <CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_Edit
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
        {!editMode &&
          actions.closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditBack && (
            <Grid className="page-action" item>
              <LoadingButton
                id="CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_View_Edit::Back"
                loading={isLoading}
                loadingPosition="start"
                variant={'text'}
                startIcon={<MdiIcon path="arrow-left" />}
                onClick={async () => {
                  await actions.closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditBack!();
                }}
              >
                <span>
                  {t(
                    'CloseDebateOutputVoteDefinitionReference.CloseDebateOutputVoteDefinitionReference.View.Edit.CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_View_Edit::Back',
                    { defaultValue: 'Back' },
                  )}
                </span>
              </LoadingButton>
            </Grid>
          )}
        {!editMode &&
          actions.closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditRefresh && (
            <Grid className="page-action" item>
              <LoadingButton
                id="CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_View_Edit::Refresh"
                loading={isLoading}
                loadingPosition="start"
                variant={'contained'}
                startIcon={<MdiIcon path="refresh" />}
                onClick={async () => {
                  await actions.closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditRefresh!(
                    processQueryCustomizer(queryCustomizer),
                  );
                }}
              >
                <span>
                  {t(
                    'CloseDebateOutputVoteDefinitionReference.CloseDebateOutputVoteDefinitionReference.View.Edit.CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_View_Edit::Refresh',
                    { defaultValue: 'Refresh' },
                  )}
                </span>
              </LoadingButton>
            </Grid>
          )}
        {!editMode &&
          actions.closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditDelete && (
            <Grid className="page-action" item>
              <LoadingButton
                id="CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_View_Edit::Delete"
                loading={isLoading}
                loadingPosition="start"
                variant={'contained'}
                startIcon={<MdiIcon path="delete_forever" />}
                onClick={async () => {
                  const confirmed = await openConfirmDialog(
                    'page-delete-action',
                    t('judo.modal.confirm.confirm-delete', {
                      defaultValue: 'Are you sure you would like to delete the selected element?',
                    }),
                    t('judo.modal.confirm.confirm-title', { defaultValue: 'Confirm action' }),
                  );

                  if (confirmed) {
                    actions.closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditDelete!();
                  }
                }}
              >
                <span>
                  {t(
                    'CloseDebateOutputVoteDefinitionReference.CloseDebateOutputVoteDefinitionReference.View.Edit.CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_View_Edit::Delete',
                    { defaultValue: 'Delete' },
                  )}
                </span>
              </LoadingButton>
            </Grid>
          )}
        {editMode &&
          actions.closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditCancel && (
            <Grid className="page-action" item>
              <LoadingButton
                id="CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_View_Edit::Cancel"
                loading={isLoading}
                loadingPosition="start"
                variant={'text'}
                startIcon={<MdiIcon path="cancel" />}
                onClick={async () => {
                  await actions.closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditCancel!();
                }}
              >
                <span>
                  {t(
                    'CloseDebateOutputVoteDefinitionReference.CloseDebateOutputVoteDefinitionReference.View.Edit.CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_View_Edit::Cancel',
                    { defaultValue: 'Cancel' },
                  )}
                </span>
              </LoadingButton>
            </Grid>
          )}
        {editMode &&
          actions.closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditUpdate && (
            <Grid className="page-action" item>
              <LoadingButton
                id="CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_View_Edit::Update"
                loading={isLoading}
                loadingPosition="start"
                variant={'contained'}
                startIcon={<MdiIcon path="content-save" />}
                onClick={async () => {
                  await actions.closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditUpdate!();
                }}
              >
                <span>
                  {t(
                    'CloseDebateOutputVoteDefinitionReference.CloseDebateOutputVoteDefinitionReference.View.Edit.CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_View_Edit::Update',
                    { defaultValue: 'Save' },
                  )}
                </span>
              </LoadingButton>
            </Grid>
          )}
      </DialogActions>
    </>
  );
}
