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
  ServiceCityCity_FormDialogActions,
  ServiceCityCity_FormDialogProps,
} from '~/containers/Service/City/City_Form/ServiceCityCity_FormDialogContainer';
import { useServiceCountyCitiesRelationViewPage } from '~/dialogs/Service/County/Cities/RelationViewPage';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceCounty,
  ServiceCountyStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceCountyServiceForCitiesImpl } from '~/services/data-axios/ServiceCountyServiceForCitiesImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceCityCity_FormDialogActionsExtended = ServiceCityCity_FormDialogActions & {
  postGetTemplateAction?: (
    ownerData: any,
    data: ServiceCity,
    storeDiff: (attributeName: keyof ServiceCity, value: any) => void,
  ) => Promise<void>;
  postCreateAction?: (
    data: ServiceCity,
    res: ServiceCityStored,
    onSubmit: (result?: ServiceCityStored) => Promise<void>,
    onClose: () => Promise<void>,
    openCreated?: boolean,
  ) => Promise<void>;
};

export const SERVICE_COUNTY_CITIES_RELATION_FORM_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_COUNTY_CITIES_RELATION_FORM_PAGE_ACTIONS_HOOK';
export type ServiceCityCity_FormActionsHook = (
  ownerData: any,
  data: ServiceCityStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceCity, value: any) => void,
  submit: () => Promise<void>,
) => ServiceCityCity_FormDialogActionsExtended;

export interface ServiceCityCity_FormViewModel extends ServiceCityCity_FormDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<ServiceCity>;
  isDraft?: boolean;
}

const ServiceCityCity_FormViewModelContext = createContext<ServiceCityCity_FormViewModel>({} as any);
export const useServiceCityCity_FormViewModel = () => {
  const context = useContext(ServiceCityCity_FormViewModelContext);
  if (!context) {
    throw new Error('useServiceCityCity_FormViewModel must be used within a(n) ServiceCityCity_FormViewModelProvider');
  }
  return context;
};

export const useServiceCountyCitiesRelationFormPage = (): ((
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
          <ServiceCountyCitiesRelationFormPage
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

export const convertServiceCountyCitiesRelationFormPagePayload = (
  attributeName: keyof ServiceCity,
  value: any,
): any => {
  return value;
};

const ServiceCityCity_FormDialogContainer = lazy(
  () => import('~/containers/Service/City/City_Form/ServiceCityCity_FormDialogContainer'),
);

export interface ServiceCountyCitiesRelationFormPageProps {
  ownerData: any;

  templateDataOverride?: Partial<ServiceCity>;
  isDraft?: boolean;
  ownerValidation?: (data: ServiceCity) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceCityStored, isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_23Z_YH2nEe27Ga2Ojs4Fgg)/RelationFeatureForm
// Name: service::County::cities::RelationFormPage
export default function ServiceCountyCitiesRelationFormPage(props: ServiceCountyCitiesRelationFormPageProps) {
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
  const [editMode, setEditMode] = useState<boolean>(true);
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
      payloadDiff.current![attributeName] = convertServiceCountyCitiesRelationFormPagePayload(attributeName, value);
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
  const { service: customActionsHook } = useTrackService<ServiceCityCity_FormActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_COUNTY_CITIES_RELATION_FORM_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceCityCity_FormDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
    submit,
  );

  // Dialog hooks
  const openServiceCountyCitiesRelationViewPage = useServiceCountyCitiesRelationViewPage();

  // Action section
  const getPageTitle = (data: ServiceCity): string => {
    return t('service.City.City_Form', { defaultValue: 'City Form' });
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
          if (!isErrorNestedValidationError(error, 'cities')) {
            // relation form has no remaining error(s), proceed with submission
            onSubmit(payloadDiff.current, true);
          } else {
            handleError<ServiceCity>(error, { setValidation }, data, isDraft ? 'cities' : undefined);
          }
        } finally {
          setIsLoading(false);
        }

        return;
      }
      setIsLoading(true);
      const payload: typeof payloadDiff.current = cleanUpPayload(payloadDiff.current);
      const { data: res } = await serviceCountyServiceForCitiesImpl.create(ownerData, payload);
      if (customActions?.postCreateAction) {
        await customActions.postCreateAction(data, res, onSubmit, onClose, openCreated);
      } else {
        showSuccessSnack(t('judo.action.create.success', { defaultValue: 'Create successful' }));
        await onSubmit(res);
        if (openCreated) {
          await openServiceCountyCitiesRelationViewPage(res!);
        }
      }
    } catch (error) {
      handleError<ServiceCity>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const getTemplateAction = async (): Promise<JudoRestResponse<ServiceCity>> => {
    try {
      setIsLoading(true);
      const response = await serviceCountyServiceForCitiesImpl.getTemplate();
      const { data: result } = response;
      setData(result as ServiceCityStored);
      payloadDiff.current = {
        ...(result as Record<keyof ServiceCityStored, any>),
      };
      if (customActions?.postGetTemplateAction) {
        await customActions.postGetTemplateAction(ownerData, result, storeDiff);
      }
      if (templateDataOverride) {
        setData((prevData) => ({ ...prevData, ...templateDataOverride }));
        payloadDiff.current = {
          ...(templateDataOverride as Record<keyof ServiceCityStored, any>),
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

  const actions: ServiceCityCity_FormDialogActions = {
    getPageTitle,
    backAction,
    createAction,
    getTemplateAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceCityCity_FormViewModel = {
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
    <ServiceCityCity_FormViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_23Z_YH2nEe27Ga2Ojs4Fgg)/RelationFeatureForm"
          data-page-name="service::County::cities::RelationFormPage"
        />
        <ServiceCityCity_FormDialogContainer
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
    </ServiceCityCity_FormViewModelContext.Provider>
  );
}
