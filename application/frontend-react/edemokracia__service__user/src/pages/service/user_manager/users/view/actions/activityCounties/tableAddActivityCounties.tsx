//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionsForViewDialogs(#application)
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
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceServiceUser,
  ServiceServiceUserStored,
} from '~/generated/data-api';
import { serviceServiceUserServiceForClassImpl } from '~/generated/data-axios';

export type TableAddActivityCountiesAction = () => (
  owner: JudoIdentifiable<ServiceServiceUser>,
  successCallback: () => void,
) => Promise<void>;

export const useTableAddActivityCountiesAction: TableAddActivityCountiesAction = () => {
  const { openRangeDialog } = useRangeDialog();
  const { t } = useTranslation();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const handleActionError = useErrorHandler<JudoIdentifiable<ServiceServiceUser>>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=AddAction))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const { locale: l10nLocale } = useL10N();
  const title: string = t('service.ServiceUserView.activityCounties.activityCounties.TableAdd', {
    defaultValue: 'Add',
  });

  return async function tableAddActivityCountiesAction(
    owner: JudoIdentifiable<ServiceServiceUser>,
    successCallback: () => void,
  ) {
    const columns: GridColDef<ServiceCountyStored>[] = [
      {
        ...baseColumnConfig,
        field: 'representation',
        headerName: t('service.ServiceUserView.activityCounties.representation', { defaultValue: 'County' }) as string,

        width: 230,
        type: 'string',
        filterable: false && true,
      },
    ];

    const filterOptions: FilterOption[] = [
      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserManagerUsersViewDefaultServiceUserViewEditAreasLabelWrapperAreasActivityTabActivityCountiesTabActivityCountiesActivityCountiesLabelWrapperActivityCountiesRepresentationFilter',
        attributeName: 'representation',
        label: t('service.ServiceUserView.activityCounties.representation', { defaultValue: 'County' }) as string,
        filterType: FilterType.string,
      },
    ];

    const sortModel: GridSortModel = [{ field: 'representation', sort: null }];

    const initialQueryCustomizer: ServiceCountyQueryCustomizer = {
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

    const res = await openRangeDialog<ServiceCountyStored, ServiceCountyQueryCustomizer>({
      id: 'AddActionedemokraciaServiceUserEdemokraciaServiceUserManagerUsersViewEdemokraciaServiceUserEdemokraciaServiceServiceUserActivityCountiesTableAdd',
      columns,
      defaultSortField: sortModel[0],
      rangeCall: async (queryCustomizer) =>
        await serviceServiceUserServiceForClassImpl.getRangeForActivityCounties(
          owner,
          processQueryCustomizer(queryCustomizer),
        ),
      single: false,
      filterOptions,
      initialQueryCustomizer,
    });

    if (res === undefined) return;

    try {
      await serviceServiceUserServiceForClassImpl.addActivityCounties(
        { __signedIdentifier: owner.__signedIdentifier } as JudoIdentifiable<ServiceCountyStored>,
        res.value as Array<ServiceCountyStored>,
      );

      successCallback();
    } catch (error) {
      handleActionError(error, undefined, owner);
    }
  };
};
