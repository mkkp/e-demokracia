//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, useMemo, lazy, Suspense } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import { useSnacks, useCRUDDialog } from '~/hooks';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';
import { useServiceIssueCategoryOwnerRelationViewPage } from '~/dialogs/Service/IssueCategory/Owner/RelationViewPage';
import type { ServiceIssueCategoryIssueCategory_FormDialogActions } from '~/containers/Service/IssueCategory/IssueCategory_Form/ServiceIssueCategoryIssueCategory_FormDialogContainer';
import type {
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceIssueCategoryServiceForSubcategoriesImpl } from '~/services/data-axios/ServiceIssueCategoryServiceForSubcategoriesImpl';

export type ServiceIssueCategoryIssueCategory_FormDialogActionsExtended =
  ServiceIssueCategoryIssueCategory_FormDialogActions & {};

export const SERVICE_ISSUE_CATEGORY_SUBCATEGORIES_RELATION_FORM_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceIssueCategoryIssueCategory_FormActionsHook';
export type ServiceIssueCategoryIssueCategory_FormActionsHook = (
  ownerData: any,
  data: ServiceIssueCategoryStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceIssueCategory, value: any) => void,
) => ServiceIssueCategoryIssueCategory_FormDialogActionsExtended;

export const useServiceIssueCategorySubcategoriesRelationFormPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceIssueCategoryStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any) =>
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

  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceIssueCategoryStored) => Promise<void>;
}

// XMIID: User/(esm/_qT2joGksEe25ONJ3V89cVA)/RelationFeatureForm
// Name: service::IssueCategory::subcategories::RelationFormPage
export default function ServiceIssueCategorySubcategoriesRelationFormPage(
  props: ServiceIssueCategorySubcategoriesRelationFormPageProps,
) {
  const { ownerData, onClose, onSubmit } = props;

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

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceIssueCategoryIssueCategory_FormActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_CATEGORY_SUBCATEGORIES_RELATION_FORM_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceIssueCategoryIssueCategory_FormDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
  );

  // Dialog hooks
  const openServiceIssueCategoryOwnerRelationViewPage = useServiceIssueCategoryOwnerRelationViewPage();

  // Calculated section
  const title: string = t('service.IssueCategory.IssueCategory_Form', { defaultValue: 'IssueCategory Form' });

  // Private actions
  const submit = async () => {
    await createAction();
  };

  // Action section
  const ownerUnsetAction = async (target: ServiceServiceUserStored) => {
    storeDiff('owner', null);
  };
  const ownerOpenPageAction = async (target?: ServiceServiceUserStored) => {
    await openServiceIssueCategoryOwnerRelationViewPage(target!);
  };
  const backAction = async () => {
    onClose();
  };
  const createAction = async () => {
    try {
      setIsLoading(true);
      const res = await serviceIssueCategoryServiceForSubcategoriesImpl.create(ownerData, data);
      showSuccessSnack(t('judo.action.create.success', { defaultValue: 'Create successful' }));
      onSubmit(res);
    } catch (error) {
      handleError<ServiceIssueCategory>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const getTemplateAction = async (): Promise<ServiceIssueCategory> => {
    try {
      setIsLoading(true);
      const result = await serviceIssueCategoryServiceForSubcategoriesImpl.getTemplate();
      setData(result as ServiceIssueCategoryStored);
      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: ServiceIssueCategoryIssueCategory_FormDialogActions = {
    ownerUnsetAction,
    ownerOpenPageAction,
    backAction,
    createAction,
    getTemplateAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    actions.getTemplateAction!();
  }, []);

  return (
    <div
      id="User/(esm/_qT2joGksEe25ONJ3V89cVA)/RelationFeatureForm"
      data-page-name="service::IssueCategory::subcategories::RelationFormPage"
    >
      <Suspense>
        <ServiceIssueCategoryIssueCategory_FormDialogContainer
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
          submit={submit}
        />
      </Suspense>
    </div>
  );
}
