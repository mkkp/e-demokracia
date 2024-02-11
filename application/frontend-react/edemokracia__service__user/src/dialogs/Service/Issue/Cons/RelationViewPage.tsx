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
  ServiceConCon_View_EditDialogActions,
  ServiceConCon_View_EditDialogProps,
} from '~/containers/Service/Con/Con_View_Edit/ServiceConCon_View_EditDialogContainer';
import { useServiceConCon_View_EditCreateConArgumentInputForm } from '~/dialogs/Service/Con/Con_View_Edit/CreateConArgument/Input/Form';
import { useServiceConCon_View_EditCreateProArgumentInputForm } from '~/dialogs/Service/Con/Con_View_Edit/CreateProArgument/Input/Form';
import { useServiceConConsRelationViewPage } from '~/dialogs/Service/Con/Cons/RelationViewPage';
import { useServiceConCreatedByRelationViewPage } from '~/dialogs/Service/Con/CreatedBy/RelationViewPage';
import { useServiceConProsRelationViewPage } from '~/dialogs/Service/Con/Pros/RelationViewPage';
import { useServiceProPro_View_EditCreateConArgumentInputForm } from '~/dialogs/Service/Pro/Pro_View_Edit/CreateConArgument/Input/Form';
import { useServiceProPro_View_EditCreateProArgumentInputForm } from '~/dialogs/Service/Pro/Pro_View_Edit/CreateProArgument/Input/Form';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import { routeToServiceConVotesRelationTablePage } from '~/routes';
import type {
  ServiceCon,
  ServiceConQueryCustomizer,
  ServiceConStored,
  ServiceIssue,
  ServiceIssueStored,
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
import { ServiceIssueServiceForConsImpl } from '~/services/data-axios/ServiceIssueServiceForConsImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceConCon_View_EditDialogActionsExtended = ServiceConCon_View_EditDialogActions & {
  postVoteDownForConAction?: (onClose: () => Promise<void>) => Promise<void>;
  postConsVoteDownForConAction?: (data: ServiceConStored, onClose: () => Promise<void>) => Promise<void>;
  postVoteUpForConAction?: (onClose: () => Promise<void>) => Promise<void>;
  postConsVoteUpForConAction?: (data: ServiceConStored, onClose: () => Promise<void>) => Promise<void>;
  postProsVoteDownForProAction?: (data: ServiceProStored, onClose: () => Promise<void>) => Promise<void>;
  postProsVoteUpForProAction?: (data: ServiceProStored, onClose: () => Promise<void>) => Promise<void>;
  postRefreshAction?: (
    data: ServiceConStored,
    storeDiff: (attributeName: keyof ServiceCon, value: any) => void,
    setValidation: Dispatch<SetStateAction<Map<keyof ServiceCon, string>>>,
  ) => Promise<void>;
};

export const SERVICE_ISSUE_CONS_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_ISSUE_CONS_RELATION_VIEW_PAGE_ACTIONS_HOOK';
export type ServiceConCon_View_EditActionsHook = (
  ownerData: any,
  data: ServiceConStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceCon, value: any) => void,
  refresh: () => Promise<void>,
  submit: () => Promise<void>,
) => ServiceConCon_View_EditDialogActionsExtended;

export interface ServiceConCon_View_EditViewModel extends ServiceConCon_View_EditDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  templateDataOverride?: Partial<ServiceCon>;
  isDraft?: boolean;
}

const ServiceConCon_View_EditViewModelContext = createContext<ServiceConCon_View_EditViewModel>({} as any);
export const useServiceConCon_View_EditViewModel = () => {
  const context = useContext(ServiceConCon_View_EditViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceConCon_View_EditViewModel must be used within a(n) ServiceConCon_View_EditViewModelProvider',
    );
  }
  return context;
};

