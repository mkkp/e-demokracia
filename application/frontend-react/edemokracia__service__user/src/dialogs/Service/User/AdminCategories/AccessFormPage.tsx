//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { Suspense, lazy, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import type { ServiceIssueCategoryIssueCategory_FormDialogActions } from '~/containers/Service/IssueCategory/IssueCategory_Form/ServiceIssueCategoryIssueCategory_FormDialogContainer';
import { useServiceIssueCategoryIssueCategory_FormOwnerLinkSetSelectorPage } from '~/dialogs/Service/IssueCategory/IssueCategory_Form/Owner/LinkSetSelectorPage';
import { useCRUDDialog, useSnacks } from '~/hooks';
import type {
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForAdminCategoriesImpl } from '~/services/data-axios/UserServiceForAdminCategoriesImpl';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceIssueCategoryIssueCategory_FormDialogActionsExtended =
  ServiceIssueCategoryIssueCategory_FormDialogActions & {
    postGetTemplateAction?: (
      ownerData: any,
      data: ServiceIssueCategory,
      storeDiff: (attributeName: keyof ServiceIssueCategory, value: any) => void,
    ) => Promise<void>;
  };

export const SERVICE_USER_ADMIN_CATEGORIES_ACCESS_FORM_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceIssueCategoryIssueCategory_FormActionsHook';
export type ServiceIssueCategoryIssueCategory_FormActionsHook = (
  ownerData: any,
  data: ServiceIssueCategoryStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceIssueCategory, value: any) => void,
) => ServiceIssueCategoryIssueCategory_FormDialogActionsExtended;

export const useServiceUserAdminCategoriesAccessFormPage = (): ((
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
          <ServiceUserAdminCategoriesAccessFormPage
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

export const convertServiceUserAdminCategoriesAccessFormPagePayload = (
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

export interface ServiceUserAdminCategoriesAccessFormPageProps {
  ownerData: any;

  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceIssueCategoryStored) => Promise<void>;
}

// XMIID: User/(esm/_vWzZ8G4rEe2siJt-xjHAyw)/AccessFormPageDefinition
// Name: service::User::adminCategories::AccessFormPage
export default function ServiceUserAdminCategoriesAccessFormPage(props: ServiceUserAdminCategoriesAccessFormPageProps) {
  const { ownerData, onClose, onSubmit } = props;

  // Services
  const userServiceForAdminCategoriesImpl = useMemo(() => new UserServiceForAdminCategoriesImpl(judoAxiosProvider), []);

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
      payloadDiff.current![attributeName] = convertServiceUserAdminCategoriesAccessFormPagePayload(
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
    `(${OBJECTCLASS}=${SERVICE_USER_ADMIN_CATEGORIES_ACCESS_FORM_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceIssueCategoryIssueCategory_FormDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
  );

  // Dialog hooks
  const openServiceIssueCategoryIssueCategory_FormOwnerLinkSetSelectorPage =
    useServiceIssueCategoryIssueCategory_FormOwnerLinkSetSelectorPage();

  // Calculated section
  const title: string = t('service.IssueCategory.IssueCategory_Form', { defaultValue: 'IssueCategory Form' });

  // Private actions
  const submit = async () => {
    await createAction();
  };

  // Action section
  const ownerAutocompleteRangeAction = async (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored[]> => {
    try {
      return userServiceForAdminCategoriesImpl.getRangeForOwner(data, queryCustomizer);
    } catch (error) {
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
  const ownerUnsetAction = async (target: ServiceServiceUserStored) => {
    storeDiff('owner', null);
  };
  const backAction = async () => {
    onClose();
  };
  const createAction = async () => {
    try {
      setIsLoading(true);
      const res = await userServiceForAdminCategoriesImpl.create(payloadDiff.current);
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
      const result = await userServiceForAdminCategoriesImpl.getTemplate();
      setData(result as ServiceIssueCategoryStored);
      payloadDiff.current = {
        ...(result as Record<keyof ServiceIssueCategoryStored, any>),
      };
      if (customActions?.postGetTemplateAction) {
        await customActions.postGetTemplateAction(ownerData, result, storeDiff);
      }
      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: ServiceIssueCategoryIssueCategory_FormDialogActions = {
    ownerAutocompleteRangeAction,
    ownerOpenSetSelectorAction,
    ownerUnsetAction,
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
      id="User/(esm/_vWzZ8G4rEe2siJt-xjHAyw)/AccessFormPageDefinition"
      data-page-name="service::User::adminCategories::AccessFormPage"
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
