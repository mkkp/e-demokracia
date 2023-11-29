//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, useMemo, lazy, Suspense } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import { useSnacks, useCRUDDialog } from '~/hooks';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';
import type { ServiceCityCity_FormDialogActions } from '~/containers/Service/City/City_Form/ServiceCityCity_FormDialogContainer';
import type {
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceCounty,
  ServiceCountyStored,
} from '~/services/data-api';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceCountyServiceForCitiesImpl } from '~/services/data-axios/ServiceCountyServiceForCitiesImpl';

export type ServiceCityCity_FormDialogActionsExtended = ServiceCityCity_FormDialogActions & {};

export const SERVICE_COUNTY_CITIES_RELATION_FORM_PAGE_ACTIONS_HOOK_INTERFACE_KEY = 'ServiceCityCity_FormActionsHook';
export type ServiceCityCity_FormActionsHook = (
  ownerData: any,
  data: ServiceCityStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceCity, value: any) => void,
) => ServiceCityCity_FormDialogActionsExtended;

export const useServiceCountyCitiesRelationFormPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceCityStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any) =>
    new Promise((resolve) => {
      createDialog({
        fullWidth: true,
        maxWidth: 'xs',
        onClose: async (event: object, reason: string) => {
          if (reason !== 'backdropClick') {
            await closeDialog();
            resolve({
              result: 'close',
            });
          }
        },
        children: (
          <ServiceCountyCitiesRelationFormPage
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

export const convertServiceCountyCitiesRelationFormPagePayload = (
  attributeName: keyof ServiceCity,
  value: any,
): any => {
  return value;
};

const ServiceCityCity_FormDialogContainer = lazy(
  () => import('~/containers/Service/City/City_Form/ServiceCityCity_FormDialogContainer'),
);

export interface ServiceCountyCitiesRelationFormPageProps {
  ownerData: any;

  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceCityStored) => Promise<void>;
}

// XMIID: User/(esm/_23Z_YH2nEe27Ga2Ojs4Fgg)/RelationFeatureForm
// Name: service::County::cities::RelationFormPage
export default function ServiceCountyCitiesRelationFormPage(props: ServiceCountyCitiesRelationFormPageProps) {
  const { ownerData, onClose, onSubmit } = props;

  // Services
  const serviceCountyServiceForCitiesImpl = useMemo(() => new ServiceCountyServiceForCitiesImpl(judoAxiosProvider), []);

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
  const [editMode, setEditMode] = useState<boolean>(true);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<ServiceCityStored>({} as ServiceCityStored);
  const [validation, setValidation] = useState<Map<keyof ServiceCity, string>>(new Map<keyof ServiceCity, string>());

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceCityStored, any>>(
    {} as unknown as Record<keyof ServiceCityStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceCity, value: any) => void = useCallback(
    (attributeName: keyof ServiceCity, value: any) => {
      payloadDiff.current![attributeName] = convertServiceCountyCitiesRelationFormPagePayload(attributeName, value);
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
    return true;
  }, [data]);
  const isFormDeleteable = useCallback(() => {
    return false;
  }, [data]);

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceCityCity_FormActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_COUNTY_CITIES_RELATION_FORM_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceCityCity_FormDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
  );

  // Dialog hooks

  // Calculated section
  const title: string = t('service.City.City_Form', { defaultValue: 'City Form' });

  // Private actions
  const submit = async () => {
    await createAction();
  };

  // Action section
  const backAction = async () => {
    onClose();
  };
  const createAction = async () => {
    try {
      setIsLoading(true);
      const res = await serviceCountyServiceForCitiesImpl.create(ownerData, data);
      showSuccessSnack(t('judo.action.create.success', { defaultValue: 'Create successful' }));
      onSubmit(res);
    } catch (error) {
      handleError<ServiceCity>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const getTemplateAction = async (): Promise<ServiceCity> => {
    try {
      setIsLoading(true);
      const result = await serviceCountyServiceForCitiesImpl.getTemplate();
      setData(result as ServiceCityStored);
      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: ServiceCityCity_FormDialogActions = {
    backAction,
    createAction,
    getTemplateAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    actions.getTemplateAction!();
  }, []);

  return (
    <div
      id="User/(esm/_23Z_YH2nEe27Ga2Ojs4Fgg)/RelationFeatureForm"
      data-page-name="service::County::cities::RelationFormPage"
    >
      <Suspense>
        <ServiceCityCity_FormDialogContainer
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
