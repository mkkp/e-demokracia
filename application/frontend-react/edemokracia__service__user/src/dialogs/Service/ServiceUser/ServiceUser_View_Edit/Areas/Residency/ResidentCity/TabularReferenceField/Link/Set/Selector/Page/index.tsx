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
import type { ServiceCityCity_TableSetSelectorDialogActions } from '~/containers/Service/City/City_Table/SetSelector/ServiceCityCity_TableSetSelectorDialogContainer';
import type {
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceServiceUser,
  ServiceServiceUserStored,
} from '~/services/data-api';
import { serviceServiceUserServiceForResidentCityImpl } from '~/services/data-axios';

export const useServiceServiceUserServiceUser_View_EditAreasResidencyResidentCityTabularReferenceFieldLinkSetSelectorPage =
  (): ((ownerData: any, alreadySelected: ServiceCityStored[]) => Promise<DialogResult<ServiceCityStored[]>>) => {
    const [createDialog, closeDialog] = useDialog();

    return (ownerData: any, alreadySelected: ServiceCityStored[]) =>
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
            <ServiceServiceUserServiceUser_View_EditAreasResidencyResidentCityTabularReferenceFieldLinkSetSelectorPage
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

const ServiceCityCity_TableSetSelectorDialogContainer = lazy(
  () => import('~/containers/Service/City/City_Table/SetSelector/ServiceCityCity_TableSetSelectorDialogContainer'),
);

export interface ServiceServiceUserServiceUser_View_EditAreasResidencyResidentCityTabularReferenceFieldLinkSetSelectorPageProps {
  ownerData: any;
  alreadySelected: ServiceCityStored[];
  onClose: () => void;
  onSubmit: (result?: ServiceCityStored[]) => void;
}

// Name: service::ServiceUser::ServiceUser_View_Edit::Areas::Residency::residentCity::TabularReferenceField::Link::Set::Selector::Page
export default function ServiceServiceUserServiceUser_View_EditAreasResidencyResidentCityTabularReferenceFieldLinkSetSelectorPage(
  props: ServiceServiceUserServiceUser_View_EditAreasResidencyResidentCityTabularReferenceFieldLinkSetSelectorPageProps,
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
  const [data, setData] = useState<ServiceCityStored[]>([]);
  const [selectionDiff, setSelectionDiff] = useState<ServiceCityStored[]>([]);

  // Dialog hooks

  // Calculated section
  const title: string = t('Service.City.City_Table.SetSelector', { defaultValue: 'City Table' });

  // Action section
  const serviceCityCity_TableSet = async (selected: ServiceCityStored[]) => {
    onSubmit(selected);
  };
  const serviceCityCity_TableBack = async () => {
    onClose();
  };
  const serviceCityCity_TableTableFilter = async (
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
  const serviceCityCity_TableTableRange = async (
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<ServiceCityStored[]> => {
    try {
      return serviceServiceUserServiceForResidentCityImpl.getRangeForResidentCity(ownerData, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };

  const actions: ServiceCityCity_TableSetSelectorDialogActions = {
    serviceCityCity_TableSet,
    serviceCityCity_TableBack,
    serviceCityCity_TableTableFilter,
    serviceCityCity_TableTableRange,
  };

  // Effect section

  return (
    <>
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
    </>
  );
}
