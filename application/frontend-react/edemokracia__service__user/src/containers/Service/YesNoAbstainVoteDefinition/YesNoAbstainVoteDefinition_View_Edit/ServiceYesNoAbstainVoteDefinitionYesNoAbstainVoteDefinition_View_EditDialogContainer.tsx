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
  ServiceYesNoAbstainVoteDefinition,
  ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ServiceYesNoAbstainVoteDefinitionStored,
} from '~/services/data-api';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { processQueryCustomizer } from '~/utilities';
import type { ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditActionDefinitions } from './ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_Edit';

const ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_Edit = lazy(
  () =>
    import(
      '~/containers/Service/YesNoAbstainVoteDefinition/YesNoAbstainVoteDefinition_View_Edit/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_Edit'
    ),
);

export interface ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditDialogActions
  extends ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditActionDefinitions {
  activateForYesNoAbstainVoteDefinitionAction?: () => Promise<void>;
  addToFavoritesForYesNoAbstainVoteDefinitionAction?: () => Promise<void>;
  closeVoteForYesNoAbstainVoteDefinitionAction?: () => Promise<void>;
  deleteOrArchiveForYesNoAbstainVoteDefinitionAction?: () => Promise<void>;
  removeFromFavoritesForYesNoAbstainVoteDefinitionAction?: () => Promise<void>;
  backAction?: () => Promise<void>;
  cancelAction?: () => Promise<void>;
  deleteAction?: () => Promise<void>;
  refreshAction?: (
    queryCustomizer: ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ) => Promise<JudoRestResponse<ServiceYesNoAbstainVoteDefinitionStored>>;
  updateAction?: () => Promise<void>;
}

export interface ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditDialogProps {
  ownerData: any;
  onClose: () => Promise<void>;
  actions: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: ServiceYesNoAbstainVoteDefinitionStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceYesNoAbstainVoteDefinition, value: any) => void;
  validation: Map<keyof ServiceYesNoAbstainVoteDefinition, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceYesNoAbstainVoteDefinition, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// Name: service::YesNoAbstainVoteDefinition::YesNoAbstainVoteDefinition_View_Edit
