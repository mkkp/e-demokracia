//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, useMemo, lazy, Suspense } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import type { GridFilterModel } from '@mui/x-data-grid';
import type { Filter, FilterOption } from '~/components-api';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import { useSnacks, useCRUDDialog } from '~/hooks';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';
import { useServiceIssueCategoryIssueCategory_View_EditOwnerLinkSetSelectorPage } from '~/dialogs/Service/IssueCategory/IssueCategory_View_Edit/Owner/LinkSetSelectorPage';
import { useServiceIssueCategoryOwnerRelationViewPage } from '~/dialogs/Service/IssueCategory/Owner/RelationViewPage';
import { useServiceIssueCategorySubcategoriesRelationFormPage } from '~/dialogs/Service/IssueCategory/Subcategories/RelationFormPage';
import { useServiceIssueCategorySubcategoriesRelationViewPage } from '~/dialogs/Service/IssueCategory/Subcategories/RelationViewPage';
import type { ServiceIssueCategoryIssueCategory_View_EditDialogActions } from '~/containers/Service/IssueCategory/IssueCategory_View_Edit/ServiceIssueCategoryIssueCategory_View_EditDialogContainer';
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
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceIssueCategoryServiceImpl } from '~/services/data-axios/ServiceIssueCategoryServiceImpl';

export type ServiceIssueCategoryIssueCategory_View_EditDialogActionsExtended =
  ServiceIssueCategoryIssueCategory_View_EditDialogActions & {
    postRefreshAction?: (
      data: ServiceIssueCategoryStored,
      storeDiff: (attributeName: keyof ServiceIssueCategory, value: any) => void,
      setValidation: Dispatch<SetStateAction<Map<keyof ServiceIssueCategory, string>>>,
    ) => Promise<void>;
  };

export const SERVICE_ISSUE_CATEGORIES_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceIssueCategoryIssueCategory_View_EditActionsHook';
export type ServiceIssueCategoryIssueCategory_View_EditActionsHook = (
  ownerData: any,
  data: ServiceIssueCategoryStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceIssueCategory, value: any) => void,
) => ServiceIssueCategoryIssueCategory_View_EditDialogActionsExtended;

export const useServiceIssueCategoriesRelationViewPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceIssueCategoryStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any) =>
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
            onClose={async () => {
              await closeDialog();
              resolve({
                result: 'close',
              });
            }}
            onSubmit={async (result) => {
              await closeDialog();
              resolve({
                result: 'submit',
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

  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceIssueCategoryStored) => Promise<void>;
}

// XMIID: User/(esm/_qYyG8GksEe25ONJ3V89cVA)/RelationFeatureView
// Name: service::Issue::categories::RelationViewPage
export default function ServiceIssueCategoriesRelationViewPage(props: ServiceIssueCategoriesRelationViewPageProps) {
  const { ownerData, onClose, onSubmit } = props;

  // Services
  const serviceIssueCategoryServiceImpl = useMemo(() => new ServiceIssueCategoryServiceImpl(judoAxiosProvider), []);

  // Hooks section
  const { t } = useTranslation();
  const { showSuccessSnack, showErrorSnack } = useSnacks();
  const { navigate, back: navigateBack } = useJudoNavigation();
  const { openFilterDialog } = useFilterDialog();
  const { openConfirmDialog } = useConfirmDialog();
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

  const pageQueryCustomizer: ServiceIssueCategoryQueryCustomizer = {
    _mask: '{description,title,subcategories{title,description},owner{representation}}',
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceIssueCategoryIssueCategory_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_CATEGORIES_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceIssueCategoryIssueCategory_View_EditDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, storeDiff);

  // Dialog hooks
  const openServiceIssueCategoryIssueCategory_View_EditOwnerLinkSetSelectorPage =
    useServiceIssueCategoryIssueCategory_View_EditOwnerLinkSetSelectorPage();
  const openServiceIssueCategoryOwnerRelationViewPage = useServiceIssueCategoryOwnerRelationViewPage();
  const openServiceIssueCategorySubcategoriesRelationFormPage = useServiceIssueCategorySubcategoriesRelationFormPage();
  const openServiceIssueCategorySubcategoriesRelationViewPage = useServiceIssueCategorySubcategoriesRelationViewPage();

  // Calculated section
  const title: string = t('service.IssueCategory.IssueCategory_View_Edit', {
    defaultValue: 'IssueCategory View / Edit',
  });

  // Private actions
  const submit = async () => {};

  // Action section
  const backAction = async () => {
    onClose();
  };
  const refreshAction = async (
    queryCustomizer: ServiceIssueCategoryQueryCustomizer,
  ): Promise<ServiceIssueCategoryStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceIssueCategoryServiceImpl.refresh(ownerData, pageQueryCustomizer);
      setData(result);
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
      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const ownerOpenPageAction = async (target?: ServiceServiceUserStored) => {
    await openServiceIssueCategoryOwnerRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const ownerOpenSetSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceIssueCategoryIssueCategory_View_EditOwnerLinkSetSelectorPage(
        data,
        data.owner ? [data.owner] : [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('owner', returnedData[0]);
      }
    }
  };
  const ownerAutocompleteRangeAction = async (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored[]> => {
    try {
      return serviceIssueCategoryServiceImpl.getRangeForOwner(data, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const ownerUnsetAction = async (target: ServiceServiceUserStored) => {
    storeDiff('owner', null);
  };
  const subcategoriesOpenPageAction = async (target?: ServiceIssueCategoryStored) => {
    await openServiceIssueCategorySubcategoriesRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  const subcategoriesOpenFormAction = async () => {
    const { result, data: returnedData } = await openServiceIssueCategorySubcategoriesRelationFormPage(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
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
        await serviceIssueCategoryServiceImpl.deleteSubcategories(target);
        if (!silentMode) {
          showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
          refreshAction(pageQueryCustomizer);
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceIssueCategory>(error, undefined, target);
      }
    }
  };
  const subcategoriesBulkDeleteAction = async (
    selectedRows: ServiceIssueCategoryStored[],
  ): Promise<DialogResult<Array<ServiceIssueCategoryStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceIssueCategoryStored>({
        dialogTitle: t('service.IssueCategory.IssueCategory_View_Edit.subcategories.BulkDelete', {
          defaultValue: 'Delete',
        }),
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
        onClose: async (needsRefresh) => {
          if (needsRefresh) {
            if (actions.refreshAction) {
              await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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

  const actions: ServiceIssueCategoryIssueCategory_View_EditDialogActions = {
    backAction,
    refreshAction,
    ownerOpenPageAction,
    ownerOpenSetSelectorAction,
    ownerAutocompleteRangeAction,
    ownerUnsetAction,
    subcategoriesOpenPageAction,
    subcategoriesFilterAction,
    subcategoriesOpenFormAction,
    subcategoriesDeleteAction,
    subcategoriesBulkDeleteAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    actions.refreshAction!(pageQueryCustomizer);
  }, []);

  return (
    <div
      id="User/(esm/_qYyG8GksEe25ONJ3V89cVA)/RelationFeatureView"
      data-page-name="service::Issue::categories::RelationViewPage"
    >
      <Suspense>
        <ServiceIssueCategoryIssueCategory_View_EditDialogContainer
          ownerData={ownerData}
          onClose={onClose}
          title={title}
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
        />
      </Suspense>
    </div>
  );
}
