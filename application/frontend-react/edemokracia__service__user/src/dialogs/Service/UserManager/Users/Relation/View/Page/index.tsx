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
import { useSnackbar } from 'notistack';
import type { GridFilterModel } from '@mui/x-data-grid';
import type { Filter, FilterOption } from '~/components-api';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import { toastConfig } from '~/config';
import { useCRUDDialog } from '~/hooks';
import {
  passesLocalValidation,
  processQueryCustomizer,
  uiDateToServiceDate,
  uiTimeToServiceTime,
  useErrorHandler,
} from '~/utilities';
import type { DialogResult } from '~/utilities';
import { routeToServiceServiceUserVotesRelationTablePage } from '~/routes';
import { useServiceServiceUserServiceUser_View_EditAreasResidencyResidentCityTabularReferenceFieldLinkSetSelectorPage } from '~/dialogs/Service/ServiceUser/ServiceUser_View_Edit/Areas/Residency/ResidentCity/TabularReferenceField/Link/Set/Selector/Page';
import { useServiceServiceUserServiceUser_View_EditAreasResidencyResidentCountyTabularReferenceFieldLinkSetSelectorPage } from '~/dialogs/Service/ServiceUser/ServiceUser_View_Edit/Areas/Residency/ResidentCounty/TabularReferenceField/Link/Set/Selector/Page';
import { useServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictTabularReferenceFieldLinkSetSelectorPage } from '~/dialogs/Service/ServiceUser/ServiceUser_View_Edit/Areas/Residency/ResidentDistrict/TabularReferenceField/Link/Set/Selector/Page';
import { useServiceServiceUserServiceUser_View_EditAreasActivityActivity_citiesActivityCitiesTabularReferenceFieldTableSetSelectorPage } from '~/dialogs/Service/ServiceUser/ServiceUser_View_Edit/Areas/Activity/Activity_cities/ActivityCities/TabularReferenceField/Table/Set/Selector/Page';
import { useServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsTabularReferenceFieldTableSetSelectorPage } from '~/dialogs/Service/ServiceUser/ServiceUser_View_Edit/Areas/Activity/Activity_districts/ActivityDistricts/TabularReferenceField/Table/Set/Selector/Page';
import { useServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesTabularReferenceFieldTableSetSelectorPage } from '~/dialogs/Service/ServiceUser/ServiceUser_View_Edit/Areas/Activity/Tab_activity_counties/ActivityCounties/TabularReferenceField/Table/Set/Selector/Page';
import { useServiceServiceUserActivityCitiesRelationViewPage } from '~/dialogs/Service/ServiceUser/ActivityCities/Relation/View/Page';
import { useServiceServiceUserActivityCountiesRelationViewPage } from '~/dialogs/Service/ServiceUser/ActivityCounties/Relation/View/Page';
import { useServiceServiceUserActivityDistrictsRelationViewPage } from '~/dialogs/Service/ServiceUser/ActivityDistricts/Relation/View/Page';
import { useServiceServiceUserResidentCityRelationViewPage } from '~/dialogs/Service/ServiceUser/ResidentCity/Relation/View/Page';
import { useServiceServiceUserResidentCountyRelationViewPage } from '~/dialogs/Service/ServiceUser/ResidentCounty/Relation/View/Page';
import { useServiceServiceUserResidentDistrictRelationViewPage } from '~/dialogs/Service/ServiceUser/ResidentDistrict/Relation/View/Page';
import type { ServiceServiceUserServiceUser_View_EditDialogActions } from '~/containers/Service/ServiceUser/ServiceUser_View_Edit/ServiceServiceUserServiceUser_View_EditDialogContainer';
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
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceSimpleVote,
  ServiceSimpleVoteQueryCustomizer,
  ServiceSimpleVoteStored,
  ServiceUserManager,
  ServiceUserManagerStored,
} from '~/services/data-api';
import { serviceServiceUserServiceImpl } from '~/services/data-axios';
export type ServiceServiceUserServiceUser_View_EditDialogActionsExtended =
  ServiceServiceUserServiceUser_View_EditDialogActions & {};

