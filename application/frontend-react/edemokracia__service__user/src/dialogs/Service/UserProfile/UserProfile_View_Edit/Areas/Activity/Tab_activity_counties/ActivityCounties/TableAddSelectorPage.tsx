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
  ServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorDialogActions,
  ServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorDialogProps,
} from '~/containers/Service/UserProfile/UserProfile_View_Edit/Areas/Activity/Tab_activity_counties/ActivityCounties/AddSelector/ServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceUserProfile,
  ServiceUserProfileStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceUserProfileServiceForActivityCountiesImpl } from '~/services/data-axios/ServiceUserProfileServiceForActivityCountiesImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorDialogActionsExtended =
  ServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorDialogActions & {};

export const SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_AREAS_ACTIVITY_TAB_ACTIVITY_COUNTIES_ACTIVITY_COUNTIES_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_AREAS_ACTIVITY_TAB_ACTIVITY_COUNTIES_ACTIVITY_COUNTIES_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK';
export type ServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorActionsHook =
  (
    ownerData: any,
    data: ServiceCountyStored[],
    editMode: boolean,
    selectionDiff: ServiceCountyStored[],
    submit: () => Promise<void>,
  ) => ServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorDialogActionsExtended;

export interface ServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorViewModel
  extends ServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

const ServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorViewModelContext =
  createContext<ServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorViewModel>(
    {} as any,
  );
export const useServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorViewModel =
  () => {
    const context = useContext(
      ServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorViewModelContext,
    );
    if (!context) {
      throw new Error(
        'useServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorViewModel must be used within a(n) ServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorViewModelProvider',
      );
    }
    return context;
  };

export const useServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesTableAddSelectorPage =
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
            <ServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesTableAddSelectorPage
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

const ServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorDialogContainer =
  lazy(
    () =>
      import(
        '~/containers/Service/UserProfile/UserProfile_View_Edit/Areas/Activity/Tab_activity_counties/ActivityCounties/AddSelector/ServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorDialogContainer'
      ),
  );

export interface ServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesTableAddSelectorPageProps {
  ownerData: any;

  alreadySelected: ServiceCountyStored[];

  isDraft?: boolean;
  ownerValidation?: (data: ServiceCounty) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceCountyStored[], isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_fsW_qlvTEe6jm_SkPSYEYw)/TabularReferenceFieldTableAddSelectorPageDefinition
// Name: service::UserProfile::UserProfile_View_Edit::Areas::activity::tab_activity_counties::activityCounties::TableAddSelectorPage
export default function ServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesTableAddSelectorPage(
  props: ServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesTableAddSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceUserProfileServiceForActivityCountiesImpl = useMemo(
    () => new ServiceUserProfileServiceForActivityCountiesImpl(judoAxiosProvider),
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
  const { service: customActionsHook } =
    useTrackService<ServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_AREAS_ACTIVITY_TAB_ACTIVITY_COUNTIES_ACTIVITY_COUNTIES_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions:
    | ServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorDialogActionsExtended
    | undefined = customActionsHook?.(ownerData, data, editMode, selectionDiff, submit);

  // Dialog hooks

  // Action section
  const getPageTitle = (): string => {
    return t(
      'service.UserProfile.UserProfile_View_Edit.Areas.activity.tab_activity_counties.activityCounties.AddSelector',
      { defaultValue: '' },
    );
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
  const selectorRangeAction = async (
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceCountyStored[]>> => {
    try {
      return serviceUserProfileServiceForActivityCountiesImpl.getRangeForActivityCounties(
        cleanUpPayload(ownerData),
        queryCustomizer,
      );
    } catch (error: any) {
      handleError(error);
      return Promise.resolve({ data: [], headers: error.response?.headers, status: error.response?.status });
    }
  };

  const actions: ServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorDialogActions =
    {
      getPageTitle,
      addAction,
      backAction,
      filterAction,
      selectorRangeAction,
      ...(customActions ?? {}),
    };

  // ViewModel setup
  const viewModel: ServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorViewModel =
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
    <ServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorViewModelContext.Provider
      value={viewModel}
    >
      <Suspense>
        <div
          id="User/(esm/_fsW_qlvTEe6jm_SkPSYEYw)/TabularReferenceFieldTableAddSelectorPageDefinition"
          data-page-name="service::UserProfile::UserProfile_View_Edit::Areas::activity::tab_activity_counties::activityCounties::TableAddSelectorPage"
        />
        <ServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorDialogContainer
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
    </ServiceUserProfileUserProfile_View_EditAreasActivityTab_activity_countiesActivityCountiesAddSelectorViewModelContext.Provider>
  );
}
