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
import type { ServiceIssueTypeIssueType_TableSetSelectorActionDefinitions } from './ServiceIssueTypeIssueType_TableSetSelector';
import type { ServiceIssueType, ServiceIssueTypeStored, ServiceIssueTypeQueryCustomizer } from '~/services/data-api';

const ServiceIssueTypeIssueType_TableSetSelector = lazy(
  () => import('~/containers/Service/IssueType/IssueType_Table/SetSelector/ServiceIssueTypeIssueType_TableSetSelector'),
);

export interface ServiceIssueTypeIssueType_TableSetSelectorDialogActions
  extends ServiceIssueTypeIssueType_TableSetSelectorActionDefinitions {
  serviceIssueTypeIssueType_TableBack?: () => Promise<void>;
  serviceIssueTypeIssueType_TableSet?: (selected: ServiceIssueTypeStored[]) => Promise<void>;
}

export interface ServiceIssueTypeIssueType_TableSetSelectorDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceIssueTypeIssueType_TableSetSelectorDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  alreadySelected: ServiceIssueTypeStored[];
  selectionDiff: ServiceIssueTypeStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceIssueTypeStored[]>>;
}

// Name: service::IssueType::IssueType_Table::SetSelector
export default function ServiceIssueTypeIssueType_TableSetSelectorDialog(
  props: ServiceIssueTypeIssueType_TableSetSelectorDialogProps,
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
          id="ServiceIssueTypeIssueType_TableSetSelector-dialog-close-wrapper"
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
          <ServiceIssueTypeIssueType_TableSetSelector
            actions={actions}
            refreshCounter={refreshCounter}
            selectionDiff={selectionDiff}
            setSelectionDiff={setSelectionDiff}
            alreadySelected={alreadySelected}
          />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.serviceIssueTypeIssueType_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::IssueType::IssueType_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceIssueTypeIssueType_TableBack!();
              }}
            >
              <span>
                {t('service.IssueType.IssueType.Table.SetSelector.service::IssueType::IssueType_Table::Back', {
                  defaultValue: 'Back',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.serviceIssueTypeIssueType_TableSet && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::IssueType::IssueType_Table::Set"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="link" />}
              onClick={async () => {
                await actions.serviceIssueTypeIssueType_TableSet!(selectionDiff);
              }}
            >
              <span>
                {t('service.IssueType.IssueType.Table.SetSelector.service::IssueType::IssueType_Table::Set', {
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
