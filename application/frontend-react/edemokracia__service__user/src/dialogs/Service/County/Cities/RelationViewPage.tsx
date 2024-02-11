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
import { Suspense, createContext, lazy, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import { useJudoNavigation } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import type {
  ServiceCityCity_View_EditDialogActions,
  ServiceCityCity_View_EditDialogProps,
} from '~/containers/Service/City/City_View_Edit/ServiceCityCity_View_EditDialogContainer';
import { useServiceCityDistrictsRelationFormPage } from '~/dialogs/Service/City/Districts/RelationFormPage';
import { useServiceCityDistrictsRelationViewPage } from '~/dialogs/Service/City/Districts/RelationViewPage';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceCounty,
  ServiceCountyStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceCountyServiceForCitiesImpl } from '~/services/data-axios/ServiceCountyServiceForCitiesImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceCityCity_View_EditDialogActionsExtended = ServiceCityCity_View_EditDialogActions & {
  postRefreshAction?: (
    data: ServiceCityStored,
    storeDiff: (attributeName: keyof ServiceCity, value: any) => void,
    setValidation: Dispatch<SetStateAction<Map<keyof ServiceCity, string>>>,
  ) => Promise<void>;
};

export const SERVICE_COUNTY_CITIES_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_COUNTY_CITIES_RELATION_VIEW_PAGE_ACTIONS_HOOK';
export type ServiceCityCity_View_EditActionsHook = (
  ownerData: any,
  data: ServiceCityStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceCity, value: any) => void,
  refresh: () => Promise<void>,
  submit: () => Promise<void>,
) => ServiceCityCity_View_EditDialogActionsExtended;

export interface ServiceCityCity_View_EditViewModel extends ServiceCityCity_View_EditDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<ServiceCity>;
  isDraft?: boolean;
}

const ServiceCityCity_View_EditViewModelContext = createContext<ServiceCityCity_View_EditViewModel>({} as any);
export const useServiceCityCity_View_EditViewModel = () => {
  const context = useContext(ServiceCityCity_View_EditViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceCityCity_View_EditViewModel must be used within a(n) ServiceCityCity_View_EditViewModelProvider',
    );
  }
  return context;
};

export const useServiceCountyCitiesRelationViewPage = (): ((
  ownerData: any,
  templateDataOverride?: Partial<ServiceCity>,
  isDraft?: boolean,
  ownerValidation?: (data: ServiceCity) => Promise<void>,
) => Promise<DialogResult<ServiceCityStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (
    ownerData: any,
    templateDataOverride?: Partial<ServiceCity>,
    isDraft?: boolean,
    ownerValidation?: (data: ServiceCity) => Promise<void>,
  ) =>
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
          <ServiceCountyCitiesRelationViewPage
            ownerData={ownerData}
            templateDataOverride={templateDataOverride}
            isDraft={isDraft}
            ownerValidation={ownerValidation}
            onClose={async () => {
              await closeDialog();
              resolve({
                result: 'close',
              });
            }}
            onSubmit={async (result, isDraft) => {
              await closeDialog();
              resolve({
                result: isDraft ? 'submit-draft' : 'submit',
                data: result,
              });
            }}
          />
        ),
      });
    });
};

export const convertServiceCountyCitiesRelationViewPagePayload = (
  attributeName: keyof ServiceCity,
  value: any,
): any => {
  return value;
};

const ServiceCityCity_View_EditDialogContainer = lazy(
  () => import('~/containers/Service/City/City_View_Edit/ServiceCityCity_View_EditDialogContainer'),
);

export interface ServiceCountyCitiesRelationViewPageProps {
  ownerData: any;

  templateDataOverride?: Partial<ServiceCity>;
  isDraft?: boolean;
  ownerValidation?: (data: ServiceCity) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceCityStored, isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_23Z_YH2nEe27Ga2Ojs4Fgg)/RelationFeatureView
