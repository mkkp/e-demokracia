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
import { ServiceCounty, ServiceCountyQueryCustomizer, ServiceCountyStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCountySetSelectorResidentCountySetSelectorComponentActionDefinitions } from './components/ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCountySetSelectorResidentCountySetSelectorComponent';
import { ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCountySetSelectorResidentCountySetSelectorComponent } from './components/ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCountySetSelectorResidentCountySetSelectorComponent';

export const SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_AREAS_RESIDENCY_RESIDENT_COUNTY_SET_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_AREAS_RESIDENCY_RESIDENT_COUNTY_SET_SELECTOR_CONTAINER_ACTIONS_HOOK';
export type ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCountySetSelectorContainerHook =
  () => ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCountySetSelectorActionDefinitions;

export interface ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCountySetSelectorActionDefinitions
  extends ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCountySetSelectorResidentCountySetSelectorComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCountySetSelectorProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCountySetSelectorActionDefinitions;
  selectionDiff: ServiceCountyStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceCountyStored[]>>;
  alreadySelected: ServiceCountyStored[];
  isDraft?: boolean;
}

// XMIID: User/(esm/_fsW_olvTEe6jm_SkPSYEYw)/TabularReferenceFieldLinkSetSelectorPageContainer
// Name: service::UserProfile::UserProfile_View_Edit::Areas::Residency::residentCounty::SetSelector
export default function ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCountySetSelector(
  props: ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCountySetSelectorProps,
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
    useTrackService<ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCountySetSelectorContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_AREAS_RESIDENCY_RESIDENT_COUNTY_SET_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCountySetSelectorActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="residentCounty" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_fsW_olvTEe6jm_SkPSYEYw)/TabularReferenceFieldLinkSetSelectorVisualElement"
          data-name="residentCounty"
        >
          <CardContent>
            <Grid container direction="row" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_fsW_olvTEe6jm_SkPSYEYw)/TabularReferenceFieldLinkSetSelectorTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCountySetSelectorResidentCountySetSelectorComponent
                    uniqueId={'User/(esm/_fsW_olvTEe6jm_SkPSYEYw)/TabularReferenceFieldLinkSetSelectorTable'}
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