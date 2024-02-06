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
  ServiceIssueTypeIssueType_View_EditDialogActions,
  ServiceIssueTypeIssueType_View_EditDialogProps,
} from '~/containers/Service/IssueType/IssueType_View_Edit/ServiceIssueTypeIssueType_View_EditDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceCreateIssueInput,
  ServiceCreateIssueInputStored,
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
  VoteType,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceCreateIssueInputServiceForIssueTypeImpl } from '~/services/data-axios/ServiceCreateIssueInputServiceForIssueTypeImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceIssueTypeIssueType_View_EditDialogActionsExtended =
  ServiceIssueTypeIssueType_View_EditDialogActions & {
    postRefreshAction?: (
      data: ServiceIssueTypeStored,
      storeDiff: (attributeName: keyof ServiceIssueType, value: any) => void,
      setValidation: Dispatch<SetStateAction<Map<keyof ServiceIssueType, string>>>,
    ) => Promise<void>;
  };

export const SERVICE_CREATE_ISSUE_INPUT_ISSUE_TYPE_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_CREATE_ISSUE_INPUT_ISSUE_TYPE_RELATION_VIEW_PAGE_ACTIONS_HOOK';
export type ServiceIssueTypeIssueType_View_EditActionsHook = (
  ownerData: any,
  data: ServiceIssueTypeStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceIssueType, value: any) => void,
  refresh: () => Promise<void>,
  submit: () => Promise<void>,
) => ServiceIssueTypeIssueType_View_EditDialogActionsExtended;

export interface ServiceIssueTypeIssueType_View_EditViewModel extends ServiceIssueTypeIssueType_View_EditDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<ServiceIssueType>;
  isDraft?: boolean;
}

const ServiceIssueTypeIssueType_View_EditViewModelContext = createContext<ServiceIssueTypeIssueType_View_EditViewModel>(
  {} as any,
);
export const useServiceIssueTypeIssueType_View_EditViewModel = () => {
  const context = useContext(ServiceIssueTypeIssueType_View_EditViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceIssueTypeIssueType_View_EditViewModel must be used within a(n) ServiceIssueTypeIssueType_View_EditViewModelProvider',
    );
  }
  return context;
};

export const useServiceCreateIssueInputIssueTypeRelationViewPage = (): ((
  ownerData: any,
  templateDataOverride?: Partial<ServiceIssueType>,
  isDraft?: boolean,
  ownerValidation?: (data: ServiceIssueType) => Promise<void>,
) => Promise<DialogResult<ServiceIssueTypeStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (
    ownerData: any,
    templateDataOverride?: Partial<ServiceIssueType>,
    isDraft?: boolean,
    ownerValidation?: (data: ServiceIssueType) => Promise<void>,
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
          <ServiceCreateIssueInputIssueTypeRelationViewPage
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

export const convertServiceCreateIssueInputIssueTypeRelationViewPagePayload = (
  attributeName: keyof ServiceIssueType,
  value: any,
): any => {
  return value;
};

const ServiceIssueTypeIssueType_View_EditDialogContainer = lazy(
  () => import('~/containers/Service/IssueType/IssueType_View_Edit/ServiceIssueTypeIssueType_View_EditDialogContainer'),
);

export interface ServiceCreateIssueInputIssueTypeRelationViewPageProps {
  ownerData: any;

  templateDataOverride?: Partial<ServiceIssueType>;
  isDraft?: boolean;
  ownerValidation?: (data: ServiceIssueType) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceIssueTypeStored, isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_I14DsNu5Ee2Bgcx6em3jZg)/RelationFeatureView
// Name: service::CreateIssueInput::issueType::RelationViewPage
export default function ServiceCreateIssueInputIssueTypeRelationViewPage(
  props: ServiceCreateIssueInputIssueTypeRelationViewPageProps,
) {
  const { ownerData, templateDataOverride, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceCreateIssueInputServiceForIssueTypeImpl = useMemo(
    () => new ServiceCreateIssueInputServiceForIssueTypeImpl(judoAxiosProvider),
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
      payloadDiff.current![attributeName] = convertServiceCreateIssueInputIssueTypeRelationViewPagePayload(
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

  const getPageQueryCustomizer: () => ServiceIssueTypeQueryCustomizer = () => ({
    _mask: actions.getMask ? actions.getMask!() : '{description,title,voteType}',
  });

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    if (actions.refreshAction) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };

  // Validation
  const validate: (data: ServiceIssueType) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceIssueTypeIssueType_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_CREATE_ISSUE_INPUT_ISSUE_TYPE_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceIssueTypeIssueType_View_EditDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
    refresh,
    submit,
  );

  // Dialog hooks

  // Action section
  const getPageTitle = (data: ServiceIssueType): string => {
    return t('service.IssueType.IssueType_View_Edit', { defaultValue: 'IssueType View / Edit' });
  };
  const backAction = async () => {
    onClose();
  };
  const refreshAction = async (queryCustomizer: ServiceIssueTypeQueryCustomizer): Promise<ServiceIssueTypeStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceCreateIssueInputServiceForIssueTypeImpl.refresh(ownerData, getPageQueryCustomizer());
      setData(result);
      setLatestViewData(result);
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
      setLatestViewData(null);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };

  const actions: ServiceIssueTypeIssueType_View_EditDialogActions = {
    getPageTitle,
    backAction,
    refreshAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceIssueTypeIssueType_View_EditViewModel = {
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
    <ServiceIssueTypeIssueType_View_EditViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_I14DsNu5Ee2Bgcx6em3jZg)/RelationFeatureView"
          data-page-name="service::CreateIssueInput::issueType::RelationViewPage"
        />
        <ServiceIssueTypeIssueType_View_EditDialogContainer
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
    </ServiceIssueTypeIssueType_View_EditViewModelContext.Provider>
  );
}
