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
import type { ServiceProParentProParent_TableActionDefinitions } from './ServiceProParentProParent_Table';
import type { ServiceProParent, ServiceProParentStored, ServiceProParentQueryCustomizer } from '~/services/data-api';

const ServiceProParentProParent_Table = lazy(
  () => import('~/containers/Service/ProParent/ProParent_Table/ServiceProParentProParent_Table'),
);

export interface ServiceProParentProParent_TablePageActions extends ServiceProParentProParent_TableActionDefinitions {
  serviceProParentProParent_TableBack?: () => Promise<void>;
}

export interface ServiceProParentProParent_TablePageProps {
  title: string;
  actions: ServiceProParentProParent_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::ProParent::ProParent_Table
export default function ServiceProParentProParent_TablePage(props: ServiceProParentProParent_TablePageProps) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.serviceProParentProParent_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::ProParent::ProParent_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceProParentProParent_TableBack!();
              }}
            >
              <span>
                {t('service.ProParent.ProParent.Table.service::ProParent::ProParent_Table::Back', {
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
          <ServiceProParentProParent_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
