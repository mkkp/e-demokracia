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
  ServiceYesNoVoteEntryYesNoVoteEntry_View_EditDialogActions,
  ServiceYesNoVoteEntryYesNoVoteEntry_View_EditDialogProps,
} from '~/containers/Service/YesNoVoteEntry/YesNoVoteEntry_View_Edit/ServiceYesNoVoteEntryYesNoVoteEntry_View_EditDialogContainer';
import { useServiceYesNoVoteEntryOwnerRelationViewPage } from '~/dialogs/Service/YesNoVoteEntry/Owner/RelationViewPage';
import { useServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserLinkSetSelectorPage } from '~/dialogs/Service/YesNoVoteEntry/YesNoVoteEntry_View_Edit/User/LinkSetSelectorPage';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceYesNoVoteDefinition,
  ServiceYesNoVoteDefinitionStored,
  ServiceYesNoVoteEntry,
  ServiceYesNoVoteEntryQueryCustomizer,
  ServiceYesNoVoteEntryStored,
  YesNoVoteValue,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceYesNoVoteDefinitionServiceForVoteEntriesImpl } from '~/services/data-axios/ServiceYesNoVoteDefinitionServiceForVoteEntriesImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceYesNoVoteEntryYesNoVoteEntry_View_EditDialogActionsExtended =
  ServiceYesNoVoteEntryYesNoVoteEntry_View_EditDialogActions & {
    postRefreshAction?: (
      data: ServiceYesNoVoteEntryStored,
      storeDiff: (attributeName: keyof ServiceYesNoVoteEntry, value: any) => void,
      setValidation: Dispatch<SetStateAction<Map<keyof ServiceYesNoVoteEntry, string>>>,
    ) => Promise<void>;
  };

export const SERVICE_YES_NO_VOTE_DEFINITION_VOTE_ENTRIES_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_YES_NO_VOTE_DEFINITION_VOTE_ENTRIES_RELATION_VIEW_PAGE_ACTIONS_HOOK';
export type ServiceYesNoVoteEntryYesNoVoteEntry_View_EditActionsHook = (
  ownerData: any,
  data: ServiceYesNoVoteEntryStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceYesNoVoteEntry, value: any) => void,
  refresh: () => Promise<void>,
  submit: () => Promise<void>,
) => ServiceYesNoVoteEntryYesNoVoteEntry_View_EditDialogActionsExtended;

export interface ServiceYesNoVoteEntryYesNoVoteEntry_View_EditViewModel
  extends ServiceYesNoVoteEntryYesNoVoteEntry_View_EditDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<ServiceYesNoVoteEntry>;
  isDraft?: boolean;
}

const ServiceYesNoVoteEntryYesNoVoteEntry_View_EditViewModelContext =
  createContext<ServiceYesNoVoteEntryYesNoVoteEntry_View_EditViewModel>({} as any);
export const useServiceYesNoVoteEntryYesNoVoteEntry_View_EditViewModel = () => {
  const context = useContext(ServiceYesNoVoteEntryYesNoVoteEntry_View_EditViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceYesNoVoteEntryYesNoVoteEntry_View_EditViewModel must be used within a(n) ServiceYesNoVoteEntryYesNoVoteEntry_View_EditViewModelProvider',
    );
  }
  return context;
};

export const useServiceYesNoVoteDefinitionVoteEntriesRelationViewPage = (): ((
  ownerData: any,
  templateDataOverride?: Partial<ServiceYesNoVoteEntry>,
  isDraft?: boolean,
  ownerValidation?: (data: ServiceYesNoVoteEntry) => Promise<void>,
) => Promise<DialogResult<ServiceYesNoVoteEntryStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (
    ownerData: any,
    templateDataOverride?: Partial<ServiceYesNoVoteEntry>,
    isDraft?: boolean,
    ownerValidation?: (data: ServiceYesNoVoteEntry) => Promise<void>,
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
          <ServiceYesNoVoteDefinitionVoteEntriesRelationViewPage
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

export const convertServiceYesNoVoteDefinitionVoteEntriesRelationViewPagePayload = (
  attributeName: keyof ServiceYesNoVoteEntry,
  value: any,
): any => {
  const dateTimeTypes: string[] = ['created'];
  if (dateTimeTypes.includes(attributeName as string)) {
    return value;
  }
  return value;
};

const ServiceYesNoVoteEntryYesNoVoteEntry_View_EditDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/YesNoVoteEntry/YesNoVoteEntry_View_Edit/ServiceYesNoVoteEntryYesNoVoteEntry_View_EditDialogContainer'
    ),
);

