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
  ServiceCreateIssueInputCreateIssueInput_FormIssueDistrictSetSelectorDialogActions,
  ServiceCreateIssueInputCreateIssueInput_FormIssueDistrictSetSelectorDialogProps,
} from '~/containers/Service/CreateIssueInput/CreateIssueInput_Form/Issue/District/SetSelector/ServiceCreateIssueInputCreateIssueInput_FormIssueDistrictSetSelectorDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceCreateIssueInput,
  ServiceCreateIssueInputStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceCreateIssueInputServiceForDistrictImpl } from '~/services/data-axios/ServiceCreateIssueInputServiceForDistrictImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceCreateIssueInputCreateIssueInput_FormIssueDistrictSetSelectorDialogActionsExtended =
  ServiceCreateIssueInputCreateIssueInput_FormIssueDistrictSetSelectorDialogActions & {};

export const SERVICE_CREATE_ISSUE_INPUT_CREATE_ISSUE_INPUT_FORM_ISSUE_DISTRICT_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_CREATE_ISSUE_INPUT_CREATE_ISSUE_INPUT_FORM_ISSUE_DISTRICT_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK';
export type ServiceCreateIssueInputCreateIssueInput_FormIssueDistrictSetSelectorActionsHook = (
  ownerData: any,
  data: ServiceDistrictStored[],
  editMode: boolean,
  selectionDiff: ServiceDistrictStored[],
  submit: () => Promise<void>,
) => ServiceCreateIssueInputCreateIssueInput_FormIssueDistrictSetSelectorDialogActionsExtended;

export interface ServiceCreateIssueInputCreateIssueInput_FormIssueDistrictSetSelectorViewModel
  extends ServiceCreateIssueInputCreateIssueInput_FormIssueDistrictSetSelectorDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

const ServiceCreateIssueInputCreateIssueInput_FormIssueDistrictSetSelectorViewModelContext =
  createContext<ServiceCreateIssueInputCreateIssueInput_FormIssueDistrictSetSelectorViewModel>({} as any);
export const useServiceCreateIssueInputCreateIssueInput_FormIssueDistrictSetSelectorViewModel = () => {
  const context = useContext(ServiceCreateIssueInputCreateIssueInput_FormIssueDistrictSetSelectorViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceCreateIssueInputCreateIssueInput_FormIssueDistrictSetSelectorViewModel must be used within a(n) ServiceCreateIssueInputCreateIssueInput_FormIssueDistrictSetSelectorViewModelProvider',
    );
  }
  return context;
};

export const useServiceCreateIssueInputCreateIssueInput_FormIssueDistrictLinkSetSelectorPage = (): ((
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
          <ServiceCreateIssueInputCreateIssueInput_FormIssueDistrictLinkSetSelectorPage
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

const ServiceCreateIssueInputCreateIssueInput_FormIssueDistrictSetSelectorDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/CreateIssueInput/CreateIssueInput_Form/Issue/District/SetSelector/ServiceCreateIssueInputCreateIssueInput_FormIssueDistrictSetSelectorDialogContainer'
    ),
);

export interface ServiceCreateIssueInputCreateIssueInput_FormIssueDistrictLinkSetSelectorPageProps {
  ownerData: any;

  alreadySelected: ServiceDistrictStored[];

  isDraft?: boolean;
  ownerValidation?: (data: ServiceDistrict) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceDistrictStored[], isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_TXklMdvXEe2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorPageDefinition
// Name: service::CreateIssueInput::CreateIssueInput_Form::issue::district::LinkSetSelectorPage
export default function ServiceCreateIssueInputCreateIssueInput_FormIssueDistrictLinkSetSelectorPage(
  props: ServiceCreateIssueInputCreateIssueInput_FormIssueDistrictLinkSetSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceCreateIssueInputServiceForDistrictImpl = useMemo(
    () => new ServiceCreateIssueInputServiceForDistrictImpl(judoAxiosProvider),
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
    useTrackService<ServiceCreateIssueInputCreateIssueInput_FormIssueDistrictSetSelectorActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_CREATE_ISSUE_INPUT_CREATE_ISSUE_INPUT_FORM_ISSUE_DISTRICT_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions:
    | ServiceCreateIssueInputCreateIssueInput_FormIssueDistrictSetSelectorDialogActionsExtended
    | undefined = customActionsHook?.(ownerData, data, editMode, selectionDiff, submit);

  // Dialog hooks

  // Action section
  const getPageTitle = (): string => {
    return t('service.CreateIssueInput.CreateIssueInput_Form.issue.district.SetSelector', { defaultValue: 'District' });
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
      return serviceCreateIssueInputServiceForDistrictImpl.getRangeForDistrict(
        cleanUpPayload(ownerData),
        queryCustomizer,
      );
    } catch (error: any) {
      handleError(error);
      return Promise.resolve({ data: [], headers: error.response?.headers, status: error.response?.status });
    }
  };

  const actions: ServiceCreateIssueInputCreateIssueInput_FormIssueDistrictSetSelectorDialogActions = {
    getPageTitle,
    backAction,
    setAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceCreateIssueInputCreateIssueInput_FormIssueDistrictSetSelectorViewModel = {
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
    <ServiceCreateIssueInputCreateIssueInput_FormIssueDistrictSetSelectorViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_TXklMdvXEe2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorPageDefinition"
          data-page-name="service::CreateIssueInput::CreateIssueInput_Form::issue::district::LinkSetSelectorPage"
        />
        <ServiceCreateIssueInputCreateIssueInput_FormIssueDistrictSetSelectorDialogContainer
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
    </ServiceCreateIssueInputCreateIssueInput_FormIssueDistrictSetSelectorViewModelContext.Provider>
  );
}
