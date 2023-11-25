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
import type { ServiceCountyCounty_TableSetSelectorDialogActions } from '~/containers/Service/County/County_Table/SetSelector/ServiceCountyCounty_TableSetSelectorDialogContainer';
import type {
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceCreateIssueInput,
  ServiceCreateIssueInputStored,
} from '~/services/data-api';
import { serviceCreateIssueInputServiceForCountyImpl } from '~/services/data-axios';
export type ServiceCountyCounty_TableSetSelectorDialogActionsExtended =
  ServiceCountyCounty_TableSetSelectorDialogActions & {};

export const SERVICE_CREATE_ISSUE_INPUT_CREATE_ISSUE_INPUT_FORM_ISSUE_COUNTY_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceCountyCounty_TableSetSelectorActionsHook';
export type ServiceCountyCounty_TableSetSelectorActionsHook = (
  ownerData: any,
  data: ServiceCountyStored[],
  editMode: boolean,
  selectionDiff: ServiceCountyStored[],
) => ServiceCountyCounty_TableSetSelectorDialogActionsExtended;

export const useServiceCreateIssueInputCreateIssueInput_FormIssueCountyLinkSetSelectorPage = (): ((
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
          <ServiceCreateIssueInputCreateIssueInput_FormIssueCountyLinkSetSelectorPage
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

export interface ServiceCreateIssueInputCreateIssueInput_FormIssueCountyLinkSetSelectorPageProps {
  ownerData: any;
  alreadySelected: ServiceCountyStored[];
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceCountyStored[]) => Promise<void>;
}

// XMIID: User/(esm/_TXj-IdvXEe2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorPageDefinition
// Name: service::CreateIssueInput::CreateIssueInput_Form::issue::county::LinkSetSelectorPage
export default function ServiceCreateIssueInputCreateIssueInput_FormIssueCountyLinkSetSelectorPage(
  props: ServiceCreateIssueInputCreateIssueInput_FormIssueCountyLinkSetSelectorPageProps,
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
  const { service: customActionsHook } = useTrackService<ServiceCountyCounty_TableSetSelectorActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_CREATE_ISSUE_INPUT_CREATE_ISSUE_INPUT_FORM_ISSUE_COUNTY_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
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

  const actions: ServiceCountyCounty_TableSetSelectorDialogActions = {
    backAction,
    filterAction,
    ...(customActions ?? {}),
  };

  // Effect section

  return (
    <div
      id="User/(esm/_TXj-IdvXEe2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorPageDefinition"
      data-page-name="service::CreateIssueInput::CreateIssueInput_Form::issue::county::LinkSetSelectorPage"
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
