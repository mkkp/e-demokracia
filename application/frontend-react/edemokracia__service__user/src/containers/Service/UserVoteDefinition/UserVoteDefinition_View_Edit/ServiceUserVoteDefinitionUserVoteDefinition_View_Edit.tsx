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
  ServiceUserVoteDefinition,
  ServiceUserVoteDefinitionQueryCustomizer,
  ServiceUserVoteDefinitionStored,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
} from '~/services/data-api';
import type { ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsGlobalComponentActionDefinitions } from './components/ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsGlobalComponent';
import { ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsGlobalComponent } from './components/ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsGlobalComponent';
import type { ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCitiesComponentActionDefinitions } from './components/ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCitiesComponent';
import { ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCitiesComponent } from './components/ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCitiesComponent';
import type { ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponentActionDefinitions } from './components/ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponent';
import { ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponent } from './components/ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponent';
import type { ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityDistrictsComponentActionDefinitions } from './components/ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityDistrictsComponent';
import { ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityDistrictsComponent } from './components/ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityDistrictsComponent';
import type { ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInResidentCityComponentActionDefinitions } from './components/ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInResidentCityComponent';
import { ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInResidentCityComponent } from './components/ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInResidentCityComponent';
import type { ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInResidentCountyComponentActionDefinitions } from './components/ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInResidentCountyComponent';
import { ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInResidentCountyComponent } from './components/ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInResidentCountyComponent';
import type { ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInResidentDistrictComponentActionDefinitions } from './components/ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInResidentDistrictComponent';
import { ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInResidentDistrictComponent } from './components/ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInResidentDistrictComponent';
import type { ServiceUserVoteDefinitionUserVoteDefinition_View_EditOwnedVoteDefinitionsComponentActionDefinitions } from './components/ServiceUserVoteDefinitionUserVoteDefinition_View_EditOwnedVoteDefinitionsComponent';
import { ServiceUserVoteDefinitionUserVoteDefinition_View_EditOwnedVoteDefinitionsComponent } from './components/ServiceUserVoteDefinitionUserVoteDefinition_View_EditOwnedVoteDefinitionsComponent';

export const SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_VIEW_EDIT_CONTAINER_ACTIONS_HOOK';
export type ServiceUserVoteDefinitionUserVoteDefinition_View_EditContainerHook = (
  data: ServiceUserVoteDefinitionStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceUserVoteDefinition, value: any) => void,
) => ServiceUserVoteDefinitionUserVoteDefinition_View_EditActionDefinitions;

export interface ServiceUserVoteDefinitionUserVoteDefinition_View_EditActionDefinitions
  extends ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsGlobalComponentActionDefinitions,
    ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCitiesComponentActionDefinitions,
    ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponentActionDefinitions,
    ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityDistrictsComponentActionDefinitions,
    ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInResidentCityComponentActionDefinitions,
    ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInResidentCountyComponentActionDefinitions,
    ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInResidentDistrictComponentActionDefinitions,
    ServiceUserVoteDefinitionUserVoteDefinition_View_EditOwnedVoteDefinitionsComponentActionDefinitions {
  getPageTitle?: (data: ServiceUserVoteDefinition) => string;
  getMask?: () => string;
}

export interface ServiceUserVoteDefinitionUserVoteDefinition_View_EditProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceUserVoteDefinitionUserVoteDefinition_View_EditActionDefinitions;

  data: ServiceUserVoteDefinitionStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceUserVoteDefinition, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceUserVoteDefinition, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceUserVoteDefinition, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// XMIID: User/(esm/_gTanUF4-Ee6vsex_cZNQbQ)/TransferObjectViewPageContainer
