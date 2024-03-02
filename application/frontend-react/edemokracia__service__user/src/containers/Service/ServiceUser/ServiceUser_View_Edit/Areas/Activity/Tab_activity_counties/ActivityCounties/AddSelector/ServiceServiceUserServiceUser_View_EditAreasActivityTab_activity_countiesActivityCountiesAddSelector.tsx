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
import { ServiceCounty, ServiceCountyQueryCustomizer, ServiceCountyStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorActivityCountiesAddSelectorComponentActionDefinitions } from './components/ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorActivityCountiesAddSelectorComponent';
import { ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorActivityCountiesAddSelectorComponent } from './components/ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorActivityCountiesAddSelectorComponent';

export const SERVICE_SERVICE_USER_SERVICE_USER_VIEW_EDIT_AREAS_ACTIVITY_TAB_ACTIVITY_COUNTIES_ACTIVITY_COUNTIES_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_SERVICE_USER_SERVICE_USER_VIEW_EDIT_AREAS_ACTIVITY_TAB_ACTIVITY_COUNTIES_ACTIVITY_COUNTIES_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK';
export type ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorContainerHook =
  () => ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorActionDefinitions;

export interface ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorActionDefinitions
  extends ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorActivityCountiesAddSelectorComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorActionDefinitions;
  selectionDiff: ServiceCountyStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceCountyStored[]>>;
  alreadySelected: ServiceCountyStored[];
  isDraft?: boolean;
}

// XMIID: User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldTableAddSelectorPageContainer
// Name: service::ServiceUser::ServiceUser_View_Edit::Areas::activity::tab_activity_counties::activityCounties::AddSelector
export default function ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelector(
  props: ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorProps,
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
    useTrackService<ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_SERVICE_USER_SERVICE_USER_VIEW_EDIT_AREAS_ACTIVITY_TAB_ACTIVITY_COUNTIES_ACTIVITY_COUNTIES_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);

  return (
    <Grid container>
      <Grid item data-name="activityCounties" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldTableAddSelectorVisualElement"
          data-name="activityCounties"
        >
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldTableAddSelectorTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorActivityCountiesAddSelectorComponent
                    uniqueId={'User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldTableAddSelectorTable'}
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
