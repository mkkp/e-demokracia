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
import { Suspense, createContext, lazy, useContext, useMemo, useState } from 'react';
import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import { useJudoNavigation } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import type {
  ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorDialogActions,
  ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorDialogProps,
} from '~/containers/Service/UserProfile/UserProfile_View_Edit/Areas/Activity/Activity_cities/ActivityCities/AddSelector/ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceUserProfile,
  ServiceUserProfileStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceUserProfileServiceForActivityCitiesImpl } from '~/services/data-axios/ServiceUserProfileServiceForActivityCitiesImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorDialogActionsExtended =
  ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorDialogActions & {};

export const SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_AREAS_ACTIVITY_ACTIVITY_CITIES_ACTIVITY_CITIES_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_AREAS_ACTIVITY_ACTIVITY_CITIES_ACTIVITY_CITIES_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK';
export type ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorActionsHook = (
  ownerData: any,
  data: ServiceCityStored[],
  editMode: boolean,
  selectionDiff: ServiceCityStored[],
  submit: () => Promise<void>,
) => ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorDialogActionsExtended;

export interface ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorViewModel
  extends ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

const ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorViewModelContext =
  createContext<ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorViewModel>(
    {} as any,
  );
export const useServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorViewModel =
  () => {
    const context = useContext(
      ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorViewModelContext,
    );
    if (!context) {
      throw new Error(
        'useServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorViewModel must be used within a(n) ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorViewModelProvider',
      );
    }
    return context;
  };

export const useServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesTableAddSelectorPage =
  (): ((
    ownerData: any,
    alreadySelected: ServiceCityStored[],
    isDraft?: boolean,
  ) => Promise<DialogResult<ServiceCityStored[]>>) => {
    const [createDialog, closeDialog] = useDialog();

    return (ownerData: any, alreadySelected: ServiceCityStored[], isDraft?: boolean) =>
      new Promise((resolve) => {
        createDialog({
          fullWidth: true,
          maxWidth: 'md',
          onClose: async (event: object, reason: string) => {
            if (reason !== 'backdropClick') {
              await closeDialog();
              resolve({
                result: 'close',
              });
            }
          },
          children: (
            <ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesTableAddSelectorPage
              ownerData={ownerData}
              alreadySelected={alreadySelected}
              isDraft={isDraft}
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

const ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorDialogContainer =
  lazy(
    () =>
      import(
        '~/containers/Service/UserProfile/UserProfile_View_Edit/Areas/Activity/Activity_cities/ActivityCities/AddSelector/ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorDialogContainer'
      ),
  );

export interface ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesTableAddSelectorPageProps {
  ownerData: any;

  alreadySelected: ServiceCityStored[];

  isDraft?: boolean;
  ownerValidation?: (data: ServiceCity) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceCityStored[], isDraft?: boolean, openCreated?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_fsW_rVvTEe6jm_SkPSYEYw)/TabularReferenceFieldTableAddSelectorPageDefinition
// Name: service::UserProfile::UserProfile_View_Edit::Areas::activity::activity_cities::activityCities::TableAddSelectorPage
export default function ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesTableAddSelectorPage(
  props: ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesTableAddSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceUserProfileServiceForActivityCitiesImpl = useMemo(
    () => new ServiceUserProfileServiceForActivityCitiesImpl(judoAxiosProvider),
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
  const [createDialog, closeDialog] = useDialog();

  // State section
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<ServiceCityStored[]>([]);
  const [selectionDiff, setSelectionDiff] = useState<ServiceCityStored[]>([]);

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    setRefreshCounter((prev) => prev + 1);
  };

  // Validation
  const validate: (data: ServiceCity) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_AREAS_ACTIVITY_ACTIVITY_CITIES_ACTIVITY_CITIES_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions:
    | ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorDialogActionsExtended
    | undefined = customActionsHook?.(ownerData, data, editMode, selectionDiff, submit);

  // Dialog hooks

  // Action section
  const getPageTitle = (): string => {
    return t('service.UserProfile.UserProfile_View_Edit.Areas.activity.activity_cities.activityCities.AddSelector', {
      defaultValue: '',
    });
  };
  const addAction = async (selected: ServiceCityStored[]) => {
    onSubmit(selected);
  };
  const backAction = async () => {
    onClose();
  };
  const filterAction = async (
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
  const selectorRangeAction = async (
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceCityStored[]>> => {
    try {
      return serviceUserProfileServiceForActivityCitiesImpl.getRangeForActivityCities(
        cleanUpPayload(ownerData),
        queryCustomizer,
      );
    } catch (error: any) {
      handleError(error);
      return Promise.resolve({ data: [], headers: error.response?.headers, status: error.response?.status });
    }
  };

  const actions: ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorDialogActions =
    {
      getPageTitle,
      addAction,
      backAction,
      filterAction,
      selectorRangeAction,
      ...(customActions ?? {}),
    };

  // ViewModel setup
  const viewModel: ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorViewModel =
    {
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
      alreadySelected,
      selectionDiff,
      setSelectionDiff,
      isDraft,
    };

  // Effect section

  return (
    <ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorViewModelContext.Provider
      value={viewModel}
    >
      <Suspense>
        <div
          id="User/(esm/_fsW_rVvTEe6jm_SkPSYEYw)/TabularReferenceFieldTableAddSelectorPageDefinition"
          data-page-name="service::UserProfile::UserProfile_View_Edit::Areas::activity::activity_cities::activityCities::TableAddSelectorPage"
        />
        <ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorDialogContainer
          ownerData={ownerData}
          onClose={onClose}
          actions={actions}
          isLoading={isLoading}
          editMode={editMode}
          refreshCounter={refreshCounter}
          selectionDiff={selectionDiff}
          setSelectionDiff={setSelectionDiff}
          alreadySelected={alreadySelected}
          isDraft={isDraft}
        />
      </Suspense>
    </ServiceUserProfileUserProfile_View_EditAreasActivityActivity_citiesActivityCitiesAddSelectorViewModelContext.Provider>
  );
}
