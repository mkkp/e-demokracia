//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: 'src/pages/'+#pagePath(#self)+'/index.tsx'
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs

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
import { PageContainerTransition } from '~/theme/animations';
import { routeToServiceSelectAnswerVoteDefinitionIssueRelationViewPage } from '~/routes';
import { useServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector } from '~/dialogs/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_View_Edit/UserVoteEntryGroup/TakeVote/Vote/Relation/Table/CallSelector';
import { useServiceSelectAnswerVoteDefinitionUserVoteEntryRelationViewPage } from '~/dialogs/Service/SelectAnswerVoteDefinition/UserVoteEntry/Relation/View/Page';
import { useServiceSelectAnswerVoteDefinitionVoteEntriesRelationViewPage } from '~/dialogs/Service/SelectAnswerVoteDefinition/VoteEntries/Relation/View/Page';
import { useServiceSelectAnswerVoteDefinitionVoteSelectionsRelationFormPage } from '~/dialogs/Service/SelectAnswerVoteDefinition/VoteSelections/Relation/Form/Page';
import { useServiceSelectAnswerVoteDefinitionVoteSelectionsRelationViewPage } from '~/dialogs/Service/SelectAnswerVoteDefinition/VoteSelections/Relation/View/Page';
import type { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPageActions } from '~/containers/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_View_Edit/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPageContainer';
import type {
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceSelectAnswerVoteDefinition,
  ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ServiceSelectAnswerVoteDefinitionStored,
  ServiceSelectAnswerVoteEntry,
  ServiceSelectAnswerVoteEntryQueryCustomizer,
  ServiceSelectAnswerVoteEntryStored,
  ServiceSelectAnswerVoteSelection,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteSelectionStored,
  VoteStatus,
} from '~/services/data-api';
import { userServiceForUserOwnedSelectAnswerVoteDefinitionsImpl } from '~/services/data-axios';

