//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.pageContainers
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'DialogContainer.tsx'
// Template name: actor/src/containers/dialog.tsx
// Template file: actor/src/containers/dialog.tsx.hbs

import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { Suspense, lazy } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import type { ServiceIssueType, ServiceIssueTypeQueryCustomizer, ServiceIssueTypeStored } from '~/services/data-api';
import type { JudoRestResponse } from '~/services/data-api/rest';
import type { ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetSelectorActionDefinitions } from './ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetSelector';

const ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetSelector = lazy(
  () =>
    import(
      '~/containers/Service/CreateIssueInput/CreateIssueInput_Form/Issue/IssueType/SetSelector/ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetSelector'
    ),
);

export interface ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetSelectorDialogActions
  extends ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetSelectorActionDefinitions {
  backAction?: () => Promise<void>;
  setAction?: (selected: ServiceIssueTypeStored[]) => Promise<void>;
}

export interface ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetSelectorDialogProps {
  ownerData: any;
  onClose: () => Promise<void>;
  actions: ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetSelectorDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  alreadySelected: ServiceIssueTypeStored[];
  selectionDiff: ServiceIssueTypeStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceIssueTypeStored[]>>;
  isDraft?: boolean;
}

// Name: service::CreateIssueInput::CreateIssueInput_Form::issue::issueType::SetSelector
export default function ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetSelectorDialog(
  props: ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetSelectorDialogProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const {
    ownerData,
    onClose,
    actions,
    isLoading,
    editMode,
    refreshCounter,
    selectionDiff,
    setSelectionDiff,
    alreadySelected,
    isDraft,
  } = props;

  return (
    <>
      <DialogTitle>
        {isDraft ? t('judo') : actions.getPageTitle ? actions.getPageTitle() : ''}
        <IconButton
          id="User/(esm/_WNovANu5Ee2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorPageContainer-dialog-close-wrapper"
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
          <ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetSelector
            actions={actions}
            refreshCounter={refreshCounter}
            isLoading={isLoading}
            selectionDiff={selectionDiff}
            setSelectionDiff={setSelectionDiff}
            alreadySelected={alreadySelected}
            isDraft={isDraft}
          />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_WNovANu5Ee2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>
                {t('service.CreateIssueInput.CreateIssueInput_Form.issue.issueType.Back', { defaultValue: 'Back' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.setAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_WNovANu5Ee2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorSetButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              disabled={!selectionDiff.length}
              startIcon={<MdiIcon path="attachment-plus" />}
              onClick={async () => {
                await actions.setAction!(selectionDiff);
              }}
            >
              <span>
                {t('service.CreateIssueInput.CreateIssueInput_Form.issue.issueType.Set', { defaultValue: 'Set' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
