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
  ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditDialogActions,
  ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditDialogProps,
} from '~/containers/Service/SelectAnswerVoteEntry/SelectAnswerVoteEntry_View_Edit/ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditDialogContainer';
import { useServiceSelectAnswerVoteEntryOwnerRelationViewPage } from '~/dialogs/Service/SelectAnswerVoteEntry/Owner/RelationViewPage';
import { useServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditOwnerLinkSetSelectorPage } from '~/dialogs/Service/SelectAnswerVoteEntry/SelectAnswerVoteEntry_View_Edit/Owner/LinkSetSelectorPage';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceSelectAnswerVoteEntry,
  ServiceSelectAnswerVoteEntryQueryCustomizer,
  ServiceSelectAnswerVoteEntryStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForSelectAnswerVoteEntriesImpl } from '~/services/data-axios/UserServiceForSelectAnswerVoteEntriesImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditDialogActionsExtended =
  ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditDialogActions & {
    postRefreshAction?: (
      data: ServiceSelectAnswerVoteEntryStored,
      storeDiff: (attributeName: keyof ServiceSelectAnswerVoteEntry, value: any) => void,
      setValidation: Dispatch<SetStateAction<Map<keyof ServiceSelectAnswerVoteEntry, string>>>,
    ) => Promise<void>;
  };

export const SERVICE_USER_SELECT_ANSWER_VOTE_ENTRIES_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_SELECT_ANSWER_VOTE_ENTRIES_ACCESS_VIEW_PAGE_ACTIONS_HOOK';
export type ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditActionsHook = (
  ownerData: any,
  data: ServiceSelectAnswerVoteEntryStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceSelectAnswerVoteEntry, value: any) => void,
  refresh: () => Promise<void>,
  submit: () => Promise<void>,
) => ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditDialogActionsExtended;

export interface ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditViewModel
  extends ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<ServiceSelectAnswerVoteEntry>;
  isDraft?: boolean;
}

const ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditViewModelContext =
  createContext<ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditViewModel>({} as any);
export const useServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditViewModel = () => {
  const context = useContext(ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditViewModel must be used within a(n) ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditViewModelProvider',
    );
  }
  return context;
};

export const useServiceUserSelectAnswerVoteEntriesAccessViewPage = (): ((
  ownerData: any,
  templateDataOverride?: Partial<ServiceSelectAnswerVoteEntry>,
  isDraft?: boolean,
  ownerValidation?: (data: ServiceSelectAnswerVoteEntry) => Promise<void>,
) => Promise<DialogResult<ServiceSelectAnswerVoteEntryStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (
    ownerData: any,
    templateDataOverride?: Partial<ServiceSelectAnswerVoteEntry>,
    isDraft?: boolean,
    ownerValidation?: (data: ServiceSelectAnswerVoteEntry) => Promise<void>,
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
          <ServiceUserSelectAnswerVoteEntriesAccessViewPage
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

export const convertServiceUserSelectAnswerVoteEntriesAccessViewPagePayload = (
  attributeName: keyof ServiceSelectAnswerVoteEntry,
  value: any,
): any => {
  const dateTimeTypes: string[] = ['created'];
  if (dateTimeTypes.includes(attributeName as string)) {
    return value;
  }
  return value;
};

const ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/SelectAnswerVoteEntry/SelectAnswerVoteEntry_View_Edit/ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditDialogContainer'
    ),
);

export interface ServiceUserSelectAnswerVoteEntriesAccessViewPageProps {
  ownerData: any;

  templateDataOverride?: Partial<ServiceSelectAnswerVoteEntry>;
  isDraft?: boolean;
  ownerValidation?: (data: ServiceSelectAnswerVoteEntry) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceSelectAnswerVoteEntryStored, isDraft?: boolean, openCreated?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_TGoLMM6zEe6ddqBfFzCBZg)/AccessViewPageDefinition
