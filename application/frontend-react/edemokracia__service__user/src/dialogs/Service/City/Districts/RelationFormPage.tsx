//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { Suspense, createContext, lazy, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import type {
  ServiceDistrictDistrict_FormDialogActions,
  ServiceDistrictDistrict_FormDialogProps,
} from '~/containers/Service/District/District_Form/ServiceDistrictDistrict_FormDialogContainer';
import { useServiceCityDistrictsRelationViewPage } from '~/dialogs/Service/City/Districts/RelationViewPage';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceCity,
  ServiceCityStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceCityServiceForDistrictsImpl } from '~/services/data-axios/ServiceCityServiceForDistrictsImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceDistrictDistrict_FormDialogActionsExtended = ServiceDistrictDistrict_FormDialogActions & {
  postGetTemplateAction?: (
    ownerData: any,
    data: ServiceDistrict,
    storeDiff: (attributeName: keyof ServiceDistrict, value: any) => void,
  ) => Promise<void>;
  postCreateAction?: (
    data: ServiceDistrict,
    res: ServiceDistrictStored,
    onSubmit: (result?: ServiceDistrictStored) => Promise<void>,
    onClose: () => Promise<void>,
    openCreated?: boolean,
  ) => Promise<void>;
};

export const SERVICE_CITY_DISTRICTS_RELATION_FORM_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_CITY_DISTRICTS_RELATION_FORM_PAGE_ACTIONS_HOOK';
export type ServiceDistrictDistrict_FormActionsHook = (
  ownerData: any,
  data: ServiceDistrictStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceDistrict, value: any) => void,
  submit: () => Promise<void>,
) => ServiceDistrictDistrict_FormDialogActionsExtended;

export interface ServiceDistrictDistrict_FormViewModel extends ServiceDistrictDistrict_FormDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<ServiceDistrict>;
  isDraft?: boolean;
}

const ServiceDistrictDistrict_FormViewModelContext = createContext<ServiceDistrictDistrict_FormViewModel>({} as any);
export const useServiceDistrictDistrict_FormViewModel = () => {
  const context = useContext(ServiceDistrictDistrict_FormViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceDistrictDistrict_FormViewModel must be used within a(n) ServiceDistrictDistrict_FormViewModelProvider',
    );
  }
  return context;
};