export const SERVICE_USER_MANAGER_USERS_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceServiceUserServiceUser_View_EditActionsHook';
export type ServiceServiceUserServiceUser_View_EditActionsHook = (
  ownerData: any,
  data: ServiceServiceUserStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceServiceUser, value: any) => void,
) => ServiceServiceUserServiceUser_View_EditDialogActionsExtended;

export const useServiceUserManagerUsersRelationViewPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceServiceUserStored>>) => {
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
          <ServiceUserManagerUsersRelationViewPage
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

export const convertServiceUserManagerUsersRelationViewPagePayload = (
  attributeName: keyof ServiceServiceUser,
  value: any,
): any => {
  const dateTypes: string[] = [];
  const dateTimeTypes: string[] = ['created'];
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

const ServiceServiceUserServiceUser_View_EditDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/ServiceUser/ServiceUser_View_Edit/ServiceServiceUserServiceUser_View_EditDialogContainer'
    ),
);

export interface ServiceUserManagerUsersRelationViewPageProps {
  ownerData: any;

  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceServiceUserStored) => Promise<void>;
}

// XMIID: User/(esm/_X0EKgFvPEe6jm_SkPSYEYw)/RelationFeatureView
// Name: service::UserManager::users::Relation::View::Page
// Open in dialog: true
export default function ServiceUserManagerUsersRelationViewPage(props: ServiceUserManagerUsersRelationViewPageProps) {
  const { ownerData, onClose, onSubmit } = props;

  // Hooks section
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
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
      payloadDiff.current![attributeName] = convertServiceUserManagerUsersRelationViewPagePayload(attributeName, value);
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
    return true && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
  }, [data]);

  const pageQueryCustomizer: ServiceServiceUserQueryCustomizer = {
    _mask:
      '{lastName,firstName,phone,created,isAdmin,userName,email,activityCities{representation},activityDistricts{representation},activityCounties{representation},residentCity{representation},residentCounty{representation},residentDistrict{representation}}',
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceServiceUserServiceUser_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_MANAGER_USERS_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceServiceUserServiceUser_View_EditDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
  );

  // Dialog hooks
  const openServiceServiceUserServiceUser_View_EditAreasResidencyResidentCityTabularReferenceFieldLinkSetSelectorPage =
    useServiceServiceUserServiceUser_View_EditAreasResidencyResidentCityTabularReferenceFieldLinkSetSelectorPage();
  const openServiceServiceUserServiceUser_View_EditAreasResidencyResidentCountyTabularReferenceFieldLinkSetSelectorPage =
    useServiceServiceUserServiceUser_View_EditAreasResidencyResidentCountyTabularReferenceFieldLinkSetSelectorPage();
  const openServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictTabularReferenceFieldLinkSetSelectorPage =
    useServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictTabularReferenceFieldLinkSetSelectorPage();
  const openServiceServiceUserServiceUser_View_EditAreasActivityActivity_citiesActivityCitiesTabularReferenceFieldTableSetSelectorPage =
    useServiceServiceUserServiceUser_View_EditAreasActivityActivity_citiesActivityCitiesTabularReferenceFieldTableSetSelectorPage();
  const openServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsTabularReferenceFieldTableSetSelectorPage =
    useServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsTabularReferenceFieldTableSetSelectorPage();
  const openServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesTabularReferenceFieldTableSetSelectorPage =
    useServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesTabularReferenceFieldTableSetSelectorPage();
  const openServiceServiceUserActivityCitiesRelationViewPage = useServiceServiceUserActivityCitiesRelationViewPage();
  const openServiceServiceUserActivityCountiesRelationViewPage =
    useServiceServiceUserActivityCountiesRelationViewPage();
  const openServiceServiceUserActivityDistrictsRelationViewPage =
    useServiceServiceUserActivityDistrictsRelationViewPage();
  const openServiceServiceUserResidentCityRelationViewPage = useServiceServiceUserResidentCityRelationViewPage();
  const openServiceServiceUserResidentCountyRelationViewPage = useServiceServiceUserResidentCountyRelationViewPage();
  const openServiceServiceUserResidentDistrictRelationViewPage =
    useServiceServiceUserResidentDistrictRelationViewPage();

  // Calculated section
  const title: string = t('service.ServiceUser.ServiceUser_View_Edit', { defaultValue: 'ServiceUser View / Edit' });

  // Action section
  const backAction = async () => {
    onClose();
  };
  const refreshAction = async (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceServiceUserServiceImpl.refresh(ownerData, pageQueryCustomizer);

      setData(result);

      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceServiceUserStored, any>;

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const cancelAction = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await refreshAction(processQueryCustomizer(pageQueryCustomizer));
  };
  const updateAction = async () => {
    setIsLoading(true);

    try {
      const res = await serviceServiceUserServiceImpl.update(payloadDiff.current);

      if (res) {
        enqueueSnackbar(t('judo.action.save.success', { defaultValue: 'Changes saved' }), {
          variant: 'success',
          ...toastConfig.success,
        });
        setValidation(new Map<keyof ServiceServiceUser, string>());
        await actions.refreshAction!(pageQueryCustomizer);
        setEditMode(false);
      }
    } catch (error) {
      handleError<ServiceServiceUser>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activityDistrictsOpenPageAction = async (target?: ServiceDistrictStored) => {
    await openServiceServiceUserActivityDistrictsRelationViewPage(target!);

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
  const activityDistrictsOpenAddSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsTabularReferenceFieldTableSetSelectorPage(
        data,
        data.activityDistricts ?? [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('activityDistricts', [...(data.activityDistricts || []), ...returnedData]);
      }
    }
  };

  const activityDistrictsClearAction = async () => {
    storeDiff('activityDistricts', []);
  };
  const activityDistrictsRemoveAction = async (target?: ServiceDistrictStored, silentMode?: boolean) => {
    if (target) {
      const newList = (data?.activityDistricts ?? []).filter((c) => c.__identifier !== target!.__identifier);
      storeDiff('activityDistricts', newList);
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
  const residentCountyOpenPageAction = async (target?: ServiceCountyStored) => {
    await openServiceServiceUserResidentCountyRelationViewPage(target!);

    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const residentCountyOpenSetSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceServiceUserServiceUser_View_EditAreasResidencyResidentCountyTabularReferenceFieldLinkSetSelectorPage(
        data,
        data.residentCounty ? [data.residentCounty] : [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('residentCounty', returnedData[0]);
      }
    }
  };
  const residentCountyAutocompleteRangeAction = async (
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<ServiceCountyStored[]> => {
    try {
      return serviceServiceUserServiceImpl.getRangeForResidentCounty(data, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const residentCountyUnsetAction = async (target: ServiceCountyStored) => {
    storeDiff('residentCounty', null);
  };
  const residentDistrictOpenPageAction = async (target?: ServiceDistrictStored) => {
    await openServiceServiceUserResidentDistrictRelationViewPage(target!);

    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const residentDistrictOpenSetSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictTabularReferenceFieldLinkSetSelectorPage(
        data,
        data.residentDistrict ? [data.residentDistrict] : [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('residentDistrict', returnedData[0]);
      }
    }
  };
  const residentDistrictAutocompleteRangeAction = async (
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored[]> => {
    try {
      return serviceServiceUserServiceImpl.getRangeForResidentDistrict(data, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const residentDistrictUnsetAction = async (target: ServiceDistrictStored) => {
    storeDiff('residentDistrict', null);
  };
  const residentCityOpenPageAction = async (target?: ServiceCityStored) => {
    await openServiceServiceUserResidentCityRelationViewPage(target!);

    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const residentCityOpenSetSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceServiceUserServiceUser_View_EditAreasResidencyResidentCityTabularReferenceFieldLinkSetSelectorPage(
        data,
        data.residentCity ? [data.residentCity] : [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('residentCity', returnedData[0]);
      }
    }
  };
  const residentCityAutocompleteRangeAction = async (
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<ServiceCityStored[]> => {
    try {
      return serviceServiceUserServiceImpl.getRangeForResidentCity(data, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const residentCityUnsetAction = async (target: ServiceCityStored) => {
    storeDiff('residentCity', null);
  };
  const votesOpenPageAction = async (target?: ServiceSimpleVoteStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceServiceUserVotesRelationTablePage((target || data).__signedIdentifier));
    onClose();
  };
  const activityCitiesOpenPageAction = async (target?: ServiceCityStored) => {
    await openServiceServiceUserActivityCitiesRelationViewPage(target!);

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
  const activityCitiesOpenAddSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceServiceUserServiceUser_View_EditAreasActivityActivity_citiesActivityCitiesTabularReferenceFieldTableSetSelectorPage(
        data,
        data.activityCities ?? [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('activityCities', [...(data.activityCities || []), ...returnedData]);
      }
    }
  };

  const activityCitiesClearAction = async () => {
    storeDiff('activityCities', []);
  };
  const activityCitiesRemoveAction = async (target?: ServiceCityStored, silentMode?: boolean) => {
    if (target) {
      const newList = (data?.activityCities ?? []).filter((c) => c.__identifier !== target!.__identifier);
      storeDiff('activityCities', newList);
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
  const activityCountiesOpenPageAction = async (target?: ServiceCountyStored) => {
    await openServiceServiceUserActivityCountiesRelationViewPage(target!);

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
  const activityCountiesOpenAddSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesTabularReferenceFieldTableSetSelectorPage(
        data,
        data.activityCounties ?? [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('activityCounties', [...(data.activityCounties || []), ...returnedData]);
      }
    }
  };

  const activityCountiesClearAction = async () => {
    storeDiff('activityCounties', []);
  };
  const activityCountiesRemoveAction = async (target?: ServiceCountyStored, silentMode?: boolean) => {
    if (target) {
      const newList = (data?.activityCounties ?? []).filter((c) => c.__identifier !== target!.__identifier);
      storeDiff('activityCounties', newList);
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

  const actions: ServiceServiceUserServiceUser_View_EditDialogActions = {
    backAction,
    refreshAction,
    cancelAction,
    updateAction,
    activityDistrictsOpenPageAction,
    activityDistrictsFilterAction,
    activityDistrictsOpenAddSelectorAction,
    activityDistrictsClearAction,
    activityDistrictsRemoveAction,
    activityDistrictsBulkRemoveAction,
    residentCountyOpenPageAction,
    residentCountyOpenSetSelectorAction,
    residentCountyAutocompleteRangeAction,
    residentCountyUnsetAction,
    residentDistrictOpenPageAction,
    residentDistrictOpenSetSelectorAction,
    residentDistrictAutocompleteRangeAction,
    residentDistrictUnsetAction,
    residentCityOpenPageAction,
    residentCityOpenSetSelectorAction,
    residentCityAutocompleteRangeAction,
    residentCityUnsetAction,
    votesOpenPageAction,
    activityCitiesOpenPageAction,
    activityCitiesFilterAction,
    activityCitiesOpenAddSelectorAction,
    activityCitiesClearAction,
    activityCitiesRemoveAction,
    activityCitiesBulkRemoveAction,
    activityCountiesOpenPageAction,
    activityCountiesFilterAction,
    activityCountiesOpenAddSelectorAction,
    activityCountiesClearAction,
    activityCountiesRemoveAction,
    activityCountiesBulkRemoveAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    actions.refreshAction!(pageQueryCustomizer);
  }, []);

  return (
    <div
      id="User/(esm/_X0EKgFvPEe6jm_SkPSYEYw)/RelationFeatureView"
      data-page-name="service::UserManager::users::Relation::View::Page"
    >
      <Suspense>
        <ServiceServiceUserServiceUser_View_EditDialogContainer
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
