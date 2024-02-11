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
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import type { Dispatch, FC, SetStateAction } from 'react';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownButton, MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { useL10N } from '~/l10n/l10n-context';
import { ServiceDistrict, ServiceDistrictQueryCustomizer, ServiceDistrictStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceUserProfileUserProfile_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorActivityDistrictsAddSelectorComponentActionDefinitions } from './components/ServiceUserProfileUserProfile_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorActivityDistrictsAddSelectorComponent';
import { ServiceUserProfileUserProfile_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorActivityDistrictsAddSelectorComponent } from './components/ServiceUserProfileUserProfile_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorActivityDistrictsAddSelectorComponent';

export const SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_AREAS_ACTIVITY_ACTIVITY_DISTRICTS_ACTIVITY_DISTRICTS_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_AREAS_ACTIVITY_ACTIVITY_DISTRICTS_ACTIVITY_DISTRICTS_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK';
export type ServiceUserProfileUserProfile_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorContainerHook =
  () => ServiceUserProfileUserProfile_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorActionDefinitions;

export interface ServiceUserProfileUserProfile_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorActionDefinitions
  extends ServiceUserProfileUserProfile_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorActivityDistrictsAddSelectorComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceUserProfileUserProfile_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceUserProfileUserProfile_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorActionDefinitions;
  selectionDiff: ServiceDistrictStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceDistrictStored[]>>;
  alreadySelected: ServiceDistrictStored[];
  isDraft?: boolean;
}

// XMIID: User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceFieldTableAddSelectorPageContainer
// Name: service::UserProfile::UserProfile_View_Edit::Areas::activity::activity_districts::activityDistricts::AddSelector
export default function ServiceUserProfileUserProfile_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelector(
  props: ServiceUserProfileUserProfile_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorProps,
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
    useTrackService<ServiceUserProfileUserProfile_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_AREAS_ACTIVITY_ACTIVITY_DISTRICTS_ACTIVITY_DISTRICTS_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceUserProfileUserProfile_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="activityDistricts" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceFieldTableAddSelectorVisualElement"
          data-name="activityDistricts"
        >
          <CardContent>
            <Grid container direction="row" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceFieldTableAddSelectorTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceUserProfileUserProfile_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorActivityDistrictsAddSelectorComponent
                    uniqueId={'User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceFieldTableAddSelectorTable'}
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