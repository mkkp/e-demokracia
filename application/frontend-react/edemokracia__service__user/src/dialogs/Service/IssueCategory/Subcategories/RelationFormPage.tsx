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
  ServiceIssueCategoryIssueCategory_FormDialogActions,
  ServiceIssueCategoryIssueCategory_FormDialogProps,
} from '~/containers/Service/IssueCategory/IssueCategory_Form/ServiceIssueCategoryIssueCategory_FormDialogContainer';
import { useServiceIssueCategoryIssueCategory_FormOwnerLinkSetSelectorPage } from '~/dialogs/Service/IssueCategory/IssueCategory_Form/Owner/LinkSetSelectorPage';
import { useServiceIssueCategorySubcategoriesRelationViewPage } from '~/dialogs/Service/IssueCategory/Subcategories/RelationViewPage';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceIssueCategoryServiceForSubcategoriesImpl } from '~/services/data-axios/ServiceIssueCategoryServiceForSubcategoriesImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceIssueCategoryIssueCategory_FormDialogActionsExtended =
  ServiceIssueCategoryIssueCategory_FormDialogActions & {
    postGetTemplateAction?: (
      ownerData: any,
      data: ServiceIssueCategory,
      storeDiff: (attributeName: keyof ServiceIssueCategory, value: any) => void,
    ) => Promise<void>;
    postCreateAction?: (
      data: ServiceIssueCategory,
      res: ServiceIssueCategoryStored,
      onSubmit: (result?: ServiceIssueCategoryStored) => Promise<void>,
      onClose: () => Promise<void>,
      openCreated?: boolean,
    ) => Promise<void>;
  };

export const SERVICE_ISSUE_CATEGORY_SUBCATEGORIES_RELATION_FORM_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_ISSUE_CATEGORY_SUBCATEGORIES_RELATION_FORM_PAGE_ACTIONS_HOOK';
export type ServiceIssueCategoryIssueCategory_FormActionsHook = (
  ownerData: any,
  data: ServiceIssueCategoryStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceIssueCategory, value: any) => void,
  submit: () => Promise<void>,
) => ServiceIssueCategoryIssueCategory_FormDialogActionsExtended;

export interface ServiceIssueCategoryIssueCategory_FormViewModel
  extends ServiceIssueCategoryIssueCategory_FormDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<ServiceIssueCategory>;
  isDraft?: boolean;
}

const ServiceIssueCategoryIssueCategory_FormViewModelContext =
  createContext<ServiceIssueCategoryIssueCategory_FormViewModel>({} as any);
export const useServiceIssueCategoryIssueCategory_FormViewModel = () => {
  const context = useContext(ServiceIssueCategoryIssueCategory_FormViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceIssueCategoryIssueCategory_FormViewModel must be used within a(n) ServiceIssueCategoryIssueCategory_FormViewModelProvider',
    );
  }
  return context;
};

export const useServiceIssueCategorySubcategoriesRelationFormPage = (): ((
  ownerData: any,
  templateDataOverride?: Partial<ServiceIssueCategory>,
  isDraft?: boolean,
  ownerValidation?: (data: ServiceIssueCategory) => Promise<void>,
) => Promise<DialogResult<ServiceIssueCategoryStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (
    ownerData: any,
    templateDataOverride?: Partial<ServiceIssueCategory>,
    isDraft?: boolean,
    ownerValidation?: (data: ServiceIssueCategory) => Promise<void>,
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
          <ServiceIssueCategorySubcategoriesRelationFormPage
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

export const convertServiceIssueCategorySubcategoriesRelationFormPagePayload = (
  attributeName: keyof ServiceIssueCategory,
  value: any,
): any => {
  return value;
};

const ServiceIssueCategoryIssueCategory_FormDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/IssueCategory/IssueCategory_Form/ServiceIssueCategoryIssueCategory_FormDialogContainer'
    ),
);

export interface ServiceIssueCategorySubcategoriesRelationFormPageProps {
  ownerData: any;

  templateDataOverride?: Partial<ServiceIssueCategory>;
  isDraft?: boolean;
  ownerValidation?: (data: ServiceIssueCategory) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceIssueCategoryStored, isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_qT2joGksEe25ONJ3V89cVA)/RelationFeatureForm
