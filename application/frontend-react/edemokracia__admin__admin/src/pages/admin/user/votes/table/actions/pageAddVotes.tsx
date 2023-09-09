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
  AdminSimpleVote,
  AdminSimpleVoteQueryCustomizer,
  AdminSimpleVoteStored,
  AdminUser,
  AdminUserStored,
} from '~/generated/data-api';
import { adminUserServiceForClassImpl } from '~/generated/data-axios';

export type PageAddVotesAction = () => (
  owner: JudoIdentifiable<AdminUser>,
  successCallback: () => void,
) => Promise<void>;

export const usePageAddVotesAction: PageAddVotesAction = () => {
  const { openRangeDialog } = useRangeDialog();
  const { t } = useTranslation();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const handleActionError = useErrorHandler<JudoIdentifiable<AdminUser>>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=AddAction))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const { locale: l10nLocale } = useL10N();
  const title: string = t('admin.SimpleVoteTable.votes.votes.PageAdd', { defaultValue: 'Add' });

  return async function pageAddVotesAction(owner: JudoIdentifiable<AdminUser>, successCallback: () => void) {
    const columns: GridColDef<AdminSimpleVoteStored>[] = [
      {
        ...baseColumnConfig,
        field: 'created',
        headerName: t('admin.SimpleVoteTable.votes.created', { defaultValue: 'Created' }) as string,

        width: 170,
        type: 'dateTime',
        filterable: false && true,
        valueGetter: ({ value }) => value && serviceDateToUiDate(value),
        valueFormatter: ({ value }: GridValueFormatterParams<Date>) => {
          return (
            value &&
            new Intl.DateTimeFormat(l10nLocale, {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: false,
            }).format(value)
          );
        },
      },
      {
        ...baseColumnConfig,
        field: 'type',
        headerName: t('admin.SimpleVoteTable.votes.type', { defaultValue: 'Type' }) as string,

        width: 170,
        type: 'singleSelect',
        filterable: false && true,
        sortable: false,
        valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
          return t(`enumerations.EdemokraciaSimpleVoteType.${value}`, { defaultValue: value });
        },
        description: t('judo.pages.table.column.not-sortable', {
          defaultValue: 'This column is not sortable.',
        }) as string,
      },
    ];

    const filterOptions: FilterOption[] = [
      {
        id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserVotesTableDefaultVotesVoteTableCreatedFilter',
        attributeName: 'created',
        label: t('admin.SimpleVoteTable.votes.created', { defaultValue: 'Created' }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserVotesTableDefaultVotesVoteTableTypeFilter',
        attributeName: 'type',
        label: t('admin.SimpleVoteTable.votes.type', { defaultValue: 'Type' }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['UP', 'DOWN'],
      },
    ];

    const sortModel: GridSortModel = [{ field: 'created', sort: null }];

    const initialQueryCustomizer: AdminSimpleVoteQueryCustomizer = {
      _mask: '{created,type}',
      _orderBy: sortModel.length
        ? [
            {
              attribute: sortModel[0].field,
              descending: sortModel[0].sort === 'desc',
            },
          ]
        : [],
    };

    const res = await openRangeDialog<AdminSimpleVoteStored, AdminSimpleVoteQueryCustomizer>({
      id: 'AddActionedemokraciaAdminAdminEdemokraciaAdminUserVotesTableEdemokraciaAdminAdminEdemokraciaAdminUserVotesPageAdd',
      columns,
      defaultSortField: sortModel[0],
      rangeCall: async (queryCustomizer) =>
        await adminUserServiceForClassImpl.getRangeForVotes(owner, processQueryCustomizer(queryCustomizer)),
      single: false,
      filterOptions,
      initialQueryCustomizer,
    });

    if (res === undefined) return;

    try {
      await adminUserServiceForClassImpl.addVotes(
        { __signedIdentifier: owner.__signedIdentifier } as JudoIdentifiable<AdminSimpleVoteStored>,
        res.value as Array<AdminSimpleVoteStored>,
      );

      successCallback();
    } catch (error) {
      handleActionError(error, undefined, owner);
    }
  };
};
