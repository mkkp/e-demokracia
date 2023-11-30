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
import type { GridFilterModel } from '@mui/x-data-grid';
import type { Filter, FilterOption } from '~/components-api';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import { useSnacks, useCRUDDialog } from '~/hooks';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';
import { routeToServiceConVotesRelationTablePage } from '~/routes';
import { useServiceConCon_View_EditCreateConArgumentInputForm } from '~/dialogs/Service/Con/Con_View_Edit/CreateConArgument/Input/Form';
import { useServiceConCon_View_EditCreateProArgumentInputForm } from '~/dialogs/Service/Con/Con_View_Edit/CreateProArgument/Input/Form';
import { useServiceConConsRelationViewPage } from '~/dialogs/Service/Con/Cons/RelationViewPage';
import { useServiceConCreatedByRelationViewPage } from '~/dialogs/Service/Con/CreatedBy/RelationViewPage';
import { useServiceConProsRelationViewPage } from '~/dialogs/Service/Con/Pros/RelationViewPage';
import { useServiceProPro_View_EditCreateConArgumentInputForm } from '~/dialogs/Service/Pro/Pro_View_Edit/CreateConArgument/Input/Form';
import { useServiceProPro_View_EditCreateProArgumentInputForm } from '~/dialogs/Service/Pro/Pro_View_Edit/CreateProArgument/Input/Form';
import type { ServiceConCon_View_EditDialogActions } from '~/containers/Service/Con/Con_View_Edit/ServiceConCon_View_EditDialogContainer';
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
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceConServiceImpl } from '~/services/data-axios/ServiceConServiceImpl';

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

export const SERVICE_ISSUE_CONS_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY = 'ServiceConCon_View_EditActionsHook';
export type ServiceConCon_View_EditActionsHook = (
  ownerData: any,
  data: ServiceConStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceCon, value: any) => void,
) => ServiceConCon_View_EditDialogActionsExtended;

export const useServiceIssueConsRelationViewPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceConStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any) =>
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

  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceConStored) => Promise<void>;
}

