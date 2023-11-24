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
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceUserIssues,
  ServiceUserIssuesQueryCustomizer,
  ServiceUserIssuesStored,
} from '~/services/data-api';
import type { ServiceUserIssuesUserIssues_View_EditActiveIssuesGlobalComponentActionDefinitions } from './components/ServiceUserIssuesUserIssues_View_EditActiveIssuesGlobalComponent';
import { ServiceUserIssuesUserIssues_View_EditActiveIssuesGlobalComponent } from './components/ServiceUserIssuesUserIssues_View_EditActiveIssuesGlobalComponent';
import type { ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCitiesComponentActionDefinitions } from './components/ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCitiesComponent';
import { ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCitiesComponent } from './components/ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCitiesComponent';
import type { ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCountiesComponentActionDefinitions } from './components/ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCountiesComponent';
import { ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCountiesComponent } from './components/ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCountiesComponent';
import type { ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityDistrictsComponentActionDefinitions } from './components/ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityDistrictsComponent';
import { ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityDistrictsComponent } from './components/ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityDistrictsComponent';
import type { ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentCityComponentActionDefinitions } from './components/ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentCityComponent';
import { ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentCityComponent } from './components/ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentCityComponent';
import type { ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentCountyComponentActionDefinitions } from './components/ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentCountyComponent';
import { ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentCountyComponent } from './components/ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentCountyComponent';
import type { ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentDistrictComponentActionDefinitions } from './components/ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentDistrictComponent';
import { ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentDistrictComponent } from './components/ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentDistrictComponent';
import type { ServiceUserIssuesUserIssues_View_EditOwnedIssuesComponentActionDefinitions } from './components/ServiceUserIssuesUserIssues_View_EditOwnedIssuesComponent';
import { ServiceUserIssuesUserIssues_View_EditOwnedIssuesComponent } from './components/ServiceUserIssuesUserIssues_View_EditOwnedIssuesComponent';

export interface ServiceUserIssuesUserIssues_View_EditActionDefinitions
  extends ServiceUserIssuesUserIssues_View_EditActiveIssuesGlobalComponentActionDefinitions,
    ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCitiesComponentActionDefinitions,
    ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCountiesComponentActionDefinitions,
    ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityDistrictsComponentActionDefinitions,
    ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentCityComponentActionDefinitions,
    ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentCountyComponentActionDefinitions,
    ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentDistrictComponentActionDefinitions,
    ServiceUserIssuesUserIssues_View_EditOwnedIssuesComponentActionDefinitions {
  createIssueAction?: () => Promise<void>;
}

export interface ServiceUserIssuesUserIssues_View_EditProps {
  refreshCounter: number;
  actions: ServiceUserIssuesUserIssues_View_EditActionDefinitions;

  data: ServiceUserIssuesStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceUserIssues, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceUserIssues, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceUserIssues, string>>>;
}

