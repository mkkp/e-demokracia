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
  ServiceIssueCategoryIssueCategory_View_EditDialogActions,
  ServiceIssueCategoryIssueCategory_View_EditDialogProps,
} from '~/containers/Service/IssueCategory/IssueCategory_View_Edit/ServiceIssueCategoryIssueCategory_View_EditDialogContainer';
import { useServiceIssueCategoryIssueCategory_View_EditOwnerLinkSetSelectorPage } from '~/dialogs/Service/IssueCategory/IssueCategory_View_Edit/Owner/LinkSetSelectorPage';
import { useServiceIssueCategoryOwnerRelationViewPage } from '~/dialogs/Service/IssueCategory/Owner/RelationViewPage';
import { useServiceIssueCategorySubcategoriesRelationFormPage } from '~/dialogs/Service/IssueCategory/Subcategories/RelationFormPage';
import { useServiceIssueCategorySubcategoriesRelationViewPage } from '~/dialogs/Service/IssueCategory/Subcategories/RelationViewPage';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceIssue,
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
  ServiceIssueStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceIssueServiceForCategoriesImpl } from '~/services/data-axios/ServiceIssueServiceForCategoriesImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceIssueCategoryIssueCategory_View_EditDialogActionsExtended =
  ServiceIssueCategoryIssueCategory_View_EditDialogActions & {
    postRefreshAction?: (
      data: ServiceIssueCategoryStored,
      storeDiff: (attributeName: keyof ServiceIssueCategory, value: any) => void,
      setValidation: Dispatch<SetStateAction<Map<keyof ServiceIssueCategory, string>>>,
    ) => Promise<void>;
  };

export const SERVICE_ISSUE_CATEGORIES_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_ISSUE_CATEGORIES_RELATION_VIEW_PAGE_ACTIONS_HOOK';
export type ServiceIssueCategoryIssueCategory_View_EditActionsHook = (
  ownerData: any,
  data: ServiceIssueCategoryStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceIssueCategory, value: any) => void,
  refresh: () => Promise<void>,
  submit: () => Promise<void>,
) => ServiceIssueCategoryIssueCategory_View_EditDialogActionsExtended;

export interface ServiceIssueCategoryIssueCategory_View_EditViewModel
  extends ServiceIssueCategoryIssueCategory_View_EditDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<ServiceIssueCategory>;
  isDraft?: boolean;
}

const ServiceIssueCategoryIssueCategory_View_EditViewModelContext =
  createContext<ServiceIssueCategoryIssueCategory_View_EditViewModel>({} as any);
export const useServiceIssueCategoryIssueCategory_View_EditViewModel = () => {
  const context = useContext(ServiceIssueCategoryIssueCategory_View_EditViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceIssueCategoryIssueCategory_View_EditViewModel must be used within a(n) ServiceIssueCategoryIssueCategory_View_EditViewModelProvider',
    );
  }
  return context;
};

export const useServiceIssueCategoriesRelationViewPage = (): ((
  ownerData: any,
  templateDataOverride?: Partial<ServiceIssueCategory>,
  isDraft?: boolean,
  ownerValidation?: (data: ServiceIssueCategory) => Promise<void>,
) => Promise<DialogResult<ServiceIssueCategoryStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (
    ownerData: any,
    templateDataOverride?: Partial<ServiceIssueCategory>,
    isDraft?: boolean,
    ownerValidation?: (data: ServiceIssueCategory) => Promise<void>,
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
          <ServiceIssueCategoriesRelationViewPage
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

export const convertServiceIssueCategoriesRelationViewPagePayload = (
  attributeName: keyof ServiceIssueCategory,
  value: any,
): any => {
  return value;
};

const ServiceIssueCategoryIssueCategory_View_EditDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/IssueCategory/IssueCategory_View_Edit/ServiceIssueCategoryIssueCategory_View_EditDialogContainer'
    ),
);

export interface ServiceIssueCategoriesRelationViewPageProps {
  ownerData: any;

  templateDataOverride?: Partial<ServiceIssueCategory>;
  isDraft?: boolean;
  ownerValidation?: (data: ServiceIssueCategory) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceIssueCategoryStored, isDraft?: boolean, openCreated?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_qYyG8GksEe25ONJ3V89cVA)/RelationFeatureView
