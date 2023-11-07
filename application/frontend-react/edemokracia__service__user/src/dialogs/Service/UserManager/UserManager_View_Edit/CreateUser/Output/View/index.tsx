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
import { routeToServiceServiceUserVotesRelationTablePage } from '~/routes';
import { useServiceServiceUserServiceUser_View_EditAreasResidencyResidentCityTabularReferenceFieldLinkSetSelectorPage } from '~/dialogs/Service/ServiceUser/ServiceUser_View_Edit/Areas/Residency/ResidentCity/TabularReferenceField/Link/Set/Selector/Page';
import { useServiceServiceUserServiceUser_View_EditAreasResidencyResidentCountyTabularReferenceFieldLinkSetSelectorPage } from '~/dialogs/Service/ServiceUser/ServiceUser_View_Edit/Areas/Residency/ResidentCounty/TabularReferenceField/Link/Set/Selector/Page';
import { useServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictTabularReferenceFieldLinkSetSelectorPage } from '~/dialogs/Service/ServiceUser/ServiceUser_View_Edit/Areas/Residency/ResidentDistrict/TabularReferenceField/Link/Set/Selector/Page';
import { useServiceServiceUserResidentCityRelationViewPage } from '~/dialogs/Service/ServiceUser/ResidentCity/Relation/View/Page';
import { useServiceServiceUserResidentCountyRelationViewPage } from '~/dialogs/Service/ServiceUser/ResidentCounty/Relation/View/Page';
import { useServiceServiceUserResidentDistrictRelationViewPage } from '~/dialogs/Service/ServiceUser/ResidentDistrict/Relation/View/Page';
import type { ServiceServiceUserServiceUser_View_EditDialogActions } from '~/containers/Service/ServiceUser/ServiceUser_View_Edit/ServiceServiceUserServiceUser_View_EditDialogContainer';
import type {
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceSimpleVote,
  ServiceSimpleVoteQueryCustomizer,
  ServiceSimpleVoteStored,
} from '~/services/data-api';
import { serviceServiceUserServiceImpl } from '~/services/data-axios';

