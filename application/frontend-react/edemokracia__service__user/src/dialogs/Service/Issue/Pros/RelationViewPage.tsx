//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, lazy, Suspense } from 'react';
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
import { routeToServiceProVotesRelationTablePage } from '~/routes';
import { useServiceConCon_View_EditCreateConArgumentInputForm } from '~/dialogs/Service/Con/Con_View_Edit/CreateConArgument/Input/Form';
import { useServiceConCon_View_EditCreateProArgumentInputForm } from '~/dialogs/Service/Con/Con_View_Edit/CreateProArgument/Input/Form';
import { useServiceProPro_View_EditCreateConArgumentInputForm } from '~/dialogs/Service/Pro/Pro_View_Edit/CreateConArgument/Input/Form';
import { useServiceProPro_View_EditCreateProArgumentInputForm } from '~/dialogs/Service/Pro/Pro_View_Edit/CreateProArgument/Input/Form';
import { useServiceProConsRelationViewPage } from '~/dialogs/Service/Pro/Cons/RelationViewPage';
import { useServiceProCreatedByRelationViewPage } from '~/dialogs/Service/Pro/CreatedBy/RelationViewPage';
import { useServiceProProsRelationViewPage } from '~/dialogs/Service/Pro/Pros/RelationViewPage';
import type { ServiceProPro_View_EditDialogActions } from '~/containers/Service/Pro/Pro_View_Edit/ServiceProPro_View_EditDialogContainer';
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
import { serviceProServiceImpl } from '~/services/data-axios';
export type ServiceProPro_View_EditDialogActionsExtended = ServiceProPro_View_EditDialogActions & {
  postConsVoteDownForConAction?: (
    target: ServiceConStored,

    onClose: () => Promise<void>,
  ) => Promise<void>;
  postConsVoteUpForConAction?: (
    target: ServiceConStored,

    onClose: () => Promise<void>,
  ) => Promise<void>;
  postVoteDownForProAction?: (onClose: () => Promise<void>) => Promise<void>;
  postProsVoteDownForProAction?: (
    target: ServiceProStored,

    onClose: () => Promise<void>,
  ) => Promise<void>;
  postVoteUpForProAction?: (onClose: () => Promise<void>) => Promise<void>;
  postProsVoteUpForProAction?: (
    target: ServiceProStored,

    onClose: () => Promise<void>,
  ) => Promise<void>;
};

export const SERVICE_ISSUE_PROS_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY = 'ServiceProPro_View_EditActionsHook';
export type ServiceProPro_View_EditActionsHook = (
  ownerData: any,
  data: ServiceProStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServicePro, value: any) => void,
) => ServiceProPro_View_EditDialogActionsExtended;

export const useServiceIssueProsRelationViewPage = (): ((
  ownerData: any,
) => Promise<DialogResult<ServiceProStored>>) => {
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
          <ServiceIssueProsRelationViewPage
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

export const convertServiceIssueProsRelationViewPagePayload = (attributeName: keyof ServicePro, value: any): any => {
  const dateTimeTypes: string[] = ['created'];
  if (dateTimeTypes.includes(attributeName as string)) {
    return value;
  }
  return value;
};

const ServiceProPro_View_EditDialogContainer = lazy(
  () => import('~/containers/Service/Pro/Pro_View_Edit/ServiceProPro_View_EditDialogContainer'),
);

export interface ServiceIssueProsRelationViewPageProps {
  ownerData: any;

  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceProStored) => Promise<void>;
}

