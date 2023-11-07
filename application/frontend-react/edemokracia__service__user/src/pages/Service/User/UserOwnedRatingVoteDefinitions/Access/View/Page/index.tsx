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
import { routeToServiceRatingVoteDefinitionIssueRelationViewPage } from '~/routes';
import { useServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm } from '~/dialogs/Service/RatingVoteDefinition/RatingVoteDefinition_View_Edit/Vote/Input/Form';
import { useServiceRatingVoteDefinitionUserVoteEntryRelationViewPage } from '~/dialogs/Service/RatingVoteDefinition/UserVoteEntry/Relation/View/Page';
import { useServiceRatingVoteDefinitionVoteEntriesRelationViewPage } from '~/dialogs/Service/RatingVoteDefinition/VoteEntries/Relation/View/Page';
import type { ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditPageActions } from '~/containers/Service/RatingVoteDefinition/RatingVoteDefinition_View_Edit/ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditPageContainer';
import type {
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceRatingVoteDefinition,
  ServiceRatingVoteDefinitionQueryCustomizer,
  ServiceRatingVoteDefinitionStored,
  ServiceRatingVoteEntry,
  ServiceRatingVoteEntryQueryCustomizer,
  ServiceRatingVoteEntryStored,
  VoteStatus,
} from '~/services/data-api';
import { userServiceForUserOwnedRatingVoteDefinitionsImpl } from '~/services/data-axios';

