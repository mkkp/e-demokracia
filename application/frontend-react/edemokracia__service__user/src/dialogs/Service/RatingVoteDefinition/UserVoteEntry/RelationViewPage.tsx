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
import type { ServiceRatingVoteEntryRatingVoteEntry_View_EditDialogActions } from '~/containers/Service/RatingVoteEntry/RatingVoteEntry_View_Edit/ServiceRatingVoteEntryRatingVoteEntry_View_EditDialogContainer';
import { useServiceRatingVoteEntryOwnerRelationViewPage } from '~/dialogs/Service/RatingVoteEntry/Owner/RelationViewPage';
import { useServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerLinkSetSelectorPage } from '~/dialogs/Service/RatingVoteEntry/RatingVoteEntry_View_Edit/Owner/LinkSetSelectorPage';
import { useCRUDDialog, useSnacks } from '~/hooks';
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
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceRatingVoteEntryServiceImpl } from '~/services/data-axios/ServiceRatingVoteEntryServiceImpl';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceRatingVoteEntryRatingVoteEntry_View_EditDialogActionsExtended =
  ServiceRatingVoteEntryRatingVoteEntry_View_EditDialogActions & {
    postRefreshAction?: (
      data: ServiceRatingVoteEntryStored,
      storeDiff: (attributeName: keyof ServiceRatingVoteEntry, value: any) => void,
      setValidation: Dispatch<SetStateAction<Map<keyof ServiceRatingVoteEntry, string>>>,
    ) => Promise<void>;
  };

export const SERVICE_RATING_VOTE_DEFINITION_USER_VOTE_ENTRY_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceRatingVoteEntryRatingVoteEntry_View_EditActionsHook';
export type ServiceRatingVoteEntryRatingVoteEntry_View_EditActionsHook = (
  ownerData: any,
  data: ServiceRatingVoteEntryStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceRatingVoteEntry, value: any) => void,
) => ServiceRatingVoteEntryRatingVoteEntry_View_EditDialogActionsExtended;

export const useServiceRatingVoteDefinitionUserVoteEntryRelationViewPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceRatingVoteEntryStored>>) => {
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
          <ServiceRatingVoteDefinitionUserVoteEntryRelationViewPage
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

export const convertServiceRatingVoteDefinitionUserVoteEntryRelationViewPagePayload = (
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

export interface ServiceRatingVoteDefinitionUserVoteEntryRelationViewPageProps {
  ownerData: any;

  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceRatingVoteEntryStored) => Promise<void>;
}

// XMIID: User/(esm/_3FFXoFslEe6Mx9dH3yj5gQ)/RelationFeatureView
// Name: service::RatingVoteDefinition::userVoteEntry::RelationViewPage
export default function ServiceRatingVoteDefinitionUserVoteEntryRelationViewPage(
  props: ServiceRatingVoteDefinitionUserVoteEntryRelationViewPageProps,
) {
  const { ownerData, onClose, onSubmit } = props;

  // Services
  const serviceRatingVoteEntryServiceImpl = useMemo(() => new ServiceRatingVoteEntryServiceImpl(judoAxiosProvider), []);

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
      payloadDiff.current![attributeName] = convertServiceRatingVoteDefinitionUserVoteEntryRelationViewPagePayload(
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

  const pageQueryCustomizer: ServiceRatingVoteEntryQueryCustomizer = {
    _mask: '{created,value}',
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceRatingVoteEntryRatingVoteEntry_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_RATING_VOTE_DEFINITION_USER_VOTE_ENTRY_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceRatingVoteEntryRatingVoteEntry_View_EditDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, storeDiff);

  // Dialog hooks
  const openServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerLinkSetSelectorPage =
    useServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerLinkSetSelectorPage();
  const openServiceRatingVoteEntryOwnerRelationViewPage = useServiceRatingVoteEntryOwnerRelationViewPage();

  // Calculated section
  const title: string = t('service.RatingVoteEntry.RatingVoteEntry_View_Edit', {
    defaultValue: 'RatingVoteEntry View / Edit',
  });

  // Private actions
  const submit = async () => {};

  // Action section
  const backAction = async () => {
    onClose();
  };
  const refreshAction = async (
    queryCustomizer: ServiceRatingVoteEntryQueryCustomizer,
  ): Promise<ServiceRatingVoteEntryStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceRatingVoteEntryServiceImpl.refresh(ownerData, pageQueryCustomizer);
      setData(result);
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
      return serviceRatingVoteEntryServiceImpl.getRangeForOwner(data, queryCustomizer);
    } catch (error) {
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
  const ownerUnsetAction = async (target: ServiceServiceUserStored) => {
    storeDiff('owner', null);
  };
  const ownerOpenPageAction = async (target?: ServiceServiceUserStored) => {
    await openServiceRatingVoteEntryOwnerRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };

  const actions: ServiceRatingVoteEntryRatingVoteEntry_View_EditDialogActions = {
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
      id="User/(esm/_3FFXoFslEe6Mx9dH3yj5gQ)/RelationFeatureView"
      data-page-name="service::RatingVoteDefinition::userVoteEntry::RelationViewPage"
    >
      <Suspense>
        <ServiceRatingVoteEntryRatingVoteEntry_View_EditDialogContainer
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
