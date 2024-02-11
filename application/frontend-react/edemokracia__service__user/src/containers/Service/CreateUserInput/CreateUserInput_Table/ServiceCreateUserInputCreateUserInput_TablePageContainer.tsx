//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPageContainersToGenerate(#application)
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'PageContainer.tsx'
// Template name: actor/src/containers/page.tsx
// Template file: actor/src/containers/page.tsx.hbs

import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Suspense, lazy } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { MdiIcon, PageHeader, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import type {
  ServiceCreateUserInput,
  ServiceCreateUserInputQueryCustomizer,
  ServiceCreateUserInputStored,
} from '~/services/data-api';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { mainContainerPadding } from '~/theme';
import type { ServiceCreateUserInputCreateUserInput_TableActionDefinitions } from './ServiceCreateUserInputCreateUserInput_Table';

const ServiceCreateUserInputCreateUserInput_Table = lazy(
  () =>
    import('~/containers/Service/CreateUserInput/CreateUserInput_Table/ServiceCreateUserInputCreateUserInput_Table'),
);

export interface ServiceCreateUserInputCreateUserInput_TablePageActions
  extends ServiceCreateUserInputCreateUserInput_TableActionDefinitions {
  backAction?: () => Promise<void>;
}

export interface ServiceCreateUserInputCreateUserInput_TablePageProps {
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
  const { actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={actions?.getPageTitle ? actions?.getPageTitle() : ''}>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_eNzsYI1eEe2J66C5CrhpQw)/TransferObjectTableBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              disabled={editMode}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('service.CreateUserInput.CreateUserInput_Table.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <ServiceCreateUserInputCreateUserInput_Table
            actions={actions}
            refreshCounter={refreshCounter}
            isLoading={isLoading}
          />
        </Box>
      </Suspense>
    </>
  );
}
