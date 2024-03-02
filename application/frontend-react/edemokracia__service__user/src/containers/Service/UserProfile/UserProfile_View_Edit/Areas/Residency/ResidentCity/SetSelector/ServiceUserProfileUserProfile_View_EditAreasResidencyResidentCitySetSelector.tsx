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
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
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
import type { ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorResidentCitySetSelectorComponentActionDefinitions } from './components/ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorResidentCitySetSelectorComponent';
import { ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorResidentCitySetSelectorComponent } from './components/ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorResidentCitySetSelectorComponent';

export const SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_AREAS_RESIDENCY_RESIDENT_CITY_SET_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_AREAS_RESIDENCY_RESIDENT_CITY_SET_SELECTOR_CONTAINER_ACTIONS_HOOK';
export type ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorContainerHook =
  () => ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorActionDefinitions;

export interface ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorActionDefinitions
  extends ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorResidentCitySetSelectorComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorActionDefinitions;
  selectionDiff: ServiceCityStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceCityStored[]>>;
  alreadySelected: ServiceCityStored[];
  isDraft?: boolean;
}

// XMIID: User/(esm/_fsW_pFvTEe6jm_SkPSYEYw)/TabularReferenceFieldLinkSetSelectorPageContainer
// Name: service::UserProfile::UserProfile_View_Edit::Areas::Residency::residentCity::SetSelector
export default function ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelector(
  props: ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorProps,
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
    useTrackService<ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_AREAS_RESIDENCY_RESIDENT_CITY_SET_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);

  return (
    <Grid container>
      <Grid item data-name="residentCity" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_fsW_pFvTEe6jm_SkPSYEYw)/TabularReferenceFieldLinkSetSelectorVisualElement"
          data-name="residentCity"
        >
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_fsW_pFvTEe6jm_SkPSYEYw)/TabularReferenceFieldLinkSetSelectorTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorResidentCitySetSelectorComponent
                    uniqueId={'User/(esm/_fsW_pFvTEe6jm_SkPSYEYw)/TabularReferenceFieldLinkSetSelectorTable'}
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
