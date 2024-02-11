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
  ServiceYesNoAbstainVoteDefinition,
  ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ServiceYesNoAbstainVoteDefinitionStored,
} from '~/services/data-api';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { mainContainerPadding } from '~/theme';
import { processQueryCustomizer } from '~/utilities';
import type { ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditActionDefinitions } from './ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_Edit';

const ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_Edit = lazy(
  () =>
    import(
      '~/containers/Service/YesNoAbstainVoteDefinition/YesNoAbstainVoteDefinition_View_Edit/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_Edit'
    ),
);

export interface ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditPageActions
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

export interface ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditPageProps {
  actions: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditPageActions;
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
}

// Name: service::YesNoAbstainVoteDefinition::YesNoAbstainVoteDefinition_View_Edit
export default function ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditPage(
  props: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditPageProps,
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
  const queryCustomizer: ServiceYesNoAbstainVoteDefinitionQueryCustomizer = {
    _mask: actions.getMask
      ? actions.getMask!()
      : '{closeAt,created,description,isFavorite,isNotFavorite,isVoteNotDeletable,isVoteNotEditable,isVoteNotOpen,status,title,userHasNoVoteEntry,userHasVoteEntry,userVoteEntry{created,value}}',
  };

  return (
    <>
      <PageHeader title={actions?.getPageTitle ? actions?.getPageTitle(data) : ''}>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_-awAIH4XEe2cB7_PsKXsHQ)/TransferObjectViewBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              disabled={editMode}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>
                {t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.Back', {
                  defaultValue: 'Back',
                })}
              </span>
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
              startIcon={<MdiIcon path="refresh" />}
              disabled={editMode}
              onClick={async () => {
                await actions.refreshAction!(processQueryCustomizer(queryCustomizer));
              }}
            >
              <span>
                {t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.Refresh', {
                  defaultValue: 'Refresh',
                })}
              </span>
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
              startIcon={<MdiIcon path="delete_forever" />}
              disabled={editMode}
              onClick={async () => {
                actions.deleteAction!();
              }}
            >
              <span>
                {t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.Delete', {
                  defaultValue: 'Delete',
                })}
              </span>
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
              startIcon={<MdiIcon path="cancel" />}
              disabled={editMode}
              onClick={async () => {
                await actions.cancelAction!();
              }}
            >
              <span>
                {t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.Cancel', {
                  defaultValue: 'Cancel',
                })}
              </span>
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
              startIcon={<MdiIcon path="content-save" />}
              disabled={editMode}
              onClick={async () => {
                await actions.updateAction!();
              }}
            >
              <span>
                {t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.Update', {
                  defaultValue: 'Save',
                })}
              </span>
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
                startIcon={<MdiIcon path="delete" />}
                disabled={editMode}
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
                startIcon={<MdiIcon path="lock-open" />}
                disabled={editMode}
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
                startIcon={<MdiIcon path="lock-check" />}
                disabled={editMode}
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
          : !data.isFavorite) &&
          actions.removeFromFavoritesForYesNoAbstainVoteDefinitionAction && (
            <Grid className="page-action" item>
              <LoadingButton
                id="User/(esm/_9jf_A3sCEe6bP4FWw7fjQA)/OperationFormVisualElement"
                loading={isLoading}
                loadingPosition="start"
                variant={undefined}
                startIcon={<MdiIcon path="star-minus" />}
                disabled={editMode}
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
        {(actions?.isAddToFavoritesHidden ? !actions?.isAddToFavoritesHidden(data, editMode) : !data.isNotFavorite) &&
          actions.addToFavoritesForYesNoAbstainVoteDefinitionAction && (
            <Grid className="page-action" item>
              <LoadingButton
                id="User/(esm/_9jf_AnsCEe6bP4FWw7fjQA)/OperationFormVisualElement"
                loading={isLoading}
                loadingPosition="start"
                variant={undefined}
                startIcon={<MdiIcon path="star-plus" />}
                disabled={editMode}
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
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
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
          />
        </Box>
      </Suspense>
    </>
  );
}
