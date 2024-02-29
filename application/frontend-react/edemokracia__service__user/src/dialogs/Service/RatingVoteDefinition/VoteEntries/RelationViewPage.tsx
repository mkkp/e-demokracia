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
  ServiceRatingVoteEntryRatingVoteEntry_View_EditDialogActions,
  ServiceRatingVoteEntryRatingVoteEntry_View_EditDialogProps,
} from '~/containers/Service/RatingVoteEntry/RatingVoteEntry_View_Edit/ServiceRatingVoteEntryRatingVoteEntry_View_EditDialogContainer';
import { useServiceRatingVoteEntryOwnerRelationViewPage } from '~/dialogs/Service/RatingVoteEntry/Owner/RelationViewPage';
import { useServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerLinkSetSelectorPage } from '~/dialogs/Service/RatingVoteEntry/RatingVoteEntry_View_Edit/Owner/LinkSetSelectorPage';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceRatingVoteDefinition,
  ServiceRatingVoteDefinitionStored,
  ServiceRatingVoteEntry,
  ServiceRatingVoteEntryQueryCustomizer,
  ServiceRatingVoteEntryStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceRatingVoteDefinitionServiceForVoteEntriesImpl } from '~/services/data-axios/ServiceRatingVoteDefinitionServiceForVoteEntriesImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceRatingVoteEntryRatingVoteEntry_View_EditDialogActionsExtended =
  ServiceRatingVoteEntryRatingVoteEntry_View_EditDialogActions & {
    postRefreshAction?: (
      data: ServiceRatingVoteEntryStored,
      storeDiff: (attributeName: keyof ServiceRatingVoteEntry, value: any) => void,
      setValidation: Dispatch<SetStateAction<Map<keyof ServiceRatingVoteEntry, string>>>,
    ) => Promise<void>;
  };

export const SERVICE_RATING_VOTE_DEFINITION_VOTE_ENTRIES_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_RATING_VOTE_DEFINITION_VOTE_ENTRIES_RELATION_VIEW_PAGE_ACTIONS_HOOK';
export type ServiceRatingVoteEntryRatingVoteEntry_View_EditActionsHook = (
  ownerData: any,
  data: ServiceRatingVoteEntryStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceRatingVoteEntry, value: any) => void,
  refresh: () => Promise<void>,
  submit: () => Promise<void>,
) => ServiceRatingVoteEntryRatingVoteEntry_View_EditDialogActionsExtended;

export interface ServiceRatingVoteEntryRatingVoteEntry_View_EditViewModel
  extends ServiceRatingVoteEntryRatingVoteEntry_View_EditDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<ServiceRatingVoteEntry>;
  isDraft?: boolean;
}

const ServiceRatingVoteEntryRatingVoteEntry_View_EditViewModelContext =
  createContext<ServiceRatingVoteEntryRatingVoteEntry_View_EditViewModel>({} as any);
export const useServiceRatingVoteEntryRatingVoteEntry_View_EditViewModel = () => {
  const context = useContext(ServiceRatingVoteEntryRatingVoteEntry_View_EditViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceRatingVoteEntryRatingVoteEntry_View_EditViewModel must be used within a(n) ServiceRatingVoteEntryRatingVoteEntry_View_EditViewModelProvider',
    );
  }
  return context;
};

export const useServiceRatingVoteDefinitionVoteEntriesRelationViewPage = (): ((
  ownerData: any,
  templateDataOverride?: Partial<ServiceRatingVoteEntry>,
  isDraft?: boolean,
  ownerValidation?: (data: ServiceRatingVoteEntry) => Promise<void>,
) => Promise<DialogResult<ServiceRatingVoteEntryStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (
    ownerData: any,
    templateDataOverride?: Partial<ServiceRatingVoteEntry>,
    isDraft?: boolean,
    ownerValidation?: (data: ServiceRatingVoteEntry) => Promise<void>,
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
          <ServiceRatingVoteDefinitionVoteEntriesRelationViewPage
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

export const convertServiceRatingVoteDefinitionVoteEntriesRelationViewPagePayload = (
  attributeName: keyof ServiceRatingVoteEntry,
  value: any,
): any => {
  const dateTimeTypes: string[] = ['created'];
  if (dateTimeTypes.includes(attributeName as string)) {
    return value;
  }
  return value;
};

const ServiceRatingVoteEntryRatingVoteEntry_View_EditDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/RatingVoteEntry/RatingVoteEntry_View_Edit/ServiceRatingVoteEntryRatingVoteEntry_View_EditDialogContainer'
    ),
);

