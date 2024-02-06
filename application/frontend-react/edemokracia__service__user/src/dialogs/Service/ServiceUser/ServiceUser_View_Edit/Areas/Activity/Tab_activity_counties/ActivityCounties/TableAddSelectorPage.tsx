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
  ServiceCountyCounty_TableAddSelectorDialogActions,
  ServiceCountyCounty_TableAddSelectorDialogProps,
} from '~/containers/Service/County/County_Table/AddSelector/ServiceCountyCounty_TableAddSelectorDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceServiceUser,
  ServiceServiceUserStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceServiceUserServiceForActivityCountiesImpl } from '~/services/data-axios/ServiceServiceUserServiceForActivityCountiesImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceCountyCounty_TableAddSelectorDialogActionsExtended =
  ServiceCountyCounty_TableAddSelectorDialogActions & {};

export const SERVICE_SERVICE_USER_SERVICE_USER_VIEW_EDIT_AREAS_ACTIVITY_TAB_ACTIVITY_COUNTIES_ACTIVITY_COUNTIES_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_SERVICE_USER_SERVICE_USER_VIEW_EDIT_AREAS_ACTIVITY_TAB_ACTIVITY_COUNTIES_ACTIVITY_COUNTIES_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK';
export type ServiceCountyCounty_TableAddSelectorActionsHook = (
  ownerData: any,
  data: ServiceCountyStored[],
  editMode: boolean,
  selectionDiff: ServiceCountyStored[],
  submit: () => Promise<void>,
) => ServiceCountyCounty_TableAddSelectorDialogActionsExtended;

export interface ServiceCountyCounty_TableAddSelectorViewModel extends ServiceCountyCounty_TableAddSelectorDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

const ServiceCountyCounty_TableAddSelectorViewModelContext =
  createContext<ServiceCountyCounty_TableAddSelectorViewModel>({} as any);
export const useServiceCountyCounty_TableAddSelectorViewModel = () => {
  const context = useContext(ServiceCountyCounty_TableAddSelectorViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceCountyCounty_TableAddSelectorViewModel must be used within a(n) ServiceCountyCounty_TableAddSelectorViewModelProvider',
    );
  }
  return context;
};

export const useServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesTableAddSelectorPage =
  (): ((
    ownerData: any,
    alreadySelected: ServiceCountyStored[],
    isDraft?: boolean,
  ) => Promise<DialogResult<ServiceCountyStored[]>>) => {
    const [createDialog, closeDialog] = useDialog();

    return (ownerData: any, alreadySelected: ServiceCountyStored[], isDraft?: boolean) =>
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
            <ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesTableAddSelectorPage
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

const ServiceCountyCounty_TableAddSelectorDialogContainer = lazy(
  () =>
    import('~/containers/Service/County/County_Table/AddSelector/ServiceCountyCounty_TableAddSelectorDialogContainer'),
);

export interface ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesTableAddSelectorPageProps {
  ownerData: any;

  alreadySelected: ServiceCountyStored[];

  isDraft?: boolean;
  ownerValidation?: (data: ServiceCounty) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceCountyStored[], isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldTableAddSelectorPageDefinition
// Name: service::ServiceUser::ServiceUser_View_Edit::Areas::activity::tab_activity_counties::activityCounties::TableAddSelectorPage
export default function ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesTableAddSelectorPage(
  props: ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesTableAddSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceServiceUserServiceForActivityCountiesImpl = useMemo(
    () => new ServiceServiceUserServiceForActivityCountiesImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceCountyStored[]>([]);
  const [selectionDiff, setSelectionDiff] = useState<ServiceCountyStored[]>([]);

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    setRefreshCounter((prev) => prev + 1);
  };

  // Validation
  const validate: (data: ServiceCounty) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceCountyCounty_TableAddSelectorActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_SERVICE_USER_SERVICE_USER_VIEW_EDIT_AREAS_ACTIVITY_TAB_ACTIVITY_COUNTIES_ACTIVITY_COUNTIES_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceCountyCounty_TableAddSelectorDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    selectionDiff,
    submit,
  );

  // Dialog hooks

  // Action section
  const getPageTitle = (): string => {
    return t('service.County.County_Table.AddSelector', { defaultValue: 'County Table' });
  };
  const addAction = async (selected: ServiceCountyStored[]) => {
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
  const selectorRangeAction = async (queryCustomizer: ServiceCountyQueryCustomizer): Promise<ServiceCountyStored[]> => {
    try {
      return serviceServiceUserServiceForActivityCountiesImpl.getRangeForActivityCounties(
        cleanUpPayload(ownerData),
        queryCustomizer,
      );
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };

  const actions: ServiceCountyCounty_TableAddSelectorDialogActions = {
    getPageTitle,
    addAction,
    backAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceCountyCounty_TableAddSelectorViewModel = {
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
    <ServiceCountyCounty_TableAddSelectorViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldTableAddSelectorPageDefinition"
          data-page-name="service::ServiceUser::ServiceUser_View_Edit::Areas::activity::tab_activity_counties::activityCounties::TableAddSelectorPage"
        />
        <ServiceCountyCounty_TableAddSelectorDialogContainer
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
    </ServiceCountyCounty_TableAddSelectorViewModelContext.Provider>
  );
}
