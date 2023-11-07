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
import type { ServiceServiceUserServiceUser_TableSetSelectorDialogActions } from '~/containers/Service/ServiceUser/ServiceUser_Table/SetSelector/ServiceServiceUserServiceUser_TableSetSelectorDialogContainer';
import type {
  ServiceIssueCategory,
  ServiceIssueCategoryStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
import { serviceIssueCategoryServiceForOwnerImpl } from '~/services/data-axios';

export const useServiceIssueCategoryIssueCategory_View_EditOwnerTabularReferenceFieldLinkSetSelectorPage = (): ((
  ownerData: any,
  alreadySelected: ServiceServiceUserStored[],
) => Promise<DialogResult<ServiceServiceUserStored[]>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any, alreadySelected: ServiceServiceUserStored[]) =>
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
          <ServiceIssueCategoryIssueCategory_View_EditOwnerTabularReferenceFieldLinkSetSelectorPage
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

const ServiceServiceUserServiceUser_TableSetSelectorDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/ServiceUser/ServiceUser_Table/SetSelector/ServiceServiceUserServiceUser_TableSetSelectorDialogContainer'
    ),
);

export interface ServiceIssueCategoryIssueCategory_View_EditOwnerTabularReferenceFieldLinkSetSelectorPageProps {
  ownerData: any;
  alreadySelected: ServiceServiceUserStored[];
  onClose: () => void;
  onSubmit: (result?: ServiceServiceUserStored[]) => void;
}

// Name: service::IssueCategory::IssueCategory_View_Edit::owner::TabularReferenceField::Link::Set::Selector::Page
export default function ServiceIssueCategoryIssueCategory_View_EditOwnerTabularReferenceFieldLinkSetSelectorPage(
  props: ServiceIssueCategoryIssueCategory_View_EditOwnerTabularReferenceFieldLinkSetSelectorPageProps,
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
  const [data, setData] = useState<ServiceServiceUserStored[]>([]);
  const [selectionDiff, setSelectionDiff] = useState<ServiceServiceUserStored[]>([]);

  // Dialog hooks

  // Calculated section
  const title: string = t('Service.ServiceUser.ServiceUser_Table.SetSelector', { defaultValue: 'ServiceUser Table' });

  // Action section
  const serviceServiceUserServiceUser_TableSet = async (selected: ServiceServiceUserStored[]) => {
    onSubmit(selected);
  };
  const serviceServiceUserServiceUser_TableBack = async () => {
    onClose();
  };
  const serviceServiceUserServiceUser_TableTableFilter = async (
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
  const serviceServiceUserServiceUser_TableTableRange = async (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored[]> => {
    try {
      return serviceIssueCategoryServiceForOwnerImpl.getRangeForOwner(ownerData, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };

  const actions: ServiceServiceUserServiceUser_TableSetSelectorDialogActions = {
    serviceServiceUserServiceUser_TableSet,
    serviceServiceUserServiceUser_TableBack,
    serviceServiceUserServiceUser_TableTableFilter,
    serviceServiceUserServiceUser_TableTableRange,
  };

  // Effect section

  return (
    <>
      <Suspense>
        <ServiceServiceUserServiceUser_TableSetSelectorDialogContainer
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
