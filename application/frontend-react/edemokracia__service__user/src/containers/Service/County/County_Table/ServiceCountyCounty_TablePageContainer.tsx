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
import type { ServiceCountyCounty_TableActionDefinitions } from './ServiceCountyCounty_Table';
import type { ServiceCounty, ServiceCountyStored, ServiceCountyQueryCustomizer } from '~/services/data-api';

const ServiceCountyCounty_Table = lazy(
  () => import('~/containers/Service/County/County_Table/ServiceCountyCounty_Table'),
);

export interface ServiceCountyCounty_TablePageActions extends ServiceCountyCounty_TableActionDefinitions {
  serviceCountyCounty_TableBack?: () => Promise<void>;
}

export interface ServiceCountyCounty_TablePageProps {
  title: string;
  actions: ServiceCountyCounty_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::County::County_Table
export default function ServiceCountyCounty_TablePage(props: ServiceCountyCounty_TablePageProps) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.serviceCountyCounty_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::County::County_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceCountyCounty_TableBack!();
              }}
            >
              <span>
                {t('service.County.County.Table.service::County::County_Table::Back', { defaultValue: 'Back' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <ServiceCountyCounty_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
