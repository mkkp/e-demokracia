//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import type { GridFilterModel } from '@mui/x-data-grid';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { Suspense, lazy, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import type { ServiceUserProfileUserProfile_View_EditDialogActions } from '~/containers/Service/UserProfile/UserProfile_View_Edit/ServiceUserProfileUserProfile_View_EditDialogContainer';
import { useServiceUserProfileActivityCitiesRelationViewPage } from '~/dialogs/Service/UserProfile/ActivityCities/RelationViewPage';
import { useServiceUserProfileActivityCountiesRelationViewPage } from '~/dialogs/Service/UserProfile/ActivityCounties/RelationViewPage';
import { useServiceUserProfileActivityDistrictsRelationViewPage } from '~/dialogs/Service/UserProfile/ActivityDistricts/RelationViewPage';
import { useServiceUserProfileResidentCityRelationViewPage } from '~/dialogs/Service/UserProfile/ResidentCity/RelationViewPage';
import { useServiceUserProfileResidentCountyRelationViewPage } from '~/dialogs/Service/UserProfile/ResidentCounty/RelationViewPage';
import { useServiceUserProfileResidentDistrictRelationViewPage } from '~/dialogs/Service/UserProfile/ResidentDistrict/RelationViewPage';
import { useServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesTableAddSelectorPage } from '~/dialogs/Service/UserProfile/UserProfile_View_Edit/Areas/Activity/Activity_cities/ActivityCities/TableAddSelectorPage';
import { useServiceUserProfileUserProfile_View_EditAreasActivityActivity_districtsActivityDistrictsTableAddSelectorPage } from '~/dialogs/Service/UserProfile/UserProfile_View_Edit/Areas/Activity/Activity_districts/ActivityDistricts/TableAddSelectorPage';
import { useServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesTableAddSelectorPage } from '~/dialogs/Service/UserProfile/UserProfile_View_Edit/Areas/Activity/Tab_activity_counties/ActivityCounties/TableAddSelectorPage';
import { useServiceUserProfileUserProfile_View_EditAreasResidencyResidentCityLinkSetSelectorPage } from '~/dialogs/Service/UserProfile/UserProfile_View_Edit/Areas/Residency/ResidentCity/LinkSetSelectorPage';
import { useServiceUserProfileUserProfile_View_EditAreasResidencyResidentCountyLinkSetSelectorPage } from '~/dialogs/Service/UserProfile/UserProfile_View_Edit/Areas/Residency/ResidentCounty/LinkSetSelectorPage';
import { useServiceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictLinkSetSelectorPage } from '~/dialogs/Service/UserProfile/UserProfile_View_Edit/Areas/Residency/ResidentDistrict/LinkSetSelectorPage';
import { useCRUDDialog, useSnacks } from '~/hooks';
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
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForUserProfileImpl } from '~/services/data-axios/UserServiceForUserProfileImpl';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceUserProfileUserProfile_View_EditDialogActionsExtended =
  ServiceUserProfileUserProfile_View_EditDialogActions & {
    postRefreshAction?: (
      data: ServiceUserProfileStored,
      storeDiff: (attributeName: keyof ServiceUserProfile, value: any) => void,
      setValidation: Dispatch<SetStateAction<Map<keyof ServiceUserProfile, string>>>,
    ) => Promise<void>;
  };

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
// Name: service::User::userProfile::AccessViewPage
export default function ServiceUserUserProfileAccessViewPage(props: ServiceUserUserProfileAccessViewPageProps) {
  const { ownerData, onClose, onSubmit } = props;

  // Services
  const userServiceForUserProfileImpl = useMemo(() => new UserServiceForUserProfileImpl(judoAxiosProvider), []);

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
      '{email,firstName,lastName,phone,userName,activityCities{representation},activityDistricts{representation},activityCounties{representation},residentCity{representation},residentCounty{representation},residentDistrict{representation}}',
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
  const openServiceUserProfileUserProfile_View_EditAreasResidencyResidentCityLinkSetSelectorPage =
    useServiceUserProfileUserProfile_View_EditAreasResidencyResidentCityLinkSetSelectorPage();
  const openServiceUserProfileUserProfile_View_EditAreasResidencyResidentCountyLinkSetSelectorPage =
    useServiceUserProfileUserProfile_View_EditAreasResidencyResidentCountyLinkSetSelectorPage();
  const openServiceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictLinkSetSelectorPage =
    useServiceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictLinkSetSelectorPage();
  const openServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesTableAddSelectorPage =
    useServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesTableAddSelectorPage();
  const openServiceUserProfileUserProfile_View_EditAreasActivityActivity_districtsActivityDistrictsTableAddSelectorPage =
    useServiceUserProfileUserProfile_View_EditAreasActivityActivity_districtsActivityDistrictsTableAddSelectorPage();
  const openServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesTableAddSelectorPage =
    useServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesTableAddSelectorPage();
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

  // Private actions
  const submit = async () => {};

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
      if (customActions?.postRefreshAction) {
        await customActions?.postRefreshAction(result, storeDiff, setValidation);
      }
      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const residentCityAutocompleteRangeAction = async (
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<ServiceCityStored[]> => {
    try {
      return userServiceForUserProfileImpl.getRangeForResidentCity(data, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const residentCityOpenSetSelectorAction = async (): Promise<ServiceCityStored | undefined> => {
    const { result, data: returnedData } =
      await openServiceUserProfileUserProfile_View_EditAreasResidencyResidentCityLinkSetSelectorPage(
        data,
        data.residentCity ? [data.residentCity] : [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('residentCity', returnedData[0]);
        return returnedData[0];
      }
    }
    return undefined;
  };
  const residentCityUnsetAction = async (target: ServiceCityStored) => {
    storeDiff('residentCity', null);
  };
  const residentCityOpenPageAction = async (target?: ServiceCityStored) => {
    await openServiceUserProfileResidentCityRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const residentCountyAutocompleteRangeAction = async (
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<ServiceCountyStored[]> => {
    try {
      return userServiceForUserProfileImpl.getRangeForResidentCounty(data, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const residentCountyOpenSetSelectorAction = async (): Promise<ServiceCountyStored | undefined> => {
    const { result, data: returnedData } =
      await openServiceUserProfileUserProfile_View_EditAreasResidencyResidentCountyLinkSetSelectorPage(
        data,
        data.residentCounty ? [data.residentCounty] : [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('residentCounty', returnedData[0]);
        return returnedData[0];
      }
    }
    return undefined;
  };
  const residentCountyUnsetAction = async (target: ServiceCountyStored) => {
    storeDiff('residentCounty', null);
  };
  const residentCountyOpenPageAction = async (target?: ServiceCountyStored) => {
    await openServiceUserProfileResidentCountyRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const residentDistrictAutocompleteRangeAction = async (
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored[]> => {
    try {
      return userServiceForUserProfileImpl.getRangeForResidentDistrict(data, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const residentDistrictOpenSetSelectorAction = async (): Promise<ServiceDistrictStored | undefined> => {
    const { result, data: returnedData } =
      await openServiceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictLinkSetSelectorPage(
        data,
        data.residentDistrict ? [data.residentDistrict] : [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('residentDistrict', returnedData[0]);
        return returnedData[0];
      }
    }
    return undefined;
  };
  const residentDistrictUnsetAction = async (target: ServiceDistrictStored) => {
    storeDiff('residentDistrict', null);
  };
  const residentDistrictOpenPageAction = async (target?: ServiceDistrictStored) => {
    await openServiceUserProfileResidentDistrictRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activityCitiesOpenAddSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesTableAddSelectorPage(
        data,
        data.activityCities ?? [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('activityCities', [...(data.activityCities || []), ...returnedData]);
      }
    }
  };

  const activityCitiesBulkRemoveAction = async (
    selectedRows: ServiceCityStored[],
  ): Promise<DialogResult<Array<ServiceCityStored>>> => {
    return new Promise((resolve) => {
      const selectedIds = selectedRows.map((r) => r.__identifier);
      const newList = (data?.activityCities ?? []).filter((c) => !selectedIds.includes(c.__identifier));
      storeDiff('activityCities', newList);
      resolve({
        result: 'submit',
        data: [],
      });
    });
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
  const activityCitiesRemoveAction = async (target?: ServiceCityStored, silentMode?: boolean) => {
    if (target) {
      const newList = (data?.activityCities ?? []).filter((c) => c.__identifier !== target!.__identifier);
      storeDiff('activityCities', newList);
    }
  };
  const activityCitiesOpenPageAction = async (target?: ServiceCityStored) => {
    await openServiceUserProfileActivityCitiesRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activityDistrictsOpenAddSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceUserProfileUserProfile_View_EditAreasActivityActivity_districtsActivityDistrictsTableAddSelectorPage(
        data,
        data.activityDistricts ?? [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('activityDistricts', [...(data.activityDistricts || []), ...returnedData]);
      }
    }
  };

  const activityDistrictsBulkRemoveAction = async (
    selectedRows: ServiceDistrictStored[],
  ): Promise<DialogResult<Array<ServiceDistrictStored>>> => {
    return new Promise((resolve) => {
      const selectedIds = selectedRows.map((r) => r.__identifier);
      const newList = (data?.activityDistricts ?? []).filter((c) => !selectedIds.includes(c.__identifier));
      storeDiff('activityDistricts', newList);
      resolve({
        result: 'submit',
        data: [],
      });
    });
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
  const activityDistrictsRemoveAction = async (target?: ServiceDistrictStored, silentMode?: boolean) => {
    if (target) {
      const newList = (data?.activityDistricts ?? []).filter((c) => c.__identifier !== target!.__identifier);
      storeDiff('activityDistricts', newList);
    }
  };
  const activityDistrictsOpenPageAction = async (target?: ServiceDistrictStored) => {
    await openServiceUserProfileActivityDistrictsRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activityCountiesOpenAddSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesTableAddSelectorPage(
        data,
        data.activityCounties ?? [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('activityCounties', [...(data.activityCounties || []), ...returnedData]);
      }
    }
  };

  const activityCountiesBulkRemoveAction = async (
    selectedRows: ServiceCountyStored[],
  ): Promise<DialogResult<Array<ServiceCountyStored>>> => {
    return new Promise((resolve) => {
      const selectedIds = selectedRows.map((r) => r.__identifier);
      const newList = (data?.activityCounties ?? []).filter((c) => !selectedIds.includes(c.__identifier));
      storeDiff('activityCounties', newList);
      resolve({
        result: 'submit',
        data: [],
      });
    });
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
  const activityCountiesRemoveAction = async (target?: ServiceCountyStored, silentMode?: boolean) => {
    if (target) {
      const newList = (data?.activityCounties ?? []).filter((c) => c.__identifier !== target!.__identifier);
      storeDiff('activityCounties', newList);
    }
  };
  const activityCountiesOpenPageAction = async (target?: ServiceCountyStored) => {
    await openServiceUserProfileActivityCountiesRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };

  const actions: ServiceUserProfileUserProfile_View_EditDialogActions = {
    backAction,
    refreshAction,
    residentCityAutocompleteRangeAction,
    residentCityOpenSetSelectorAction,
    residentCityUnsetAction,
    residentCityOpenPageAction,
    residentCountyAutocompleteRangeAction,
    residentCountyOpenSetSelectorAction,
    residentCountyUnsetAction,
    residentCountyOpenPageAction,
    residentDistrictAutocompleteRangeAction,
    residentDistrictOpenSetSelectorAction,
    residentDistrictUnsetAction,
    residentDistrictOpenPageAction,
    activityCitiesOpenAddSelectorAction,
    activityCitiesBulkRemoveAction,
    activityCitiesFilterAction,
    activityCitiesRemoveAction,
    activityCitiesOpenPageAction,
    activityDistrictsOpenAddSelectorAction,
    activityDistrictsBulkRemoveAction,
    activityDistrictsFilterAction,
    activityDistrictsRemoveAction,
    activityDistrictsOpenPageAction,
    activityCountiesOpenAddSelectorAction,
    activityCountiesBulkRemoveAction,
    activityCountiesFilterAction,
    activityCountiesRemoveAction,
    activityCountiesOpenPageAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    actions.refreshAction!(pageQueryCustomizer);
  }, []);

  return (
    <div
      id="User/(esm/_NDSZcFvYEe6bTb-1BwQgmA)/AccessViewPageDefinition"
      data-page-name="service::User::userProfile::AccessViewPage"
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
          submit={submit}
        />
      </Suspense>
    </div>
  );
}
