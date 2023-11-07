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
import type { ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageActions } from '~/containers/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageContainer';
import type {
  ServiceUserVoteDefinition,
  ServiceUserVoteDefinitionQueryCustomizer,
  ServiceUserVoteDefinitionStored,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
} from '~/services/data-api';
import { userServiceForUserVoteDefinitionsImpl } from '~/services/data-axios';

export const convertServiceUserUserVoteDefinitionsAccessViewPagePayload = (
  attributeName: keyof ServiceUserVoteDefinition,
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

const ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageContainer = lazy(
  () =>
    import(
      '~/containers/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageContainer'
    ),
);

// XMIID: User/(esm/_mNnPsF5QEe6vsex_cZNQbQ)/AccessViewPageDefinition
// Name: service::User::userVoteDefinitions::Access::View::Page
export default function ServiceUserUserVoteDefinitionsAccessViewPage() {
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
  const [data, setData] = useState<ServiceUserVoteDefinitionStored>({
    __signedIdentifier: signedIdentifier,
  } as ServiceUserVoteDefinitionStored);
  const [validation, setValidation] = useState<Map<keyof ServiceUserVoteDefinition, string>>(
    new Map<keyof ServiceUserVoteDefinition, string>(),
  );

  // Ref section
  const singletonHost = useRef<{ __signedIdentifier: string }>({} as unknown as { __signedIdentifier: string });
  const payloadDiff = useRef<Record<keyof ServiceUserVoteDefinitionStored, any>>(
    {} as unknown as Record<keyof ServiceUserVoteDefinitionStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceUserVoteDefinition, value: any) => void = useCallback(
    (attributeName: keyof ServiceUserVoteDefinition, value: any) => {
      payloadDiff.current![attributeName] = convertServiceUserUserVoteDefinitionsAccessViewPagePayload(
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

  const pageQueryCustomizer: ServiceUserVoteDefinitionQueryCustomizer = {
    _mask: '{}',
  };

  // Dialog hooks

  // Calculated section
  const title: string = t('Service.UserVoteDefinition.UserVoteDefinition_View_Edit', {
    defaultValue: 'UserVoteDefinition View / Edit',
  });

  // Action section
  const serviceUserVoteDefinitionUserVoteDefinition_View_EditBack = async () => {
    back();
  };
  const serviceUserVoteDefinitionUserVoteDefinition_View_EditRefresh = async (
    queryCustomizer: ServiceUserVoteDefinitionQueryCustomizer,
  ): Promise<ServiceUserVoteDefinitionStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await userServiceForUserVoteDefinitionsImpl.refresh(
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
      } as Record<keyof ServiceUserVoteDefinitionStored, any>;

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const getSingletonPayload = async (): Promise<JudoIdentifiable<any>> => {
    return await userServiceForUserVoteDefinitionsImpl.refreshForUserVoteDefinitions({
      _mask: '{}',
    });
  };

  const actions: ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageActions = {
    serviceUserVoteDefinitionUserVoteDefinition_View_EditBack,
    serviceUserVoteDefinitionUserVoteDefinition_View_EditRefresh,
  };

  // Effect section
  useEffect(() => {
    (async () => {
      const res = await getSingletonPayload();
      if (res?.__signedIdentifier) {
        singletonHost.current = res;
      } else {
        navigate('*');
        return;
      }
      await actions.serviceUserVoteDefinitionUserVoteDefinition_View_EditRefresh!(pageQueryCustomizer);
    })();
  }, []);

  return (
    <Suspense>
      <PageContainerTransition>
        <ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageContainer
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
