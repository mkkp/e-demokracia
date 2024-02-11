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
import { Suspense, createContext, lazy, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import { useJudoNavigation } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import type {
  ServiceCountyCounty_View_EditDialogActions,
  ServiceCountyCounty_View_EditDialogProps,
} from '~/containers/Service/County/County_View_Edit/ServiceCountyCounty_View_EditDialogContainer';
import { useServiceCountyCitiesRelationFormPage } from '~/dialogs/Service/County/Cities/RelationFormPage';
import { useServiceCountyCitiesRelationViewPage } from '~/dialogs/Service/County/Cities/RelationViewPage';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
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

export type ServiceCountyCounty_View_EditDialogActionsExtended = ServiceCountyCounty_View_EditDialogActions & {
  postRefreshAction?: (
    data: ServiceCountyStored,
    storeDiff: (attributeName: keyof ServiceCounty, value: any) => void,
    setValidation: Dispatch<SetStateAction<Map<keyof ServiceCounty, string>>>,
  ) => Promise<void>;
};

export const SERVICE_USER_PROFILE_ACTIVITY_COUNTIES_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_PROFILE_ACTIVITY_COUNTIES_RELATION_VIEW_PAGE_ACTIONS_HOOK';
export type ServiceCountyCounty_View_EditActionsHook = (
  ownerData: any,
  data: ServiceCountyStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceCounty, value: any) => void,
  refresh: () => Promise<void>,
  submit: () => Promise<void>,
) => ServiceCountyCounty_View_EditDialogActionsExtended;

export interface ServiceCountyCounty_View_EditViewModel extends ServiceCountyCounty_View_EditDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<ServiceCounty>;
  isDraft?: boolean;
}

const ServiceCountyCounty_View_EditViewModelContext = createContext<ServiceCountyCounty_View_EditViewModel>({} as any);
export const useServiceCountyCounty_View_EditViewModel = () => {
  const context = useContext(ServiceCountyCounty_View_EditViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceCountyCounty_View_EditViewModel must be used within a(n) ServiceCountyCounty_View_EditViewModelProvider',
    );
  }
  return context;
};

