//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.pageContainers
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'.tsx'
// Template name: actor/src/containers/container.tsx
// Template file: actor/src/containers/container.tsx.hbs

import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import type { Dispatch, FC, SetStateAction } from 'react';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownButton, MdiIcon, ModeledTabs, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { useL10N } from '~/l10n/l10n-context';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';

import {} from '@mui/x-date-pickers';
import type {} from '@mui/x-date-pickers';
import {} from '~/components/widgets';
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

export const SERVICE_USER_ISSUES_USER_ISSUES_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_ISSUES_USER_ISSUES_VIEW_EDIT_CONTAINER_ACTIONS_HOOK';
export type ServiceUserIssuesUserIssues_View_EditContainerHook = (
  data: ServiceUserIssuesStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceUserIssues, value: any) => void,
) => ServiceUserIssuesUserIssues_View_EditActionDefinitions;

export interface ServiceUserIssuesUserIssues_View_EditActionDefinitions
  extends ServiceUserIssuesUserIssues_View_EditActiveIssuesGlobalComponentActionDefinitions,
    ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCitiesComponentActionDefinitions,
    ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCountiesComponentActionDefinitions,
    ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityDistrictsComponentActionDefinitions,
    ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentCityComponentActionDefinitions,
    ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentCountyComponentActionDefinitions,
    ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentDistrictComponentActionDefinitions,
    ServiceUserIssuesUserIssues_View_EditOwnedIssuesComponentActionDefinitions {
  getPageTitle?: (data: ServiceUserIssues) => string;
  createIssueAction?: () => Promise<void>;
  getMask?: () => string;
}

export interface ServiceUserIssuesUserIssues_View_EditProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceUserIssuesUserIssues_View_EditActionDefinitions;

  data: ServiceUserIssuesStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceUserIssues, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceUserIssues, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceUserIssues, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// XMIID: User/(esm/_jK51wFq4Ee6_67aMO2jOsw)/TransferObjectViewPageContainer
