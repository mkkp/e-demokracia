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
  ServiceCreateIssueInputCreateIssueInput_FormIssueCitySetSelectorDialogActions,
  ServiceCreateIssueInputCreateIssueInput_FormIssueCitySetSelectorDialogProps,
} from '~/containers/Service/CreateIssueInput/CreateIssueInput_Form/Issue/City/SetSelector/ServiceCreateIssueInputCreateIssueInput_FormIssueCitySetSelectorDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceCreateIssueInput,
  ServiceCreateIssueInputStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceCreateIssueInputServiceForCityImpl } from '~/services/data-axios/ServiceCreateIssueInputServiceForCityImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceCreateIssueInputCreateIssueInput_FormIssueCitySetSelectorDialogActionsExtended =
  ServiceCreateIssueInputCreateIssueInput_FormIssueCitySetSelectorDialogActions & {};

export const SERVICE_CREATE_ISSUE_INPUT_CREATE_ISSUE_INPUT_FORM_ISSUE_CITY_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_CREATE_ISSUE_INPUT_CREATE_ISSUE_INPUT_FORM_ISSUE_CITY_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK';
export type ServiceCreateIssueInputCreateIssueInput_FormIssueCitySetSelectorActionsHook = (
  ownerData: any,
  data: ServiceCityStored[],
  editMode: boolean,
  selectionDiff: ServiceCityStored[],
  submit: () => Promise<void>,
) => ServiceCreateIssueInputCreateIssueInput_FormIssueCitySetSelectorDialogActionsExtended;

export interface ServiceCreateIssueInputCreateIssueInput_FormIssueCitySetSelectorViewModel
  extends ServiceCreateIssueInputCreateIssueInput_FormIssueCitySetSelectorDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

const ServiceCreateIssueInputCreateIssueInput_FormIssueCitySetSelectorViewModelContext =
  createContext<ServiceCreateIssueInputCreateIssueInput_FormIssueCitySetSelectorViewModel>({} as any);
export const useServiceCreateIssueInputCreateIssueInput_FormIssueCitySetSelectorViewModel = () => {
  const context = useContext(ServiceCreateIssueInputCreateIssueInput_FormIssueCitySetSelectorViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceCreateIssueInputCreateIssueInput_FormIssueCitySetSelectorViewModel must be used within a(n) ServiceCreateIssueInputCreateIssueInput_FormIssueCitySetSelectorViewModelProvider',
    );
  }
  return context;
};

export const useServiceCreateIssueInputCreateIssueInput_FormIssueCityLinkSetSelectorPage = (): ((
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
          <ServiceCreateIssueInputCreateIssueInput_FormIssueCityLinkSetSelectorPage
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

const ServiceCreateIssueInputCreateIssueInput_FormIssueCitySetSelectorDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/CreateIssueInput/CreateIssueInput_Form/Issue/City/SetSelector/ServiceCreateIssueInputCreateIssueInput_FormIssueCitySetSelectorDialogContainer'
    ),
);

export interface ServiceCreateIssueInputCreateIssueInput_FormIssueCityLinkSetSelectorPageProps {
  ownerData: any;

  alreadySelected: ServiceCityStored[];

  isDraft?: boolean;
  ownerValidation?: (data: ServiceCity) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceCityStored[], isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_TXiwANvXEe2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorPageDefinition
// Name: service::CreateIssueInput::CreateIssueInput_Form::issue::city::LinkSetSelectorPage
export default function ServiceCreateIssueInputCreateIssueInput_FormIssueCityLinkSetSelectorPage(
  props: ServiceCreateIssueInputCreateIssueInput_FormIssueCityLinkSetSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceCreateIssueInputServiceForCityImpl = useMemo(
    () => new ServiceCreateIssueInputServiceForCityImpl(judoAxiosProvider),
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
    useTrackService<ServiceCreateIssueInputCreateIssueInput_FormIssueCitySetSelectorActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_CREATE_ISSUE_INPUT_CREATE_ISSUE_INPUT_FORM_ISSUE_CITY_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions:
    | ServiceCreateIssueInputCreateIssueInput_FormIssueCitySetSelectorDialogActionsExtended
    | undefined = customActionsHook?.(ownerData, data, editMode, selectionDiff, submit);

  // Dialog hooks

  // Action section
  const getPageTitle = (): string => {
    return t('service.CreateIssueInput.CreateIssueInput_Form.issue.city.SetSelector', { defaultValue: 'City' });
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
      return serviceCreateIssueInputServiceForCityImpl.getRangeForCity(cleanUpPayload(ownerData), queryCustomizer);
    } catch (error: any) {
      handleError(error);
      return Promise.resolve({ data: [], headers: error.response?.headers, status: error.response?.status });
    }
  };

  const actions: ServiceCreateIssueInputCreateIssueInput_FormIssueCitySetSelectorDialogActions = {
    getPageTitle,
    backAction,
    setAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceCreateIssueInputCreateIssueInput_FormIssueCitySetSelectorViewModel = {
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
    <ServiceCreateIssueInputCreateIssueInput_FormIssueCitySetSelectorViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_TXiwANvXEe2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorPageDefinition"
          data-page-name="service::CreateIssueInput::CreateIssueInput_Form::issue::city::LinkSetSelectorPage"
        />
        <ServiceCreateIssueInputCreateIssueInput_FormIssueCitySetSelectorDialogContainer
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
    </ServiceCreateIssueInputCreateIssueInput_FormIssueCitySetSelectorViewModelContext.Provider>
  );
}
