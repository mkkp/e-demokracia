//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { Suspense, lazy, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import type { ServiceDistrictDistrict_View_EditDialogActions } from '~/containers/Service/District/District_View_Edit/ServiceDistrictDistrict_View_EditDialogContainer';
import { useCRUDDialog, useSnacks } from '~/hooks';
import type {
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceIssue,
  ServiceIssueStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceDistrictServiceImpl } from '~/services/data-axios/ServiceDistrictServiceImpl';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceDistrictDistrict_View_EditDialogActionsExtended = ServiceDistrictDistrict_View_EditDialogActions & {
  postRefreshAction?: (
    data: ServiceDistrictStored,
    storeDiff: (attributeName: keyof ServiceDistrict, value: any) => void,
    setValidation: Dispatch<SetStateAction<Map<keyof ServiceDistrict, string>>>,
  ) => Promise<void>;
};

export const SERVICE_ISSUE_DISTRICT_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceDistrictDistrict_View_EditActionsHook';
export type ServiceDistrictDistrict_View_EditActionsHook = (
  ownerData: any,
  data: ServiceDistrictStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceDistrict, value: any) => void,
) => ServiceDistrictDistrict_View_EditDialogActionsExtended;

export const useServiceIssueDistrictRelationViewPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceDistrictStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any) =>
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
            onClose={async () => {
              await closeDialog();
              resolve({
                result: 'close',
              });
            }}
            onSubmit={async (result) => {
              await closeDialog();
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

  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceDistrictStored) => Promise<void>;
}

// XMIID: User/(esm/_ZTn0QNvUEe2Bgcx6em3jZg)/RelationFeatureView
// Name: service::Issue::district::RelationViewPage
export default function ServiceIssueDistrictRelationViewPage(props: ServiceIssueDistrictRelationViewPageProps) {
  const { ownerData, onClose, onSubmit } = props;

  // Services
  const serviceDistrictServiceImpl = useMemo(() => new ServiceDistrictServiceImpl(judoAxiosProvider), []);

  // Hooks section
  const { t } = useTranslation();
  const { showSuccessSnack, showErrorSnack } = useSnacks();
  const { navigate, back: navigateBack } = useJudoNavigation();
  const { openFilterDialog } = useFilterDialog();
  const { openConfirmDialog } = useConfirmDialog();
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

  const pageQueryCustomizer: ServiceDistrictQueryCustomizer = {
    _mask: '{name,representation}',
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceDistrictDistrict_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_DISTRICT_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceDistrictDistrict_View_EditDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
  );

  // Dialog hooks

  // Calculated section
  const title: string = data.representation as string;

  // Private actions
  const submit = async () => {};

  // Action section
  const backAction = async () => {
    onClose();
  };
  const refreshAction = async (queryCustomizer: ServiceDistrictQueryCustomizer): Promise<ServiceDistrictStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceDistrictServiceImpl.refresh(ownerData, pageQueryCustomizer);
      setData(result);
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
      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };

  const actions: ServiceDistrictDistrict_View_EditDialogActions = {
    backAction,
    refreshAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    actions.refreshAction!(pageQueryCustomizer);
  }, []);

  return (
    <div
      id="User/(esm/_ZTn0QNvUEe2Bgcx6em3jZg)/RelationFeatureView"
      data-page-name="service::Issue::district::RelationViewPage"
    >
      <Suspense>
        <ServiceDistrictDistrict_View_EditDialogContainer
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
          submit={submit}
        />
      </Suspense>
    </div>
  );
}
