//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { Suspense, createContext, lazy, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import type {
  ServiceDistrictDistrict_View_EditDialogActions,
  ServiceDistrictDistrict_View_EditDialogProps,
} from '~/containers/Service/District/District_View_Edit/ServiceDistrictDistrict_View_EditDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceIssue,
  ServiceIssueStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceIssueServiceForDistrictImpl } from '~/services/data-axios/ServiceIssueServiceForDistrictImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceDistrictDistrict_View_EditDialogActionsExtended = ServiceDistrictDistrict_View_EditDialogActions & {
  postRefreshAction?: (
    data: ServiceDistrictStored,
    storeDiff: (attributeName: keyof ServiceDistrict, value: any) => void,
    setValidation: Dispatch<SetStateAction<Map<keyof ServiceDistrict, string>>>,
  ) => Promise<void>;
};

export const SERVICE_ISSUE_DISTRICT_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_ISSUE_DISTRICT_RELATION_VIEW_PAGE_ACTIONS_HOOK';
export type ServiceDistrictDistrict_View_EditActionsHook = (
  ownerData: any,
  data: ServiceDistrictStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceDistrict, value: any) => void,
  refresh: () => Promise<void>,
  submit: () => Promise<void>,
) => ServiceDistrictDistrict_View_EditDialogActionsExtended;

export interface ServiceDistrictDistrict_View_EditViewModel extends ServiceDistrictDistrict_View_EditDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<ServiceDistrict>;
  isDraft?: boolean;
}

const ServiceDistrictDistrict_View_EditViewModelContext = createContext<ServiceDistrictDistrict_View_EditViewModel>(
  {} as any,
);
export const useServiceDistrictDistrict_View_EditViewModel = () => {
  const context = useContext(ServiceDistrictDistrict_View_EditViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceDistrictDistrict_View_EditViewModel must be used within a(n) ServiceDistrictDistrict_View_EditViewModelProvider',
    );
  }
  return context;
};

export const useServiceIssueDistrictRelationViewPage = (): ((
  ownerData: any,
  templateDataOverride?: Partial<ServiceDistrict>,
  isDraft?: boolean,
  ownerValidation?: (data: ServiceDistrict) => Promise<void>,
) => Promise<DialogResult<ServiceDistrictStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (
    ownerData: any,
    templateDataOverride?: Partial<ServiceDistrict>,
    isDraft?: boolean,
    ownerValidation?: (data: ServiceDistrict) => Promise<void>,
  ) =>
    new Promise((resolve) => {
      createDialog({
        fullWidth: true,
        maxWidth: 'md',
        onClose: async (event: object, reason: string) => {
          if (reason !== 'backdropClick') {
            await closeDialog();
            resolve({
              result: 'close',
            });
          }
        },
        children: (
          <ServiceIssueDistrictRelationViewPage
            ownerData={ownerData}
            templateDataOverride={templateDataOverride}
            isDraft={isDraft}
            ownerValidation={ownerValidation}
            onClose={async () => {
              await closeDialog();
              resolve({
                result: 'close',
              });
            }}
            onSubmit={async (result, isDraft) => {
              await closeDialog();
              resolve({
                result: isDraft ? 'submit-draft' : 'submit',
                data: result,
              });
            }}
          />
        ),
      });
    });
};

export const convertServiceIssueDistrictRelationViewPagePayload = (
  attributeName: keyof ServiceDistrict,
  value: any,
): any => {
  return value;
};

const ServiceDistrictDistrict_View_EditDialogContainer = lazy(
  () => import('~/containers/Service/District/District_View_Edit/ServiceDistrictDistrict_View_EditDialogContainer'),
);

export interface ServiceIssueDistrictRelationViewPageProps {
  ownerData: any;

  templateDataOverride?: Partial<ServiceDistrict>;
  isDraft?: boolean;
  ownerValidation?: (data: ServiceDistrict) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceDistrictStored, isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_ZTn0QNvUEe2Bgcx6em3jZg)/RelationFeatureView
// Name: service::Issue::district::RelationViewPage
export default function ServiceIssueDistrictRelationViewPage(props: ServiceIssueDistrictRelationViewPageProps) {
  const { ownerData, templateDataOverride, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceIssueServiceForDistrictImpl = useMemo(
    () => new ServiceIssueServiceForDistrictImpl(judoAxiosProvider),
    [],
  );

  // Hooks section
  const { t } = useTranslation();
  const { showSuccessSnack, showErrorSnack } = useSnacks();
  const { navigate, back: navigateBack } = useJudoNavigation();
  const { openFilterDialog } = useFilterDialog();
  const { openConfirmDialog } = useConfirmDialog();
  const { setLatestViewData } = useViewData();
  const handleError = useErrorHandler();
  const openCRUDDialog = useCRUDDialog();
  const [createDialog, closeDialog] = useDialog();

  // State section
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<ServiceDistrictStored>({} as ServiceDistrictStored);
  const [validation, setValidation] = useState<Map<keyof ServiceDistrict, string>>(
    new Map<keyof ServiceDistrict, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceDistrictStored, any>>(
    {} as unknown as Record<keyof ServiceDistrictStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceDistrict, value: any) => void = useCallback(
    (attributeName: keyof ServiceDistrict, value: any) => {
      payloadDiff.current![attributeName] = convertServiceIssueDistrictRelationViewPagePayload(attributeName, value);
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

  const getPageQueryCustomizer: () => ServiceDistrictQueryCustomizer = () => ({
    _mask: actions.getMask ? actions.getMask!() : '{name,representation}',
  });

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    if (actions.refreshAction) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };

  // Validation
  const validate: (data: ServiceDistrict) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceDistrictDistrict_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_DISTRICT_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceDistrictDistrict_View_EditDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
    refresh,
    submit,
  );

  // Dialog hooks

  // Action section
  const getPageTitle = (data: ServiceDistrict): string => {
    return data.representation as string;
  };
  const backAction = async () => {
    onClose();
  };
  const refreshAction = async (
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceDistrictStored>> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const response = await serviceIssueServiceForDistrictImpl.refresh(ownerData, getPageQueryCustomizer());
      const { data: result } = response;
      setData(result);
      setLatestViewData(result);
      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceDistrictStored, any>;
      if (customActions?.postRefreshAction) {
        await customActions?.postRefreshAction(result, storeDiff, setValidation);
      }
      return response;
    } catch (error) {
      handleError(error);
      setLatestViewData(null);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };

  const actions: ServiceDistrictDistrict_View_EditDialogActions = {
    getPageTitle,
    backAction,
    refreshAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceDistrictDistrict_View_EditViewModel = {
    onClose,
    actions,
    ownerData,
    isLoading,
    setIsLoading,
    editMode,
    setEditMode,
    refresh,
    refreshCounter,
    submit,
    data,
    validation,
    setValidation,
    storeDiff,
    isFormUpdateable,
    isFormDeleteable,
    templateDataOverride,
    isDraft,
  };

  // Effect section
  useEffect(() => {
    actions.refreshAction!(getPageQueryCustomizer());
  }, []);

  return (
    <ServiceDistrictDistrict_View_EditViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_ZTn0QNvUEe2Bgcx6em3jZg)/RelationFeatureView"
          data-page-name="service::Issue::district::RelationViewPage"
        />
        <ServiceDistrictDistrict_View_EditDialogContainer
          ownerData={ownerData}
          onClose={onClose}
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
          submit={submit}
          isDraft={isDraft}
        />
      </Suspense>
    </ServiceDistrictDistrict_View_EditViewModelContext.Provider>
  );
}
