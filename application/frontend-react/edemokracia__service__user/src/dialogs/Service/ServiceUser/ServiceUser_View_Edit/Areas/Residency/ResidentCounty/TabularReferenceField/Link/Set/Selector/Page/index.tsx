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
import type { ServiceCountyCounty_TableSetSelectorDialogActions } from '~/containers/Service/County/County_Table/SetSelector/ServiceCountyCounty_TableSetSelectorDialogContainer';
import type {
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceServiceUser,
  ServiceServiceUserStored,
} from '~/services/data-api';
import { serviceServiceUserServiceForResidentCountyImpl } from '~/services/data-axios';

export const useServiceServiceUserServiceUser_View_EditAreasResidencyResidentCountyTabularReferenceFieldLinkSetSelectorPage =
  (): ((ownerData: any, alreadySelected: ServiceCountyStored[]) => Promise<DialogResult<ServiceCountyStored[]>>) => {
    const [createDialog, closeDialog] = useDialog();

    return (ownerData: any, alreadySelected: ServiceCountyStored[]) =>
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
            <ServiceServiceUserServiceUser_View_EditAreasResidencyResidentCountyTabularReferenceFieldLinkSetSelectorPage
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

const ServiceCountyCounty_TableSetSelectorDialogContainer = lazy(
  () =>
    import('~/containers/Service/County/County_Table/SetSelector/ServiceCountyCounty_TableSetSelectorDialogContainer'),
);

export interface ServiceServiceUserServiceUser_View_EditAreasResidencyResidentCountyTabularReferenceFieldLinkSetSelectorPageProps {
  ownerData: any;
  alreadySelected: ServiceCountyStored[];
  onClose: () => void;
  onSubmit: (result?: ServiceCountyStored[]) => void;
}

// Name: service::ServiceUser::ServiceUser_View_Edit::Areas::Residency::residentCounty::TabularReferenceField::Link::Set::Selector::Page
export default function ServiceServiceUserServiceUser_View_EditAreasResidencyResidentCountyTabularReferenceFieldLinkSetSelectorPage(
  props: ServiceServiceUserServiceUser_View_EditAreasResidencyResidentCountyTabularReferenceFieldLinkSetSelectorPageProps,
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
  const [data, setData] = useState<ServiceCountyStored[]>([]);
  const [selectionDiff, setSelectionDiff] = useState<ServiceCountyStored[]>([]);

  // Dialog hooks

  // Calculated section
  const title: string = t('Service.County.County_Table.SetSelector', { defaultValue: 'County Table' });

  // Action section
  const serviceCountyCounty_TableSet = async (selected: ServiceCountyStored[]) => {
    onSubmit(selected);
  };
  const serviceCountyCounty_TableBack = async () => {
    onClose();
  };
  const serviceCountyCounty_TableTableFilter = async (
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
  const serviceCountyCounty_TableTableRange = async (
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<ServiceCountyStored[]> => {
    try {
      return serviceServiceUserServiceForResidentCountyImpl.getRangeForResidentCounty(ownerData, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };

  const actions: ServiceCountyCounty_TableSetSelectorDialogActions = {
    serviceCountyCounty_TableSet,
    serviceCountyCounty_TableBack,
    serviceCountyCounty_TableTableFilter,
    serviceCountyCounty_TableTableRange,
  };

  // Effect section

  return (
    <>
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
    </>
  );
}