export const convertServiceUserUserOwnedRatingVoteDefinitionsAccessViewPagePayload = (
  attributeName: keyof ServiceRatingVoteDefinition,
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

const ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditPageContainer = lazy(
  () =>
    import(
      '~/containers/Service/RatingVoteDefinition/RatingVoteDefinition_View_Edit/ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditPageContainer'
    ),
);

// XMIID: User/(esm/_s3Fx0FuiEe6rLvwZQOpyUA)/AccessViewPageDefinition
// Name: service::User::userOwnedRatingVoteDefinitions::Access::View::Page
export default function ServiceUserUserOwnedRatingVoteDefinitionsAccessViewPage() {
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
  const [data, setData] = useState<ServiceRatingVoteDefinitionStored>({
    __signedIdentifier: signedIdentifier,
  } as ServiceRatingVoteDefinitionStored);
  const [validation, setValidation] = useState<Map<keyof ServiceRatingVoteDefinition, string>>(
    new Map<keyof ServiceRatingVoteDefinition, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceRatingVoteDefinitionStored, any>>(
    {} as unknown as Record<keyof ServiceRatingVoteDefinitionStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceRatingVoteDefinition, value: any) => void = useCallback(
    (attributeName: keyof ServiceRatingVoteDefinition, value: any) => {
      payloadDiff.current![attributeName] = convertServiceUserUserOwnedRatingVoteDefinitionsAccessViewPagePayload(
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

  const pageQueryCustomizer: ServiceRatingVoteDefinitionQueryCustomizer = {
    _mask:
      '{userHasVoteEntry,created,maxRateValue,description,userHasNoVoteEntry,title,closeAt,minRateValue,status,userVoteEntry{created,value}}',
  };

  // Dialog hooks
  const openServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm =
    useServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm();
  const openServiceRatingVoteDefinitionUserVoteEntryRelationViewPage =
    useServiceRatingVoteDefinitionUserVoteEntryRelationViewPage();
  const openServiceRatingVoteDefinitionVoteEntriesRelationViewPage =
    useServiceRatingVoteDefinitionVoteEntriesRelationViewPage();

  // Calculated section
  const title: string = t('Service.RatingVoteDefinition.RatingVoteDefinition_View_Edit', {
    defaultValue: 'RatingVoteDefinition View / Edit',
  });

  // Action section
  const serviceRatingVoteDefinitionRatingVoteDefinition_View_EditBack = async () => {
    back();
  };
  const serviceRatingVoteDefinitionRatingVoteDefinition_View_EditRefresh = async (
    queryCustomizer: ServiceRatingVoteDefinitionQueryCustomizer,
  ): Promise<ServiceRatingVoteDefinitionStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await userServiceForUserOwnedRatingVoteDefinitionsImpl.refresh(
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
      } as Record<keyof ServiceRatingVoteDefinitionStored, any>;

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const serviceRatingVoteDefinitionRatingVoteDefinition_View_EditCancel = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await serviceRatingVoteDefinitionRatingVoteDefinition_View_EditRefresh(processQueryCustomizer(pageQueryCustomizer));
  };
  const serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUpdate = async () => {
    setIsLoading(true);

    try {
      const res = await userServiceForUserOwnedRatingVoteDefinitionsImpl.update(payloadDiff.current);

      if (res) {
        enqueueSnackbar(t('judo.action.save.success', { defaultValue: 'Changes saved' }), {
          variant: 'success',
          ...toastConfig.success,
        });
        setValidation(new Map<keyof ServiceRatingVoteDefinition, string>());
        await actions.serviceRatingVoteDefinitionRatingVoteDefinition_View_EditRefresh!(pageQueryCustomizer);
        setEditMode(false);
      }
    } catch (error) {
      handleError<ServiceRatingVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteTakeBackVote =
    async () => {
      try {
        setIsLoading(true);
        await userServiceForUserOwnedRatingVoteDefinitionsImpl.takeBackVote(data);

        enqueueSnackbar(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
          {
            variant: 'success',
            ...toastConfig.success,
          },
        );

        if (!editMode) {
          await actions.serviceRatingVoteDefinitionRatingVoteDefinition_View_EditRefresh!(
            processQueryCustomizer(pageQueryCustomizer),
          );
        }
      } catch (error) {
        handleError<ServiceRatingVoteDefinition>(error, { setValidation }, data);
      } finally {
        setIsLoading(false);
      }
    };
  const serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteOpenForm = async () => {
    const { result, data: returnedData } =
      await openServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm(data);
    if (!editMode) {
      await actions.serviceRatingVoteDefinitionRatingVoteDefinition_View_EditRefresh!(
        processQueryCustomizer(pageQueryCustomizer),
      );
    }
  };
  const serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryView =
    async (target?: ServiceRatingVoteEntryStored) => {
      await openServiceRatingVoteDefinitionUserVoteEntryRelationViewPage(target!);

      if (!editMode) {
        await actions.serviceRatingVoteDefinitionRatingVoteDefinition_View_EditRefresh!(
          processQueryCustomizer(pageQueryCustomizer),
        );
      }
    };
  const serviceRatingVoteDefinitionRatingVoteDefinition_View_EditEntriesVoteEntriesView = async (
    target?: ServiceRatingVoteEntryStored,
  ) => {
    await openServiceRatingVoteDefinitionVoteEntriesRelationViewPage(target!);

    if (!editMode) {
      await actions.serviceRatingVoteDefinitionRatingVoteDefinition_View_EditRefresh!(
        processQueryCustomizer(pageQueryCustomizer),
      );
    }
  };
  const serviceRatingVoteDefinitionRatingVoteDefinition_View_EditEntriesVoteEntriesFilter = async (
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
  const serviceRatingVoteDefinitionRatingVoteDefinition_View_EditEntriesVoteEntriesRefresh = async (
    queryCustomizer: ServiceRatingVoteEntryQueryCustomizer,
  ): Promise<ServiceRatingVoteEntryStored[]> => {
    return userServiceForUserOwnedRatingVoteDefinitionsImpl.listVoteEntries(
      { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
      queryCustomizer,
    );
  };
  const serviceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualIssueOpenPage = async (
    target?: ServiceIssueStored,
  ) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceRatingVoteDefinitionIssueRelationViewPage((target || data).__signedIdentifier));
  };
  const serviceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualIssuePreFetch =
    async (): Promise<ServiceIssueStored> => {
      return userServiceForUserOwnedRatingVoteDefinitionsImpl.getIssue(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
        {
          _mask: '{}',
        },
      );
    };

  const actions: ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditPageActions = {
    serviceRatingVoteDefinitionRatingVoteDefinition_View_EditBack,
    serviceRatingVoteDefinitionRatingVoteDefinition_View_EditRefresh,
    serviceRatingVoteDefinitionRatingVoteDefinition_View_EditCancel,
    serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUpdate,
    serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteTakeBackVote,
    serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteOpenForm,
    serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryView,
    serviceRatingVoteDefinitionRatingVoteDefinition_View_EditEntriesVoteEntriesView,
    serviceRatingVoteDefinitionRatingVoteDefinition_View_EditEntriesVoteEntriesFilter,
    serviceRatingVoteDefinitionRatingVoteDefinition_View_EditEntriesVoteEntriesRefresh,
    serviceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualIssueOpenPage,
    serviceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualIssuePreFetch,
  };

  // Effect section
  useEffect(() => {
    (async () => {
      await actions.serviceRatingVoteDefinitionRatingVoteDefinition_View_EditRefresh!(pageQueryCustomizer);
    })();
  }, []);

  return (
    <Suspense>
      <PageContainerTransition>
        <ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditPageContainer
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
