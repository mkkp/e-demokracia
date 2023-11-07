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
import { routeToServiceYesNoAbstainVoteDefinitionIssueRelationViewPage } from '~/routes';
import { useServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteInputForm } from '~/dialogs/Service/YesNoAbstainVoteDefinition/YesNoAbstainVoteDefinition_View_Edit/Vote/Input/Form';
import { useServiceYesNoAbstainVoteDefinitionUserVoteEntryRelationViewPage } from '~/dialogs/Service/YesNoAbstainVoteDefinition/UserVoteEntry/Relation/View/Page';
import { useServiceYesNoAbstainVoteDefinitionVoteEntriesRelationViewPage } from '~/dialogs/Service/YesNoAbstainVoteDefinition/VoteEntries/Relation/View/Page';
import type { ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditPageActions } from '~/containers/Service/YesNoAbstainVoteDefinition/YesNoAbstainVoteDefinition_View_Edit/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditPageContainer';
import type {
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceYesNoAbstainVoteDefinition,
  ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ServiceYesNoAbstainVoteDefinitionStored,
  ServiceYesNoAbstainVoteEntry,
  ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ServiceYesNoAbstainVoteEntryStored,
  VoteStatus,
} from '~/services/data-api';
import { userServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl } from '~/services/data-axios';

