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
import type { ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorResidentDistrictSetSelectorComponentActionDefinitions } from './components/ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorResidentDistrictSetSelectorComponent';
import { ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorResidentDistrictSetSelectorComponent } from './components/ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorResidentDistrictSetSelectorComponent';

export const SERVICE_SERVICE_USER_SERVICE_USER_VIEW_EDIT_AREAS_RESIDENCY_RESIDENT_DISTRICT_SET_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_SERVICE_USER_SERVICE_USER_VIEW_EDIT_AREAS_RESIDENCY_RESIDENT_DISTRICT_SET_SELECTOR_CONTAINER_ACTIONS_HOOK';
export type ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorContainerHook =
  () => ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorActionDefinitions;

export interface ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorActionDefinitions
  extends ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorResidentDistrictSetSelectorComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorActionDefinitions;
  selectionDiff: ServiceDistrictStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceDistrictStored[]>>;
  alreadySelected: ServiceDistrictStored[];
  isDraft?: boolean;
}

// XMIID: User/(esm/_I_CEgIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldLinkSetSelectorPageContainer
// Name: service::ServiceUser::ServiceUser_View_Edit::Areas::Residency::residentDistrict::SetSelector
export default function ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelector(
  props: ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorProps,
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
    useTrackService<ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_SERVICE_USER_SERVICE_USER_VIEW_EDIT_AREAS_RESIDENCY_RESIDENT_DISTRICT_SET_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="residentDistrict" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_I_CEgIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldLinkSetSelectorVisualElement"
          data-name="residentDistrict"
        >
          <CardContent>
            <Grid container direction="row" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_I_CEgIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldLinkSetSelectorTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorResidentDistrictSetSelectorComponent
                    uniqueId={'User/(esm/_I_CEgIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldLinkSetSelectorTable'}
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