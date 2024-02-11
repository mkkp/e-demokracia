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
  ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorDialogActions,
  ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorDialogProps,
} from '~/containers/Service/ServiceUser/ServiceUser_View_Edit/Areas/Activity/Activity_districts/ActivityDistricts/AddSelector/ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceServiceUser,
  ServiceServiceUserStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceServiceUserServiceForActivityDistrictsImpl } from '~/services/data-axios/ServiceServiceUserServiceForActivityDistrictsImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorDialogActionsExtended =
  ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorDialogActions & {};

export const SERVICE_SERVICE_USER_SERVICE_USER_VIEW_EDIT_AREAS_ACTIVITY_ACTIVITY_DISTRICTS_ACTIVITY_DISTRICTS_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_SERVICE_USER_SERVICE_USER_VIEW_EDIT_AREAS_ACTIVITY_ACTIVITY_DISTRICTS_ACTIVITY_DISTRICTS_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK';
export type ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorActionsHook =
  (
    ownerData: any,
    data: ServiceDistrictStored[],
    editMode: boolean,
    selectionDiff: ServiceDistrictStored[],
    submit: () => Promise<void>,
  ) => ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorDialogActionsExtended;

export interface ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorViewModel
  extends ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

const ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorViewModelContext =
  createContext<ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorViewModel>(
    {} as any,
  );
export const useServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorViewModel =
  () => {
    const context = useContext(
      ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorViewModelContext,
    );
    if (!context) {
      throw new Error(
        'useServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorViewModel must be used within a(n) ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorViewModelProvider',
      );
    }
    return context;
  };

export const useServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsTableAddSelectorPage =
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
            <ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsTableAddSelectorPage
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

const ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorDialogContainer =
  lazy(
    () =>
      import(
        '~/containers/Service/ServiceUser/ServiceUser_View_Edit/Areas/Activity/Activity_districts/ActivityDistricts/AddSelector/ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorDialogContainer'
      ),
  );

export interface ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsTableAddSelectorPageProps {
  ownerData: any;

  alreadySelected: ServiceDistrictStored[];

  isDraft?: boolean;
  ownerValidation?: (data: ServiceDistrict) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceDistrictStored[], isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_I-9zEIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldTableAddSelectorPageDefinition
// Name: service::ServiceUser::ServiceUser_View_Edit::Areas::activity::activity_districts::activityDistricts::TableAddSelectorPage
export default function ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsTableAddSelectorPage(
  props: ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsTableAddSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceServiceUserServiceForActivityDistrictsImpl = useMemo(
    () => new ServiceServiceUserServiceForActivityDistrictsImpl(judoAxiosProvider),
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
  const { service: customActionsHook } =
    useTrackService<ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_SERVICE_USER_SERVICE_USER_VIEW_EDIT_AREAS_ACTIVITY_ACTIVITY_DISTRICTS_ACTIVITY_DISTRICTS_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions:
    | ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorDialogActionsExtended
    | undefined = customActionsHook?.(ownerData, data, editMode, selectionDiff, submit);

  // Dialog hooks

  // Action section
  const getPageTitle = (): string => {
    return t(
      'service.ServiceUser.ServiceUser_View_Edit.Areas.activity.activity_districts.activityDistricts.AddSelector',
      { defaultValue: '' },
    );
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
  ): Promise<JudoRestResponse<ServiceDistrictStored[]>> => {
    try {
      return serviceServiceUserServiceForActivityDistrictsImpl.getRangeForActivityDistricts(
        cleanUpPayload(ownerData),
        queryCustomizer,
      );
    } catch (error: any) {
      handleError(error);
      return Promise.resolve({ data: [], headers: error.response?.headers, status: error.response?.status });
    }
  };

  const actions: ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorDialogActions =
    {
      getPageTitle,
      addAction,
      backAction,
      filterAction,
      selectorRangeAction,
      ...(customActions ?? {}),
    };

  // ViewModel setup
  const viewModel: ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorViewModel =
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
    <ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorViewModelContext.Provider
      value={viewModel}
    >
      <Suspense>
        <div
          id="User/(esm/_I-9zEIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldTableAddSelectorPageDefinition"
          data-page-name="service::ServiceUser::ServiceUser_View_Edit::Areas::activity::activity_districts::activityDistricts::TableAddSelectorPage"
        />
        <ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorDialogContainer
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
    </ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsAddSelectorViewModelContext.Provider>
  );
}