// XMIID: User/(esm/_jK51wFq4Ee6_67aMO2jOsw)/TransferObjectViewPageContainer
// Name: service::UserIssues::UserIssues_View_Edit
export default function ServiceUserIssuesUserIssues_View_Edit(props: ServiceUserIssuesUserIssues_View_EditProps) {
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
        <Grid
          id="User/(esm/_AMMw8FrVEe6gN-oVBDDIOQ)/GroupVisualElement"
          container
          direction="row"
          alignItems="flex-start"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={4.0}>
            <Grid container spacing={2}>
              <Grid item>
                <LoadingButton
                  id="User/(esm/_jK51w1q4Ee6_67aMO2jOsw)/OperationFormVisualElement"
                  loading={isLoading}
                  startIcon={<MdiIcon path="wechat" />}
                  loadingPosition="start"
                  onClick={
                    actions.createIssueAction
                      ? async () => {
                          await actions.createIssueAction!();
                        }
                      : undefined
                  }
                  disabled={editMode}
                >
                  <span>
                    {t('service.UserIssues.UserIssues_View_Edit.createIssue', { defaultValue: 'Create issue' })}
                  </span>
                </LoadingButton>
              </Grid>
            </Grid>
          </Grid>

          <Grid container item xs={12} sm={12}>
            <ModeledTabs
              id="User/(esm/_MLBlUFrTEe6_67aMO2jOsw)/TabBarVisualElement"
              ownerData={data}
              validation={validation}
              orientation='horizontal'
              childTabs={[
                {
                  id: 'User/(esm/_jK51xlq4Ee6_67aMO2jOsw)/GroupTab',
                  name: 'service.UserIssues.UserIssues_View_Edit.ownedIssuesGroup',
                  label: t('service.UserIssues.UserIssues_View_Edit.ownedIssuesGroup', {
                    defaultValue: 'Owned issues',
                  }) as string,
                  disabled: isLoading,
                  hidden: false,
                  icon: 'account-box',
                  nestedDataKeys: ['ownedIssues'],
                },
                {
                  id: 'User/(esm/_QrpoIFrkEe6gN-oVBDDIOQ)/GroupTab',
                  name: 'service.UserIssues.UserIssues_View_Edit.activeGlobalIssues',
                  label: t('service.UserIssues.UserIssues_View_Edit.activeGlobalIssues', {
                    defaultValue: 'Active global issues',
                  }) as string,
                  disabled: isLoading,
                  hidden: false,
                  icon: 'earth',
                  nestedDataKeys: ['activeIssuesGlobal'],
                },
                {
                  id: 'User/(esm/_ylgcVFrVEe6gN-oVBDDIOQ)/GroupTab',
                  name: 'service.UserIssues.UserIssues_View_Edit.activeIssuesByActivityArea',
                  label: t('service.UserIssues.UserIssues_View_Edit.activeIssuesByActivityArea', {
                    defaultValue: 'Active issues by my activity areas',
                  }) as string,
                  disabled: isLoading,
                  hidden: false,
                  icon: 'map-search',
                  nestedDataKeys: [
                    'activeIssuesInActivityCities',
                    'activeIssuesInActivityCounties',
                    'activeIssuesInActivityDistricts',
                  ],
                },
                {
                  id: 'User/(esm/_RR4bUFrcEe6gN-oVBDDIOQ)/GroupTab',
                  name: 'service.UserIssues.UserIssues_View_Edit.activeIssuesByResidentArea',
                  label: t('service.UserIssues.UserIssues_View_Edit.activeIssuesByResidentArea', {
                    defaultValue: 'Active issues by my resident area',
                  }) as string,
                  disabled: isLoading,
                  hidden: false,
                  icon: 'home-circle',
                  nestedDataKeys: [
                    'activeIssuesInResidentCity',
                    'activeIssuesInResidentCounty',
                    'activeIssuesInResidentDistrict',
                  ],
                },
              ]}
            >
              <Grid item xs={12} sm={12}>
                <Card id="User/(esm/_jK51xlq4Ee6_67aMO2jOsw)/GroupVisualElement">
                  <CardContent>
                    <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedTable"
                          container
                          direction="column"
                          alignItems="stretch"
                          justifyContent="flex-start"
                        >
                          <ServiceUserIssuesUserIssues_View_EditOwnedIssuesComponent
                            uniqueId={'User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedTable'}
                            actions={actions}
                            ownerData={data}
                            editMode={editMode}
                            isFormUpdateable={isFormUpdateable}
                            validationError={validation.get('ownedIssues')}
                            refreshCounter={refreshCounter}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Card id="User/(esm/_QrpoIFrkEe6gN-oVBDDIOQ)/GroupVisualElement">
                  <CardContent>
                    <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="_sQDe8YshEe6I4ZdrLoQBLA)/LabelWrapper"
                          container
                          direction="column"
                          alignItems="center"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12}>
                            <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                              <Typography id="_sQDe8YshEe6I4ZdrLoQBLA)/Label" variant="h5" component="h1">
                                {t('service.UserIssues.UserIssues_View_Edit.activeGlobal.Label', {
                                  defaultValue: 'Global',
                                })}
                              </Typography>
                            </Grid>
                          </Grid>

                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_ZNCGQFrXEe6gN-oVBDDIOQ)/GroupVisualElement"
                              container
                              direction="row"
                              alignItems="stretch"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_ylgcV1rVEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                >
                                  <ServiceUserIssuesUserIssues_View_EditActiveIssuesGlobalComponent
                                    uniqueId={
                                      'User/(esm/_ylgcV1rVEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable'
                                    }
                                    actions={actions}
                                    ownerData={data}
                                    editMode={editMode}
                                    isFormUpdateable={isFormUpdateable}
                                    validationError={validation.get('activeIssuesGlobal')}
                                    refreshCounter={refreshCounter}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Card id="User/(esm/_ylgcVFrVEe6gN-oVBDDIOQ)/GroupVisualElement">
                  <CardContent>
                    <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                      <Grid container item xs={12} sm={12}>
                        <ModeledTabs
                          id="User/(esm/_W_R1QFrXEe6gN-oVBDDIOQ)/TabBarVisualElement"
                          ownerData={data}
                          validation={validation}
                          orientation='vertical'
                          childTabs={[
                            {
                              id: 'User/(esm/_4JbF8FrXEe6gN-oVBDDIOQ)/GroupTab',
                              name: 'service.UserIssues.UserIssues_View_Edit.activeByActivityInCounty',
                              label: t('service.UserIssues.UserIssues_View_Edit.activeByActivityInCounty', {
                                defaultValue: 'County',
                              }) as string,
                              disabled: isLoading,
                              hidden: false,
                              icon: 'castle',
                              nestedDataKeys: ['activeIssuesInActivityCounties'],
                            },
                            {
                              id: 'User/(esm/_u6ZqQFraEe6gN-oVBDDIOQ)/GroupTab',
                              name: 'service.UserIssues.UserIssues_View_Edit.activeByActivityInCity',
                              label: t('service.UserIssues.UserIssues_View_Edit.activeByActivityInCity', {
                                defaultValue: 'City',
                              }) as string,
                              disabled: isLoading,
                              hidden: false,
                              icon: 'city',
                              nestedDataKeys: ['activeIssuesInActivityCities'],
                            },
                            {
                              id: 'User/(esm/_od5rcFrbEe6gN-oVBDDIOQ)/GroupTab',
                              name: 'service.UserIssues.UserIssues_View_Edit.activeByActivityInDistrict',
                              label: t('service.UserIssues.UserIssues_View_Edit.activeByActivityInDistrict', {
                                defaultValue: 'District',
                              }) as string,
                              disabled: isLoading,
                              hidden: false,
                              icon: 'home-city',
                              nestedDataKeys: ['activeIssuesInActivityDistricts'],
                            },
                          ]}
                        >
                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_4JbF8FrXEe6gN-oVBDDIOQ)/GroupVisualElement"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_7CQ7UFrXEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                >
                                  <ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCountiesComponent
                                    uniqueId={
                                      'User/(esm/_7CQ7UFrXEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable'
                                    }
                                    actions={actions}
                                    ownerData={data}
                                    editMode={editMode}
                                    isFormUpdateable={isFormUpdateable}
                                    validationError={validation.get('activeIssuesInActivityCounties')}
                                    refreshCounter={refreshCounter}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>

                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_u6ZqQFraEe6gN-oVBDDIOQ)/GroupVisualElement"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_zR1kkFraEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                >
                                  <ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCitiesComponent
                                    uniqueId={
                                      'User/(esm/_zR1kkFraEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable'
                                    }
                                    actions={actions}
                                    ownerData={data}
                                    editMode={editMode}
                                    isFormUpdateable={isFormUpdateable}
                                    validationError={validation.get('activeIssuesInActivityCities')}
                                    refreshCounter={refreshCounter}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>

                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_od5rcFrbEe6gN-oVBDDIOQ)/GroupVisualElement"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_tRA1IFrbEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                >
                                  <ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityDistrictsComponent
                                    uniqueId={
                                      'User/(esm/_tRA1IFrbEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable'
                                    }
                                    actions={actions}
                                    ownerData={data}
                                    editMode={editMode}
                                    isFormUpdateable={isFormUpdateable}
                                    validationError={validation.get('activeIssuesInActivityDistricts')}
                                    refreshCounter={refreshCounter}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </ModeledTabs>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Card id="User/(esm/_RR4bUFrcEe6gN-oVBDDIOQ)/GroupVisualElement">
                  <CardContent>
                    <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                      <Grid container item xs={12} sm={12}>
                        <ModeledTabs
                          id="User/(esm/_l86f8FrcEe6gN-oVBDDIOQ)/TabBarVisualElement"
                          ownerData={data}
                          validation={validation}
                          orientation='vertical'
                          childTabs={[
                            {
                              id: 'User/(esm/_BZzvYFrcEe6gN-oVBDDIOQ)/GroupTab',
                              name: 'service.UserIssues.UserIssues_View_Edit.activeByResidentInCounty',
                              label: t('service.UserIssues.UserIssues_View_Edit.activeByResidentInCounty', {
                                defaultValue: 'County',
                              }) as string,
                              disabled: isLoading,
                              hidden: false,
                              icon: 'castle',
                              nestedDataKeys: ['activeIssuesInResidentCounty'],
                            },
                            {
                              id: 'User/(esm/_BZzIUFrcEe6gN-oVBDDIOQ)/GroupTab',
                              name: 'service.UserIssues.UserIssues_View_Edit.activeByResidentInCity',
                              label: t('service.UserIssues.UserIssues_View_Edit.activeByResidentInCity', {
                                defaultValue: 'City',
                              }) as string,
                              disabled: isLoading,
                              hidden: false,
                              icon: 'city',
                              nestedDataKeys: ['activeIssuesInResidentCity'],
                            },
                            {
                              id: 'User/(esm/_BZzIV1rcEe6gN-oVBDDIOQ)/GroupTab',
                              name: 'service.UserIssues.UserIssues_View_Edit.activeByResidentInDistrict',
                              label: t('service.UserIssues.UserIssues_View_Edit.activeByResidentInDistrict', {
                                defaultValue: 'District',
                              }) as string,
                              disabled: isLoading,
                              hidden: false,
                              icon: 'home-city',
                              nestedDataKeys: ['activeIssuesInResidentDistrict'],
                            },
                          ]}
                        >
                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_BZzvYFrcEe6gN-oVBDDIOQ)/GroupVisualElement"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_BZzvYVrcEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                >
                                  <ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentCountyComponent
                                    uniqueId={
                                      'User/(esm/_BZzvYVrcEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable'
                                    }
                                    actions={actions}
                                    ownerData={data}
                                    editMode={editMode}
                                    isFormUpdateable={isFormUpdateable}
                                    validationError={validation.get('activeIssuesInResidentCounty')}
                                    refreshCounter={refreshCounter}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>

                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_BZzIUFrcEe6gN-oVBDDIOQ)/GroupVisualElement"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_BZzIUVrcEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                >
                                  <ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentCityComponent
                                    uniqueId={
                                      'User/(esm/_BZzIUVrcEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable'
                                    }
                                    actions={actions}
                                    ownerData={data}
                                    editMode={editMode}
                                    isFormUpdateable={isFormUpdateable}
                                    validationError={validation.get('activeIssuesInResidentCity')}
                                    refreshCounter={refreshCounter}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>

                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_BZzIV1rcEe6gN-oVBDDIOQ)/GroupVisualElement"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_BZzIWFrcEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                >
                                  <ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentDistrictComponent
                                    uniqueId={
                                      'User/(esm/_BZzIWFrcEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable'
                                    }
                                    actions={actions}
                                    ownerData={data}
                                    editMode={editMode}
                                    isFormUpdateable={isFormUpdateable}
                                    validationError={validation.get('activeIssuesInResidentDistrict')}
                                    refreshCounter={refreshCounter}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </ModeledTabs>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </ModeledTabs>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
