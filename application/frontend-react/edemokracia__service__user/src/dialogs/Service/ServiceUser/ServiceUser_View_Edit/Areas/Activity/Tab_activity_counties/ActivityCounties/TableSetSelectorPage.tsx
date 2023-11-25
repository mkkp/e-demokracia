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
import type { ServiceCountyCounty_TableAddSelectorDialogActions } from '~/containers/Service/County/County_Table/AddSelector/ServiceCountyCounty_TableAddSelectorDialogContainer';
import type {
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceServiceUser,
  ServiceServiceUserStored,
} from '~/services/data-api';
import { serviceServiceUserServiceForActivityCountiesImpl } from '~/services/data-axios';
export type ServiceCountyCounty_TableAddSelectorDialogActionsExtended =
  ServiceCountyCounty_TableAddSelectorDialogActions & {};

export const SERVICE_SERVICE_USER_SERVICE_USER_VIEW_EDIT_AREAS_ACTIVITY_TAB_ACTIVITY_COUNTIES_ACTIVITY_COUNTIES_TABLE_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceCountyCounty_TableAddSelectorActionsHook';
export type ServiceCountyCounty_TableAddSelectorActionsHook = (
  ownerData: any,
  data: ServiceCountyStored[],
  editMode: boolean,
  selectionDiff: ServiceCountyStored[],
) => ServiceCountyCounty_TableAddSelectorDialogActionsExtended;

export const useServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesTableSetSelectorPage =
  (): ((ownerData: any, alreadySelected: ServiceCountyStored[]) => Promise<DialogResult<ServiceCountyStored[]>>) => {
    const [createDialog, closeDialog] = useDialog();

    return (ownerData: any, alreadySelected: ServiceCountyStored[]) =>
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
            <ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesTableSetSelectorPage
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

const ServiceCountyCounty_TableAddSelectorDialogContainer = lazy(
  () =>
    import('~/containers/Service/County/County_Table/AddSelector/ServiceCountyCounty_TableAddSelectorDialogContainer'),
);

export interface ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesTableSetSelectorPageProps {
  ownerData: any;
  alreadySelected: ServiceCountyStored[];
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceCountyStored[]) => Promise<void>;
}

// XMIID: User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldTableAddSelectorPageDefinition
// Name: service::ServiceUser::ServiceUser_View_Edit::Areas::activity::tab_activity_counties::activityCounties::TableSetSelectorPage
export default function ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesTableSetSelectorPage(
  props: ServiceServiceUserServiceUser_View_EditAreasActivityTab_activity_countiesActivityCountiesTableSetSelectorPageProps,
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
  const [data, setData] = useState<ServiceCountyStored[]>([]);
  const [selectionDiff, setSelectionDiff] = useState<ServiceCountyStored[]>([]);

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceCountyCounty_TableAddSelectorActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_SERVICE_USER_SERVICE_USER_VIEW_EDIT_AREAS_ACTIVITY_TAB_ACTIVITY_COUNTIES_ACTIVITY_COUNTIES_TABLE_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceCountyCounty_TableAddSelectorDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    selectionDiff,
  );

  // Dialog hooks

  // Calculated section
  const title: string = t('service.County.County_Table.AddSelector', { defaultValue: 'County Table' });

  // Action section
  const addAction = async (selected: ServiceCountyStored[]) => {
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
  const selectorRangeAction = async (queryCustomizer: ServiceCountyQueryCustomizer): Promise<ServiceCountyStored[]> => {
    try {
      return serviceServiceUserServiceForActivityCountiesImpl.getRangeForActivityCounties(ownerData, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };

  const actions: ServiceCountyCounty_TableAddSelectorDialogActions = {
    addAction,
    backAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // Effect section

  return (
    <div
      id="User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldTableAddSelectorPageDefinition"
      data-page-name="service::ServiceUser::ServiceUser_View_Edit::Areas::activity::tab_activity_counties::activityCounties::TableSetSelectorPage"
    >
      <Suspense>
        <ServiceCountyCounty_TableAddSelectorDialogContainer
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
