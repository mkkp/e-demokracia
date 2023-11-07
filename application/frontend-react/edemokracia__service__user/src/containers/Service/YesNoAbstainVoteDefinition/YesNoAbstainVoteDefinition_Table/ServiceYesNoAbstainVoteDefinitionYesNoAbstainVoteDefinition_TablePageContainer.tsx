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
import type { ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableActionDefinitions } from './ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_Table';
import type {
  ServiceYesNoAbstainVoteDefinition,
  ServiceYesNoAbstainVoteDefinitionStored,
  ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
} from '~/services/data-api';

const ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_Table = lazy(
  () =>
    import(
      '~/containers/Service/YesNoAbstainVoteDefinition/YesNoAbstainVoteDefinition_Table/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_Table'
    ),
);

export interface ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageActions
  extends ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableActionDefinitions {
  serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableBack?: () => Promise<void>;
}

export interface ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageProps {
  title: string;
  actions: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::YesNoAbstainVoteDefinition::YesNoAbstainVoteDefinition_Table
export default function ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePage(
  props: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::YesNoAbstainVoteDefinition::YesNoAbstainVoteDefinition_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableBack!();
              }}
            >
              <span>
                {t(
                  'service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition.Table.service::YesNoAbstainVoteDefinition::YesNoAbstainVoteDefinition_Table::Back',
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
          <ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_Table
            actions={actions}
            refreshCounter={refreshCounter}
          />
        </Box>
      </Suspense>
    </>
  );
}
