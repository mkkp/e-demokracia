//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'/index.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, lazy, Suspense } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
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
import { serviceSelectAnswerVoteDefinitionServiceForVoteEntriesImpl } from '~/services/data-axios';

export const useServiceSelectAnswerVoteDefinitionVoteEntriesRelationViewPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceSelectAnswerVoteEntryStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any) =>
    new Promise((resolve) => {
      createDialog({
        fullWidth: true,
        maxWidth: 'md',
        onClose: (event: object, reason: string) => {
          if (reason !== 'backdropClick') {
            closeDialog();
            resolve({
              result: 'close',
            });
          }
        },
        children: (
          <ServiceSelectAnswerVoteDefinitionVoteEntriesRelationViewPage
            ownerData={ownerData}
            onClose={() => {
              closeDialog();
              resolve({
                result: 'close',
              });
            }}
            onSubmit={(result) => {
              closeDialog();
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

  onClose: () => void;
  onSubmit: (result?: ServiceSelectAnswerVoteEntryStored) => void;
}

// Name: service::SelectAnswerVoteDefinition::voteEntries::Relation::View::Page
export default function ServiceSelectAnswerVoteDefinitionVoteEntriesRelationViewPage(
  props: ServiceSelectAnswerVoteDefinitionVoteEntriesRelationViewPageProps,
) {
  const { ownerData, onClose, onSubmit } = props;

  // Hooks section
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const { navigate, back } = useJudoNavigation();
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

  // Dialog hooks
  const openServiceSelectAnswerVoteEntryOwnerRelationViewPage = useServiceSelectAnswerVoteEntryOwnerRelationViewPage();

  // Calculated section
  const title: string = t('Service.SelectAnswerVoteEntry.SelectAnswerVoteEntry_View_Edit', {
    defaultValue: 'SelectAnswerVoteEntry View / Edit',
  });

  // Action section
  const serviceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditBack = async () => {
    onClose();
  };
  const serviceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditRefresh = async (
    queryCustomizer: ServiceSelectAnswerVoteEntryQueryCustomizer,
  ): Promise<ServiceSelectAnswerVoteEntryStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceSelectAnswerVoteDefinitionServiceForVoteEntriesImpl.refresh(
        ownerData,
        pageQueryCustomizer,
      );

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
  const serviceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditOwnerView = async (
    target?: ServiceServiceUserStored,
  ) => {
    await openServiceSelectAnswerVoteEntryOwnerRelationViewPage(target!);

    if (!editMode) {
      await actions.serviceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditRefresh!(
        processQueryCustomizer(pageQueryCustomizer),
      );
    }
  };

  const actions: ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditDialogActions = {
    serviceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditBack,
    serviceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditRefresh,
    serviceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditOwnerView,
  };

  // Effect section
  useEffect(() => {
    actions.serviceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditRefresh!(pageQueryCustomizer);
  }, []);

  return (
    <>
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
    </>
  );
}
