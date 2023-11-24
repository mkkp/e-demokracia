//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, lazy, Suspense } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import type { GridFilterModel } from '@mui/x-data-grid';
import type { Filter, FilterOption } from '~/components-api';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import { toastConfig } from '~/config';
import { useSnacks, useCRUDDialog } from '~/hooks';
import {
  passesLocalValidation,
  processQueryCustomizer,
  uiDateToServiceDate,
  uiTimeToServiceTime,
  useErrorHandler,
} from '~/utilities';
import type { DialogResult } from '~/utilities';
import type { ServiceDistrictDistrict_TableAddSelectorDialogActions } from '~/containers/Service/District/District_Table/AddSelector/ServiceDistrictDistrict_TableAddSelectorDialogContainer';
import type {
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceServiceUser,
  ServiceServiceUserStored,
} from '~/services/data-api';
import { serviceServiceUserServiceForActivityDistrictsImpl } from '~/services/data-axios';
export type ServiceDistrictDistrict_TableAddSelectorDialogActionsExtended =
  ServiceDistrictDistrict_TableAddSelectorDialogActions & {};

export const SERVICE_SERVICE_USER_SERVICE_USER_VIEW_EDIT_AREAS_ACTIVITY_ACTIVITY_DISTRICTS_ACTIVITY_DISTRICTS_TABLE_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceDistrictDistrict_TableAddSelectorActionsHook';
export type ServiceDistrictDistrict_TableAddSelectorActionsHook = (
  ownerData: any,
  data: ServiceDistrictStored[],
  editMode: boolean,
  selectionDiff: ServiceDistrictStored[],
) => ServiceDistrictDistrict_TableAddSelectorDialogActionsExtended;

export const useServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsTableSetSelectorPage =
  (): ((
    ownerData: any,
    alreadySelected: ServiceDistrictStored[],
  ) => Promise<DialogResult<ServiceDistrictStored[]>>) => {
    const [createDialog, closeDialog] = useDialog();

    return (ownerData: any, alreadySelected: ServiceDistrictStored[]) =>
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
            <ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsTableSetSelectorPage
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

const ServiceDistrictDistrict_TableAddSelectorDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/District/District_Table/AddSelector/ServiceDistrictDistrict_TableAddSelectorDialogContainer'
    ),
);

export interface ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsTableSetSelectorPageProps {
  ownerData: any;
  alreadySelected: ServiceDistrictStored[];
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceDistrictStored[]) => Promise<void>;
}

// XMIID: User/(esm/_I-9zEIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldTableAddSelectorPageDefinition
// Name: service::ServiceUser::ServiceUser_View_Edit::Areas::activity::activity_districts::activityDistricts::TableSetSelectorPage
export default function ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsTableSetSelectorPage(
  props: ServiceServiceUserServiceUser_View_EditAreasActivityActivity_districtsActivityDistrictsTableSetSelectorPageProps,
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
  const [data, setData] = useState<ServiceDistrictStored[]>([]);
  const [selectionDiff, setSelectionDiff] = useState<ServiceDistrictStored[]>([]);

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceDistrictDistrict_TableAddSelectorActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_SERVICE_USER_SERVICE_USER_VIEW_EDIT_AREAS_ACTIVITY_ACTIVITY_DISTRICTS_ACTIVITY_DISTRICTS_TABLE_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceDistrictDistrict_TableAddSelectorDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    selectionDiff,
  );

  // Dialog hooks

  // Calculated section
  const title: string = t('service.District.District_Table.AddSelector', { defaultValue: 'District Table' });

  // Action section
  const addAction = async (selected: ServiceDistrictStored[]) => {
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
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored[]> => {
    try {
      return serviceServiceUserServiceForActivityDistrictsImpl.getRangeForActivityDistricts(ownerData, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };

  const actions: ServiceDistrictDistrict_TableAddSelectorDialogActions = {
    addAction,
    backAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // Effect section

  return (
    <div
      id="User/(esm/_I-9zEIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldTableAddSelectorPageDefinition"
      data-page-name="service::ServiceUser::ServiceUser_View_Edit::Areas::activity::activity_districts::activityDistricts::TableSetSelectorPage"
    >
      <Suspense>
        <ServiceDistrictDistrict_TableAddSelectorDialogContainer
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