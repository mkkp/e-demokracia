//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'/index.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

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
import type { ServiceCityCity_FormDialogActions } from '~/containers/Service/City/City_Form/ServiceCityCity_FormDialogContainer';
import type {
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceCounty,
  ServiceCountyStored,
} from '~/services/data-api';
import { serviceCountyServiceForCitiesImpl } from '~/services/data-axios';

export const useServiceCountyCitiesRelationFormPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceCityStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any) =>
    new Promise((resolve) => {
      createDialog({
        fullWidth: true,
        maxWidth: 'xs',
        onClose: (event: object, reason: string) => {
          if (reason !== 'backdropClick') {
            closeDialog();
            resolve({
              result: 'close',
            });
          }
        },
        children: (
          <ServiceCountyCitiesRelationFormPage
            ownerData={ownerData}
            onClose={() => {
              closeDialog();
              resolve({
                result: 'close',
              });
            }}
            onSubmit={(result) => {
              closeDialog();
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

const ServiceCityCity_FormDialogContainer = lazy(
  () => import('~/containers/Service/City/City_Form/ServiceCityCity_FormDialogContainer'),
);

export interface ServiceCountyCitiesRelationFormPageProps {
  ownerData: any;

  onClose: () => void;
  onSubmit: (result?: ServiceCityStored) => void;
}

// Name: service::County::cities::Relation::Form::Page
export default function ServiceCountyCitiesRelationFormPage(props: ServiceCountyCitiesRelationFormPageProps) {
  const { ownerData, onClose, onSubmit } = props;

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

  // Dialog hooks

  // Calculated section
  const title: string = t('Service.City.City_Form', { defaultValue: 'City Form' });

  // Action section
  const serviceCityCity_FormBack = async () => {
    onClose();
  };
  const serviceCityCity_FormCreate = async () => {
    try {
      setIsLoading(true);
      const res = await serviceCountyServiceForCitiesImpl.create(ownerData, data);

      enqueueSnackbar(t('judo.action.create.success', { defaultValue: 'Create successful' }), {
        variant: 'success',
        ...toastConfig.success,
      });

      onSubmit(res);
    } catch (error) {
      handleError<ServiceCity>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const serviceCityCity_FormGetTemplate = async (): Promise<ServiceCity> => {
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
    serviceCityCity_FormBack,
    serviceCityCity_FormCreate,
    serviceCityCity_FormGetTemplate,
  };

  // Effect section
  useEffect(() => {
    actions.serviceCityCity_FormGetTemplate!();
  }, []);

  return (
    <>
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
        />
      </Suspense>
    </>
  );
}
