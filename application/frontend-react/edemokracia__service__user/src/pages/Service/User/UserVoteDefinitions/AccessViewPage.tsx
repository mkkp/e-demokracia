//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: 'src/pages/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs

import type { GridFilterModel } from '@mui/x-data-grid';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { Suspense, createContext, lazy, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import { useJudoNavigation } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { useConfirmDialog, useFilterDialog } from '~/components/dialog';
import type {
  ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageActions,
  ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageProps,
} from '~/containers/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageContainer';
import { useServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsTableAddSelectorPage } from '~/dialogs/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/Root/TabBar/OwnedVoteDefinitionsGroup/OwnedVoteDefinitions/TableAddSelectorPage';
import { useServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/TabBar/Selectanswervote/VoteSelectAnswer/Relation/Table/CallSelector';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteRating/Input/Form';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteYesNo/Input/Form';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteYesNoAbstain/Input/Form';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import { routeToServiceUserVoteDefinitionActiveVoteDefinitionsGlobalRelationViewPage } from '~/routes';
import { routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCitiesRelationViewPage } from '~/routes';
import { routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesRelationViewPage } from '~/routes';
import { routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityDistrictsRelationViewPage } from '~/routes';
import { routeToServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCityRelationViewPage } from '~/routes';
import { routeToServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCountyRelationViewPage } from '~/routes';
import { routeToServiceUserVoteDefinitionActiveVoteDefinitionsInResidentDistrictRelationViewPage } from '~/routes';
import { routeToServiceUserVoteDefinitionOwnedVoteDefinitionsRelationViewPage } from '~/routes';
import type {
  ServiceUserVoteDefinition,
  ServiceUserVoteDefinitionQueryCustomizer,
  ServiceUserVoteDefinitionStored,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForUserVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForUserVoteDefinitionsImpl';
import { PageContainerTransition } from '~/theme/animations';
import { cleanUpPayload, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageActionsExtended =
  ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageActions & {
    postRefreshAction?: (
      data: ServiceUserVoteDefinitionStored,
      storeDiff: (attributeName: keyof ServiceUserVoteDefinition, value: any) => void,
      setValidation: Dispatch<SetStateAction<Map<keyof ServiceUserVoteDefinition, string>>>,
    ) => Promise<void>;
  };

export const SERVICE_USER_USER_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_USER_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_ACTIONS_HOOK';
export type ServiceUserVoteDefinitionUserVoteDefinition_View_EditActionsHook = (
  data: ServiceUserVoteDefinitionStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceUserVoteDefinition, value: any) => void,

  refresh: () => Promise<void>,
  submit: () => Promise<void>,
) => ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageActionsExtended;

export interface ServiceUserVoteDefinitionUserVoteDefinition_View_EditViewModel
  extends ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
}

const ServiceUserVoteDefinitionUserVoteDefinition_View_EditViewModelContext =
  createContext<ServiceUserVoteDefinitionUserVoteDefinition_View_EditViewModel>({} as any);
export const useServiceUserVoteDefinitionUserVoteDefinition_View_EditViewModel = () => {
  const context = useContext(ServiceUserVoteDefinitionUserVoteDefinition_View_EditViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceUserVoteDefinitionUserVoteDefinition_View_EditViewModel must be used within a(n) ServiceUserVoteDefinitionUserVoteDefinition_View_EditViewModelProvider',
    );
  }
  return context;
};

export const convertServiceUserUserVoteDefinitionsAccessViewPagePayload = (
  attributeName: keyof ServiceUserVoteDefinition,
  value: any,
): any => {
  return value;
};

const ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageContainer = lazy(
  () =>
    import(
      '~/containers/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageContainer'
    ),
);

// XMIID: User/(esm/_mNnPsF5QEe6vsex_cZNQbQ)/AccessViewPageDefinition
// Name: service::User::userVoteDefinitions::AccessViewPage
export default function ServiceUserUserVoteDefinitionsAccessViewPage() {
  // Services
  const userServiceForUserVoteDefinitionsImpl = useMemo(
    () => new UserServiceForUserVoteDefinitionsImpl(judoAxiosProvider),
    [],
  );

  // Hooks section
  const { t } = useTranslation();
  const { showSuccessSnack, showErrorSnack } = useSnacks();
  const { navigate, back: navigateBack } = useJudoNavigation();
  const { openFilterDialog } = useFilterDialog();
  const { openConfirmDialog } = useConfirmDialog();
  const { setLatestViewData } = useViewData();
  const handleError = useErrorHandler();
  const openCRUDDialog = useCRUDDialog();

  // State section
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<ServiceUserVoteDefinitionStored>({} as ServiceUserVoteDefinitionStored);
  const [validation, setValidation] = useState<Map<keyof ServiceUserVoteDefinition, string>>(
    new Map<keyof ServiceUserVoteDefinition, string>(),
  );

  // Ref section
  const singletonHost = useRef<{ __signedIdentifier: string }>({} as unknown as { __signedIdentifier: string });
  const payloadDiff = useRef<Record<keyof ServiceUserVoteDefinitionStored, any>>(
    {} as unknown as Record<keyof ServiceUserVoteDefinitionStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceUserVoteDefinition, value: any) => void = useCallback(
    (attributeName: keyof ServiceUserVoteDefinition, value: any) => {
      payloadDiff.current![attributeName] = convertServiceUserUserVoteDefinitionsAccessViewPagePayload(
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
    return false && typeof data?.__updateable === 'boolean' && data?.__updateable;
  }, [data]);
  const isFormDeleteable = useCallback(() => {
    return false && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
  }, [data]);

  const getPageQueryCustomizer: () => ServiceUserVoteDefinitionQueryCustomizer = () => ({
    _mask: actions.getMask ? actions.getMask!() : '{}',
  });

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    if (actions.refreshAction) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceUserVoteDefinitionUserVoteDefinition_View_EditActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_USER_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions: ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageActionsExtended | undefined =
    customActionsHook?.(data, editMode, storeDiff, refresh, submit);

  // Dialog hooks
  const openServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsTableAddSelectorPage =
    useServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsTableAddSelectorPage();
  const openServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector =
    useServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector();
  const openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm =
    useServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm();
  const openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm =
    useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm();
  const openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm =
    useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm();

  // Action section
  const getPageTitle = (data: ServiceUserVoteDefinition): string => {
    return t('service.UserVoteDefinition.UserVoteDefinition_View_Edit', {
      defaultValue: 'UserVoteDefinition View / Edit',
    });
  };
  const backAction = async () => {
    navigateBack();
  };
  const refreshAction = async (
    queryCustomizer: ServiceUserVoteDefinitionQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceUserVoteDefinitionStored>> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const response = await userServiceForUserVoteDefinitionsImpl.refresh(
        singletonHost.current,
        getPageQueryCustomizer(),
      );
      const { data: result } = response;
      setData(result);
      setLatestViewData(result);
      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceUserVoteDefinitionStored, any>;
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
  const activeVoteDefinitionsGlobalFilterAction = async (
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
  const activeVoteDefinitionsGlobalRefreshAction = async (
    queryCustomizer: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceVoteDefinitionStored[]>> => {
    return userServiceForUserVoteDefinitionsImpl.listActiveVoteDefinitionsGlobal(
      singletonHost.current,
      queryCustomizer,
    );
  };
  const activeVoteDefinitionsGlobalOpenPageAction = async (
    target: ServiceVoteDefinition | ServiceVoteDefinitionStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceVoteDefinitionStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceUserVoteDefinitionActiveVoteDefinitionsGlobalRelationViewPage(
          ((target as ServiceVoteDefinitionStored) || data).__signedIdentifier,
        ),
      );
    }
  };
  const activeVoteDefinitionsInActivityCitiesFilterAction = async (
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
  const activeVoteDefinitionsInActivityCitiesRefreshAction = async (
    queryCustomizer: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceVoteDefinitionStored[]>> => {
    return userServiceForUserVoteDefinitionsImpl.listActiveVoteDefinitionsInActivityCities(
      singletonHost.current,
      queryCustomizer,
    );
  };
  const activeVoteDefinitionsInActivityCitiesOpenPageAction = async (
    target: ServiceVoteDefinition | ServiceVoteDefinitionStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceVoteDefinitionStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCitiesRelationViewPage(
          ((target as ServiceVoteDefinitionStored) || data).__signedIdentifier,
        ),
      );
    }
  };
  const activeVoteDefinitionsInActivityCountiesFilterAction = async (
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
  const activeVoteDefinitionsInActivityCountiesRefreshAction = async (
    queryCustomizer: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceVoteDefinitionStored[]>> => {
    return userServiceForUserVoteDefinitionsImpl.listActiveVoteDefinitionsInActivityCounties(
      singletonHost.current,
      queryCustomizer,
    );
  };
  const activeVoteDefinitionsInActivityCountiesOpenPageAction = async (
    target: ServiceVoteDefinition | ServiceVoteDefinitionStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceVoteDefinitionStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesRelationViewPage(
          ((target as ServiceVoteDefinitionStored) || data).__signedIdentifier,
        ),
      );
    }
  };
  const activeVoteDefinitionsInActivityDistrictsFilterAction = async (
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
  const activeVoteDefinitionsInActivityDistrictsRefreshAction = async (
    queryCustomizer: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceVoteDefinitionStored[]>> => {
    return userServiceForUserVoteDefinitionsImpl.listActiveVoteDefinitionsInActivityDistricts(
      singletonHost.current,
      queryCustomizer,
    );
  };
  const activeVoteDefinitionsInActivityDistrictsOpenPageAction = async (
    target: ServiceVoteDefinition | ServiceVoteDefinitionStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceVoteDefinitionStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityDistrictsRelationViewPage(
          ((target as ServiceVoteDefinitionStored) || data).__signedIdentifier,
        ),
      );
    }
  };
  const activeVoteDefinitionsInResidentCityFilterAction = async (
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
  const activeVoteDefinitionsInResidentCityRefreshAction = async (
    queryCustomizer: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceVoteDefinitionStored[]>> => {
    return userServiceForUserVoteDefinitionsImpl.listActiveVoteDefinitionsInResidentCity(
      singletonHost.current,
      queryCustomizer,
    );
  };
  const activeVoteDefinitionsInResidentCityOpenPageAction = async (
    target: ServiceVoteDefinition | ServiceVoteDefinitionStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceVoteDefinitionStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCityRelationViewPage(
          ((target as ServiceVoteDefinitionStored) || data).__signedIdentifier,
        ),
      );
    }
  };
  const activeVoteDefinitionsInResidentCountyFilterAction = async (
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
  const activeVoteDefinitionsInResidentCountyRefreshAction = async (
    queryCustomizer: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceVoteDefinitionStored[]>> => {
    return userServiceForUserVoteDefinitionsImpl.listActiveVoteDefinitionsInResidentCounty(
      singletonHost.current,
      queryCustomizer,
    );
  };
  const activeVoteDefinitionsInResidentCountyOpenPageAction = async (
    target: ServiceVoteDefinition | ServiceVoteDefinitionStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceVoteDefinitionStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCountyRelationViewPage(
          ((target as ServiceVoteDefinitionStored) || data).__signedIdentifier,
        ),
      );
    }
  };
  const activeVoteDefinitionsInResidentDistrictFilterAction = async (
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
  const activeVoteDefinitionsInResidentDistrictRefreshAction = async (
    queryCustomizer: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceVoteDefinitionStored[]>> => {
    return userServiceForUserVoteDefinitionsImpl.listActiveVoteDefinitionsInResidentDistrict(
      singletonHost.current,
      queryCustomizer,
    );
  };
  const activeVoteDefinitionsInResidentDistrictOpenPageAction = async (
    target: ServiceVoteDefinition | ServiceVoteDefinitionStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceVoteDefinitionStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceUserVoteDefinitionActiveVoteDefinitionsInResidentDistrictRelationViewPage(
          ((target as ServiceVoteDefinitionStored) || data).__signedIdentifier,
        ),
      );
    }
  };
  const ownedVoteDefinitionsOpenAddSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsTableAddSelectorPage(
        data,
        data.ownedVoteDefinitions ?? [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        try {
          setIsLoading(true);
          await userServiceForUserVoteDefinitionsImpl.addOwnedVoteDefinitions(data, returnedData);
          if (!editMode) {
            await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
          }
        } catch (e) {
          console.error(e);
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  const ownedVoteDefinitionsBulkRemoveAction = async (
    selectedRows: ServiceVoteDefinitionStored[],
  ): Promise<DialogResult<Array<ServiceVoteDefinitionStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceVoteDefinitionStored>({
        dialogTitle: t('judo.action.bulk-remove', { defaultValue: 'Remove' }),
        itemTitleFn: (item) => item.title!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.ownedVoteDefinitionsRemoveAction) {
              await actions.ownedVoteDefinitionsRemoveAction!(item, true);
            }
            successHandler();
          } catch (error) {
            errorHandler(error);
          }
        },
        onClose: async (needsRefresh) => {
          if (needsRefresh) {
            if (actions.refreshAction) {
              await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
            }
            resolve({
              result: 'submit',
              data: [],
            });
          } else {
            resolve({
              result: 'close',
            });
          }
        },
      });
    });
  };
  const ownedVoteDefinitionsFilterAction = async (
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
  const ownedVoteDefinitionsRefreshAction = async (
    queryCustomizer: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceVoteDefinitionStored[]>> => {
    return userServiceForUserVoteDefinitionsImpl.listOwnedVoteDefinitions(singletonHost.current, queryCustomizer);
  };
  const ownedVoteDefinitionsRemoveAction = async (target?: ServiceVoteDefinitionStored, silentMode?: boolean) => {
    if (target) {
      try {
        if (!silentMode) {
          setIsLoading(true);
        }
        await userServiceForUserVoteDefinitionsImpl.removeOwnedVoteDefinitions(data, [target!]);
        if (!silentMode) {
          if (!editMode) {
            await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
          }
        }
      } catch (error) {
        if (!silentMode) {
          handleError<ServiceVoteDefinition>(error, undefined, target);
        }
      } finally {
        if (!silentMode) {
          setIsLoading(false);
        }
      }
    }
  };
  const ownedVoteDefinitionsOpenPageAction = async (
    target: ServiceVoteDefinition | ServiceVoteDefinitionStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceVoteDefinitionStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceUserVoteDefinitionOwnedVoteDefinitionsRelationViewPage(
          ((target as ServiceVoteDefinitionStored) || data).__signedIdentifier,
        ),
      );
    }
  };
  const activeVoteDefinitionsGlobalVoteRatingAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeVoteDefinitionsInActivityCitiesVoteRatingAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeVoteDefinitionsInActivityCountiesVoteRatingAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeVoteDefinitionsInActivityDistrictsVoteRatingAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeVoteDefinitionsInResidentCityVoteRatingAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeVoteDefinitionsInResidentCountyVoteRatingAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeVoteDefinitionsInResidentDistrictVoteRatingAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const ownedVoteDefinitionsVoteRatingAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeVoteDefinitionsGlobalVoteSelectAnswerAction = async () => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector(
        data,
      );
    if (result === 'submit') {
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const activeVoteDefinitionsInActivityCitiesVoteSelectAnswerAction = async () => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector(
        data,
      );
    if (result === 'submit') {
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const activeVoteDefinitionsInActivityCountiesVoteSelectAnswerAction = async () => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector(
        data,
      );
    if (result === 'submit') {
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const activeVoteDefinitionsInActivityDistrictsVoteSelectAnswerAction = async () => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector(
        data,
      );
    if (result === 'submit') {
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const activeVoteDefinitionsInResidentCityVoteSelectAnswerAction = async () => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector(
        data,
      );
    if (result === 'submit') {
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const activeVoteDefinitionsInResidentCountyVoteSelectAnswerAction = async () => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector(
        data,
      );
    if (result === 'submit') {
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const activeVoteDefinitionsInResidentDistrictVoteSelectAnswerAction = async () => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector(
        data,
      );
    if (result === 'submit') {
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const ownedVoteDefinitionsVoteSelectAnswerAction = async () => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector(
        data,
      );
    if (result === 'submit') {
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const activeVoteDefinitionsGlobalVoteYesNoAbstainAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeVoteDefinitionsInActivityCitiesVoteYesNoAbstainAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeVoteDefinitionsInActivityCountiesVoteYesNoAbstainAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeVoteDefinitionsInActivityDistrictsVoteYesNoAbstainAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeVoteDefinitionsInResidentCityVoteYesNoAbstainAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeVoteDefinitionsInResidentCountyVoteYesNoAbstainAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeVoteDefinitionsInResidentDistrictVoteYesNoAbstainAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const ownedVoteDefinitionsVoteYesNoAbstainAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeVoteDefinitionsGlobalVoteYesNoAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeVoteDefinitionsInActivityCitiesVoteYesNoAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeVoteDefinitionsInActivityCountiesVoteYesNoAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeVoteDefinitionsInActivityDistrictsVoteYesNoAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeVoteDefinitionsInResidentCityVoteYesNoAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeVoteDefinitionsInResidentCountyVoteYesNoAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeVoteDefinitionsInResidentDistrictVoteYesNoAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const ownedVoteDefinitionsVoteYesNoAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const getSingletonPayload = async (): Promise<JudoIdentifiable<any>> => {
    const { data: sp } = await userServiceForUserVoteDefinitionsImpl.refreshForUserVoteDefinitions({
      _mask: '{}',
    });
    return sp;
  };

  const actions: ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageActions = {
    getPageTitle,
    backAction,
    refreshAction,
    activeVoteDefinitionsGlobalFilterAction,
    activeVoteDefinitionsGlobalRefreshAction,
    activeVoteDefinitionsGlobalOpenPageAction,
    activeVoteDefinitionsInActivityCitiesFilterAction,
    activeVoteDefinitionsInActivityCitiesRefreshAction,
    activeVoteDefinitionsInActivityCitiesOpenPageAction,
    activeVoteDefinitionsInActivityCountiesFilterAction,
    activeVoteDefinitionsInActivityCountiesRefreshAction,
    activeVoteDefinitionsInActivityCountiesOpenPageAction,
    activeVoteDefinitionsInActivityDistrictsFilterAction,
    activeVoteDefinitionsInActivityDistrictsRefreshAction,
    activeVoteDefinitionsInActivityDistrictsOpenPageAction,
    activeVoteDefinitionsInResidentCityFilterAction,
    activeVoteDefinitionsInResidentCityRefreshAction,
    activeVoteDefinitionsInResidentCityOpenPageAction,
    activeVoteDefinitionsInResidentCountyFilterAction,
    activeVoteDefinitionsInResidentCountyRefreshAction,
    activeVoteDefinitionsInResidentCountyOpenPageAction,
    activeVoteDefinitionsInResidentDistrictFilterAction,
    activeVoteDefinitionsInResidentDistrictRefreshAction,
    activeVoteDefinitionsInResidentDistrictOpenPageAction,
    ownedVoteDefinitionsOpenAddSelectorAction,
    ownedVoteDefinitionsBulkRemoveAction,
    ownedVoteDefinitionsFilterAction,
    ownedVoteDefinitionsRefreshAction,
    ownedVoteDefinitionsRemoveAction,
    ownedVoteDefinitionsOpenPageAction,
    activeVoteDefinitionsGlobalVoteRatingAction,
    activeVoteDefinitionsInActivityCitiesVoteRatingAction,
    activeVoteDefinitionsInActivityCountiesVoteRatingAction,
    activeVoteDefinitionsInActivityDistrictsVoteRatingAction,
    activeVoteDefinitionsInResidentCityVoteRatingAction,
    activeVoteDefinitionsInResidentCountyVoteRatingAction,
    activeVoteDefinitionsInResidentDistrictVoteRatingAction,
    ownedVoteDefinitionsVoteRatingAction,
    activeVoteDefinitionsGlobalVoteSelectAnswerAction,
    activeVoteDefinitionsInActivityCitiesVoteSelectAnswerAction,
    activeVoteDefinitionsInActivityCountiesVoteSelectAnswerAction,
    activeVoteDefinitionsInActivityDistrictsVoteSelectAnswerAction,
    activeVoteDefinitionsInResidentCityVoteSelectAnswerAction,
    activeVoteDefinitionsInResidentCountyVoteSelectAnswerAction,
    activeVoteDefinitionsInResidentDistrictVoteSelectAnswerAction,
    ownedVoteDefinitionsVoteSelectAnswerAction,
    activeVoteDefinitionsGlobalVoteYesNoAbstainAction,
    activeVoteDefinitionsInActivityCitiesVoteYesNoAbstainAction,
    activeVoteDefinitionsInActivityCountiesVoteYesNoAbstainAction,
    activeVoteDefinitionsInActivityDistrictsVoteYesNoAbstainAction,
    activeVoteDefinitionsInResidentCityVoteYesNoAbstainAction,
    activeVoteDefinitionsInResidentCountyVoteYesNoAbstainAction,
    activeVoteDefinitionsInResidentDistrictVoteYesNoAbstainAction,
    ownedVoteDefinitionsVoteYesNoAbstainAction,
    activeVoteDefinitionsGlobalVoteYesNoAction,
    activeVoteDefinitionsInActivityCitiesVoteYesNoAction,
    activeVoteDefinitionsInActivityCountiesVoteYesNoAction,
    activeVoteDefinitionsInActivityDistrictsVoteYesNoAction,
    activeVoteDefinitionsInResidentCityVoteYesNoAction,
    activeVoteDefinitionsInResidentCountyVoteYesNoAction,
    activeVoteDefinitionsInResidentDistrictVoteYesNoAction,
    ownedVoteDefinitionsVoteYesNoAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceUserVoteDefinitionUserVoteDefinition_View_EditViewModel = {
    actions,
    isLoading,
    setIsLoading,
    refreshCounter,
    editMode,
    setEditMode,
    refresh,
    data,
    validation,
    setValidation,
    storeDiff,
    submit,
    isFormUpdateable,
    isFormDeleteable,
  };

  // Effect section
  useEffect(() => {
    (async () => {
      const res = await getSingletonPayload();
      if (res?.__signedIdentifier) {
        singletonHost.current = res;
      } else {
        navigate('*');
        return;
      }
      await actions.refreshAction!(getPageQueryCustomizer());
    })();
  }, []);

  return (
    <ServiceUserVoteDefinitionUserVoteDefinition_View_EditViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_mNnPsF5QEe6vsex_cZNQbQ)/AccessViewPageDefinition"
          data-page-name="service::User::userVoteDefinitions::AccessViewPage"
        />
        <PageContainerTransition>
          <ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageContainer
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
        </PageContainerTransition>
      </Suspense>
    </ServiceUserVoteDefinitionUserVoteDefinition_View_EditViewModelContext.Provider>
  );
}
