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
  ServiceIssueIssue_View_EditOtherAreaCitySetSelectorDialogActions,
  ServiceIssueIssue_View_EditOtherAreaCitySetSelectorDialogProps,
} from '~/containers/Service/Issue/Issue_View_Edit/Other/Area/City/SetSelector/ServiceIssueIssue_View_EditOtherAreaCitySetSelectorDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceIssue,
  ServiceIssueStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceIssueServiceForCityImpl } from '~/services/data-axios/ServiceIssueServiceForCityImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceIssueIssue_View_EditOtherAreaCitySetSelectorDialogActionsExtended =
  ServiceIssueIssue_View_EditOtherAreaCitySetSelectorDialogActions & {};

export const SERVICE_ISSUE_ISSUE_VIEW_EDIT_OTHER_AREA_CITY_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_ISSUE_ISSUE_VIEW_EDIT_OTHER_AREA_CITY_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK';
export type ServiceIssueIssue_View_EditOtherAreaCitySetSelectorActionsHook = (
  ownerData: any,
  data: ServiceCityStored[],
  editMode: boolean,
  selectionDiff: ServiceCityStored[],
  submit: () => Promise<void>,
) => ServiceIssueIssue_View_EditOtherAreaCitySetSelectorDialogActionsExtended;

export interface ServiceIssueIssue_View_EditOtherAreaCitySetSelectorViewModel
  extends ServiceIssueIssue_View_EditOtherAreaCitySetSelectorDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

const ServiceIssueIssue_View_EditOtherAreaCitySetSelectorViewModelContext =
  createContext<ServiceIssueIssue_View_EditOtherAreaCitySetSelectorViewModel>({} as any);
export const useServiceIssueIssue_View_EditOtherAreaCitySetSelectorViewModel = () => {
  const context = useContext(ServiceIssueIssue_View_EditOtherAreaCitySetSelectorViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceIssueIssue_View_EditOtherAreaCitySetSelectorViewModel must be used within a(n) ServiceIssueIssue_View_EditOtherAreaCitySetSelectorViewModelProvider',
    );
  }
  return context;
};

export const useServiceIssueIssue_View_EditOtherAreaCityLinkSetSelectorPage = (): ((
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
          <ServiceIssueIssue_View_EditOtherAreaCityLinkSetSelectorPage
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

const ServiceIssueIssue_View_EditOtherAreaCitySetSelectorDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/Issue/Issue_View_Edit/Other/Area/City/SetSelector/ServiceIssueIssue_View_EditOtherAreaCitySetSelectorDialogContainer'
    ),
);

export interface ServiceIssueIssue_View_EditOtherAreaCityLinkSetSelectorPageProps {
  ownerData: any;

  alreadySelected: ServiceCityStored[];

  isDraft?: boolean;
  ownerValidation?: (data: ServiceCity) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceCityStored[], isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_pPQKgNvUEe2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorPageDefinition
// Name: service::Issue::Issue_View_Edit::other::area::city::LinkSetSelectorPage
export default function ServiceIssueIssue_View_EditOtherAreaCityLinkSetSelectorPage(
  props: ServiceIssueIssue_View_EditOtherAreaCityLinkSetSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceIssueServiceForCityImpl = useMemo(() => new ServiceIssueServiceForCityImpl(judoAxiosProvider), []);

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
    useTrackService<ServiceIssueIssue_View_EditOtherAreaCitySetSelectorActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_ISSUE_ISSUE_VIEW_EDIT_OTHER_AREA_CITY_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions: ServiceIssueIssue_View_EditOtherAreaCitySetSelectorDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, selectionDiff, submit);

  // Dialog hooks

  // Action section
  const getPageTitle = (): string => {
    return t('service.Issue.Issue_View_Edit.other.area.city.SetSelector', { defaultValue: 'City' });
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
      return serviceIssueServiceForCityImpl.getRangeForCity(cleanUpPayload(ownerData), queryCustomizer);
    } catch (error: any) {
      handleError(error);
      return Promise.resolve({ data: [], headers: error.response?.headers, status: error.response?.status });
    }
  };

  const actions: ServiceIssueIssue_View_EditOtherAreaCitySetSelectorDialogActions = {
    getPageTitle,
    backAction,
    setAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceIssueIssue_View_EditOtherAreaCitySetSelectorViewModel = {
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
    <ServiceIssueIssue_View_EditOtherAreaCitySetSelectorViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_pPQKgNvUEe2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorPageDefinition"
          data-page-name="service::Issue::Issue_View_Edit::other::area::city::LinkSetSelectorPage"
        />
        <ServiceIssueIssue_View_EditOtherAreaCitySetSelectorDialogContainer
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
    </ServiceIssueIssue_View_EditOtherAreaCitySetSelectorViewModelContext.Provider>
  );
}
