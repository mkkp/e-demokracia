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
import type { ServiceDistrictDistrict_TableSetSelectorDialogActions } from '~/containers/Service/District/District_Table/SetSelector/ServiceDistrictDistrict_TableSetSelectorDialogContainer';
import type {
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceServiceUser,
  ServiceServiceUserStored,
} from '~/services/data-api';
import { serviceServiceUserServiceForResidentDistrictImpl } from '~/services/data-axios';

export const useServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictTabularReferenceFieldLinkSetSelectorPage =
  (): ((
    ownerData: any,
    alreadySelected: ServiceDistrictStored[],
  ) => Promise<DialogResult<ServiceDistrictStored[]>>) => {
    const [createDialog, closeDialog] = useDialog();

    return (ownerData: any, alreadySelected: ServiceDistrictStored[]) =>
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
            <ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictTabularReferenceFieldLinkSetSelectorPage
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

const ServiceDistrictDistrict_TableSetSelectorDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/District/District_Table/SetSelector/ServiceDistrictDistrict_TableSetSelectorDialogContainer'
    ),
);

export interface ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictTabularReferenceFieldLinkSetSelectorPageProps {
  ownerData: any;
  alreadySelected: ServiceDistrictStored[];
  onClose: () => void;
  onSubmit: (result?: ServiceDistrictStored[]) => void;
}

// Name: service::ServiceUser::ServiceUser_View_Edit::Areas::Residency::residentDistrict::TabularReferenceField::Link::Set::Selector::Page
export default function ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictTabularReferenceFieldLinkSetSelectorPage(
  props: ServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictTabularReferenceFieldLinkSetSelectorPageProps,
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
  const [data, setData] = useState<ServiceDistrictStored[]>([]);
  const [selectionDiff, setSelectionDiff] = useState<ServiceDistrictStored[]>([]);

  // Dialog hooks

  // Calculated section
  const title: string = t('Service.District.District_Table.SetSelector', { defaultValue: 'District Table' });

  // Action section
  const serviceDistrictDistrict_TableSet = async (selected: ServiceDistrictStored[]) => {
    onSubmit(selected);
  };
  const serviceDistrictDistrict_TableBack = async () => {
    onClose();
  };
  const serviceDistrictDistrict_TableTableFilter = async (
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
  const serviceDistrictDistrict_TableTableRange = async (
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored[]> => {
    try {
      return serviceServiceUserServiceForResidentDistrictImpl.getRangeForResidentDistrict(ownerData, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };

  const actions: ServiceDistrictDistrict_TableSetSelectorDialogActions = {
    serviceDistrictDistrict_TableSet,
    serviceDistrictDistrict_TableBack,
    serviceDistrictDistrict_TableTableFilter,
    serviceDistrictDistrict_TableTableRange,
  };

  // Effect section

  return (
    <>
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
    </>
  );
}
