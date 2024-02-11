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
  ServiceYesNoVoteDefinition,
  ServiceYesNoVoteDefinitionQueryCustomizer,
  ServiceYesNoVoteDefinitionStored,
} from '~/services/data-api';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { mainContainerPadding } from '~/theme';
import type { ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableActionDefinitions } from './ServiceYesNoVoteDefinitionYesNoVoteDefinition_Table';

const ServiceYesNoVoteDefinitionYesNoVoteDefinition_Table = lazy(
  () =>
    import(
      '~/containers/Service/YesNoVoteDefinition/YesNoVoteDefinition_Table/ServiceYesNoVoteDefinitionYesNoVoteDefinition_Table'
    ),
);

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_TablePageActions
  extends ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableActionDefinitions {
  backAction?: () => Promise<void>;
}

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_TablePageProps {
  actions: ServiceYesNoVoteDefinitionYesNoVoteDefinition_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::YesNoVoteDefinition::YesNoVoteDefinition_Table
export default function ServiceYesNoVoteDefinitionYesNoVoteDefinition_TablePage(
  props: ServiceYesNoVoteDefinitionYesNoVoteDefinition_TablePageProps,
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
              id="User/(esm/_-Zy94H4XEe2cB7_PsKXsHQ)/TransferObjectTableBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              disabled={editMode}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('service.YesNoVoteDefinition.YesNoVoteDefinition_Table.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <ServiceYesNoVoteDefinitionYesNoVoteDefinition_Table
            actions={actions}
            refreshCounter={refreshCounter}
            isLoading={isLoading}
          />
        </Box>
      </Suspense>
    </>
  );
}
