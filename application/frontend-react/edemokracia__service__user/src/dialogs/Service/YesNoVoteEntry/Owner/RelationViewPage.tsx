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
import { useParams } from 'react-router-dom';
import { useJudoNavigation } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import type { ServiceServiceUserServiceUser_View_EditDialogActions } from '~/containers/Service/ServiceUser/ServiceUser_View_Edit/ServiceServiceUserServiceUser_View_EditDialogContainer';
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
import { useCRUDDialog, useSnacks } from '~/hooks';
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
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceSimpleVote,
  ServiceSimpleVoteQueryCustomizer,
  ServiceSimpleVoteStored,
  ServiceYesNoVoteEntry,
  ServiceYesNoVoteEntryStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceServiceUserServiceImpl } from '~/services/data-axios/ServiceServiceUserServiceImpl';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceServiceUserServiceUser_View_EditDialogActionsExtended =
  ServiceServiceUserServiceUser_View_EditDialogActions & {
    postRefreshAction?: (
      data: ServiceServiceUserStored,
      storeDiff: (attributeName: keyof ServiceServiceUser, value: any) => void,
      setValidation: Dispatch<SetStateAction<Map<keyof ServiceServiceUser, string>>>,
    ) => Promise<void>;
  };

export const SERVICE_YES_NO_VOTE_ENTRY_OWNER_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceServiceUserServiceUser_View_EditActionsHook';
export type ServiceServiceUserServiceUser_View_EditActionsHook = (
  ownerData: any,
  data: ServiceServiceUserStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceServiceUser, value: any) => void,
) => ServiceServiceUserServiceUser_View_EditDialogActionsExtended;

export const useServiceYesNoVoteEntryOwnerRelationViewPage = (): ((
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
          <ServiceYesNoVoteEntryOwnerRelationViewPage
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

export const convertServiceYesNoVoteEntryOwnerRelationViewPagePayload = (
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

export interface ServiceYesNoVoteEntryOwnerRelationViewPageProps {
  ownerData: any;

  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceServiceUserStored) => Promise<void>;
}

// XMIID: User/(esm/_X3OWsFojEe6_67aMO2jOsw)/RelationFeatureView
// Name: service::YesNoVoteEntry::owner::RelationViewPage
export default function ServiceYesNoVoteEntryOwnerRelationViewPage(
  props: ServiceYesNoVoteEntryOwnerRelationViewPageProps,
) {
  const { ownerData, onClose, onSubmit } = props;

  // Services
  const serviceServiceUserServiceImpl = useMemo(() => new ServiceServiceUserServiceImpl(judoAxiosProvider), []);

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
      payloadDiff.current![attributeName] = convertServiceYesNoVoteEntryOwnerRelationViewPagePayload(
        attributeName,
        value,
      );
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

  const pageQueryCustomizer: ServiceServiceUserQueryCustomizer = {
    _mask:
      '{created,email,firstName,isAdmin,lastName,phone,userName,activityCities{representation},activityDistricts{representation},activityCounties{representation},residentCity{representation},residentCounty{representation},residentDistrict{representation}}',
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceServiceUserServiceUser_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_YES_NO_VOTE_ENTRY_OWNER_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceServiceUserServiceUser_View_EditDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
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

  // Calculated section
  const title: string = t('service.ServiceUser.ServiceUser_View_Edit', { defaultValue: 'ServiceUser View / Edit' });

  // Private actions
  const submit = async () => {};

  // Action section
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
  const residentCityUnsetAction = async (target: ServiceCityStored) => {
    storeDiff('residentCity', null);
  };
  const residentCityOpenPageAction = async (target?: ServiceCityStored) => {
    await openServiceServiceUserResidentCityRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  const residentCountyUnsetAction = async (target: ServiceCountyStored) => {
    storeDiff('residentCounty', null);
  };
  const residentCountyOpenPageAction = async (target?: ServiceCountyStored) => {
    await openServiceServiceUserResidentCountyRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  const residentDistrictUnsetAction = async (target: ServiceDistrictStored) => {
    storeDiff('residentDistrict', null);
  };
  const residentDistrictOpenPageAction = async (target?: ServiceDistrictStored) => {
    await openServiceServiceUserResidentDistrictRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
      const newList = (data?.activityCities ?? []).filter((c) => !selectedIds.includes(c.__identifier));
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
      const newList = (data?.activityCities ?? []).filter((c) => c.__identifier !== target!.__identifier);
      storeDiff('activityCities', newList);
    }
  };
  const activityCitiesOpenPageAction = async (target?: ServiceCityStored) => {
    await openServiceServiceUserActivityCitiesRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
      const newList = (data?.activityDistricts ?? []).filter((c) => !selectedIds.includes(c.__identifier));
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
      const newList = (data?.activityDistricts ?? []).filter((c) => c.__identifier !== target!.__identifier);
      storeDiff('activityDistricts', newList);
    }
  };
  const activityDistrictsOpenPageAction = async (target?: ServiceDistrictStored) => {
    await openServiceServiceUserActivityDistrictsRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
      const newList = (data?.activityCounties ?? []).filter((c) => !selectedIds.includes(c.__identifier));
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
      const newList = (data?.activityCounties ?? []).filter((c) => c.__identifier !== target!.__identifier);
      storeDiff('activityCounties', newList);
    }
  };
  const activityCountiesOpenPageAction = async (target?: ServiceCountyStored) => {
    await openServiceServiceUserActivityCountiesRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const votesOpenPageAction = async (target?: ServiceSimpleVoteStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceServiceUserVotesRelationTablePage((target || data).__signedIdentifier));
    onClose();
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
      const result = await serviceServiceUserServiceImpl.refresh(ownerData, pageQueryCustomizer);
      setData(result);
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
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };

  const actions: ServiceServiceUserServiceUser_View_EditDialogActions = {
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
    backAction,
    refreshAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    actions.refreshAction!(pageQueryCustomizer);
  }, []);

  return (
    <div
      id="User/(esm/_X3OWsFojEe6_67aMO2jOsw)/RelationFeatureView"
      data-page-name="service::YesNoVoteEntry::owner::RelationViewPage"
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
          submit={submit}
        />
      </Suspense>
    </div>
  );
}
