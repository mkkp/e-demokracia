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
import { Button, ButtonGroup } from '@mui/material';
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
  ServiceIssue,
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
  ServiceIssueStored,
} from '~/generated/data-api';
import { serviceIssueServiceForClassImpl } from '~/generated/data-axios';

export type TableAddCategoriesAction = () => (
  owner: JudoIdentifiable<ServiceIssue>,
  successCallback: () => void,
) => Promise<void>;

export const useTableAddCategoriesAction: TableAddCategoriesAction = () => {
  const { openRangeDialog } = useRangeDialog();
  const { t } = useTranslation();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const handleActionError = useErrorHandler<JudoIdentifiable<ServiceIssue>>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=AddAction))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const { locale: l10nLocale } = useL10N();
  const title: string = t('service.IssueView.categories.categories.TableAdd', { defaultValue: 'Add' });

  return async function tableAddCategoriesAction(owner: JudoIdentifiable<ServiceIssue>, successCallback: () => void) {
    const columns: GridColDef<ServiceIssueCategoryStored>[] = [
      {
        ...baseColumnConfig,
        field: 'title',
        headerName: t('service.IssueView.categories.title', { defaultValue: 'Title' }) as string,

        width: 230,
        type: 'string',
        filterable: false && true,
      },
      {
        ...baseColumnConfig,
        field: 'description',
        headerName: t('service.IssueView.categories.description', { defaultValue: 'Description' }) as string,

        width: 230,
        type: 'string',
        filterable: false && true,
      },
    ];

    const filterOptions: FilterOption[] = [
      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInActivityCitiesViewDefaultIssueViewEditOtherCategoriesCategoriesCategoriesLabelWrapperCategoriesTitleFilter',
        attributeName: 'title',
        label: t('service.IssueView.categories.title', { defaultValue: 'Title' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInActivityCitiesViewDefaultIssueViewEditOtherCategoriesCategoriesCategoriesLabelWrapperCategoriesDescriptionFilter',
        attributeName: 'description',
        label: t('service.IssueView.categories.description', { defaultValue: 'Description' }) as string,
        filterType: FilterType.string,
      },
    ];

    const sortModel: GridSortModel = [{ field: 'title', sort: null }];

    const initialQueryCustomizer: ServiceIssueCategoryQueryCustomizer = {
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

    const res = await openRangeDialog<ServiceIssueCategoryStored, ServiceIssueCategoryQueryCustomizer>({
      id: 'AddActionedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInActivityCitiesViewEdemokraciaServiceUserEdemokraciaServiceIssueCategoriesTableAdd',
      columns,
      defaultSortField: sortModel[0],
      rangeCall: async (queryCustomizer) =>
        await serviceIssueServiceForClassImpl.getRangeForCategories(owner, processQueryCustomizer(queryCustomizer)),
      single: false,
      filterOptions,
      initialQueryCustomizer,
    });

    if (res === undefined) return;

    try {
      await serviceIssueServiceForClassImpl.addCategories(
        { __signedIdentifier: owner.__signedIdentifier } as JudoIdentifiable<ServiceIssueCategoryStored>,
        res.value as Array<ServiceIssueCategoryStored>,
      );

      successCallback();
    } catch (error) {
      handleActionError(error, undefined, owner);
    }
  };
};
