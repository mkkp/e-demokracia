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
import { Suspense, createContext, lazy, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import { useJudoNavigation } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import type {
  ServiceUserProfileUserProfile_View_EditDialogActions,
  ServiceUserProfileUserProfile_View_EditDialogProps,
} from '~/containers/Service/UserProfile/UserProfile_View_Edit/ServiceUserProfileUserProfile_View_EditDialogContainer';
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
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
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
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForUserProfileImpl } from '~/services/data-axios/UserServiceForUserProfileImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
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
  'SERVICE_USER_USER_PROFILE_ACCESS_VIEW_PAGE_ACTIONS_HOOK';
export type ServiceUserProfileUserProfile_View_EditActionsHook = (
  ownerData: any,
  data: ServiceUserProfileStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceUserProfile, value: any) => void,
  refresh: () => Promise<void>,
  submit: () => Promise<void>,
) => ServiceUserProfileUserProfile_View_EditDialogActionsExtended;

export interface ServiceUserProfileUserProfile_View_EditViewModel
  extends ServiceUserProfileUserProfile_View_EditDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<ServiceUserProfile>;
  isDraft?: boolean;
}

const ServiceUserProfileUserProfile_View_EditViewModelContext =
  createContext<ServiceUserProfileUserProfile_View_EditViewModel>({} as any);
export const useServiceUserProfileUserProfile_View_EditViewModel = () => {
  const context = useContext(ServiceUserProfileUserProfile_View_EditViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceUserProfileUserProfile_View_EditViewModel must be used within a(n) ServiceUserProfileUserProfile_View_EditViewModelProvider',
    );
  }
  return context;
};