// Name: service::User::selectAnswerVoteEntries::AccessViewPage
export default function ServiceUserSelectAnswerVoteEntriesAccessViewPage(
  props: ServiceUserSelectAnswerVoteEntriesAccessViewPageProps,
) {
  const { ownerData, templateDataOverride, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const userServiceForSelectAnswerVoteEntriesImpl = useMemo(
    () => new UserServiceForSelectAnswerVoteEntriesImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceSelectAnswerVoteEntryStored>({} as ServiceSelectAnswerVoteEntryStored);
  const [validation, setValidation] = useState<Map<keyof ServiceSelectAnswerVoteEntry, string>>(
    new Map<keyof ServiceSelectAnswerVoteEntry, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceSelectAnswerVoteEntryStored, any>>(
    {} as unknown as Record<keyof ServiceSelectAnswerVoteEntryStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceSelectAnswerVoteEntry, value: any) => void = useCallback(
    (attributeName: keyof ServiceSelectAnswerVoteEntry, value: any) => {
      payloadDiff.current![attributeName] = convertServiceUserSelectAnswerVoteEntriesAccessViewPagePayload(
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
    return false && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
  }, [data]);

  const getPageQueryCustomizer: () => ServiceSelectAnswerVoteEntryQueryCustomizer = () => ({
    _mask: actions.getMask ? actions.getMask!() : '{created,valueRepresentation}',
  });

  // Private actions
  const submit = async () => {
    await updateAction();
  };
  const refresh = async () => {
    if (actions.refreshAction) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };

  // Validation
  const validate: (data: ServiceSelectAnswerVoteEntry) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_SELECT_ANSWER_VOTE_ENTRIES_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions: ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, storeDiff, refresh, submit);

  // Dialog hooks
  const openServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditOwnerLinkSetSelectorPage =
    useServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditOwnerLinkSetSelectorPage();
  const openServiceSelectAnswerVoteEntryOwnerRelationViewPage = useServiceSelectAnswerVoteEntryOwnerRelationViewPage();

  // Action section
  const getPageTitle = (data: ServiceSelectAnswerVoteEntry): string => {
    return t('service.SelectAnswerVoteEntry.SelectAnswerVoteEntry_View_Edit', {
      defaultValue: 'SelectAnswerVoteEntry View / Edit',
    });
  };
  const ownerAutocompleteRangeAction = async (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored[]> => {
    try {
      const { data: result } = await userServiceForSelectAnswerVoteEntriesImpl.getRangeForOwner(
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
    const { result, data: returnedData } =
      await openServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditOwnerLinkSetSelectorPage(
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
  const ownerOpenPageAction = async (target: ServiceServiceUser | ServiceServiceUserStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceServiceUserStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceSelectAnswerVoteEntryOwnerRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const backAction = async () => {
    onClose();
  };
  const cancelAction = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await refreshAction(processQueryCustomizer(getPageQueryCustomizer()));
  };
  const refreshAction = async (
    queryCustomizer: ServiceSelectAnswerVoteEntryQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteEntryStored>> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const response = await userServiceForSelectAnswerVoteEntriesImpl.refresh(ownerData, getPageQueryCustomizer());
      const { data: result } = response;
      setData(result);
      setLatestViewData(result);
      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceSelectAnswerVoteEntryStored, any>;
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
  const updateAction = async () => {
    setIsLoading(true);
    try {
      const { data: res } = await userServiceForSelectAnswerVoteEntriesImpl.update(payloadDiff.current);
      if (res) {
        showSuccessSnack(t('judo.action.save.success', { defaultValue: 'Changes saved' }));
        setValidation(new Map<keyof ServiceSelectAnswerVoteEntry, string>());
        setEditMode(false);
        await actions.refreshAction!(getPageQueryCustomizer());
      }
    } catch (error) {
      handleError<ServiceSelectAnswerVoteEntry>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditDialogActions = {
    getPageTitle,
    ownerAutocompleteRangeAction,
    ownerOpenSetSelectorAction,
    ownerUnsetAction,
    ownerOpenPageAction,
    backAction,
    cancelAction,
    refreshAction,
    updateAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditViewModel = {
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
    <ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_TGoLMM6zEe6ddqBfFzCBZg)/AccessViewPageDefinition"
          data-page-name="service::User::selectAnswerVoteEntries::AccessViewPage"
        />
        <ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditDialogContainer
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
    </ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditViewModelContext.Provider>
  );
}