export interface ServiceRatingVoteDefinitionVoteEntriesRelationViewPageProps {
  ownerData: any;

  templateDataOverride?: Partial<ServiceRatingVoteEntry>;
  isDraft?: boolean;
  ownerValidation?: (data: ServiceRatingVoteEntry) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceRatingVoteEntryStored, isDraft?: boolean, openCreated?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_tgVq8FslEe6Mx9dH3yj5gQ)/RelationFeatureView
// Name: service::RatingVoteDefinition::voteEntries::RelationViewPage
export default function ServiceRatingVoteDefinitionVoteEntriesRelationViewPage(
  props: ServiceRatingVoteDefinitionVoteEntriesRelationViewPageProps,
) {
  const { ownerData, templateDataOverride, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceRatingVoteDefinitionServiceForVoteEntriesImpl = useMemo(
    () => new ServiceRatingVoteDefinitionServiceForVoteEntriesImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceRatingVoteEntryStored>({} as ServiceRatingVoteEntryStored);
  const [validation, setValidation] = useState<Map<keyof ServiceRatingVoteEntry, string>>(
    new Map<keyof ServiceRatingVoteEntry, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceRatingVoteEntryStored, any>>(
    {} as unknown as Record<keyof ServiceRatingVoteEntryStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceRatingVoteEntry, value: any) => void = useCallback(
    (attributeName: keyof ServiceRatingVoteEntry, value: any) => {
      payloadDiff.current![attributeName] = convertServiceRatingVoteDefinitionVoteEntriesRelationViewPagePayload(
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
    return false && typeof data?.__updateable === 'boolean' && data?.__updateable;
  }, [data]);
  const isFormDeleteable = useCallback(() => {
    return false && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
  }, [data]);

  const getPageQueryCustomizer: () => ServiceRatingVoteEntryQueryCustomizer = () => ({
    _mask: actions.getMask ? actions.getMask!() : '{created,value}',
  });

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    if (actions.refreshAction) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };

  // Validation
  const validate: (data: ServiceRatingVoteEntry) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceRatingVoteEntryRatingVoteEntry_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_RATING_VOTE_DEFINITION_VOTE_ENTRIES_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceRatingVoteEntryRatingVoteEntry_View_EditDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, storeDiff, refresh, submit);

  // Dialog hooks
  const openServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerLinkSetSelectorPage =
    useServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerLinkSetSelectorPage();
  const openServiceRatingVoteEntryOwnerRelationViewPage = useServiceRatingVoteEntryOwnerRelationViewPage();

  // Action section
  const getPageTitle = (data: ServiceRatingVoteEntry): string => {
    return t('service.RatingVoteEntry.RatingVoteEntry_View_Edit', { defaultValue: 'RatingVoteEntry View / Edit' });
  };
  const backAction = async () => {
    onClose();
  };
  const refreshAction = async (
    queryCustomizer: ServiceRatingVoteEntryQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceRatingVoteEntryStored>> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const response = await serviceRatingVoteDefinitionServiceForVoteEntriesImpl.refresh(
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
      } as Record<keyof ServiceRatingVoteEntryStored, any>;
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
      const { data: result } = await serviceRatingVoteDefinitionServiceForVoteEntriesImpl.getRangeForOwner(
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
      await openServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerLinkSetSelectorPage(
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
      await openServiceRatingVoteEntryOwnerRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };

  const actions: ServiceRatingVoteEntryRatingVoteEntry_View_EditDialogActions = {
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
  const viewModel: ServiceRatingVoteEntryRatingVoteEntry_View_EditViewModel = {
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
    <ServiceRatingVoteEntryRatingVoteEntry_View_EditViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_tgVq8FslEe6Mx9dH3yj5gQ)/RelationFeatureView"
          data-page-name="service::RatingVoteDefinition::voteEntries::RelationViewPage"
        />
        <ServiceRatingVoteEntryRatingVoteEntry_View_EditDialogContainer
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
    </ServiceRatingVoteEntryRatingVoteEntry_View_EditViewModelContext.Provider>
  );
}
