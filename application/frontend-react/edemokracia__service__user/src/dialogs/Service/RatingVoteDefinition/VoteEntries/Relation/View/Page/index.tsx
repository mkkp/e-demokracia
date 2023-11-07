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
import { useServiceRatingVoteEntryOwnerRelationViewPage } from '~/dialogs/Service/RatingVoteEntry/Owner/Relation/View/Page';
import type { ServiceRatingVoteEntryRatingVoteEntry_View_EditDialogActions } from '~/containers/Service/RatingVoteEntry/RatingVoteEntry_View_Edit/ServiceRatingVoteEntryRatingVoteEntry_View_EditDialogContainer';
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
import { serviceRatingVoteDefinitionServiceForVoteEntriesImpl } from '~/services/data-axios';

export const useServiceRatingVoteDefinitionVoteEntriesRelationViewPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceRatingVoteEntryStored>>) => {
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
          <ServiceRatingVoteDefinitionVoteEntriesRelationViewPage
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

export const convertServiceRatingVoteDefinitionVoteEntriesRelationViewPagePayload = (
  attributeName: keyof ServiceRatingVoteEntry,
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

const ServiceRatingVoteEntryRatingVoteEntry_View_EditDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/RatingVoteEntry/RatingVoteEntry_View_Edit/ServiceRatingVoteEntryRatingVoteEntry_View_EditDialogContainer'
    ),
);

export interface ServiceRatingVoteDefinitionVoteEntriesRelationViewPageProps {
  ownerData: any;

  onClose: () => void;
  onSubmit: (result?: ServiceRatingVoteEntryStored) => void;
}

// Name: service::RatingVoteDefinition::voteEntries::Relation::View::Page
export default function ServiceRatingVoteDefinitionVoteEntriesRelationViewPage(
  props: ServiceRatingVoteDefinitionVoteEntriesRelationViewPageProps,
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

  const pageQueryCustomizer: ServiceRatingVoteEntryQueryCustomizer = {
    _mask: '{created,value}',
  };

  // Dialog hooks
  const openServiceRatingVoteEntryOwnerRelationViewPage = useServiceRatingVoteEntryOwnerRelationViewPage();

  // Calculated section
  const title: string = t('Service.RatingVoteEntry.RatingVoteEntry_View_Edit', {
    defaultValue: 'RatingVoteEntry View / Edit',
  });

  // Action section
  const serviceRatingVoteEntryRatingVoteEntry_View_EditBack = async () => {
    onClose();
  };
  const serviceRatingVoteEntryRatingVoteEntry_View_EditRefresh = async (
    queryCustomizer: ServiceRatingVoteEntryQueryCustomizer,
  ): Promise<ServiceRatingVoteEntryStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceRatingVoteDefinitionServiceForVoteEntriesImpl.refresh(ownerData, pageQueryCustomizer);

      setData(result);

      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceRatingVoteEntryStored, any>;

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const serviceRatingVoteEntryRatingVoteEntry_View_EditOwnerView = async (target?: ServiceServiceUserStored) => {
    await openServiceRatingVoteEntryOwnerRelationViewPage(target!);

    if (!editMode) {
      await actions.serviceRatingVoteEntryRatingVoteEntry_View_EditRefresh!(
        processQueryCustomizer(pageQueryCustomizer),
      );
    }
  };

  const actions: ServiceRatingVoteEntryRatingVoteEntry_View_EditDialogActions = {
    serviceRatingVoteEntryRatingVoteEntry_View_EditBack,
    serviceRatingVoteEntryRatingVoteEntry_View_EditRefresh,
    serviceRatingVoteEntryRatingVoteEntry_View_EditOwnerView,
  };

  // Effect section
  useEffect(() => {
    actions.serviceRatingVoteEntryRatingVoteEntry_View_EditRefresh!(pageQueryCustomizer);
  }, []);

  return (
    <>
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
        />
      </Suspense>
    </>
  );
}
