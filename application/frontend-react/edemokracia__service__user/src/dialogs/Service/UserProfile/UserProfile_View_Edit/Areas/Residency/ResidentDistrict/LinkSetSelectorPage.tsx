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
import type { ServiceDistrictDistrict_TableSetSelectorDialogActions } from '~/containers/Service/District/District_Table/SetSelector/ServiceDistrictDistrict_TableSetSelectorDialogContainer';
import { useCRUDDialog, useSnacks } from '~/hooks';
import type {
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceUserProfile,
  ServiceUserProfileStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceUserProfileServiceForResidentDistrictImpl } from '~/services/data-axios/ServiceUserProfileServiceForResidentDistrictImpl';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceDistrictDistrict_TableSetSelectorDialogActionsExtended =
  ServiceDistrictDistrict_TableSetSelectorDialogActions & {};

export const SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_AREAS_RESIDENCY_RESIDENT_DISTRICT_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceDistrictDistrict_TableSetSelectorActionsHook';
export type ServiceDistrictDistrict_TableSetSelectorActionsHook = (
  ownerData: any,
  data: ServiceDistrictStored[],
  editMode: boolean,
  selectionDiff: ServiceDistrictStored[],
) => ServiceDistrictDistrict_TableSetSelectorDialogActionsExtended;

export const useServiceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictLinkSetSelectorPage = (): ((
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
          <ServiceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictLinkSetSelectorPage
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

const ServiceDistrictDistrict_TableSetSelectorDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/District/District_Table/SetSelector/ServiceDistrictDistrict_TableSetSelectorDialogContainer'
    ),
);

export interface ServiceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictLinkSetSelectorPageProps {
  ownerData: any;
  alreadySelected: ServiceDistrictStored[];
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceDistrictStored[]) => Promise<void>;
}

// XMIID: User/(esm/_fsW_plvTEe6jm_SkPSYEYw)/TabularReferenceFieldLinkSetSelectorPageDefinition
// Name: service::UserProfile::UserProfile_View_Edit::Areas::Residency::residentDistrict::LinkSetSelectorPage
export default function ServiceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictLinkSetSelectorPage(
  props: ServiceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictLinkSetSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit } = props;

  // Services
  const serviceUserProfileServiceForResidentDistrictImpl = useMemo(
    () => new ServiceUserProfileServiceForResidentDistrictImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceDistrictStored[]>([]);
  const [selectionDiff, setSelectionDiff] = useState<ServiceDistrictStored[]>([]);

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceDistrictDistrict_TableSetSelectorActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_AREAS_RESIDENCY_RESIDENT_DISTRICT_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceDistrictDistrict_TableSetSelectorDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    selectionDiff,
  );

  // Dialog hooks

  // Calculated section
  const title: string = t('service.District.District_Table.SetSelector', { defaultValue: 'District Table' });

  // Private actions
  const submit = async () => {};

  // Action section
  const backAction = async () => {
    onClose();
  };
  const setAction = async (selected: ServiceDistrictStored[]) => {
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
  const selectorRangeAction = async (
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored[]> => {
    try {
      return serviceUserProfileServiceForResidentDistrictImpl.getRangeForResidentDistrict(ownerData, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };

  const actions: ServiceDistrictDistrict_TableSetSelectorDialogActions = {
    backAction,
    setAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // Effect section

  return (
    <div
      id="User/(esm/_fsW_plvTEe6jm_SkPSYEYw)/TabularReferenceFieldLinkSetSelectorPageDefinition"
      data-page-name="service::UserProfile::UserProfile_View_Edit::Areas::Residency::residentDistrict::LinkSetSelectorPage"
    >
      <Suspense>
        <ServiceDistrictDistrict_TableSetSelectorDialogContainer
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