// Name: service::IssueCategory::subcategories::RelationFormPage
export default function ServiceIssueCategorySubcategoriesRelationFormPage(
  props: ServiceIssueCategorySubcategoriesRelationFormPageProps,
) {
  const { ownerData, templateDataOverride, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceIssueCategoryServiceForSubcategoriesImpl = useMemo(
    () => new ServiceIssueCategoryServiceForSubcategoriesImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceIssueCategoryStored>({} as ServiceIssueCategoryStored);
  const [validation, setValidation] = useState<Map<keyof ServiceIssueCategory, string>>(
    new Map<keyof ServiceIssueCategory, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceIssueCategoryStored, any>>(
    {} as unknown as Record<keyof ServiceIssueCategoryStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceIssueCategory, value: any) => void = useCallback(
    (attributeName: keyof ServiceIssueCategory, value: any) => {
      payloadDiff.current![attributeName] = convertServiceIssueCategorySubcategoriesRelationFormPagePayload(
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
  const validate: (data: ServiceIssueCategory) => Promise<void> = async (data) => {
    try {
      if (ownerValidation) {
        await ownerValidation(data);
      } else {
        await serviceIssueCategoryServiceForSubcategoriesImpl.validateCreate(ownerData, data);
      }
    } catch (error: any) {
      if (isDraft && isErrorNestedValidationError(error, 'subcategories')) {
        throw error;
      }
    }
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceIssueCategoryIssueCategory_FormActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_CATEGORY_SUBCATEGORIES_RELATION_FORM_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceIssueCategoryIssueCategory_FormDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
    submit,
  );

  // Dialog hooks
  const openServiceIssueCategoryIssueCategory_FormOwnerLinkSetSelectorPage =
    useServiceIssueCategoryIssueCategory_FormOwnerLinkSetSelectorPage();
  const openServiceIssueCategorySubcategoriesRelationViewPage = useServiceIssueCategorySubcategoriesRelationViewPage();

  // Action section
  const getPageTitle = (data: ServiceIssueCategory): string => {
    return t('service.IssueCategory.IssueCategory_Form', { defaultValue: 'IssueCategory Form' });
  };
  const ownerAutocompleteRangeAction = async (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored[]> => {
    try {
      const { data: result } = await serviceIssueCategoryServiceForSubcategoriesImpl.getRangeForOwner(
        cleanUpPayload(data),
        queryCustomizer,
      );
      return result;
    } catch (error: any) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const ownerOpenSetSelectorAction = async (): Promise<ServiceServiceUserStored | undefined> => {
    const { result, data: returnedData } = await openServiceIssueCategoryIssueCategory_FormOwnerLinkSetSelectorPage(
      data,
      data.owner ? [data.owner] : [],
    );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('owner', returnedData[0]);
        return returnedData[0];
      }
    }
    return undefined;
  };
  const ownerUnsetAction = async (target: ServiceServiceUser | ServiceServiceUserStored) => {
    storeDiff('owner', null);
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
          if (!isErrorNestedValidationError(error, 'subcategories')) {
            // relation form has no remaining error(s), proceed with submission
            onSubmit(payloadDiff.current, true);
          } else {
            handleError<ServiceIssueCategory>(error, { setValidation }, data, isDraft ? 'subcategories' : undefined);
          }
        } finally {
          setIsLoading(false);
        }

        return;
      }
      setIsLoading(true);
      const payload: typeof payloadDiff.current = cleanUpPayload(payloadDiff.current);
      const { data: res } = await serviceIssueCategoryServiceForSubcategoriesImpl.create(ownerData, payload);
      if (customActions?.postCreateAction) {
        await customActions.postCreateAction(data, res, onSubmit, onClose, openCreated);
      } else {
        showSuccessSnack(t('judo.action.create.success', { defaultValue: 'Create successful' }));
        await onSubmit(res, isDraft);
        if (openCreated) {
          await openServiceIssueCategorySubcategoriesRelationViewPage(res!);
        }
      }
    } catch (error) {
      handleError<ServiceIssueCategory>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const getTemplateAction = async (): Promise<JudoRestResponse<ServiceIssueCategory>> => {
    try {
      setIsLoading(true);
      const response = await serviceIssueCategoryServiceForSubcategoriesImpl.getTemplate();
      const { data: result } = response;
      setData(result as ServiceIssueCategoryStored);
      payloadDiff.current = {
        ...(result as Record<keyof ServiceIssueCategoryStored, any>),
      };
      if (customActions?.postGetTemplateAction) {
        await customActions.postGetTemplateAction(ownerData, result, storeDiff);
      }
      if (templateDataOverride) {
        setData((prevData) => ({ ...prevData, ...templateDataOverride }));
        payloadDiff.current = {
          ...(templateDataOverride as Record<keyof ServiceIssueCategoryStored, any>),
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

  const actions: ServiceIssueCategoryIssueCategory_FormDialogActions = {
    getPageTitle,
    ownerAutocompleteRangeAction,
    ownerOpenSetSelectorAction,
    ownerUnsetAction,
    backAction,
    createAction,
    getTemplateAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceIssueCategoryIssueCategory_FormViewModel = {
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
    <ServiceIssueCategoryIssueCategory_FormViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_qT2joGksEe25ONJ3V89cVA)/RelationFeatureForm"
          data-page-name="service::IssueCategory::subcategories::RelationFormPage"
        />
        <ServiceIssueCategoryIssueCategory_FormDialogContainer
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
    </ServiceIssueCategoryIssueCategory_FormViewModelContext.Provider>
  );
}
