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
import type { ServiceConCon_TableActionDefinitions } from './ServiceConCon_Table';
import type { ServiceCon, ServiceConStored, ServiceConQueryCustomizer } from '~/services/data-api';

const ServiceConCon_Table = lazy(() => import('~/containers/Service/Con/Con_Table/ServiceConCon_Table'));

export interface ServiceConCon_TablePageActions extends ServiceConCon_TableActionDefinitions {
  serviceConCon_TableBack?: () => Promise<void>;
}

export interface ServiceConCon_TablePageProps {
  title: string;
  actions: ServiceConCon_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::Con::Con_Table
export default function ServiceConCon_TablePage(props: ServiceConCon_TablePageProps) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.serviceConCon_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::Con::Con_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceConCon_TableBack!();
              }}
            >
              <span>{t('service.Con.Con.Table.service::Con::Con_Table::Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <ServiceConCon_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
