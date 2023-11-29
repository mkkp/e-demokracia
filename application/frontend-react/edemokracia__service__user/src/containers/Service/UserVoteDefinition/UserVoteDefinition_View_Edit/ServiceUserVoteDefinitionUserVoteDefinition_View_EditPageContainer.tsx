//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPageContainersToGenerate(#application)
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'PageContainer.tsx'
// Template name: actor/src/containers/page.tsx
// Template file: actor/src/containers/page.tsx.hbs

import { lazy, Suspense } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation, MdiIcon, PageHeader } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { mainContainerPadding } from '~/theme';
import { processQueryCustomizer } from '~/utilities';
import type { ServiceUserVoteDefinitionUserVoteDefinition_View_EditActionDefinitions } from './ServiceUserVoteDefinitionUserVoteDefinition_View_Edit';
import type {
  ServiceUserVoteDefinition,
  ServiceUserVoteDefinitionStored,
  ServiceUserVoteDefinitionQueryCustomizer,
} from '~/services/data-api';

const ServiceUserVoteDefinitionUserVoteDefinition_View_Edit = lazy(
  () =>
    import(
      '~/containers/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/ServiceUserVoteDefinitionUserVoteDefinition_View_Edit'
    ),
);

export interface ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageActions
  extends ServiceUserVoteDefinitionUserVoteDefinition_View_EditActionDefinitions {
  backAction?: () => Promise<void>;
  cancelAction?: () => Promise<void>;
  deleteAction?: () => Promise<void>;
  refreshAction?: (
    queryCustomizer: ServiceUserVoteDefinitionQueryCustomizer,
  ) => Promise<ServiceUserVoteDefinitionStored>;
  updateAction?: () => Promise<void>;
}

export interface ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageProps {
  title: string;
  actions: ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  data: ServiceUserVoteDefinitionStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceUserVoteDefinition, value: any) => void;
  validation: Map<keyof ServiceUserVoteDefinition, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceUserVoteDefinition, string>>>;
  submit: () => Promise<void>;
}

// Name: service::UserVoteDefinition::UserVoteDefinition_View_Edit
export default function ServiceUserVoteDefinitionUserVoteDefinition_View_EditPage(
  props: ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const {
    title,
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
  const queryCustomizer: ServiceUserVoteDefinitionQueryCustomizer = {
    _mask: '{}',
  };

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_gTanUF4-Ee6vsex_cZNQbQ)/TransferObjectViewBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.refreshAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_gTanUF4-Ee6vsex_cZNQbQ)/TransferObjectViewRefreshButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="refresh" />}
              onClick={async () => {
                await actions.refreshAction!(processQueryCustomizer(queryCustomizer));
              }}
            >
              <span>
                {t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.Refresh', { defaultValue: 'Refresh' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.deleteAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_gTanUF4-Ee6vsex_cZNQbQ)/TransferObjectViewDeleteButton"
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
                  actions.deleteAction!();
                }
              }}
            >
              <span>
                {t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.Delete', { defaultValue: 'Delete' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.cancelAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_gTanUF4-Ee6vsex_cZNQbQ)/TransferObjectViewCancelButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="cancel" />}
              onClick={async () => {
                await actions.cancelAction!();
              }}
            >
              <span>
                {t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.Cancel', { defaultValue: 'Cancel' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.updateAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_gTanUF4-Ee6vsex_cZNQbQ)/TransferObjectViewUpdateButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.updateAction!();
              }}
            >
              <span>
                {t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.Update', { defaultValue: 'Save' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <ServiceUserVoteDefinitionUserVoteDefinition_View_Edit
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
        </Box>
      </Suspense>
    </>
  );
}