// Name: service::UserIssues::UserIssues_View_Edit
export default function ServiceUserIssuesUserIssues_View_Edit(props: ServiceUserIssuesUserIssues_View_EditProps) {
  // Container props
  const {
    refreshCounter,
    isLoading,
    isDraft,
    actions: pageActions,
    data,
    isFormUpdateable,
    isFormDeleteable,
    storeDiff,
    editMode,
    validation,
    setValidation,
    submit,
  } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  useConfirmationBeforeChange(
    editMode,
    t('judo.form.navigation.confirmation', {
      defaultValue: 'You have potential unsaved changes in your form, are you sure you would like to navigate away?',
    }),
  );
  // Pandino Container Action overrides
  const { service: customContainerHook } = useTrackService<ServiceUserIssuesUserIssues_View_EditContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_ISSUES_USER_ISSUES_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceUserIssuesUserIssues_View_EditActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);

  return (
    <Grid container>
      <Grid item data-name="UserIssues_View_Edit" xs={12} sm={12} md={36.0}>
        <Grid
          id="User/(esm/_jK51wFq4Ee6_67aMO2jOsw)/TransferObjectViewVisualElement"
          data-name="UserIssues_View_Edit"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item data-name="root" xs={12} sm={12}>
            <Grid
              id="User/(esm/_AMMw8FrVEe6gN-oVBDDIOQ)/GroupVisualElement"
              data-name="root"
              container
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid container item xs={12} sm={12}>
                <ModeledTabs
                  id="User/(esm/_MLBlUFrTEe6_67aMO2jOsw)/TabBarVisualElement"
                  ownerData={data}
                  validation={validation}
                  orientation="horizontal"
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
                  <Grid item data-name="ownedIssuesGroup" xs={12} sm={12}>
                    <Card id="User/(esm/_jK51xlq4Ee6_67aMO2jOsw)/GroupVisualElement" data-name="ownedIssuesGroup">
                      <CardContent>
                        <Grid container direction="row" alignItems="flex-start" justifyContent="flex-start" spacing={2}>
                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedTable"
                              container
                              direction="column"
                              alignItems="stretch"
                              justifyContent="flex-start"
                            >
                              <ServiceUserIssuesUserIssues_View_EditOwnedIssuesComponent
                                uniqueId={
                                  'User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedTable'
                                }
                                actions={actions}
                                ownerData={data}
                                editMode={editMode}
                                isFormUpdateable={isFormUpdateable}
                                validationError={validation.get('ownedIssues')}
                                refreshCounter={refreshCounter}
                                isOwnerLoading={isLoading}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item data-name="activeGlobalIssues" xs={12} sm={12}>
                    <Card id="User/(esm/_QrpoIFrkEe6gN-oVBDDIOQ)/GroupVisualElement" data-name="activeGlobalIssues">
                      <CardContent>
                        <Grid container direction="row" alignItems="flex-start" justifyContent="flex-start" spacing={2}>
                          <Grid item data-name="activeGlobal" xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_ZNCGQFrXEe6gN-oVBDDIOQ)/GroupVisualElement"
                              data-name="activeGlobal"
                              container
                              direction="row"
                              alignItems="flex-start"
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
                                    isOwnerLoading={isLoading}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item data-name="activeIssuesByActivityArea" xs={12} sm={12}>
                    <Card
                      id="User/(esm/_ylgcVFrVEe6gN-oVBDDIOQ)/GroupVisualElement"
                      data-name="activeIssuesByActivityArea"
                    >
                      <CardContent>
                        <Grid container direction="row" alignItems="flex-start" justifyContent="flex-start" spacing={2}>
                          <Grid container item xs={12} sm={12}>
                            <ModeledTabs
                              id="User/(esm/_W_R1QFrXEe6gN-oVBDDIOQ)/TabBarVisualElement"
                              ownerData={data}
                              validation={validation}
                              orientation="vertical"
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
                              <Grid item data-name="activeByActivityInCounty" xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_4JbF8FrXEe6gN-oVBDDIOQ)/GroupVisualElement"
                                  data-name="activeByActivityInCounty"
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
                                        isOwnerLoading={isLoading}
                                      />
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>

                              <Grid item data-name="activeByActivityInCity" xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_u6ZqQFraEe6gN-oVBDDIOQ)/GroupVisualElement"
                                  data-name="activeByActivityInCity"
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
                                        isOwnerLoading={isLoading}
                                      />
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>

                              <Grid item data-name="activeByActivityInDistrict" xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_od5rcFrbEe6gN-oVBDDIOQ)/GroupVisualElement"
                                  data-name="activeByActivityInDistrict"
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
                                        isOwnerLoading={isLoading}
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

                  <Grid item data-name="activeIssuesByResidentArea" xs={12} sm={12}>
                    <Card
                      id="User/(esm/_RR4bUFrcEe6gN-oVBDDIOQ)/GroupVisualElement"
                      data-name="activeIssuesByResidentArea"
                    >
                      <CardContent>
                        <Grid container direction="row" alignItems="flex-start" justifyContent="flex-start" spacing={2}>
                          <Grid container item xs={12} sm={12}>
                            <ModeledTabs
                              id="User/(esm/_l86f8FrcEe6gN-oVBDDIOQ)/TabBarVisualElement"
                              ownerData={data}
                              validation={validation}
                              orientation="vertical"
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
                              <Grid item data-name="activeByResidentInCounty" xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_BZzvYFrcEe6gN-oVBDDIOQ)/GroupVisualElement"
                                  data-name="activeByResidentInCounty"
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
                                        isOwnerLoading={isLoading}
                                      />
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>

                              <Grid item data-name="activeByResidentInCity" xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_BZzIUFrcEe6gN-oVBDDIOQ)/GroupVisualElement"
                                  data-name="activeByResidentInCity"
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
                                        isOwnerLoading={isLoading}
                                      />
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>

                              <Grid item data-name="activeByResidentInDistrict" xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_BZzIV1rcEe6gN-oVBDDIOQ)/GroupVisualElement"
                                  data-name="activeByResidentInDistrict"
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
                                        isOwnerLoading={isLoading}
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
      </Grid>
    </Grid>
  );
}
