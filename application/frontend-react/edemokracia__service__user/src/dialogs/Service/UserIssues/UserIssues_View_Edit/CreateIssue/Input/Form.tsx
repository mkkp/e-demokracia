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
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import type { ServiceCreateIssueInputCreateIssueInput_FormDialogActions } from '~/containers/Service/CreateIssueInput/CreateIssueInput_Form/ServiceCreateIssueInputCreateIssueInput_FormDialogContainer';
import { useServiceCreateIssueInputCreateIssueInput_FormIssueCityLinkSetSelectorPage } from '~/dialogs/Service/CreateIssueInput/CreateIssueInput_Form/Issue/City/LinkSetSelectorPage';
import { useServiceCreateIssueInputCreateIssueInput_FormIssueCountyLinkSetSelectorPage } from '~/dialogs/Service/CreateIssueInput/CreateIssueInput_Form/Issue/County/LinkSetSelectorPage';
import { useServiceCreateIssueInputCreateIssueInput_FormIssueDistrictLinkSetSelectorPage } from '~/dialogs/Service/CreateIssueInput/CreateIssueInput_Form/Issue/District/LinkSetSelectorPage';
import { useServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeLinkSetSelectorPage } from '~/dialogs/Service/CreateIssueInput/CreateIssueInput_Form/Issue/IssueType/LinkSetSelectorPage';
import { useCRUDDialog, useSnacks } from '~/hooks';
import type {
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceCreateIssueInput,
  ServiceCreateIssueInputQueryCustomizer,
  ServiceCreateIssueInputStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceIssue,
  ServiceIssueStored,
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceUserIssuesServiceImpl } from '~/services/data-axios/ServiceUserIssuesServiceImpl';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceCreateIssueInputCreateIssueInput_FormDialogActionsExtended =
  ServiceCreateIssueInputCreateIssueInput_FormDialogActions & {
    postCreateIssueForUserIssuesAction?: (
      output: ServiceIssueStored,
      onSubmit: (result?: ServiceIssueStored) => Promise<void>,
      onClose: () => Promise<void>,
    ) => Promise<void>;
    postGetTemplateAction?: (
      ownerData: any,
      data: ServiceCreateIssueInput,
      storeDiff: (attributeName: keyof ServiceCreateIssueInput, value: any) => void,
    ) => Promise<void>;
  };

export const SERVICE_USER_ISSUES_USER_ISSUES_VIEW_EDIT_CREATE_ISSUE_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceCreateIssueInputCreateIssueInput_FormActionsHook';
export type ServiceCreateIssueInputCreateIssueInput_FormActionsHook = (
  ownerData: any,
  data: ServiceCreateIssueInputStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceCreateIssueInput, value: any) => void,
) => ServiceCreateIssueInputCreateIssueInput_FormDialogActionsExtended;

export const useServiceUserIssuesUserIssues_View_EditCreateIssueInputForm = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceIssueStored>>) => {
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
          <ServiceUserIssuesUserIssues_View_EditCreateIssueInputForm
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

export const convertServiceUserIssuesUserIssues_View_EditCreateIssueInputFormPayload = (
  attributeName: keyof ServiceCreateIssueInput,
  value: any,
): any => {
  const dateTimeTypes: string[] = ['debateCloseAt'];
  if (dateTimeTypes.includes(attributeName as string)) {
    return value;
  }
  return value;
};

const ServiceCreateIssueInputCreateIssueInput_FormDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/CreateIssueInput/CreateIssueInput_Form/ServiceCreateIssueInputCreateIssueInput_FormDialogContainer'
    ),
);

export interface ServiceUserIssuesUserIssues_View_EditCreateIssueInputFormProps {
  ownerData: any;

  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceIssueStored) => Promise<void>;
}