export const useServiceUserUserProfileAccessViewPage = (): ((
  ownerData: any,
  templateDataOverride?: Partial<ServiceUserProfile>,
  isDraft?: boolean,
  ownerValidation?: (data: ServiceUserProfile) => Promise<void>,
) => Promise<DialogResult<ServiceUserProfileStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (
    ownerData: any,
    templateDataOverride?: Partial<ServiceUserProfile>,
    isDraft?: boolean,
    ownerValidation?: (data: ServiceUserProfile) => Promise<void>,
  ) =>
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
            templateDataOverride={templateDataOverride}
            isDraft={isDraft}
            ownerValidation={ownerValidation}
            onClose={async () => {
              await closeDialog();
              resolve({
                result: 'close',
              });
            }}
            onSubmit={async (result, isDraft, openCreated) => {
              await closeDialog();
              resolve({
                result: isDraft ? 'submit-draft' : 'submit',
                openCreated,
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

  templateDataOverride?: Partial<ServiceUserProfile>;
  isDraft?: boolean;
  ownerValidation?: (data: ServiceUserProfile) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceUserProfileStored, isDraft?: boolean, openCreated?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_NDSZcFvYEe6bTb-1BwQgmA)/AccessViewPageDefinition
// Name: service::User::userProfile::AccessViewPage
export default function ServiceUserUserProfileAccessViewPage(props: ServiceUserUserProfileAccessViewPageProps) {
  const { ownerData, templateDataOverride, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const userServiceForUserProfileImpl = useMemo(() => new UserServiceForUserProfileImpl(judoAxiosProvider), []);

  // Hooks section
  const { t } = useTranslation();
  const { showSuccessSnack, showErrorSnack } = useSnacks();
  const { navigate, back: navigateBack } = useJudoNavigation();
  const { openFilterDialog } = useFilterDialog();
  const { openConfirmDialog } = useConfirmDialog();
  const { setLatestViewData } = useViewData();
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
    return true && typeof data?.__updateable === 'boolean' && data?.__updateable;
  }, [data]);
  const isFormDeleteable = useCallback(() => {
    return false && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
  }, [data]);

  const getPageQueryCustomizer: () => ServiceUserProfileQueryCustomizer = () => ({
    _mask: actions.getMask
      ? actions.getMask!()
      : '{email,firstName,lastName,phone,userName,activityCities{representation},activityDistricts{representation},activityCounties{representation},residentCity{representation},residentCounty{representation},residentDistrict{representation}}',
  });

  // Private actions
  const submit = async () => {
    await updateAction();
  };
  const refresh = async () => {
    if (actions.refreshAction) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };

  // Validation
  const validate: (data: ServiceUserProfile) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceUserProfileUserProfile_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_USER_PROFILE_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceUserProfileUserProfile_View_EditDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
    refresh,
    submit,
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

  // Action section
  const getPageTitle = (data: ServiceUserProfile): string => {
    return t('service.UserProfile.UserProfile_View_Edit', { defaultValue: 'My profile' });
  };
  const backAction = async () => {
    onClose();
  };
  const cancelAction = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await refreshAction(processQueryCustomizer(getPageQueryCustomizer()));
  };
  const refreshAction = async (
    queryCustomizer: ServiceUserProfileQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceUserProfileStored>> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const response = await userServiceForUserProfileImpl.refresh(ownerData, getPageQueryCustomizer());
      const { data: result } = response;
      setData(result);
      setLatestViewData(result);
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
      return response;
    } catch (error) {
      handleError(error);
      setLatestViewData(null);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const updateAction = async () => {
    setIsLoading(true);
    try {
      const { data: res } = await userServiceForUserProfileImpl.update(payloadDiff.current);
      if (res) {
        showSuccessSnack(t('judo.action.save.success', { defaultValue: 'Changes saved' }));
        setValidation(new Map<keyof ServiceUserProfile, string>());
        setEditMode(false);
        await actions.refreshAction!(getPageQueryCustomizer());
      }
    } catch (error) {
      handleError<ServiceUserProfile>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const residentCityAutocompleteRangeAction = async (
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<ServiceCityStored[]> => {
    try {
      const { data: result } = await userServiceForUserProfileImpl.getRangeForResidentCity(
        cleanUpPayload(data),
        queryCustomizer,
      );
      return result;
    } catch (error: any) {
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
  const residentCityUnsetAction = async (target: ServiceCity | ServiceCityStored) => {
    storeDiff('residentCity', null);
  };
  const residentCityOpenPageAction = async (target: ServiceCity | ServiceCityStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceCityStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceUserProfileResidentCityRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const residentCountyAutocompleteRangeAction = async (
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<ServiceCountyStored[]> => {
    try {
      const { data: result } = await userServiceForUserProfileImpl.getRangeForResidentCounty(
        cleanUpPayload(data),
        queryCustomizer,
      );
      return result;
    } catch (error: any) {
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
  const residentCountyUnsetAction = async (target: ServiceCounty | ServiceCountyStored) => {
    storeDiff('residentCounty', null);
  };
  const residentCountyOpenPageAction = async (target: ServiceCounty | ServiceCountyStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceCountyStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceUserProfileResidentCountyRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const residentDistrictAutocompleteRangeAction = async (
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored[]> => {
    try {
      const { data: result } = await userServiceForUserProfileImpl.getRangeForResidentDistrict(
        cleanUpPayload(data),
        queryCustomizer,
      );
      return result;
    } catch (error: any) {
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
  const residentDistrictUnsetAction = async (target: ServiceDistrict | ServiceDistrictStored) => {
    storeDiff('residentDistrict', null);
  };
  const residentDistrictOpenPageAction = async (target: ServiceDistrict | ServiceDistrictStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceDistrictStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceUserProfileResidentDistrictRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
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
      const newList = (data?.activityCities ?? []).filter((c: any) => !selectedIds.includes(c.__identifier));
      storeDiff('activityCities', newList);
      resolve({
        result: 'submit',
        data: [],
      });
    });
  };
  const activityCitiesClearAction = async () => {
    storeDiff('activityCities', []);
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
      const newList = (data?.activityCities ?? []).filter((c: any) => c.__identifier !== target!.__identifier);
      storeDiff('activityCities', newList);
    }
  };
  const activityCitiesOpenPageAction = async (target: ServiceCity | ServiceCityStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceCityStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceUserProfileActivityCitiesRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
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
      const newList = (data?.activityDistricts ?? []).filter((c: any) => !selectedIds.includes(c.__identifier));
      storeDiff('activityDistricts', newList);
      resolve({
        result: 'submit',
        data: [],
      });
    });
  };
  const activityDistrictsClearAction = async () => {
    storeDiff('activityDistricts', []);
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
      const newList = (data?.activityDistricts ?? []).filter((c: any) => c.__identifier !== target!.__identifier);
      storeDiff('activityDistricts', newList);
    }
  };
  const activityDistrictsOpenPageAction = async (
    target: ServiceDistrict | ServiceDistrictStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceDistrictStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceUserProfileActivityDistrictsRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
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
      const newList = (data?.activityCounties ?? []).filter((c: any) => !selectedIds.includes(c.__identifier));
      storeDiff('activityCounties', newList);
      resolve({
        result: 'submit',
        data: [],
      });
    });
  };
  const activityCountiesClearAction = async () => {
    storeDiff('activityCounties', []);
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
      const newList = (data?.activityCounties ?? []).filter((c: any) => c.__identifier !== target!.__identifier);
      storeDiff('activityCounties', newList);
    }
  };
  const activityCountiesOpenPageAction = async (target: ServiceCounty | ServiceCountyStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceCountyStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceUserProfileActivityCountiesRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };

  const actions: ServiceUserProfileUserProfile_View_EditDialogActions = {
    getPageTitle,
    backAction,
    cancelAction,
    refreshAction,
    updateAction,
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
    activityCitiesClearAction,
    activityCitiesFilterAction,
    activityCitiesRemoveAction,
    activityCitiesOpenPageAction,
    activityDistrictsOpenAddSelectorAction,
    activityDistrictsBulkRemoveAction,
    activityDistrictsClearAction,
    activityDistrictsFilterAction,
    activityDistrictsRemoveAction,
    activityDistrictsOpenPageAction,
    activityCountiesOpenAddSelectorAction,
    activityCountiesBulkRemoveAction,
    activityCountiesClearAction,
    activityCountiesFilterAction,
    activityCountiesRemoveAction,
    activityCountiesOpenPageAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceUserProfileUserProfile_View_EditViewModel = {
    onClose,
    actions,
    ownerData,
    isLoading,
    setIsLoading,
    editMode,
    setEditMode,
    refresh,
    refreshCounter,
    submit,
    data,
    validation,
    setValidation,
    storeDiff,
    isFormUpdateable,
    isFormDeleteable,
    templateDataOverride,
    isDraft,
  };

  // Effect section
  useEffect(() => {
    actions.refreshAction!(getPageQueryCustomizer());
  }, []);

  return (
    <ServiceUserProfileUserProfile_View_EditViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_NDSZcFvYEe6bTb-1BwQgmA)/AccessViewPageDefinition"
          data-page-name="service::User::userProfile::AccessViewPage"
        />
        <ServiceUserProfileUserProfile_View_EditDialogContainer
          ownerData={ownerData}
          onClose={onClose}
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
          isDraft={isDraft}
        />
      </Suspense>
    </ServiceUserProfileUserProfile_View_EditViewModelContext.Provider>
  );
}
