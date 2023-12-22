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
import { Suspense, lazy, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { useConfirmDialog, useFilterDialog } from '~/components/dialog';
import type { ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageActions } from '~/containers/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageContainer';
import { useServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveGlobalVoteDefinitionsGroupActiveVoteDefinitionsGlobalTableAddSelectorPage } from '~/dialogs/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/Root/TabBar/ActiveGlobalVoteDefinitionsGroup/ActiveVoteDefinitionsGlobal/TableAddSelectorPage';
import { useServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCitiesTableAddSelectorPage } from '~/dialogs/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/Root/TabBar/ActiveVoteDefinitionsByOwnerActivityArea/TabBar/ActiveVoteDefinitionsInActivityCityGroup/ActiveVoteDefinitionsInActivityCities/TableAddSelectorPage';
import { useServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesTableAddSelectorPage } from '~/dialogs/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/Root/TabBar/ActiveVoteDefinitionsByOwnerActivityArea/TabBar/ActiveVoteDefinitionsInActivityCountiesGroup/ActiveVoteDefinitionsInActivityCounties/TableAddSelectorPage';
import { useServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityDistrictGroupActiveVoteDefinitionsInActivityDistrictsTableAddSelectorPage } from '~/dialogs/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/Root/TabBar/ActiveVoteDefinitionsByOwnerActivityArea/TabBar/ActiveVoteDefinitionsInActivityDistrictGroup/ActiveVoteDefinitionsInActivityDistricts/TableAddSelectorPage';
import { useServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerResidentAreaGroupTabBarActiveDebatesInResidentCityGroupActiveVoteDefinitionsInResidentCityTableAddSelectorPage } from '~/dialogs/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/Root/TabBar/ActiveVoteDefinitionsByOwnerResidentAreaGroup/TabBar/ActiveDebatesInResidentCityGroup/ActiveVoteDefinitionsInResidentCity/TableAddSelectorPage';
import { useServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerResidentAreaGroupTabBarActiveDebatesInResidentCountyGroupActiveVoteDefinitionsInResidentCountyTableAddSelectorPage } from '~/dialogs/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/Root/TabBar/ActiveVoteDefinitionsByOwnerResidentAreaGroup/TabBar/ActiveDebatesInResidentCountyGroup/ActiveVoteDefinitionsInResidentCounty/TableAddSelectorPage';
import { useServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerResidentAreaGroupTabBarActiveDebatesInResidentDistrictGroupActiveVoteDefinitionsInResidentDistrictTableAddSelectorPage } from '~/dialogs/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/Root/TabBar/ActiveVoteDefinitionsByOwnerResidentAreaGroup/TabBar/ActiveDebatesInResidentDistrictGroup/ActiveVoteDefinitionsInResidentDistrict/TableAddSelectorPage';
import { useServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsTableAddSelectorPage } from '~/dialogs/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/Root/TabBar/OwnedVoteDefinitionsGroup/OwnedVoteDefinitions/TableAddSelectorPage';
import { useServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/TabBar/Selectanswervote/VoteSelectAnswer/Relation/Table/CallSelector';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteRating/Input/Form';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteYesNo/Input/Form';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteYesNoAbstain/Input/Form';
import { useCRUDDialog, useSnacks } from '~/hooks';
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
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForUserVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForUserVoteDefinitionsImpl';
import { PageContainerTransition } from '~/theme/animations';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
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
  'ServiceUserVoteDefinitionUserVoteDefinition_View_EditActionsHook';
export type ServiceUserVoteDefinitionUserVoteDefinition_View_EditActionsHook = (
  data: ServiceUserVoteDefinitionStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceUserVoteDefinition, value: any) => void,
) => ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageActionsExtended;

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

  const pageQueryCustomizer: ServiceUserVoteDefinitionQueryCustomizer = {
    _mask: '{}',
  };

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceUserVoteDefinitionUserVoteDefinition_View_EditActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_USER_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions: ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageActionsExtended | undefined =
    customActionsHook?.(data, editMode, storeDiff);

  // Dialog hooks
  const openServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveGlobalVoteDefinitionsGroupActiveVoteDefinitionsGlobalTableAddSelectorPage =
    useServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveGlobalVoteDefinitionsGroupActiveVoteDefinitionsGlobalTableAddSelectorPage();
  const openServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCitiesTableAddSelectorPage =
    useServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCitiesTableAddSelectorPage();
  const openServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesTableAddSelectorPage =
    useServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesTableAddSelectorPage();
  const openServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityDistrictGroupActiveVoteDefinitionsInActivityDistrictsTableAddSelectorPage =
    useServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityDistrictGroupActiveVoteDefinitionsInActivityDistrictsTableAddSelectorPage();
  const openServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerResidentAreaGroupTabBarActiveDebatesInResidentCityGroupActiveVoteDefinitionsInResidentCityTableAddSelectorPage =
    useServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerResidentAreaGroupTabBarActiveDebatesInResidentCityGroupActiveVoteDefinitionsInResidentCityTableAddSelectorPage();
  const openServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerResidentAreaGroupTabBarActiveDebatesInResidentCountyGroupActiveVoteDefinitionsInResidentCountyTableAddSelectorPage =
    useServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerResidentAreaGroupTabBarActiveDebatesInResidentCountyGroupActiveVoteDefinitionsInResidentCountyTableAddSelectorPage();
  const openServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerResidentAreaGroupTabBarActiveDebatesInResidentDistrictGroupActiveVoteDefinitionsInResidentDistrictTableAddSelectorPage =
    useServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerResidentAreaGroupTabBarActiveDebatesInResidentDistrictGroupActiveVoteDefinitionsInResidentDistrictTableAddSelectorPage();
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

  // Calculated section
  const title: string = t('service.UserVoteDefinition.UserVoteDefinition_View_Edit', {
    defaultValue: 'UserVoteDefinition View / Edit',
  });

  // Private actions
  const submit = async () => {};

  // Action section
  const backAction = async () => {
    navigateBack();
  };
  const refreshAction = async (
    queryCustomizer: ServiceUserVoteDefinitionQueryCustomizer,
  ): Promise<ServiceUserVoteDefinitionStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await userServiceForUserVoteDefinitionsImpl.refresh(singletonHost.current, pageQueryCustomizer);
      setData(result);
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
      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const activeVoteDefinitionsGlobalOpenAddSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveGlobalVoteDefinitionsGroupActiveVoteDefinitionsGlobalTableAddSelectorPage(
        data,
        data.activeVoteDefinitionsGlobal ?? [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        try {
          setIsLoading(true);
          await userServiceForUserVoteDefinitionsImpl.addActiveVoteDefinitionsGlobal(data, returnedData);
          if (!editMode) {
            await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
          }
        } catch (e) {
          console.error(e);
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  const activeVoteDefinitionsGlobalBulkRemoveAction = async (
    selectedRows: ServiceVoteDefinitionStored[],
  ): Promise<DialogResult<Array<ServiceVoteDefinitionStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceVoteDefinitionStored>({
        dialogTitle: t(
          'service.UserVoteDefinition.UserVoteDefinition_View_Edit.root.tabBar.ActiveGlobalVoteDefinitionsGroup.activeVoteDefinitionsGlobal.BulkRemove',
          { defaultValue: 'Remove' },
        ),
        itemTitleFn: (item) => item.title!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.activeVoteDefinitionsGlobalRemoveAction) {
              await actions.activeVoteDefinitionsGlobalRemoveAction!(item, true);
            }
            successHandler();
          } catch (error) {
            errorHandler(error);
          }
        },
        onClose: async (needsRefresh) => {
          if (needsRefresh) {
            if (actions.refreshAction) {
              await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  ): Promise<ServiceVoteDefinitionStored[]> => {
    return userServiceForUserVoteDefinitionsImpl.listActiveVoteDefinitionsGlobal(
      singletonHost.current,
      queryCustomizer,
    );
  };
  const activeVoteDefinitionsGlobalRemoveAction = async (
    target?: ServiceVoteDefinitionStored,
    silentMode?: boolean,
  ) => {
    if (target) {
      try {
        if (!silentMode) {
          setIsLoading(true);
        }
        await userServiceForUserVoteDefinitionsImpl.removeActiveVoteDefinitionsGlobal(data, [target!]);
        if (!silentMode) {
          if (!editMode) {
            await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  const activeVoteDefinitionsGlobalOpenPageAction = async (target?: ServiceVoteDefinitionStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(
      routeToServiceUserVoteDefinitionActiveVoteDefinitionsGlobalRelationViewPage((target || data).__signedIdentifier),
    );
  };
  const activeVoteDefinitionsInActivityCitiesOpenAddSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCitiesTableAddSelectorPage(
        data,
        data.activeVoteDefinitionsInActivityCities ?? [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        try {
          setIsLoading(true);
          await userServiceForUserVoteDefinitionsImpl.addActiveVoteDefinitionsInActivityCities(data, returnedData);
          if (!editMode) {
            await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
          }
        } catch (e) {
          console.error(e);
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  const activeVoteDefinitionsInActivityCitiesBulkRemoveAction = async (
    selectedRows: ServiceVoteDefinitionStored[],
  ): Promise<DialogResult<Array<ServiceVoteDefinitionStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceVoteDefinitionStored>({
        dialogTitle: t(
          'service.UserVoteDefinition.UserVoteDefinition_View_Edit.root.tabBar.ActiveVoteDefinitionsByOwnerActivityArea.tabBar.ActiveVoteDefinitionsInActivityCityGroup.activeVoteDefinitionsInActivityCities.BulkRemove',
          { defaultValue: 'Remove' },
        ),
        itemTitleFn: (item) => item.countyRepresentation!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.activeVoteDefinitionsInActivityCitiesRemoveAction) {
              await actions.activeVoteDefinitionsInActivityCitiesRemoveAction!(item, true);
            }
            successHandler();
          } catch (error) {
            errorHandler(error);
          }
        },
        onClose: async (needsRefresh) => {
          if (needsRefresh) {
            if (actions.refreshAction) {
              await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  ): Promise<ServiceVoteDefinitionStored[]> => {
    return userServiceForUserVoteDefinitionsImpl.listActiveVoteDefinitionsInActivityCities(
      singletonHost.current,
      queryCustomizer,
    );
  };
  const activeVoteDefinitionsInActivityCitiesRemoveAction = async (
    target?: ServiceVoteDefinitionStored,
    silentMode?: boolean,
  ) => {
    if (target) {
      try {
        if (!silentMode) {
          setIsLoading(true);
        }
        await userServiceForUserVoteDefinitionsImpl.removeActiveVoteDefinitionsInActivityCities(data, [target!]);
        if (!silentMode) {
          if (!editMode) {
            await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  const activeVoteDefinitionsInActivityCitiesOpenPageAction = async (target?: ServiceVoteDefinitionStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(
      routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCitiesRelationViewPage(
        (target || data).__signedIdentifier,
      ),
    );
  };
  const activeVoteDefinitionsInActivityCountiesOpenAddSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesTableAddSelectorPage(
        data,
        data.activeVoteDefinitionsInActivityCounties ?? [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        try {
          setIsLoading(true);
          await userServiceForUserVoteDefinitionsImpl.addActiveVoteDefinitionsInActivityCounties(data, returnedData);
          if (!editMode) {
            await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
          }
        } catch (e) {
          console.error(e);
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  const activeVoteDefinitionsInActivityCountiesBulkRemoveAction = async (
    selectedRows: ServiceVoteDefinitionStored[],
  ): Promise<DialogResult<Array<ServiceVoteDefinitionStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceVoteDefinitionStored>({
        dialogTitle: t(
          'service.UserVoteDefinition.UserVoteDefinition_View_Edit.root.tabBar.ActiveVoteDefinitionsByOwnerActivityArea.tabBar.ActiveVoteDefinitionsInActivityCountiesGroup.activeVoteDefinitionsInActivityCounties.BulkRemove',
          { defaultValue: 'Remove' },
        ),
        itemTitleFn: (item) => item.countyRepresentation!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.activeVoteDefinitionsInActivityCountiesRemoveAction) {
              await actions.activeVoteDefinitionsInActivityCountiesRemoveAction!(item, true);
            }
            successHandler();
          } catch (error) {
            errorHandler(error);
          }
        },
        onClose: async (needsRefresh) => {
          if (needsRefresh) {
            if (actions.refreshAction) {
              await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  ): Promise<ServiceVoteDefinitionStored[]> => {
    return userServiceForUserVoteDefinitionsImpl.listActiveVoteDefinitionsInActivityCounties(
      singletonHost.current,
      queryCustomizer,
    );
  };
  const activeVoteDefinitionsInActivityCountiesRemoveAction = async (
    target?: ServiceVoteDefinitionStored,
    silentMode?: boolean,
  ) => {
    if (target) {
      try {
        if (!silentMode) {
          setIsLoading(true);
        }
        await userServiceForUserVoteDefinitionsImpl.removeActiveVoteDefinitionsInActivityCounties(data, [target!]);
        if (!silentMode) {
          if (!editMode) {
            await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  const activeVoteDefinitionsInActivityCountiesOpenPageAction = async (target?: ServiceVoteDefinitionStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(
      routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesRelationViewPage(
        (target || data).__signedIdentifier,
      ),
    );
  };
  const activeVoteDefinitionsInActivityDistrictsOpenAddSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityDistrictGroupActiveVoteDefinitionsInActivityDistrictsTableAddSelectorPage(
        data,
        data.activeVoteDefinitionsInActivityDistricts ?? [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        try {
          setIsLoading(true);
          await userServiceForUserVoteDefinitionsImpl.addActiveVoteDefinitionsInActivityDistricts(data, returnedData);
          if (!editMode) {
            await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
          }
        } catch (e) {
          console.error(e);
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  const activeVoteDefinitionsInActivityDistrictsBulkRemoveAction = async (
    selectedRows: ServiceVoteDefinitionStored[],
  ): Promise<DialogResult<Array<ServiceVoteDefinitionStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceVoteDefinitionStored>({
        dialogTitle: t(
          'service.UserVoteDefinition.UserVoteDefinition_View_Edit.root.tabBar.ActiveVoteDefinitionsByOwnerActivityArea.tabBar.ActiveVoteDefinitionsInActivityDistrictGroup.activeVoteDefinitionsInActivityDistricts.BulkRemove',
          { defaultValue: 'Remove' },
        ),
        itemTitleFn: (item) => item.countyRepresentation!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.activeVoteDefinitionsInActivityDistrictsRemoveAction) {
              await actions.activeVoteDefinitionsInActivityDistrictsRemoveAction!(item, true);
            }
            successHandler();
          } catch (error) {
            errorHandler(error);
          }
        },
        onClose: async (needsRefresh) => {
          if (needsRefresh) {
            if (actions.refreshAction) {
              await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  ): Promise<ServiceVoteDefinitionStored[]> => {
    return userServiceForUserVoteDefinitionsImpl.listActiveVoteDefinitionsInActivityDistricts(
      singletonHost.current,
      queryCustomizer,
    );
  };
  const activeVoteDefinitionsInActivityDistrictsRemoveAction = async (
    target?: ServiceVoteDefinitionStored,
    silentMode?: boolean,
  ) => {
    if (target) {
      try {
        if (!silentMode) {
          setIsLoading(true);
        }
        await userServiceForUserVoteDefinitionsImpl.removeActiveVoteDefinitionsInActivityDistricts(data, [target!]);
        if (!silentMode) {
          if (!editMode) {
            await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  const activeVoteDefinitionsInActivityDistrictsOpenPageAction = async (target?: ServiceVoteDefinitionStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(
      routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityDistrictsRelationViewPage(
        (target || data).__signedIdentifier,
      ),
    );
  };
  const activeVoteDefinitionsInResidentCityOpenAddSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerResidentAreaGroupTabBarActiveDebatesInResidentCityGroupActiveVoteDefinitionsInResidentCityTableAddSelectorPage(
        data,
        data.activeVoteDefinitionsInResidentCity ?? [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        try {
          setIsLoading(true);
          await userServiceForUserVoteDefinitionsImpl.addActiveVoteDefinitionsInResidentCity(data, returnedData);
          if (!editMode) {
            await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
          }
        } catch (e) {
          console.error(e);
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  const activeVoteDefinitionsInResidentCityBulkRemoveAction = async (
    selectedRows: ServiceVoteDefinitionStored[],
  ): Promise<DialogResult<Array<ServiceVoteDefinitionStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceVoteDefinitionStored>({
        dialogTitle: t(
          'service.UserVoteDefinition.UserVoteDefinition_View_Edit.root.tabBar.ActiveVoteDefinitionsByOwnerResidentAreaGroup.tabBar.ActiveDebatesInResidentCityGroup.activeVoteDefinitionsInResidentCity.BulkRemove',
          { defaultValue: 'Remove' },
        ),
        itemTitleFn: (item) => item.countyRepresentation!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.activeVoteDefinitionsInResidentCityRemoveAction) {
              await actions.activeVoteDefinitionsInResidentCityRemoveAction!(item, true);
            }
            successHandler();
          } catch (error) {
            errorHandler(error);
          }
        },
        onClose: async (needsRefresh) => {
          if (needsRefresh) {
            if (actions.refreshAction) {
              await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  ): Promise<ServiceVoteDefinitionStored[]> => {
    return userServiceForUserVoteDefinitionsImpl.listActiveVoteDefinitionsInResidentCity(
      singletonHost.current,
      queryCustomizer,
    );
  };
  const activeVoteDefinitionsInResidentCityRemoveAction = async (
    target?: ServiceVoteDefinitionStored,
    silentMode?: boolean,
  ) => {
    if (target) {
      try {
        if (!silentMode) {
          setIsLoading(true);
        }
        await userServiceForUserVoteDefinitionsImpl.removeActiveVoteDefinitionsInResidentCity(data, [target!]);
        if (!silentMode) {
          if (!editMode) {
            await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  const activeVoteDefinitionsInResidentCityOpenPageAction = async (target?: ServiceVoteDefinitionStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(
      routeToServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCityRelationViewPage(
        (target || data).__signedIdentifier,
      ),
    );
  };
  const activeVoteDefinitionsInResidentCountyOpenAddSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerResidentAreaGroupTabBarActiveDebatesInResidentCountyGroupActiveVoteDefinitionsInResidentCountyTableAddSelectorPage(
        data,
        data.activeVoteDefinitionsInResidentCounty ?? [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        try {
          setIsLoading(true);
          await userServiceForUserVoteDefinitionsImpl.addActiveVoteDefinitionsInResidentCounty(data, returnedData);
          if (!editMode) {
            await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
          }
        } catch (e) {
          console.error(e);
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  const activeVoteDefinitionsInResidentCountyBulkRemoveAction = async (
    selectedRows: ServiceVoteDefinitionStored[],
  ): Promise<DialogResult<Array<ServiceVoteDefinitionStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceVoteDefinitionStored>({
        dialogTitle: t(
          'service.UserVoteDefinition.UserVoteDefinition_View_Edit.root.tabBar.ActiveVoteDefinitionsByOwnerResidentAreaGroup.tabBar.ActiveDebatesInResidentCountyGroup.activeVoteDefinitionsInResidentCounty.BulkRemove',
          { defaultValue: 'Remove' },
        ),
        itemTitleFn: (item) => item.countyRepresentation!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.activeVoteDefinitionsInResidentCountyRemoveAction) {
              await actions.activeVoteDefinitionsInResidentCountyRemoveAction!(item, true);
            }
            successHandler();
          } catch (error) {
            errorHandler(error);
          }
        },
        onClose: async (needsRefresh) => {
          if (needsRefresh) {
            if (actions.refreshAction) {
              await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  ): Promise<ServiceVoteDefinitionStored[]> => {
    return userServiceForUserVoteDefinitionsImpl.listActiveVoteDefinitionsInResidentCounty(
      singletonHost.current,
      queryCustomizer,
    );
  };
  const activeVoteDefinitionsInResidentCountyRemoveAction = async (
    target?: ServiceVoteDefinitionStored,
    silentMode?: boolean,
  ) => {
    if (target) {
      try {
        if (!silentMode) {
          setIsLoading(true);
        }
        await userServiceForUserVoteDefinitionsImpl.removeActiveVoteDefinitionsInResidentCounty(data, [target!]);
        if (!silentMode) {
          if (!editMode) {
            await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  const activeVoteDefinitionsInResidentCountyOpenPageAction = async (target?: ServiceVoteDefinitionStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(
      routeToServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCountyRelationViewPage(
        (target || data).__signedIdentifier,
      ),
    );
  };
  const activeVoteDefinitionsInResidentDistrictOpenAddSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarActiveVoteDefinitionsByOwnerResidentAreaGroupTabBarActiveDebatesInResidentDistrictGroupActiveVoteDefinitionsInResidentDistrictTableAddSelectorPage(
        data,
        data.activeVoteDefinitionsInResidentDistrict ?? [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        try {
          setIsLoading(true);
          await userServiceForUserVoteDefinitionsImpl.addActiveVoteDefinitionsInResidentDistrict(data, returnedData);
          if (!editMode) {
            await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
          }
        } catch (e) {
          console.error(e);
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  const activeVoteDefinitionsInResidentDistrictBulkRemoveAction = async (
    selectedRows: ServiceVoteDefinitionStored[],
  ): Promise<DialogResult<Array<ServiceVoteDefinitionStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceVoteDefinitionStored>({
        dialogTitle: t(
          'service.UserVoteDefinition.UserVoteDefinition_View_Edit.root.tabBar.ActiveVoteDefinitionsByOwnerResidentAreaGroup.tabBar.ActiveDebatesInResidentDistrictGroup.activeVoteDefinitionsInResidentDistrict.BulkRemove',
          { defaultValue: 'Remove' },
        ),
        itemTitleFn: (item) => item.countyRepresentation!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.activeVoteDefinitionsInResidentDistrictRemoveAction) {
              await actions.activeVoteDefinitionsInResidentDistrictRemoveAction!(item, true);
            }
            successHandler();
          } catch (error) {
            errorHandler(error);
          }
        },
        onClose: async (needsRefresh) => {
          if (needsRefresh) {
            if (actions.refreshAction) {
              await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  ): Promise<ServiceVoteDefinitionStored[]> => {
    return userServiceForUserVoteDefinitionsImpl.listActiveVoteDefinitionsInResidentDistrict(
      singletonHost.current,
      queryCustomizer,
    );
  };
  const activeVoteDefinitionsInResidentDistrictRemoveAction = async (
    target?: ServiceVoteDefinitionStored,
    silentMode?: boolean,
  ) => {
    if (target) {
      try {
        if (!silentMode) {
          setIsLoading(true);
        }
        await userServiceForUserVoteDefinitionsImpl.removeActiveVoteDefinitionsInResidentDistrict(data, [target!]);
        if (!silentMode) {
          if (!editMode) {
            await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  const activeVoteDefinitionsInResidentDistrictOpenPageAction = async (target?: ServiceVoteDefinitionStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(
      routeToServiceUserVoteDefinitionActiveVoteDefinitionsInResidentDistrictRelationViewPage(
        (target || data).__signedIdentifier,
      ),
    );
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
            await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
        dialogTitle: t(
          'service.UserVoteDefinition.UserVoteDefinition_View_Edit.root.tabBar.OwnedVoteDefinitionsGroup.ownedVoteDefinitions.BulkRemove',
          { defaultValue: 'Remove' },
        ),
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
              await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  ): Promise<ServiceVoteDefinitionStored[]> => {
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
            await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  const ownedVoteDefinitionsOpenPageAction = async (target?: ServiceVoteDefinitionStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceUserVoteDefinitionOwnedVoteDefinitionsRelationViewPage((target || data).__signedIdentifier));
  };
  const activeVoteDefinitionsGlobalVoteRatingAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeVoteDefinitionsInActivityCitiesVoteRatingAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeVoteDefinitionsInActivityCountiesVoteRatingAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeVoteDefinitionsInActivityDistrictsVoteRatingAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeVoteDefinitionsInResidentCityVoteRatingAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeVoteDefinitionsInResidentCountyVoteRatingAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeVoteDefinitionsInResidentDistrictVoteRatingAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const ownedVoteDefinitionsVoteRatingAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeVoteDefinitionsGlobalVoteSelectAnswerAction = async () => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector(
        data,
      );
    if (result === 'submit') {
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
        await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
        await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
        await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
        await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
        await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
        await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
        await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
      }
    }
  };
  const activeVoteDefinitionsGlobalVoteYesNoAbstainAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeVoteDefinitionsInActivityCitiesVoteYesNoAbstainAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeVoteDefinitionsInActivityCountiesVoteYesNoAbstainAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeVoteDefinitionsInActivityDistrictsVoteYesNoAbstainAction = async (
    target: ServiceVoteDefinitionStored,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeVoteDefinitionsInResidentCityVoteYesNoAbstainAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeVoteDefinitionsInResidentCountyVoteYesNoAbstainAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeVoteDefinitionsInResidentDistrictVoteYesNoAbstainAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const ownedVoteDefinitionsVoteYesNoAbstainAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeVoteDefinitionsGlobalVoteYesNoAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeVoteDefinitionsInActivityCitiesVoteYesNoAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeVoteDefinitionsInActivityCountiesVoteYesNoAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeVoteDefinitionsInActivityDistrictsVoteYesNoAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeVoteDefinitionsInResidentCityVoteYesNoAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeVoteDefinitionsInResidentCountyVoteYesNoAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeVoteDefinitionsInResidentDistrictVoteYesNoAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const ownedVoteDefinitionsVoteYesNoAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const getSingletonPayload = async (): Promise<JudoIdentifiable<any>> => {
    return await userServiceForUserVoteDefinitionsImpl.refreshForUserVoteDefinitions({
      _mask: '{}',
    });
  };

  const actions: ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageActions = {
    backAction,
    refreshAction,
    activeVoteDefinitionsGlobalOpenAddSelectorAction,
    activeVoteDefinitionsGlobalBulkRemoveAction,
    activeVoteDefinitionsGlobalFilterAction,
    activeVoteDefinitionsGlobalRefreshAction,
    activeVoteDefinitionsGlobalRemoveAction,
    activeVoteDefinitionsGlobalOpenPageAction,
    activeVoteDefinitionsInActivityCitiesOpenAddSelectorAction,
    activeVoteDefinitionsInActivityCitiesBulkRemoveAction,
    activeVoteDefinitionsInActivityCitiesFilterAction,
    activeVoteDefinitionsInActivityCitiesRefreshAction,
    activeVoteDefinitionsInActivityCitiesRemoveAction,
    activeVoteDefinitionsInActivityCitiesOpenPageAction,
    activeVoteDefinitionsInActivityCountiesOpenAddSelectorAction,
    activeVoteDefinitionsInActivityCountiesBulkRemoveAction,
    activeVoteDefinitionsInActivityCountiesFilterAction,
    activeVoteDefinitionsInActivityCountiesRefreshAction,
    activeVoteDefinitionsInActivityCountiesRemoveAction,
    activeVoteDefinitionsInActivityCountiesOpenPageAction,
    activeVoteDefinitionsInActivityDistrictsOpenAddSelectorAction,
    activeVoteDefinitionsInActivityDistrictsBulkRemoveAction,
    activeVoteDefinitionsInActivityDistrictsFilterAction,
    activeVoteDefinitionsInActivityDistrictsRefreshAction,
    activeVoteDefinitionsInActivityDistrictsRemoveAction,
    activeVoteDefinitionsInActivityDistrictsOpenPageAction,
    activeVoteDefinitionsInResidentCityOpenAddSelectorAction,
    activeVoteDefinitionsInResidentCityBulkRemoveAction,
    activeVoteDefinitionsInResidentCityFilterAction,
    activeVoteDefinitionsInResidentCityRefreshAction,
    activeVoteDefinitionsInResidentCityRemoveAction,
    activeVoteDefinitionsInResidentCityOpenPageAction,
    activeVoteDefinitionsInResidentCountyOpenAddSelectorAction,
    activeVoteDefinitionsInResidentCountyBulkRemoveAction,
    activeVoteDefinitionsInResidentCountyFilterAction,
    activeVoteDefinitionsInResidentCountyRefreshAction,
    activeVoteDefinitionsInResidentCountyRemoveAction,
    activeVoteDefinitionsInResidentCountyOpenPageAction,
    activeVoteDefinitionsInResidentDistrictOpenAddSelectorAction,
    activeVoteDefinitionsInResidentDistrictBulkRemoveAction,
    activeVoteDefinitionsInResidentDistrictFilterAction,
    activeVoteDefinitionsInResidentDistrictRefreshAction,
    activeVoteDefinitionsInResidentDistrictRemoveAction,
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
      await actions.refreshAction!(pageQueryCustomizer);
    })();
  }, []);

  return (
    <div
      id="User/(esm/_mNnPsF5QEe6vsex_cZNQbQ)/AccessViewPageDefinition"
      data-page-name="service::User::userVoteDefinitions::AccessViewPage"
    >
      <Suspense>
        <PageContainerTransition>
          <ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageContainer
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
        </PageContainerTransition>
      </Suspense>
    </div>
  );
}
