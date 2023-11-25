//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { useState, lazy, Suspense } from 'react';
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
import type { ServiceIssueCategoryIssueCategory_TableAddSelectorDialogActions } from '~/containers/Service/IssueCategory/IssueCategory_Table/AddSelector/ServiceIssueCategoryIssueCategory_TableAddSelectorDialogContainer';
import type {
  ServiceIssue,
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
  ServiceIssueStored,
} from '~/services/data-api';
import { serviceIssueServiceForCategoriesImpl } from '~/services/data-axios';
export type ServiceIssueCategoryIssueCategory_TableAddSelectorDialogActionsExtended =
  ServiceIssueCategoryIssueCategory_TableAddSelectorDialogActions & {};

export const SERVICE_ISSUE_ISSUE_VIEW_EDIT_OTHER_CATEGORIES_CATEGORIES_TABLE_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceIssueCategoryIssueCategory_TableAddSelectorActionsHook';
export type ServiceIssueCategoryIssueCategory_TableAddSelectorActionsHook = (
  ownerData: any,
  data: ServiceIssueCategoryStored[],
  editMode: boolean,
  selectionDiff: ServiceIssueCategoryStored[],
) => ServiceIssueCategoryIssueCategory_TableAddSelectorDialogActionsExtended;

export const useServiceIssueIssue_View_EditOtherCategoriesCategoriesTableSetSelectorPage = (): ((
  ownerData: any,
  alreadySelected: ServiceIssueCategoryStored[],
) => Promise<DialogResult<ServiceIssueCategoryStored[]>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any, alreadySelected: ServiceIssueCategoryStored[]) =>
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
          <ServiceIssueIssue_View_EditOtherCategoriesCategoriesTableSetSelectorPage
            ownerData={ownerData}
            alreadySelected={alreadySelected}
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

const ServiceIssueCategoryIssueCategory_TableAddSelectorDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/IssueCategory/IssueCategory_Table/AddSelector/ServiceIssueCategoryIssueCategory_TableAddSelectorDialogContainer'
    ),
);

export interface ServiceIssueIssue_View_EditOtherCategoriesCategoriesTableSetSelectorPageProps {
  ownerData: any;
  alreadySelected: ServiceIssueCategoryStored[];
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceIssueCategoryStored[]) => Promise<void>;
}

// XMIID: User/(esm/_LRJ3AId9Ee2kLcMqsIbMgQ)/TabularReferenceFieldTableAddSelectorPageDefinition
// Name: service::Issue::Issue_View_Edit::other::categories::categories::TableSetSelectorPage
export default function ServiceIssueIssue_View_EditOtherCategoriesCategoriesTableSetSelectorPage(
  props: ServiceIssueIssue_View_EditOtherCategoriesCategoriesTableSetSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit } = props;

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
  const [data, setData] = useState<ServiceIssueCategoryStored[]>([]);
  const [selectionDiff, setSelectionDiff] = useState<ServiceIssueCategoryStored[]>([]);

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceIssueCategoryIssueCategory_TableAddSelectorActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_ISSUE_VIEW_EDIT_OTHER_CATEGORIES_CATEGORIES_TABLE_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceIssueCategoryIssueCategory_TableAddSelectorDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, selectionDiff);

  // Dialog hooks

  // Calculated section
  const title: string = t('service.IssueCategory.IssueCategory_Table.AddSelector', {
    defaultValue: 'IssueCategory Table',
  });

  // Action section
  const addAction = async (selected: ServiceIssueCategoryStored[]) => {
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
    queryCustomizer: ServiceIssueCategoryQueryCustomizer,
  ): Promise<ServiceIssueCategoryStored[]> => {
    try {
      return serviceIssueServiceForCategoriesImpl.getRangeForCategories(ownerData, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };

  const actions: ServiceIssueCategoryIssueCategory_TableAddSelectorDialogActions = {
    addAction,
    backAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // Effect section

  return (
    <div
      id="User/(esm/_LRJ3AId9Ee2kLcMqsIbMgQ)/TabularReferenceFieldTableAddSelectorPageDefinition"
      data-page-name="service::Issue::Issue_View_Edit::other::categories::categories::TableSetSelectorPage"
    >
      <Suspense>
        <ServiceIssueCategoryIssueCategory_TableAddSelectorDialogContainer
          ownerData={ownerData}
          onClose={onClose}
          title={title}
          actions={actions}
          isLoading={isLoading}
          editMode={editMode}
          refreshCounter={refreshCounter}
          selectionDiff={selectionDiff}
          setSelectionDiff={setSelectionDiff}
          alreadySelected={alreadySelected}
        />
      </Suspense>
    </div>
  );
}
