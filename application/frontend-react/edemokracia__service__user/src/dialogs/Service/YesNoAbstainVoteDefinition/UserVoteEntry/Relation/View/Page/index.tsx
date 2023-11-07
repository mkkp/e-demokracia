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
import { useServiceYesNoAbstainVoteEntryOwnerRelationViewPage } from '~/dialogs/Service/YesNoAbstainVoteEntry/Owner/Relation/View/Page';
import type { ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditDialogActions } from '~/containers/Service/YesNoAbstainVoteEntry/YesNoAbstainVoteEntry_View_Edit/ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditDialogContainer';
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
import { serviceYesNoAbstainVoteDefinitionServiceForUserVoteEntryImpl } from '~/services/data-axios';

export const useServiceYesNoAbstainVoteDefinitionUserVoteEntryRelationViewPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceYesNoAbstainVoteEntryStored>>) => {
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
          <ServiceYesNoAbstainVoteDefinitionUserVoteEntryRelationViewPage
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

export const convertServiceYesNoAbstainVoteDefinitionUserVoteEntryRelationViewPagePayload = (
  attributeName: keyof ServiceYesNoAbstainVoteEntry,
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

const ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/YesNoAbstainVoteEntry/YesNoAbstainVoteEntry_View_Edit/ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditDialogContainer'
    ),
);

export interface ServiceYesNoAbstainVoteDefinitionUserVoteEntryRelationViewPageProps {
  ownerData: any;

  onClose: () => void;
  onSubmit: (result?: ServiceYesNoAbstainVoteEntryStored) => void;
}

// Name: service::YesNoAbstainVoteDefinition::userVoteEntry::Relation::View::Page
export default function ServiceYesNoAbstainVoteDefinitionUserVoteEntryRelationViewPage(
  props: ServiceYesNoAbstainVoteDefinitionUserVoteEntryRelationViewPageProps,
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

  // Dialog hooks
  const openServiceYesNoAbstainVoteEntryOwnerRelationViewPage = useServiceYesNoAbstainVoteEntryOwnerRelationViewPage();

  // Calculated section
  const title: string = t('Service.YesNoAbstainVoteEntry.YesNoAbstainVoteEntry_View_Edit', {
    defaultValue: 'YesNoAbstainVoteEntry View / Edit',
  });

  // Action section
  const serviceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditBack = async () => {
    onClose();
  };
  const serviceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditRefresh = async (
    queryCustomizer: ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ): Promise<ServiceYesNoAbstainVoteEntryStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceYesNoAbstainVoteDefinitionServiceForUserVoteEntryImpl.refresh(
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
      } as Record<keyof ServiceYesNoAbstainVoteEntryStored, any>;

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const serviceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserView = async (
    target?: ServiceServiceUserStored,
  ) => {
    await openServiceYesNoAbstainVoteEntryOwnerRelationViewPage(target!);

    if (!editMode) {
      await actions.serviceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditRefresh!(
        processQueryCustomizer(pageQueryCustomizer),
      );
    }
  };

  const actions: ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditDialogActions = {
    serviceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditBack,
    serviceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditRefresh,
    serviceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserView,
  };

  // Effect section
  useEffect(() => {
    actions.serviceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditRefresh!(pageQueryCustomizer);
  }, []);

  return (
    <>
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
        />
      </Suspense>
    </>
  );
}
