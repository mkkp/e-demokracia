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
import type { ServiceIssueAttachmentIssueAttachment_TableActionDefinitions } from './ServiceIssueAttachmentIssueAttachment_Table';
import type {
  ServiceIssueAttachment,
  ServiceIssueAttachmentStored,
  ServiceIssueAttachmentQueryCustomizer,
} from '~/services/data-api';

const ServiceIssueAttachmentIssueAttachment_Table = lazy(
  () =>
    import('~/containers/Service/IssueAttachment/IssueAttachment_Table/ServiceIssueAttachmentIssueAttachment_Table'),
);

export interface ServiceIssueAttachmentIssueAttachment_TablePageActions
  extends ServiceIssueAttachmentIssueAttachment_TableActionDefinitions {
  serviceIssueAttachmentIssueAttachment_TableBack?: () => Promise<void>;
}

export interface ServiceIssueAttachmentIssueAttachment_TablePageProps {
  title: string;
  actions: ServiceIssueAttachmentIssueAttachment_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::IssueAttachment::IssueAttachment_Table
export default function ServiceIssueAttachmentIssueAttachment_TablePage(
  props: ServiceIssueAttachmentIssueAttachment_TablePageProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.serviceIssueAttachmentIssueAttachment_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::IssueAttachment::IssueAttachment_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceIssueAttachmentIssueAttachment_TableBack!();
              }}
            >
              <span>
                {t(
                  'service.IssueAttachment.IssueAttachment.Table.service::IssueAttachment::IssueAttachment_Table::Back',
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
          <ServiceIssueAttachmentIssueAttachment_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
