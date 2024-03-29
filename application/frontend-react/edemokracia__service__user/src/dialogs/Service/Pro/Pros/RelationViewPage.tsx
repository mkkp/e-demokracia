//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import type { GridFilterModel } from '@mui/x-data-grid';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { Suspense, createContext, lazy, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import { useJudoNavigation } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import type {
  ServiceProPro_View_EditDialogActions,
  ServiceProPro_View_EditDialogProps,
} from '~/containers/Service/Pro/Pro_View_Edit/ServiceProPro_View_EditDialogContainer';
import { useServiceProConsRelationViewPage } from '~/dialogs/Service/Pro/Cons/RelationViewPage';
import { useServiceProCreatedByRelationViewPage } from '~/dialogs/Service/Pro/CreatedBy/RelationViewPage';
import { useServiceProPro_View_EditCreateConArgumentInputForm } from '~/dialogs/Service/Pro/Pro_View_Edit/CreateConArgument/Input/Form';
import { useServiceProPro_View_EditCreateProArgumentInputForm } from '~/dialogs/Service/Pro/Pro_View_Edit/CreateProArgument/Input/Form';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import { routeToServiceProVotesRelationTablePage } from '~/routes';
import type {
  ServiceCon,
  ServiceConQueryCustomizer,
  ServiceConStored,
  ServicePro,
  ServiceProQueryCustomizer,
  ServiceProStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceSimpleVote,
  ServiceSimpleVoteQueryCustomizer,
  ServiceSimpleVoteStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceProServiceForProsImpl } from '~/services/data-axios/ServiceProServiceForProsImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceProPro_View_EditDialogActionsExtended = ServiceProPro_View_EditDialogActions & {
  postVoteDownForProAction?: (onClose: () => Promise<void>) => Promise<void>;
  postVoteUpForProAction?: (onClose: () => Promise<void>) => Promise<void>;
  postRefreshAction?: (
    data: ServiceProStored,
    storeDiff: (attributeName: keyof ServicePro, value: any) => void,
    setValidation: Dispatch<SetStateAction<Map<keyof ServicePro, string>>>,
  ) => Promise<void>;
};

export const SERVICE_PRO_PROS_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_PRO_PROS_RELATION_VIEW_PAGE_ACTIONS_HOOK';
export type ServiceProPro_View_EditActionsHook = (
  ownerData: any,
  data: ServiceProStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServicePro, value: any) => void,
  refresh: () => Promise<void>,
  submit: () => Promise<void>,
) => ServiceProPro_View_EditDialogActionsExtended;

export interface ServiceProPro_View_EditViewModel extends ServiceProPro_View_EditDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<ServicePro>;
  isDraft?: boolean;
}

const ServiceProPro_View_EditViewModelContext = createContext<ServiceProPro_View_EditViewModel>({} as any);
export const useServiceProPro_View_EditViewModel = () => {
  const context = useContext(ServiceProPro_View_EditViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceProPro_View_EditViewModel must be used within a(n) ServiceProPro_View_EditViewModelProvider',
    );
  }
  return context;
};

export const useServiceProProsRelationViewPage = (): ((
  ownerData: any,
  templateDataOverride?: Partial<ServicePro>,
  isDraft?: boolean,
  ownerValidation?: (data: ServicePro) => Promise<void>,
) => Promise<DialogResult<ServiceProStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (
    ownerData: any,
    templateDataOverride?: Partial<ServicePro>,
    isDraft?: boolean,
    ownerValidation?: (data: ServicePro) => Promise<void>,
  ) =>
    new Promise((resolve) => {
      createDialog({
        fullWidth: true,
        maxWidth: 'xl',
        onClose: async (event: object, reason: string) => {
          if (reason !== 'backdropClick') {
            await closeDialog();
            resolve({
              result: 'close',
            });
          }
        },
        children: (
          <ServiceProProsRelationViewPage
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
            onSubmit={async (result, isDraft, openCreated) => {
              await closeDialog();
              resolve({
                result: isDraft ? 'submit-draft' : 'submit',
                openCreated,
                data: result,
              });
            }}
          />
        ),
      });
    });
};

export const convertServiceProProsRelationViewPagePayload = (attributeName: keyof ServicePro, value: any): any => {
  const dateTimeTypes: string[] = ['created'];
  if (dateTimeTypes.includes(attributeName as string)) {
    return value;
  }
  return value;
};

const ServiceProPro_View_EditDialogContainer = lazy(
  () => import('~/containers/Service/Pro/Pro_View_Edit/ServiceProPro_View_EditDialogContainer'),
);

export interface ServiceProProsRelationViewPageProps {
  ownerData: any;

  templateDataOverride?: Partial<ServicePro>;
  isDraft?: boolean;
  ownerValidation?: (data: ServicePro) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceProStored, isDraft?: boolean, openCreated?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_KSx6sIezEe2kLcMqsIbMgQ)/RelationFeatureView
