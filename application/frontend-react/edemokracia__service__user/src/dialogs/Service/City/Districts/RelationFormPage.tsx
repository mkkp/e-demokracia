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
import type { ServiceDistrictDistrict_FormDialogActions } from '~/containers/Service/District/District_Form/ServiceDistrictDistrict_FormDialogContainer';
import type {
  ServiceCity,
  ServiceCityStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
} from '~/services/data-api';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceCityServiceForDistrictsImpl } from '~/services/data-axios/ServiceCityServiceForDistrictsImpl';

export type ServiceDistrictDistrict_FormDialogActionsExtended = ServiceDistrictDistrict_FormDialogActions & {};

export const SERVICE_CITY_DISTRICTS_RELATION_FORM_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceDistrictDistrict_FormActionsHook';
export type ServiceDistrictDistrict_FormActionsHook = (
  ownerData: any,
  data: ServiceDistrictStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceDistrict, value: any) => void,
) => ServiceDistrictDistrict_FormDialogActionsExtended;

export const useServiceCityDistrictsRelationFormPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceDistrictStored>>) => {
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
          <ServiceCityDistrictsRelationFormPage
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

export const convertServiceCityDistrictsRelationFormPagePayload = (
  attributeName: keyof ServiceDistrict,
  value: any,
): any => {
  return value;
};

const ServiceDistrictDistrict_FormDialogContainer = lazy(
  () => import('~/containers/Service/District/District_Form/ServiceDistrictDistrict_FormDialogContainer'),
);

export interface ServiceCityDistrictsRelationFormPageProps {
  ownerData: any;

  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceDistrictStored) => Promise<void>;
}

// XMIID: User/(esm/_a0XksX2iEe2LTNnGda5kaw)/RelationFeatureForm
// Name: service::City::districts::RelationFormPage
export default function ServiceCityDistrictsRelationFormPage(props: ServiceCityDistrictsRelationFormPageProps) {
  const { ownerData, onClose, onSubmit } = props;

  // Services
  const serviceCityServiceForDistrictsImpl = useMemo(
    () => new ServiceCityServiceForDistrictsImpl(judoAxiosProvider),
    [],
  );

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
      payloadDiff.current![attributeName] = convertServiceCityDistrictsRelationFormPagePayload(attributeName, value);
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
  const { service: customActionsHook } = useTrackService<ServiceDistrictDistrict_FormActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_CITY_DISTRICTS_RELATION_FORM_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceDistrictDistrict_FormDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
  );

  // Dialog hooks

  // Calculated section
  const title: string = t('service.District.District_Form', { defaultValue: 'District Form' });

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
      const res = await serviceCityServiceForDistrictsImpl.create(ownerData, data);
      showSuccessSnack(t('judo.action.create.success', { defaultValue: 'Create successful' }));
      onSubmit(res);
    } catch (error) {
      handleError<ServiceDistrict>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const getTemplateAction = async (): Promise<ServiceDistrict> => {
    try {
      setIsLoading(true);
      const result = await serviceCityServiceForDistrictsImpl.getTemplate();
      setData(result as ServiceDistrictStored);
      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: ServiceDistrictDistrict_FormDialogActions = {
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
      id="User/(esm/_a0XksX2iEe2LTNnGda5kaw)/RelationFeatureForm"
      data-page-name="service::City::districts::RelationFormPage"
    >
      <Suspense>
        <ServiceDistrictDistrict_FormDialogContainer
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
