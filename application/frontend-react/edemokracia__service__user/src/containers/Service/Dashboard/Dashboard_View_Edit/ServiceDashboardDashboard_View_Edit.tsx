//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.pageContainers
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'.tsx'
// Template name: actor/src/containers/container.tsx
// Template file: actor/src/containers/container.tsx.hbs

import type { Dispatch, SetStateAction, FC } from 'react';
import { forwardRef, useEffect, useState, useCallback, useImperativeHandle } from 'react';
import { useTranslation } from 'react-i18next';
import { NumericFormat } from 'react-number-format';
import { LoadingButton } from '@mui/lab';
import { OBJECTCLASS } from '@pandino/pandino-api';
import type { JudoIdentifiable } from '@judo/data-api-common';
import type { CustomFormVisualElementProps } from '~/custom';
import { ComponentProxy } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import type { GridFilterModel } from '@mui/x-data-grid';
import { useL10N } from '~/l10n/l10n-context';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY } from '~/custom';
import { mainContainerPadding } from '~/theme';
import { DIVIDER_HEIGHT } from '~/config';
import type { Filter } from '~/components-api';
import { MdiIcon, ModeledTabs, DropdownButton, useJudoNavigation } from '~/components';
import {
  isErrorOperationFault,
  useErrorHandler,
  fileHandling,
  uiDateToServiceDate,
  serviceDateToUiDate,
  uiTimeToServiceTime,
  serviceTimeToUiTime,
  stringToBooleanSelect,
  booleanToStringSelect,
} from '~/utilities';

import { DatePicker, DateTimePicker, TimePicker } from '@mui/x-date-pickers';
import type { DateValidationError, DateTimeValidationError, TimeValidationError } from '@mui/x-date-pickers';
import {
  AssociationButton,
  BinaryInput,
  CollectionAssociationButton,
  NumericInput,
  TrinaryLogicCombobox,
} from '~/components/widgets';
import { useConfirmationBeforeChange } from '~/hooks';
import {
  ServiceDashboard,
  ServiceDashboardQueryCustomizer,
  ServiceDashboardStored,
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
  ServiceVoteEntry,
  ServiceVoteEntryQueryCustomizer,
  ServiceVoteEntryStored,
} from '~/services/data-api';
import type { ServiceDashboardDashboard_View_EditFavoriteIssuesComponentActionDefinitions } from './components/ServiceDashboardDashboard_View_EditFavoriteIssuesComponent';
import { ServiceDashboardDashboard_View_EditFavoriteIssuesComponent } from './components/ServiceDashboardDashboard_View_EditFavoriteIssuesComponent';
import type { ServiceDashboardDashboard_View_EditOwnedIssuesComponentActionDefinitions } from './components/ServiceDashboardDashboard_View_EditOwnedIssuesComponent';
import { ServiceDashboardDashboard_View_EditOwnedIssuesComponent } from './components/ServiceDashboardDashboard_View_EditOwnedIssuesComponent';
import type { ServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponentActionDefinitions } from './components/ServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponent';
import { ServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponent } from './components/ServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponent';
import type { ServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponentActionDefinitions } from './components/ServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponent';
import { ServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponent } from './components/ServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponent';
import type { ServiceDashboardDashboard_View_EditVoteEntriesComponentActionDefinitions } from './components/ServiceDashboardDashboard_View_EditVoteEntriesComponent';
import { ServiceDashboardDashboard_View_EditVoteEntriesComponent } from './components/ServiceDashboardDashboard_View_EditVoteEntriesComponent';

export interface ServiceDashboardDashboard_View_EditActionDefinitions
  extends ServiceDashboardDashboard_View_EditFavoriteIssuesComponentActionDefinitions,
    ServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponentActionDefinitions,
    ServiceDashboardDashboard_View_EditOwnedIssuesComponentActionDefinitions,
    ServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponentActionDefinitions,
    ServiceDashboardDashboard_View_EditVoteEntriesComponentActionDefinitions {}

export interface ServiceDashboardDashboard_View_EditProps {
  refreshCounter: number;
  actions: ServiceDashboardDashboard_View_EditActionDefinitions;

  data: ServiceDashboardStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceDashboard, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceDashboard, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceDashboard, string>>>;
}

