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
import { routeToServiceVoteDefinitionIssueRelationViewPage } from '~/routes';
import type { ServiceVoteDefinitionVoteDefinition_View_EditPageActions } from '~/containers/Service/VoteDefinition/VoteDefinition_View_Edit/ServiceVoteDefinitionVoteDefinition_View_EditPageContainer';
import type {
  IssueScope,
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceUserVoteDefinition,
  ServiceUserVoteDefinitionStored,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
  VoteStatus,
  VoteType,
} from '~/services/data-api';
import { serviceUserVoteDefinitionServiceForOwnedVoteDefinitionsImpl } from '~/services/data-axios';

export const convertServiceUserVoteDefinitionOwnedVoteDefinitionsRelationViewPagePayload = (
  attributeName: keyof ServiceVoteDefinition,
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

const ServiceVoteDefinitionVoteDefinition_View_EditPageContainer = lazy(
  () =>
    import(
      '~/containers/Service/VoteDefinition/VoteDefinition_View_Edit/ServiceVoteDefinitionVoteDefinition_View_EditPageContainer'
    ),
);

// XMIID: User/(esm/_7OZ8MF5AEe6vsex_cZNQbQ)/RelationFeatureView
// Name: service::UserVoteDefinition::ownedVoteDefinitions::Relation::View::Page
export default function ServiceUserVoteDefinitionOwnedVoteDefinitionsRelationViewPage() {
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
  const [data, setData] = useState<ServiceVoteDefinitionStored>({
    __signedIdentifier: signedIdentifier,
  } as ServiceVoteDefinitionStored);
  const [validation, setValidation] = useState<Map<keyof ServiceVoteDefinition, string>>(
    new Map<keyof ServiceVoteDefinition, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceVoteDefinitionStored, any>>(
    {} as unknown as Record<keyof ServiceVoteDefinitionStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceVoteDefinition, value: any) => void = useCallback(
    (attributeName: keyof ServiceVoteDefinition, value: any) => {
      payloadDiff.current![attributeName] = convertServiceUserVoteDefinitionOwnedVoteDefinitionsRelationViewPagePayload(
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

  const pageQueryCustomizer: ServiceVoteDefinitionQueryCustomizer = {
    _mask:
      '{created,isSelectAnswerType,isNotRatingType,description,isNotYesNoType,title,closeAt,isRatingType,isYesNoType,isYesNoAbstainType,isNotSelectAnswerType,isNotYesNoAbstainType,status}',
  };

  // Dialog hooks

  // Calculated section
  const title: string = t('Service.VoteDefinition.VoteDefinition_View_Edit', {
    defaultValue: 'VoteDefinition View / Edit',
  });

  // Action section
  const serviceVoteDefinitionVoteDefinition_View_EditBack = async () => {
    back();
  };
  const serviceVoteDefinitionVoteDefinition_View_EditRefresh = async (
    queryCustomizer: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<ServiceVoteDefinitionStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceUserVoteDefinitionServiceForOwnedVoteDefinitionsImpl.refresh(
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
      } as Record<keyof ServiceVoteDefinitionStored, any>;

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const serviceVoteDefinitionVoteDefinition_View_EditCancel = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await serviceVoteDefinitionVoteDefinition_View_EditRefresh(processQueryCustomizer(pageQueryCustomizer));
  };
  const serviceVoteDefinitionVoteDefinition_View_EditUpdate = async () => {
    setIsLoading(true);

    try {
      const res = await serviceUserVoteDefinitionServiceForOwnedVoteDefinitionsImpl.update(payloadDiff.current);

      if (res) {
        enqueueSnackbar(t('judo.action.save.success', { defaultValue: 'Changes saved' }), {
          variant: 'success',
          ...toastConfig.success,
        });
        setValidation(new Map<keyof ServiceVoteDefinition, string>());
        await actions.serviceVoteDefinitionVoteDefinition_View_EditRefresh!(pageQueryCustomizer);
        setEditMode(false);
      }
    } catch (error) {
      handleError<ServiceVoteDefinition>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const serviceVoteDefinitionVoteDefinition_View_EditGroupIssueOpenPage = async (target?: ServiceIssueStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceVoteDefinitionIssueRelationViewPage((target || data).__signedIdentifier));
  };
  const serviceVoteDefinitionVoteDefinition_View_EditGroupIssuePreFetch = async (): Promise<ServiceIssueStored> => {
    return serviceUserVoteDefinitionServiceForOwnedVoteDefinitionsImpl.getIssue(
      { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
      {
        _mask: '{}',
      },
    );
  };

  const actions: ServiceVoteDefinitionVoteDefinition_View_EditPageActions = {
    serviceVoteDefinitionVoteDefinition_View_EditBack,
    serviceVoteDefinitionVoteDefinition_View_EditRefresh,
    serviceVoteDefinitionVoteDefinition_View_EditCancel,
    serviceVoteDefinitionVoteDefinition_View_EditUpdate,
    serviceVoteDefinitionVoteDefinition_View_EditGroupIssueOpenPage,
    serviceVoteDefinitionVoteDefinition_View_EditGroupIssuePreFetch,
  };

  // Effect section
  useEffect(() => {
    (async () => {
      await actions.serviceVoteDefinitionVoteDefinition_View_EditRefresh!(pageQueryCustomizer);
    })();
  }, []);

  return (
    <Suspense>
      <PageContainerTransition>
        <ServiceVoteDefinitionVoteDefinition_View_EditPageContainer
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
