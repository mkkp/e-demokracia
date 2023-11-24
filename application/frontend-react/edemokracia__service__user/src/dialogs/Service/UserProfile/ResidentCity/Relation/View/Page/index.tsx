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
import { useServiceCityDistrictsRelationFormPage } from '~/dialogs/Service/City/Districts/Relation/Form/Page';
import { useServiceCityDistrictsRelationViewPage } from '~/dialogs/Service/City/Districts/Relation/View/Page';
import type { ServiceCityCity_View_EditDialogActions } from '~/containers/Service/City/City_View_Edit/ServiceCityCity_View_EditDialogContainer';
import type {
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceUserProfile,
  ServiceUserProfileStored,
} from '~/services/data-api';
import { serviceCityServiceImpl } from '~/services/data-axios';
export type ServiceCityCity_View_EditDialogActionsExtended = ServiceCityCity_View_EditDialogActions & {};

export const SERVICE_USER_PROFILE_RESIDENT_CITY_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceCityCity_View_EditActionsHook';
export type ServiceCityCity_View_EditActionsHook = (
  ownerData: any,
  data: ServiceCityStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceCity, value: any) => void,
) => ServiceCityCity_View_EditDialogActionsExtended;

export const useServiceUserProfileResidentCityRelationViewPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceCityStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any) =>
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
          <ServiceUserProfileResidentCityRelationViewPage
            ownerData={ownerData}
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

export const convertServiceUserProfileResidentCityRelationViewPagePayload = (
  attributeName: keyof ServiceCity,
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

const ServiceCityCity_View_EditDialogContainer = lazy(
  () => import('~/containers/Service/City/City_View_Edit/ServiceCityCity_View_EditDialogContainer'),
);

export interface ServiceUserProfileResidentCityRelationViewPageProps {
  ownerData: any;

  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceCityStored) => Promise<void>;
}

// XMIID: User/(esm/_1LRqMFvREe6jm_SkPSYEYw)/RelationFeatureView
// Name: service::UserProfile::residentCity::Relation::View::Page
// Open in dialog: true
export default function ServiceUserProfileResidentCityRelationViewPage(
  props: ServiceUserProfileResidentCityRelationViewPageProps,
) {
  const { ownerData, onClose, onSubmit } = props;

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
  const [data, setData] = useState<ServiceCityStored>({} as ServiceCityStored);
  const [validation, setValidation] = useState<Map<keyof ServiceCity, string>>(new Map<keyof ServiceCity, string>());

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceCityStored, any>>(
    {} as unknown as Record<keyof ServiceCityStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceCity, value: any) => void = useCallback(
    (attributeName: keyof ServiceCity, value: any) => {
      payloadDiff.current![attributeName] = convertServiceUserProfileResidentCityRelationViewPagePayload(
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

  const pageQueryCustomizer: ServiceCityQueryCustomizer = {
    _mask: '{name,districts{name}}',
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceCityCity_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_PROFILE_RESIDENT_CITY_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceCityCity_View_EditDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
  );

  // Dialog hooks
  const openServiceCityDistrictsRelationFormPage = useServiceCityDistrictsRelationFormPage();
  const openServiceCityDistrictsRelationViewPage = useServiceCityDistrictsRelationViewPage();

  // Calculated section
  const title: string = data.representation as string;

  // Action section
  const backAction = async () => {
    onClose();
  };
  const refreshAction = async (queryCustomizer: ServiceCityQueryCustomizer): Promise<ServiceCityStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceCityServiceImpl.refresh(ownerData, pageQueryCustomizer);

      setData(result);

      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceCityStored, any>;

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const districtsOpenPageAction = async (target?: ServiceDistrictStored) => {
    await openServiceCityDistrictsRelationViewPage(target!);

    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const districtsFilterAction = async (
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
  const districtsOpenFormAction = async () => {
    const { result, data: returnedData } = await openServiceCityDistrictsRelationFormPage(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const districtsDeleteAction = async (target: ServiceDistrictStored, silentMode?: boolean) => {
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
        await serviceCityServiceImpl.deleteDistricts(target);

        if (!silentMode) {
          showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));

          refreshAction(pageQueryCustomizer);
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceDistrict>(error, undefined, target);
      }
    }
  };
  const districtsBulkDeleteAction = async (
    selectedRows: ServiceDistrictStored[],
  ): Promise<DialogResult<Array<ServiceDistrictStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceDistrictStored>({
        dialogTitle: t('service.City.City_View_Edit.districts.BulkDelete', { defaultValue: 'Delete' }),
        itemTitleFn: (item) => item.name!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.districtsDeleteAction) {
              await actions.districtsDeleteAction!(item, true);
            }
            successHandler();
          } catch (error) {
            errorHandler(error);
          }
        },
        onClose: async (needsRefresh) => {
          if (needsRefresh) {
            if (actions.refreshAction) {
              await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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

  const actions: ServiceCityCity_View_EditDialogActions = {
    backAction,
    refreshAction,
    districtsOpenPageAction,
    districtsFilterAction,
    districtsOpenFormAction,
    districtsDeleteAction,
    districtsBulkDeleteAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    actions.refreshAction!(pageQueryCustomizer);
  }, []);

  return (
    <div
      id="User/(esm/_1LRqMFvREe6jm_SkPSYEYw)/RelationFeatureView"
      data-page-name="service::UserProfile::residentCity::Relation::View::Page"
    >
      <Suspense>
        <ServiceCityCity_View_EditDialogContainer
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
    </div>
  );
}
