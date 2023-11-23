//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPageContainersToGenerate(#application)
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'PageContainer.tsx'
// Template name: actor/src/containers/page.tsx
// Template file: actor/src/containers/page.tsx.hbs

import { lazy, Suspense } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation, MdiIcon, PageHeader } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { mainContainerPadding } from '~/theme';
import type { ServiceUserProfileUserProfile_TableActionDefinitions } from './ServiceUserProfileUserProfile_Table';
import type {
  ServiceUserProfile,
  ServiceUserProfileStored,
  ServiceUserProfileQueryCustomizer,
} from '~/services/data-api';

const ServiceUserProfileUserProfile_Table = lazy(
  () => import('~/containers/Service/UserProfile/UserProfile_Table/ServiceUserProfileUserProfile_Table'),
);

export interface ServiceUserProfileUserProfile_TablePageActions
  extends ServiceUserProfileUserProfile_TableActionDefinitions {
  backAction?: () => Promise<void>;
}

export interface ServiceUserProfileUserProfile_TablePageProps {
  title: string;
  actions: ServiceUserProfileUserProfile_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::UserProfile::UserProfile_Table
export default function ServiceUserProfileUserProfile_TablePage(props: ServiceUserProfileUserProfile_TablePageProps) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_1QjBMFvQEe6jm_SkPSYEYw)/TransferObjectTableBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('service.UserProfile.UserProfile_Table.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <ServiceUserProfileUserProfile_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
