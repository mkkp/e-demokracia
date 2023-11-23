//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: 'src/pages/'+#pagePath(#self)+'/index.tsx'
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs

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
import { PageContainerTransition } from '~/theme/animations';
import { routeToServiceUserVoteDefinitionActiveVoteDefinitionsGlobalRelationViewPage } from '~/routes';
import { routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCitiesRelationViewPage } from '~/routes';
import { routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesRelationViewPage } from '~/routes';
import { routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityDistrictsRelationViewPage } from '~/routes';
import { routeToServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCityRelationViewPage } from '~/routes';
import { routeToServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCountyRelationViewPage } from '~/routes';
import { routeToServiceUserVoteDefinitionActiveVoteDefinitionsInResidentDistrictRelationViewPage } from '~/routes';
import { routeToServiceUserVoteDefinitionOwnedVoteDefinitionsRelationViewPage } from '~/routes';
import { useServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/TabBar/Selectanswervote/VoteSelectAnswer/Relation/Table/CallSelector';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteRating/Input/Form';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteYesNo/Input/Form';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteYesNoAbstain/Input/Form';
import type { ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageActions } from '~/containers/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageContainer';
import type {
  ServiceUserVoteDefinition,
  ServiceUserVoteDefinitionQueryCustomizer,
  ServiceUserVoteDefinitionStored,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
} from '~/services/data-api';
import { userServiceForUserVoteDefinitionsImpl } from '~/services/data-axios';
export type ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageActionsExtended =
  ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageActions & {};

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

const ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageContainer = lazy(
  () =>
    import(
      '~/containers/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageContainer'
    ),
);

// XMIID: User/(esm/_mNnPsF5QEe6vsex_cZNQbQ)/AccessViewPageDefinition
// Name: service::User::userVoteDefinitions::Access::View::Page
// Access: true
// Single Access: true
export default function ServiceUserUserVoteDefinitionsAccessViewPage() {
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

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
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
  const activeVoteDefinitionsInResidentCityVoteYesNoAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } = await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(
      target,
    );
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
  const activeVoteDefinitionsInResidentCityVoteRatingAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } = await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(
      target,
    );
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  const activeVoteDefinitionsInActivityCountiesOpenPageAction = async (target?: ServiceVoteDefinitionStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(
      routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesRelationViewPage(
        (target || data).__signedIdentifier,
      ),
    );
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
  const activeVoteDefinitionsInActivityCountiesVoteYesNoAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } = await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(
      target,
    );
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
  const activeVoteDefinitionsInActivityCountiesVoteRatingAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } = await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(
      target,
    );
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  const ownedVoteDefinitionsOpenPageAction = async (target?: ServiceVoteDefinitionStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceUserVoteDefinitionOwnedVoteDefinitionsRelationViewPage((target || data).__signedIdentifier));
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
  const ownedVoteDefinitionsVoteYesNoAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } = await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(
      target,
    );
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
  const ownedVoteDefinitionsVoteRatingAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } = await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(
      target,
    );
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  const activeVoteDefinitionsGlobalOpenPageAction = async (target?: ServiceVoteDefinitionStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(
      routeToServiceUserVoteDefinitionActiveVoteDefinitionsGlobalRelationViewPage((target || data).__signedIdentifier),
    );
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
  const activeVoteDefinitionsGlobalVoteYesNoAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } = await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(
      target,
    );
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeVoteDefinitionsGlobalVoteYesNoAbstainAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeVoteDefinitionsGlobalVoteRatingAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } = await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(
      target,
    );
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
  const activeVoteDefinitionsInActivityDistrictsOpenPageAction = async (target?: ServiceVoteDefinitionStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(
      routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityDistrictsRelationViewPage(
        (target || data).__signedIdentifier,
      ),
    );
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
  const activeVoteDefinitionsInActivityDistrictsVoteYesNoAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } = await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(
      target,
    );
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
  const activeVoteDefinitionsInActivityDistrictsVoteRatingAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } = await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(
      target,
    );
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  const activeVoteDefinitionsInResidentDistrictOpenPageAction = async (target?: ServiceVoteDefinitionStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(
      routeToServiceUserVoteDefinitionActiveVoteDefinitionsInResidentDistrictRelationViewPage(
        (target || data).__signedIdentifier,
      ),
    );
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
  const activeVoteDefinitionsInResidentDistrictVoteYesNoAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } = await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(
      target,
    );
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
  const activeVoteDefinitionsInResidentDistrictVoteRatingAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } = await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(
      target,
    );
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  const activeVoteDefinitionsInActivityCitiesOpenPageAction = async (target?: ServiceVoteDefinitionStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(
      routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCitiesRelationViewPage(
        (target || data).__signedIdentifier,
      ),
    );
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
  const activeVoteDefinitionsInActivityCitiesVoteYesNoAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } = await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(
      target,
    );
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
  const activeVoteDefinitionsInActivityCitiesVoteRatingAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } = await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(
      target,
    );
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  const activeVoteDefinitionsInResidentCountyOpenPageAction = async (target?: ServiceVoteDefinitionStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(
      routeToServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCountyRelationViewPage(
        (target || data).__signedIdentifier,
      ),
    );
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
  const activeVoteDefinitionsInResidentCountyVoteYesNoAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } = await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(
      target,
    );
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
  const activeVoteDefinitionsInResidentCountyVoteRatingAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } = await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(
      target,
    );
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  const getSingletonPayload = async (): Promise<JudoIdentifiable<any>> => {
    return await userServiceForUserVoteDefinitionsImpl.refreshForUserVoteDefinitions({
      _mask: '{}',
    });
  };

  const actions: ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageActions = {
    backAction,
    refreshAction,
    activeVoteDefinitionsInResidentCityOpenPageAction,
    activeVoteDefinitionsInResidentCityFilterAction,
    activeVoteDefinitionsInResidentCityRefreshAction,
    activeVoteDefinitionsInResidentCityVoteYesNoAction,
    activeVoteDefinitionsInResidentCityVoteYesNoAbstainAction,
    activeVoteDefinitionsInResidentCityVoteRatingAction,
    activeVoteDefinitionsInResidentCityVoteSelectAnswerAction,
    activeVoteDefinitionsInActivityCountiesOpenPageAction,
    activeVoteDefinitionsInActivityCountiesFilterAction,
    activeVoteDefinitionsInActivityCountiesRefreshAction,
    activeVoteDefinitionsInActivityCountiesVoteYesNoAction,
    activeVoteDefinitionsInActivityCountiesVoteYesNoAbstainAction,
    activeVoteDefinitionsInActivityCountiesVoteRatingAction,
    activeVoteDefinitionsInActivityCountiesVoteSelectAnswerAction,
    ownedVoteDefinitionsOpenPageAction,
    ownedVoteDefinitionsFilterAction,
    ownedVoteDefinitionsRefreshAction,
    ownedVoteDefinitionsVoteYesNoAction,
    ownedVoteDefinitionsVoteYesNoAbstainAction,
    ownedVoteDefinitionsVoteRatingAction,
    ownedVoteDefinitionsVoteSelectAnswerAction,
    activeVoteDefinitionsGlobalOpenPageAction,
    activeVoteDefinitionsGlobalFilterAction,
    activeVoteDefinitionsGlobalRefreshAction,
    activeVoteDefinitionsGlobalVoteYesNoAction,
    activeVoteDefinitionsGlobalVoteYesNoAbstainAction,
    activeVoteDefinitionsGlobalVoteRatingAction,
    activeVoteDefinitionsGlobalVoteSelectAnswerAction,
    activeVoteDefinitionsInActivityDistrictsOpenPageAction,
    activeVoteDefinitionsInActivityDistrictsFilterAction,
    activeVoteDefinitionsInActivityDistrictsRefreshAction,
    activeVoteDefinitionsInActivityDistrictsVoteYesNoAction,
    activeVoteDefinitionsInActivityDistrictsVoteYesNoAbstainAction,
    activeVoteDefinitionsInActivityDistrictsVoteRatingAction,
    activeVoteDefinitionsInActivityDistrictsVoteSelectAnswerAction,
    activeVoteDefinitionsInResidentDistrictOpenPageAction,
    activeVoteDefinitionsInResidentDistrictFilterAction,
    activeVoteDefinitionsInResidentDistrictRefreshAction,
    activeVoteDefinitionsInResidentDistrictVoteYesNoAction,
    activeVoteDefinitionsInResidentDistrictVoteYesNoAbstainAction,
    activeVoteDefinitionsInResidentDistrictVoteRatingAction,
    activeVoteDefinitionsInResidentDistrictVoteSelectAnswerAction,
    activeVoteDefinitionsInActivityCitiesOpenPageAction,
    activeVoteDefinitionsInActivityCitiesFilterAction,
    activeVoteDefinitionsInActivityCitiesRefreshAction,
    activeVoteDefinitionsInActivityCitiesVoteYesNoAction,
    activeVoteDefinitionsInActivityCitiesVoteYesNoAbstainAction,
    activeVoteDefinitionsInActivityCitiesVoteRatingAction,
    activeVoteDefinitionsInActivityCitiesVoteSelectAnswerAction,
    activeVoteDefinitionsInResidentCountyOpenPageAction,
    activeVoteDefinitionsInResidentCountyFilterAction,
    activeVoteDefinitionsInResidentCountyRefreshAction,
    activeVoteDefinitionsInResidentCountyVoteYesNoAction,
    activeVoteDefinitionsInResidentCountyVoteYesNoAbstainAction,
    activeVoteDefinitionsInResidentCountyVoteRatingAction,
    activeVoteDefinitionsInResidentCountyVoteSelectAnswerAction,
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
      data-page-name="service::User::userVoteDefinitions::Access::View::Page"
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
          />
        </PageContainerTransition>
      </Suspense>
    </div>
  );
}
