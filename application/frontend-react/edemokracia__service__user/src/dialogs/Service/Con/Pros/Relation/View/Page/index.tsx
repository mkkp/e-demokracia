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
import { routeToServiceProVotesRelationTablePage } from '~/routes';
import { useServiceProPro_View_EditCreateConArgumentInputForm } from '~/dialogs/Service/Pro/Pro_View_Edit/CreateConArgument/Input/Form';
import { useServiceProPro_View_EditCreateProArgumentInputForm } from '~/dialogs/Service/Pro/Pro_View_Edit/CreateProArgument/Input/Form';
import { useServiceProConsRelationViewPage } from '~/dialogs/Service/Pro/Cons/Relation/View/Page';
import { useServiceProCreatedByRelationViewPage } from '~/dialogs/Service/Pro/CreatedBy/Relation/View/Page';
import { useServiceProProsRelationViewPage } from '~/dialogs/Service/Pro/Pros/Relation/View/Page';
import type { ServiceProPro_View_EditDialogActions } from '~/containers/Service/Pro/Pro_View_Edit/ServiceProPro_View_EditDialogContainer';
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
import { serviceConServiceForProsImpl } from '~/services/data-axios';

export const useServiceConProsRelationViewPage = (): ((ownerData: any) => Promise<DialogResult<ServiceProStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any) =>
    new Promise((resolve) => {
      createDialog({
        fullWidth: true,
        maxWidth: 'xl',
        onClose: (event: object, reason: string) => {
          if (reason !== 'backdropClick') {
            closeDialog();
            resolve({
              result: 'close',
            });
          }
        },
        children: (
          <ServiceConProsRelationViewPage
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

export const convertServiceConProsRelationViewPagePayload = (attributeName: keyof ServicePro, value: any): any => {
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

const ServiceProPro_View_EditDialogContainer = lazy(
  () => import('~/containers/Service/Pro/Pro_View_Edit/ServiceProPro_View_EditDialogContainer'),
);

export interface ServiceConProsRelationViewPageProps {
  ownerData: any;

  onClose: () => void;
  onSubmit: (result?: ServiceProStored) => void;
}

// Name: service::Con::pros::Relation::View::Page
export default function ServiceConProsRelationViewPage(props: ServiceConProsRelationViewPageProps) {
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
  const [data, setData] = useState<ServiceProStored>({} as ServiceProStored);
  const [validation, setValidation] = useState<Map<keyof ServicePro, string>>(new Map<keyof ServicePro, string>());

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceProStored, any>>({} as unknown as Record<keyof ServiceProStored, any>);

  // Callback section
  const storeDiff: (attributeName: keyof ServicePro, value: any) => void = useCallback(
    (attributeName: keyof ServicePro, value: any) => {
      payloadDiff.current![attributeName] = convertServiceConProsRelationViewPagePayload(attributeName, value);
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
      '{created,upVotes,description,title,downVotes,cons{title,upVotes,downVotes},pros{title,upVotes,downVotes},createdBy{representation}}',
  };

  // Dialog hooks
  const openServiceProPro_View_EditCreateConArgumentInputForm = useServiceProPro_View_EditCreateConArgumentInputForm();
  const openServiceProPro_View_EditCreateProArgumentInputForm = useServiceProPro_View_EditCreateProArgumentInputForm();
  const openServiceProConsRelationViewPage = useServiceProConsRelationViewPage();
  const openServiceProCreatedByRelationViewPage = useServiceProCreatedByRelationViewPage();
  const openServiceProProsRelationViewPage = useServiceProProsRelationViewPage();

  // Calculated section
  const title: string = t('Service.Pro.Pro_View_Edit', { defaultValue: 'Pro View / Edit' });

  // Action section
  const serviceProPro_View_EditBack = async () => {
    onClose();
  };
  const serviceProPro_View_EditRefresh = async (
    queryCustomizer: ServiceProQueryCustomizer,
  ): Promise<ServiceProStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceConServiceForProsImpl.refresh(ownerData, pageQueryCustomizer);

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
  const serviceProPro_View_EditCancel = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await serviceProPro_View_EditRefresh(processQueryCustomizer(pageQueryCustomizer));
  };
  const serviceProPro_View_EditUpdate = async () => {
    setIsLoading(true);

    try {
      const res = await serviceConServiceForProsImpl.update(payloadDiff.current);

      if (res) {
        enqueueSnackbar(t('judo.action.save.success', { defaultValue: 'Changes saved' }), {
          variant: 'success',
          ...toastConfig.success,
        });
        setValidation(new Map<keyof ServicePro, string>());
        await actions.serviceProPro_View_EditRefresh!(pageQueryCustomizer);
        setEditMode(false);
      }
    } catch (error) {
      handleError<ServicePro>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const serviceProPro_View_EditDelete = async () => {
    try {
      const confirmed = await openConfirmDialog(
        'row-delete-action',
        t('judo.modal.confirm.confirm-delete', {
          defaultValue: 'Are you sure you would like to delete the selected element?',
        }),
        t('judo.modal.confirm.confirm-title', { defaultValue: 'Confirm action' }),
      );
      if (confirmed) {
        await serviceConServiceForProsImpl.delete(data);

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
  const serviceProPro_View_EditProVoteUp = async () => {
    try {
      setIsLoading(true);
      await serviceConServiceForProsImpl.voteUp(data);

      enqueueSnackbar(
        t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        {
          variant: 'success',
          ...toastConfig.success,
        },
      );

      if (!editMode) {
        await actions.serviceProPro_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
      }
    } catch (error) {
      handleError<ServicePro>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const serviceProPro_View_EditArgumentsConsActionsCreateConArgumentOpenForm = async () => {
    const { result, data: returnedData } = await openServiceProPro_View_EditCreateConArgumentInputForm(data);
    if (!editMode) {
      await actions.serviceProPro_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const serviceProPro_View_EditArgumentsProsActionsCreateProArgumentOpenForm = async () => {
    const { result, data: returnedData } = await openServiceProPro_View_EditCreateProArgumentInputForm(data);
    if (!editMode) {
      await actions.serviceProPro_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const serviceProPro_View_EditProVoteDown = async () => {
    try {
      setIsLoading(true);
      await serviceConServiceForProsImpl.voteDown(data);

      enqueueSnackbar(
        t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        {
          variant: 'success',
          ...toastConfig.success,
        },
      );

      if (!editMode) {
        await actions.serviceProPro_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
      }
    } catch (error) {
      handleError<ServicePro>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const serviceProPro_View_EditProCreatedByView = async (target?: ServiceServiceUserStored) => {
    await openServiceProCreatedByRelationViewPage(target!);

    if (!editMode) {
      await actions.serviceProPro_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const serviceProPro_View_EditProVotesOpenPage = async (target?: ServiceSimpleVoteStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceProVotesRelationTablePage((target || data).__signedIdentifier));
    onClose();
  };
  const serviceProPro_View_EditArgumentsProsTableProsView = async (target?: ServiceProStored) => {
    await openServiceProProsRelationViewPage(target!);

    if (!editMode) {
      await actions.serviceProPro_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const serviceProPro_View_EditArgumentsProsTableProsFilter = async (
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
  const serviceProPro_View_EditArgumentsProsTableProsDelete = async (
    target: ServiceProStored,
    silentMode?: boolean,
  ) => {
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
        await serviceConServiceForProsImpl.deletePros(target);

        if (!silentMode) {
          enqueueSnackbar(t('judo.action.delete.success', { defaultValue: 'Delete successful' }), {
            variant: 'success',
            ...toastConfig.success,
          });

          serviceProPro_View_EditRefresh(pageQueryCustomizer);
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServicePro>(error, undefined, target);
      }
    }
  };
  const serviceProPro_View_EditArgumentsProsTableProsBulkDelete = async (
    selectedRows: ServiceProStored[],
  ): Promise<DialogResult<Array<ServiceProStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceProStored>({
        dialogTitle: t('TMP', { defaultValue: 'Delete' }),
        itemTitleFn: (item) => item.title!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.serviceProPro_View_EditArgumentsProsTableProsDelete) {
              await actions.serviceProPro_View_EditArgumentsProsTableProsDelete!(item, true);
            }
            successHandler();
          } catch (error) {
            errorHandler(error);
          }
        },
        onClose: async (needsRefresh) => {
          if (needsRefresh) {
            if (actions.serviceProPro_View_EditRefresh) {
              await actions.serviceProPro_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
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
  const serviceProPro_View_EditArgumentsConsTableConsView = async (target?: ServiceConStored) => {
    await openServiceProConsRelationViewPage(target!);

    if (!editMode) {
      await actions.serviceProPro_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const serviceProPro_View_EditArgumentsConsTableConsFilter = async (
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
  const serviceProPro_View_EditArgumentsConsTableConsDelete = async (
    target: ServiceConStored,
    silentMode?: boolean,
  ) => {
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
        await serviceConServiceForProsImpl.deleteCons(target);

        if (!silentMode) {
          enqueueSnackbar(t('judo.action.delete.success', { defaultValue: 'Delete successful' }), {
            variant: 'success',
            ...toastConfig.success,
          });

          serviceProPro_View_EditRefresh(pageQueryCustomizer);
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceCon>(error, undefined, target);
      }
    }
  };
  const serviceProPro_View_EditArgumentsConsTableConsBulkDelete = async (
    selectedRows: ServiceConStored[],
  ): Promise<DialogResult<Array<ServiceConStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceConStored>({
        dialogTitle: t('TMP', { defaultValue: 'Delete' }),
        itemTitleFn: (item) => item.title!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.serviceProPro_View_EditArgumentsConsTableConsDelete) {
              await actions.serviceProPro_View_EditArgumentsConsTableConsDelete!(item, true);
            }
            successHandler();
          } catch (error) {
            errorHandler(error);
          }
        },
        onClose: async (needsRefresh) => {
          if (needsRefresh) {
            if (actions.serviceProPro_View_EditRefresh) {
              await actions.serviceProPro_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
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

  const actions: ServiceProPro_View_EditDialogActions = {
    serviceProPro_View_EditBack,
    serviceProPro_View_EditRefresh,
    serviceProPro_View_EditCancel,
    serviceProPro_View_EditUpdate,
    serviceProPro_View_EditDelete,
    serviceProPro_View_EditProVoteUp,
    serviceProPro_View_EditArgumentsConsActionsCreateConArgumentOpenForm,
    serviceProPro_View_EditArgumentsProsActionsCreateProArgumentOpenForm,
    serviceProPro_View_EditProVoteDown,
    serviceProPro_View_EditProCreatedByView,
    serviceProPro_View_EditProVotesOpenPage,
    serviceProPro_View_EditArgumentsProsTableProsView,
    serviceProPro_View_EditArgumentsProsTableProsFilter,
    serviceProPro_View_EditArgumentsProsTableProsDelete,
    serviceProPro_View_EditArgumentsProsTableProsBulkDelete,
    serviceProPro_View_EditArgumentsConsTableConsView,
    serviceProPro_View_EditArgumentsConsTableConsFilter,
    serviceProPro_View_EditArgumentsConsTableConsDelete,
    serviceProPro_View_EditArgumentsConsTableConsBulkDelete,
  };

  // Effect section
  useEffect(() => {
    actions.serviceProPro_View_EditRefresh!(pageQueryCustomizer);
  }, []);

  return (
    <>
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
    </>
  );
}