export const useServiceUserManagerUserManager_View_EditCreateUserOutputView = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceServiceUserStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any) =>
    new Promise((resolve) => {
      createDialog({
        fullWidth: true,
        maxWidth: 'lg',
        onClose: (event: object, reason: string) => {
          if (reason !== 'backdropClick') {
            closeDialog();
            resolve({
              result: 'close',
            });
          }
        },
        children: (
          <ServiceUserManagerUserManager_View_EditCreateUserOutputView
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

export const convertServiceUserManagerUserManager_View_EditCreateUserOutputViewPayload = (
  attributeName: keyof ServiceServiceUser,
  value: any,
): any => {
  const dateTypes: string[] = [];
  const dateTimeTypes: string[] = ['created'];
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

const ServiceServiceUserServiceUser_View_EditDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/ServiceUser/ServiceUser_View_Edit/ServiceServiceUserServiceUser_View_EditDialogContainer'
    ),
);

export interface ServiceUserManagerUserManager_View_EditCreateUserOutputViewProps {
  ownerData: any;

  onClose: () => void;
  onSubmit: (result?: ServiceServiceUserStored) => void;
}

// Name: service::UserManager::UserManager_View_Edit::createUser::Output::View
export default function ServiceUserManagerUserManager_View_EditCreateUserOutputView(
  props: ServiceUserManagerUserManager_View_EditCreateUserOutputViewProps,
) {
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
  const [editMode, setEditMode] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<ServiceServiceUserStored>({} as ServiceServiceUserStored);
  const [validation, setValidation] = useState<Map<keyof ServiceServiceUser, string>>(
    new Map<keyof ServiceServiceUser, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceServiceUserStored, any>>(
    {} as unknown as Record<keyof ServiceServiceUserStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceServiceUser, value: any) => void = useCallback(
    (attributeName: keyof ServiceServiceUser, value: any) => {
      payloadDiff.current![attributeName] = convertServiceUserManagerUserManager_View_EditCreateUserOutputViewPayload(
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

  const pageQueryCustomizer: ServiceServiceUserQueryCustomizer = {
    _mask:
      '{lastName,firstName,phone,created,isAdmin,userName,email,activityCities{representation},activityDistricts{representation},activityCounties{representation},residentCity{representation},residentCounty{representation},residentDistrict{representation}}',
  };

  // Dialog hooks
  const openServiceServiceUserServiceUser_View_EditAreasResidencyResidentCityTabularReferenceFieldLinkSetSelectorPage =
    useServiceServiceUserServiceUser_View_EditAreasResidencyResidentCityTabularReferenceFieldLinkSetSelectorPage();
  const openServiceServiceUserServiceUser_View_EditAreasResidencyResidentCountyTabularReferenceFieldLinkSetSelectorPage =
    useServiceServiceUserServiceUser_View_EditAreasResidencyResidentCountyTabularReferenceFieldLinkSetSelectorPage();
  const openServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictTabularReferenceFieldLinkSetSelectorPage =
    useServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictTabularReferenceFieldLinkSetSelectorPage();
  const openServiceServiceUserResidentCityRelationViewPage = useServiceServiceUserResidentCityRelationViewPage();
  const openServiceServiceUserResidentCountyRelationViewPage = useServiceServiceUserResidentCountyRelationViewPage();
  const openServiceServiceUserResidentDistrictRelationViewPage =
    useServiceServiceUserResidentDistrictRelationViewPage();

  // Calculated section
  const title: string = t('Service.ServiceUser.ServiceUser_View_Edit', { defaultValue: 'ServiceUser View / Edit' });

  // Action section
  const serviceServiceUserServiceUser_View_EditRefresh = async (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceServiceUserServiceImpl.refresh(ownerData, pageQueryCustomizer);

      setData(result);

      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceServiceUserStored, any>;

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const serviceServiceUserServiceUser_View_EditCancel = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await serviceServiceUserServiceUser_View_EditRefresh(processQueryCustomizer(pageQueryCustomizer));
  };
  const serviceServiceUserServiceUser_View_EditUpdate = async () => {
    setIsLoading(true);

    try {
      const res = await serviceServiceUserServiceImpl.update(payloadDiff.current);

      if (res) {
        enqueueSnackbar(t('judo.action.save.success', { defaultValue: 'Changes saved' }), {
          variant: 'success',
          ...toastConfig.success,
        });
        setValidation(new Map<keyof ServiceServiceUser, string>());
        await actions.serviceServiceUserServiceUser_View_EditRefresh!(pageQueryCustomizer);
        setEditMode(false);
      }
    } catch (error) {
      handleError<ServiceServiceUser>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const serviceServiceUserServiceUser_View_EditDelete = async () => {
    try {
      const confirmed = await openConfirmDialog(
        'row-delete-action',
        t('judo.modal.confirm.confirm-delete', {
          defaultValue: 'Are you sure you would like to delete the selected element?',
        }),
        t('judo.modal.confirm.confirm-title', { defaultValue: 'Confirm action' }),
      );
      if (confirmed) {
        await serviceServiceUserServiceImpl.delete(data);

        enqueueSnackbar(t('judo.action.delete.success', { defaultValue: 'Delete successful' }), {
          variant: 'success',
          ...toastConfig.success,
        });

        onClose();
      }
    } catch (error) {
      handleError(error, undefined, data);
    }
  };
  const serviceServiceUserServiceUser_View_EditAreasResidencyResidentCityView = async (target?: ServiceCityStored) => {
    await openServiceServiceUserResidentCityRelationViewPage(target!);

    if (!editMode) {
      await actions.serviceServiceUserServiceUser_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const serviceServiceUserServiceUser_View_EditAreasResidencyResidentCitySetOpenSelector = async () => {
    const { result, data: returnedData } =
      await openServiceServiceUserServiceUser_View_EditAreasResidencyResidentCityTabularReferenceFieldLinkSetSelectorPage(
        data,
        data.residentCity ? [data.residentCity] : [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('residentCity', returnedData[0]);
      }
    }
  };
  const serviceServiceUserServiceUser_View_EditAreasResidencyResidentCityAutocomplete = async (
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<ServiceCityStored[]> => {
    try {
      return serviceServiceUserServiceImpl.getRangeForResidentCity(data, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const serviceServiceUserServiceUser_View_EditAreasResidencyResidentCityUnset = async (target: ServiceCityStored) => {
    storeDiff('residentCity', null);
  };
  const serviceServiceUserServiceUser_View_EditPersonalVotesOpenPage = async (target?: ServiceSimpleVoteStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceServiceUserVotesRelationTablePage((target || data).__signedIdentifier));
    onClose();
  };
  const serviceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictView = async (
    target?: ServiceDistrictStored,
  ) => {
    await openServiceServiceUserResidentDistrictRelationViewPage(target!);

    if (!editMode) {
      await actions.serviceServiceUserServiceUser_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const serviceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetOpenSelector = async () => {
    const { result, data: returnedData } =
      await openServiceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictTabularReferenceFieldLinkSetSelectorPage(
        data,
        data.residentDistrict ? [data.residentDistrict] : [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('residentDistrict', returnedData[0]);
      }
    }
  };
  const serviceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictAutocomplete = async (
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored[]> => {
    try {
      return serviceServiceUserServiceImpl.getRangeForResidentDistrict(data, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const serviceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictUnset = async (
    target: ServiceDistrictStored,
  ) => {
    storeDiff('residentDistrict', null);
  };
  const serviceServiceUserServiceUser_View_EditAreasResidencyResidentCountyView = async (
    target?: ServiceCountyStored,
  ) => {
    await openServiceServiceUserResidentCountyRelationViewPage(target!);

    if (!editMode) {
      await actions.serviceServiceUserServiceUser_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const serviceServiceUserServiceUser_View_EditAreasResidencyResidentCountySetOpenSelector = async () => {
    const { result, data: returnedData } =
      await openServiceServiceUserServiceUser_View_EditAreasResidencyResidentCountyTabularReferenceFieldLinkSetSelectorPage(
        data,
        data.residentCounty ? [data.residentCounty] : [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('residentCounty', returnedData[0]);
      }
    }
  };
  const serviceServiceUserServiceUser_View_EditAreasResidencyResidentCountyAutocomplete = async (
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<ServiceCountyStored[]> => {
    try {
      return serviceServiceUserServiceImpl.getRangeForResidentCounty(data, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const serviceServiceUserServiceUser_View_EditAreasResidencyResidentCountyUnset = async (
    target: ServiceCountyStored,
  ) => {
    storeDiff('residentCounty', null);
  };

  const actions: ServiceServiceUserServiceUser_View_EditDialogActions = {
    serviceServiceUserServiceUser_View_EditRefresh,
    serviceServiceUserServiceUser_View_EditCancel,
    serviceServiceUserServiceUser_View_EditUpdate,
    serviceServiceUserServiceUser_View_EditDelete,
    serviceServiceUserServiceUser_View_EditAreasResidencyResidentCityView,
    serviceServiceUserServiceUser_View_EditAreasResidencyResidentCitySetOpenSelector,
    serviceServiceUserServiceUser_View_EditAreasResidencyResidentCityAutocomplete,
    serviceServiceUserServiceUser_View_EditAreasResidencyResidentCityUnset,
    serviceServiceUserServiceUser_View_EditPersonalVotesOpenPage,
    serviceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictView,
    serviceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictSetOpenSelector,
    serviceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictAutocomplete,
    serviceServiceUserServiceUser_View_EditAreasResidencyResidentDistrictUnset,
    serviceServiceUserServiceUser_View_EditAreasResidencyResidentCountyView,
    serviceServiceUserServiceUser_View_EditAreasResidencyResidentCountySetOpenSelector,
    serviceServiceUserServiceUser_View_EditAreasResidencyResidentCountyAutocomplete,
    serviceServiceUserServiceUser_View_EditAreasResidencyResidentCountyUnset,
  };

  // Effect section
  useEffect(() => {
    actions.serviceServiceUserServiceUser_View_EditRefresh!(pageQueryCustomizer);
  }, []);

  return (
    <>
      <Suspense>
        <ServiceServiceUserServiceUser_View_EditDialogContainer
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
