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
import type { ServiceIssueIssue_TableAddSelectorDialogActions } from '~/containers/Service/Issue/Issue_Table/AddSelector/ServiceIssueIssue_TableAddSelectorDialogContainer';
import { useCRUDDialog, useSnacks } from '~/hooks';
import type {
  IssueScope,
  IssueStatus,
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceUserIssues,
  ServiceUserIssuesStored,
  VoteType,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceUserIssuesServiceForOwnedIssuesImpl } from '~/services/data-axios/ServiceUserIssuesServiceForOwnedIssuesImpl';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceIssueIssue_TableAddSelectorDialogActionsExtended =
  ServiceIssueIssue_TableAddSelectorDialogActions & {};

export const SERVICE_USER_ISSUES_OWNED_ISSUES_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceIssueIssue_TableAddSelectorActionsHook';
export type ServiceIssueIssue_TableAddSelectorActionsHook = (
  ownerData: any,
  data: ServiceIssueStored[],
  editMode: boolean,
  selectionDiff: ServiceIssueStored[],
) => ServiceIssueIssue_TableAddSelectorDialogActionsExtended;

export const useServiceUserIssuesOwnedIssuesAddSelectorPage = (): ((
  ownerData: any,
  alreadySelected: ServiceIssueStored[],
) => Promise<DialogResult<ServiceIssueStored[]>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any, alreadySelected: ServiceIssueStored[]) =>
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
          <ServiceUserIssuesOwnedIssuesAddSelectorPage
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

const ServiceIssueIssue_TableAddSelectorDialogContainer = lazy(
  () => import('~/containers/Service/Issue/Issue_Table/AddSelector/ServiceIssueIssue_TableAddSelectorDialogContainer'),
);

export interface ServiceUserIssuesOwnedIssuesAddSelectorPageProps {
  ownerData: any;
  alreadySelected: ServiceIssueStored[];
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceIssueStored[]) => Promise<void>;
}

// XMIID: User/(esm/_jK5OoVq4Ee6_67aMO2jOsw)/RelationFeatureTableAddSelectorPageDefinition
// Name: service::UserIssues::ownedIssues::AddSelectorPage
export default function ServiceUserIssuesOwnedIssuesAddSelectorPage(
  props: ServiceUserIssuesOwnedIssuesAddSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit } = props;

  // Services
  const serviceUserIssuesServiceForOwnedIssuesImpl = useMemo(
    () => new ServiceUserIssuesServiceForOwnedIssuesImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceIssueStored[]>([]);
  const [selectionDiff, setSelectionDiff] = useState<ServiceIssueStored[]>([]);

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceIssueIssue_TableAddSelectorActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_ISSUES_OWNED_ISSUES_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceIssueIssue_TableAddSelectorDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    selectionDiff,
  );

  // Dialog hooks

  // Calculated section
  const title: string = t('service.Issue.Issue_Table.AddSelector', { defaultValue: 'Issue Table' });

  // Private actions
  const submit = async () => {};

  // Action section
  const addAction = async (selected: ServiceIssueStored[]) => {
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
  const selectorRangeAction = async (queryCustomizer: ServiceIssueQueryCustomizer): Promise<ServiceIssueStored[]> => {
    try {
      return serviceUserIssuesServiceForOwnedIssuesImpl.getRangeForOwnedIssues(ownerData, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };

  const actions: ServiceIssueIssue_TableAddSelectorDialogActions = {
    addAction,
    backAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // Effect section

  return (
    <div
      id="User/(esm/_jK5OoVq4Ee6_67aMO2jOsw)/RelationFeatureTableAddSelectorPageDefinition"
      data-page-name="service::UserIssues::ownedIssues::AddSelectorPage"
    >
      <Suspense>
        <ServiceIssueIssue_TableAddSelectorDialogContainer
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