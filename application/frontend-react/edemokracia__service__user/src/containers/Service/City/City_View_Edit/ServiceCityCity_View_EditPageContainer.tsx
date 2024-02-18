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
import type { ServiceCity, ServiceCityQueryCustomizer, ServiceCityStored } from '~/services/data-api';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { mainContainerPadding } from '~/theme';
import { processQueryCustomizer } from '~/utilities';
import type { ServiceCityCity_View_EditActionDefinitions } from './ServiceCityCity_View_Edit';

const ServiceCityCity_View_Edit = lazy(
  () => import('~/containers/Service/City/City_View_Edit/ServiceCityCity_View_Edit'),
);

export interface ServiceCityCity_View_EditPageActions extends ServiceCityCity_View_EditActionDefinitions {
  backAction?: () => Promise<void>;
  cancelAction?: () => Promise<void>;
  deleteAction?: () => Promise<void>;
  refreshAction?: (queryCustomizer: ServiceCityQueryCustomizer) => Promise<JudoRestResponse<ServiceCityStored>>;
  updateAction?: () => Promise<void>;
}

export interface ServiceCityCity_View_EditPageProps {
  actions: ServiceCityCity_View_EditPageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  data: ServiceCityStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceCity, value: any) => void;
  validation: Map<keyof ServiceCity, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceCity, string>>>;
  submit: () => Promise<void>;
}

// Name: service::City::City_View_Edit
export default function ServiceCityCity_View_EditPage(props: ServiceCityCity_View_EditPageProps) {
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
  const queryCustomizer: ServiceCityQueryCustomizer = {
    _mask: actions.getMask ? actions.getMask!() : '{name,representation,districts{name}}',
  };

  return (
    <>
      <PageHeader title={actions?.getPageTitle ? actions?.getPageTitle(data) : ''}>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_a0XkuH2iEe2LTNnGda5kaw)/TransferObjectViewBackButton"
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
              id="User/(esm/_a0XkuH2iEe2LTNnGda5kaw)/TransferObjectViewRefreshButton"
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
              id="User/(esm/_a0XkuH2iEe2LTNnGda5kaw)/TransferObjectViewDeleteButton"
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
              id="User/(esm/_a0XkuH2iEe2LTNnGda5kaw)/TransferObjectViewCancelButton"
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
              id="User/(esm/_a0XkuH2iEe2LTNnGda5kaw)/TransferObjectViewUpdateButton"
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
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <ServiceCityCity_View_Edit
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
