//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPageContainersToGenerate(#application)
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'PageContainer.tsx'
// Template name: actor/src/containers/page.tsx
// Template file: actor/src/containers/page.tsx.hbs

import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Suspense, lazy } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { MdiIcon, PageHeader, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import type {
  ServiceSelectAnswerVoteDefinition,
  ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ServiceSelectAnswerVoteDefinitionStored,
} from '~/services/data-api';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { mainContainerPadding } from '~/theme';
import { processQueryCustomizer } from '~/utilities';
import type { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditActionDefinitions } from './ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_Edit';

const ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_Edit = lazy(
  () =>
    import(
      '~/containers/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_View_Edit/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_Edit'
    ),
);

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPageActions
  extends ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditActionDefinitions {
  activateForSelectAnswerVoteDefinitionAction?: () => Promise<void>;
  addToFavoritesForSelectAnswerVoteDefinitionAction?: () => Promise<void>;
  closeVoteForSelectAnswerVoteDefinitionAction?: () => Promise<void>;
  deleteOrArchiveForSelectAnswerVoteDefinitionAction?: () => Promise<void>;
  removeFromFavoritesForSelectAnswerVoteDefinitionAction?: () => Promise<void>;
  backAction?: () => Promise<void>;
  cancelAction?: () => Promise<void>;
  deleteAction?: () => Promise<void>;
  refreshAction?: (
    queryCustomizer: ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ) => Promise<JudoRestResponse<ServiceSelectAnswerVoteDefinitionStored>>;
  updateAction?: () => Promise<void>;
}

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPageProps {
  actions: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  data: ServiceSelectAnswerVoteDefinitionStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceSelectAnswerVoteDefinition, value: any) => void;
  validation: Map<keyof ServiceSelectAnswerVoteDefinition, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceSelectAnswerVoteDefinition, string>>>;
  submit: () => Promise<void>;
}

// Name: service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit
export default function ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPage(
  props: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPageProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const {
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
  const queryCustomizer: ServiceSelectAnswerVoteDefinitionQueryCustomizer = {
    _mask: actions.getMask
      ? actions.getMask!()
      : '{closeAt,created,description,isFavorite,isNotFavorite,isVoteNotDeletable,isVoteNotEditable,isVoteNotOpen,status,title,userHasNoVoteEntry,userHasVoteEntry,voteSelections{description,title},userVoteEntry{created,valueRepresentation}}',
  };

  return (
    <>
      <PageHeader title={actions?.getPageTitle ? actions?.getPageTitle(data) : ''}>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_-cGrAH4XEe2cB7_PsKXsHQ)/TransferObjectViewBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              disabled={isLoading || editMode}
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
              id="User/(esm/_-cGrAH4XEe2cB7_PsKXsHQ)/TransferObjectViewRefreshButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="refresh" />}
              disabled={isLoading || editMode}
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
              id="User/(esm/_-cGrAH4XEe2cB7_PsKXsHQ)/TransferObjectViewDeleteButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="delete_forever" />}
              disabled={isLoading || editMode}
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
              id="User/(esm/_-cGrAH4XEe2cB7_PsKXsHQ)/TransferObjectViewCancelButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="cancel" />}
              disabled={isLoading}
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
              id="User/(esm/_-cGrAH4XEe2cB7_PsKXsHQ)/TransferObjectViewUpdateButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              disabled={isLoading}
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
          actions.deleteOrArchiveForSelectAnswerVoteDefinitionAction && (
            <Grid className="page-action" item>
              <LoadingButton
                id="User/(esm/_JTH2l3r9Ee6bP4FWw7fjQA)/OperationFormVisualElement"
                loading={isLoading}
                loadingPosition="start"
                variant={undefined}
                startIcon={<MdiIcon path="delete" />}
                disabled={isLoading || editMode}
                onClick={async () => {
                  await actions.deleteOrArchiveForSelectAnswerVoteDefinitionAction!();
                }}
              >
                <span>
                  {t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.deleteOrArchive', {
                    defaultValue: 'Delete',
                  })}
                </span>
              </LoadingButton>
            </Grid>
          )}
        {(actions?.isActivateHidden ? !actions?.isActivateHidden(data, editMode) : !data.isVoteNotEditable) &&
          actions.activateForSelectAnswerVoteDefinitionAction && (
            <Grid className="page-action" item>
              <LoadingButton
                id="User/(esm/_JTH2lnr9Ee6bP4FWw7fjQA)/OperationFormVisualElement"
                loading={isLoading}
                loadingPosition="start"
                variant={undefined}
                startIcon={<MdiIcon path="lock-open" />}
                disabled={isLoading || editMode}
                onClick={async () => {
                  await actions.activateForSelectAnswerVoteDefinitionAction!();
                }}
              >
                <span>
                  {t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.activate', {
                    defaultValue: 'Activate',
                  })}
                </span>
              </LoadingButton>
            </Grid>
          )}
        {(actions?.isCloseVoteHidden ? !actions?.isCloseVoteHidden(data, editMode) : !data.isVoteNotOpen) &&
          actions.closeVoteForSelectAnswerVoteDefinitionAction && (
            <Grid className="page-action" item>
              <LoadingButton
                id="User/(esm/_JTH2lXr9Ee6bP4FWw7fjQA)/OperationFormVisualElement"
                loading={isLoading}
                loadingPosition="start"
                variant={undefined}
                startIcon={<MdiIcon path="lock-check" />}
                disabled={isLoading || editMode}
                onClick={async () => {
                  await actions.closeVoteForSelectAnswerVoteDefinitionAction!();
                }}
              >
                <span>
                  {t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.closeVote', {
                    defaultValue: 'Close Vote',
                  })}
                </span>
              </LoadingButton>
            </Grid>
          )}
        {(actions?.isRemoveFromFavoritesHidden
          ? !actions?.isRemoveFromFavoritesHidden(data, editMode)
          : !data.isNotFavorite) &&
          actions.removeFromFavoritesForSelectAnswerVoteDefinitionAction && (
            <Grid className="page-action" item>
              <LoadingButton
                id="User/(esm/_JTH2k3r9Ee6bP4FWw7fjQA)/OperationFormVisualElement"
                loading={isLoading}
                loadingPosition="start"
                variant={undefined}
                startIcon={<MdiIcon path="star-minus" />}
                disabled={isLoading || editMode}
                onClick={async () => {
                  await actions.removeFromFavoritesForSelectAnswerVoteDefinitionAction!();
                }}
              >
                <span>
                  {t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.removeFromFavorites', {
                    defaultValue: 'Remove from favorites',
                  })}
                </span>
              </LoadingButton>
            </Grid>
          )}
        {(actions?.isAddToFavoritesHidden ? !actions?.isAddToFavoritesHidden(data, editMode) : !data.isFavorite) &&
          actions.addToFavoritesForSelectAnswerVoteDefinitionAction && (
            <Grid className="page-action" item>
              <LoadingButton
                id="User/(esm/_JTH2knr9Ee6bP4FWw7fjQA)/OperationFormVisualElement"
                loading={isLoading}
                loadingPosition="start"
                variant={undefined}
                startIcon={<MdiIcon path="star-plus" />}
                disabled={isLoading || editMode}
                onClick={async () => {
                  await actions.addToFavoritesForSelectAnswerVoteDefinitionAction!();
                }}
              >
                <span>
                  {t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.addToFavorites', {
                    defaultValue: 'Add to favorites',
                  })}
                </span>
              </LoadingButton>
            </Grid>
          )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_Edit
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
          />
        </Box>
      </Suspense>
    </>
  );
}
