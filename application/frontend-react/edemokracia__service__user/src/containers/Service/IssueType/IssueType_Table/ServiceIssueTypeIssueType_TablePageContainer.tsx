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
import type { ServiceIssueTypeIssueType_TableActionDefinitions } from './ServiceIssueTypeIssueType_Table';
import type { ServiceIssueType, ServiceIssueTypeStored, ServiceIssueTypeQueryCustomizer } from '~/services/data-api';

const ServiceIssueTypeIssueType_Table = lazy(
  () => import('~/containers/Service/IssueType/IssueType_Table/ServiceIssueTypeIssueType_Table'),
);

export interface ServiceIssueTypeIssueType_TablePageActions extends ServiceIssueTypeIssueType_TableActionDefinitions {
  serviceIssueTypeIssueType_TableBack?: () => Promise<void>;
}

export interface ServiceIssueTypeIssueType_TablePageProps {
  title: string;
  actions: ServiceIssueTypeIssueType_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::IssueType::IssueType_Table
export default function ServiceIssueTypeIssueType_TablePage(props: ServiceIssueTypeIssueType_TablePageProps) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.serviceIssueTypeIssueType_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::IssueType::IssueType_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceIssueTypeIssueType_TableBack!();
              }}
            >
              <span>
                {t('service.IssueType.IssueType.Table.service::IssueType::IssueType_Table::Back', {
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
          <ServiceIssueTypeIssueType_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
