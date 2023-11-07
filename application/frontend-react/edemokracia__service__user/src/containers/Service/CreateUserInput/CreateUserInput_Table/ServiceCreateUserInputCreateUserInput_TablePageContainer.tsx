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
import type { ServiceCreateUserInputCreateUserInput_TableActionDefinitions } from './ServiceCreateUserInputCreateUserInput_Table';
import type {
  ServiceCreateUserInput,
  ServiceCreateUserInputStored,
  ServiceCreateUserInputQueryCustomizer,
} from '~/services/data-api';

const ServiceCreateUserInputCreateUserInput_Table = lazy(
  () =>
    import('~/containers/Service/CreateUserInput/CreateUserInput_Table/ServiceCreateUserInputCreateUserInput_Table'),
);

export interface ServiceCreateUserInputCreateUserInput_TablePageActions
  extends ServiceCreateUserInputCreateUserInput_TableActionDefinitions {
  serviceCreateUserInputCreateUserInput_TableBack?: () => Promise<void>;
}

export interface ServiceCreateUserInputCreateUserInput_TablePageProps {
  title: string;
  actions: ServiceCreateUserInputCreateUserInput_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::CreateUserInput::CreateUserInput_Table
export default function ServiceCreateUserInputCreateUserInput_TablePage(
  props: ServiceCreateUserInputCreateUserInput_TablePageProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.serviceCreateUserInputCreateUserInput_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::CreateUserInput::CreateUserInput_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceCreateUserInputCreateUserInput_TableBack!();
              }}
            >
              <span>
                {t(
                  'service.CreateUserInput.CreateUserInput.Table.service::CreateUserInput::CreateUserInput_Table::Back',
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
          <ServiceCreateUserInputCreateUserInput_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
