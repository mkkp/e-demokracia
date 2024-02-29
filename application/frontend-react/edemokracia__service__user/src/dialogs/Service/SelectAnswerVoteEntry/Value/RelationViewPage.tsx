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
  ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDialogActions,
  ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDialogProps,
} from '~/containers/Service/SelectAnswerVoteSelection/SelectAnswerVoteSelection_View_Edit/ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceSelectAnswerVoteEntry,
  ServiceSelectAnswerVoteEntryStored,
  ServiceSelectAnswerVoteSelection,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteSelectionStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceSelectAnswerVoteEntryServiceForValueImpl } from '~/services/data-axios/ServiceSelectAnswerVoteEntryServiceForValueImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDialogActionsExtended =
  ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDialogActions & {
    postRefreshAction?: (
      data: ServiceSelectAnswerVoteSelectionStored,
      storeDiff: (attributeName: keyof ServiceSelectAnswerVoteSelection, value: any) => void,
      setValidation: Dispatch<SetStateAction<Map<keyof ServiceSelectAnswerVoteSelection, string>>>,
    ) => Promise<void>;
  };

export const SERVICE_SELECT_ANSWER_VOTE_ENTRY_VALUE_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_SELECT_ANSWER_VOTE_ENTRY_VALUE_RELATION_VIEW_PAGE_ACTIONS_HOOK';
export type ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditActionsHook = (
  ownerData: any,
  data: ServiceSelectAnswerVoteSelectionStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceSelectAnswerVoteSelection, value: any) => void,
  refresh: () => Promise<void>,
  submit: () => Promise<void>,
) => ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDialogActionsExtended;

export interface ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditViewModel
  extends ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<ServiceSelectAnswerVoteSelection>;
  isDraft?: boolean;
}

const ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditViewModelContext =
  createContext<ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditViewModel>({} as any);
export const useServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditViewModel = () => {
  const context = useContext(ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditViewModel must be used within a(n) ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditViewModelProvider',
    );
  }
  return context;
};

export const useServiceSelectAnswerVoteEntryValueRelationViewPage = (): ((
  ownerData: any,
  templateDataOverride?: Partial<ServiceSelectAnswerVoteSelection>,
  isDraft?: boolean,
  ownerValidation?: (data: ServiceSelectAnswerVoteSelection) => Promise<void>,
) => Promise<DialogResult<ServiceSelectAnswerVoteSelectionStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (
    ownerData: any,
    templateDataOverride?: Partial<ServiceSelectAnswerVoteSelection>,
    isDraft?: boolean,
    ownerValidation?: (data: ServiceSelectAnswerVoteSelection) => Promise<void>,
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
          <ServiceSelectAnswerVoteEntryValueRelationViewPage
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
            onSubmit={async (result, isDraft, openCreated) => {
              await closeDialog();
              resolve({
                result: isDraft ? 'submit-draft' : 'submit',
                openCreated,
                data: result,
              });
            }}
          />
        ),
      });
    });
};

export const convertServiceSelectAnswerVoteEntryValueRelationViewPagePayload = (
  attributeName: keyof ServiceSelectAnswerVoteSelection,
  value: any,
): any => {
  return value;
};

const ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/SelectAnswerVoteSelection/SelectAnswerVoteSelection_View_Edit/ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDialogContainer'
    ),
);

export interface ServiceSelectAnswerVoteEntryValueRelationViewPageProps {
  ownerData: any;

  templateDataOverride?: Partial<ServiceSelectAnswerVoteSelection>;
  isDraft?: boolean;
  ownerValidation?: (data: ServiceSelectAnswerVoteSelection) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (
    result?: ServiceSelectAnswerVoteSelectionStored,
    isDraft?: boolean,
    openCreated?: boolean,
  ) => Promise<void>;
}

// XMIID: User/(esm/_MSzPwFtsEe6Mx9dH3yj5gQ)/RelationFeatureView
// Name: service::SelectAnswerVoteEntry::value::RelationViewPage
export default function ServiceSelectAnswerVoteEntryValueRelationViewPage(
  props: ServiceSelectAnswerVoteEntryValueRelationViewPageProps,
) {
  const { ownerData, templateDataOverride, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceSelectAnswerVoteEntryServiceForValueImpl = useMemo(
    () => new ServiceSelectAnswerVoteEntryServiceForValueImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceSelectAnswerVoteSelectionStored>(
    {} as ServiceSelectAnswerVoteSelectionStored,
  );
  const [validation, setValidation] = useState<Map<keyof ServiceSelectAnswerVoteSelection, string>>(
    new Map<keyof ServiceSelectAnswerVoteSelection, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceSelectAnswerVoteSelectionStored, any>>(
    {} as unknown as Record<keyof ServiceSelectAnswerVoteSelectionStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceSelectAnswerVoteSelection, value: any) => void = useCallback(
    (attributeName: keyof ServiceSelectAnswerVoteSelection, value: any) => {
      payloadDiff.current![attributeName] = convertServiceSelectAnswerVoteEntryValueRelationViewPagePayload(
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

  const getPageQueryCustomizer: () => ServiceSelectAnswerVoteSelectionQueryCustomizer = () => ({
    _mask: actions.getMask ? actions.getMask!() : '{description,title}',
  });

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    if (actions.refreshAction) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };

  // Validation
  const validate: (data: ServiceSelectAnswerVoteSelection) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_SELECT_ANSWER_VOTE_ENTRY_VALUE_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions:
    | ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDialogActionsExtended
    | undefined = customActionsHook?.(ownerData, data, editMode, storeDiff, refresh, submit);

  // Dialog hooks

  // Action section
  const getPageTitle = (data: ServiceSelectAnswerVoteSelection): string => {
    return t('service.SelectAnswerVoteSelection.SelectAnswerVoteSelection_View_Edit', {
      defaultValue: 'SelectAnswerVoteSelection View / Edit',
    });
  };
  const backAction = async () => {
    onClose();
  };
  const refreshAction = async (
    queryCustomizer: ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteSelectionStored>> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const response = await serviceSelectAnswerVoteEntryServiceForValueImpl.refresh(
        ownerData,
        getPageQueryCustomizer(),
      );
      const { data: result } = response;
      setData(result);
      setLatestViewData(result);
      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceSelectAnswerVoteSelectionStored, any>;
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

  const actions: ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDialogActions = {
    getPageTitle,
    backAction,
    refreshAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditViewModel = {
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
    <ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_MSzPwFtsEe6Mx9dH3yj5gQ)/RelationFeatureView"
          data-page-name="service::SelectAnswerVoteEntry::value::RelationViewPage"
        />
        <ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDialogContainer
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
    </ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditViewModelContext.Provider>
  );
}