export interface ServiceYesNoVoteDefinitionVoteEntriesRelationViewPageProps {
  ownerData: any;

  templateDataOverride?: Partial<ServiceYesNoVoteEntry>;
  isDraft?: boolean;
  ownerValidation?: (data: ServiceYesNoVoteEntry) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceYesNoVoteEntryStored, isDraft?: boolean, openCreated?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_j_gXIFojEe6_67aMO2jOsw)/RelationFeatureView
// Name: service::YesNoVoteDefinition::voteEntries::RelationViewPage
export default function ServiceYesNoVoteDefinitionVoteEntriesRelationViewPage(
  props: ServiceYesNoVoteDefinitionVoteEntriesRelationViewPageProps,
) {
  const { ownerData, templateDataOverride, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceYesNoVoteDefinitionServiceForVoteEntriesImpl = useMemo(
    () => new ServiceYesNoVoteDefinitionServiceForVoteEntriesImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceYesNoVoteEntryStored>({} as ServiceYesNoVoteEntryStored);
  const [validation, setValidation] = useState<Map<keyof ServiceYesNoVoteEntry, string>>(
    new Map<keyof ServiceYesNoVoteEntry, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceYesNoVoteEntryStored, any>>(
    {} as unknown as Record<keyof ServiceYesNoVoteEntryStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceYesNoVoteEntry, value: any) => void = useCallback(
    (attributeName: keyof ServiceYesNoVoteEntry, value: any) => {
      payloadDiff.current![attributeName] = convertServiceYesNoVoteDefinitionVoteEntriesRelationViewPagePayload(
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

  const getPageQueryCustomizer: () => ServiceYesNoVoteEntryQueryCustomizer = () => ({
    _mask: actions.getMask ? actions.getMask!() : '{created,value,owner{representation}}',
  });

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    if (actions.refreshAction) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };

  // Validation
  const validate: (data: ServiceYesNoVoteEntry) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceYesNoVoteEntryYesNoVoteEntry_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_YES_NO_VOTE_DEFINITION_VOTE_ENTRIES_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceYesNoVoteEntryYesNoVoteEntry_View_EditDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, storeDiff, refresh, submit);

  // Dialog hooks
  const openServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserLinkSetSelectorPage =
    useServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserLinkSetSelectorPage();
  const openServiceYesNoVoteEntryOwnerRelationViewPage = useServiceYesNoVoteEntryOwnerRelationViewPage();

  // Action section
  const getPageTitle = (data: ServiceYesNoVoteEntry): string => {
    return t('service.YesNoVoteEntry.YesNoVoteEntry_View_Edit', { defaultValue: 'YesNoVoteEntry View / Edit' });
  };
  const backAction = async () => {
    onClose();
  };
  const refreshAction = async (
    queryCustomizer: ServiceYesNoVoteEntryQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceYesNoVoteEntryStored>> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const response = await serviceYesNoVoteDefinitionServiceForVoteEntriesImpl.refresh(
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
      } as Record<keyof ServiceYesNoVoteEntryStored, any>;
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
  const ownerAutocompleteRangeAction = async (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored[]> => {
    try {
      const { data: result } = await serviceYesNoVoteDefinitionServiceForVoteEntriesImpl.getRangeForOwner(
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
      await openServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserLinkSetSelectorPage(
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
      await openServiceYesNoVoteEntryOwnerRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };

  const actions: ServiceYesNoVoteEntryYesNoVoteEntry_View_EditDialogActions = {
    getPageTitle,
    backAction,
    refreshAction,
    ownerAutocompleteRangeAction,
    ownerOpenSetSelectorAction,
    ownerUnsetAction,
    ownerOpenPageAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceYesNoVoteEntryYesNoVoteEntry_View_EditViewModel = {
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
    <ServiceYesNoVoteEntryYesNoVoteEntry_View_EditViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_j_gXIFojEe6_67aMO2jOsw)/RelationFeatureView"
          data-page-name="service::YesNoVoteDefinition::voteEntries::RelationViewPage"
        />
        <ServiceYesNoVoteEntryYesNoVoteEntry_View_EditDialogContainer
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
    </ServiceYesNoVoteEntryYesNoVoteEntry_View_EditViewModelContext.Provider>
  );
}
