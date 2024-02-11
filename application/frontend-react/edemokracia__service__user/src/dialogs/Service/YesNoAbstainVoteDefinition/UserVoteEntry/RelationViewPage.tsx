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
  ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditDialogActions,
  ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditDialogProps,
} from '~/containers/Service/YesNoAbstainVoteEntry/YesNoAbstainVoteEntry_View_Edit/ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditDialogContainer';
import { useServiceYesNoAbstainVoteEntryOwnerRelationViewPage } from '~/dialogs/Service/YesNoAbstainVoteEntry/Owner/RelationViewPage';
import { useServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserLinkSetSelectorPage } from '~/dialogs/Service/YesNoAbstainVoteEntry/YesNoAbstainVoteEntry_View_Edit/User/LinkSetSelectorPage';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceYesNoAbstainVoteDefinition,
  ServiceYesNoAbstainVoteDefinitionStored,
  ServiceYesNoAbstainVoteEntry,
  ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ServiceYesNoAbstainVoteEntryStored,
  YesNoAbstainVoteValue,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceYesNoAbstainVoteDefinitionServiceForUserVoteEntryImpl } from '~/services/data-axios/ServiceYesNoAbstainVoteDefinitionServiceForUserVoteEntryImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditDialogActionsExtended =
  ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditDialogActions & {
    postRefreshAction?: (
      data: ServiceYesNoAbstainVoteEntryStored,
      storeDiff: (attributeName: keyof ServiceYesNoAbstainVoteEntry, value: any) => void,
      setValidation: Dispatch<SetStateAction<Map<keyof ServiceYesNoAbstainVoteEntry, string>>>,
    ) => Promise<void>;
  };

export const SERVICE_YES_NO_ABSTAIN_VOTE_DEFINITION_USER_VOTE_ENTRY_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_YES_NO_ABSTAIN_VOTE_DEFINITION_USER_VOTE_ENTRY_RELATION_VIEW_PAGE_ACTIONS_HOOK';
export type ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditActionsHook = (
  ownerData: any,
  data: ServiceYesNoAbstainVoteEntryStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceYesNoAbstainVoteEntry, value: any) => void,
  refresh: () => Promise<void>,
  submit: () => Promise<void>,
) => ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditDialogActionsExtended;

export interface ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditViewModel
  extends ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<ServiceYesNoAbstainVoteEntry>;
  isDraft?: boolean;
}

const ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditViewModelContext =
  createContext<ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditViewModel>({} as any);
export const useServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditViewModel = () => {
  const context = useContext(ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditViewModel must be used within a(n) ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditViewModelProvider',
    );
  }
  return context;
};

export const useServiceYesNoAbstainVoteDefinitionUserVoteEntryRelationViewPage = (): ((
  ownerData: any,
  templateDataOverride?: Partial<ServiceYesNoAbstainVoteEntry>,
  isDraft?: boolean,
  ownerValidation?: (data: ServiceYesNoAbstainVoteEntry) => Promise<void>,
) => Promise<DialogResult<ServiceYesNoAbstainVoteEntryStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (
    ownerData: any,
    templateDataOverride?: Partial<ServiceYesNoAbstainVoteEntry>,
    isDraft?: boolean,
    ownerValidation?: (data: ServiceYesNoAbstainVoteEntry) => Promise<void>,
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
          <ServiceYesNoAbstainVoteDefinitionUserVoteEntryRelationViewPage
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

export const convertServiceYesNoAbstainVoteDefinitionUserVoteEntryRelationViewPagePayload = (
  attributeName: keyof ServiceYesNoAbstainVoteEntry,
  value: any,
): any => {
  const dateTimeTypes: string[] = ['created'];
  if (dateTimeTypes.includes(attributeName as string)) {
    return value;
  }
  return value;
};

const ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/YesNoAbstainVoteEntry/YesNoAbstainVoteEntry_View_Edit/ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditDialogContainer'
    ),
);

export interface ServiceYesNoAbstainVoteDefinitionUserVoteEntryRelationViewPageProps {
  ownerData: any;

  templateDataOverride?: Partial<ServiceYesNoAbstainVoteEntry>;
  isDraft?: boolean;
  ownerValidation?: (data: ServiceYesNoAbstainVoteEntry) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceYesNoAbstainVoteEntryStored, isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_IpWxkFskEe6Mx9dH3yj5gQ)/RelationFeatureView
// Name: service::YesNoAbstainVoteDefinition::userVoteEntry::RelationViewPage
export default function ServiceYesNoAbstainVoteDefinitionUserVoteEntryRelationViewPage(
  props: ServiceYesNoAbstainVoteDefinitionUserVoteEntryRelationViewPageProps,
) {
  const { ownerData, templateDataOverride, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceYesNoAbstainVoteDefinitionServiceForUserVoteEntryImpl = useMemo(
    () => new ServiceYesNoAbstainVoteDefinitionServiceForUserVoteEntryImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceYesNoAbstainVoteEntryStored>({} as ServiceYesNoAbstainVoteEntryStored);
  const [validation, setValidation] = useState<Map<keyof ServiceYesNoAbstainVoteEntry, string>>(
    new Map<keyof ServiceYesNoAbstainVoteEntry, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceYesNoAbstainVoteEntryStored, any>>(
    {} as unknown as Record<keyof ServiceYesNoAbstainVoteEntryStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceYesNoAbstainVoteEntry, value: any) => void = useCallback(
    (attributeName: keyof ServiceYesNoAbstainVoteEntry, value: any) => {
      payloadDiff.current![attributeName] =
        convertServiceYesNoAbstainVoteDefinitionUserVoteEntryRelationViewPagePayload(attributeName, value);
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

  const getPageQueryCustomizer: () => ServiceYesNoAbstainVoteEntryQueryCustomizer = () => ({
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
  const validate: (data: ServiceYesNoAbstainVoteEntry) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_YES_NO_ABSTAIN_VOTE_DEFINITION_USER_VOTE_ENTRY_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions: ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, storeDiff, refresh, submit);

  // Dialog hooks
  const openServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserLinkSetSelectorPage =
    useServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserLinkSetSelectorPage();
  const openServiceYesNoAbstainVoteEntryOwnerRelationViewPage = useServiceYesNoAbstainVoteEntryOwnerRelationViewPage();

  // Action section
  const getPageTitle = (data: ServiceYesNoAbstainVoteEntry): string => {
    return t('service.YesNoAbstainVoteEntry.YesNoAbstainVoteEntry_View_Edit', {
      defaultValue: 'YesNoAbstainVoteEntry View / Edit',
    });
  };
  const backAction = async () => {
    onClose();
  };
  const refreshAction = async (
    queryCustomizer: ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceYesNoAbstainVoteEntryStored>> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const response = await serviceYesNoAbstainVoteDefinitionServiceForUserVoteEntryImpl.refresh(
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
      } as Record<keyof ServiceYesNoAbstainVoteEntryStored, any>;
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
      const { data: result } = await serviceYesNoAbstainVoteDefinitionServiceForUserVoteEntryImpl.getRangeForOwner(
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
      await openServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserLinkSetSelectorPage(
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
      await openServiceYesNoAbstainVoteEntryOwnerRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };

  const actions: ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditDialogActions = {
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
  const viewModel: ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditViewModel = {
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
    <ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_IpWxkFskEe6Mx9dH3yj5gQ)/RelationFeatureView"
          data-page-name="service::YesNoAbstainVoteDefinition::userVoteEntry::RelationViewPage"
        />
        <ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditDialogContainer
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
    </ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditViewModelContext.Provider>
  );
}
