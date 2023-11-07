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
import { processQueryCustomizer } from '~/utilities';
import type { ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditActionDefinitions } from './ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_Edit';
import type {
  ServiceYesNoVoteDefinition,
  ServiceYesNoVoteDefinitionStored,
  ServiceYesNoVoteDefinitionQueryCustomizer,
} from '~/services/data-api';

const ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_Edit = lazy(
  () =>
    import(
      '~/containers/Service/YesNoVoteDefinition/YesNoVoteDefinition_View_Edit/ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_Edit'
    ),
);

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageActions
  extends ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditActionDefinitions {
  serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditBack?: () => Promise<void>;
  serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditCancel?: () => Promise<void>;
  serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditDelete?: () => Promise<void>;
  serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditRefresh?: (
    queryCustomizer: ServiceYesNoVoteDefinitionQueryCustomizer,
  ) => Promise<ServiceYesNoVoteDefinitionStored>;
  serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUpdate?: () => Promise<void>;
}

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageProps {
  title: string;
  actions: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  data: ServiceYesNoVoteDefinition;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceYesNoVoteDefinition, value: any) => void;
  validation: Map<keyof ServiceYesNoVoteDefinition, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceYesNoVoteDefinition, string>>>;
}

// Name: service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit
export default function ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPage(
  props: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const {
    title,
    actions,
    isLoading,
    editMode,
    refreshCounter,
    data,
    isFormUpdateable,
    isFormDeleteable,
    storeDiff,
    validation,
    setValidation,
  } = props;
  const queryCustomizer: ServiceYesNoVoteDefinitionQueryCustomizer = {
    _mask:
      '{userHasVoteEntry,created,description,userHasNoVoteEntry,title,closeAt,status,userVoteEntry{value,created}}',
  };

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditBack!();
              }}
            >
              <span>
                {t(
                  'service.YesNoVoteDefinition.YesNoVoteDefinition.View.Edit.service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit::Back',
                  { defaultValue: 'Back' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditRefresh && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit::Refresh"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="refresh" />}
              onClick={async () => {
                await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditRefresh!(
                  processQueryCustomizer(queryCustomizer),
                );
              }}
            >
              <span>
                {t(
                  'service.YesNoVoteDefinition.YesNoVoteDefinition.View.Edit.service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit::Refresh',
                  { defaultValue: 'Refresh' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditDelete && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit::Delete"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="delete_forever" />}
              onClick={async () => {
                const confirmed = await openConfirmDialog(
                  'page-delete-action',
                  t('judo.modal.confirm.confirm-delete', {
                    defaultValue: 'Are you sure you would like to delete the selected element?',
                  }),
                  t('judo.modal.confirm.confirm-title', { defaultValue: 'Confirm action' }),
                );

                if (confirmed) {
                  actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditDelete!();
                }
              }}
            >
              <span>
                {t(
                  'service.YesNoVoteDefinition.YesNoVoteDefinition.View.Edit.service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit::Delete',
                  { defaultValue: 'Delete' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditCancel && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit::Cancel"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="cancel" />}
              onClick={async () => {
                await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditCancel!();
              }}
            >
              <span>
                {t(
                  'service.YesNoVoteDefinition.YesNoVoteDefinition.View.Edit.service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit::Cancel',
                  { defaultValue: 'Cancel' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUpdate && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit::Update"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUpdate!();
              }}
            >
              <span>
                {t(
                  'service.YesNoVoteDefinition.YesNoVoteDefinition.View.Edit.service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit::Update',
                  { defaultValue: 'Save' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_Edit
            actions={actions}
            refreshCounter={refreshCounter}
            data={data}
            isLoading={isLoading}
            editMode={editMode}
            storeDiff={storeDiff}
            isFormUpdateable={isFormUpdateable}
            isFormDeleteable={isFormDeleteable}
            validation={validation}
            setValidation={setValidation}
          />
        </Box>
      </Suspense>
    </>
  );
}
