//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import type { GridFilterModel } from '@mui/x-data-grid';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { Suspense, lazy, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useJudoNavigation } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import type { ServiceCityCity_TableSetSelectorDialogActions } from '~/containers/Service/City/City_Table/SetSelector/ServiceCityCity_TableSetSelectorDialogContainer';
import { useCRUDDialog, useSnacks } from '~/hooks';
import type {
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceServiceUser,
  ServiceServiceUserStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceServiceUserServiceForResidentCityImpl } from '~/services/data-axios/ServiceServiceUserServiceForResidentCityImpl';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceCityCity_TableSetSelectorDialogActionsExtended = ServiceCityCity_TableSetSelectorDialogActions & {};

export const SERVICE_SERVICE_USER_SERVICE_USER_VIEW_EDIT_AREAS_RESIDENCY_RESIDENT_CITY_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceCityCity_TableSetSelectorActionsHook';
export type ServiceCityCity_TableSetSelectorActionsHook = (
  ownerData: any,
  data: ServiceCityStored[],
  editMode: boolean,
  selectionDiff: ServiceCityStored[],
) => ServiceCityCity_TableSetSelectorDialogActionsExtended;

export const useServiceServiceUserServiceUser_View_EditAreasResidencyResidentCityLinkSetSelectorPage = (): ((
  ownerData: any,
  alreadySelected: ServiceCityStored[],
) => Promise<DialogResult<ServiceCityStored[]>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any, alreadySelected: ServiceCityStored[]) =>
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
          <ServiceServiceUserServiceUser_View_EditAreasResidencyResidentCityLinkSetSelectorPage
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

const ServiceCityCity_TableSetSelectorDialogContainer = lazy(
  () => import('~/containers/Service/City/City_Table/SetSelector/ServiceCityCity_TableSetSelectorDialogContainer'),
);

export interface ServiceServiceUserServiceUser_View_EditAreasResidencyResidentCityLinkSetSelectorPageProps {
  ownerData: any;
  alreadySelected: ServiceCityStored[];
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceCityStored[]) => Promise<void>;
}

// XMIID: User/(esm/_I-5hoIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldLinkSetSelectorPageDefinition
// Name: service::ServiceUser::ServiceUser_View_Edit::Areas::Residency::residentCity::LinkSetSelectorPage
export default function ServiceServiceUserServiceUser_View_EditAreasResidencyResidentCityLinkSetSelectorPage(
  props: ServiceServiceUserServiceUser_View_EditAreasResidencyResidentCityLinkSetSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit } = props;

  // Services
  const serviceServiceUserServiceForResidentCityImpl = useMemo(
    () => new ServiceServiceUserServiceForResidentCityImpl(judoAxiosProvider),
    [],
  );

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
  const [data, setData] = useState<ServiceCityStored[]>([]);
  const [selectionDiff, setSelectionDiff] = useState<ServiceCityStored[]>([]);

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceCityCity_TableSetSelectorActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_SERVICE_USER_SERVICE_USER_VIEW_EDIT_AREAS_RESIDENCY_RESIDENT_CITY_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceCityCity_TableSetSelectorDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    selectionDiff,
  );

  // Dialog hooks

  // Calculated section
  const title: string = t('service.City.City_Table.SetSelector', { defaultValue: 'City Table' });

  // Private actions
  const submit = async () => {};

  // Action section
  const backAction = async () => {
    onClose();
  };
  const setAction = async (selected: ServiceCityStored[]) => {
    onSubmit(selected);
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
  const selectorRangeAction = async (queryCustomizer: ServiceCityQueryCustomizer): Promise<ServiceCityStored[]> => {
    try {
      return serviceServiceUserServiceForResidentCityImpl.getRangeForResidentCity(ownerData, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };

  const actions: ServiceCityCity_TableSetSelectorDialogActions = {
    backAction,
    setAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // Effect section

  return (
    <div
      id="User/(esm/_I-5hoIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldLinkSetSelectorPageDefinition"
      data-page-name="service::ServiceUser::ServiceUser_View_Edit::Areas::Residency::residentCity::LinkSetSelectorPage"
    >
      <Suspense>
        <ServiceCityCity_TableSetSelectorDialogContainer
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
