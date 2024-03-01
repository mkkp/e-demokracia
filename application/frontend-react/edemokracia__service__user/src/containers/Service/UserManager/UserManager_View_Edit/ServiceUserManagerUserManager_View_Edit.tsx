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
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';

import {} from '@mui/x-date-pickers';
import type {} from '@mui/x-date-pickers';
import {} from '~/components/widgets';
import { useConfirmationBeforeChange } from '~/hooks';
import {
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceUserManager,
  ServiceUserManagerQueryCustomizer,
  ServiceUserManagerStored,
} from '~/services/data-api';
import type { ServiceUserManagerUserManager_View_EditUsersComponentActionDefinitions } from './components/ServiceUserManagerUserManager_View_EditUsersComponent';
import { ServiceUserManagerUserManager_View_EditUsersComponent } from './components/ServiceUserManagerUserManager_View_EditUsersComponent';

export const SERVICE_USER_MANAGER_USER_MANAGER_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_MANAGER_USER_MANAGER_VIEW_EDIT_CONTAINER_ACTIONS_HOOK';
export type ServiceUserManagerUserManager_View_EditContainerHook = (
  data: ServiceUserManagerStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceUserManager, value: any) => void,
) => ServiceUserManagerUserManager_View_EditActionDefinitions;

export interface ServiceUserManagerUserManager_View_EditActionDefinitions
  extends ServiceUserManagerUserManager_View_EditUsersComponentActionDefinitions {
  getPageTitle?: (data: ServiceUserManager) => string;
  createUserAction?: () => Promise<void>;
  getMask?: () => string;
}

export interface ServiceUserManagerUserManager_View_EditProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceUserManagerUserManager_View_EditActionDefinitions;

  data: ServiceUserManagerStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceUserManager, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceUserManager, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceUserManager, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// XMIID: User/(esm/_dGIWgFvOEe6jm_SkPSYEYw)/TransferObjectViewPageContainer
// Name: service::UserManager::UserManager_View_Edit
export default function ServiceUserManagerUserManager_View_Edit(props: ServiceUserManagerUserManager_View_EditProps) {
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
  const { service: customContainerHook } = useTrackService<ServiceUserManagerUserManager_View_EditContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_MANAGER_USER_MANAGER_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceUserManagerUserManager_View_EditActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);

  return (
    <Grid container>
      <Grid item data-name="UserManager_View_Edit" xs={12} sm={12} md={36.0}>
        <Grid
          id="User/(esm/_dGIWgFvOEe6jm_SkPSYEYw)/TransferObjectViewVisualElement"
          data-name="UserManager_View_Edit"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={4.0}>
            <Box sx={{ display: 'flex', gap: 1 }}></Box>
          </Grid>

          <Grid item data-name="UserGroup" xs={12} sm={12}>
            <Card
              id="User/(esm/_XSWnMNfnEe6GGcgLB1np_g)/GroupVisualElement"
              data-name="UserGroup"
              sx={{ height: '100%' }}
            >
              <CardContent>
                <Grid container direction="row" alignItems="flex-start" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_MJ6o0FvVEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable"
                      container
                      direction="column"
                      alignItems="stretch"
                      justifyContent="flex-start"
                    >
                      <ServiceUserManagerUserManager_View_EditUsersComponent
                        uniqueId={'User/(esm/_MJ6o0FvVEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable'}
                        actions={actions}
                        ownerData={data}
                        editMode={editMode}
                        isFormUpdateable={isFormUpdateable}
                        validationError={validation.get('users')}
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
      </Grid>
    </Grid>
  );
}
