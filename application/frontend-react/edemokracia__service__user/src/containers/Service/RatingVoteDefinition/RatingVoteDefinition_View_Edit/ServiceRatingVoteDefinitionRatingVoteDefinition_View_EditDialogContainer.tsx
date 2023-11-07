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
import type { ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditActionDefinitions } from './ServiceRatingVoteDefinitionRatingVoteDefinition_View_Edit';
import type {
  ServiceRatingVoteDefinition,
  ServiceRatingVoteDefinitionStored,
  ServiceRatingVoteDefinitionQueryCustomizer,
} from '~/services/data-api';

const ServiceRatingVoteDefinitionRatingVoteDefinition_View_Edit = lazy(
  () =>
    import(
      '~/containers/Service/RatingVoteDefinition/RatingVoteDefinition_View_Edit/ServiceRatingVoteDefinitionRatingVoteDefinition_View_Edit'
    ),
);

export interface ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditDialogActions
  extends ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditActionDefinitions {
  serviceRatingVoteDefinitionRatingVoteDefinition_View_EditBack?: () => Promise<void>;
  serviceRatingVoteDefinitionRatingVoteDefinition_View_EditCancel?: () => Promise<void>;
  serviceRatingVoteDefinitionRatingVoteDefinition_View_EditDelete?: () => Promise<void>;
  serviceRatingVoteDefinitionRatingVoteDefinition_View_EditRefresh?: (
    queryCustomizer: ServiceRatingVoteDefinitionQueryCustomizer,
  ) => Promise<ServiceRatingVoteDefinitionStored>;
  serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUpdate?: () => Promise<void>;
}

export interface ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: ServiceRatingVoteDefinition;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceRatingVoteDefinition, value: any) => void;
  validation: Map<keyof ServiceRatingVoteDefinition, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceRatingVoteDefinition, string>>>;
}

// Name: service::RatingVoteDefinition::RatingVoteDefinition_View_Edit
export default function ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditDialog(
  props: ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditDialogProps,
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
  const queryCustomizer: ServiceRatingVoteDefinitionQueryCustomizer = {
    _mask:
      '{userHasVoteEntry,created,maxRateValue,description,userHasNoVoteEntry,title,closeAt,minRateValue,status,userVoteEntry{created,value}}',
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="ServiceRatingVoteDefinitionRatingVoteDefinition_View_Edit-dialog-close-wrapper"
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
          <ServiceRatingVoteDefinitionRatingVoteDefinition_View_Edit
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
        {!editMode && actions.serviceRatingVoteDefinitionRatingVoteDefinition_View_EditBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::RatingVoteDefinition::RatingVoteDefinition_View_Edit::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceRatingVoteDefinitionRatingVoteDefinition_View_EditBack!();
              }}
            >
              <span>
                {t(
                  'service.RatingVoteDefinition.RatingVoteDefinition.View.Edit.service::RatingVoteDefinition::RatingVoteDefinition_View_Edit::Back',
                  { defaultValue: 'Back' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.serviceRatingVoteDefinitionRatingVoteDefinition_View_EditRefresh && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::RatingVoteDefinition::RatingVoteDefinition_View_Edit::Refresh"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="refresh" />}
              onClick={async () => {
                await actions.serviceRatingVoteDefinitionRatingVoteDefinition_View_EditRefresh!(
                  processQueryCustomizer(queryCustomizer),
                );
              }}
            >
              <span>
                {t(
                  'service.RatingVoteDefinition.RatingVoteDefinition.View.Edit.service::RatingVoteDefinition::RatingVoteDefinition_View_Edit::Refresh',
                  { defaultValue: 'Refresh' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.serviceRatingVoteDefinitionRatingVoteDefinition_View_EditDelete && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::RatingVoteDefinition::RatingVoteDefinition_View_Edit::Delete"
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
                  actions.serviceRatingVoteDefinitionRatingVoteDefinition_View_EditDelete!();
                }
              }}
            >
              <span>
                {t(
                  'service.RatingVoteDefinition.RatingVoteDefinition.View.Edit.service::RatingVoteDefinition::RatingVoteDefinition_View_Edit::Delete',
                  { defaultValue: 'Delete' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceRatingVoteDefinitionRatingVoteDefinition_View_EditCancel && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::RatingVoteDefinition::RatingVoteDefinition_View_Edit::Cancel"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="cancel" />}
              onClick={async () => {
                await actions.serviceRatingVoteDefinitionRatingVoteDefinition_View_EditCancel!();
              }}
            >
              <span>
                {t(
                  'service.RatingVoteDefinition.RatingVoteDefinition.View.Edit.service::RatingVoteDefinition::RatingVoteDefinition_View_Edit::Cancel',
                  { defaultValue: 'Cancel' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUpdate && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::RatingVoteDefinition::RatingVoteDefinition_View_Edit::Update"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUpdate!();
              }}
            >
              <span>
                {t(
                  'service.RatingVoteDefinition.RatingVoteDefinition.View.Edit.service::RatingVoteDefinition::RatingVoteDefinition_View_Edit::Update',
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
