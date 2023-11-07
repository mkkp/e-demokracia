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
import { routeToServiceYesNoVoteDefinitionIssueRelationViewPage } from '~/routes';
import { useServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputForm } from '~/dialogs/Service/YesNoVoteDefinition/YesNoVoteDefinition_View_Edit/Vote/Input/Form';
import { useServiceYesNoVoteDefinitionUserVoteEntryRelationViewPage } from '~/dialogs/Service/YesNoVoteDefinition/UserVoteEntry/Relation/View/Page';
import { useServiceYesNoVoteDefinitionVoteEntriesRelationViewPage } from '~/dialogs/Service/YesNoVoteDefinition/VoteEntries/Relation/View/Page';
import type { ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageActions } from '~/containers/Service/YesNoVoteDefinition/YesNoVoteDefinition_View_Edit/ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageContainer';
import type {
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceYesNoVoteDefinition,
  ServiceYesNoVoteDefinitionQueryCustomizer,
  ServiceYesNoVoteDefinitionStored,
  ServiceYesNoVoteEntry,
  ServiceYesNoVoteEntryQueryCustomizer,
  ServiceYesNoVoteEntryStored,
  VoteStatus,
} from '~/services/data-api';
import { userServiceForUserOwnedYesNoVoteDefinitionsImpl } from '~/services/data-axios';