// XMIID: User/(esm/_jK51w1q4Ee6_67aMO2jOsw)/OperationUnmappedInputPageDefinition
// Name: service::UserIssues::UserIssues_View_Edit::createIssue::Input::Form
export default function ServiceUserIssuesUserIssues_View_EditCreateIssueInputForm(
  props: ServiceUserIssuesUserIssues_View_EditCreateIssueInputFormProps,
) {
  const { ownerData, onClose, onSubmit } = props;

  // Services
  const serviceUserIssuesServiceImpl = useMemo(() => new ServiceUserIssuesServiceImpl(judoAxiosProvider), []);

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
  const [data, setData] = useState<ServiceCreateIssueInputStored>({} as ServiceCreateIssueInputStored);
  const [validation, setValidation] = useState<Map<keyof ServiceCreateIssueInput, string>>(
    new Map<keyof ServiceCreateIssueInput, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceCreateIssueInputStored, any>>(
    {} as unknown as Record<keyof ServiceCreateIssueInputStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceCreateIssueInput, value: any) => void = useCallback(
    (attributeName: keyof ServiceCreateIssueInput, value: any) => {
      payloadDiff.current![attributeName] = convertServiceUserIssuesUserIssues_View_EditCreateIssueInputFormPayload(
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
    return true;
  }, [data]);
  const isFormDeleteable = useCallback(() => {
    return false;
  }, [data]);

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceCreateIssueInputCreateIssueInput_FormActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_ISSUES_USER_ISSUES_VIEW_EDIT_CREATE_ISSUE_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceCreateIssueInputCreateIssueInput_FormDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, storeDiff);

  // Dialog hooks
  const openServiceCreateIssueInputCreateIssueInput_FormIssueCityLinkSetSelectorPage =
    useServiceCreateIssueInputCreateIssueInput_FormIssueCityLinkSetSelectorPage();
  const openServiceCreateIssueInputCreateIssueInput_FormIssueCountyLinkSetSelectorPage =
    useServiceCreateIssueInputCreateIssueInput_FormIssueCountyLinkSetSelectorPage();
  const openServiceCreateIssueInputCreateIssueInput_FormIssueDistrictLinkSetSelectorPage =
    useServiceCreateIssueInputCreateIssueInput_FormIssueDistrictLinkSetSelectorPage();
  const openServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeLinkSetSelectorPage =
    useServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeLinkSetSelectorPage();

  // Calculated section
  const title: string = t('service.CreateIssueInput.CreateIssueInput_Form', { defaultValue: 'CreateIssueInput Form' });

  // Private actions
  const submit = async () => {
    await createIssueForUserIssuesAction();
  };

  // Action section
  const cityAutocompleteRangeAction = async (
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<ServiceCityStored[]> => {
    try {
      return serviceUserIssuesServiceImpl.getRangeOnCreateIssueForCity(data, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const cityOpenSetSelectorAction = async (): Promise<ServiceCityStored | undefined> => {
    const { result, data: returnedData } =
      await openServiceCreateIssueInputCreateIssueInput_FormIssueCityLinkSetSelectorPage(
        data,
        data.city ? [data.city] : [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('city', returnedData[0]);
        return returnedData[0];
      }
    }
    return undefined;
  };
  const cityUnsetAction = async (target: ServiceCityStored) => {
    storeDiff('city', null);
  };
  const countyAutocompleteRangeAction = async (
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<ServiceCountyStored[]> => {
    try {
      return serviceUserIssuesServiceImpl.getRangeOnCreateIssueForCounty(data, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const countyOpenSetSelectorAction = async (): Promise<ServiceCountyStored | undefined> => {
    const { result, data: returnedData } =
      await openServiceCreateIssueInputCreateIssueInput_FormIssueCountyLinkSetSelectorPage(
        data,
        data.county ? [data.county] : [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('county', returnedData[0]);
        return returnedData[0];
      }
    }
    return undefined;
  };
  const countyUnsetAction = async (target: ServiceCountyStored) => {
    storeDiff('county', null);
  };
  const districtAutocompleteRangeAction = async (
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored[]> => {
    try {
      return serviceUserIssuesServiceImpl.getRangeOnCreateIssueForDistrict(data, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const districtOpenSetSelectorAction = async (): Promise<ServiceDistrictStored | undefined> => {
    const { result, data: returnedData } =
      await openServiceCreateIssueInputCreateIssueInput_FormIssueDistrictLinkSetSelectorPage(
        data,
        data.district ? [data.district] : [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('district', returnedData[0]);
        return returnedData[0];
      }
    }
    return undefined;
  };
  const districtUnsetAction = async (target: ServiceDistrictStored) => {
    storeDiff('district', null);
  };
  const issueTypeAutocompleteRangeAction = async (
    queryCustomizer: ServiceIssueTypeQueryCustomizer,
  ): Promise<ServiceIssueTypeStored[]> => {
    try {
      return serviceUserIssuesServiceImpl.getRangeOnCreateIssueForIssueType(data, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const issueTypeOpenSetSelectorAction = async (): Promise<ServiceIssueTypeStored | undefined> => {
    const { result, data: returnedData } =
      await openServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeLinkSetSelectorPage(
        data,
        data.issueType ? [data.issueType] : [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('issueType', returnedData[0]);
        return returnedData[0];
      }
    }
    return undefined;
  };
  const issueTypeUnsetAction = async (target: ServiceIssueTypeStored) => {
    storeDiff('issueType', null);
  };
  const backAction = async () => {
    onClose();
  };
  const createIssueForUserIssuesAction = async () => {
    try {
      setIsLoading(true);
      const result = await serviceUserIssuesServiceImpl.createIssue(payloadDiff.current);
      if (customActions?.postCreateIssueForUserIssuesAction) {
        await customActions.postCreateIssueForUserIssuesAction(result, onSubmit, onClose);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (result) {
          onSubmit(result);
        } else {
          onSubmit();
        }
      }
    } catch (error) {
      handleError<ServiceCreateIssueInput>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const getTemplateAction = async (): Promise<ServiceCreateIssueInput> => {
    try {
      setIsLoading(true);
      const result = await serviceUserIssuesServiceImpl.getTemplateOnCreateIssue();
      setData(result as ServiceCreateIssueInputStored);
      payloadDiff.current = {
        ...(result as Record<keyof ServiceCreateIssueInputStored, any>),
      };
      if (customActions?.postGetTemplateAction) {
        await customActions.postGetTemplateAction(ownerData, result, storeDiff);
      }
      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: ServiceCreateIssueInputCreateIssueInput_FormDialogActions = {
    cityAutocompleteRangeAction,
    cityOpenSetSelectorAction,
    cityUnsetAction,
    countyAutocompleteRangeAction,
    countyOpenSetSelectorAction,
    countyUnsetAction,
    districtAutocompleteRangeAction,
    districtOpenSetSelectorAction,
    districtUnsetAction,
    issueTypeAutocompleteRangeAction,
    issueTypeOpenSetSelectorAction,
    issueTypeUnsetAction,
    backAction,
    createIssueForUserIssuesAction,
    getTemplateAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    actions.getTemplateAction!();
  }, []);

  return (
    <div
      id="User/(esm/_jK51w1q4Ee6_67aMO2jOsw)/OperationUnmappedInputPageDefinition"
      data-page-name="service::UserIssues::UserIssues_View_Edit::createIssue::Input::Form"
    >
      <Suspense>
        <ServiceCreateIssueInputCreateIssueInput_FormDialogContainer
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