// Name: service::Issue::categories::RelationViewPage
export default function ServiceIssueCategoriesRelationViewPage(props: ServiceIssueCategoriesRelationViewPageProps) {
  const { ownerData, templateDataOverride, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceIssueServiceForCategoriesImpl = useMemo(
    () => new ServiceIssueServiceForCategoriesImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceIssueCategoryStored>({} as ServiceIssueCategoryStored);
  const [validation, setValidation] = useState<Map<keyof ServiceIssueCategory, string>>(
    new Map<keyof ServiceIssueCategory, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceIssueCategoryStored, any>>(
    {} as unknown as Record<keyof ServiceIssueCategoryStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceIssueCategory, value: any) => void = useCallback(
    (attributeName: keyof ServiceIssueCategory, value: any) => {
      payloadDiff.current![attributeName] = convertServiceIssueCategoriesRelationViewPagePayload(attributeName, value);
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

  const getPageQueryCustomizer: () => ServiceIssueCategoryQueryCustomizer = () => ({
    _mask: actions.getMask
      ? actions.getMask!()
      : '{description,title,subcategories{description,title},owner{representation}}',
  });

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    if (actions.refreshAction) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };

  // Validation
  const validate: (data: ServiceIssueCategory) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceIssueCategoryIssueCategory_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_CATEGORIES_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceIssueCategoryIssueCategory_View_EditDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, storeDiff, refresh, submit);

  // Dialog hooks
  const openServiceIssueCategoryIssueCategory_View_EditOwnerLinkSetSelectorPage =
    useServiceIssueCategoryIssueCategory_View_EditOwnerLinkSetSelectorPage();
  const openServiceIssueCategoryOwnerRelationViewPage = useServiceIssueCategoryOwnerRelationViewPage();
  const openServiceIssueCategorySubcategoriesRelationFormPage = useServiceIssueCategorySubcategoriesRelationFormPage();
  const openServiceIssueCategorySubcategoriesRelationViewPage = useServiceIssueCategorySubcategoriesRelationViewPage();

  // Action section
  const getPageTitle = (data: ServiceIssueCategory): string => {
    return t('service.IssueCategory.IssueCategory_View_Edit', { defaultValue: 'IssueCategory View / Edit' });
  };
  const backAction = async () => {
    onClose();
  };
  const refreshAction = async (
    queryCustomizer: ServiceIssueCategoryQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueCategoryStored>> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const response = await serviceIssueServiceForCategoriesImpl.refresh(ownerData, getPageQueryCustomizer());
      const { data: result } = response;
      setData(result);
      setLatestViewData(result);
      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceIssueCategoryStored, any>;
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
  const ownerAutocompleteRangeAction = async (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored[]> => {
    try {
      const { data: result } = await serviceIssueServiceForCategoriesImpl.getRangeForOwner(
        cleanUpPayload(data),
        queryCustomizer,
      );
      return result;
    } catch (error: any) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const ownerOpenSetSelectorAction = async (): Promise<ServiceServiceUserStored | undefined> => {
    const { result, data: returnedData } =
      await openServiceIssueCategoryIssueCategory_View_EditOwnerLinkSetSelectorPage(
        data,
        data.owner ? [data.owner] : [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('owner', returnedData[0]);
        return returnedData[0];
      }
    }
    return undefined;
  };
  const ownerUnsetAction = async (target: ServiceServiceUser | ServiceServiceUserStored) => {
    storeDiff('owner', null);
  };
  const ownerOpenPageAction = async (target: ServiceServiceUser | ServiceServiceUserStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceServiceUserStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceIssueCategoryOwnerRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const subcategoriesBulkDeleteAction = async (
    selectedRows: ServiceIssueCategoryStored[],
  ): Promise<DialogResult<Array<ServiceIssueCategoryStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceIssueCategoryStored>({
        dialogTitle: t('judo.action.bulk-delete', { defaultValue: 'Delete' }),
        itemTitleFn: (item) => item.title!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.subcategoriesDeleteAction) {
              await actions.subcategoriesDeleteAction!(item, true);
            }
            successHandler();
          } catch (error) {
            errorHandler(error);
          }
        },
        autoCloseOnSuccess: true,
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
  const subcategoriesOpenCreateFormAction = async (
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const {
      result,
      data: returnedData,
      openCreated,
    } = await openServiceIssueCategorySubcategoriesRelationFormPage(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
    if (openCreated && returnedData) {
      await subcategoriesOpenPageAction(returnedData!);
    }
  };
  const subcategoriesFilterAction = async (
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
  const subcategoriesDeleteAction = async (target: ServiceIssueCategoryStored, silentMode?: boolean) => {
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
        await serviceIssueServiceForCategoriesImpl.deleteSubcategories(target);
        if (!silentMode) {
          showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
          refreshAction(getPageQueryCustomizer());
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceIssueCategory>(error, undefined, target);
      } else {
        throw error;
      }
    }
  };
  const subcategoriesOpenPageAction = async (
    target: ServiceIssueCategory | ServiceIssueCategoryStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceIssueCategoryStored).__signedIdentifier)) {
      const { result, data: returnedData } = await openServiceIssueCategorySubcategoriesRelationFormPage(
        ownerData,
        target,
        true,
      );
      // we might need to differentiate result handling between operation inputs and crud relation creates
      if (result === 'submit-draft' && returnedData) {
        const existingIndex = (payloadDiff.current.subcategories || []).findIndex(
          (r: { __identifier?: string }) => r.__identifier === returnedData.__identifier,
        );
        if (existingIndex > -1) {
          payloadDiff.current.subcategories[existingIndex] = {
            ...returnedData,
          };
        }
        storeDiff('subcategories', [...(payloadDiff.current.subcategories || [])]);
        return;
      }
    } else if (!isDraft) {
      await openServiceIssueCategorySubcategoriesRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };

  const actions: ServiceIssueCategoryIssueCategory_View_EditDialogActions = {
    getPageTitle,
    backAction,
    refreshAction,
    ownerAutocompleteRangeAction,
    ownerOpenSetSelectorAction,
    ownerUnsetAction,
    ownerOpenPageAction,
    subcategoriesBulkDeleteAction,
    subcategoriesOpenCreateFormAction,
    subcategoriesFilterAction,
    subcategoriesDeleteAction,
    subcategoriesOpenPageAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceIssueCategoryIssueCategory_View_EditViewModel = {
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
    <ServiceIssueCategoryIssueCategory_View_EditViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_qYyG8GksEe25ONJ3V89cVA)/RelationFeatureView"
          data-page-name="service::Issue::categories::RelationViewPage"
        />
        <ServiceIssueCategoryIssueCategory_View_EditDialogContainer
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
    </ServiceIssueCategoryIssueCategory_View_EditViewModelContext.Provider>
  );
}
