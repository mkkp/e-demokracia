//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionsForPages(#application)
// Path expression: #pagePath(#getActionContainer(#self))+'actions/'+#pageActionPathSuffix(#self)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx
// Template file: actor/src/pages/actions/action.tsx.hbs
// Action: AddAction

import type { JudoIdentifiable } from '@judo/data-api-common';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import type {
  GridColDef,
  GridFilterModel,
  GridRenderCellParams,
  GridRowParams,
  GridSortModel,
  GridValueFormatterParams,
} from '@mui/x-data-grid';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useSnackbar } from 'notistack';
import { MdiIcon } from '~/components';
import { useRangeDialog } from '~/components/dialog';
import { FilterOption, FilterType } from '~/components-api';
import { baseColumnConfig, toastConfig } from '~/config';
import { useL10N } from '~/l10n/l10n-context';
import {
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
  processQueryCustomizer,
  fileHandling,
  serviceDateToUiDate,
  serviceTimeToUiTime,
} from '~/utilities';
import {
  AdminIssue,
  AdminIssueCategory,
  AdminIssueCategoryQueryCustomizer,
  AdminIssueCategoryStored,
  AdminIssueStored,
} from '~/generated/data-api';
import { adminIssueServiceForClassImpl } from '~/generated/data-axios';

export type TableAddCategoriesAction = () => (
  owner: JudoIdentifiable<AdminIssue>,
  successCallback: () => void,
) => Promise<void>;

export const useTableAddCategoriesAction: TableAddCategoriesAction = () => {
  const { openRangeDialog } = useRangeDialog();
  const { t } = useTranslation();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const handleActionError = useErrorHandler<JudoIdentifiable<AdminIssue>>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=AddAction))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const { locale: l10nLocale } = useL10N();
  const title: string = t('admin.IssueView.categories.categories.TableAdd', { defaultValue: 'Add' });

  return async function tableAddCategoriesAction(owner: JudoIdentifiable<AdminIssue>, successCallback: () => void) {
    const columns: GridColDef<AdminIssueCategoryStored>[] = [
      {
        ...baseColumnConfig,
        field: 'title',
        headerName: t('admin.IssueView.categories.title', { defaultValue: 'Title' }) as string,

        width: 230,
        type: 'string',
        filterable: false && true,
      },
      {
        ...baseColumnConfig,
        field: 'description',
        headerName: t('admin.IssueView.categories.description', { defaultValue: 'Description' }) as string,

        width: 230,
        type: 'string',
        filterable: false && true,
      },
    ];

    const filterOptions: FilterOption[] = [
      {
        id: 'FilteredemokraciaAdminAdminEdemokraciaAdminVoteDefinitionIssueViewDefaultIssueViewOtherCategoriesCategoriesCategoriesLabelWrapperCategoriesTitleFilter',
        attributeName: 'title',
        label: t('admin.IssueView.categories.title', { defaultValue: 'Title' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'FilteredemokraciaAdminAdminEdemokraciaAdminVoteDefinitionIssueViewDefaultIssueViewOtherCategoriesCategoriesCategoriesLabelWrapperCategoriesDescriptionFilter',
        attributeName: 'description',
        label: t('admin.IssueView.categories.description', { defaultValue: 'Description' }) as string,
        filterType: FilterType.string,
      },
    ];

    const sortModel: GridSortModel = [{ field: 'title', sort: null }];

    const initialQueryCustomizer: AdminIssueCategoryQueryCustomizer = {
      _mask: '{title,description}',
      _orderBy: sortModel.length
        ? [
            {
              attribute: sortModel[0].field,
              descending: sortModel[0].sort === 'desc',
            },
          ]
        : [],
    };

    const res = await openRangeDialog<AdminIssueCategoryStored, AdminIssueCategoryQueryCustomizer>({
      id: 'AddActionedemokraciaAdminAdminEdemokraciaAdminVoteDefinitionIssueViewEdemokraciaAdminAdminEdemokraciaAdminIssueCategoriesTableAdd',
      columns,
      defaultSortField: sortModel[0],
      rangeCall: async (queryCustomizer) =>
        await adminIssueServiceForClassImpl.getRangeForCategories(owner, processQueryCustomizer(queryCustomizer)),
      single: false,
      alreadySelectedItems: '',
      filterOptions,
      initialQueryCustomizer,
    });

    if (res === undefined) return;

    try {
      await adminIssueServiceForClassImpl.addCategories(
        { __signedIdentifier: owner.__signedIdentifier } as JudoIdentifiable<AdminIssueCategoryStored>,
        res.value as Array<AdminIssueCategoryStored>,
      );

      successCallback();
    } catch (error) {
      handleActionError(error, undefined, owner);
    }
  };
};
