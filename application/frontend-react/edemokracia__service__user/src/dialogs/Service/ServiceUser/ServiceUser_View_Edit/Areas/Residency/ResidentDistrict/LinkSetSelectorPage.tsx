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
  ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorDialogActions,
  ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorDialogProps,
} from '~/containers/Service/ServiceUser/ServiceUser_View_Edit/Areas/Residency/ResidentDistrict/SetSelector/ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorDialogContainer';
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
import { ServiceServiceUserServiceForResidentDistrictImpl } from '~/services/data-axios/ServiceServiceUserServiceForResidentDistrictImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorDialogActionsExtended =
  ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorDialogActions & {};

export const SERVICE_SERVICE_USER_SERVICE_USER_VIEW_EDIT_AREAS_RESIDENCY_RESIDENT_DISTRICT_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_SERVICE_USER_SERVICE_USER_VIEW_EDIT_AREAS_RESIDENCY_RESIDENT_DISTRICT_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK';
export type ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorActionsHook = (
  ownerData: any,
  data: ServiceDistrictStored[],
  editMode: boolean,
  selectionDiff: ServiceDistrictStored[],
  submit: () => Promise<void>,
) => ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorDialogActionsExtended;

export interface ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorViewModel
  extends ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

const ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorViewModelContext =
  createContext<ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorViewModel>({} as any);
export const useServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorViewModel = () => {
  const context = useContext(
    ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorViewModelContext,
  );
  if (!context) {
    throw new Error(
      'useServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorViewModel must be used within a(n) ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorViewModelProvider',
    );
  }
  return context;
};

export const useServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictLinkSetSelectorPage = (): ((
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
          <ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictLinkSetSelectorPage
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

const ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/ServiceUser/ServiceUser_View_Edit/Areas/Residency/ResidentDistrict/SetSelector/ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorDialogContainer'
    ),
);

export interface ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictLinkSetSelectorPageProps {
  ownerData: any;

  alreadySelected: ServiceDistrictStored[];

  isDraft?: boolean;
  ownerValidation?: (data: ServiceDistrict) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceDistrictStored[], isDraft?: boolean, openCreated?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_I_CEgIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldLinkSetSelectorPageDefinition
// Name: service::ServiceUser::ServiceUser_View_Edit::Areas::Residency::residentDistrict::LinkSetSelectorPage
export default function ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictLinkSetSelectorPage(
  props: ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictLinkSetSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceServiceUserServiceForResidentDistrictImpl = useMemo(
    () => new ServiceServiceUserServiceForResidentDistrictImpl(judoAxiosProvider),
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
    useTrackService<ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_SERVICE_USER_SERVICE_USER_VIEW_EDIT_AREAS_RESIDENCY_RESIDENT_DISTRICT_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions:
    | ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorDialogActionsExtended
    | undefined = customActionsHook?.(ownerData, data, editMode, selectionDiff, submit);

  // Dialog hooks

  // Action section
  const getPageTitle = (): string => {
    return t('service.ServiceUser.ServiceUser_View_Edit.Areas.Residency.residentDistrict.SetSelector', {
      defaultValue: 'Resident district',
    });
  };
  const backAction = async () => {
    onClose();
  };
  const setAction = async (selected: ServiceDistrictStored[]) => {
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
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceDistrictStored[]>> => {
    try {
      return serviceServiceUserServiceForResidentDistrictImpl.getRangeForResidentDistrict(
        cleanUpPayload(ownerData),
        queryCustomizer,
      );
    } catch (error: any) {
      handleError(error);
      return Promise.resolve({ data: [], headers: error.response?.headers, status: error.response?.status });
    }
  };

  const actions: ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorDialogActions = {
    getPageTitle,
    backAction,
    setAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorViewModel = {
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
    <ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorViewModelContext.Provider
      value={viewModel}
    >
      <Suspense>
        <div
          id="User/(esm/_I_CEgIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldLinkSetSelectorPageDefinition"
          data-page-name="service::ServiceUser::ServiceUser_View_Edit::Areas::Residency::residentDistrict::LinkSetSelectorPage"
        />
        <ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorDialogContainer
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
    </ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetSelectorViewModelContext.Provider>
  );
}