export const convertServiceUserUserOwnedSelectAnswerVoteDefinitionsAccessViewPagePayload = (
  attributeName: keyof ServiceSelectAnswerVoteDefinition,
  value: any,
): any => {
  const dateTypes: string[] = [];
  const dateTimeTypes: string[] = [
    'closeAt',

    'created',
  ];
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

const ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPageContainer = lazy(
  () =>
    import(
      '~/containers/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_View_Edit/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPageContainer'
    ),
);

// XMIID: User/(esm/_jf3kwFuXEe6T042_LMmSdQ)/AccessViewPageDefinition
// Name: service::User::userOwnedSelectAnswerVoteDefinitions::Access::View::Page
export default function ServiceUserUserOwnedSelectAnswerVoteDefinitionsAccessViewPage() {
  // Router params section
  const { signedIdentifier } = useParams();

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
  const [data, setData] = useState<ServiceSelectAnswerVoteDefinitionStored>({
    __signedIdentifier: signedIdentifier,
  } as ServiceSelectAnswerVoteDefinitionStored);
  const [validation, setValidation] = useState<Map<keyof ServiceSelectAnswerVoteDefinition, string>>(
    new Map<keyof ServiceSelectAnswerVoteDefinition, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceSelectAnswerVoteDefinitionStored, any>>(
    {} as unknown as Record<keyof ServiceSelectAnswerVoteDefinitionStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceSelectAnswerVoteDefinition, value: any) => void = useCallback(
    (attributeName: keyof ServiceSelectAnswerVoteDefinition, value: any) => {
      payloadDiff.current![attributeName] = convertServiceUserUserOwnedSelectAnswerVoteDefinitionsAccessViewPagePayload(
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
    return false && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
  }, [data]);

  const pageQueryCustomizer: ServiceSelectAnswerVoteDefinitionQueryCustomizer = {
    _mask:
      '{userHasVoteEntry,created,description,userHasNoVoteEntry,title,closeAt,status,voteSelections{description,title},userVoteEntry{valueRepresentation,created}}',
  };

  // Dialog hooks
  const openServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector =
    useServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector();
  const openServiceSelectAnswerVoteDefinitionUserVoteEntryRelationViewPage =
    useServiceSelectAnswerVoteDefinitionUserVoteEntryRelationViewPage();
  const openServiceSelectAnswerVoteDefinitionVoteEntriesRelationViewPage =
    useServiceSelectAnswerVoteDefinitionVoteEntriesRelationViewPage();
  const openServiceSelectAnswerVoteDefinitionVoteSelectionsRelationFormPage =
    useServiceSelectAnswerVoteDefinitionVoteSelectionsRelationFormPage();
  const openServiceSelectAnswerVoteDefinitionVoteSelectionsRelationViewPage =
    useServiceSelectAnswerVoteDefinitionVoteSelectionsRelationViewPage();

  // Calculated section
  const title: string = t('Service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit', {
    defaultValue: 'SelectAnswerVoteDefinition View / Edit',
  });

  // Action section
  const serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditBack = async () => {
    back();
  };
  const serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditRefresh = async (
    queryCustomizer: ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ): Promise<ServiceSelectAnswerVoteDefinitionStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await userServiceForUserOwnedSelectAnswerVoteDefinitionsImpl.refresh(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
        pageQueryCustomizer,
      );

      setData(result);

      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceSelectAnswerVoteDefinitionStored, any>;

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditCancel = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditRefresh(
      processQueryCustomizer(pageQueryCustomizer),
    );
  };
  const serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUpdate = async () => {
    setIsLoading(true);

    try {
      const res = await userServiceForUserOwnedSelectAnswerVoteDefinitionsImpl.update(payloadDiff.current);

      if (res) {
        enqueueSnackbar(t('judo.action.save.success', { defaultValue: 'Changes saved' }), {
          variant: 'success',
          ...toastConfig.success,
        });
        setValidation(new Map<keyof ServiceSelectAnswerVoteDefinition, string>());
        await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditRefresh!(
          pageQueryCustomizer,
        );
        setEditMode(false);
      }
    } catch (error) {
      handleError<ServiceSelectAnswerVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteOpenSelector =
    async () => {
      const { result, data: returnedData } =
        await openServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector(
          data,
        );
      if (result === 'submit') {
        if (!editMode) {
          await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditRefresh!(
            processQueryCustomizer(pageQueryCustomizer),
          );
        }
      }
    };
  const serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteTakeBackVote =
    async () => {
      try {
        setIsLoading(true);
        await userServiceForUserOwnedSelectAnswerVoteDefinitionsImpl.takeBackVote(data);

        enqueueSnackbar(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
          {
            variant: 'success',
            ...toastConfig.success,
          },
        );

        if (!editMode) {
          await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditRefresh!(
            processQueryCustomizer(pageQueryCustomizer),
          );
        }
      } catch (error) {
        handleError<ServiceSelectAnswerVoteDefinition>(error, { setValidation }, data);
      } finally {
        setIsLoading(false);
      }
    };
  const serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualIssueOpenPage = async (
    target?: ServiceIssueStored,
  ) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceSelectAnswerVoteDefinitionIssueRelationViewPage((target || data).__signedIdentifier));
  };
  const serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualIssuePreFetch =
    async (): Promise<ServiceIssueStored> => {
      return userServiceForUserOwnedSelectAnswerVoteDefinitionsImpl.getIssue(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
        {
          _mask: '{}',
        },
      );
    };
  const serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesView = async (
    target?: ServiceSelectAnswerVoteEntryStored,
  ) => {
    await openServiceSelectAnswerVoteDefinitionVoteEntriesRelationViewPage(target!);

    if (!editMode) {
      await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditRefresh!(
        processQueryCustomizer(pageQueryCustomizer),
      );
    }
  };
  const serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesFilter = async (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ): Promise<{ model?: GridFilterModel; filters?: Filter[] }> => {
    const newFilters = await openFilterDialog(id, filterOptions, filters);
    return {
      filters: newFilters,
    };
  };
  const serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesRefresh = async (
    queryCustomizer: ServiceSelectAnswerVoteEntryQueryCustomizer,
  ): Promise<ServiceSelectAnswerVoteEntryStored[]> => {
    return userServiceForUserOwnedSelectAnswerVoteDefinitionsImpl.listVoteEntries(
      { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
      queryCustomizer,
    );
  };
  const serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsView =
    async (target?: ServiceSelectAnswerVoteSelectionStored) => {
      await openServiceSelectAnswerVoteDefinitionVoteSelectionsRelationViewPage(target!);

      if (!editMode) {
        await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditRefresh!(
          processQueryCustomizer(pageQueryCustomizer),
        );
      }
    };
  const serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsFilter =
    async (
      id: string,
      filterOptions: FilterOption[],
      model?: GridFilterModel,
      filters?: Filter[],
    ): Promise<{ model?: GridFilterModel; filters?: Filter[] }> => {
      const newFilters = await openFilterDialog(id, filterOptions, filters);
      return {
        filters: newFilters,
      };
    };
  const serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsCreateOpen =
    async () => {
      const { result, data: returnedData } = await openServiceSelectAnswerVoteDefinitionVoteSelectionsRelationFormPage(
        data,
      );
      if (!editMode) {
        await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditRefresh!(
          processQueryCustomizer(pageQueryCustomizer),
        );
      }
    };
  const serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsDelete =
    async (target: ServiceSelectAnswerVoteSelectionStored, silentMode?: boolean) => {
      try {
        const confirmed = !silentMode
          ? await openConfirmDialog(
              'row-delete-action',
              t('judo.modal.confirm.confirm-delete', {
                defaultValue: 'Are you sure you would like to delete the selected element?',
              }),
              t('judo.modal.confirm.confirm-title', { defaultValue: 'Confirm action' }),
            )
          : true;
        if (confirmed) {
          await userServiceForUserOwnedSelectAnswerVoteDefinitionsImpl.deleteVoteSelections(target);

          if (!silentMode) {
            enqueueSnackbar(t('judo.action.delete.success', { defaultValue: 'Delete successful' }), {
              variant: 'success',
              ...toastConfig.success,
            });

            serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditRefresh(pageQueryCustomizer);
          }
        }
      } catch (error) {
        if (!silentMode) {
          handleError<ServiceSelectAnswerVoteSelection>(error, undefined, target);
        }
      }
    };
  const serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsBulkDelete =
    async (
      selectedRows: ServiceSelectAnswerVoteSelectionStored[],
    ): Promise<DialogResult<Array<ServiceSelectAnswerVoteSelectionStored>>> => {
      return new Promise((resolve) => {
        openCRUDDialog<ServiceSelectAnswerVoteSelectionStored>({
          dialogTitle: t('TMP', { defaultValue: 'Delete' }),
          itemTitleFn: (item) => item.description!,
          selectedItems: selectedRows,
          action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
            try {
              if (
                actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsDelete
              ) {
                await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsDelete!(
                  item,
                  true,
                );
              }
              successHandler();
            } catch (error) {
              errorHandler(error);
            }
          },
          onClose: async (needsRefresh) => {
            if (needsRefresh) {
              if (actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditRefresh) {
                await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditRefresh!(
                  processQueryCustomizer(pageQueryCustomizer),
                );
              }
              resolve({
                result: 'submit',
                data: [],
              });
            } else {
              resolve({
                result: 'close',
                data: [],
              });
            }
          },
        });
      });
    };
  const serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryView =
    async (target?: ServiceSelectAnswerVoteEntryStored) => {
      await openServiceSelectAnswerVoteDefinitionUserVoteEntryRelationViewPage(target!);

      if (!editMode) {
        await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditRefresh!(
          processQueryCustomizer(pageQueryCustomizer),
        );
      }
    };

  const actions: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPageActions = {
    serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditBack,
    serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditRefresh,
    serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditCancel,
    serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUpdate,
    serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteOpenSelector,
    serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteTakeBackVote,
    serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualIssueOpenPage,
    serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualIssuePreFetch,
    serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesView,
    serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesFilter,
    serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditEntriesVoteEntriesRefresh,
    serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsView,
    serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsFilter,
    serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsCreateOpen,
    serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsDelete,
    serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualVoteSelectionsBulkDelete,
    serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryView,
  };

  // Effect section
  useEffect(() => {
    (async () => {
      await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditRefresh!(pageQueryCustomizer);
    })();
  }, []);

  return (
    <Suspense>
      <PageContainerTransition>
        <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditPageContainer
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
      </PageContainerTransition>
    </Suspense>
  );
}
