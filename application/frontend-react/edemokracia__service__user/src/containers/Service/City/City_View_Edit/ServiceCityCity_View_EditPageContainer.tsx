//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPageContainersToGenerate(#application)
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'PageContainer.tsx'
// Template name: actor/src/containers/page.tsx
// Template file: actor/src/containers/page.tsx.hbs

import { lazy, Suspense } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { Box, Grid, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation, MdiIcon, PageHeader } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { mainContainerPadding } from '~/theme';
import { processQueryCustomizer } from '~/utilities';
import type { ServiceCityCity_View_EditActionDefinitions } from './ServiceCityCity_View_Edit';
import type { ServiceCity, ServiceCityStored, ServiceCityQueryCustomizer } from '~/services/data-api';

const ServiceCityCity_View_Edit = lazy(
  () => import('~/containers/Service/City/City_View_Edit/ServiceCityCity_View_Edit'),
);

export interface ServiceCityCity_View_EditPageActions extends ServiceCityCity_View_EditActionDefinitions {
  serviceCityCity_View_EditBack?: () => Promise<void>;
  serviceCityCity_View_EditCancel?: () => Promise<void>;
  serviceCityCity_View_EditDelete?: () => Promise<void>;
  serviceCityCity_View_EditRefresh?: (queryCustomizer: ServiceCityQueryCustomizer) => Promise<ServiceCityStored>;
  serviceCityCity_View_EditUpdate?: () => Promise<void>;
}

export interface ServiceCityCity_View_EditPageProps {
  title: string;
  actions: ServiceCityCity_View_EditPageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  data: ServiceCity;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceCity, value: any) => void;
  validation: Map<keyof ServiceCity, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceCity, string>>>;
}

// Name: service::City::City_View_Edit
export default function ServiceCityCity_View_EditPage(props: ServiceCityCity_View_EditPageProps) {
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
  } = props;
  const queryCustomizer: ServiceCityQueryCustomizer = {
    _mask: '{name,districts{name}}',
  };

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.serviceCityCity_View_EditBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::City::City_View_Edit::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceCityCity_View_EditBack!();
              }}
            >
              <span>
                {t('service.City.City.View.Edit.service::City::City_View_Edit::Back', { defaultValue: 'Back' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.serviceCityCity_View_EditRefresh && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::City::City_View_Edit::Refresh"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="refresh" />}
              onClick={async () => {
                await actions.serviceCityCity_View_EditRefresh!(processQueryCustomizer(queryCustomizer));
              }}
            >
              <span>
                {t('service.City.City.View.Edit.service::City::City_View_Edit::Refresh', { defaultValue: 'Refresh' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.serviceCityCity_View_EditDelete && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::City::City_View_Edit::Delete"
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
                  actions.serviceCityCity_View_EditDelete!();
                }
              }}
            >
              <span>
                {t('service.City.City.View.Edit.service::City::City_View_Edit::Delete', { defaultValue: 'Delete' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceCityCity_View_EditCancel && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::City::City_View_Edit::Cancel"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="cancel" />}
              onClick={async () => {
                await actions.serviceCityCity_View_EditCancel!();
              }}
            >
              <span>
                {t('service.City.City.View.Edit.service::City::City_View_Edit::Cancel', { defaultValue: 'Cancel' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceCityCity_View_EditUpdate && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::City::City_View_Edit::Update"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.serviceCityCity_View_EditUpdate!();
              }}
            >
              <span>
                {t('service.City.City.View.Edit.service::City::City_View_Edit::Update', { defaultValue: 'Save' })}
              </span>
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
            data={data}
            isLoading={isLoading}
            editMode={editMode}
            storeDiff={storeDiff}
            isFormUpdateable={isFormUpdateable}
            isFormDeleteable={isFormDeleteable}
            validation={validation}
            setValidation={setValidation}
          />
        </Box>
      </Suspense>
    </>
  );
}
