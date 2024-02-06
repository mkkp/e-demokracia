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
  ServiceServiceUserServiceUser_View_EditDialogActions,
  ServiceServiceUserServiceUser_View_EditDialogProps,
} from '~/containers/Service/ServiceUser/ServiceUser_View_Edit/ServiceServiceUserServiceUser_View_EditDialogContainer';
import { useServiceServiceUserActivityCitiesRelationViewPage } from '~/dialogs/Service/ServiceUser/ActivityCities/RelationViewPage';
import { useServiceServiceUserActivityCountiesRelationViewPage } from '~/dialogs/Service/ServiceUser/ActivityCounties/RelationViewPage';
import { useServiceServiceUserActivityDistrictsRelationViewPage } from '~/dialogs/Service/ServiceUser/ActivityDistricts/RelationViewPage';
import { useServiceServiceUserResidentCityRelationViewPage } from '~/dialogs/Service/ServiceUser/ResidentCity/RelationViewPage';
import { useServiceServiceUserResidentCountyRelationViewPage } from '~/dialogs/Service/ServiceUser/ResidentCounty/RelationViewPage';
import { useServiceServiceUserResidentDistrictRelationViewPage } from '~/dialogs/Service/ServiceUser/ResidentDistrict/RelationViewPage';
import { useServiceServiceUserServiceUser_View_EditAreasActivityActivity_citiesActivityCitiesTableAddSelectorPage } from '~/dialogs/Service/ServiceUser/ServiceUser_View_Edit/Areas/Activity/Activity_cities/ActivityCities/TableAddSelectorPage';
import { useServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsTableAddSelectorPage } from '~/dialogs/Service/ServiceUser/ServiceUser_View_Edit/Areas/Activity/Activity_districts/ActivityDistricts/TableAddSelectorPage';
import { useServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesTableAddSelectorPage } from '~/dialogs/Service/ServiceUser/ServiceUser_View_Edit/Areas/Activity/Tab_activity_counties/ActivityCounties/TableAddSelectorPage';
import { useServiceServiceUserServiceUser_View_EditAreasResidencyResidentCityLinkSetSelectorPage } from '~/dialogs/Service/ServiceUser/ServiceUser_View_Edit/Areas/Residency/ResidentCity/LinkSetSelectorPage';
import { useServiceServiceUserServiceUser_View_EditAreasResidencyResidentCountyLinkSetSelectorPage } from '~/dialogs/Service/ServiceUser/ServiceUser_View_Edit/Areas/Residency/ResidentCounty/LinkSetSelectorPage';
import { useServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictLinkSetSelectorPage } from '~/dialogs/Service/ServiceUser/ServiceUser_View_Edit/Areas/Residency/ResidentDistrict/LinkSetSelectorPage';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import { routeToServiceServiceUserVotesRelationTablePage } from '~/routes';
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
  ServicePro,
  ServiceProStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceSimpleVote,
  ServiceSimpleVoteQueryCustomizer,
  ServiceSimpleVoteStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceProServiceForCreatedByImpl } from '~/services/data-axios/ServiceProServiceForCreatedByImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceServiceUserServiceUser_View_EditDialogActionsExtended =
  ServiceServiceUserServiceUser_View_EditDialogActions & {
    postRefreshAction?: (
      data: ServiceServiceUserStored,
      storeDiff: (attributeName: keyof ServiceServiceUser, value: any) => void,
      setValidation: Dispatch<SetStateAction<Map<keyof ServiceServiceUser, string>>>,
    ) => Promise<void>;
  };

export const SERVICE_PRO_CREATED_BY_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_PRO_CREATED_BY_RELATION_VIEW_PAGE_ACTIONS_HOOK';
export type ServiceServiceUserServiceUser_View_EditActionsHook = (
  ownerData: any,
  data: ServiceServiceUserStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceServiceUser, value: any) => void,
  refresh: () => Promise<void>,
  submit: () => Promise<void>,
) => ServiceServiceUserServiceUser_View_EditDialogActionsExtended;

export interface ServiceServiceUserServiceUser_View_EditViewModel
  extends ServiceServiceUserServiceUser_View_EditDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<ServiceServiceUser>;
  isDraft?: boolean;
}

const ServiceServiceUserServiceUser_View_EditViewModelContext =
  createContext<ServiceServiceUserServiceUser_View_EditViewModel>({} as any);
