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
import type { ServiceCommentComment_TableActionDefinitions } from './ServiceCommentComment_Table';
import type { ServiceComment, ServiceCommentStored, ServiceCommentQueryCustomizer } from '~/services/data-api';

const ServiceCommentComment_Table = lazy(
  () => import('~/containers/Service/Comment/Comment_Table/ServiceCommentComment_Table'),
);

export interface ServiceCommentComment_TablePageActions extends ServiceCommentComment_TableActionDefinitions {
  serviceCommentComment_TableBack?: () => Promise<void>;
}

export interface ServiceCommentComment_TablePageProps {
  title: string;
  actions: ServiceCommentComment_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::Comment::Comment_Table
export default function ServiceCommentComment_TablePage(props: ServiceCommentComment_TablePageProps) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.serviceCommentComment_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::Comment::Comment_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceCommentComment_TableBack!();
              }}
            >
              <span>
                {t('service.Comment.Comment.Table.service::Comment::Comment_Table::Back', { defaultValue: 'Back' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <ServiceCommentComment_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