export const useServiceUserProfileActivityCountiesRelationViewPage = (): ((
  ownerData: any,
  templateDataOverride?: Partial<ServiceCounty>,
  isDraft?: boolean,
  ownerValidation?: (data: ServiceCounty) => Promise<void>,
) => Promise<DialogResult<ServiceCountyStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (
    ownerData: any,
    templateDataOverride?: Partial<ServiceCounty>,
    isDraft?: boolean,
    ownerValidation?: (data: ServiceCounty) => Promise<void>,
  ) =>
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
          <ServiceUserProfileActivityCountiesRelationViewPage
            ownerData={ownerData}
            templateDataOverride={templateDataOverride}
            isDraft={isDraft}
            ownerValidation={ownerValidation}
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

export const convertServiceUserProfileActivityCountiesRelationViewPagePayload = (
  attributeName: keyof ServiceCounty,
  value: any,
): any => {
  return value;
};

const ServiceCountyCounty_View_EditDialogContainer = lazy(
  () => import('~/containers/Service/County/County_View_Edit/ServiceCountyCounty_View_EditDialogContainer'),
);

export interface ServiceUserProfileActivityCountiesRelationViewPageProps {
  ownerData: any;

  templateDataOverride?: Partial<ServiceCounty>;
  isDraft?: boolean;
  ownerValidation?: (data: ServiceCounty) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceCountyStored, isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_gu_zQFvREe6jm_SkPSYEYw)/RelationFeatureView
// Name: service::UserProfile::activityCounties::RelationViewPage
export default function ServiceUserProfileActivityCountiesRelationViewPage(
  props: ServiceUserProfileActivityCountiesRelationViewPageProps,
) {
  const { ownerData, templateDataOverride, onClose, onSubmit, isDraft, ownerValidation } = props;

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
  const [data, setData] = useState<ServiceCountyStored>({} as ServiceCountyStored);
  const [validation, setValidation] = useState<Map<keyof ServiceCounty, string>>(
    new Map<keyof ServiceCounty, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceCountyStored, any>>(
    {} as unknown as Record<keyof ServiceCountyStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceCounty, value: any) => void = useCallback(
    (attributeName: keyof ServiceCounty, value: any) => {
      payloadDiff.current![attributeName] = convertServiceUserProfileActivityCountiesRelationViewPagePayload(
        attributeName,
        value,
      );
      setData((prevData) => ({
        ...prevData,
        [attributeName]: value,
      }));
      if (!editMode) {
        setEditMode(true);
      }
    },
    [data, editMode],
  );
  const isFormUpdateable = useCallback(() => {
    return true && typeof data?.__updateable === 'boolean' && data?.__updateable;
  }, [data]);
  const isFormDeleteable = useCallback(() => {
    return true && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
  }, [data]);

  const getPageQueryCustomizer: () => ServiceCountyQueryCustomizer = () => ({
    _mask: actions.getMask ? actions.getMask!() : '{name,representation,cities{name}}',
  });

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    if (actions.refreshAction) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };

  // Validation
  const validate: (data: ServiceCounty) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceCountyCounty_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_PROFILE_ACTIVITY_COUNTIES_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceCountyCounty_View_EditDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
    refresh,
    submit,
  );

  // Dialog hooks
  const openServiceCountyCitiesRelationFormPage = useServiceCountyCitiesRelationFormPage();
  const openServiceCountyCitiesRelationViewPage = useServiceCountyCitiesRelationViewPage();

  // Action section
  const getPageTitle = (data: ServiceCounty): string => {
    return data.representation as string;
  };
  const citiesBulkDeleteAction = async (
    selectedRows: ServiceCityStored[],
  ): Promise<DialogResult<Array<ServiceCityStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceCityStored>({
        dialogTitle: t('service.County.County_View_Edit.cities.BulkDelete', { defaultValue: 'Delete' }),
        itemTitleFn: (item) => item.name!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.citiesDeleteAction) {
              await actions.citiesDeleteAction!(item, true);
            }
            successHandler();
          } catch (error) {
            errorHandler(error);
          }
        },
        onClose: async (needsRefresh) => {
          if (needsRefresh) {
            if (actions.refreshAction) {
              await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
            }
            resolve({
              result: 'submit',
              data: [],
            });
          } else {
            resolve({
              result: 'close',
              data: [],
            });
          }
        },
      });
    });
  };
  const citiesOpenFormAction = async (isDraft?: boolean, ownerValidation?: (data: any) => Promise<void>) => {
    const { result, data: returnedData } = await openServiceCountyCitiesRelationFormPage(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const citiesFilterAction = async (
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
  const citiesDeleteAction = async (target: ServiceCityStored, silentMode?: boolean) => {
    try {
      const confirmed = !silentMode
        ? await openConfirmDialog(
            'row-delete-action',
            t('judo.modal.confirm.confirm-delete', {
              defaultValue: 'Are you sure you would like to delete the selected element?',
            }),
            t('judo.modal.confirm.confirm-title', { defaultValue: 'Confirm action' }),
          )
        : true;
      if (confirmed) {
        await serviceUserProfileServiceForActivityCountiesImpl.deleteCities(target);
        if (!silentMode) {
          showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
          refreshAction(getPageQueryCustomizer());
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceCity>(error, undefined, target);
      }
    }
  };
  const citiesOpenPageAction = async (target: ServiceCity | ServiceCityStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceCityStored).__signedIdentifier)) {
      const { result, data: returnedData } = await openServiceCountyCitiesRelationFormPage(ownerData, target, true);
      // we might need to differentiate result handling between operation inputs and crud relation creates
      if (result === 'submit-draft' && returnedData) {
        const existingIndex = (payloadDiff.current.cities || []).findIndex(
          (r: { __identifier?: string }) => r.__identifier === returnedData.__identifier,
        );
        if (existingIndex > -1) {
          payloadDiff.current.cities[existingIndex] = {
            ...returnedData,
          };
        }
        storeDiff('cities', [...(payloadDiff.current.cities || [])]);
        return;
      }
    } else if (!isDraft) {
      await openServiceCountyCitiesRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const backAction = async () => {
    onClose();
  };
  const refreshAction = async (
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceCountyStored>> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const response = await serviceUserProfileServiceForActivityCountiesImpl.refresh(
        ownerData,
        getPageQueryCustomizer(),
      );
      const { data: result } = response;
      setData(result);
      setLatestViewData(result);
      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceCountyStored, any>;
      if (customActions?.postRefreshAction) {
        await customActions?.postRefreshAction(result, storeDiff, setValidation);
      }
      return response;
    } catch (error) {
      handleError(error);
      setLatestViewData(null);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };

  const actions: ServiceCountyCounty_View_EditDialogActions = {
    getPageTitle,
    citiesBulkDeleteAction,
    citiesOpenFormAction,
    citiesFilterAction,
    citiesDeleteAction,
    citiesOpenPageAction,
    backAction,
    refreshAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceCountyCounty_View_EditViewModel = {
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
    data,
    validation,
    setValidation,
    storeDiff,
    isFormUpdateable,
    isFormDeleteable,
    templateDataOverride,
    isDraft,
  };

  // Effect section
  useEffect(() => {
    actions.refreshAction!(getPageQueryCustomizer());
  }, []);

  return (
    <ServiceCountyCounty_View_EditViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_gu_zQFvREe6jm_SkPSYEYw)/RelationFeatureView"
          data-page-name="service::UserProfile::activityCounties::RelationViewPage"
        />
        <ServiceCountyCounty_View_EditDialogContainer
          ownerData={ownerData}
          onClose={onClose}
          actions={actions}
          isLoading={isLoading}
          editMode={editMode}
          refreshCounter={refreshCounter}
          data={data}
          storeDiff={storeDiff}
          isFormUpdateable={isFormUpdateable}
          isFormDeleteable={isFormDeleteable}
          validation={validation}
          setValidation={setValidation}
          submit={submit}
          isDraft={isDraft}
        />
      </Suspense>
    </ServiceCountyCounty_View_EditViewModelContext.Provider>
  );
}
