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
  ServiceDistrictDistrict_TableAddSelectorDialogActions,
  ServiceDistrictDistrict_TableAddSelectorDialogProps,
} from '~/containers/Service/District/District_Table/AddSelector/ServiceDistrictDistrict_TableAddSelectorDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceUserProfile,
  ServiceUserProfileStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceUserProfileServiceForActivityDistrictsImpl } from '~/services/data-axios/ServiceUserProfileServiceForActivityDistrictsImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceDistrictDistrict_TableAddSelectorDialogActionsExtended =
  ServiceDistrictDistrict_TableAddSelectorDialogActions & {};

export const SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_AREAS_ACTIVITY_ACTIVITY_DISTRICTS_ACTIVITY_DISTRICTS_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_AREAS_ACTIVITY_ACTIVITY_DISTRICTS_ACTIVITY_DISTRICTS_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK';
export type ServiceDistrictDistrict_TableAddSelectorActionsHook = (
  ownerData: any,
  data: ServiceDistrictStored[],
  editMode: boolean,
  selectionDiff: ServiceDistrictStored[],
  submit: () => Promise<void>,
) => ServiceDistrictDistrict_TableAddSelectorDialogActionsExtended;

export interface ServiceDistrictDistrict_TableAddSelectorViewModel
  extends ServiceDistrictDistrict_TableAddSelectorDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

const ServiceDistrictDistrict_TableAddSelectorViewModelContext =
  createContext<ServiceDistrictDistrict_TableAddSelectorViewModel>({} as any);
export const useServiceDistrictDistrict_TableAddSelectorViewModel = () => {
  const context = useContext(ServiceDistrictDistrict_TableAddSelectorViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceDistrictDistrict_TableAddSelectorViewModel must be used within a(n) ServiceDistrictDistrict_TableAddSelectorViewModelProvider',
    );
  }
  return context;
};

export const useServiceUserProfileUserProfile_View_EditAreasActivityActivity_districtsActivityDistrictsTableAddSelectorPage =
  (): ((
    ownerData: any,
    alreadySelected: ServiceDistrictStored[],
    isDraft?: boolean,
  ) => Promise<DialogResult<ServiceDistrictStored[]>>) => {
    const [createDialog, closeDialog] = useDialog();

    return (ownerData: any, alreadySelected: ServiceDistrictStored[], isDraft?: boolean) =>
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
            <ServiceUserProfileUserProfile_View_EditAreasActivityActivity_districtsActivityDistrictsTableAddSelectorPage
              ownerData={ownerData}
              alreadySelected={alreadySelected}
              isDraft={isDraft}
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

const ServiceDistrictDistrict_TableAddSelectorDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/District/District_Table/AddSelector/ServiceDistrictDistrict_TableAddSelectorDialogContainer'
    ),
);

export interface ServiceUserProfileUserProfile_View_EditAreasActivityActivity_districtsActivityDistrictsTableAddSelectorPageProps {
  ownerData: any;

  alreadySelected: ServiceDistrictStored[];

  isDraft?: boolean;
  ownerValidation?: (data: ServiceDistrict) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceDistrictStored[], isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceFieldTableAddSelectorPageDefinition
// Name: service::UserProfile::UserProfile_View_Edit::Areas::activity::activity_districts::activityDistricts::TableAddSelectorPage
export default function ServiceUserProfileUserProfile_View_EditAreasActivityActivity_districtsActivityDistrictsTableAddSelectorPage(
  props: ServiceUserProfileUserProfile_View_EditAreasActivityActivity_districtsActivityDistrictsTableAddSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceUserProfileServiceForActivityDistrictsImpl = useMemo(
    () => new ServiceUserProfileServiceForActivityDistrictsImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceDistrictStored[]>([]);
  const [selectionDiff, setSelectionDiff] = useState<ServiceDistrictStored[]>([]);

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    setRefreshCounter((prev) => prev + 1);
  };

  // Validation
  const validate: (data: ServiceDistrict) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceDistrictDistrict_TableAddSelectorActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_AREAS_ACTIVITY_ACTIVITY_DISTRICTS_ACTIVITY_DISTRICTS_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceDistrictDistrict_TableAddSelectorDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    selectionDiff,
    submit,
  );

  // Dialog hooks

  // Action section
  const getPageTitle = (): string => {
    return t('service.District.District_Table.AddSelector', { defaultValue: 'District Table' });
  };
  const addAction = async (selected: ServiceDistrictStored[]) => {
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
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored[]> => {
    try {
      return serviceUserProfileServiceForActivityDistrictsImpl.getRangeForActivityDistricts(
        cleanUpPayload(ownerData),
        queryCustomizer,
      );
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };

  const actions: ServiceDistrictDistrict_TableAddSelectorDialogActions = {
    getPageTitle,
    addAction,
    backAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceDistrictDistrict_TableAddSelectorViewModel = {
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
    <ServiceDistrictDistrict_TableAddSelectorViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceFieldTableAddSelectorPageDefinition"
          data-page-name="service::UserProfile::UserProfile_View_Edit::Areas::activity::activity_districts::activityDistricts::TableAddSelectorPage"
        />
        <ServiceDistrictDistrict_TableAddSelectorDialogContainer
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
    </ServiceDistrictDistrict_TableAddSelectorViewModelContext.Provider>
  );
}
