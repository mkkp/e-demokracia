//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.pageContainers
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'DialogContainer.tsx'
// Template name: actor/src/containers/dialog.tsx
// Template file: actor/src/containers/dialog.tsx.hbs

import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { Suspense, lazy } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import type {
  ServiceYesNoVoteDefinition,
  ServiceYesNoVoteDefinitionQueryCustomizer,
  ServiceYesNoVoteDefinitionStored,
} from '~/services/data-api';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { processQueryCustomizer } from '~/utilities';
import type { ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditActionDefinitions } from './ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_Edit';

const ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_Edit = lazy(
  () =>
    import(
      '~/containers/Service/YesNoVoteDefinition/YesNoVoteDefinition_View_Edit/ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_Edit'
    ),
);

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditDialogActions
  extends ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditActionDefinitions {
  activateForYesNoVoteDefinitionAction?: () => Promise<void>;
  addToFavoritesForYesNoVoteDefinitionAction?: () => Promise<void>;
  closeVoteForYesNoVoteDefinitionAction?: () => Promise<void>;
  deleteOrArchiveForYesNoVoteDefinitionAction?: () => Promise<void>;
  removeFromFavoritesForYesNoVoteDefinitionAction?: () => Promise<void>;
  backAction?: () => Promise<void>;
  cancelAction?: () => Promise<void>;
  deleteAction?: () => Promise<void>;
  refreshAction?: (
    queryCustomizer: ServiceYesNoVoteDefinitionQueryCustomizer,
  ) => Promise<JudoRestResponse<ServiceYesNoVoteDefinitionStored>>;
  updateAction?: () => Promise<void>;
}

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditDialogProps {
  ownerData: any;
  onClose: () => Promise<void>;
  actions: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: ServiceYesNoVoteDefinitionStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceYesNoVoteDefinition, value: any) => void;
  validation: Map<keyof ServiceYesNoVoteDefinition, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceYesNoVoteDefinition, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// Name: service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit
