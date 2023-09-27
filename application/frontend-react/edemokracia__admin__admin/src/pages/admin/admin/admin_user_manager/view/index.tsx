//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::Admin.adminUserManager#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: adminUserManager
// Page DataElement owner name: edemokracia::admin::Admin

import type { FC, Dispatch, SetStateAction } from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Button, Card, CardContent } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import type { DateValidationError, DateTimeValidationError, TimeValidationError } from '@mui/x-date-pickers';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useSnackbar } from 'notistack';
import { ComponentProxy, useTrackService } from '@pandino/react-hooks';
import { useParams } from 'react-router-dom';
import { MdiIcon, ModeledTabs, PageHeader, DropdownButton, CustomBreadcrumb, useJudoNavigation } from '~/components';
import { useRangeDialog } from '~/components/dialog';
import { AssociationButton, BinaryInput, CollectionAssociationButton, NumericInput } from '~/components/widgets';
import {
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
  fileHandling,
  passesLocalValidation,
  processQueryCustomizer,
  uiDateToServiceDate,
  serviceDateToUiDate,
  uiTimeToServiceTime,
  serviceTimeToUiTime,
  stringToBooleanSelect,
  booleanToStringSelect,
} from '~/utilities';
import { useConfirmationBeforeChange } from '~/hooks';
import { toastConfig, DIVIDER_HEIGHT } from '~/config';
import { useL10N } from '~/l10n/l10n-context';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY, CustomFormVisualElementProps } from '~/custom';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { mainContainerPadding } from '~/theme';
import { PageContainerTransition } from '~/theme/animations';
import { clsx } from 'clsx';

import {
  AdminUser,
  AdminUserManager,
  AdminUserManagerQueryCustomizer,
  AdminUserManagerStored,
  AdminUserQueryCustomizer,
  AdminUserStored,
} from '~/generated/data-api';
import { adminAdminServiceForAdminUserManagerImpl, adminUserManagerServiceForClassImpl } from '~/generated/data-axios';
import { useAdminUserManagerCreateUserAction } from './actions';

import { PageActions } from './components/PageActions';
import { UsersTable } from './components/UsersTable';

export type AdminAdminAdminUserManagerViewPostRefreshAction = (
  data: AdminUserManagerStored,
  storeDiff: (attributeName: keyof AdminUserManagerStored, value: any) => void,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  setValidation: Dispatch<SetStateAction<Map<keyof AdminUserManager, string>>>,
) => Promise<void>;

export const ADMIN_ADMIN_ADMIN_USER_MANAGER_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY =
  'AdminAdminAdminUserManagerViewPostRefreshHook';
export type AdminAdminAdminUserManagerViewPostRefreshHook = () => AdminAdminAdminUserManagerViewPostRefreshAction;

/**
 * Name: edemokracia::admin::Admin.adminUserManager#View
 * Is Access: true
 * Is Dashboard: false
 * Type: View
 * Edit Mode Available: false
 **/
