//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'/index.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, lazy, Suspense } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import type { GridFilterModel } from '@mui/x-data-grid';
import type { Filter, FilterOption } from '~/components-api';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import { toastConfig } from '~/config';
import { useCRUDDialog } from '~/hooks';
import {
  passesLocalValidation,
  processQueryCustomizer,
  uiDateToServiceDate,
  uiTimeToServiceTime,
  useErrorHandler,
} from '~/utilities';
import type { DialogResult } from '~/utilities';
import type { ServiceCountyCounty_TableSetSelectorDialogActions } from '~/containers/Service/County/County_Table/SetSelector/ServiceCountyCounty_TableSetSelectorDialogContainer';
import type {
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceIssue,
  ServiceIssueStored,
} from '~/services/data-api';
import { serviceIssueServiceForCountyImpl } from '~/services/data-axios';
export type ServiceCountyCounty_TableSetSelectorDialogActionsExtended =
  ServiceCountyCounty_TableSetSelectorDialogActions & {};

export const SERVICE_ISSUE_ISSUE_VIEW_EDIT_OTHER_AREA_COUNTY_TABULAR_REFERENCE_FIELD_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceCountyCounty_TableSetSelectorActionsHook';
export type ServiceCountyCounty_TableSetSelectorActionsHook = (
  ownerData: any,
  data: ServiceCountyStored[],
  editMode: boolean,
  selectionDiff: ServiceCountyStored[],
) => ServiceCountyCounty_TableSetSelectorDialogActionsExtended;

export const useServiceIssueIssue_View_EditOtherAreaCountyTabularReferenceFieldLinkSetSelectorPage = (): ((
  ownerData: any,
  alreadySelected: ServiceCountyStored[],
) => Promise<DialogResult<ServiceCountyStored[]>>) => {
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
          <ServiceIssueIssue_View_EditOtherAreaCountyTabularReferenceFieldLinkSetSelectorPage
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

const ServiceCountyCounty_TableSetSelectorDialogContainer = lazy(
  () =>
    import('~/containers/Service/County/County_Table/SetSelector/ServiceCountyCounty_TableSetSelectorDialogContainer'),
);

export interface ServiceIssueIssue_View_EditOtherAreaCountyTabularReferenceFieldLinkSetSelectorPageProps {
  ownerData: any;
  alreadySelected: ServiceCountyStored[];
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceCountyStored[]) => Promise<void>;
}

// XMIID: User/(esm/_pPQxkdvUEe2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorPageDefinition
// Name: service::Issue::Issue_View_Edit::other::area::county::TabularReferenceField::Link::Set::Selector::Page
// Open in dialog: true
export default function ServiceIssueIssue_View_EditOtherAreaCountyTabularReferenceFieldLinkSetSelectorPage(
  props: ServiceIssueIssue_View_EditOtherAreaCountyTabularReferenceFieldLinkSetSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit } = props;

  // Hooks section
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
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
  const { service: customActionsHook } = useTrackService<ServiceCountyCounty_TableSetSelectorActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_ISSUE_VIEW_EDIT_OTHER_AREA_COUNTY_TABULAR_REFERENCE_FIELD_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceCountyCounty_TableSetSelectorDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    selectionDiff,
  );

  // Dialog hooks

  // Calculated section
  const title: string = t('service.County.County_Table.SetSelector', { defaultValue: 'County Table' });

  // Action section
  const setAction = async (selected: ServiceCountyStored[]) => {
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
      return serviceIssueServiceForCountyImpl.getRangeForCounty(ownerData, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };

  const actions: ServiceCountyCounty_TableSetSelectorDialogActions = {
    setAction,
    backAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // Effect section

  return (
    <div
      id="User/(esm/_pPQxkdvUEe2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorPageDefinition"
      data-page-name="service::Issue::Issue_View_Edit::other::area::county::TabularReferenceField::Link::Set::Selector::Page"
    >
      <Suspense>
        <ServiceCountyCounty_TableSetSelectorDialogContainer
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
