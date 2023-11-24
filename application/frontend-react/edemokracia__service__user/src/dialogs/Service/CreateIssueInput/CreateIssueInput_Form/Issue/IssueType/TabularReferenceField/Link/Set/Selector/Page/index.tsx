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
import type { ServiceIssueTypeIssueType_TableSetSelectorDialogActions } from '~/containers/Service/IssueType/IssueType_Table/SetSelector/ServiceIssueTypeIssueType_TableSetSelectorDialogContainer';
import type {
  ServiceCreateIssueInput,
  ServiceCreateIssueInputStored,
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
  VoteType,
} from '~/services/data-api';
import { serviceCreateIssueInputServiceForIssueTypeImpl } from '~/services/data-axios';
export type ServiceIssueTypeIssueType_TableSetSelectorDialogActionsExtended =
  ServiceIssueTypeIssueType_TableSetSelectorDialogActions & {};

export const SERVICE_CREATE_ISSUE_INPUT_CREATE_ISSUE_INPUT_FORM_ISSUE_ISSUE_TYPE_TABULAR_REFERENCE_FIELD_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceIssueTypeIssueType_TableSetSelectorActionsHook';
export type ServiceIssueTypeIssueType_TableSetSelectorActionsHook = (
  ownerData: any,
  data: ServiceIssueTypeStored[],
  editMode: boolean,
  selectionDiff: ServiceIssueTypeStored[],
) => ServiceIssueTypeIssueType_TableSetSelectorDialogActionsExtended;

export const useServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeTabularReferenceFieldLinkSetSelectorPage =
  (): ((
    ownerData: any,
    alreadySelected: ServiceIssueTypeStored[],
  ) => Promise<DialogResult<ServiceIssueTypeStored[]>>) => {
    const [createDialog, closeDialog] = useDialog();

    return (ownerData: any, alreadySelected: ServiceIssueTypeStored[]) =>
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
            <ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeTabularReferenceFieldLinkSetSelectorPage
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

const ServiceIssueTypeIssueType_TableSetSelectorDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/IssueType/IssueType_Table/SetSelector/ServiceIssueTypeIssueType_TableSetSelectorDialogContainer'
    ),
);

export interface ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeTabularReferenceFieldLinkSetSelectorPageProps {
  ownerData: any;
  alreadySelected: ServiceIssueTypeStored[];
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceIssueTypeStored[]) => Promise<void>;
}

// XMIID: User/(esm/_WNovANu5Ee2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorPageDefinition
// Name: service::CreateIssueInput::CreateIssueInput_Form::issue::issueType::TabularReferenceField::Link::Set::Selector::Page
// Open in dialog: true
export default function ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeTabularReferenceFieldLinkSetSelectorPage(
  props: ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeTabularReferenceFieldLinkSetSelectorPageProps,
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
  const [data, setData] = useState<ServiceIssueTypeStored[]>([]);
  const [selectionDiff, setSelectionDiff] = useState<ServiceIssueTypeStored[]>([]);

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceIssueTypeIssueType_TableSetSelectorActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_CREATE_ISSUE_INPUT_CREATE_ISSUE_INPUT_FORM_ISSUE_ISSUE_TYPE_TABULAR_REFERENCE_FIELD_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceIssueTypeIssueType_TableSetSelectorDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, selectionDiff);

  // Dialog hooks

  // Calculated section
  const title: string = t('service.IssueType.IssueType_Table.SetSelector', { defaultValue: 'IssueType Table' });

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

  const actions: ServiceIssueTypeIssueType_TableSetSelectorDialogActions = {
    backAction,
    filterAction,
    ...(customActions ?? {}),
  };

  // Effect section

  return (
    <div
      id="User/(esm/_WNovANu5Ee2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorPageDefinition"
      data-page-name="service::CreateIssueInput::CreateIssueInput_Form::issue::issueType::TabularReferenceField::Link::Set::Selector::Page"
    >
      <Suspense>
        <ServiceIssueTypeIssueType_TableSetSelectorDialogContainer
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
