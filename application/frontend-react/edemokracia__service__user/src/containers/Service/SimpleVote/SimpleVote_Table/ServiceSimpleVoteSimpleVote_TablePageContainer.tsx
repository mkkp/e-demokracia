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
import type { ServiceSimpleVoteSimpleVote_TableActionDefinitions } from './ServiceSimpleVoteSimpleVote_Table';
import type { ServiceSimpleVote, ServiceSimpleVoteStored, ServiceSimpleVoteQueryCustomizer } from '~/services/data-api';

const ServiceSimpleVoteSimpleVote_Table = lazy(
  () => import('~/containers/Service/SimpleVote/SimpleVote_Table/ServiceSimpleVoteSimpleVote_Table'),
);

export interface ServiceSimpleVoteSimpleVote_TablePageActions
  extends ServiceSimpleVoteSimpleVote_TableActionDefinitions {
  serviceSimpleVoteSimpleVote_TableBack?: () => Promise<void>;
}

export interface ServiceSimpleVoteSimpleVote_TablePageProps {
  title: string;
  actions: ServiceSimpleVoteSimpleVote_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::SimpleVote::SimpleVote_Table
export default function ServiceSimpleVoteSimpleVote_TablePage(props: ServiceSimpleVoteSimpleVote_TablePageProps) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.serviceSimpleVoteSimpleVote_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::SimpleVote::SimpleVote_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceSimpleVoteSimpleVote_TableBack!();
              }}
            >
              <span>
                {t('service.SimpleVote.SimpleVote.Table.service::SimpleVote::SimpleVote_Table::Back', {
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
          <ServiceSimpleVoteSimpleVote_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
