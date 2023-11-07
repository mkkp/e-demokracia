//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'/index.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, lazy, Suspense } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
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
import type { ServiceIssueTypeIssueType_TableSetSelectorDialogActions } from '~/containers/Service/IssueType/IssueType_Table/SetSelector/ServiceIssueTypeIssueType_TableSetSelectorDialogContainer';
import type {
  ServiceIssue,
  ServiceIssueStored,
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
  VoteType,
} from '~/services/data-api';
import { serviceIssueServiceForIssueTypeImpl } from '~/services/data-axios';

export const useServiceIssueIssue_View_EditIssueIssueTypeTabularReferenceFieldLinkSetSelectorPage = (): ((
  ownerData: any,
  alreadySelected: ServiceIssueTypeStored[],
) => Promise<DialogResult<ServiceIssueTypeStored[]>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any, alreadySelected: ServiceIssueTypeStored[]) =>
    new Promise((resolve) => {
      createDialog({
        fullWidth: true,
        maxWidth: 'md',
        onClose: (event: object, reason: string) => {
          if (reason !== 'backdropClick') {
            closeDialog();
            resolve({
              result: 'close',
            });
          }
        },
        children: (
          <ServiceIssueIssue_View_EditIssueIssueTypeTabularReferenceFieldLinkSetSelectorPage
            ownerData={ownerData}
            alreadySelected={alreadySelected}
            onClose={() => {
              closeDialog();
              resolve({
                result: 'close',
              });
            }}
            onSubmit={(result) => {
              closeDialog();
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

export interface ServiceIssueIssue_View_EditIssueIssueTypeTabularReferenceFieldLinkSetSelectorPageProps {
  ownerData: any;
  alreadySelected: ServiceIssueTypeStored[];
  onClose: () => void;
  onSubmit: (result?: ServiceIssueTypeStored[]) => void;
}

// Name: service::Issue::Issue_View_Edit::issue::issueType::TabularReferenceField::Link::Set::Selector::Page
export default function ServiceIssueIssue_View_EditIssueIssueTypeTabularReferenceFieldLinkSetSelectorPage(
  props: ServiceIssueIssue_View_EditIssueIssueTypeTabularReferenceFieldLinkSetSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit } = props;

  // Hooks section
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const { navigate, back } = useJudoNavigation();
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

  // Dialog hooks

  // Calculated section
  const title: string = t('Service.IssueType.IssueType_Table.SetSelector', { defaultValue: 'IssueType Table' });

  // Action section
  const serviceIssueTypeIssueType_TableSet = async (selected: ServiceIssueTypeStored[]) => {
    onSubmit(selected);
  };
  const serviceIssueTypeIssueType_TableBack = async () => {
    onClose();
  };
  const serviceIssueTypeIssueType_TableTableFilter = async (
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
  const serviceIssueTypeIssueType_TableTableRange = async (
    queryCustomizer: ServiceIssueTypeQueryCustomizer,
  ): Promise<ServiceIssueTypeStored[]> => {
    try {
      return serviceIssueServiceForIssueTypeImpl.getRangeForIssueType(ownerData, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };

  const actions: ServiceIssueTypeIssueType_TableSetSelectorDialogActions = {
    serviceIssueTypeIssueType_TableSet,
    serviceIssueTypeIssueType_TableBack,
    serviceIssueTypeIssueType_TableTableFilter,
    serviceIssueTypeIssueType_TableTableRange,
  };

  // Effect section

  return (
    <>
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
    </>
  );
}
