//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'/index.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, lazy, Suspense } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import type { GridFilterModel } from '@mui/x-data-grid';
import type { Filter, FilterOption } from '~/components-api';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import { toastConfig } from '~/config';
import { useSnacks, useCRUDDialog } from '~/hooks';
import {
  passesLocalValidation,
  processQueryCustomizer,
  uiDateToServiceDate,
  uiTimeToServiceTime,
  useErrorHandler,
} from '~/utilities';
import type { DialogResult } from '~/utilities';
import { useServiceUserProfileActivityCitiesRelationViewPage } from '~/dialogs/Service/UserProfile/ActivityCities/Relation/View/Page';
import { useServiceUserProfileActivityCountiesRelationViewPage } from '~/dialogs/Service/UserProfile/ActivityCounties/Relation/View/Page';
import { useServiceUserProfileActivityDistrictsRelationViewPage } from '~/dialogs/Service/UserProfile/ActivityDistricts/Relation/View/Page';
import { useServiceUserProfileResidentCityRelationViewPage } from '~/dialogs/Service/UserProfile/ResidentCity/Relation/View/Page';
import { useServiceUserProfileResidentCountyRelationViewPage } from '~/dialogs/Service/UserProfile/ResidentCounty/Relation/View/Page';
import { useServiceUserProfileResidentDistrictRelationViewPage } from '~/dialogs/Service/UserProfile/ResidentDistrict/Relation/View/Page';
import type { ServiceUserProfileUserProfile_View_EditDialogActions } from '~/containers/Service/UserProfile/UserProfile_View_Edit/ServiceUserProfileUserProfile_View_EditDialogContainer';
import type {
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceUserProfile,
  ServiceUserProfileQueryCustomizer,
  ServiceUserProfileStored,
} from '~/services/data-api';
import { userServiceForUserProfileImpl } from '~/services/data-axios';
export type ServiceUserProfileUserProfile_View_EditDialogActionsExtended =
  ServiceUserProfileUserProfile_View_EditDialogActions & {};

export const SERVICE_USER_USER_PROFILE_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceUserProfileUserProfile_View_EditActionsHook';
export type ServiceUserProfileUserProfile_View_EditActionsHook = (
  ownerData: any,
  data: ServiceUserProfileStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceUserProfile, value: any) => void,
) => ServiceUserProfileUserProfile_View_EditDialogActionsExtended;

export const useServiceUserUserProfileAccessViewPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceUserProfileStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any) =>
    new Promise((resolve) => {
      createDialog({
        fullWidth: true,
        maxWidth: 'lg',
        onClose: async (event: object, reason: string) => {
          if (reason !== 'backdropClick') {
            await closeDialog();
            resolve({
              result: 'close',
            });
          }
        },
        children: (
          <ServiceUserUserProfileAccessViewPage
            ownerData={ownerData}
            onClose={async () => {
              await closeDialog();
              resolve({
                result: 'close',
              });
            }}
            onSubmit={async (result) => {
              await closeDialog();
              resolve({
                result: 'submit',
                data: result,
              });
            }}
          />
        ),
      });
    });
};

export const convertServiceUserUserProfileAccessViewPagePayload = (
  attributeName: keyof ServiceUserProfile,
  value: any,
): any => {
  const dateTypes: string[] = [];
  const dateTimeTypes: string[] = [];
  const timeTypes: string[] = [];
  if (dateTypes.includes(attributeName as string)) {
    return uiDateToServiceDate(value);
  } else if (dateTimeTypes.includes(attributeName as string)) {
    return value;
  } else if (timeTypes.includes(attributeName as string)) {
    return uiTimeToServiceTime(value);
  }
  return value;
};

const ServiceUserProfileUserProfile_View_EditDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/UserProfile/UserProfile_View_Edit/ServiceUserProfileUserProfile_View_EditDialogContainer'
    ),
);

export interface ServiceUserUserProfileAccessViewPageProps {
  ownerData: any;

  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceUserProfileStored) => Promise<void>;
}