// Name: service::UserVoteDefinition::UserVoteDefinition_View_Edit
export default function ServiceUserVoteDefinitionUserVoteDefinition_View_Edit(
  props: ServiceUserVoteDefinitionUserVoteDefinition_View_EditProps,
) {
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
  const { service: customContainerHook } =
    useTrackService<ServiceUserVoteDefinitionUserVoteDefinition_View_EditContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceUserVoteDefinitionUserVoteDefinition_View_EditActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="UserVoteDefinition_View_Edit" xs={12} sm={12} md={36.0}>
        <Grid
          id="User/(esm/_gTanUF4-Ee6vsex_cZNQbQ)/TransferObjectViewVisualElement"
          data-name="UserVoteDefinition_View_Edit"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item data-name="root" xs={12} sm={12} md={4.0}>
            <Grid
              id="User/(esm/_aZHu8F5FEe6vsex_cZNQbQ)/GroupVisualElement"
              data-name="root"
              container
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid container item xs={12} sm={12} md={36.0}>
                <ModeledTabs
                  id="User/(esm/_w3mHIF5FEe6vsex_cZNQbQ)/TabBarVisualElement"
                  ownerData={data}
                  validation={validation}
                  orientation="horizontal"
                  childTabs={[
                    {
                      id: 'User/(esm/_0O9rkF5FEe6vsex_cZNQbQ)/GroupTab',
                      name: 'service.UserVoteDefinition.UserVoteDefinition_View_Edit.OwnedVoteDefinitionsGroup',
                      label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.OwnedVoteDefinitionsGroup', {
                        defaultValue: 'Owned Votes',
                      }) as string,
                      disabled: isLoading,
                      hidden: false,
                      icon: 'account-box',
                      nestedDataKeys: ['ownedVoteDefinitions'],
                    },
                    {
                      id: 'User/(esm/_4APk0F5FEe6vsex_cZNQbQ)/GroupTab',
                      name: 'service.UserVoteDefinition.UserVoteDefinition_View_Edit.ActiveGlobalVoteDefinitionsGroup',
                      label: t(
                        'service.UserVoteDefinition.UserVoteDefinition_View_Edit.ActiveGlobalVoteDefinitionsGroup',
                        { defaultValue: 'Active Global Votes' },
                      ) as string,
                      disabled: isLoading,
                      hidden: false,
                      icon: 'earth',
                      nestedDataKeys: ['activeVoteDefinitionsGlobal'],
                    },
                    {
                      id: 'User/(esm/_8O7y0F5FEe6vsex_cZNQbQ)/GroupTab',
                      name: 'service.UserVoteDefinition.UserVoteDefinition_View_Edit.ActiveVoteDefinitionsByOwnerActivityArea',
                      label: t(
                        'service.UserVoteDefinition.UserVoteDefinition_View_Edit.ActiveVoteDefinitionsByOwnerActivityArea',
                        { defaultValue: 'Active votes bv my activity areas' },
                      ) as string,
                      disabled: isLoading,
                      hidden: false,
                      icon: 'map-search',
                      nestedDataKeys: [
                        'activeVoteDefinitionsInActivityCities',
                        'activeVoteDefinitionsInActivityCounties',
                        'activeVoteDefinitionsInActivityDistricts',
                      ],
                    },
                    {
                      id: 'User/(esm/__3U10F5FEe6vsex_cZNQbQ)/GroupTab',
                      name: 'service.UserVoteDefinition.UserVoteDefinition_View_Edit.ActiveVoteDefinitionsByOwnerResidentAreaGroup',
                      label: t(
                        'service.UserVoteDefinition.UserVoteDefinition_View_Edit.ActiveVoteDefinitionsByOwnerResidentAreaGroup',
                        { defaultValue: 'Active votes by my resident area' },
                      ) as string,
                      disabled: isLoading,
                      hidden: false,
                      icon: 'castle',
                      nestedDataKeys: [
                        'activeVoteDefinitionsInResidentCity',
                        'activeVoteDefinitionsInResidentCounty',
                        'activeVoteDefinitionsInResidentDistrict',
                      ],
                    },
                  ]}
                >
                  <Grid item data-name="OwnedVoteDefinitionsGroup" xs={12} sm={12}>
                    <Card
                      id="User/(esm/_0O9rkF5FEe6vsex_cZNQbQ)/GroupVisualElement"
                      data-name="OwnedVoteDefinitionsGroup"
                    >
                      <CardContent>
                        <Grid
                          container
                          direction="row"
                          alignItems="center"
                          justifyContent="space-between"
                          spacing={2}
                          sx={{ mb: 2 }}
                        >
                          <Grid item>
                            <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                              <MdiIcon path="account-box" sx={{ marginRight: 1 }} />
                              <Typography
                                id="User/(esm/_0O9rkF5FEe6vsex_cZNQbQ)/GroupVisualElement"
                                variant="h5"
                                component="h1"
                              >
                                {t(
                                  'service.UserVoteDefinition.UserVoteDefinition_View_Edit.OwnedVoteDefinitionsGroup',
                                  { defaultValue: 'Owned Votes' },
                                )}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="flex-start" justifyContent="flex-start" spacing={2}>
                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_GBBigF5HEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable"
                              container
                              direction="column"
                              alignItems="stretch"
                              justifyContent="flex-start"
                            >
                              <ServiceUserVoteDefinitionUserVoteDefinition_View_EditOwnedVoteDefinitionsComponent
                                uniqueId={
                                  'User/(esm/_GBBigF5HEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable'
                                }
                                actions={actions}
                                ownerData={data}
                                editMode={editMode}
                                isFormUpdateable={isFormUpdateable}
                                validationError={validation.get('ownedVoteDefinitions')}
                                refreshCounter={refreshCounter}
                                isOwnerLoading={isLoading}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item data-name="ActiveGlobalVoteDefinitionsGroup" xs={12} sm={12}>
                    <Card
                      id="User/(esm/_4APk0F5FEe6vsex_cZNQbQ)/GroupVisualElement"
                      data-name="ActiveGlobalVoteDefinitionsGroup"
                    >
                      <CardContent>
                        <Grid
                          container
                          direction="row"
                          alignItems="center"
                          justifyContent="space-between"
                          spacing={2}
                          sx={{ mb: 2 }}
                        >
                          <Grid item>
                            <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                              <MdiIcon path="earth" sx={{ marginRight: 1 }} />
                              <Typography
                                id="User/(esm/_4APk0F5FEe6vsex_cZNQbQ)/GroupVisualElement"
                                variant="h5"
                                component="h1"
                              >
                                {t(
                                  'service.UserVoteDefinition.UserVoteDefinition_View_Edit.ActiveGlobalVoteDefinitionsGroup',
                                  { defaultValue: 'Active Global Votes' },
                                )}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="flex-start" justifyContent="flex-start" spacing={2}>
                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_XdUIUF5JEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable"
                              container
                              direction="column"
                              alignItems="stretch"
                              justifyContent="flex-start"
                            >
                              <ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsGlobalComponent
                                uniqueId={
                                  'User/(esm/_XdUIUF5JEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable'
                                }
                                actions={actions}
                                ownerData={data}
                                editMode={editMode}
                                isFormUpdateable={isFormUpdateable}
                                validationError={validation.get('activeVoteDefinitionsGlobal')}
                                refreshCounter={refreshCounter}
                                isOwnerLoading={isLoading}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item data-name="ActiveVoteDefinitionsByOwnerActivityArea" xs={12} sm={12}>
                    <Card
                      id="User/(esm/_8O7y0F5FEe6vsex_cZNQbQ)/GroupVisualElement"
                      data-name="ActiveVoteDefinitionsByOwnerActivityArea"
                    >
                      <CardContent>
                        <Grid
                          container
                          direction="row"
                          alignItems="center"
                          justifyContent="space-between"
                          spacing={2}
                          sx={{ mb: 2 }}
                        >
                          <Grid item>
                            <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                              <MdiIcon path="map-search" sx={{ marginRight: 1 }} />
                              <Typography
                                id="User/(esm/_8O7y0F5FEe6vsex_cZNQbQ)/GroupVisualElement"
                                variant="h5"
                                component="h1"
                              >
                                {t(
                                  'service.UserVoteDefinition.UserVoteDefinition_View_Edit.ActiveVoteDefinitionsByOwnerActivityArea',
                                  { defaultValue: 'Active votes bv my activity areas' },
                                )}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="flex-start" justifyContent="flex-start" spacing={2}>
                          <Grid container item xs={12} sm={12}>
                            <ModeledTabs
                              id="User/(esm/_75CCAF5KEe6vsex_cZNQbQ)/TabBarVisualElement"
                              ownerData={data}
                              validation={validation}
                              orientation="vertical"
                              childTabs={[
                                {
                                  id: 'User/(esm/_-qljoF5KEe6vsex_cZNQbQ)/GroupTab',
                                  name: 'service.UserVoteDefinition.UserVoteDefinition_View_Edit.ActiveVoteDefinitionsInActivityCountiesGroup',
                                  label: t(
                                    'service.UserVoteDefinition.UserVoteDefinition_View_Edit.ActiveVoteDefinitionsInActivityCountiesGroup',
                                    { defaultValue: 'County' },
                                  ) as string,
                                  disabled: isLoading,
                                  hidden: false,
                                  icon: 'castle',
                                  nestedDataKeys: ['activeVoteDefinitionsInActivityCounties'],
                                },
                                {
                                  id: 'User/(esm/__jKxcF5KEe6vsex_cZNQbQ)/GroupTab',
                                  name: 'service.UserVoteDefinition.UserVoteDefinition_View_Edit.ActiveVoteDefinitionsInActivityCityGroup',
                                  label: t(
                                    'service.UserVoteDefinition.UserVoteDefinition_View_Edit.ActiveVoteDefinitionsInActivityCityGroup',
                                    { defaultValue: 'City' },
                                  ) as string,
                                  disabled: isLoading,
                                  hidden: false,
                                  icon: 'city',
                                  nestedDataKeys: ['activeVoteDefinitionsInActivityCities'],
                                },
                                {
                                  id: 'User/(esm/_APhhIF5LEe6vsex_cZNQbQ)/GroupTab',
                                  name: 'service.UserVoteDefinition.UserVoteDefinition_View_Edit.ActiveVoteDefinitionsInActivityDistrictGroup',
                                  label: t(
                                    'service.UserVoteDefinition.UserVoteDefinition_View_Edit.ActiveVoteDefinitionsInActivityDistrictGroup',
                                    { defaultValue: 'District' },
                                  ) as string,
                                  disabled: isLoading,
                                  hidden: false,
                                  icon: 'home-city',
                                  nestedDataKeys: ['activeVoteDefinitionsInActivityDistricts'],
                                },
                              ]}
                            >
                              <Grid item data-name="ActiveVoteDefinitionsInActivityCountiesGroup" xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_-qljoF5KEe6vsex_cZNQbQ)/GroupVisualElement"
                                  data-name="ActiveVoteDefinitionsInActivityCountiesGroup"
                                  container
                                  direction="row"
                                  alignItems="flex-start"
                                  justifyContent="flex-start"
                                  spacing={2}
                                >
                                  <Grid item xs={12} sm={12}>
                                    <Grid
                                      id="User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable"
                                      container
                                      direction="column"
                                      alignItems="stretch"
                                      justifyContent="flex-start"
                                    >
                                      <ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponent
                                        uniqueId={
                                          'User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable'
                                        }
                                        actions={actions}
                                        ownerData={data}
                                        editMode={editMode}
                                        isFormUpdateable={isFormUpdateable}
                                        validationError={validation.get('activeVoteDefinitionsInActivityCounties')}
                                        refreshCounter={refreshCounter}
                                        isOwnerLoading={isLoading}
                                      />
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>

                              <Grid item data-name="ActiveVoteDefinitionsInActivityCityGroup" xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/__jKxcF5KEe6vsex_cZNQbQ)/GroupVisualElement"
                                  data-name="ActiveVoteDefinitionsInActivityCityGroup"
                                  container
                                  direction="row"
                                  alignItems="flex-start"
                                  justifyContent="flex-start"
                                  spacing={2}
                                >
                                  <Grid item xs={12} sm={12}>
                                    <Grid
                                      id="User/(esm/_59d3wF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable"
                                      container
                                      direction="column"
                                      alignItems="stretch"
                                      justifyContent="flex-start"
                                    >
                                      <ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCitiesComponent
                                        uniqueId={
                                          'User/(esm/_59d3wF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable'
                                        }
                                        actions={actions}
                                        ownerData={data}
                                        editMode={editMode}
                                        isFormUpdateable={isFormUpdateable}
                                        validationError={validation.get('activeVoteDefinitionsInActivityCities')}
                                        refreshCounter={refreshCounter}
                                        isOwnerLoading={isLoading}
                                      />
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>

                              <Grid item data-name="ActiveVoteDefinitionsInActivityDistrictGroup" xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_APhhIF5LEe6vsex_cZNQbQ)/GroupVisualElement"
                                  data-name="ActiveVoteDefinitionsInActivityDistrictGroup"
                                  container
                                  direction="row"
                                  alignItems="flex-start"
                                  justifyContent="flex-start"
                                  spacing={2}
                                >
                                  <Grid item xs={12} sm={12}>
                                    <Grid
                                      id="User/(esm/_GD1zsF5MEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable"
                                      container
                                      direction="column"
                                      alignItems="stretch"
                                      justifyContent="flex-start"
                                    >
                                      <ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityDistrictsComponent
                                        uniqueId={
                                          'User/(esm/_GD1zsF5MEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable'
                                        }
                                        actions={actions}
                                        ownerData={data}
                                        editMode={editMode}
                                        isFormUpdateable={isFormUpdateable}
                                        validationError={validation.get('activeVoteDefinitionsInActivityDistricts')}
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

                  <Grid item data-name="ActiveVoteDefinitionsByOwnerResidentAreaGroup" xs={12} sm={12}>
                    <Card
                      id="User/(esm/__3U10F5FEe6vsex_cZNQbQ)/GroupVisualElement"
                      data-name="ActiveVoteDefinitionsByOwnerResidentAreaGroup"
                    >
                      <CardContent>
                        <Grid
                          container
                          direction="row"
                          alignItems="center"
                          justifyContent="space-between"
                          spacing={2}
                          sx={{ mb: 2 }}
                        >
                          <Grid item>
                            <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                              <MdiIcon path="castle" sx={{ marginRight: 1 }} />
                              <Typography
                                id="User/(esm/__3U10F5FEe6vsex_cZNQbQ)/GroupVisualElement"
                                variant="h5"
                                component="h1"
                              >
                                {t(
                                  'service.UserVoteDefinition.UserVoteDefinition_View_Edit.ActiveVoteDefinitionsByOwnerResidentAreaGroup',
                                  { defaultValue: 'Active votes by my resident area' },
                                )}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="flex-start" justifyContent="flex-start" spacing={2}>
                          <Grid container item xs={12} sm={12}>
                            <ModeledTabs
                              id="User/(esm/_9cDT8F5KEe6vsex_cZNQbQ)/TabBarVisualElement"
                              ownerData={data}
                              validation={validation}
                              orientation="vertical"
                              childTabs={[
                                {
                                  id: 'User/(esm/_BgLQsF5LEe6vsex_cZNQbQ)/GroupTab',
                                  name: 'service.UserVoteDefinition.UserVoteDefinition_View_Edit.ActiveDebatesInResidentCountyGroup',
                                  label: t(
                                    'service.UserVoteDefinition.UserVoteDefinition_View_Edit.ActiveDebatesInResidentCountyGroup',
                                    { defaultValue: 'County' },
                                  ) as string,
                                  disabled: isLoading,
                                  hidden: false,
                                  icon: 'castle',
                                  nestedDataKeys: ['activeVoteDefinitionsInResidentCounty'],
                                },
                                {
                                  id: 'User/(esm/_CEZ_IF5LEe6vsex_cZNQbQ)/GroupTab',
                                  name: 'service.UserVoteDefinition.UserVoteDefinition_View_Edit.ActiveDebatesInResidentCityGroup',
                                  label: t(
                                    'service.UserVoteDefinition.UserVoteDefinition_View_Edit.ActiveDebatesInResidentCityGroup',
                                    { defaultValue: 'City' },
                                  ) as string,
                                  disabled: isLoading,
                                  hidden: false,
                                  icon: 'city',
                                  nestedDataKeys: ['activeVoteDefinitionsInResidentCity'],
                                },
                                {
                                  id: 'User/(esm/_Cwu5oF5LEe6vsex_cZNQbQ)/GroupTab',
                                  name: 'service.UserVoteDefinition.UserVoteDefinition_View_Edit.ActiveDebatesInResidentDistrictGroup',
                                  label: t(
                                    'service.UserVoteDefinition.UserVoteDefinition_View_Edit.ActiveDebatesInResidentDistrictGroup',
                                    { defaultValue: 'District' },
                                  ) as string,
                                  disabled: isLoading,
                                  hidden: false,
                                  icon: 'home-city',
                                  nestedDataKeys: ['activeVoteDefinitionsInResidentDistrict'],
                                },
                              ]}
                            >
                              <Grid item data-name="ActiveDebatesInResidentCountyGroup" xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_BgLQsF5LEe6vsex_cZNQbQ)/GroupVisualElement"
                                  data-name="ActiveDebatesInResidentCountyGroup"
                                  container
                                  direction="row"
                                  alignItems="flex-start"
                                  justifyContent="flex-start"
                                  spacing={2}
                                >
                                  <Grid item xs={12} sm={12}>
                                    <Grid
                                      id="User/(esm/_fhZzMF5MEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable"
                                      container
                                      direction="column"
                                      alignItems="stretch"
                                      justifyContent="flex-start"
                                    >
                                      <ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInResidentCountyComponent
                                        uniqueId={
                                          'User/(esm/_fhZzMF5MEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable'
                                        }
                                        actions={actions}
                                        ownerData={data}
                                        editMode={editMode}
                                        isFormUpdateable={isFormUpdateable}
                                        validationError={validation.get('activeVoteDefinitionsInResidentCounty')}
                                        refreshCounter={refreshCounter}
                                        isOwnerLoading={isLoading}
                                      />
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>

                              <Grid item data-name="ActiveDebatesInResidentCityGroup" xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_CEZ_IF5LEe6vsex_cZNQbQ)/GroupVisualElement"
                                  data-name="ActiveDebatesInResidentCityGroup"
                                  container
                                  direction="row"
                                  alignItems="flex-start"
                                  justifyContent="flex-start"
                                  spacing={2}
                                >
                                  <Grid item xs={12} sm={12}>
                                    <Grid
                                      id="User/(esm/_yjuNkF5MEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable"
                                      container
                                      direction="column"
                                      alignItems="stretch"
                                      justifyContent="flex-start"
                                    >
                                      <ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInResidentCityComponent
                                        uniqueId={
                                          'User/(esm/_yjuNkF5MEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable'
                                        }
                                        actions={actions}
                                        ownerData={data}
                                        editMode={editMode}
                                        isFormUpdateable={isFormUpdateable}
                                        validationError={validation.get('activeVoteDefinitionsInResidentCity')}
                                        refreshCounter={refreshCounter}
                                        isOwnerLoading={isLoading}
                                      />
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>

                              <Grid item data-name="ActiveDebatesInResidentDistrictGroup" xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_Cwu5oF5LEe6vsex_cZNQbQ)/GroupVisualElement"
                                  data-name="ActiveDebatesInResidentDistrictGroup"
                                  container
                                  direction="row"
                                  alignItems="flex-start"
                                  justifyContent="flex-start"
                                  spacing={2}
                                >
                                  <Grid item xs={12} sm={12}>
                                    <Grid
                                      id="User/(esm/_BdNKUF5NEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable"
                                      container
                                      direction="column"
                                      alignItems="stretch"
                                      justifyContent="flex-start"
                                    >
                                      <ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInResidentDistrictComponent
                                        uniqueId={
                                          'User/(esm/_BdNKUF5NEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable'
                                        }
                                        actions={actions}
                                        ownerData={data}
                                        editMode={editMode}
                                        isFormUpdateable={isFormUpdateable}
                                        validationError={validation.get('activeVoteDefinitionsInResidentDistrict')}
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
