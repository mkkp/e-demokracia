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
import { AdminCity, AdminCityQueryCustomizer, AdminCityStored, AdminUser, AdminUserStored } from '~/generated/data-api';
import { adminUserServiceImpl } from '~/generated/data-axios';

export type TableAddActivityCitiesAction = () => (
  owner: JudoIdentifiable<AdminUser>,
  successCallback: () => void,
) => Promise<void>;

export const useTableAddActivityCitiesAction: TableAddActivityCitiesAction = () => {
  const { openRangeDialog } = useRangeDialog();
  const { t } = useTranslation();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const handleActionError = useErrorHandler<JudoIdentifiable<AdminUser>>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=AddAction))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const { locale: l10nLocale } = useL10N();
  const title: string = t('admin.UserView.activityCities.activityCities.TableAdd', { defaultValue: 'Add' });

  return async function tableAddActivityCitiesAction(owner: JudoIdentifiable<AdminUser>, successCallback: () => void) {
    const columns: GridColDef<AdminCityStored>[] = [
      {
        ...baseColumnConfig,
        field: 'representation',
        headerName: t('admin.UserView.activityCities.representation', { defaultValue: 'City' }) as string,

        width: 230,
        type: 'string',
      },
    ];

    const filterOptions: FilterOption[] = [
      {
        id: 'FilteredemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityActivityCitiesActivityCitiesActivityCitiesLabelWrapperActivityCitiesRepresentationFilter',
        attributeName: 'representation',
        label: t('admin.UserView.activityCities.representation', { defaultValue: 'City' }) as string,
        filterType: FilterType.string,
      },
    ];

    const sortModel: GridSortModel = [{ field: 'representation', sort: 'asc' }];

    const initialQueryCustomizer: AdminCityQueryCustomizer = {
      _mask: '{representation}',
      _orderBy: sortModel.length
        ? [
            {
              attribute: sortModel[0].field,
              descending: sortModel[0].sort === 'desc',
            },
          ]
        : [],
    };

    const res = await openRangeDialog<AdminCityStored, AdminCityQueryCustomizer>({
      id: 'AddActionedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewEdemokraciaAdminAdminEdemokraciaAdminUserActivityCitiesTableAdd',
      columns,
      defaultSortField: sortModel[0],
      rangeCall: async (queryCustomizer) =>
        await adminUserServiceImpl.getRangeForActivityCities(owner, processQueryCustomizer(queryCustomizer)),
      single: false,
      alreadySelectedItems: '',
      filterOptions,
      initialQueryCustomizer,
    });

    if (res === undefined) return;

    try {
      await adminUserServiceImpl.addActivityCities(
        { __signedIdentifier: owner.__signedIdentifier } as JudoIdentifiable<AdminCityStored>,
        res as Array<AdminCityStored>,
      );

      successCallback();
    } catch (error) {
      handleActionError(error, undefined, owner);
    }
  };
};
