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
  ServiceCreateIssueInput,
  ServiceCreateIssueInputStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceCreateIssueInputServiceForCityImpl } from '~/services/data-axios/ServiceCreateIssueInputServiceForCityImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceCityCity_View_EditDialogActionsExtended = ServiceCityCity_View_EditDialogActions & {
  postRefreshAction?: (
    data: ServiceCityStored,
    storeDiff: (attributeName: keyof ServiceCity, value: any) => void,
    setValidation: Dispatch<SetStateAction<Map<keyof ServiceCity, string>>>,
  ) => Promise<void>;
};

export const SERVICE_CREATE_ISSUE_INPUT_CITY_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_CREATE_ISSUE_INPUT_CITY_RELATION_VIEW_PAGE_ACTIONS_HOOK';
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

export const useServiceCreateIssueInputCityRelationViewPage = (): ((
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
          <ServiceCreateIssueInputCityRelationViewPage
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

export const convertServiceCreateIssueInputCityRelationViewPagePayload = (
  attributeName: keyof ServiceCity,
  value: any,
): any => {
  return value;
};

const ServiceCityCity_View_EditDialogContainer = lazy(
  () => import('~/containers/Service/City/City_View_Edit/ServiceCityCity_View_EditDialogContainer'),
);

export interface ServiceCreateIssueInputCityRelationViewPageProps {
  ownerData: any;

  templateDataOverride?: Partial<ServiceCity>;
  isDraft?: boolean;
  ownerValidation?: (data: ServiceCity) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceCityStored, isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_AFpBgNvXEe2Bgcx6em3jZg)/RelationFeatureView
// Name: service::CreateIssueInput::city::RelationViewPage
export default function ServiceCreateIssueInputCityRelationViewPage(
  props: ServiceCreateIssueInputCityRelationViewPageProps,
) {
  const { ownerData, templateDataOverride, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceCreateIssueInputServiceForCityImpl = useMemo(
    () => new ServiceCreateIssueInputServiceForCityImpl(judoAxiosProvider),
    [],
  );

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
      payloadDiff.current![attributeName] = convertServiceCreateIssueInputCityRelationViewPagePayload(
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

  const getPageQueryCustomizer: () => ServiceCityQueryCustomizer = () => ({
    _mask: actions.getMask ? actions.getMask!() : '{name,representation,districts{name}}',
  });

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    if (actions.refreshAction) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };

  // Validation
  const validate: (data: ServiceCity) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceCityCity_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_CREATE_ISSUE_INPUT_CITY_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
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
  const districtsBulkRemoveAction = async (
    selectedRows: ServiceDistrictStored[],
  ): Promise<DialogResult<Array<ServiceDistrictStored>>> => {
    return new Promise((resolve) => {
      const selectedIds = selectedRows.map((r) => r.__identifier);
      const newList = (data?.districts ?? []).filter((c: any) => !selectedIds.includes(c.__identifier));
      storeDiff('districts', newList);
      resolve({
        result: 'submit',
        data: [],
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
        await serviceCreateIssueInputServiceForCityImpl.deleteDistricts(target);
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
  const districtsRemoveAction = async (target?: ServiceDistrictStored, silentMode?: boolean) => {
    if (target) {
      const newList = (data?.districts ?? []).filter((c: any) => c.__identifier !== target!.__identifier);
      storeDiff('districts', newList);
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
  const refreshAction = async (queryCustomizer: ServiceCityQueryCustomizer): Promise<ServiceCityStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceCreateIssueInputServiceForCityImpl.refresh(ownerData, getPageQueryCustomizer());
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
      return result;
    } catch (error) {
      handleError(error);
      setLatestViewData(null);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };

  const actions: ServiceCityCity_View_EditDialogActions = {
    getPageTitle,
    districtsBulkDeleteAction,
    districtsBulkRemoveAction,
    districtsOpenFormAction,
    districtsFilterAction,
    districtsDeleteAction,
    districtsRemoveAction,
    districtsOpenPageAction,
    backAction,
    refreshAction,
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
          id="User/(esm/_AFpBgNvXEe2Bgcx6em3jZg)/RelationFeatureView"
          data-page-name="service::CreateIssueInput::city::RelationViewPage"
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