// XMIID: User/(esm/_gKs3kH2fEe2LTNnGda5kaw)/RelationFeatureView
// Name: service::Issue::cons::RelationViewPage
export default function ServiceIssueConsRelationViewPage(props: ServiceIssueConsRelationViewPageProps) {
  const { ownerData, onClose, onSubmit } = props;

  // Services
  const serviceConServiceImpl = useMemo(() => new ServiceConServiceImpl(judoAxiosProvider), []);

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

  const pageQueryCustomizer: ServiceConQueryCustomizer = {
    _mask:
      '{created,description,downVotes,title,upVotes,cons{title,upVotes,downVotes},pros{title,upVotes,downVotes},createdBy{representation}}',
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceConCon_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_CONS_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceConCon_View_EditDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
  );

  // Dialog hooks
  const openServiceConCon_View_EditCreateConArgumentInputForm = useServiceConCon_View_EditCreateConArgumentInputForm();
  const openServiceConCon_View_EditCreateProArgumentInputForm = useServiceConCon_View_EditCreateProArgumentInputForm();
  const openServiceConConsRelationViewPage = useServiceConConsRelationViewPage();
  const openServiceConCreatedByRelationViewPage = useServiceConCreatedByRelationViewPage();
  const openServiceConProsRelationViewPage = useServiceConProsRelationViewPage();
  const openServiceProPro_View_EditCreateConArgumentInputForm = useServiceProPro_View_EditCreateConArgumentInputForm();
  const openServiceProPro_View_EditCreateProArgumentInputForm = useServiceProPro_View_EditCreateProArgumentInputForm();

  // Calculated section
  const title: string = t('service.Con.Con_View_Edit', { defaultValue: 'Con View / Edit' });

  // Private actions
  const submit = async () => {
    await updateAction();
  };

  // Action section
  const createConArgumentAction = async () => {
    const { result, data: returnedData } = await openServiceConCon_View_EditCreateConArgumentInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const consCreateConArgumentAction = async (target: ServiceConStored) => {
    const { result, data: returnedData } = await openServiceConCon_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
              await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
        await serviceConServiceImpl.deleteCons(target);
        if (!silentMode) {
          showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
          refreshAction(pageQueryCustomizer);
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceCon>(error, undefined, target);
      }
    }
  };
  const consOpenPageAction = async (target?: ServiceConStored) => {
    await openServiceConConsRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const createProArgumentAction = async () => {
    const { result, data: returnedData } = await openServiceConCon_View_EditCreateProArgumentInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const consCreateProArgumentAction = async (target: ServiceConStored) => {
    const { result, data: returnedData } = await openServiceConCon_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
              await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
        await serviceConServiceImpl.deletePros(target);
        if (!silentMode) {
          showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
          refreshAction(pageQueryCustomizer);
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServicePro>(error, undefined, target);
      }
    }
  };
  const prosOpenPageAction = async (target?: ServiceProStored) => {
    await openServiceConProsRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const createdByOpenPageAction = async (target?: ServiceServiceUserStored) => {
    await openServiceConCreatedByRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const voteDownForConAction = async () => {
    try {
      setIsLoading(true);
      await serviceConServiceImpl.voteDown(data);
      if (customActions?.postVoteDownForConAction) {
        await customActions.postVoteDownForConAction(
          onClose,
        );
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
      await serviceConServiceImpl.voteDownForCons(target!);
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
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
      await serviceConServiceImpl.voteUp(data);
      if (customActions?.postVoteUpForConAction) {
        await customActions.postVoteUpForConAction(
          onClose,
        );
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
      await serviceConServiceImpl.voteUpForCons(target!);
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
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceCon>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const votesOpenPageAction = async (target?: ServiceSimpleVoteStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceConVotesRelationTablePage((target || data).__signedIdentifier));
    onClose();
  };
  const backAction = async () => {
    onClose();
  };
  const cancelAction = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await refreshAction(processQueryCustomizer(pageQueryCustomizer));
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
        await serviceConServiceImpl.delete(data);
        showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
        onClose();
      }
    } catch (error) {
      handleError(error, undefined, data);
    }
  };
  const refreshAction = async (queryCustomizer: ServiceConQueryCustomizer): Promise<ServiceConStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceConServiceImpl.refresh(ownerData, pageQueryCustomizer);
      setData(result);
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
      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const updateAction = async () => {
    setIsLoading(true);
    try {
      const res = await serviceConServiceImpl.update(payloadDiff.current);
      if (res) {
        showSuccessSnack(t('judo.action.save.success', { defaultValue: 'Changes saved' }));
        setValidation(new Map<keyof ServiceCon, string>());
        await actions.refreshAction!(pageQueryCustomizer);
        setEditMode(false);
      }
    } catch (error) {
      handleError<ServiceCon>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const prosCreateConArgumentAction = async (target: ServiceProStored) => {
    const { result, data: returnedData } = await openServiceProPro_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const prosCreateProArgumentAction = async (target: ServiceProStored) => {
    const { result, data: returnedData } = await openServiceProPro_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const prosVoteDownForProAction = async (target?: ServiceProStored) => {
    try {
      setIsLoading(true);
      await serviceConServiceImpl.voteDownForPros(target!);
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
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
      await serviceConServiceImpl.voteUpForPros(target!);
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
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceCon>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: ServiceConCon_View_EditDialogActions = {
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

  // Effect section
  useEffect(() => {
    actions.refreshAction!(pageQueryCustomizer);
  }, []);

  return (
    <div
      id="User/(esm/_gKs3kH2fEe2LTNnGda5kaw)/RelationFeatureView"
      data-page-name="service::Issue::cons::RelationViewPage"
    >
      <Suspense>
        <ServiceConCon_View_EditDialogContainer
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