// Name: service::Pro::pros::RelationViewPage
export default function ServiceProProsRelationViewPage(props: ServiceProProsRelationViewPageProps) {
  const { ownerData, templateDataOverride, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceProServiceForProsImpl = useMemo(() => new ServiceProServiceForProsImpl(judoAxiosProvider), []);

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
  const [data, setData] = useState<ServiceProStored>({} as ServiceProStored);
  const [validation, setValidation] = useState<Map<keyof ServicePro, string>>(new Map<keyof ServicePro, string>());

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceProStored, any>>({} as unknown as Record<keyof ServiceProStored, any>);

  // Callback section
  const storeDiff: (attributeName: keyof ServicePro, value: any) => void = useCallback(
    (attributeName: keyof ServicePro, value: any) => {
      payloadDiff.current![attributeName] = convertServiceProProsRelationViewPagePayload(attributeName, value);
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

  const getPageQueryCustomizer: () => ServiceProQueryCustomizer = () => ({
    _mask: actions.getMask
      ? actions.getMask!()
      : '{created,description,downVotes,title,upVotes,cons{downVotes,title,upVotes},pros{downVotes,title,upVotes},createdBy{representation}}',
  });

  // Private actions
  const submit = async () => {
    await updateAction();
  };
  const refresh = async () => {
    if (actions.refreshAction) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };

  // Validation
  const validate: (data: ServicePro) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceProPro_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_PRO_PROS_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceProPro_View_EditDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
    refresh,
    submit,
  );

  // Dialog hooks
  const openServiceProPro_View_EditCreateConArgumentInputForm = useServiceProPro_View_EditCreateConArgumentInputForm();
  const openServiceProPro_View_EditCreateProArgumentInputForm = useServiceProPro_View_EditCreateProArgumentInputForm();
  const openServiceProConsRelationViewPage = useServiceProConsRelationViewPage();
  const openServiceProCreatedByRelationViewPage = useServiceProCreatedByRelationViewPage();
  const openServiceProProsRelationViewPage = useServiceProProsRelationViewPage();

  // Action section
  const getPageTitle = (data: ServicePro): string => {
    return t('service.Pro.Pro_View_Edit', { defaultValue: 'Pro View / Edit' });
  };
  const createConArgumentAction = async (isDraft?: boolean, ownerValidation?: (data: any) => Promise<void>) => {
    const { result, data: returnedData } = await openServiceProPro_View_EditCreateConArgumentInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const consBulkDeleteAction = async (
    selectedRows: ServiceConStored[],
  ): Promise<DialogResult<Array<ServiceConStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceConStored>({
        dialogTitle: t('judo.action.bulk-delete', { defaultValue: 'Delete' }),
        itemTitleFn: (item) => item.title!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.consDeleteAction) {
              await actions.consDeleteAction!(item, true);
            }
            successHandler();
          } catch (error) {
            errorHandler(error);
          }
        },
        autoCloseOnSuccess: true,
        onClose: async (needsRefresh) => {
          if (needsRefresh) {
            if (actions.refreshAction) {
              await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
            }
            resolve({
              result: 'submit',
              data: [],
            });
          } else {
            resolve({
              result: 'close',
              data: [],
            });
          }
        },
      });
    });
  };
  const consFilterAction = async (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ): Promise<{ model?: GridFilterModel; filters?: Filter[] }> => {
    const newFilters = await openFilterDialog(id, filterOptions, filters);
    return {
      filters: newFilters,
    };
  };
  const consDeleteAction = async (target: ServiceConStored, silentMode?: boolean) => {
    try {
      const confirmed = !silentMode
        ? await openConfirmDialog(
            'row-delete-action',
            t('judo.modal.confirm.confirm-delete', {
              defaultValue: 'Are you sure you would like to delete the selected element?',
            }),
            t('judo.modal.confirm.confirm-title', { defaultValue: 'Confirm action' }),
          )
        : true;
      if (confirmed) {
        await serviceProServiceForProsImpl.deleteCons(target);
        if (!silentMode) {
          showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
          refreshAction(getPageQueryCustomizer());
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceCon>(error, undefined, target);
      } else {
        throw error;
      }
    }
  };
  const consOpenPageAction = async (target: ServiceCon | ServiceConStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceConStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceProConsRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const createProArgumentAction = async (isDraft?: boolean, ownerValidation?: (data: any) => Promise<void>) => {
    const { result, data: returnedData } = await openServiceProPro_View_EditCreateProArgumentInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const prosBulkDeleteAction = async (
    selectedRows: ServiceProStored[],
  ): Promise<DialogResult<Array<ServiceProStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceProStored>({
        dialogTitle: t('judo.action.bulk-delete', { defaultValue: 'Delete' }),
        itemTitleFn: (item) => item.title!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.prosDeleteAction) {
              await actions.prosDeleteAction!(item, true);
            }
            successHandler();
          } catch (error) {
            errorHandler(error);
          }
        },
        autoCloseOnSuccess: true,
        onClose: async (needsRefresh) => {
          if (needsRefresh) {
            if (actions.refreshAction) {
              await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
            }
            resolve({
              result: 'submit',
              data: [],
            });
          } else {
            resolve({
              result: 'close',
              data: [],
            });
          }
        },
      });
    });
  };
  const prosFilterAction = async (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ): Promise<{ model?: GridFilterModel; filters?: Filter[] }> => {
    const newFilters = await openFilterDialog(id, filterOptions, filters);
    return {
      filters: newFilters,
    };
  };
  const prosDeleteAction = async (target: ServiceProStored, silentMode?: boolean) => {
    try {
      const confirmed = !silentMode
        ? await openConfirmDialog(
            'row-delete-action',
            t('judo.modal.confirm.confirm-delete', {
              defaultValue: 'Are you sure you would like to delete the selected element?',
            }),
            t('judo.modal.confirm.confirm-title', { defaultValue: 'Confirm action' }),
          )
        : true;
      if (confirmed) {
        await serviceProServiceForProsImpl.deletePros(target);
        if (!silentMode) {
          showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
          refreshAction(getPageQueryCustomizer());
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServicePro>(error, undefined, target);
      } else {
        throw error;
      }
    }
  };
  const prosOpenPageAction = async (target: ServicePro | ServiceProStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceProStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceProProsRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const createdByOpenPageAction = async (target: ServiceServiceUser | ServiceServiceUserStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceServiceUserStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceProCreatedByRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const voteDownForProAction = async () => {
    try {
      setIsLoading(true);
      await serviceProServiceForProsImpl.voteDown(data);
      if (customActions?.postVoteDownForProAction) {
        await customActions.postVoteDownForProAction(onClose);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
      }
    } catch (error) {
      handleError<ServicePro>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const voteUpForProAction = async () => {
    try {
      setIsLoading(true);
      await serviceProServiceForProsImpl.voteUp(data);
      if (customActions?.postVoteUpForProAction) {
        await customActions.postVoteUpForProAction(onClose);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
      }
    } catch (error) {
      handleError<ServicePro>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const votesOpenPageAction = async (target: ServiceSimpleVote | ServiceSimpleVoteStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceSimpleVoteStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceProVotesRelationTablePage(((target as ServiceSimpleVoteStored) || data).__signedIdentifier),
      );
      onSubmit();
    }
  };
  const backAction = async () => {
    onClose();
  };
  const cancelAction = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await refreshAction(processQueryCustomizer(getPageQueryCustomizer()));
  };
  const deleteAction = async () => {
    try {
      const confirmed = await openConfirmDialog(
        'row-delete-action',
        t('judo.modal.confirm.confirm-delete', {
          defaultValue: 'Are you sure you would like to delete the selected element?',
        }),
        t('judo.modal.confirm.confirm-title', { defaultValue: 'Confirm action' }),
      );
      if (confirmed) {
        await serviceProServiceForProsImpl.delete(data);
        showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
        onSubmit();
      }
    } catch (error) {
      handleError(error, undefined, data);
    }
  };
  const refreshAction = async (
    queryCustomizer: ServiceProQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceProStored>> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const response = await serviceProServiceForProsImpl.refresh(ownerData, getPageQueryCustomizer());
      const { data: result } = response;
      setData(result);
      setLatestViewData(result);
      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceProStored, any>;
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
  const updateAction = async () => {
    setIsLoading(true);
    try {
      const { data: res } = await serviceProServiceForProsImpl.update(payloadDiff.current);
      if (res) {
        showSuccessSnack(t('judo.action.save.success', { defaultValue: 'Changes saved' }));
        setValidation(new Map<keyof ServicePro, string>());
        setEditMode(false);
        await actions.refreshAction!(getPageQueryCustomizer());
      }
    } catch (error) {
      handleError<ServicePro>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: ServiceProPro_View_EditDialogActions = {
    getPageTitle,
    createConArgumentAction,
    consBulkDeleteAction,
    consFilterAction,
    consDeleteAction,
    consOpenPageAction,
    createProArgumentAction,
    prosBulkDeleteAction,
    prosFilterAction,
    prosDeleteAction,
    prosOpenPageAction,
    createdByOpenPageAction,
    voteDownForProAction,
    voteUpForProAction,
    votesOpenPageAction,
    backAction,
    cancelAction,
    deleteAction,
    refreshAction,
    updateAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceProPro_View_EditViewModel = {
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
    <ServiceProPro_View_EditViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_KSx6sIezEe2kLcMqsIbMgQ)/RelationFeatureView"
          data-page-name="service::Pro::pros::RelationViewPage"
        />
        <ServiceProPro_View_EditDialogContainer
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
    </ServiceProPro_View_EditViewModelContext.Provider>
  );
}
