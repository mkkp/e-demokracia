//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { useState, useMemo, lazy, Suspense } from 'react';
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
import type { ServiceDistrictDistrict_TableSetSelectorDialogActions } from '~/containers/Service/District/District_Table/SetSelector/ServiceDistrictDistrict_TableSetSelectorDialogContainer';
import type {
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceIssue,
  ServiceIssueStored,
} from '~/services/data-api';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceIssueServiceForDistrictImpl } from '~/services/data-axios/ServiceIssueServiceForDistrictImpl';

export type ServiceDistrictDistrict_TableSetSelectorDialogActionsExtended =
  ServiceDistrictDistrict_TableSetSelectorDialogActions & {};

export const SERVICE_ISSUE_ISSUE_VIEW_EDIT_OTHER_AREA_DISTRICT_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceDistrictDistrict_TableSetSelectorActionsHook';
export type ServiceDistrictDistrict_TableSetSelectorActionsHook = (
  ownerData: any,
  data: ServiceDistrictStored[],
  editMode: boolean,
  selectionDiff: ServiceDistrictStored[],
) => ServiceDistrictDistrict_TableSetSelectorDialogActionsExtended;

export const useServiceIssueIssue_View_EditOtherAreaDistrictLinkSetSelectorPage = (): ((
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
          <ServiceIssueIssue_View_EditOtherAreaDistrictLinkSetSelectorPage
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

export interface ServiceIssueIssue_View_EditOtherAreaDistrictLinkSetSelectorPageProps {
  ownerData: any;
  alreadySelected: ServiceDistrictStored[];
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceDistrictStored[]) => Promise<void>;
}

// XMIID: User/(esm/_pPRYodvUEe2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorPageDefinition
// Name: service::Issue::Issue_View_Edit::other::area::district::LinkSetSelectorPage
export default function ServiceIssueIssue_View_EditOtherAreaDistrictLinkSetSelectorPage(
  props: ServiceIssueIssue_View_EditOtherAreaDistrictLinkSetSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit } = props;

  // Services
  const serviceIssueServiceForDistrictImpl = useMemo(
    () => new ServiceIssueServiceForDistrictImpl(judoAxiosProvider),
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
    `(${OBJECTCLASS}=${SERVICE_ISSUE_ISSUE_VIEW_EDIT_OTHER_AREA_DISTRICT_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
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
  const setAction = async (selected: ServiceDistrictStored[]) => {
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
      return serviceIssueServiceForDistrictImpl.getRangeForDistrict(ownerData, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };

  const actions: ServiceDistrictDistrict_TableSetSelectorDialogActions = {
    setAction,
    backAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // Effect section

  return (
    <div
      id="User/(esm/_pPRYodvUEe2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorPageDefinition"
      data-page-name="service::Issue::Issue_View_Edit::other::area::district::LinkSetSelectorPage"
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
