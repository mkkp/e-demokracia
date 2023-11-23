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
import { serviceCountyServiceImpl } from '~/services/data-axios';
export type ServiceCountyCounty_View_EditDialogActionsExtended = ServiceCountyCounty_View_EditDialogActions & {};

export const SERVICE_USER_PROFILE_ACTIVITY_COUNTIES_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceCountyCounty_View_EditActionsHook';
export type ServiceCountyCounty_View_EditActionsHook = (
  ownerData: any,
  data: ServiceCountyStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceCounty, value: any) => void,
) => ServiceCountyCounty_View_EditDialogActionsExtended;

export const useServiceUserProfileActivityCountiesRelationViewPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceCountyStored>>) => {
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
          <ServiceUserProfileActivityCountiesRelationViewPage
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

export const convertServiceUserProfileActivityCountiesRelationViewPagePayload = (
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

export interface ServiceUserProfileActivityCountiesRelationViewPageProps {
  ownerData: any;

  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceCountyStored) => Promise<void>;
}

// XMIID: User/(esm/_gu_zQFvREe6jm_SkPSYEYw)/RelationFeatureView
// Name: service::UserProfile::activityCounties::Relation::View::Page
// Open in dialog: true
export default function ServiceUserProfileActivityCountiesRelationViewPage(
  props: ServiceUserProfileActivityCountiesRelationViewPageProps,
) {
  const { ownerData, onClose, onSubmit } = props;

  // Hooks section
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
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
      payloadDiff.current![attributeName] = convertServiceUserProfileActivityCountiesRelationViewPagePayload(
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

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceCountyCounty_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_PROFILE_ACTIVITY_COUNTIES_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceCountyCounty_View_EditDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
  );

  // Dialog hooks
  const openServiceCountyCitiesRelationFormPage = useServiceCountyCitiesRelationFormPage();
  const openServiceCountyCitiesRelationViewPage = useServiceCountyCitiesRelationViewPage();

  // Calculated section
  const title: string = data.representation as string;

  // Action section
  const backAction = async () => {
    onClose();
  };
  const refreshAction = async (queryCustomizer: ServiceCountyQueryCustomizer): Promise<ServiceCountyStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceCountyServiceImpl.refresh(ownerData, pageQueryCustomizer);

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
  const citiesOpenPageAction = async (target?: ServiceCityStored) => {
    await openServiceCountyCitiesRelationViewPage(target!);

    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const citiesFilterAction = async (
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
  const citiesOpenFormAction = async () => {
    const { result, data: returnedData } = await openServiceCountyCitiesRelationFormPage(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const citiesDeleteAction = async (target: ServiceCityStored, silentMode?: boolean) => {
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
        await serviceCountyServiceImpl.deleteCities(target);

        if (!silentMode) {
          enqueueSnackbar(t('judo.action.delete.success', { defaultValue: 'Delete successful' }), {
            variant: 'success',
            ...toastConfig.success,
          });

          refreshAction(pageQueryCustomizer);
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceCity>(error, undefined, target);
      }
    }
  };
  const citiesBulkDeleteAction = async (
    selectedRows: ServiceCityStored[],
  ): Promise<DialogResult<Array<ServiceCityStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceCityStored>({
        dialogTitle: t('service.County.County_View_Edit.cities.BulkDelete', { defaultValue: 'Delete' }),
        itemTitleFn: (item) => item.name!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.citiesDeleteAction) {
              await actions.citiesDeleteAction!(item, true);
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

  const actions: ServiceCountyCounty_View_EditDialogActions = {
    backAction,
    refreshAction,
    citiesOpenPageAction,
    citiesFilterAction,
    citiesOpenFormAction,
    citiesDeleteAction,
    citiesBulkDeleteAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    actions.refreshAction!(pageQueryCustomizer);
  }, []);

  return (
    <div
      id="User/(esm/_gu_zQFvREe6jm_SkPSYEYw)/RelationFeatureView"
      data-page-name="service::UserProfile::activityCounties::Relation::View::Page"
    >
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
    </div>
  );
}
