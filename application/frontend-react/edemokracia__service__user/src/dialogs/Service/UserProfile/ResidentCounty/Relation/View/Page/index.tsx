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
import { useServiceCountyCitiesRelationFormPage } from '~/dialogs/Service/County/Cities/Relation/Form/Page';
import { useServiceCountyCitiesRelationViewPage } from '~/dialogs/Service/County/Cities/Relation/View/Page';
import type { ServiceCountyCounty_View_EditDialogActions } from '~/containers/Service/County/County_View_Edit/ServiceCountyCounty_View_EditDialogContainer';
import type {
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceUserProfile,
  ServiceUserProfileStored,
} from '~/services/data-api';
import { serviceUserProfileServiceForResidentCountyImpl } from '~/services/data-axios';

export const useServiceUserProfileResidentCountyRelationViewPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceCountyStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any) =>
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
          <ServiceUserProfileResidentCountyRelationViewPage
            ownerData={ownerData}
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

export const convertServiceUserProfileResidentCountyRelationViewPagePayload = (
  attributeName: keyof ServiceCounty,
  value: any,
): any => {
  const dateTypes: string[] = [];
  const dateTimeTypes: string[] = [];
  const timeTypes: string[] = [];
  if (dateTypes.includes(attributeName as string)) {
    return uiDateToServiceDate(value);
  } else if (dateTimeTypes.includes(attributeName as string)) {
    return value;
  } else if (timeTypes.includes(attributeName as string)) {
    return uiTimeToServiceTime(value);
  }
  return value;
};

const ServiceCountyCounty_View_EditDialogContainer = lazy(
  () => import('~/containers/Service/County/County_View_Edit/ServiceCountyCounty_View_EditDialogContainer'),
);

export interface ServiceUserProfileResidentCountyRelationViewPageProps {
  ownerData: any;

  onClose: () => void;
  onSubmit: (result?: ServiceCountyStored) => void;
}

// Name: service::UserProfile::residentCounty::Relation::View::Page
export default function ServiceUserProfileResidentCountyRelationViewPage(
  props: ServiceUserProfileResidentCountyRelationViewPageProps,
) {
  const { ownerData, onClose, onSubmit } = props;

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
  const [data, setData] = useState<ServiceCountyStored>({} as ServiceCountyStored);
  const [validation, setValidation] = useState<Map<keyof ServiceCounty, string>>(
    new Map<keyof ServiceCounty, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceCountyStored, any>>(
    {} as unknown as Record<keyof ServiceCountyStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceCounty, value: any) => void = useCallback(
    (attributeName: keyof ServiceCounty, value: any) => {
      payloadDiff.current![attributeName] = convertServiceUserProfileResidentCountyRelationViewPagePayload(
        attributeName,
        value,
      );
      setData((prevData) => ({
        ...prevData,
        [attributeName]: value,
      }));
      if (!editMode) {
        setEditMode(true);
      }
    },
    [data, editMode],
  );
  const isFormUpdateable = useCallback(() => {
    return true && typeof data?.__updateable === 'boolean' && data?.__updateable;
  }, [data]);
  const isFormDeleteable = useCallback(() => {
    return true && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
  }, [data]);

  const pageQueryCustomizer: ServiceCountyQueryCustomizer = {
    _mask: '{name,cities{name}}',
  };

  // Dialog hooks
  const openServiceCountyCitiesRelationFormPage = useServiceCountyCitiesRelationFormPage();
  const openServiceCountyCitiesRelationViewPage = useServiceCountyCitiesRelationViewPage();

  // Calculated section
  const title: string = data.representation as string;

  // Action section
  const serviceCountyCounty_View_EditBack = async () => {
    onClose();
  };
  const serviceCountyCounty_View_EditRefresh = async (
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<ServiceCountyStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceUserProfileServiceForResidentCountyImpl.refresh(ownerData, pageQueryCustomizer);

      setData(result);

      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceCountyStored, any>;

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const serviceCountyCounty_View_EditCitiesView = async (target?: ServiceCityStored) => {
    await openServiceCountyCitiesRelationViewPage(target!);

    if (!editMode) {
      await actions.serviceCountyCounty_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const serviceCountyCounty_View_EditCitiesFilter = async (
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
  const serviceCountyCounty_View_EditCitiesCreateOpen = async () => {
    const { result, data: returnedData } = await openServiceCountyCitiesRelationFormPage(data);
    if (!editMode) {
      await actions.serviceCountyCounty_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const serviceCountyCounty_View_EditCitiesDelete = async (target: ServiceCityStored, silentMode?: boolean) => {
    try {
      const confirmed = !silentMode
        ? await openConfirmDialog(
            'row-delete-action',
            t('judo.modal.confirm.confirm-delete', {
              defaultValue: 'Are you sure you would like to delete the selected element?',
            }),
            t('judo.modal.confirm.confirm-title', { defaultValue: 'Confirm action' }),
          )
        : true;
      if (confirmed) {
        await serviceUserProfileServiceForResidentCountyImpl.deleteCities(target);

        if (!silentMode) {
          enqueueSnackbar(t('judo.action.delete.success', { defaultValue: 'Delete successful' }), {
            variant: 'success',
            ...toastConfig.success,
          });

          serviceCountyCounty_View_EditRefresh(pageQueryCustomizer);
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceCity>(error, undefined, target);
      }
    }
  };
  const serviceCountyCounty_View_EditCitiesBulkDelete = async (
    selectedRows: ServiceCityStored[],
  ): Promise<DialogResult<Array<ServiceCityStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceCityStored>({
        dialogTitle: t('TMP', { defaultValue: 'Delete' }),
        itemTitleFn: (item) => item.name!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.serviceCountyCounty_View_EditCitiesDelete) {
              await actions.serviceCountyCounty_View_EditCitiesDelete!(item, true);
            }
            successHandler();
          } catch (error) {
            errorHandler(error);
          }
        },
        onClose: async (needsRefresh) => {
          if (needsRefresh) {
            if (actions.serviceCountyCounty_View_EditRefresh) {
              await actions.serviceCountyCounty_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
            }
            resolve({
              result: 'submit',
              data: [],
            });
          } else {
            resolve({
              result: 'close',
              data: [],
            });
          }
        },
      });
    });
  };

  const actions: ServiceCountyCounty_View_EditDialogActions = {
    serviceCountyCounty_View_EditBack,
    serviceCountyCounty_View_EditRefresh,
    serviceCountyCounty_View_EditCitiesView,
    serviceCountyCounty_View_EditCitiesFilter,
    serviceCountyCounty_View_EditCitiesCreateOpen,
    serviceCountyCounty_View_EditCitiesDelete,
    serviceCountyCounty_View_EditCitiesBulkDelete,
  };

  // Effect section
  useEffect(() => {
    actions.serviceCountyCounty_View_EditRefresh!(pageQueryCustomizer);
  }, []);

  return (
    <>
      <Suspense>
        <ServiceCountyCounty_View_EditDialogContainer
          ownerData={ownerData}
          onClose={onClose}
          title={title}
          actions={actions}
          isLoading={isLoading}
          editMode={editMode}
          refreshCounter={refreshCounter}
          data={data}
          storeDiff={storeDiff}
          isFormUpdateable={isFormUpdateable}
          isFormDeleteable={isFormDeleteable}
          validation={validation}
          setValidation={setValidation}
        />
      </Suspense>
    </>
  );
}
