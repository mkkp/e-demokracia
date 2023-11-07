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
import type { ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditActionDefinitions } from './ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_Edit';
import type {
  ServiceSelectAnswerVoteSelection,
  ServiceSelectAnswerVoteSelectionStored,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
} from '~/services/data-api';

const ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_Edit = lazy(
  () =>
    import(
      '~/containers/Service/SelectAnswerVoteSelection/SelectAnswerVoteSelection_View_Edit/ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_Edit'
    ),
);

export interface ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDialogActions
  extends ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditActionDefinitions {
  serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditBack?: () => Promise<void>;
  serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditCancel?: () => Promise<void>;
  serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDelete?: () => Promise<void>;
  serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditRefresh?: (
    queryCustomizer: ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ) => Promise<ServiceSelectAnswerVoteSelectionStored>;
  serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditUpdate?: () => Promise<void>;
}

export interface ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: ServiceSelectAnswerVoteSelection;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceSelectAnswerVoteSelection, value: any) => void;
  validation: Map<keyof ServiceSelectAnswerVoteSelection, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceSelectAnswerVoteSelection, string>>>;
}

// Name: service::SelectAnswerVoteSelection::SelectAnswerVoteSelection_View_Edit
export default function ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDialog(
  props: ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDialogProps,
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
  const queryCustomizer: ServiceSelectAnswerVoteSelectionQueryCustomizer = {
    _mask: '{description,title}',
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_Edit-dialog-close-wrapper"
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
          <ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_Edit
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
        {!editMode && actions.serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::SelectAnswerVoteSelection::SelectAnswerVoteSelection_View_Edit::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditBack!();
              }}
            >
              <span>
                {t(
                  'service.SelectAnswerVoteSelection.SelectAnswerVoteSelection.View.Edit.service::SelectAnswerVoteSelection::SelectAnswerVoteSelection_View_Edit::Back',
                  { defaultValue: 'Back' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditRefresh && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::SelectAnswerVoteSelection::SelectAnswerVoteSelection_View_Edit::Refresh"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="refresh" />}
              onClick={async () => {
                await actions.serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditRefresh!(
                  processQueryCustomizer(queryCustomizer),
                );
              }}
            >
              <span>
                {t(
                  'service.SelectAnswerVoteSelection.SelectAnswerVoteSelection.View.Edit.service::SelectAnswerVoteSelection::SelectAnswerVoteSelection_View_Edit::Refresh',
                  { defaultValue: 'Refresh' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDelete && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::SelectAnswerVoteSelection::SelectAnswerVoteSelection_View_Edit::Delete"
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
                  actions.serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDelete!();
                }
              }}
            >
              <span>
                {t(
                  'service.SelectAnswerVoteSelection.SelectAnswerVoteSelection.View.Edit.service::SelectAnswerVoteSelection::SelectAnswerVoteSelection_View_Edit::Delete',
                  { defaultValue: 'Delete' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditCancel && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::SelectAnswerVoteSelection::SelectAnswerVoteSelection_View_Edit::Cancel"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="cancel" />}
              onClick={async () => {
                await actions.serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditCancel!();
              }}
            >
              <span>
                {t(
                  'service.SelectAnswerVoteSelection.SelectAnswerVoteSelection.View.Edit.service::SelectAnswerVoteSelection::SelectAnswerVoteSelection_View_Edit::Cancel',
                  { defaultValue: 'Cancel' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditUpdate && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::SelectAnswerVoteSelection::SelectAnswerVoteSelection_View_Edit::Update"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditUpdate!();
              }}
            >
              <span>
                {t(
                  'service.SelectAnswerVoteSelection.SelectAnswerVoteSelection.View.Edit.service::SelectAnswerVoteSelection::SelectAnswerVoteSelection_View_Edit::Update',
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
