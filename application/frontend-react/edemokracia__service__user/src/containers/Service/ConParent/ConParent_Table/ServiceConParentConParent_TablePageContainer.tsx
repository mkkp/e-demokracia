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
import type { ServiceConParentConParent_TableActionDefinitions } from './ServiceConParentConParent_Table';
import type { ServiceConParent, ServiceConParentStored, ServiceConParentQueryCustomizer } from '~/services/data-api';

const ServiceConParentConParent_Table = lazy(
  () => import('~/containers/Service/ConParent/ConParent_Table/ServiceConParentConParent_Table'),
);

export interface ServiceConParentConParent_TablePageActions extends ServiceConParentConParent_TableActionDefinitions {
  serviceConParentConParent_TableBack?: () => Promise<void>;
}

export interface ServiceConParentConParent_TablePageProps {
  title: string;
  actions: ServiceConParentConParent_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::ConParent::ConParent_Table
export default function ServiceConParentConParent_TablePage(props: ServiceConParentConParent_TablePageProps) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.serviceConParentConParent_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::ConParent::ConParent_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceConParentConParent_TableBack!();
              }}
            >
              <span>
                {t('service.ConParent.ConParent.Table.service::ConParent::ConParent_Table::Back', {
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
          <ServiceConParentConParent_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
