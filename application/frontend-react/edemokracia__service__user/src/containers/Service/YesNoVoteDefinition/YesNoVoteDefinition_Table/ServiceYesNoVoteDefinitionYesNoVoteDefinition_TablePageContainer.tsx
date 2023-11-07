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
import type { ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableActionDefinitions } from './ServiceYesNoVoteDefinitionYesNoVoteDefinition_Table';
import type {
  ServiceYesNoVoteDefinition,
  ServiceYesNoVoteDefinitionStored,
  ServiceYesNoVoteDefinitionQueryCustomizer,
} from '~/services/data-api';

const ServiceYesNoVoteDefinitionYesNoVoteDefinition_Table = lazy(
  () =>
    import(
      '~/containers/Service/YesNoVoteDefinition/YesNoVoteDefinition_Table/ServiceYesNoVoteDefinitionYesNoVoteDefinition_Table'
    ),
);

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_TablePageActions
  extends ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableActionDefinitions {
  serviceYesNoVoteDefinitionYesNoVoteDefinition_TableBack?: () => Promise<void>;
}

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_TablePageProps {
  title: string;
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
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::YesNoVoteDefinition::YesNoVoteDefinition_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_TableBack!();
              }}
            >
              <span>
                {t(
                  'service.YesNoVoteDefinition.YesNoVoteDefinition.Table.service::YesNoVoteDefinition::YesNoVoteDefinition_Table::Back',
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
          <ServiceYesNoVoteDefinitionYesNoVoteDefinition_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
