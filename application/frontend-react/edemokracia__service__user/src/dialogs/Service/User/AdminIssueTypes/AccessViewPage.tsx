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
import type { ServiceIssueTypeIssueType_View_EditDialogActions } from '~/containers/Service/IssueType/IssueType_View_Edit/ServiceIssueTypeIssueType_View_EditDialogContainer';
import type {
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
  VoteType,
} from '~/services/data-api';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceIssueTypeServiceImpl } from '~/services/data-axios/ServiceIssueTypeServiceImpl';

export type ServiceIssueTypeIssueType_View_EditDialogActionsExtended =
  ServiceIssueTypeIssueType_View_EditDialogActions & {
    postRefreshAction?: (
      data: ServiceIssueTypeStored,
      storeDiff: (attributeName: keyof ServiceIssueType, value: any) => void,
      setValidation: Dispatch<SetStateAction<Map<keyof ServiceIssueType, string>>>,
    ) => Promise<void>;
  };

export const SERVICE_USER_ADMIN_ISSUE_TYPES_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceIssueTypeIssueType_View_EditActionsHook';
export type ServiceIssueTypeIssueType_View_EditActionsHook = (
  ownerData: any,
  data: ServiceIssueTypeStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceIssueType, value: any) => void,
) => ServiceIssueTypeIssueType_View_EditDialogActionsExtended;

export const useServiceUserAdminIssueTypesAccessViewPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceIssueTypeStored>>) => {
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
          <ServiceUserAdminIssueTypesAccessViewPage
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

export const convertServiceUserAdminIssueTypesAccessViewPagePayload = (
  attributeName: keyof ServiceIssueType,
  value: any,
): any => {
  return value;
};

const ServiceIssueTypeIssueType_View_EditDialogContainer = lazy(
  () => import('~/containers/Service/IssueType/IssueType_View_Edit/ServiceIssueTypeIssueType_View_EditDialogContainer'),
);

export interface ServiceUserAdminIssueTypesAccessViewPageProps {
  ownerData: any;

  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceIssueTypeStored) => Promise<void>;
}

// XMIID: User/(esm/_-T3OwNu-Ee2Bgcx6em3jZg)/AccessViewPageDefinition
// Name: service::User::adminIssueTypes::AccessViewPage
export default function ServiceUserAdminIssueTypesAccessViewPage(props: ServiceUserAdminIssueTypesAccessViewPageProps) {
  const { ownerData, onClose, onSubmit } = props;

  // Services
  const serviceIssueTypeServiceImpl = useMemo(() => new ServiceIssueTypeServiceImpl(judoAxiosProvider), []);

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
  const [data, setData] = useState<ServiceIssueTypeStored>({} as ServiceIssueTypeStored);
  const [validation, setValidation] = useState<Map<keyof ServiceIssueType, string>>(
    new Map<keyof ServiceIssueType, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceIssueTypeStored, any>>(
    {} as unknown as Record<keyof ServiceIssueTypeStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceIssueType, value: any) => void = useCallback(
    (attributeName: keyof ServiceIssueType, value: any) => {
      payloadDiff.current![attributeName] = convertServiceUserAdminIssueTypesAccessViewPagePayload(
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

  const pageQueryCustomizer: ServiceIssueTypeQueryCustomizer = {
    _mask: '{description,title,voteType}',
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceIssueTypeIssueType_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_ADMIN_ISSUE_TYPES_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceIssueTypeIssueType_View_EditDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
  );

  // Dialog hooks

  // Calculated section
  const title: string = t('service.IssueType.IssueType_View_Edit', { defaultValue: 'IssueType View / Edit' });

  // Private actions
  const submit = async () => {
    await updateAction();
  };

  // Action section
  const backAction = async () => {
    onClose();
  };
  const cancelAction = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await refreshAction(processQueryCustomizer(pageQueryCustomizer));
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
        await serviceIssueTypeServiceImpl.delete(data);
        showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
        onClose();
      }
    } catch (error) {
      handleError(error, undefined, data);
    }
  };
  const refreshAction = async (queryCustomizer: ServiceIssueTypeQueryCustomizer): Promise<ServiceIssueTypeStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceIssueTypeServiceImpl.refresh(ownerData, pageQueryCustomizer);
      setData(result);
      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceIssueTypeStored, any>;
      if (customActions?.postRefreshAction) {
        await customActions?.postRefreshAction(result, storeDiff, setValidation);
      }
      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const updateAction = async () => {
    setIsLoading(true);
    try {
      const res = await serviceIssueTypeServiceImpl.update(payloadDiff.current);
      if (res) {
        showSuccessSnack(t('judo.action.save.success', { defaultValue: 'Changes saved' }));
        setValidation(new Map<keyof ServiceIssueType, string>());
        await actions.refreshAction!(pageQueryCustomizer);
        setEditMode(false);
      }
    } catch (error) {
      handleError<ServiceIssueType>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: ServiceIssueTypeIssueType_View_EditDialogActions = {
    backAction,
    cancelAction,
    deleteAction,
    refreshAction,
    updateAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    actions.refreshAction!(pageQueryCustomizer);
  }, []);

  return (
    <div
      id="User/(esm/_-T3OwNu-Ee2Bgcx6em3jZg)/AccessViewPageDefinition"
      data-page-name="service::User::adminIssueTypes::AccessViewPage"
    >
      <Suspense>
        <ServiceIssueTypeIssueType_View_EditDialogContainer
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