export const convertServiceUserUserOwnedYesNoVoteDefinitionsAccessViewPagePayload = (
  attributeName: keyof ServiceYesNoVoteDefinition,
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

const ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageContainer = lazy(
  () =>
    import(
      '~/containers/Service/YesNoVoteDefinition/YesNoVoteDefinition_View_Edit/ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageContainer'
    ),
);

// XMIID: User/(esm/_zCZh0FoTEe6_67aMO2jOsw)/AccessViewPageDefinition
// Name: service::User::userOwnedYesNoVoteDefinitions::Access::View::Page
export default function ServiceUserUserOwnedYesNoVoteDefinitionsAccessViewPage() {
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
  const [data, setData] = useState<ServiceYesNoVoteDefinitionStored>({
    __signedIdentifier: signedIdentifier,
  } as ServiceYesNoVoteDefinitionStored);
  const [validation, setValidation] = useState<Map<keyof ServiceYesNoVoteDefinition, string>>(
    new Map<keyof ServiceYesNoVoteDefinition, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceYesNoVoteDefinitionStored, any>>(
    {} as unknown as Record<keyof ServiceYesNoVoteDefinitionStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceYesNoVoteDefinition, value: any) => void = useCallback(
    (attributeName: keyof ServiceYesNoVoteDefinition, value: any) => {
      payloadDiff.current![attributeName] = convertServiceUserUserOwnedYesNoVoteDefinitionsAccessViewPagePayload(
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

  const pageQueryCustomizer: ServiceYesNoVoteDefinitionQueryCustomizer = {
    _mask:
      '{userHasVoteEntry,created,description,userHasNoVoteEntry,title,closeAt,status,userVoteEntry{value,created}}',
  };

  // Dialog hooks
  const openServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputForm =
    useServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputForm();
  const openServiceYesNoVoteDefinitionUserVoteEntryRelationViewPage =
    useServiceYesNoVoteDefinitionUserVoteEntryRelationViewPage();
  const openServiceYesNoVoteDefinitionVoteEntriesRelationViewPage =
    useServiceYesNoVoteDefinitionVoteEntriesRelationViewPage();

  // Calculated section
  const title: string = t('Service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit', {
    defaultValue: 'YesNoVoteDefinition View / Edit',
  });

  // Action section
  const serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditBack = async () => {
    back();
  };
  const serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditRefresh = async (
    queryCustomizer: ServiceYesNoVoteDefinitionQueryCustomizer,
  ): Promise<ServiceYesNoVoteDefinitionStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await userServiceForUserOwnedYesNoVoteDefinitionsImpl.refresh(
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
      } as Record<keyof ServiceYesNoVoteDefinitionStored, any>;

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditCancel = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditRefresh(processQueryCustomizer(pageQueryCustomizer));
  };
  const serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUpdate = async () => {
    setIsLoading(true);

    try {
      const res = await userServiceForUserOwnedYesNoVoteDefinitionsImpl.update(payloadDiff.current);

      if (res) {
        enqueueSnackbar(t('judo.action.save.success', { defaultValue: 'Changes saved' }), {
          variant: 'success',
          ...toastConfig.success,
        });
        setValidation(new Map<keyof ServiceYesNoVoteDefinition, string>());
        await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditRefresh!(pageQueryCustomizer);
        setEditMode(false);
      }
    } catch (error) {
      handleError<ServiceYesNoVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteOpenForm = async () => {
    const { result, data: returnedData } =
      await openServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputForm(data);
    if (!editMode) {
      await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditRefresh!(
        processQueryCustomizer(pageQueryCustomizer),
      );
    }
  };
  const serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteTakeBackVote =
    async () => {
      try {
        setIsLoading(true);
        await userServiceForUserOwnedYesNoVoteDefinitionsImpl.takeBackVote(data);

        enqueueSnackbar(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
          {
            variant: 'success',
            ...toastConfig.success,
          },
        );

        if (!editMode) {
          await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditRefresh!(
            processQueryCustomizer(pageQueryCustomizer),
          );
        }
      } catch (error) {
        handleError<ServiceYesNoVoteDefinition>(error, { setValidation }, data);
      } finally {
        setIsLoading(false);
      }
    };
  const serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditEntriesVoteEntriesView = async (
    target?: ServiceYesNoVoteEntryStored,
  ) => {
    await openServiceYesNoVoteDefinitionVoteEntriesRelationViewPage(target!);

    if (!editMode) {
      await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditRefresh!(
        processQueryCustomizer(pageQueryCustomizer),
      );
    }
  };
  const serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditEntriesVoteEntriesFilter = async (
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
  const serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditEntriesVoteEntriesRefresh = async (
    queryCustomizer: ServiceYesNoVoteEntryQueryCustomizer,
  ): Promise<ServiceYesNoVoteEntryStored[]> => {
    return userServiceForUserOwnedYesNoVoteDefinitionsImpl.listVoteEntries(
      { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
      queryCustomizer,
    );
  };
  const serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryView =
    async (target?: ServiceYesNoVoteEntryStored) => {
      await openServiceYesNoVoteDefinitionUserVoteEntryRelationViewPage(target!);

      if (!editMode) {
        await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditRefresh!(
          processQueryCustomizer(pageQueryCustomizer),
        );
      }
    };
  const serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntryBaseVirtualIssueOpenPage = async (
    target?: ServiceIssueStored,
  ) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceYesNoVoteDefinitionIssueRelationViewPage((target || data).__signedIdentifier));
  };
  const serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntryBaseVirtualIssuePreFetch =
    async (): Promise<ServiceIssueStored> => {
      return userServiceForUserOwnedYesNoVoteDefinitionsImpl.getIssue(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
        {
          _mask: '{}',
        },
      );
    };

  const actions: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageActions = {
    serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditBack,
    serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditRefresh,
    serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditCancel,
    serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUpdate,
    serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteOpenForm,
    serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteTakeBackVote,
    serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditEntriesVoteEntriesView,
    serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditEntriesVoteEntriesFilter,
    serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditEntriesVoteEntriesRefresh,
    serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryView,
    serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntryBaseVirtualIssueOpenPage,
    serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntryBaseVirtualIssuePreFetch,
  };

  // Effect section
  useEffect(() => {
    (async () => {
      await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditRefresh!(pageQueryCustomizer);
    })();
  }, []);

  return (
    <Suspense>
      <PageContainerTransition>
        <ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditPageContainer
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