export default function AdminAdminAdminUserManagerView() {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const [signedIdentifier, setSignedIdentifier] = useState<string>();

  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<AdminUserManagerStored>({} as unknown as AdminUserManagerStored);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof AdminUserManagerStored, any>>(
    {} as unknown as Record<keyof AdminUserManagerStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof AdminUserManagerStored, value: any) => void = useCallback(
    (attributeName: keyof AdminUserManagerStored, value: any) => {
      const dateTypes: string[] = [];
      const dateTimeTypes: string[] = [];
      const timeTypes: string[] = [];
      if (dateTypes.includes(attributeName as string)) {
        payloadDiff[attributeName] = uiDateToServiceDate(value);
      } else if (dateTimeTypes.includes(attributeName as string)) {
        payloadDiff[attributeName] = value;
      } else if (timeTypes.includes(attributeName as string)) {
        payloadDiff[attributeName] = uiTimeToServiceTime(value);
      } else {
        payloadDiff[attributeName] = value;
      }
      setData((prevData) => ({
        ...prevData,
        [attributeName]: value,
      }));
      if (!editMode) {
        setEditMode(true);
      }
    },
    [data],
  );
  const [validation, setValidation] = useState<Map<keyof AdminUserManager, string>>(
    new Map<keyof AdminUserManager, string>(),
  );

  const queryCustomizer: AdminUserManagerQueryCustomizer = {
    _mask: '{userName,users{representation,userName,firstName,lastName,phone,email,isAdmin,created}}',
  };

  const { service: postRefreshHook } = useTrackService<AdminAdminAdminUserManagerViewPostRefreshHook>(
    `(${OBJECTCLASS}=${ADMIN_ADMIN_ADMIN_USER_MANAGER_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY})`,
  );
  const postRefreshAction: AdminAdminAdminUserManagerViewPostRefreshAction | undefined =
    postRefreshHook && postRefreshHook();

  const adminUserManagerCreateUserAction = useAdminUserManagerCreateUserAction();

  const title: string = t('admin.UserManagerView', { defaultValue: 'UserManager View / Edit' });

  const isFormUpdateable = useCallback(() => {
    return false && typeof data?.__updateable === 'boolean' && data?.__updateable;
  }, [data]);

  const isFormDeleteable = useCallback(() => {
    return false && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
  }, [data]);

  useConfirmationBeforeChange(
    editMode,
    t('judo.form.navigation.confirmation', {
      defaultValue: 'You have potential unsaved changes in your form, are you sure you would like to navigate away?',
    }),
  );

  async function init() {
    setIsLoading(true);

    try {
      const res = await adminAdminServiceForAdminUserManagerImpl.getAdminUserManager('{}');

      setIsLoading(false);

      if (res?.__signedIdentifier) {
        setData(res);
        setSignedIdentifier(res.__signedIdentifier);
      } else {
        navigate('*');
      }
    } catch (error) {
      handleFetchError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    init();
  }, []);

  async function fetchData() {
    setIsLoading(true);

    try {
      const res = await adminUserManagerServiceForClassImpl.refresh(
        { __signedIdentifier: signedIdentifier } as AdminUserManagerStored,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof AdminUserManagerStored, any>);
      if (postRefreshAction) {
        try {
          await postRefreshAction(res, storeDiff, setEditMode, setValidation);
        } catch (error) {
          console.error(error);
        }
      }
    } catch (error) {
      handleFetchError(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  }

  useEffect(() => {
    if (signedIdentifier) {
      fetchData();
    }
  }, [signedIdentifier]);

  return (
    <>
      <PageHeader title={title}>
        <PageActions
          data={data}
          fetchData={fetchData}
          editMode={editMode}
          setEditMode={setEditMode}
          isLoading={isLoading}
        />
      </PageHeader>
      <PageContainerTransition>
        <Box sx={mainContainerPadding}>
          <Grid
            className="access-page-data"
            container
            spacing={2}
            direction="column"
            alignItems="stretch"
            justifyContent="flex-start"
          >
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item>
                  <LoadingButton
                    id="ButtonedemokraciaAdminAdminEdemokraciaAdminAdminAdminUserManagerViewDefaultUserManagerViewEditUserManagerActionGroupCreateUser"
                    loading={isLoading}
                    startIcon={<MdiIcon path="account-plus" />}
                    loadingPosition="start"
                    onClick={async () => {
                      try {
                        setIsLoading(true);
                        await adminUserManagerCreateUserAction(() => fetchData());
                      } finally {
                        setIsLoading(false);
                      }
                    }}
                    disabled={editMode}
                  >
                    <span>
                      {t('admin.UserManagerView.userManagerActionGroup.createUser', { defaultValue: 'Create User' })}
                    </span>
                  </LoadingButton>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Grid
                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminAdminUserManagerViewDefaultUserManagerViewEditUsersLabelWrapper"
                container
                direction="column"
                alignItems="stretch"
                justifyContent="flex-start"
                spacing={2}
              >
                <Grid item xs={12} sm={12}>
                  <Grid
                    id="TableedemokraciaAdminAdminEdemokraciaAdminAdminAdminUserManagerViewDefaultUserManagerViewEditUsersLabelWrapperUsers"
                    container
                    direction="column"
                    alignItems="stretch"
                    justifyContent="flex-start"
                  >
                    <UsersTable
                      isOwnerLoading={isLoading}
                      validation={validation}
                      fetchOwnerData={fetchData}
                      refreshCounter={refreshCounter}
                      ownerData={data}
                      editMode={editMode}
                      isFormUpdateable={isFormUpdateable}
                      storeDiff={storeDiff}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </PageContainerTransition>
    </>
  );
}