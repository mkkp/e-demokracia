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
  ServiceIssue,
  ServiceIssueStored,
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

export const SERVICE_ISSUE_ISSUE_TYPE_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceIssueTypeIssueType_View_EditActionsHook';
export type ServiceIssueTypeIssueType_View_EditActionsHook = (
  ownerData: any,
  data: ServiceIssueTypeStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceIssueType, value: any) => void,
) => ServiceIssueTypeIssueType_View_EditDialogActionsExtended;

export const useServiceIssueIssueTypeRelationViewPage = (): ((
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
          <ServiceIssueIssueTypeRelationViewPage
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

export const convertServiceIssueIssueTypeRelationViewPagePayload = (
  attributeName: keyof ServiceIssueType,
  value: any,
): any => {
  return value;
};

const ServiceIssueTypeIssueType_View_EditDialogContainer = lazy(
  () => import('~/containers/Service/IssueType/IssueType_View_Edit/ServiceIssueTypeIssueType_View_EditDialogContainer'),
);

export interface ServiceIssueIssueTypeRelationViewPageProps {
  ownerData: any;

  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceIssueTypeStored) => Promise<void>;
}

// XMIID: User/(esm/_V_8twNu4Ee2Bgcx6em3jZg)/RelationFeatureView
// Name: service::Issue::issueType::RelationViewPage
export default function ServiceIssueIssueTypeRelationViewPage(props: ServiceIssueIssueTypeRelationViewPageProps) {
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
      payloadDiff.current![attributeName] = convertServiceIssueIssueTypeRelationViewPagePayload(attributeName, value);
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
    `(${OBJECTCLASS}=${SERVICE_ISSUE_ISSUE_TYPE_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
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
  const submit = async () => {};

  // Action section
  const backAction = async () => {
    onClose();
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

  const actions: ServiceIssueTypeIssueType_View_EditDialogActions = {
    backAction,
    refreshAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    actions.refreshAction!(pageQueryCustomizer);
  }, []);

  return (
    <div
      id="User/(esm/_V_8twNu4Ee2Bgcx6em3jZg)/RelationFeatureView"
      data-page-name="service::Issue::issueType::RelationViewPage"
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