// XMIID: User/(esm/_3M7vYIyNEe2VSOmaAz6G9Q)/TransferObjectViewPageContainer
// Name: service::Dashboard::Dashboard_View_Edit
export default function ServiceDashboardDashboard_View_Edit(props: ServiceDashboardDashboard_View_EditProps) {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const {
    refreshCounter,
    actions,
    data,
    isLoading,
    isFormUpdateable,
    isFormDeleteable,
    storeDiff,
    editMode,
    validation,
    setValidation,
  } = props;
  const { locale: l10nLocale } = useL10N();

  useConfirmationBeforeChange(
    editMode,
    t('judo.form.navigation.confirmation', {
      defaultValue: 'You have potential unsaved changes in your form, are you sure you would like to navigate away?',
    }),
  );

  return (
    <Grid container spacing={2} direction="column" alignItems="stretch" justifyContent="flex-start">
      <Grid item xs={12} sm={12}>
        <Grid container direction="row" alignItems="center">
          <Grid item>
            <Typography id="User/(esm/_Z44lgIyYEe2VSOmaAz6G9Q)/StringTypeFormatted">{data.welcome}</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container item xs={12} sm={12}>
        <ModeledTabs
          id="User/(esm/_ekzRUFw5Ee6gN-oVBDDIOQ)/TabBarVisualElement"
          ownerData={data}
          validation={validation}
          orientation='horizontal'
          childTabs={[
            {
              id: 'User/(esm/_P5VicFw5Ee6gN-oVBDDIOQ)/GroupTab',
              name: 'service.Dashboard.Dashboard_View_Edit.issues',
              label: t('service.Dashboard.Dashboard_View_Edit.issues', { defaultValue: 'Issues' }) as string,
              disabled: isLoading,
              hidden: false,
              icon: 'wechat',
              nestedDataKeys: ['favoriteIssues', 'issuesOwned'],
            },
            {
              id: 'User/(esm/_bFZdMGBVEe6M1JBD8stPIg)/GroupTab',
              name: 'service.Dashboard.Dashboard_View_Edit.votes',
              label: t('service.Dashboard.Dashboard_View_Edit.votes', { defaultValue: 'Votes' }) as string,
              disabled: isLoading,
              hidden: false,
              icon: 'vote',
              nestedDataKeys: ['favoriteVoteDefinitions', 'ownedVoteDefinitions'],
            },
            {
              id: 'User/(esm/_YSQVMFw5Ee6gN-oVBDDIOQ)/GroupTab',
              name: 'service.Dashboard.Dashboard_View_Edit.votesCast',
              label: t('service.Dashboard.Dashboard_View_Edit.votesCast', { defaultValue: 'Votes Cast' }) as string,
              disabled: isLoading,
              hidden: false,
              icon: 'vote-outline',
              nestedDataKeys: ['userVoteEntries'],
            },
          ]}
        >
          <Grid item xs={12} sm={12}>
            <Grid
              id="User/(esm/_P5VicFw5Ee6gN-oVBDDIOQ)/GroupVisualElement"
              container
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid container item xs={12} sm={12}>
                <ModeledTabs
                  id="User/(esm/_CR_JgIyUEe2VSOmaAz6G9Q)/TabBarVisualElement"
                  ownerData={data}
                  validation={validation}
                  orientation='vertical'
                  childTabs={[
                    {
                      id: 'User/(esm/_E0b4IIyUEe2VSOmaAz6G9Q)/GroupTab',
                      name: 'service.Dashboard.Dashboard_View_Edit.myissues',
                      label: t('service.Dashboard.Dashboard_View_Edit.myissues', {
                        defaultValue: 'My issues',
                      }) as string,
                      disabled: isLoading,
                      hidden: false,
                      icon: 'account-circle',
                      nestedDataKeys: ['issuesOwned'],
                    },
                    {
                      id: 'User/(esm/_wto7cFw4Ee6gN-oVBDDIOQ)/GroupTab',
                      name: 'service.Dashboard.Dashboard_View_Edit.favoriteIssues',
                      label: t('service.Dashboard.Dashboard_View_Edit.favoriteIssues', {
                        defaultValue: 'Favorite Issues',
                      }) as string,
                      disabled: isLoading,
                      hidden: false,
                      icon: 'star',
                      nestedDataKeys: ['favoriteIssues'],
                    },
                  ]}
                >
                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_E0b4IIyUEe2VSOmaAz6G9Q)/GroupVisualElement"
                      container
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable"
                          container
                          direction="column"
                          alignItems="stretch"
                          justifyContent="flex-start"
                        >
                          <ServiceDashboardDashboard_View_EditOwnedIssuesComponent
                            uniqueId={'User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable'}
                            actions={actions}
                            ownerData={data}
                            editMode={editMode}
                            isFormUpdateable={isFormUpdateable}
                            validationError={validation.get('issuesOwned')}
                            refreshCounter={refreshCounter}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_wto7cFw4Ee6gN-oVBDDIOQ)/GroupVisualElement"
                      container
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="User/(esm/_7sPXAFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable"
                          container
                          direction="column"
                          alignItems="stretch"
                          justifyContent="flex-start"
                        >
                          <ServiceDashboardDashboard_View_EditFavoriteIssuesComponent
                            uniqueId={'User/(esm/_7sPXAFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable'}
                            actions={actions}
                            ownerData={data}
                            editMode={editMode}
                            isFormUpdateable={isFormUpdateable}
                            validationError={validation.get('favoriteIssues')}
                            refreshCounter={refreshCounter}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </ModeledTabs>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Grid
              id="User/(esm/_bFZdMGBVEe6M1JBD8stPIg)/GroupVisualElement"
              container
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid container item xs={12} sm={12}>
                <ModeledTabs
                  id="User/(esm/_ju2mUGBVEe6M1JBD8stPIg)/TabBarVisualElement"
                  ownerData={data}
                  validation={validation}
                  orientation='vertical'
                  childTabs={[
                    {
                      id: 'User/(esm/_rK5hIGBVEe6M1JBD8stPIg)/GroupTab',
                      name: 'service.Dashboard.Dashboard_View_Edit.myVotesGroup',
                      label: t('service.Dashboard.Dashboard_View_Edit.myVotesGroup', {
                        defaultValue: 'My votes',
                      }) as string,
                      disabled: isLoading,
                      hidden: false,
                      icon: 'account-circle',
                      nestedDataKeys: ['ownedVoteDefinitions'],
                    },
                    {
                      id: 'User/(esm/_wvlRsGBVEe6M1JBD8stPIg)/GroupTab',
                      name: 'service.Dashboard.Dashboard_View_Edit.favoriteVotesGroup',
                      label: t('service.Dashboard.Dashboard_View_Edit.favoriteVotesGroup', {
                        defaultValue: 'Favorite votes',
                      }) as string,
                      disabled: isLoading,
                      hidden: false,
                      icon: 'star',
                      nestedDataKeys: ['favoriteVoteDefinitions'],
                    },
                  ]}
                >
                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_rK5hIGBVEe6M1JBD8stPIg)/GroupVisualElement"
                      container
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="User/(esm/_ZesvsGBWEe6M1JBD8stPIg)/TabularReferenceFieldRelationDefinedTable"
                          container
                          direction="column"
                          alignItems="stretch"
                          justifyContent="flex-start"
                        >
                          <ServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponent
                            uniqueId={'User/(esm/_ZesvsGBWEe6M1JBD8stPIg)/TabularReferenceFieldRelationDefinedTable'}
                            actions={actions}
                            ownerData={data}
                            editMode={editMode}
                            isFormUpdateable={isFormUpdateable}
                            validationError={validation.get('ownedVoteDefinitions')}
                            refreshCounter={refreshCounter}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12} md={4.0}>
                    <Grid
                      id="User/(esm/_wvlRsGBVEe6M1JBD8stPIg)/GroupVisualElement"
                      container
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="User/(esm/_vp60sGBWEe6M1JBD8stPIg)/TabularReferenceFieldRelationDefinedTable"
                          container
                          direction="column"
                          alignItems="stretch"
                          justifyContent="flex-start"
                        >
                          <ServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponent
                            uniqueId={'User/(esm/_vp60sGBWEe6M1JBD8stPIg)/TabularReferenceFieldRelationDefinedTable'}
                            actions={actions}
                            ownerData={data}
                            editMode={editMode}
                            isFormUpdateable={isFormUpdateable}
                            validationError={validation.get('favoriteVoteDefinitions')}
                            refreshCounter={refreshCounter}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </ModeledTabs>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Grid
              id="User/(esm/_YSQVMFw5Ee6gN-oVBDDIOQ)/GroupVisualElement"
              container
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_YR3LQFxHEe6ma86ynyYZNw)/TabularReferenceFieldRelationDefinedTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceDashboardDashboard_View_EditVoteEntriesComponent
                    uniqueId={'User/(esm/_YR3LQFxHEe6ma86ynyYZNw)/TabularReferenceFieldRelationDefinedTable'}
                    actions={actions}
                    ownerData={data}
                    editMode={editMode}
                    isFormUpdateable={isFormUpdateable}
                    validationError={validation.get('userVoteEntries')}
                    refreshCounter={refreshCounter}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ModeledTabs>
      </Grid>
    </Grid>
  );
}
