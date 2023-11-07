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
import type { ServiceServicePrincipalUserServicePrincipalUser_TableActionDefinitions } from './ServiceServicePrincipalUserServicePrincipalUser_Table';
import type {
  ServiceServicePrincipalUser,
  ServiceServicePrincipalUserStored,
  ServiceServicePrincipalUserQueryCustomizer,
} from '~/services/data-api';

const ServiceServicePrincipalUserServicePrincipalUser_Table = lazy(
  () =>
    import(
      '~/containers/Service/ServicePrincipalUser/ServicePrincipalUser_Table/ServiceServicePrincipalUserServicePrincipalUser_Table'
    ),
);

export interface ServiceServicePrincipalUserServicePrincipalUser_TablePageActions
  extends ServiceServicePrincipalUserServicePrincipalUser_TableActionDefinitions {
  serviceServicePrincipalUserServicePrincipalUser_TableBack?: () => Promise<void>;
}

export interface ServiceServicePrincipalUserServicePrincipalUser_TablePageProps {
  title: string;
  actions: ServiceServicePrincipalUserServicePrincipalUser_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::ServicePrincipalUser::ServicePrincipalUser_Table
export default function ServiceServicePrincipalUserServicePrincipalUser_TablePage(
  props: ServiceServicePrincipalUserServicePrincipalUser_TablePageProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.serviceServicePrincipalUserServicePrincipalUser_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::ServicePrincipalUser::ServicePrincipalUser_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceServicePrincipalUserServicePrincipalUser_TableBack!();
              }}
            >
              <span>
                {t(
                  'service.ServicePrincipalUser.ServicePrincipalUser.Table.service::ServicePrincipalUser::ServicePrincipalUser_Table::Back',
                  { defaultValue: 'Back' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <ServiceServicePrincipalUserServicePrincipalUser_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
