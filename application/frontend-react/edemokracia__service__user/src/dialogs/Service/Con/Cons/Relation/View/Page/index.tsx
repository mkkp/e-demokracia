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
import { routeToServiceConVotesRelationTablePage } from '~/routes';
import { useServiceConCon_View_EditCreateConArgumentInputForm } from '~/dialogs/Service/Con/Con_View_Edit/CreateConArgument/Input/Form';
import { useServiceConCon_View_EditCreateProArgumentInputForm } from '~/dialogs/Service/Con/Con_View_Edit/CreateProArgument/Input/Form';
import { useServiceConCreatedByRelationViewPage } from '~/dialogs/Service/Con/CreatedBy/Relation/View/Page';
import { useServiceConProsRelationViewPage } from '~/dialogs/Service/Con/Pros/Relation/View/Page';
import type { ServiceConCon_View_EditDialogActions } from '~/containers/Service/Con/Con_View_Edit/ServiceConCon_View_EditDialogContainer';
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
import { serviceConServiceForConsImpl } from '~/services/data-axios';

export const useServiceConConsRelationViewPage = (): ((ownerData: any) => Promise<DialogResult<ServiceConStored>>) => {
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
          <ServiceConConsRelationViewPage
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

export const convertServiceConConsRelationViewPagePayload = (attributeName: keyof ServiceCon, value: any): any => {
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

const ServiceConCon_View_EditDialogContainer = lazy(
  () => import('~/containers/Service/Con/Con_View_Edit/ServiceConCon_View_EditDialogContainer'),
);

export interface ServiceConConsRelationViewPageProps {
  ownerData: any;

  onClose: () => void;
  onSubmit: (result?: ServiceConStored) => void;
}

// Name: service::Con::cons::Relation::View::Page
export default function ServiceConConsRelationViewPage(props: ServiceConConsRelationViewPageProps) {
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
  const [data, setData] = useState<ServiceConStored>({} as ServiceConStored);
  const [validation, setValidation] = useState<Map<keyof ServiceCon, string>>(new Map<keyof ServiceCon, string>());

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceConStored, any>>({} as unknown as Record<keyof ServiceConStored, any>);

  // Callback section
  const storeDiff: (attributeName: keyof ServiceCon, value: any) => void = useCallback(
    (attributeName: keyof ServiceCon, value: any) => {
      payloadDiff.current![attributeName] = convertServiceConConsRelationViewPagePayload(attributeName, value);
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
      '{created,description,upVotes,title,downVotes,cons{title,upVotes,downVotes},pros{title,upVotes,downVotes},createdBy{representation}}',
  };

  // Dialog hooks
  const openServiceConCon_View_EditCreateConArgumentInputForm = useServiceConCon_View_EditCreateConArgumentInputForm();
  const openServiceConCon_View_EditCreateProArgumentInputForm = useServiceConCon_View_EditCreateProArgumentInputForm();
  const openServiceConConsRelationViewPage = useServiceConConsRelationViewPage();
  const openServiceConCreatedByRelationViewPage = useServiceConCreatedByRelationViewPage();
  const openServiceConProsRelationViewPage = useServiceConProsRelationViewPage();

  // Calculated section
  const title: string = t('Service.Con.Con_View_Edit', { defaultValue: 'Con View / Edit' });

  // Action section
  const serviceConCon_View_EditBack = async () => {
    onClose();
  };
  const serviceConCon_View_EditRefresh = async (
    queryCustomizer: ServiceConQueryCustomizer,
  ): Promise<ServiceConStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceConServiceForConsImpl.refresh(ownerData, pageQueryCustomizer);

      setData(result);

      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceConStored, any>;

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const serviceConCon_View_EditCancel = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await serviceConCon_View_EditRefresh(processQueryCustomizer(pageQueryCustomizer));
  };
  const serviceConCon_View_EditUpdate = async () => {
    setIsLoading(true);

    try {
      const res = await serviceConServiceForConsImpl.update(payloadDiff.current);

      if (res) {
        enqueueSnackbar(t('judo.action.save.success', { defaultValue: 'Changes saved' }), {
          variant: 'success',
          ...toastConfig.success,
        });
        setValidation(new Map<keyof ServiceCon, string>());
        await actions.serviceConCon_View_EditRefresh!(pageQueryCustomizer);
        setEditMode(false);
      }
    } catch (error) {
      handleError<ServiceCon>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const serviceConCon_View_EditDelete = async () => {
    try {
      const confirmed = await openConfirmDialog(
        'row-delete-action',
        t('judo.modal.confirm.confirm-delete', {
          defaultValue: 'Are you sure you would like to delete the selected element?',
        }),
        t('judo.modal.confirm.confirm-title', { defaultValue: 'Confirm action' }),
      );
      if (confirmed) {
        await serviceConServiceForConsImpl.delete(data);

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
  const serviceConCon_View_EditArgumentsConsActionsCreateConArgumentOpenForm = async () => {
    const { result, data: returnedData } = await openServiceConCon_View_EditCreateConArgumentInputForm(data);
    if (!editMode) {
      await actions.serviceConCon_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const serviceConCon_View_EditConVoteDown = async () => {
    try {
      setIsLoading(true);
      await serviceConServiceForConsImpl.voteDown(data);

      enqueueSnackbar(
        t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        {
          variant: 'success',
          ...toastConfig.success,
        },
      );

      if (!editMode) {
        await actions.serviceConCon_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
      }
    } catch (error) {
      handleError<ServiceCon>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const serviceConCon_View_EditConVoteUp = async () => {
    try {
      setIsLoading(true);
      await serviceConServiceForConsImpl.voteUp(data);

      enqueueSnackbar(
        t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        {
          variant: 'success',
          ...toastConfig.success,
        },
      );

      if (!editMode) {
        await actions.serviceConCon_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
      }
    } catch (error) {
      handleError<ServiceCon>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const serviceConCon_View_EditArgumentsProsActionsCreateProArgumentOpenForm = async () => {
    const { result, data: returnedData } = await openServiceConCon_View_EditCreateProArgumentInputForm(data);
    if (!editMode) {
      await actions.serviceConCon_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const serviceConCon_View_EditConCreatedByView = async (target?: ServiceServiceUserStored) => {
    await openServiceConCreatedByRelationViewPage(target!);

    if (!editMode) {
      await actions.serviceConCon_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const serviceConCon_View_EditConVotesOpenPage = async (target?: ServiceSimpleVoteStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceConVotesRelationTablePage((target || data).__signedIdentifier));
    onClose();
  };
  const serviceConCon_View_EditArgumentsProsTableProsView = async (target?: ServiceProStored) => {
    await openServiceConProsRelationViewPage(target!);

    if (!editMode) {
      await actions.serviceConCon_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const serviceConCon_View_EditArgumentsProsTableProsFilter = async (
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
  const serviceConCon_View_EditArgumentsProsTableProsDelete = async (
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
        await serviceConServiceForConsImpl.deletePros(target);

        if (!silentMode) {
          enqueueSnackbar(t('judo.action.delete.success', { defaultValue: 'Delete successful' }), {
            variant: 'success',
            ...toastConfig.success,
          });

          serviceConCon_View_EditRefresh(pageQueryCustomizer);
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServicePro>(error, undefined, target);
      }
    }
  };
  const serviceConCon_View_EditArgumentsProsTableProsBulkDelete = async (
    selectedRows: ServiceProStored[],
  ): Promise<DialogResult<Array<ServiceProStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceProStored>({
        dialogTitle: t('TMP', { defaultValue: 'Delete' }),
        itemTitleFn: (item) => item.title!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.serviceConCon_View_EditArgumentsProsTableProsDelete) {
              await actions.serviceConCon_View_EditArgumentsProsTableProsDelete!(item, true);
            }
            successHandler();
          } catch (error) {
            errorHandler(error);
          }
        },
        onClose: async (needsRefresh) => {
          if (needsRefresh) {
            if (actions.serviceConCon_View_EditRefresh) {
              await actions.serviceConCon_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
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
  const serviceConCon_View_EditArgumentsConsTableConsView = async (target?: ServiceConStored) => {
    await openServiceConConsRelationViewPage(target!);

    if (!editMode) {
      await actions.serviceConCon_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const serviceConCon_View_EditArgumentsConsTableConsFilter = async (
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
  const serviceConCon_View_EditArgumentsConsTableConsDelete = async (
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
        await serviceConServiceForConsImpl.deleteCons(target);

        if (!silentMode) {
          enqueueSnackbar(t('judo.action.delete.success', { defaultValue: 'Delete successful' }), {
            variant: 'success',
            ...toastConfig.success,
          });

          serviceConCon_View_EditRefresh(pageQueryCustomizer);
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceCon>(error, undefined, target);
      }
    }
  };
  const serviceConCon_View_EditArgumentsConsTableConsBulkDelete = async (
    selectedRows: ServiceConStored[],
  ): Promise<DialogResult<Array<ServiceConStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceConStored>({
        dialogTitle: t('TMP', { defaultValue: 'Delete' }),
        itemTitleFn: (item) => item.title!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.serviceConCon_View_EditArgumentsConsTableConsDelete) {
              await actions.serviceConCon_View_EditArgumentsConsTableConsDelete!(item, true);
            }
            successHandler();
          } catch (error) {
            errorHandler(error);
          }
        },
        onClose: async (needsRefresh) => {
          if (needsRefresh) {
            if (actions.serviceConCon_View_EditRefresh) {
              await actions.serviceConCon_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
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

  const actions: ServiceConCon_View_EditDialogActions = {
    serviceConCon_View_EditBack,
    serviceConCon_View_EditRefresh,
    serviceConCon_View_EditCancel,
    serviceConCon_View_EditUpdate,
    serviceConCon_View_EditDelete,
    serviceConCon_View_EditArgumentsConsActionsCreateConArgumentOpenForm,
    serviceConCon_View_EditConVoteDown,
    serviceConCon_View_EditConVoteUp,
    serviceConCon_View_EditArgumentsProsActionsCreateProArgumentOpenForm,
    serviceConCon_View_EditConCreatedByView,
    serviceConCon_View_EditConVotesOpenPage,
    serviceConCon_View_EditArgumentsProsTableProsView,
    serviceConCon_View_EditArgumentsProsTableProsFilter,
    serviceConCon_View_EditArgumentsProsTableProsDelete,
    serviceConCon_View_EditArgumentsProsTableProsBulkDelete,
    serviceConCon_View_EditArgumentsConsTableConsView,
    serviceConCon_View_EditArgumentsConsTableConsFilter,
    serviceConCon_View_EditArgumentsConsTableConsDelete,
    serviceConCon_View_EditArgumentsConsTableConsBulkDelete,
  };

  // Effect section
  useEffect(() => {
    actions.serviceConCon_View_EditRefresh!(pageQueryCustomizer);
  }, []);

  return (
    <>
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
        />
      </Suspense>
    </>
  );
}