export const useServiceCityDistrictsRelationFormPage = (): ((
  ownerData: any,
  templateDataOverride?: Partial<ServiceDistrict>,
  isDraft?: boolean,
  ownerValidation?: (data: ServiceDistrict) => Promise<void>,
) => Promise<DialogResult<ServiceDistrictStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (
    ownerData: any,
    templateDataOverride?: Partial<ServiceDistrict>,
    isDraft?: boolean,
    ownerValidation?: (data: ServiceDistrict) => Promise<void>,
  ) =>
    new Promise((resolve) => {
      createDialog({
        fullWidth: true,
        maxWidth: 'xs',
        onClose: async (event: object, reason: string) => {
          if (reason !== 'backdropClick') {
            await closeDialog();
            resolve({
              result: 'close',
            });
          }
        },
        children: (
          <ServiceCityDistrictsRelationFormPage
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

export const convertServiceCityDistrictsRelationFormPagePayload = (
  attributeName: keyof ServiceDistrict,
  value: any,
): any => {
  return value;
};

const ServiceDistrictDistrict_FormDialogContainer = lazy(
  () => import('~/containers/Service/District/District_Form/ServiceDistrictDistrict_FormDialogContainer'),
);

export interface ServiceCityDistrictsRelationFormPageProps {
  ownerData: any;

  templateDataOverride?: Partial<ServiceDistrict>;
  isDraft?: boolean;
  ownerValidation?: (data: ServiceDistrict) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceDistrictStored, isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_a0XksX2iEe2LTNnGda5kaw)/RelationFeatureForm
// Name: service::City::districts::RelationFormPage
export default function ServiceCityDistrictsRelationFormPage(props: ServiceCityDistrictsRelationFormPageProps) {
  const { ownerData, templateDataOverride, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceCityServiceForDistrictsImpl = useMemo(
    () => new ServiceCityServiceForDistrictsImpl(judoAxiosProvider),
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
  const [editMode, setEditMode] = useState<boolean>(true);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<ServiceDistrictStored>({} as ServiceDistrictStored);
  const [validation, setValidation] = useState<Map<keyof ServiceDistrict, string>>(
    new Map<keyof ServiceDistrict, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceDistrictStored, any>>(
    {} as unknown as Record<keyof ServiceDistrictStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceDistrict, value: any) => void = useCallback(
    (attributeName: keyof ServiceDistrict, value: any) => {
      payloadDiff.current![attributeName] = convertServiceCityDistrictsRelationFormPagePayload(attributeName, value);
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
    return true;
  }, [data]);
  const isFormDeleteable = useCallback(() => {
    return false;
  }, [data]);

  // Private actions
  const submit = async () => {
    await createAction();
  };
  const refresh = async () => {};

  // Validation
  const validate: (data: ServiceDistrict) => Promise<void> = async (data) => {
    try {
      if (ownerValidation) {
        await ownerValidation(data);
      } else {
        await serviceCityServiceForDistrictsImpl.validateCreate(ownerData, data);
      }
    } catch (error: any) {
      if (isDraft && isErrorNestedValidationError(error, 'districts')) {
        throw error;
      }
    }
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceDistrictDistrict_FormActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_CITY_DISTRICTS_RELATION_FORM_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceDistrictDistrict_FormDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
    submit,
  );

  // Dialog hooks
  const openServiceCityDistrictsRelationViewPage = useServiceCityDistrictsRelationViewPage();

  // Action section
  const getPageTitle = (data: ServiceDistrict): string => {
    return t('service.District.District_Form', { defaultValue: 'District Form' });
  };
  const backAction = async () => {
    onClose();
  };
  const createAction = async (openCreated?: boolean) => {
    try {
      if (isDraft) {
        try {
          setIsLoading(true);
          await validate(cleanUpPayload(payloadDiff.current));
          onSubmit(payloadDiff.current, true);
        } catch (error) {
          if (!isErrorNestedValidationError(error, 'districts')) {
            // relation form has no remaining error(s), proceed with submission
            onSubmit(payloadDiff.current, true);
          } else {
            handleError<ServiceDistrict>(error, { setValidation }, data, isDraft ? 'districts' : undefined);
          }
        } finally {
          setIsLoading(false);
        }

        return;
      }
      setIsLoading(true);
      const payload: typeof payloadDiff.current = cleanUpPayload(payloadDiff.current);
      const { data: res } = await serviceCityServiceForDistrictsImpl.create(ownerData, payload);
      if (customActions?.postCreateAction) {
        await customActions.postCreateAction(data, res, onSubmit, onClose, openCreated);
      } else {
        showSuccessSnack(t('judo.action.create.success', { defaultValue: 'Create successful' }));
        await onSubmit(res, isDraft);
        if (openCreated) {
          await openServiceCityDistrictsRelationViewPage(res!);
        }
      }
    } catch (error) {
      handleError<ServiceDistrict>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const getTemplateAction = async (): Promise<JudoRestResponse<ServiceDistrict>> => {
    try {
      setIsLoading(true);
      const response = await serviceCityServiceForDistrictsImpl.getTemplate();
      const { data: result } = response;
      setData(result as ServiceDistrictStored);
      payloadDiff.current = {
        ...(result as Record<keyof ServiceDistrictStored, any>),
      };
      if (customActions?.postGetTemplateAction) {
        await customActions.postGetTemplateAction(ownerData, result, storeDiff);
      }
      if (templateDataOverride) {
        setData((prevData) => ({ ...prevData, ...templateDataOverride }));
        payloadDiff.current = {
          ...(templateDataOverride as Record<keyof ServiceDistrictStored, any>),
        };
      }
      return response;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: ServiceDistrictDistrict_FormDialogActions = {
    getPageTitle,
    backAction,
    createAction,
    getTemplateAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceDistrictDistrict_FormViewModel = {
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
    actions.getTemplateAction!();
  }, []);

  return (
    <ServiceDistrictDistrict_FormViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_a0XksX2iEe2LTNnGda5kaw)/RelationFeatureForm"
          data-page-name="service::City::districts::RelationFormPage"
        />
        <ServiceDistrictDistrict_FormDialogContainer
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
    </ServiceDistrictDistrict_FormViewModelContext.Provider>
  );
}