// XMIID: User/(esm/_NDSZcFvYEe6bTb-1BwQgmA)/AccessViewPageDefinition
// Name: service::User::userProfile::Access::View::Page
// Open in dialog: true
export default function ServiceUserUserProfileAccessViewPage(props: ServiceUserUserProfileAccessViewPageProps) {
  const { ownerData, onClose, onSubmit } = props;

  // Hooks section
  const { t } = useTranslation();
  const { showSuccessSnack, showErrorSnack } = useSnacks();
  const { navigate, back: navigateBack } = useJudoNavigation();
  const { openFilterDialog } = useFilterDialog();
  const { openConfirmDialog } = useConfirmDialog();
  const handleError = useErrorHandler();
  const openCRUDDialog = useCRUDDialog();
  const [createDialog, closeDialog] = useDialog();

  // State section
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<ServiceUserProfileStored>({} as ServiceUserProfileStored);
  const [validation, setValidation] = useState<Map<keyof ServiceUserProfile, string>>(
    new Map<keyof ServiceUserProfile, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceUserProfileStored, any>>(
    {} as unknown as Record<keyof ServiceUserProfileStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceUserProfile, value: any) => void = useCallback(
    (attributeName: keyof ServiceUserProfile, value: any) => {
      payloadDiff.current![attributeName] = convertServiceUserUserProfileAccessViewPagePayload(attributeName, value);
      setData((prevData) => ({
        ...prevData,
        [attributeName]: value,
      }));
      if (!editMode) {
        setEditMode(true);
      }
    },
    [data, editMode],
  );
  const isFormUpdateable = useCallback(() => {
    return false && typeof data?.__updateable === 'boolean' && data?.__updateable;
  }, [data]);
  const isFormDeleteable = useCallback(() => {
    return false && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
  }, [data]);

  const pageQueryCustomizer: ServiceUserProfileQueryCustomizer = {
    _mask:
      '{lastName,firstName,phone,userName,email,activityCities{representation},activityDistricts{representation},activityCounties{representation},residentCity{representation},residentCounty{representation},residentDistrict{representation}}',
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceUserProfileUserProfile_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_USER_PROFILE_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceUserProfileUserProfile_View_EditDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
  );

  // Dialog hooks
  const openServiceUserProfileActivityCitiesRelationViewPage = useServiceUserProfileActivityCitiesRelationViewPage();
  const openServiceUserProfileActivityCountiesRelationViewPage =
    useServiceUserProfileActivityCountiesRelationViewPage();
  const openServiceUserProfileActivityDistrictsRelationViewPage =
    useServiceUserProfileActivityDistrictsRelationViewPage();
  const openServiceUserProfileResidentCityRelationViewPage = useServiceUserProfileResidentCityRelationViewPage();
  const openServiceUserProfileResidentCountyRelationViewPage = useServiceUserProfileResidentCountyRelationViewPage();
  const openServiceUserProfileResidentDistrictRelationViewPage =
    useServiceUserProfileResidentDistrictRelationViewPage();

  // Calculated section
  const title: string = t('service.UserProfile.UserProfile_View_Edit', { defaultValue: 'My profile' });

  // Action section
  const backAction = async () => {
    onClose();
  };
  const refreshAction = async (
    queryCustomizer: ServiceUserProfileQueryCustomizer,
  ): Promise<ServiceUserProfileStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await userServiceForUserProfileImpl.refresh(ownerData, pageQueryCustomizer);

      setData(result);

      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceUserProfileStored, any>;

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const residentCityOpenPageAction = async (target?: ServiceCityStored) => {
    await openServiceUserProfileResidentCityRelationViewPage(target!);

    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const residentCountyOpenPageAction = async (target?: ServiceCountyStored) => {
    await openServiceUserProfileResidentCountyRelationViewPage(target!);

    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activityCitiesOpenPageAction = async (target?: ServiceCityStored) => {
    await openServiceUserProfileActivityCitiesRelationViewPage(target!);

    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activityCitiesFilterAction = async (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ): Promise<{ model?: GridFilterModel; filters?: Filter[] }> => {
    const newFilters = await openFilterDialog(id, filterOptions, filters);
    return {
      filters: newFilters,
    };
  };
  const activityCountiesOpenPageAction = async (target?: ServiceCountyStored) => {
    await openServiceUserProfileActivityCountiesRelationViewPage(target!);

    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activityCountiesFilterAction = async (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ): Promise<{ model?: GridFilterModel; filters?: Filter[] }> => {
    const newFilters = await openFilterDialog(id, filterOptions, filters);
    return {
      filters: newFilters,
    };
  };
  const residentDistrictOpenPageAction = async (target?: ServiceDistrictStored) => {
    await openServiceUserProfileResidentDistrictRelationViewPage(target!);

    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activityDistrictsOpenPageAction = async (target?: ServiceDistrictStored) => {
    await openServiceUserProfileActivityDistrictsRelationViewPage(target!);

    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activityDistrictsFilterAction = async (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ): Promise<{ model?: GridFilterModel; filters?: Filter[] }> => {
    const newFilters = await openFilterDialog(id, filterOptions, filters);
    return {
      filters: newFilters,
    };
  };

  const actions: ServiceUserProfileUserProfile_View_EditDialogActions = {
    backAction,
    refreshAction,
    residentCityOpenPageAction,
    residentCountyOpenPageAction,
    activityCitiesOpenPageAction,
    activityCitiesFilterAction,
    activityCountiesOpenPageAction,
    activityCountiesFilterAction,
    residentDistrictOpenPageAction,
    activityDistrictsOpenPageAction,
    activityDistrictsFilterAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    actions.refreshAction!(pageQueryCustomizer);
  }, []);

  return (
    <div
      id="User/(esm/_NDSZcFvYEe6bTb-1BwQgmA)/AccessViewPageDefinition"
      data-page-name="service::User::userProfile::Access::View::Page"
    >
      <Suspense>
        <ServiceUserProfileUserProfile_View_EditDialogContainer
          ownerData={ownerData}
          onClose={onClose}
          title={title}
          actions={actions}
          isLoading={isLoading}
          editMode={editMode}
          refreshCounter={refreshCounter}
          data={data}
          storeDiff={storeDiff}
          isFormUpdateable={isFormUpdateable}
          isFormDeleteable={isFormDeleteable}
          validation={validation}
          setValidation={setValidation}
        />
      </Suspense>
    </div>
  );
}
