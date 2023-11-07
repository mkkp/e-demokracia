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
import type { ServiceServiceUserServiceUser_TableActionDefinitions } from './ServiceServiceUserServiceUser_Table';
import type {
  ServiceServiceUser,
  ServiceServiceUserStored,
  ServiceServiceUserQueryCustomizer,
} from '~/services/data-api';

const ServiceServiceUserServiceUser_Table = lazy(
  () => import('~/containers/Service/ServiceUser/ServiceUser_Table/ServiceServiceUserServiceUser_Table'),
);

export interface ServiceServiceUserServiceUser_TablePageActions
  extends ServiceServiceUserServiceUser_TableActionDefinitions {
  serviceServiceUserServiceUser_TableBack?: () => Promise<void>;
}

export interface ServiceServiceUserServiceUser_TablePageProps {
  title: string;
  actions: ServiceServiceUserServiceUser_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::ServiceUser::ServiceUser_Table
export default function ServiceServiceUserServiceUser_TablePage(props: ServiceServiceUserServiceUser_TablePageProps) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.serviceServiceUserServiceUser_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::ServiceUser::ServiceUser_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceServiceUserServiceUser_TableBack!();
              }}
            >
              <span>
                {t('service.ServiceUser.ServiceUser.Table.service::ServiceUser::ServiceUser_Table::Back', {
                  defaultValue: 'Back',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <ServiceServiceUserServiceUser_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