// Name: service::County::cities::RelationViewPage
export default function ServiceCountyCitiesRelationViewPage(props: ServiceCountyCitiesRelationViewPageProps) {
  const { ownerData, templateDataOverride, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceCountyServiceForCitiesImpl = useMemo(() => new ServiceCountyServiceForCitiesImpl(judoAxiosProvider), []);

  // Hooks section
  const { t } = useTranslation();
  const { showSuccessSnack, showErrorSnack } = useSnacks();
  const { navigate, back: navigateBack } = useJudoNavigation();
  const { openFilterDialog } = useFilterDialog();
  const { openConfirmDialog } = useConfirmDialog();
  const { setLatestViewData } = useViewData();
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
      payloadDiff.current![attributeName] = convertServiceCountyCitiesRelationViewPagePayload(attributeName, value);
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

  const getPageQueryCustomizer: () => ServiceCityQueryCustomizer = () => ({
    _mask: actions.getMask ? actions.getMask!() : '{name,representation,districts{name}}',
  });

  // Private actions
  const submit = async () => {
    await updateAction();
  };
  const refresh = async () => {
    if (actions.refreshAction) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };

  // Validation
  const validate: (data: ServiceCity) => Promise<void> = async (data) => {
    try {
      if (ownerValidation) {
        await ownerValidation(data);
      } else {
        await serviceCountyServiceForCitiesImpl.validateCreate(ownerData, data);
      }
    } catch (error: any) {
      if (isDraft && isErrorNestedValidationError(error, 'cities')) {
        throw error;
      }
    }
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceCityCity_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_COUNTY_CITIES_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceCityCity_View_EditDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
    refresh,
    submit,
  );

  // Dialog hooks
  const openServiceCityDistrictsRelationFormPage = useServiceCityDistrictsRelationFormPage();
  const openServiceCityDistrictsRelationViewPage = useServiceCityDistrictsRelationViewPage();

  // Action section
  const getPageTitle = (data: ServiceCity): string => {
    return data.representation as string;
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
              await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
  const districtsOpenFormAction = async (isDraft?: boolean, ownerValidation?: (data: any) => Promise<void>) => {
    const { result, data: returnedData } = await openServiceCityDistrictsRelationFormPage(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
        await serviceCountyServiceForCitiesImpl.deleteDistricts(target);
        if (!silentMode) {
          showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
          refreshAction(getPageQueryCustomizer());
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceDistrict>(error, undefined, target);
      }
    }
  };
  const districtsOpenPageAction = async (target: ServiceDistrict | ServiceDistrictStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceDistrictStored).__signedIdentifier)) {
      const { result, data: returnedData } = await openServiceCityDistrictsRelationFormPage(ownerData, target, true);
      // we might need to differentiate result handling between operation inputs and crud relation creates
      if (result === 'submit-draft' && returnedData) {
        const existingIndex = (payloadDiff.current.districts || []).findIndex(
          (r: { __identifier?: string }) => r.__identifier === returnedData.__identifier,
        );
        if (existingIndex > -1) {
          payloadDiff.current.districts[existingIndex] = {
            ...returnedData,
          };
        }
        storeDiff('districts', [...(payloadDiff.current.districts || [])]);
        return;
      }
    } else if (!isDraft) {
      await openServiceCityDistrictsRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const backAction = async () => {
    onClose();
  };
  const cancelAction = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await refreshAction(processQueryCustomizer(getPageQueryCustomizer()));
  };
  const deleteAction = async () => {
    try {
      const confirmed = await openConfirmDialog(
        'row-delete-action',
        t('judo.modal.confirm.confirm-delete', {
          defaultValue: 'Are you sure you would like to delete the selected element?',
        }),
        t('judo.modal.confirm.confirm-title', { defaultValue: 'Confirm action' }),
      );
      if (confirmed) {
        await serviceCountyServiceForCitiesImpl.delete(data);
        showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
        onClose();
      }
    } catch (error) {
      handleError(error, undefined, data);
    }
  };
  const refreshAction = async (
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceCityStored>> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const response = await serviceCountyServiceForCitiesImpl.refresh(ownerData, getPageQueryCustomizer());
      const { data: result } = response;
      setData(result);
      setLatestViewData(result);
      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceCityStored, any>;
      if (customActions?.postRefreshAction) {
        await customActions?.postRefreshAction(result, storeDiff, setValidation);
      }
      return response;
    } catch (error) {
      handleError(error);
      setLatestViewData(null);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const updateAction = async () => {
    setIsLoading(true);
    try {
      const { data: res } = await serviceCountyServiceForCitiesImpl.update(payloadDiff.current);
      if (res) {
        showSuccessSnack(t('judo.action.save.success', { defaultValue: 'Changes saved' }));
        setValidation(new Map<keyof ServiceCity, string>());
        setEditMode(false);
        await actions.refreshAction!(getPageQueryCustomizer());
      }
    } catch (error) {
      handleError<ServiceCity>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: ServiceCityCity_View_EditDialogActions = {
    getPageTitle,
    districtsBulkDeleteAction,
    districtsOpenFormAction,
    districtsFilterAction,
    districtsDeleteAction,
    districtsOpenPageAction,
    backAction,
    cancelAction,
    deleteAction,
    refreshAction,
    updateAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceCityCity_View_EditViewModel = {
    onClose,
    actions,
    ownerData,
    isLoading,
    setIsLoading,
    editMode,
    setEditMode,
    refresh,
    refreshCounter,
    submit,
    data,
    validation,
    setValidation,
    storeDiff,
    isFormUpdateable,
    isFormDeleteable,
    templateDataOverride,
    isDraft,
  };

  // Effect section
  useEffect(() => {
    actions.refreshAction!(getPageQueryCustomizer());
  }, []);

  return (
    <ServiceCityCity_View_EditViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_23Z_YH2nEe27Ga2Ojs4Fgg)/RelationFeatureView"
          data-page-name="service::County::cities::RelationViewPage"
        />
        <ServiceCityCity_View_EditDialogContainer
          ownerData={ownerData}
          onClose={onClose}
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
          submit={submit}
          isDraft={isDraft}
        />
      </Suspense>
    </ServiceCityCity_View_EditViewModelContext.Provider>
  );
}
