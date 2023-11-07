//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'/index.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, lazy, Suspense } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import type { GridFilterModel } from '@mui/x-data-grid';
import type { Filter, FilterOption } from '~/components-api';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import { toastConfig } from '~/config';
import { useCRUDDialog } from '~/hooks';
import {
  passesLocalValidation,
  processQueryCustomizer,
  uiDateToServiceDate,
  uiTimeToServiceTime,
  useErrorHandler,
} from '~/utilities';
import type { DialogResult } from '~/utilities';
import { useServiceIssueCategoryIssueCategory_View_EditOwnerTabularReferenceFieldLinkSetSelectorPage } from '~/dialogs/Service/IssueCategory/IssueCategory_View_Edit/Owner/TabularReferenceField/Link/Set/Selector/Page';
import { useServiceIssueCategoryOwnerRelationViewPage } from '~/dialogs/Service/IssueCategory/Owner/Relation/View/Page';
import { useServiceIssueCategorySubcategoriesRelationFormPage } from '~/dialogs/Service/IssueCategory/Subcategories/Relation/Form/Page';
import { useServiceIssueCategorySubcategoriesRelationViewPage } from '~/dialogs/Service/IssueCategory/Subcategories/Relation/View/Page';
import type { ServiceIssueCategoryIssueCategory_View_EditDialogActions } from '~/containers/Service/IssueCategory/IssueCategory_View_Edit/ServiceIssueCategoryIssueCategory_View_EditDialogContainer';
import type {
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
import { userServiceForAdminCategoriesImpl } from '~/services/data-axios';

export const useServiceUserAdminCategoriesAccessViewPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceIssueCategoryStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any) =>
    new Promise((resolve) => {
      createDialog({
        fullWidth: true,
        maxWidth: 'md',
        onClose: (event: object, reason: string) => {
          if (reason !== 'backdropClick') {
            closeDialog();
            resolve({
              result: 'close',
            });
          }
        },
        children: (
          <ServiceUserAdminCategoriesAccessViewPage
            ownerData={ownerData}
            onClose={() => {
              closeDialog();
              resolve({
                result: 'close',
              });
            }}
            onSubmit={(result) => {
              closeDialog();
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

export const convertServiceUserAdminCategoriesAccessViewPagePayload = (
  attributeName: keyof ServiceIssueCategory,
  value: any,
): any => {
  const dateTypes: string[] = [];
  const dateTimeTypes: string[] = [];
  const timeTypes: string[] = [];
  if (dateTypes.includes(attributeName as string)) {
    return uiDateToServiceDate(value);
  } else if (dateTimeTypes.includes(attributeName as string)) {
    return value;
  } else if (timeTypes.includes(attributeName as string)) {
    return uiTimeToServiceTime(value);
  }
  return value;
};

const ServiceIssueCategoryIssueCategory_View_EditDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/IssueCategory/IssueCategory_View_Edit/ServiceIssueCategoryIssueCategory_View_EditDialogContainer'
    ),
);

export interface ServiceUserAdminCategoriesAccessViewPageProps {
  ownerData: any;

  onClose: () => void;
  onSubmit: (result?: ServiceIssueCategoryStored) => void;
}

// Name: service::User::adminCategories::Access::View::Page
export default function ServiceUserAdminCategoriesAccessViewPage(props: ServiceUserAdminCategoriesAccessViewPageProps) {
  const { ownerData, onClose, onSubmit } = props;

  // Hooks section
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const { navigate, back } = useJudoNavigation();
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
      payloadDiff.current![attributeName] = convertServiceUserAdminCategoriesAccessViewPagePayload(
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

  const pageQueryCustomizer: ServiceIssueCategoryQueryCustomizer = {
    _mask: '{description,title,subcategories{title,description},owner{representation}}',
  };

  // Dialog hooks
  const openServiceIssueCategoryIssueCategory_View_EditOwnerTabularReferenceFieldLinkSetSelectorPage =
    useServiceIssueCategoryIssueCategory_View_EditOwnerTabularReferenceFieldLinkSetSelectorPage();
  const openServiceIssueCategoryOwnerRelationViewPage = useServiceIssueCategoryOwnerRelationViewPage();
  const openServiceIssueCategorySubcategoriesRelationFormPage = useServiceIssueCategorySubcategoriesRelationFormPage();
  const openServiceIssueCategorySubcategoriesRelationViewPage = useServiceIssueCategorySubcategoriesRelationViewPage();

  // Calculated section
  const title: string = t('Service.IssueCategory.IssueCategory_View_Edit', {
    defaultValue: 'IssueCategory View / Edit',
  });

  // Action section
  const serviceIssueCategoryIssueCategory_View_EditBack = async () => {
    onClose();
  };
  const serviceIssueCategoryIssueCategory_View_EditRefresh = async (
    queryCustomizer: ServiceIssueCategoryQueryCustomizer,
  ): Promise<ServiceIssueCategoryStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await userServiceForAdminCategoriesImpl.refresh(ownerData, pageQueryCustomizer);

      setData(result);

      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceIssueCategoryStored, any>;

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const serviceIssueCategoryIssueCategory_View_EditCancel = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await serviceIssueCategoryIssueCategory_View_EditRefresh(processQueryCustomizer(pageQueryCustomizer));
  };
  const serviceIssueCategoryIssueCategory_View_EditUpdate = async () => {
    setIsLoading(true);

    try {
      const res = await userServiceForAdminCategoriesImpl.update(payloadDiff.current);

      if (res) {
        enqueueSnackbar(t('judo.action.save.success', { defaultValue: 'Changes saved' }), {
          variant: 'success',
          ...toastConfig.success,
        });
        setValidation(new Map<keyof ServiceIssueCategory, string>());
        await actions.serviceIssueCategoryIssueCategory_View_EditRefresh!(pageQueryCustomizer);
        setEditMode(false);
      }
    } catch (error) {
      handleError<ServiceIssueCategory>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const serviceIssueCategoryIssueCategory_View_EditDelete = async () => {
    try {
      const confirmed = await openConfirmDialog(
        'row-delete-action',
        t('judo.modal.confirm.confirm-delete', {
          defaultValue: 'Are you sure you would like to delete the selected element?',
        }),
        t('judo.modal.confirm.confirm-title', { defaultValue: 'Confirm action' }),
      );
      if (confirmed) {
        await userServiceForAdminCategoriesImpl.delete(data);

        enqueueSnackbar(t('judo.action.delete.success', { defaultValue: 'Delete successful' }), {
          variant: 'success',
          ...toastConfig.success,
        });

        onClose();
      }
    } catch (error) {
      handleError(error, undefined, data);
    }
  };
  const serviceIssueCategoryIssueCategory_View_EditSubcategoriesView = async (target?: ServiceIssueCategoryStored) => {
    await openServiceIssueCategorySubcategoriesRelationViewPage(target!);

    if (!editMode) {
      await actions.serviceIssueCategoryIssueCategory_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const serviceIssueCategoryIssueCategory_View_EditSubcategoriesFilter = async (
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
  const serviceIssueCategoryIssueCategory_View_EditSubcategoriesCreateOpen = async () => {
    const { result, data: returnedData } = await openServiceIssueCategorySubcategoriesRelationFormPage(data);
    if (!editMode) {
      await actions.serviceIssueCategoryIssueCategory_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const serviceIssueCategoryIssueCategory_View_EditSubcategoriesDelete = async (
    target: ServiceIssueCategoryStored,
    silentMode?: boolean,
  ) => {
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
        await userServiceForAdminCategoriesImpl.deleteSubcategories(target);

        if (!silentMode) {
          enqueueSnackbar(t('judo.action.delete.success', { defaultValue: 'Delete successful' }), {
            variant: 'success',
            ...toastConfig.success,
          });

          serviceIssueCategoryIssueCategory_View_EditRefresh(pageQueryCustomizer);
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceIssueCategory>(error, undefined, target);
      }
    }
  };
  const serviceIssueCategoryIssueCategory_View_EditSubcategoriesBulkDelete = async (
    selectedRows: ServiceIssueCategoryStored[],
  ): Promise<DialogResult<Array<ServiceIssueCategoryStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceIssueCategoryStored>({
        dialogTitle: t('TMP', { defaultValue: 'Delete' }),
        itemTitleFn: (item) => item.title!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.serviceIssueCategoryIssueCategory_View_EditSubcategoriesDelete) {
              await actions.serviceIssueCategoryIssueCategory_View_EditSubcategoriesDelete!(item, true);
            }
            successHandler();
          } catch (error) {
            errorHandler(error);
          }
        },
        onClose: async (needsRefresh) => {
          if (needsRefresh) {
            if (actions.serviceIssueCategoryIssueCategory_View_EditRefresh) {
              await actions.serviceIssueCategoryIssueCategory_View_EditRefresh!(
                processQueryCustomizer(pageQueryCustomizer),
              );
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
  const serviceIssueCategoryIssueCategory_View_EditOwnerView = async (target?: ServiceServiceUserStored) => {
    await openServiceIssueCategoryOwnerRelationViewPage(target!);

    if (!editMode) {
      await actions.serviceIssueCategoryIssueCategory_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const serviceIssueCategoryIssueCategory_View_EditOwnerSetOpenSelector = async () => {
    const { result, data: returnedData } =
      await openServiceIssueCategoryIssueCategory_View_EditOwnerTabularReferenceFieldLinkSetSelectorPage(
        data,
        data.owner ? [data.owner] : [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('owner', returnedData[0]);
      }
    }
  };
  const serviceIssueCategoryIssueCategory_View_EditOwnerAutocomplete = async (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored[]> => {
    try {
      return userServiceForAdminCategoriesImpl.getRangeForOwner(data, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const serviceIssueCategoryIssueCategory_View_EditOwnerUnset = async (target: ServiceServiceUserStored) => {
    storeDiff('owner', null);
  };

  const actions: ServiceIssueCategoryIssueCategory_View_EditDialogActions = {
    serviceIssueCategoryIssueCategory_View_EditBack,
    serviceIssueCategoryIssueCategory_View_EditRefresh,
    serviceIssueCategoryIssueCategory_View_EditCancel,
    serviceIssueCategoryIssueCategory_View_EditUpdate,
    serviceIssueCategoryIssueCategory_View_EditDelete,
    serviceIssueCategoryIssueCategory_View_EditSubcategoriesView,
    serviceIssueCategoryIssueCategory_View_EditSubcategoriesFilter,
    serviceIssueCategoryIssueCategory_View_EditSubcategoriesCreateOpen,
    serviceIssueCategoryIssueCategory_View_EditSubcategoriesDelete,
    serviceIssueCategoryIssueCategory_View_EditSubcategoriesBulkDelete,
    serviceIssueCategoryIssueCategory_View_EditOwnerView,
    serviceIssueCategoryIssueCategory_View_EditOwnerSetOpenSelector,
    serviceIssueCategoryIssueCategory_View_EditOwnerAutocomplete,
    serviceIssueCategoryIssueCategory_View_EditOwnerUnset,
  };

  // Effect section
  useEffect(() => {
    actions.serviceIssueCategoryIssueCategory_View_EditRefresh!(pageQueryCustomizer);
  }, []);

  return (
    <>
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
        />
      </Suspense>
    </>
  );
}