export default function ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditDialog(
  props: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditDialogProps,
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
  const queryCustomizer: ServiceYesNoAbstainVoteDefinitionQueryCustomizer = {
    _mask: actions.getMask
      ? actions.getMask!()
      : '{closeAt,created,description,isFavorite,isNotFavorite,isVoteNotDeletable,isVoteNotEditable,isVoteNotOpen,status,title,userHasNoVoteEntry,userHasVoteEntry,userVoteEntry{created,value}}',
  };

  return (
    <>
      <DialogTitle>
        {isDraft ? t('judo') : actions.getPageTitle ? actions.getPageTitle(data) : ''}
        <IconButton
          id="User/(esm/_-awAIH4XEe2cB7_PsKXsHQ)/TransferObjectViewPageContainer-dialog-close-wrapper"
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
          <ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_Edit
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
              id="User/(esm/_-awAIH4XEe2cB7_PsKXsHQ)/TransferObjectViewBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              disabled={isLoading || editMode}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('judo.action.back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.refreshAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_-awAIH4XEe2cB7_PsKXsHQ)/TransferObjectViewRefreshButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              disabled={isLoading || editMode}
              startIcon={<MdiIcon path="refresh" />}
              onClick={async () => {
                await actions.refreshAction!(processQueryCustomizer(queryCustomizer));
              }}
            >
              <span>{t('judo.action.refresh', { defaultValue: 'Refresh' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.deleteAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_-awAIH4XEe2cB7_PsKXsHQ)/TransferObjectViewDeleteButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              disabled={isLoading || editMode}
              startIcon={<MdiIcon path="delete_forever" />}
              onClick={async () => {
                actions.deleteAction!();
              }}
            >
              <span>{t('judo.action.delete', { defaultValue: 'Delete' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.cancelAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_-awAIH4XEe2cB7_PsKXsHQ)/TransferObjectViewCancelButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              disabled={isLoading}
              startIcon={<MdiIcon path="cancel" />}
              onClick={async () => {
                await actions.cancelAction!();
              }}
            >
              <span>{t('judo.action.cancel', { defaultValue: 'Cancel' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.updateAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_-awAIH4XEe2cB7_PsKXsHQ)/TransferObjectViewUpdateButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              disabled={isLoading}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.updateAction!();
              }}
            >
              <span>{t('judo.action.update', { defaultValue: 'Save' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {(actions?.isDeleteOrArchiveHidden
          ? !actions?.isDeleteOrArchiveHidden(data, editMode)
          : !data.isVoteNotDeletable) &&
          actions.deleteOrArchiveForYesNoAbstainVoteDefinitionAction && (
            <Grid className="page-action" item>
              <LoadingButton
                id="User/(esm/_9jf_BnsCEe6bP4FWw7fjQA)/OperationFormVisualElement"
                loading={isLoading}
                loadingPosition="start"
                variant={undefined}
                disabled={isLoading || editMode}
                startIcon={<MdiIcon path="delete" />}
                onClick={async () => {
                  await actions.deleteOrArchiveForYesNoAbstainVoteDefinitionAction!();
                }}
              >
                <span>
                  {t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.deleteOrArchive', {
                    defaultValue: 'Delete',
                  })}
                </span>
              </LoadingButton>
            </Grid>
          )}
        {(actions?.isActivateHidden ? !actions?.isActivateHidden(data, editMode) : !data.isVoteNotEditable) &&
          actions.activateForYesNoAbstainVoteDefinitionAction && (
            <Grid className="page-action" item>
              <LoadingButton
                id="User/(esm/_9jf_BXsCEe6bP4FWw7fjQA)/OperationFormVisualElement"
                loading={isLoading}
                loadingPosition="start"
                variant={undefined}
                disabled={isLoading || editMode}
                startIcon={<MdiIcon path="lock-open" />}
                onClick={async () => {
                  await actions.activateForYesNoAbstainVoteDefinitionAction!();
                }}
              >
                <span>
                  {t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.activate', {
                    defaultValue: 'Activate',
                  })}
                </span>
              </LoadingButton>
            </Grid>
          )}
        {(actions?.isCloseVoteHidden ? !actions?.isCloseVoteHidden(data, editMode) : !data.isVoteNotOpen) &&
          actions.closeVoteForYesNoAbstainVoteDefinitionAction && (
            <Grid className="page-action" item>
              <LoadingButton
                id="User/(esm/_9jf_BHsCEe6bP4FWw7fjQA)/OperationFormVisualElement"
                loading={isLoading}
                loadingPosition="start"
                variant={undefined}
                disabled={isLoading || editMode}
                startIcon={<MdiIcon path="lock-check" />}
                onClick={async () => {
                  await actions.closeVoteForYesNoAbstainVoteDefinitionAction!();
                }}
              >
                <span>
                  {t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.closeVote', {
                    defaultValue: 'Close Vote',
                  })}
                </span>
              </LoadingButton>
            </Grid>
          )}
        {(actions?.isRemoveFromFavoritesHidden
          ? !actions?.isRemoveFromFavoritesHidden(data, editMode)
          : !data.isNotFavorite) &&
          actions.removeFromFavoritesForYesNoAbstainVoteDefinitionAction && (
            <Grid className="page-action" item>
              <LoadingButton
                id="User/(esm/_9jf_A3sCEe6bP4FWw7fjQA)/OperationFormVisualElement"
                loading={isLoading}
                loadingPosition="start"
                variant={undefined}
                disabled={isLoading || editMode}
                startIcon={<MdiIcon path="star-minus" />}
                onClick={async () => {
                  await actions.removeFromFavoritesForYesNoAbstainVoteDefinitionAction!();
                }}
              >
                <span>
                  {t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.removeFromFavorites', {
                    defaultValue: 'Remove from favorites',
                  })}
                </span>
              </LoadingButton>
            </Grid>
          )}
        {(actions?.isAddToFavoritesHidden ? !actions?.isAddToFavoritesHidden(data, editMode) : !data.isFavorite) &&
          actions.addToFavoritesForYesNoAbstainVoteDefinitionAction && (
            <Grid className="page-action" item>
              <LoadingButton
                id="User/(esm/_9jf_AnsCEe6bP4FWw7fjQA)/OperationFormVisualElement"
                loading={isLoading}
                loadingPosition="start"
                variant={undefined}
                disabled={isLoading || editMode}
                startIcon={<MdiIcon path="star-plus" />}
                onClick={async () => {
                  await actions.addToFavoritesForYesNoAbstainVoteDefinitionAction!();
                }}
              >
                <span>
                  {t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.addToFavorites', {
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
