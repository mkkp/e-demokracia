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
import { useServiceUserProfileResidentCityRelationViewPage } from '~/dialogs/Service/UserProfile/ResidentCity/Relation/View/Page';
import { useServiceUserProfileResidentCountyRelationViewPage } from '~/dialogs/Service/UserProfile/ResidentCounty/Relation/View/Page';
import { useServiceUserProfileResidentDistrictRelationViewPage } from '~/dialogs/Service/UserProfile/ResidentDistrict/Relation/View/Page';
import type { ServiceUserProfileUserProfile_View_EditDialogActions } from '~/containers/Service/UserProfile/UserProfile_View_Edit/ServiceUserProfileUserProfile_View_EditDialogContainer';
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
  ServiceUserProfile,
  ServiceUserProfileQueryCustomizer,
  ServiceUserProfileStored,
} from '~/services/data-api';
import { userServiceForUserProfileImpl } from '~/services/data-axios';

export const useServiceUserUserProfileAccessViewPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceUserProfileStored>>) => {
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
          <ServiceUserUserProfileAccessViewPage
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

export const convertServiceUserUserProfileAccessViewPagePayload = (
  attributeName: keyof ServiceUserProfile,
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

const ServiceUserProfileUserProfile_View_EditDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/UserProfile/UserProfile_View_Edit/ServiceUserProfileUserProfile_View_EditDialogContainer'
    ),
);

export interface ServiceUserUserProfileAccessViewPageProps {
  ownerData: any;

  onClose: () => void;
  onSubmit: (result?: ServiceUserProfileStored) => void;
}

// Name: service::User::userProfile::Access::View::Page
export default function ServiceUserUserProfileAccessViewPage(props: ServiceUserUserProfileAccessViewPageProps) {
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
  const [data, setData] = useState<ServiceUserProfileStored>({} as ServiceUserProfileStored);
  const [validation, setValidation] = useState<Map<keyof ServiceUserProfile, string>>(
    new Map<keyof ServiceUserProfile, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceUserProfileStored, any>>(
    {} as unknown as Record<keyof ServiceUserProfileStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceUserProfile, value: any) => void = useCallback(
    (attributeName: keyof ServiceUserProfile, value: any) => {
      payloadDiff.current![attributeName] = convertServiceUserUserProfileAccessViewPagePayload(attributeName, value);
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

  const pageQueryCustomizer: ServiceUserProfileQueryCustomizer = {
    _mask:
      '{lastName,firstName,phone,userName,email,activityCities{representation},activityDistricts{representation},activityCounties{representation},residentCity{representation},residentCounty{representation},residentDistrict{representation}}',
  };

  // Dialog hooks
  const openServiceUserProfileResidentCityRelationViewPage = useServiceUserProfileResidentCityRelationViewPage();
  const openServiceUserProfileResidentCountyRelationViewPage = useServiceUserProfileResidentCountyRelationViewPage();
  const openServiceUserProfileResidentDistrictRelationViewPage =
    useServiceUserProfileResidentDistrictRelationViewPage();

  // Calculated section
  const title: string = t('Service.UserProfile.UserProfile_View_Edit', { defaultValue: 'My profile' });

  // Action section
  const serviceUserProfileUserProfile_View_EditBack = async () => {
    onClose();
  };
  const serviceUserProfileUserProfile_View_EditRefresh = async (
    queryCustomizer: ServiceUserProfileQueryCustomizer,
  ): Promise<ServiceUserProfileStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await userServiceForUserProfileImpl.refresh(ownerData, pageQueryCustomizer);

      setData(result);

      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceUserProfileStored, any>;

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const serviceUserProfileUserProfile_View_EditAreasResidencyResidentCityView = async (target?: ServiceCityStored) => {
    await openServiceUserProfileResidentCityRelationViewPage(target!);

    if (!editMode) {
      await actions.serviceUserProfileUserProfile_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const serviceUserProfileUserProfile_View_EditAreasResidencyResidentCountyView = async (
    target?: ServiceCountyStored,
  ) => {
    await openServiceUserProfileResidentCountyRelationViewPage(target!);

    if (!editMode) {
      await actions.serviceUserProfileUserProfile_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const serviceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictView = async (
    target?: ServiceDistrictStored,
  ) => {
    await openServiceUserProfileResidentDistrictRelationViewPage(target!);

    if (!editMode) {
      await actions.serviceUserProfileUserProfile_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
    }
  };

  const actions: ServiceUserProfileUserProfile_View_EditDialogActions = {
    serviceUserProfileUserProfile_View_EditBack,
    serviceUserProfileUserProfile_View_EditRefresh,
    serviceUserProfileUserProfile_View_EditAreasResidencyResidentCityView,
    serviceUserProfileUserProfile_View_EditAreasResidencyResidentCountyView,
    serviceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictView,
  };

  // Effect section
  useEffect(() => {
    actions.serviceUserProfileUserProfile_View_EditRefresh!(pageQueryCustomizer);
  }, []);

  return (
    <>
      <Suspense>
        <ServiceUserProfileUserProfile_View_EditDialogContainer
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
