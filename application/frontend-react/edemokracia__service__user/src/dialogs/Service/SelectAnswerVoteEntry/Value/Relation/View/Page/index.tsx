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
import type { ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDialogActions } from '~/containers/Service/SelectAnswerVoteSelection/SelectAnswerVoteSelection_View_Edit/ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDialogContainer';
import type {
  ServiceSelectAnswerVoteEntry,
  ServiceSelectAnswerVoteEntryStored,
  ServiceSelectAnswerVoteSelection,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteSelectionStored,
} from '~/services/data-api';
import { serviceSelectAnswerVoteSelectionServiceImpl } from '~/services/data-axios';
export type ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDialogActionsExtended =
  ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDialogActions & {};

export const SERVICE_SELECT_ANSWER_VOTE_ENTRY_VALUE_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditActionsHook';
export type ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditActionsHook = (
  ownerData: any,
  data: ServiceSelectAnswerVoteSelectionStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceSelectAnswerVoteSelection, value: any) => void,
) => ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDialogActionsExtended;

export const useServiceSelectAnswerVoteEntryValueRelationViewPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceSelectAnswerVoteSelectionStored>>) => {
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
          <ServiceSelectAnswerVoteEntryValueRelationViewPage
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

export const convertServiceSelectAnswerVoteEntryValueRelationViewPagePayload = (
  attributeName: keyof ServiceSelectAnswerVoteSelection,
  value: any,
): any => {
  const dateTypes: string[] = [];
  const dateTimeTypes: string[] = [];
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

const ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/SelectAnswerVoteSelection/SelectAnswerVoteSelection_View_Edit/ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDialogContainer'
    ),
);

export interface ServiceSelectAnswerVoteEntryValueRelationViewPageProps {
  ownerData: any;

  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceSelectAnswerVoteSelectionStored) => Promise<void>;
}

// XMIID: User/(esm/_MSzPwFtsEe6Mx9dH3yj5gQ)/RelationFeatureView
// Name: service::SelectAnswerVoteEntry::value::Relation::View::Page
// Open in dialog: true
export default function ServiceSelectAnswerVoteEntryValueRelationViewPage(
  props: ServiceSelectAnswerVoteEntryValueRelationViewPageProps,
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

  const pageQueryCustomizer: ServiceSelectAnswerVoteSelectionQueryCustomizer = {
    _mask: '{description,title}',
  };

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_SELECT_ANSWER_VOTE_ENTRY_VALUE_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions:
    | ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDialogActionsExtended
    | undefined = customActionsHook?.(ownerData, data, editMode, storeDiff);

  // Dialog hooks

  // Calculated section
  const title: string = t('service.SelectAnswerVoteSelection.SelectAnswerVoteSelection_View_Edit', {
    defaultValue: 'SelectAnswerVoteSelection View / Edit',
  });

  // Action section
  const backAction = async () => {
    onClose();
  };
  const refreshAction = async (
    queryCustomizer: ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<ServiceSelectAnswerVoteSelectionStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceSelectAnswerVoteSelectionServiceImpl.refresh(ownerData, pageQueryCustomizer);

      setData(result);

      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceSelectAnswerVoteSelectionStored, any>;

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };

  const actions: ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDialogActions = {
    backAction,
    refreshAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    actions.refreshAction!(pageQueryCustomizer);
  }, []);

  return (
    <div
      id="User/(esm/_MSzPwFtsEe6Mx9dH3yj5gQ)/RelationFeatureView"
      data-page-name="service::SelectAnswerVoteEntry::value::Relation::View::Page"
    >
      <Suspense>
        <ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditDialogContainer
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