export const useServiceServiceUserServiceUser_View_EditViewModel = () => {
  const context = useContext(ServiceServiceUserServiceUser_View_EditViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceServiceUserServiceUser_View_EditViewModel must be used within a(n) ServiceServiceUserServiceUser_View_EditViewModelProvider',
    );
  }
  return context;
};

export const useServiceProCreatedByRelationViewPage = (): ((
  ownerData: any,
  templateDataOverride?: Partial<ServiceServiceUser>,
  isDraft?: boolean,
  ownerValidation?: (data: ServiceServiceUser) => Promise<void>,
) => Promise<DialogResult<ServiceServiceUserStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (
    ownerData: any,
    templateDataOverride?: Partial<ServiceServiceUser>,
    isDraft?: boolean,
    ownerValidation?: (data: ServiceServiceUser) => Promise<void>,
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
          <ServiceProCreatedByRelationViewPage
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
            onSubmit={async (result, isDraft) => {
              await closeDialog();
              resolve({
                result: isDraft ? 'submit-draft' : 'submit',
                data: result,
              });
            }}
          />
        ),
      });
    });
};

export const convertServiceProCreatedByRelationViewPagePayload = (
  attributeName: keyof ServiceServiceUser,
  value: any,
): any => {
  const dateTimeTypes: string[] = ['created'];
  if (dateTimeTypes.includes(attributeName as string)) {
    return value;
  }
  return value;
};

const ServiceServiceUserServiceUser_View_EditDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/ServiceUser/ServiceUser_View_Edit/ServiceServiceUserServiceUser_View_EditDialogContainer'
    ),
);

export interface ServiceProCreatedByRelationViewPageProps {
  ownerData: any;

  templateDataOverride?: Partial<ServiceServiceUser>;
  isDraft?: boolean;
  ownerValidation?: (data: ServiceServiceUser) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceServiceUserStored, isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_qTNDYGksEe25ONJ3V89cVA)/RelationFeatureView
