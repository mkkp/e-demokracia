//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'/index.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, lazy, Suspense } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import type { GridFilterModel } from '@mui/x-data-grid';
import type { Filter, FilterOption } from '~/components-api';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import { toastConfig } from '~/config';
import { useCRUDDialog } from '~/hooks';
import {
  passesLocalValidation,
  processQueryCustomizer,
  uiDateToServiceDate,
  uiTimeToServiceTime,
  useErrorHandler,
} from '~/utilities';
import type { DialogResult } from '~/utilities';
import { useServiceSelectAnswerVoteEntryOwnerRelationViewPage } from '~/dialogs/Service/SelectAnswerVoteEntry/Owner/Relation/View/Page';
import type { ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditDialogActions } from '~/containers/Service/SelectAnswerVoteEntry/SelectAnswerVoteEntry_View_Edit/ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditDialogContainer';
import type {
  ServiceSelectAnswerVoteDefinition,
  ServiceSelectAnswerVoteDefinitionStored,
  ServiceSelectAnswerVoteEntry,
  ServiceSelectAnswerVoteEntryQueryCustomizer,
  ServiceSelectAnswerVoteEntryStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
import { serviceSelectAnswerVoteEntryServiceImpl } from '~/services/data-axios';
export type ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditDialogActionsExtended =
  ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditDialogActions & {};

export const SERVICE_SELECT_ANSWER_VOTE_DEFINITION_VOTE_ENTRIES_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditActionsHook';
export type ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditActionsHook = (
  ownerData: any,
  data: ServiceSelectAnswerVoteEntryStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceSelectAnswerVoteEntry, value: any) => void,
) => ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditDialogActionsExtended;

export const useServiceSelectAnswerVoteDefinitionVoteEntriesRelationViewPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceSelectAnswerVoteEntryStored>>) => {
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
          <ServiceSelectAnswerVoteDefinitionVoteEntriesRelationViewPage
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

export const convertServiceSelectAnswerVoteDefinitionVoteEntriesRelationViewPagePayload = (
  attributeName: keyof ServiceSelectAnswerVoteEntry,
  value: any,
): any => {
  const dateTypes: string[] = [];
  const dateTimeTypes: string[] = ['created'];
  const timeTypes: string[] = [];
  if (dateTypes.includes(attributeName as string)) {
    return uiDateToServiceDate(value);
  } else if (dateTimeTypes.includes(attributeName as string)) {
    return value;
  } else if (timeTypes.includes(attributeName as string)) {
    return uiTimeToServiceTime(value);
  }
  return value;
};

const ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/SelectAnswerVoteEntry/SelectAnswerVoteEntry_View_Edit/ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditDialogContainer'
    ),
);

export interface ServiceSelectAnswerVoteDefinitionVoteEntriesRelationViewPageProps {
  ownerData: any;

  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceSelectAnswerVoteEntryStored) => Promise<void>;
}

// XMIID: User/(esm/_AXx6IFtqEe6Mx9dH3yj5gQ)/RelationFeatureView
// Name: service::SelectAnswerVoteDefinition::voteEntries::Relation::View::Page
// Open in dialog: true
export default function ServiceSelectAnswerVoteDefinitionVoteEntriesRelationViewPage(
  props: ServiceSelectAnswerVoteDefinitionVoteEntriesRelationViewPageProps,
) {
  const { ownerData, onClose, onSubmit } = props;

  // Hooks section
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
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
      payloadDiff.current![attributeName] = convertServiceSelectAnswerVoteDefinitionVoteEntriesRelationViewPagePayload(
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

  const pageQueryCustomizer: ServiceSelectAnswerVoteEntryQueryCustomizer = {
    _mask: '{valueRepresentation,created}',
  };

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_SELECT_ANSWER_VOTE_DEFINITION_VOTE_ENTRIES_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions: ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, storeDiff);

  // Dialog hooks
  const openServiceSelectAnswerVoteEntryOwnerRelationViewPage = useServiceSelectAnswerVoteEntryOwnerRelationViewPage();

  // Calculated section
  const title: string = t('service.SelectAnswerVoteEntry.SelectAnswerVoteEntry_View_Edit', {
    defaultValue: 'SelectAnswerVoteEntry View / Edit',
  });

  // Action section
  const backAction = async () => {
    onClose();
  };
  const refreshAction = async (
    queryCustomizer: ServiceSelectAnswerVoteEntryQueryCustomizer,
  ): Promise<ServiceSelectAnswerVoteEntryStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceSelectAnswerVoteEntryServiceImpl.refresh(ownerData, pageQueryCustomizer);

      setData(result);

      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceSelectAnswerVoteEntryStored, any>;

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const ownerOpenPageAction = async (target?: ServiceServiceUserStored) => {
    await openServiceSelectAnswerVoteEntryOwnerRelationViewPage(target!);

    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };

  const actions: ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditDialogActions = {
    backAction,
    refreshAction,
    ownerOpenPageAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    actions.refreshAction!(pageQueryCustomizer);
  }, []);

  return (
    <div
      id="User/(esm/_AXx6IFtqEe6Mx9dH3yj5gQ)/RelationFeatureView"
      data-page-name="service::SelectAnswerVoteDefinition::voteEntries::Relation::View::Page"
    >
      <Suspense>
        <ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditDialogContainer
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
        />
      </Suspense>
    </div>
  );
}
