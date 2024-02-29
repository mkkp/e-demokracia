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
import { DropdownButton, MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { useL10N } from '~/l10n/l10n-context';
import { ServiceCity, ServiceCityQueryCustomizer, ServiceCityStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorActivityCitiesAddSelectorComponentActionDefinitions } from './components/ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorActivityCitiesAddSelectorComponent';
import { ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorActivityCitiesAddSelectorComponent } from './components/ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorActivityCitiesAddSelectorComponent';

export const SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_AREAS_ACTIVITY_ACTIVITY_CITIES_ACTIVITY_CITIES_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_AREAS_ACTIVITY_ACTIVITY_CITIES_ACTIVITY_CITIES_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK';
export type ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorContainerHook =
  () => ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorActionDefinitions;

export interface ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorActionDefinitions
  extends ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorActivityCitiesAddSelectorComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorActionDefinitions;
  selectionDiff: ServiceCityStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceCityStored[]>>;
  alreadySelected: ServiceCityStored[];
  isDraft?: boolean;
}

// XMIID: User/(esm/_fsW_rVvTEe6jm_SkPSYEYw)/TabularReferenceFieldTableAddSelectorPageContainer
// Name: service::UserProfile::UserProfile_View_Edit::Areas::activity::activity_cities::activityCities::AddSelector
export default function ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelector(
  props: ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorProps,
) {
  // Container props
  const {
    refreshCounter,
    isLoading,
    isDraft,
    actions: pageActions,
    selectionDiff,
    setSelectionDiff,
    alreadySelected,
  } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  // Pandino Container Action overrides
  const { service: customContainerHook } =
    useTrackService<ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_AREAS_ACTIVITY_ACTIVITY_CITIES_ACTIVITY_CITIES_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);

  return (
    <Grid container>
      <Grid item data-name="activityCities" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_fsW_rVvTEe6jm_SkPSYEYw)/TabularReferenceFieldTableAddSelectorVisualElement"
          data-name="activityCities"
        >
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_fsW_rVvTEe6jm_SkPSYEYw)/TabularReferenceFieldTableAddSelectorTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorActivityCitiesAddSelectorComponent
                    uniqueId={'User/(esm/_fsW_rVvTEe6jm_SkPSYEYw)/TabularReferenceFieldTableAddSelectorTable'}
                    actions={actions}
                    selectionDiff={selectionDiff}
                    setSelectionDiff={setSelectionDiff}
                    alreadySelected={alreadySelected}
                    refreshCounter={refreshCounter}
                    isOwnerLoading={isLoading}
                  />
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
