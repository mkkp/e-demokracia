//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, lazy, Suspense } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import type { GridFilterModel } from '@mui/x-data-grid';
import type { Filter, FilterOption } from '~/components-api';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import { toastConfig } from '~/config';
import { useSnacks, useCRUDDialog } from '~/hooks';
import {
  passesLocalValidation,
  processQueryCustomizer,
  uiDateToServiceDate,
  uiTimeToServiceTime,
  useErrorHandler,
} from '~/utilities';
import type { DialogResult } from '~/utilities';
import { useServiceYesNoVoteEntryOwnerRelationViewPage } from '~/dialogs/Service/YesNoVoteEntry/Owner/RelationViewPage';
import type { ServiceYesNoVoteEntryYesNoVoteEntry_View_EditDialogActions } from '~/containers/Service/YesNoVoteEntry/YesNoVoteEntry_View_Edit/ServiceYesNoVoteEntryYesNoVoteEntry_View_EditDialogContainer';
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
import { serviceYesNoVoteEntryServiceImpl } from '~/services/data-axios';
export type ServiceYesNoVoteEntryYesNoVoteEntry_View_EditDialogActionsExtended =
  ServiceYesNoVoteEntryYesNoVoteEntry_View_EditDialogActions & {};

export const SERVICE_YES_NO_VOTE_DEFINITION_VOTE_ENTRIES_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceYesNoVoteEntryYesNoVoteEntry_View_EditActionsHook';
export type ServiceYesNoVoteEntryYesNoVoteEntry_View_EditActionsHook = (
  ownerData: any,
  data: ServiceYesNoVoteEntryStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceYesNoVoteEntry, value: any) => void,
) => ServiceYesNoVoteEntryYesNoVoteEntry_View_EditDialogActionsExtended;

export const useServiceYesNoVoteDefinitionVoteEntriesRelationViewPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceYesNoVoteEntryStored>>) => {
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
          <ServiceYesNoVoteDefinitionVoteEntriesRelationViewPage
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

export const convertServiceYesNoVoteDefinitionVoteEntriesRelationViewPagePayload = (
  attributeName: keyof ServiceYesNoVoteEntry,
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

const ServiceYesNoVoteEntryYesNoVoteEntry_View_EditDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/YesNoVoteEntry/YesNoVoteEntry_View_Edit/ServiceYesNoVoteEntryYesNoVoteEntry_View_EditDialogContainer'
    ),
);

export interface ServiceYesNoVoteDefinitionVoteEntriesRelationViewPageProps {
  ownerData: any;

  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceYesNoVoteEntryStored) => Promise<void>;
}

// XMIID: User/(esm/_j_gXIFojEe6_67aMO2jOsw)/RelationFeatureView
// Name: service::YesNoVoteDefinition::voteEntries::RelationViewPage
export default function ServiceYesNoVoteDefinitionVoteEntriesRelationViewPage(
  props: ServiceYesNoVoteDefinitionVoteEntriesRelationViewPageProps,
) {
  const { ownerData, onClose, onSubmit } = props;

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
    return false && typeof data?.__updateable === 'boolean' && data?.__updateable;
  }, [data]);
  const isFormDeleteable = useCallback(() => {
    return false && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
  }, [data]);

  const pageQueryCustomizer: ServiceYesNoVoteEntryQueryCustomizer = {
    _mask: '{created,value,owner{representation}}',
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceYesNoVoteEntryYesNoVoteEntry_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_YES_NO_VOTE_DEFINITION_VOTE_ENTRIES_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceYesNoVoteEntryYesNoVoteEntry_View_EditDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, storeDiff);

  // Dialog hooks
  const openServiceYesNoVoteEntryOwnerRelationViewPage = useServiceYesNoVoteEntryOwnerRelationViewPage();

  // Calculated section
  const title: string = t('service.YesNoVoteEntry.YesNoVoteEntry_View_Edit', {
    defaultValue: 'YesNoVoteEntry View / Edit',
  });

  // Action section
  const backAction = async () => {
    onClose();
  };
  const refreshAction = async (
    queryCustomizer: ServiceYesNoVoteEntryQueryCustomizer,
  ): Promise<ServiceYesNoVoteEntryStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceYesNoVoteEntryServiceImpl.refresh(ownerData, pageQueryCustomizer);
      setData(result);
      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceYesNoVoteEntryStored, any>;
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
    await openServiceYesNoVoteEntryOwnerRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };

  const actions: ServiceYesNoVoteEntryYesNoVoteEntry_View_EditDialogActions = {
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
      id="User/(esm/_j_gXIFojEe6_67aMO2jOsw)/RelationFeatureView"
      data-page-name="service::YesNoVoteDefinition::voteEntries::RelationViewPage"
    >
      <Suspense>
        <ServiceYesNoVoteEntryYesNoVoteEntry_View_EditDialogContainer
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
