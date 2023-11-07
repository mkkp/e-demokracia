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
import { useServiceUserIssuesUserIssues_View_EditCreateIssueInputForm } from '~/dialogs/Service/UserIssues/UserIssues_View_Edit/CreateIssue/Input/Form';
import type { ServiceUserIssuesUserIssues_View_EditPageActions } from '~/containers/Service/UserIssues/UserIssues_View_Edit/ServiceUserIssuesUserIssues_View_EditPageContainer';
import type {
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceUserIssues,
  ServiceUserIssuesQueryCustomizer,
  ServiceUserIssuesStored,
} from '~/services/data-api';
import { userServiceForUserIssuesImpl } from '~/services/data-axios';

export const convertServiceUserUserIssuesAccessViewPagePayload = (
  attributeName: keyof ServiceUserIssues,
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

const ServiceUserIssuesUserIssues_View_EditPageContainer = lazy(
  () =>
    import('~/containers/Service/UserIssues/UserIssues_View_Edit/ServiceUserIssuesUserIssues_View_EditPageContainer'),
);

// XMIID: User/(esm/_UUu7kFrMEe6_67aMO2jOsw)/AccessViewPageDefinition
// Name: service::User::userIssues::Access::View::Page
export default function ServiceUserUserIssuesAccessViewPage() {
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
  const [data, setData] = useState<ServiceUserIssuesStored>({
    __signedIdentifier: signedIdentifier,
  } as ServiceUserIssuesStored);
  const [validation, setValidation] = useState<Map<keyof ServiceUserIssues, string>>(
    new Map<keyof ServiceUserIssues, string>(),
  );

  // Ref section
  const singletonHost = useRef<{ __signedIdentifier: string }>({} as unknown as { __signedIdentifier: string });
  const payloadDiff = useRef<Record<keyof ServiceUserIssuesStored, any>>(
    {} as unknown as Record<keyof ServiceUserIssuesStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceUserIssues, value: any) => void = useCallback(
    (attributeName: keyof ServiceUserIssues, value: any) => {
      payloadDiff.current![attributeName] = convertServiceUserUserIssuesAccessViewPagePayload(attributeName, value);
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

  const pageQueryCustomizer: ServiceUserIssuesQueryCustomizer = {
    _mask: '{}',
  };

  // Dialog hooks
  const openServiceUserIssuesUserIssues_View_EditCreateIssueInputForm =
    useServiceUserIssuesUserIssues_View_EditCreateIssueInputForm();

  // Calculated section
  const title: string = t('Service.UserIssues.UserIssues_View_Edit', { defaultValue: 'UserIssues View / Edit' });

  // Action section
  const serviceUserIssuesUserIssues_View_EditBack = async () => {
    back();
  };
  const serviceUserIssuesUserIssues_View_EditRefresh = async (
    queryCustomizer: ServiceUserIssuesQueryCustomizer,
  ): Promise<ServiceUserIssuesStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await userServiceForUserIssuesImpl.refresh(
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
      } as Record<keyof ServiceUserIssuesStored, any>;

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const serviceUserIssuesUserIssues_View_EditRootActionGroupCreateIssueOpenForm = async () => {
    const { result, data: returnedData } = await openServiceUserIssuesUserIssues_View_EditCreateIssueInputForm(data);
    if (!editMode) {
      await actions.serviceUserIssuesUserIssues_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const getSingletonPayload = async (): Promise<JudoIdentifiable<any>> => {
    return await userServiceForUserIssuesImpl.refreshForUserIssues({
      _mask: '{}',
    });
  };

  const actions: ServiceUserIssuesUserIssues_View_EditPageActions = {
    serviceUserIssuesUserIssues_View_EditBack,
    serviceUserIssuesUserIssues_View_EditRefresh,
    serviceUserIssuesUserIssues_View_EditRootActionGroupCreateIssueOpenForm,
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
      await actions.serviceUserIssuesUserIssues_View_EditRefresh!(pageQueryCustomizer);
    })();
  }, []);

  return (
    <Suspense>
      <PageContainerTransition>
        <ServiceUserIssuesUserIssues_View_EditPageContainer
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