// Name: service::Pro::createdBy::RelationViewPage
export default function ServiceProCreatedByRelationViewPage(props: ServiceProCreatedByRelationViewPageProps) {
  const { ownerData, templateDataOverride, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceProServiceForCreatedByImpl = useMemo(() => new ServiceProServiceForCreatedByImpl(judoAxiosProvider), []);

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
  const [data, setData] = useState<ServiceServiceUserStored>({} as ServiceServiceUserStored);
  const [validation, setValidation] = useState<Map<keyof ServiceServiceUser, string>>(
    new Map<keyof ServiceServiceUser, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceServiceUserStored, any>>(
    {} as unknown as Record<keyof ServiceServiceUserStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceServiceUser, value: any) => void = useCallback(
    (attributeName: keyof ServiceServiceUser, value: any) => {
      payloadDiff.current![attributeName] = convertServiceProCreatedByRelationViewPagePayload(attributeName, value);
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

  const getPageQueryCustomizer: () => ServiceServiceUserQueryCustomizer = () => ({
    _mask: actions.getMask
      ? actions.getMask!()
      : '{created,email,firstName,isAdmin,lastName,phone,userName,activityCities{representation},activityDistricts{representation},activityCounties{representation},residentCity{representation},residentCounty{representation},residentDistrict{representation}}',
  });

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    if (actions.refreshAction) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };

  // Validation
  const validate: (data: ServiceServiceUser) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceServiceUserServiceUser_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_PRO_CREATED_BY_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceServiceUserServiceUser_View_EditDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
    refresh,
    submit,
  );

  // Dialog hooks
  const openServiceServiceUserServiceUser_View_EditAreasResidencyResidentCityLinkSetSelectorPage =
    useServiceServiceUserServiceUser_View_EditAreasResidencyResidentCityLinkSetSelectorPage();
  const openServiceServiceUserServiceUser_View_EditAreasResidencyResidentCountyLinkSetSelectorPage =
    useServiceServiceUserServiceUser_View_EditAreasResidencyResidentCountyLinkSetSelectorPage();
  const openServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictLinkSetSelectorPage =
    useServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictLinkSetSelectorPage();
  const openServiceServiceUserServiceUser_View_EditAreasActivityActivity_citiesActivityCitiesTableAddSelectorPage =
    useServiceServiceUserServiceUser_View_EditAreasActivityActivity_citiesActivityCitiesTableAddSelectorPage();
  const openServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsTableAddSelectorPage =
    useServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsTableAddSelectorPage();
  const openServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesTableAddSelectorPage =
    useServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesTableAddSelectorPage();
  const openServiceServiceUserActivityCitiesRelationViewPage = useServiceServiceUserActivityCitiesRelationViewPage();
  const openServiceServiceUserActivityCountiesRelationViewPage =
    useServiceServiceUserActivityCountiesRelationViewPage();
  const openServiceServiceUserActivityDistrictsRelationViewPage =
    useServiceServiceUserActivityDistrictsRelationViewPage();
  const openServiceServiceUserResidentCityRelationViewPage = useServiceServiceUserResidentCityRelationViewPage();
  const openServiceServiceUserResidentCountyRelationViewPage = useServiceServiceUserResidentCountyRelationViewPage();
  const openServiceServiceUserResidentDistrictRelationViewPage =
    useServiceServiceUserResidentDistrictRelationViewPage();

  // Action section
  const getPageTitle = (data: ServiceServiceUser): string => {
    return t('service.ServiceUser.ServiceUser_View_Edit', { defaultValue: 'ServiceUser View / Edit' });
  };
  const backAction = async () => {
    onClose();
  };
  const refreshAction = async (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceProServiceForCreatedByImpl.refresh(ownerData, getPageQueryCustomizer());
      setData(result);
      setLatestViewData(result);
      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceServiceUserStored, any>;
      if (customActions?.postRefreshAction) {
        await customActions?.postRefreshAction(result, storeDiff, setValidation);
      }
      return result;
    } catch (error) {
      handleError(error);
      setLatestViewData(null);
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
      return serviceProServiceForCreatedByImpl.getRangeForResidentCity(cleanUpPayload(data), queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const residentCityOpenSetSelectorAction = async (): Promise<ServiceCityStored | undefined> => {
    const { result, data: returnedData } =
      await openServiceServiceUserServiceUser_View_EditAreasResidencyResidentCityLinkSetSelectorPage(
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
      await openServiceServiceUserResidentCityRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const residentCountyAutocompleteRangeAction = async (
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<ServiceCountyStored[]> => {
    try {
      return serviceProServiceForCreatedByImpl.getRangeForResidentCounty(cleanUpPayload(data), queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const residentCountyOpenSetSelectorAction = async (): Promise<ServiceCountyStored | undefined> => {
    const { result, data: returnedData } =
      await openServiceServiceUserServiceUser_View_EditAreasResidencyResidentCountyLinkSetSelectorPage(
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
      await openServiceServiceUserResidentCountyRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const residentDistrictAutocompleteRangeAction = async (
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored[]> => {
    try {
      return serviceProServiceForCreatedByImpl.getRangeForResidentDistrict(cleanUpPayload(data), queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const residentDistrictOpenSetSelectorAction = async (): Promise<ServiceDistrictStored | undefined> => {
    const { result, data: returnedData } =
      await openServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictLinkSetSelectorPage(
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
      await openServiceServiceUserResidentDistrictRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const activityCitiesOpenAddSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceServiceUserServiceUser_View_EditAreasActivityActivity_citiesActivityCitiesTableAddSelectorPage(
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
      await openServiceServiceUserActivityCitiesRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const activityDistrictsOpenAddSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsTableAddSelectorPage(
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
      await openServiceServiceUserActivityDistrictsRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const activityCountiesOpenAddSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesTableAddSelectorPage(
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
      await openServiceServiceUserActivityCountiesRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const votesOpenPageAction = async (target: ServiceSimpleVote | ServiceSimpleVoteStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceSimpleVoteStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceServiceUserVotesRelationTablePage(
          ((target as ServiceSimpleVoteStored) || data).__signedIdentifier,
        ),
      );
      onClose();
    }
  };

  const actions: ServiceServiceUserServiceUser_View_EditDialogActions = {
    getPageTitle,
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
    votesOpenPageAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceServiceUserServiceUser_View_EditViewModel = {
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
    <ServiceServiceUserServiceUser_View_EditViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_qTNDYGksEe25ONJ3V89cVA)/RelationFeatureView"
          data-page-name="service::Pro::createdBy::RelationViewPage"
        />
        <ServiceServiceUserServiceUser_View_EditDialogContainer
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
    </ServiceServiceUserServiceUser_View_EditViewModelContext.Provider>
  );
}
