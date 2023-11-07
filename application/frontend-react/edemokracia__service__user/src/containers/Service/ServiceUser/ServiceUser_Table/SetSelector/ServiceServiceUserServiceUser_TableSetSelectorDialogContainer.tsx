//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.pageContainers
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'DialogContainer.tsx'
// Template name: actor/src/containers/dialog.tsx
// Template file: actor/src/containers/dialog.tsx.hbs

import { lazy, Suspense } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { Grid, Button, DialogTitle, IconButton, DialogContent, DialogActions } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation, MdiIcon, PageHeader } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import type { ServiceServiceUserServiceUser_TableSetSelectorActionDefinitions } from './ServiceServiceUserServiceUser_TableSetSelector';
import type {
  ServiceServiceUser,
  ServiceServiceUserStored,
  ServiceServiceUserQueryCustomizer,
} from '~/services/data-api';

const ServiceServiceUserServiceUser_TableSetSelector = lazy(
  () =>
    import(
      '~/containers/Service/ServiceUser/ServiceUser_Table/SetSelector/ServiceServiceUserServiceUser_TableSetSelector'
    ),
);

export interface ServiceServiceUserServiceUser_TableSetSelectorDialogActions
  extends ServiceServiceUserServiceUser_TableSetSelectorActionDefinitions {
  serviceServiceUserServiceUser_TableBack?: () => Promise<void>;
  serviceServiceUserServiceUser_TableSet?: (selected: ServiceServiceUserStored[]) => Promise<void>;
}

export interface ServiceServiceUserServiceUser_TableSetSelectorDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceServiceUserServiceUser_TableSetSelectorDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  alreadySelected: ServiceServiceUserStored[];
  selectionDiff: ServiceServiceUserStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceServiceUserStored[]>>;
}

// Name: service::ServiceUser::ServiceUser_Table::SetSelector
export default function ServiceServiceUserServiceUser_TableSetSelectorDialog(
  props: ServiceServiceUserServiceUser_TableSetSelectorDialogProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const {
    ownerData,
    title,
    onClose,
    actions,
    isLoading,
    editMode,
    refreshCounter,
    selectionDiff,
    setSelectionDiff,
    alreadySelected,
  } = props;

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="ServiceServiceUserServiceUser_TableSetSelector-dialog-close-wrapper"
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <MdiIcon path="close" />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Suspense>
          <ServiceServiceUserServiceUser_TableSetSelector
            actions={actions}
            refreshCounter={refreshCounter}
            selectionDiff={selectionDiff}
            setSelectionDiff={setSelectionDiff}
            alreadySelected={alreadySelected}
          />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.serviceServiceUserServiceUser_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::ServiceUser::ServiceUser_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceServiceUserServiceUser_TableBack!();
              }}
            >
              <span>
                {t('service.ServiceUser.ServiceUser.Table.SetSelector.service::ServiceUser::ServiceUser_Table::Back', {
                  defaultValue: 'Back',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.serviceServiceUserServiceUser_TableSet && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::ServiceUser::ServiceUser_Table::Set"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="link" />}
              onClick={async () => {
                await actions.serviceServiceUserServiceUser_TableSet!(selectionDiff);
              }}
            >
              <span>
                {t('service.ServiceUser.ServiceUser.Table.SetSelector.service::ServiceUser::ServiceUser_Table::Set', {
                  defaultValue: 'Set',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