export const useServiceIssueConsRelationViewPage = (): ((
  ownerData: any,
  templateDataOverride?: Partial<ServiceCon>,
  isDraft?: boolean,
  ownerValidation?: (data: ServiceCon) => Promise<void>,
) => Promise<DialogResult<ServiceConStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (
    ownerData: any,
    templateDataOverride?: Partial<ServiceCon>,
    isDraft?: boolean,
    ownerValidation?: (data: ServiceCon) => Promise<void>,
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
          <ServiceIssueConsRelationViewPage
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

export const convertServiceIssueConsRelationViewPagePayload = (attributeName: keyof ServiceCon, value: any): any => {
  const dateTimeTypes: string[] = ['created'];
  if (dateTimeTypes.includes(attributeName as string)) {
    return value;
  }
  return value;
};

const ServiceConCon_View_EditDialogContainer = lazy(
  () => import('~/containers/Service/Con/Con_View_Edit/ServiceConCon_View_EditDialogContainer'),
);

export interface ServiceIssueConsRelationViewPageProps {
  ownerData: any;

  templateDataOverride?: Partial<ServiceCon>;
  isDraft?: boolean;
  ownerValidation?: (data: ServiceCon) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceConStored, isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_gKs3kH2fEe2LTNnGda5kaw)/RelationFeatureView
// Name: service::Issue::cons::RelationViewPage
export default function ServiceIssueConsRelationViewPage(props: ServiceIssueConsRelationViewPageProps) {
  const { ownerData, templateDataOverride, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceIssueServiceForConsImpl = useMemo(() => new ServiceIssueServiceForConsImpl(judoAxiosProvider), []);

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
  const [data, setData] = useState<ServiceConStored>({} as ServiceConStored);
  const [validation, setValidation] = useState<Map<keyof ServiceCon, string>>(new Map<keyof ServiceCon, string>());

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceConStored, any>>({} as unknown as Record<keyof ServiceConStored, any>);

  // Callback section
  const storeDiff: (attributeName: keyof ServiceCon, value: any) => void = useCallback(
    (attributeName: keyof ServiceCon, value: any) => {
      payloadDiff.current![attributeName] = convertServiceIssueConsRelationViewPagePayload(attributeName, value);
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

  const getPageQueryCustomizer: () => ServiceConQueryCustomizer = () => ({
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
  const validate: (data: ServiceCon) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceConCon_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_CONS_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceConCon_View_EditDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
    refresh,
    submit,
  );

  // Dialog hooks
  const openServiceConCon_View_EditCreateConArgumentInputForm = useServiceConCon_View_EditCreateConArgumentInputForm();
  const openServiceConCon_View_EditCreateProArgumentInputForm = useServiceConCon_View_EditCreateProArgumentInputForm();
  const openServiceConConsRelationViewPage = useServiceConConsRelationViewPage();
  const openServiceConCreatedByRelationViewPage = useServiceConCreatedByRelationViewPage();
  const openServiceConProsRelationViewPage = useServiceConProsRelationViewPage();
  const openServiceProPro_View_EditCreateConArgumentInputForm = useServiceProPro_View_EditCreateConArgumentInputForm();
  const openServiceProPro_View_EditCreateProArgumentInputForm = useServiceProPro_View_EditCreateProArgumentInputForm();

  // Action section
  const getPageTitle = (data: ServiceCon): string => {
    return t('service.Con.Con_View_Edit', { defaultValue: 'Con View / Edit' });
  };
  const createConArgumentAction = async (isDraft?: boolean, ownerValidation?: (data: any) => Promise<void>) => {
    const { result, data: returnedData } = await openServiceConCon_View_EditCreateConArgumentInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const consCreateConArgumentAction = async (
    target: ServiceConStored,
    templateDataOverride?: Partial<ServiceCon>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceConCon_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const consBulkDeleteAction = async (
    selectedRows: ServiceConStored[],
  ): Promise<DialogResult<Array<ServiceConStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceConStored>({
        dialogTitle: t('service.Con.Con_View_Edit.Arguments.cons.table.cons.BulkDelete', { defaultValue: 'Delete' }),
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
        await serviceIssueServiceForConsImpl.deleteCons(target);
        if (!silentMode) {
          showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
          refreshAction(getPageQueryCustomizer());
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceCon>(error, undefined, target);
      }
    }
  };
  const consOpenPageAction = async (target: ServiceCon | ServiceConStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceConStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceConConsRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const createProArgumentAction = async (isDraft?: boolean, ownerValidation?: (data: any) => Promise<void>) => {
    const { result, data: returnedData } = await openServiceConCon_View_EditCreateProArgumentInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const consCreateProArgumentAction = async (
    target: ServiceConStored,
    templateDataOverride?: Partial<ServiceCon>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceConCon_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const prosBulkDeleteAction = async (
    selectedRows: ServiceProStored[],
  ): Promise<DialogResult<Array<ServiceProStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceProStored>({
        dialogTitle: t('service.Con.Con_View_Edit.Arguments.pros.table.pros.BulkDelete', { defaultValue: 'Delete' }),
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
        await serviceIssueServiceForConsImpl.deletePros(target);
        if (!silentMode) {
          showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
          refreshAction(getPageQueryCustomizer());
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServicePro>(error, undefined, target);
      }
    }
  };
  const prosOpenPageAction = async (target: ServicePro | ServiceProStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceProStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceConProsRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const createdByOpenPageAction = async (target: ServiceServiceUser | ServiceServiceUserStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceServiceUserStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceConCreatedByRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const voteDownForConAction = async () => {
    try {
      setIsLoading(true);
      await serviceIssueServiceForConsImpl.voteDown(data);
      if (customActions?.postVoteDownForConAction) {
        await customActions.postVoteDownForConAction(onClose);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceCon>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const consVoteDownForConAction = async (target?: ServiceConStored) => {
    try {
      setIsLoading(true);
      await serviceIssueServiceForConsImpl.voteDownForCons(target!);
      if (customActions?.postConsVoteDownForConAction) {
        await customActions.postConsVoteDownForConAction(
          target!,

          onClose,
        );
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceCon>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const voteUpForConAction = async () => {
    try {
      setIsLoading(true);
      await serviceIssueServiceForConsImpl.voteUp(data);
      if (customActions?.postVoteUpForConAction) {
        await customActions.postVoteUpForConAction(onClose);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceCon>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const consVoteUpForConAction = async (target?: ServiceConStored) => {
    try {
      setIsLoading(true);
      await serviceIssueServiceForConsImpl.voteUpForCons(target!);
      if (customActions?.postConsVoteUpForConAction) {
        await customActions.postConsVoteUpForConAction(
          target!,

          onClose,
        );
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceCon>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const votesOpenPageAction = async (target: ServiceSimpleVote | ServiceSimpleVoteStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceSimpleVoteStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceConVotesRelationTablePage(((target as ServiceSimpleVoteStored) || data).__signedIdentifier),
      );
      onClose();
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
        await serviceIssueServiceForConsImpl.delete(data);
        showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
        onClose();
      }
    } catch (error) {
      handleError(error, undefined, data);
    }
  };
  const refreshAction = async (
    queryCustomizer: ServiceConQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceConStored>> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const response = await serviceIssueServiceForConsImpl.refresh(ownerData, getPageQueryCustomizer());
      const { data: result } = response;
      setData(result);
      setLatestViewData(result);
      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceConStored, any>;
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
      const { data: res } = await serviceIssueServiceForConsImpl.update(payloadDiff.current);
      if (res) {
        showSuccessSnack(t('judo.action.save.success', { defaultValue: 'Changes saved' }));
        setValidation(new Map<keyof ServiceCon, string>());
        setEditMode(false);
        await actions.refreshAction!(getPageQueryCustomizer());
      }
    } catch (error) {
      handleError<ServiceCon>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const prosCreateConArgumentAction = async (
    target: ServiceProStored,
    templateDataOverride?: Partial<ServicePro>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceProPro_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const prosCreateProArgumentAction = async (
    target: ServiceProStored,
    templateDataOverride?: Partial<ServicePro>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceProPro_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const prosVoteDownForProAction = async (target?: ServiceProStored) => {
    try {
      setIsLoading(true);
      await serviceIssueServiceForConsImpl.voteDownForPros(target!);
      if (customActions?.postProsVoteDownForProAction) {
        await customActions.postProsVoteDownForProAction(
          target!,

          onClose,
        );
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceCon>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const prosVoteUpForProAction = async (target?: ServiceProStored) => {
    try {
      setIsLoading(true);
      await serviceIssueServiceForConsImpl.voteUpForPros(target!);
      if (customActions?.postProsVoteUpForProAction) {
        await customActions.postProsVoteUpForProAction(
          target!,

          onClose,
        );
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceCon>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: ServiceConCon_View_EditDialogActions = {
    getPageTitle,
    createConArgumentAction,
    consCreateConArgumentAction,
    consBulkDeleteAction,
    consFilterAction,
    consDeleteAction,
    consOpenPageAction,
    createProArgumentAction,
    consCreateProArgumentAction,
    prosBulkDeleteAction,
    prosFilterAction,
    prosDeleteAction,
    prosOpenPageAction,
    createdByOpenPageAction,
    voteDownForConAction,
    consVoteDownForConAction,
    voteUpForConAction,
    consVoteUpForConAction,
    votesOpenPageAction,
    backAction,
    cancelAction,
    deleteAction,
    refreshAction,
    updateAction,
    prosCreateConArgumentAction,
    prosCreateProArgumentAction,
    prosVoteDownForProAction,
    prosVoteUpForProAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceConCon_View_EditViewModel = {
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
    <ServiceConCon_View_EditViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_gKs3kH2fEe2LTNnGda5kaw)/RelationFeatureView"
          data-page-name="service::Issue::cons::RelationViewPage"
        />
        <ServiceConCon_View_EditDialogContainer
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
    </ServiceConCon_View_EditViewModelContext.Provider>
  );
}