export default function ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditDialog(
  props: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditDialogProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const {
    ownerData,
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
    isDraft,
  } = props;
  const queryCustomizer: ServiceYesNoVoteDefinitionQueryCustomizer = {
    _mask: actions.getMask
      ? actions.getMask!()
      : '{closeAt,created,description,isFavorite,isNotFavorite,isVoteNotDeletable,isVoteNotEditable,isVoteNotOpen,status,title,userHasNoVoteEntry,userHasVoteEntry,userVoteEntry{created,value}}',
  };

  return (
    <>
      <DialogTitle>
        {isDraft ? t('judo') : actions.getPageTitle ? actions.getPageTitle(data) : ''}
        <IconButton
          id="User/(esm/_-ZmwoH4XEe2cB7_PsKXsHQ)/TransferObjectViewPageContainer-dialog-close-wrapper"
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
          <ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_Edit
            actions={actions}
            refreshCounter={refreshCounter}
            isLoading={isLoading}
            data={data}
            editMode={editMode}
            storeDiff={storeDiff}
            isFormUpdateable={isFormUpdateable}
            isFormDeleteable={isFormDeleteable}
            validation={validation}
            setValidation={setValidation}
            submit={submit}
            isDraft={isDraft}
          />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_-ZmwoH4XEe2cB7_PsKXsHQ)/TransferObjectViewBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>
                {t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.Back', { defaultValue: 'Back' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.refreshAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_-ZmwoH4XEe2cB7_PsKXsHQ)/TransferObjectViewRefreshButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="refresh" />}
              onClick={async () => {
                await actions.refreshAction!(processQueryCustomizer(queryCustomizer));
              }}
            >
              <span>
                {t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.Refresh', { defaultValue: 'Refresh' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.deleteAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_-ZmwoH4XEe2cB7_PsKXsHQ)/TransferObjectViewDeleteButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="delete_forever" />}
              onClick={async () => {
                actions.deleteAction!();
              }}
            >
              <span>
                {t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.Delete', { defaultValue: 'Delete' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.cancelAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_-ZmwoH4XEe2cB7_PsKXsHQ)/TransferObjectViewCancelButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="cancel" />}
              onClick={async () => {
                await actions.cancelAction!();
              }}
            >
              <span>
                {t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.Cancel', { defaultValue: 'Cancel' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.updateAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_-ZmwoH4XEe2cB7_PsKXsHQ)/TransferObjectViewUpdateButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.updateAction!();
              }}
            >
              <span>
                {t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.Update', { defaultValue: 'Save' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {(actions?.isDeleteOrArchiveHidden
          ? !actions?.isDeleteOrArchiveHidden(data, editMode)
          : !data.isVoteNotDeletable) &&
          actions.deleteOrArchiveForYesNoVoteDefinitionAction && (
            <Grid className="page-action" item>
              <LoadingButton
                id="User/(esm/_uXiyNnsCEe6bP4FWw7fjQA)/OperationFormVisualElement"
                loading={isLoading}
                loadingPosition="start"
                variant={undefined}
                startIcon={<MdiIcon path="delete" />}
                onClick={async () => {
                  await actions.deleteOrArchiveForYesNoVoteDefinitionAction!();
                }}
              >
                <span>
                  {t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.deleteOrArchive', {
                    defaultValue: 'Delete',
                  })}
                </span>
              </LoadingButton>
            </Grid>
          )}
        {(actions?.isActivateHidden ? !actions?.isActivateHidden(data, editMode) : !data.isVoteNotEditable) &&
          actions.activateForYesNoVoteDefinitionAction && (
            <Grid className="page-action" item>
              <LoadingButton
                id="User/(esm/_uXiyNXsCEe6bP4FWw7fjQA)/OperationFormVisualElement"
                loading={isLoading}
                loadingPosition="start"
                variant={undefined}
                startIcon={<MdiIcon path="lock-open" />}
                onClick={async () => {
                  await actions.activateForYesNoVoteDefinitionAction!();
                }}
              >
                <span>
                  {t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.activate', {
                    defaultValue: 'Activate',
                  })}
                </span>
              </LoadingButton>
            </Grid>
          )}
        {(actions?.isCloseVoteHidden ? !actions?.isCloseVoteHidden(data, editMode) : !data.isVoteNotOpen) &&
          actions.closeVoteForYesNoVoteDefinitionAction && (
            <Grid className="page-action" item>
              <LoadingButton
                id="User/(esm/_uXiyNHsCEe6bP4FWw7fjQA)/OperationFormVisualElement"
                loading={isLoading}
                loadingPosition="start"
                variant={undefined}
                startIcon={<MdiIcon path="lock-check" />}
                onClick={async () => {
                  await actions.closeVoteForYesNoVoteDefinitionAction!();
                }}
              >
                <span>
                  {t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.closeVote', {
                    defaultValue: 'Close Vote',
                  })}
                </span>
              </LoadingButton>
            </Grid>
          )}
        {(actions?.isRemoveFromFavoritesHidden
          ? !actions?.isRemoveFromFavoritesHidden(data, editMode)
          : !data.isFavorite) &&
          actions.removeFromFavoritesForYesNoVoteDefinitionAction && (
            <Grid className="page-action" item>
              <LoadingButton
                id="User/(esm/_uXiyM3sCEe6bP4FWw7fjQA)/OperationFormVisualElement"
                loading={isLoading}
                loadingPosition="start"
                variant={undefined}
                startIcon={<MdiIcon path="star-minus" />}
                onClick={async () => {
                  await actions.removeFromFavoritesForYesNoVoteDefinitionAction!();
                }}
              >
                <span>
                  {t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.removeFromFavorites', {
                    defaultValue: 'Remove from favorites',
                  })}
                </span>
              </LoadingButton>
            </Grid>
          )}
        {(actions?.isAddToFavoritesHidden ? !actions?.isAddToFavoritesHidden(data, editMode) : !data.isNotFavorite) &&
          actions.addToFavoritesForYesNoVoteDefinitionAction && (
            <Grid className="page-action" item>
              <LoadingButton
                id="User/(esm/_uXiyMnsCEe6bP4FWw7fjQA)/OperationFormVisualElement"
                loading={isLoading}
                loadingPosition="start"
                variant={undefined}
                startIcon={<MdiIcon path="star-plus" />}
                onClick={async () => {
                  await actions.addToFavoritesForYesNoVoteDefinitionAction!();
                }}
              >
                <span>
                  {t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.addToFavorites', {
                    defaultValue: 'Add to favorites',
                  })}
                </span>
              </LoadingButton>
            </Grid>
          )}
      </DialogActions>
    </>
  );
}
