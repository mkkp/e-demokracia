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
  ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorDialogActions,
  ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorDialogProps,
} from '~/containers/Service/UserProfile/UserProfile_View_Edit/Areas/Residency/ResidentCity/SetSelector/ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorDialogContainer';
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
import { ServiceUserProfileServiceForResidentCityImpl } from '~/services/data-axios/ServiceUserProfileServiceForResidentCityImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorDialogActionsExtended =
  ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorDialogActions & {};

export const SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_AREAS_RESIDENCY_RESIDENT_CITY_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_AREAS_RESIDENCY_RESIDENT_CITY_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK';
export type ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorActionsHook = (
  ownerData: any,
  data: ServiceCityStored[],
  editMode: boolean,
  selectionDiff: ServiceCityStored[],
  submit: () => Promise<void>,
) => ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorDialogActionsExtended;

export interface ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorViewModel
  extends ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

const ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorViewModelContext =
  createContext<ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorViewModel>({} as any);
export const useServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorViewModel = () => {
  const context = useContext(
    ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorViewModelContext,
  );
  if (!context) {
    throw new Error(
      'useServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorViewModel must be used within a(n) ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorViewModelProvider',
    );
  }
  return context;
};

export const useServiceUserProfileUserProfile_View_EditAreasResidencyResidentCityLinkSetSelectorPage = (): ((
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
          <ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCityLinkSetSelectorPage
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

const ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/UserProfile/UserProfile_View_Edit/Areas/Residency/ResidentCity/SetSelector/ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorDialogContainer'
    ),
);

export interface ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCityLinkSetSelectorPageProps {
  ownerData: any;

  alreadySelected: ServiceCityStored[];

  isDraft?: boolean;
  ownerValidation?: (data: ServiceCity) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceCityStored[], isDraft?: boolean, openCreated?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_fsW_pFvTEe6jm_SkPSYEYw)/TabularReferenceFieldLinkSetSelectorPageDefinition
// Name: service::UserProfile::UserProfile_View_Edit::Areas::Residency::residentCity::LinkSetSelectorPage
export default function ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCityLinkSetSelectorPage(
  props: ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCityLinkSetSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceUserProfileServiceForResidentCityImpl = useMemo(
    () => new ServiceUserProfileServiceForResidentCityImpl(judoAxiosProvider),
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
    useTrackService<ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_AREAS_RESIDENCY_RESIDENT_CITY_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions:
    | ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorDialogActionsExtended
    | undefined = customActionsHook?.(ownerData, data, editMode, selectionDiff, submit);

  // Dialog hooks

  // Action section
  const getPageTitle = (): string => {
    return t('service.UserProfile.UserProfile_View_Edit.Areas.Residency.residentCity.SetSelector', {
      defaultValue: 'Resident city',
    });
  };
  const backAction = async () => {
    onClose();
  };
  const setAction = async (selected: ServiceCityStored[]) => {
    onSubmit(selected);
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
      return serviceUserProfileServiceForResidentCityImpl.getRangeForResidentCity(
        cleanUpPayload(ownerData),
        queryCustomizer,
      );
    } catch (error: any) {
      handleError(error);
      return Promise.resolve({ data: [], headers: error.response?.headers, status: error.response?.status });
    }
  };

  const actions: ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorDialogActions = {
    getPageTitle,
    backAction,
    setAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorViewModel = {
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
    <ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorViewModelContext.Provider
      value={viewModel}
    >
      <Suspense>
        <div
          id="User/(esm/_fsW_pFvTEe6jm_SkPSYEYw)/TabularReferenceFieldLinkSetSelectorPageDefinition"
          data-page-name="service::UserProfile::UserProfile_View_Edit::Areas::Residency::residentCity::LinkSetSelectorPage"
        />
        <ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorDialogContainer
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
    </ServiceUserProfileUserProfile_View_EditAreasResidencyResidentCitySetSelectorViewModelContext.Provider>
  );
}