export const convertServiceUserUserOwnedYesNoAbstainVoteDefinitionsAccessViewPagePayload = (
  attributeName: keyof ServiceYesNoAbstainVoteDefinition,
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

const ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditPageContainer = lazy(
  () =>
    import(
      '~/containers/Service/YesNoAbstainVoteDefinition/YesNoAbstainVoteDefinition_View_Edit/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditPageContainer'
    ),
);

// XMIID: User/(esm/_9lF1oFuhEe6rLvwZQOpyUA)/AccessViewPageDefinition
// Name: service::User::userOwnedYesNoAbstainVoteDefinitions::Access::View::Page
export default function ServiceUserUserOwnedYesNoAbstainVoteDefinitionsAccessViewPage() {
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
  const [data, setData] = useState<ServiceYesNoAbstainVoteDefinitionStored>({
    __signedIdentifier: signedIdentifier,
  } as ServiceYesNoAbstainVoteDefinitionStored);
  const [validation, setValidation] = useState<Map<keyof ServiceYesNoAbstainVoteDefinition, string>>(
    new Map<keyof ServiceYesNoAbstainVoteDefinition, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceYesNoAbstainVoteDefinitionStored, any>>(
    {} as unknown as Record<keyof ServiceYesNoAbstainVoteDefinitionStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceYesNoAbstainVoteDefinition, value: any) => void = useCallback(
    (attributeName: keyof ServiceYesNoAbstainVoteDefinition, value: any) => {
      payloadDiff.current![attributeName] = convertServiceUserUserOwnedYesNoAbstainVoteDefinitionsAccessViewPagePayload(
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

  const pageQueryCustomizer: ServiceYesNoAbstainVoteDefinitionQueryCustomizer = {
    _mask:
      '{userHasVoteEntry,created,description,userHasNoVoteEntry,title,closeAt,status,userVoteEntry{value,created}}',
  };

  // Dialog hooks
  const openServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteInputForm =
    useServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteInputForm();
  const openServiceYesNoAbstainVoteDefinitionUserVoteEntryRelationViewPage =
    useServiceYesNoAbstainVoteDefinitionUserVoteEntryRelationViewPage();
  const openServiceYesNoAbstainVoteDefinitionVoteEntriesRelationViewPage =
    useServiceYesNoAbstainVoteDefinitionVoteEntriesRelationViewPage();

  // Calculated section
  const title: string = t('Service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit', {
    defaultValue: 'YesNoAbstainVoteDefinition View / Edit',
  });

  // Action section
  const serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditBack = async () => {
    back();
  };
  const serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditRefresh = async (
    queryCustomizer: ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ): Promise<ServiceYesNoAbstainVoteDefinitionStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await userServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl.refresh(
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
      } as Record<keyof ServiceYesNoAbstainVoteDefinitionStored, any>;

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditCancel = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditRefresh(
      processQueryCustomizer(pageQueryCustomizer),
    );
  };
  const serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUpdate = async () => {
    setIsLoading(true);

    try {
      const res = await userServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl.update(payloadDiff.current);

      if (res) {
        enqueueSnackbar(t('judo.action.save.success', { defaultValue: 'Changes saved' }), {
          variant: 'success',
          ...toastConfig.success,
        });
        setValidation(new Map<keyof ServiceYesNoAbstainVoteDefinition, string>());
        await actions.serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditRefresh!(
          pageQueryCustomizer,
        );
        setEditMode(false);
      }
    } catch (error) {
      handleError<ServiceYesNoAbstainVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteTakeBackVote =
    async () => {
      try {
        setIsLoading(true);
        await userServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl.takeBackVote(data);

        enqueueSnackbar(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
          {
            variant: 'success',
            ...toastConfig.success,
          },
        );

        if (!editMode) {
          await actions.serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditRefresh!(
            processQueryCustomizer(pageQueryCustomizer),
          );
        }
      } catch (error) {
        handleError<ServiceYesNoAbstainVoteDefinition>(error, { setValidation }, data);
      } finally {
        setIsLoading(false);
      }
    };
  const serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteOpenForm =
    async () => {
      const { result, data: returnedData } =
        await openServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteInputForm(data);
      if (!editMode) {
        await actions.serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditRefresh!(
          processQueryCustomizer(pageQueryCustomizer),
        );
      }
    };
  const serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntryBaseVirtualIssueOpenPage = async (
    target?: ServiceIssueStored,
  ) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceYesNoAbstainVoteDefinitionIssueRelationViewPage((target || data).__signedIdentifier));
  };
  const serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntryBaseVirtualIssuePreFetch =
    async (): Promise<ServiceIssueStored> => {
      return userServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl.getIssue(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
        {
          _mask: '{}',
        },
      );
    };
  const serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryView =
    async (target?: ServiceYesNoAbstainVoteEntryStored) => {
      await openServiceYesNoAbstainVoteDefinitionUserVoteEntryRelationViewPage(target!);

      if (!editMode) {
        await actions.serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditRefresh!(
          processQueryCustomizer(pageQueryCustomizer),
        );
      }
    };
  const serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditEntriesVoteEntriesView = async (
    target?: ServiceYesNoAbstainVoteEntryStored,
  ) => {
    await openServiceYesNoAbstainVoteDefinitionVoteEntriesRelationViewPage(target!);

    if (!editMode) {
      await actions.serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditRefresh!(
        processQueryCustomizer(pageQueryCustomizer),
      );
    }
  };
  const serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditEntriesVoteEntriesFilter = async (
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
  const serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditEntriesVoteEntriesRefresh = async (
    queryCustomizer: ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ): Promise<ServiceYesNoAbstainVoteEntryStored[]> => {
    return userServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl.listVoteEntries(
      { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
      queryCustomizer,
    );
  };

  const actions: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditPageActions = {
    serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditBack,
    serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditRefresh,
    serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditCancel,
    serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUpdate,
    serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteTakeBackVote,
    serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteOpenForm,
    serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntryBaseVirtualIssueOpenPage,
    serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntryBaseVirtualIssuePreFetch,
    serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryView,
    serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditEntriesVoteEntriesView,
    serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditEntriesVoteEntriesFilter,
    serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditEntriesVoteEntriesRefresh,
  };

  // Effect section
  useEffect(() => {
    (async () => {
      await actions.serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditRefresh!(pageQueryCustomizer);
    })();
  }, []);

  return (
    <Suspense>
      <PageContainerTransition>
        <ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditPageContainer
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
