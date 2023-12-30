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
import { useParams } from 'react-router-dom';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import type { ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditDialogActions } from '~/containers/Service/YesNoAbstainVoteEntry/YesNoAbstainVoteEntry_View_Edit/ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditDialogContainer';
import { useServiceYesNoAbstainVoteEntryOwnerRelationViewPage } from '~/dialogs/Service/YesNoAbstainVoteEntry/Owner/RelationViewPage';
import { useServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserLinkSetSelectorPage } from '~/dialogs/Service/YesNoAbstainVoteEntry/YesNoAbstainVoteEntry_View_Edit/User/LinkSetSelectorPage';
import { useCRUDDialog, useSnacks } from '~/hooks';
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
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceYesNoAbstainVoteEntryServiceImpl } from '~/services/data-axios/ServiceYesNoAbstainVoteEntryServiceImpl';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
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
  'ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditActionsHook';
export type ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditActionsHook = (
  ownerData: any,
  data: ServiceYesNoAbstainVoteEntryStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceYesNoAbstainVoteEntry, value: any) => void,
) => ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditDialogActionsExtended;

export const useServiceYesNoAbstainVoteDefinitionUserVoteEntryRelationViewPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceYesNoAbstainVoteEntryStored>>) => {
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
          <ServiceYesNoAbstainVoteDefinitionUserVoteEntryRelationViewPage
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

  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceYesNoAbstainVoteEntryStored) => Promise<void>;
}

// XMIID: User/(esm/_IpWxkFskEe6Mx9dH3yj5gQ)/RelationFeatureView
// Name: service::YesNoAbstainVoteDefinition::userVoteEntry::RelationViewPage
export default function ServiceYesNoAbstainVoteDefinitionUserVoteEntryRelationViewPage(
  props: ServiceYesNoAbstainVoteDefinitionUserVoteEntryRelationViewPageProps,
) {
  const { ownerData, onClose, onSubmit } = props;

  // Services
  const serviceYesNoAbstainVoteEntryServiceImpl = useMemo(
    () => new ServiceYesNoAbstainVoteEntryServiceImpl(judoAxiosProvider),
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

  const pageQueryCustomizer: ServiceYesNoAbstainVoteEntryQueryCustomizer = {
    _mask: '{created,value,owner{representation}}',
  };

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_YES_NO_ABSTAIN_VOTE_DEFINITION_USER_VOTE_ENTRY_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions: ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, storeDiff);

  // Dialog hooks
  const openServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserLinkSetSelectorPage =
    useServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserLinkSetSelectorPage();
  const openServiceYesNoAbstainVoteEntryOwnerRelationViewPage = useServiceYesNoAbstainVoteEntryOwnerRelationViewPage();

  // Calculated section
  const title: string = t('service.YesNoAbstainVoteEntry.YesNoAbstainVoteEntry_View_Edit', {
    defaultValue: 'YesNoAbstainVoteEntry View / Edit',
  });

  // Private actions
  const submit = async () => {};

  // Action section
  const backAction = async () => {
    onClose();
  };
  const refreshAction = async (
    queryCustomizer: ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ): Promise<ServiceYesNoAbstainVoteEntryStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceYesNoAbstainVoteEntryServiceImpl.refresh(ownerData, pageQueryCustomizer);
      setData(result);
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
      return result;
    } catch (error) {
      handleError(error);
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
      return serviceYesNoAbstainVoteEntryServiceImpl.getRangeForOwner(data, queryCustomizer);
    } catch (error) {
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
  const ownerUnsetAction = async (target: ServiceServiceUserStored) => {
    storeDiff('owner', null);
  };
  const ownerOpenPageAction = async (target?: ServiceServiceUserStored) => {
    await openServiceYesNoAbstainVoteEntryOwnerRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };

  const actions: ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditDialogActions = {
    backAction,
    refreshAction,
    ownerAutocompleteRangeAction,
    ownerOpenSetSelectorAction,
    ownerUnsetAction,
    ownerOpenPageAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    actions.refreshAction!(pageQueryCustomizer);
  }, []);

  return (
    <div
      id="User/(esm/_IpWxkFskEe6Mx9dH3yj5gQ)/RelationFeatureView"
      data-page-name="service::YesNoAbstainVoteDefinition::userVoteEntry::RelationViewPage"
    >
      <Suspense>
        <ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditDialogContainer
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
