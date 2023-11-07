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
import type { ServiceIssueCategoryIssueCategory_TableActionDefinitions } from './ServiceIssueCategoryIssueCategory_Table';
import type {
  ServiceIssueCategory,
  ServiceIssueCategoryStored,
  ServiceIssueCategoryQueryCustomizer,
} from '~/services/data-api';

const ServiceIssueCategoryIssueCategory_Table = lazy(
  () => import('~/containers/Service/IssueCategory/IssueCategory_Table/ServiceIssueCategoryIssueCategory_Table'),
);

export interface ServiceIssueCategoryIssueCategory_TablePageActions
  extends ServiceIssueCategoryIssueCategory_TableActionDefinitions {
  serviceIssueCategoryIssueCategory_TableBack?: () => Promise<void>;
}

export interface ServiceIssueCategoryIssueCategory_TablePageProps {
  title: string;
  actions: ServiceIssueCategoryIssueCategory_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::IssueCategory::IssueCategory_Table
export default function ServiceIssueCategoryIssueCategory_TablePage(
  props: ServiceIssueCategoryIssueCategory_TablePageProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.serviceIssueCategoryIssueCategory_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::IssueCategory::IssueCategory_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceIssueCategoryIssueCategory_TableBack!();
              }}
            >
              <span>
                {t('service.IssueCategory.IssueCategory.Table.service::IssueCategory::IssueCategory_Table::Back', {
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
          <ServiceIssueCategoryIssueCategory_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