// XMIID: User/(esm/_7XpxEH2fEe2LTNnGda5kaw)/RelationFeatureView
// Name: service::Issue::pros::RelationViewPage
export default function ServiceIssueProsRelationViewPage(props: ServiceIssueProsRelationViewPageProps) {
  const { ownerData, onClose, onSubmit } = props;

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
  const [data, setData] = useState<ServiceProStored>({} as ServiceProStored);
  const [validation, setValidation] = useState<Map<keyof ServicePro, string>>(new Map<keyof ServicePro, string>());

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceProStored, any>>({} as unknown as Record<keyof ServiceProStored, any>);

  // Callback section
  const storeDiff: (attributeName: keyof ServicePro, value: any) => void = useCallback(
    (attributeName: keyof ServicePro, value: any) => {
      payloadDiff.current![attributeName] = convertServiceIssueProsRelationViewPagePayload(attributeName, value);
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

  const pageQueryCustomizer: ServiceProQueryCustomizer = {
    _mask:
      '{created,description,downVotes,title,upVotes,cons{title,upVotes,downVotes},pros{title,upVotes,downVotes},createdBy{representation}}',
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceProPro_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_PROS_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceProPro_View_EditDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    storeDiff,
  );

  // Dialog hooks
  const openServiceConCon_View_EditCreateConArgumentInputForm = useServiceConCon_View_EditCreateConArgumentInputForm();
  const openServiceConCon_View_EditCreateProArgumentInputForm = useServiceConCon_View_EditCreateProArgumentInputForm();
  const openServiceProPro_View_EditCreateConArgumentInputForm = useServiceProPro_View_EditCreateConArgumentInputForm();
  const openServiceProPro_View_EditCreateProArgumentInputForm = useServiceProPro_View_EditCreateProArgumentInputForm();
  const openServiceProConsRelationViewPage = useServiceProConsRelationViewPage();
  const openServiceProCreatedByRelationViewPage = useServiceProCreatedByRelationViewPage();
  const openServiceProProsRelationViewPage = useServiceProProsRelationViewPage();

  // Calculated section
  const title: string = t('service.Pro.Pro_View_Edit', { defaultValue: 'Pro View / Edit' });

  // Action section
  const backAction = async () => {
    onClose();
  };
  const refreshAction = async (queryCustomizer: ServiceProQueryCustomizer): Promise<ServiceProStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceProServiceImpl.refresh(ownerData, pageQueryCustomizer);
      setData(result);
      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceProStored, any>;
      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const cancelAction = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await refreshAction(processQueryCustomizer(pageQueryCustomizer));
  };
  const updateAction = async () => {
    setIsLoading(true);
    try {
      const res = await serviceProServiceImpl.update(payloadDiff.current);
      if (res) {
        showSuccessSnack(t('judo.action.save.success', { defaultValue: 'Changes saved' }));
        setValidation(new Map<keyof ServicePro, string>());
        await actions.refreshAction!(pageQueryCustomizer);
        setEditMode(false);
      }
    } catch (error) {
      handleError<ServicePro>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
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
        await serviceProServiceImpl.delete(data);
        showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
        onClose();
      }
    } catch (error) {
      handleError(error, undefined, data);
    }
  };
  const createConArgumentAction = async () => {
    const { result, data: returnedData } = await openServiceProPro_View_EditCreateConArgumentInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const createProArgumentAction = async () => {
    const { result, data: returnedData } = await openServiceProPro_View_EditCreateProArgumentInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const voteUpForProAction = async () => {
    try {
      setIsLoading(true);
      await serviceProServiceImpl.voteUp(data);
      if (customActions?.postVoteUpForProAction) {
        await customActions.postVoteUpForProAction(
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
      handleError<ServicePro>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const voteDownForProAction = async () => {
    try {
      setIsLoading(true);
      await serviceProServiceImpl.voteDown(data);
      if (customActions?.postVoteDownForProAction) {
        await customActions.postVoteDownForProAction(
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
      handleError<ServicePro>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const votesOpenPageAction = async (target?: ServiceSimpleVoteStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceProVotesRelationTablePage((target || data).__signedIdentifier));
    onClose();
  };
  const createdByOpenPageAction = async (target?: ServiceServiceUserStored) => {
    await openServiceProCreatedByRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const consOpenPageAction = async (target?: ServiceConStored) => {
    await openServiceProConsRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
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
        await serviceProServiceImpl.deleteCons(target);
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
  const consBulkDeleteAction = async (
    selectedRows: ServiceConStored[],
  ): Promise<DialogResult<Array<ServiceConStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceConStored>({
        dialogTitle: t('service.Pro.Pro_View_Edit.Arguments.cons.table.cons.BulkDelete', { defaultValue: 'Delete' }),
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
  const consVoteDownForConAction = async (target?: ServiceConStored) => {
    try {
      setIsLoading(true);
      await serviceProServiceImpl.voteDownForCons(target!);
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
      handleError<ServicePro>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const consVoteUpForConAction = async (target?: ServiceConStored) => {
    try {
      setIsLoading(true);
      await serviceProServiceImpl.voteUpForCons(target!);
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
      handleError<ServicePro>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const consCreateProArgumentAction = async (target: ServiceConStored) => {
    const { result, data: returnedData } = await openServiceConCon_View_EditCreateProArgumentInputForm(target);
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
  const prosOpenPageAction = async (target?: ServiceProStored) => {
    await openServiceProProsRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
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
        await serviceProServiceImpl.deletePros(target);
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
  const prosBulkDeleteAction = async (
    selectedRows: ServiceProStored[],
  ): Promise<DialogResult<Array<ServiceProStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceProStored>({
        dialogTitle: t('service.Pro.Pro_View_Edit.Arguments.pros.table.pros.BulkDelete', { defaultValue: 'Delete' }),
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
  const prosVoteUpForProAction = async (target?: ServiceProStored) => {
    try {
      setIsLoading(true);
      await serviceProServiceImpl.voteUpForPros(target!);
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
      handleError<ServicePro>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const prosVoteDownForProAction = async (target?: ServiceProStored) => {
    try {
      setIsLoading(true);
      await serviceProServiceImpl.voteDownForPros(target!);
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
      handleError<ServicePro>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: ServiceProPro_View_EditDialogActions = {
    backAction,
    refreshAction,
    cancelAction,
    updateAction,
    deleteAction,
    createConArgumentAction,
    createProArgumentAction,
    voteUpForProAction,
    voteDownForProAction,
    votesOpenPageAction,
    createdByOpenPageAction,
    consOpenPageAction,
    consFilterAction,
    consDeleteAction,
    consBulkDeleteAction,
    consVoteDownForConAction,
    consVoteUpForConAction,
    consCreateProArgumentAction,
    consCreateConArgumentAction,
    prosOpenPageAction,
    prosFilterAction,
    prosDeleteAction,
    prosBulkDeleteAction,
    prosCreateConArgumentAction,
    prosCreateProArgumentAction,
    prosVoteUpForProAction,
    prosVoteDownForProAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    actions.refreshAction!(pageQueryCustomizer);
  }, []);

  return (
    <div
      id="User/(esm/_7XpxEH2fEe2LTNnGda5kaw)/RelationFeatureView"
      data-page-name="service::Issue::pros::RelationViewPage"
    >
      <Suspense>
        <ServiceProPro_View_EditDialogContainer
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
    </div>
  );
}
