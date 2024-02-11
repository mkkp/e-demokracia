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
import type {
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
import type { JudoRestResponse } from '~/services/data-api/rest';
import type { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorActionDefinitions } from './ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelector';

const ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelector = lazy(
  () =>
    import(
      '~/containers/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_View_Edit/VoteEntryBase/Virtual/Owner/SetSelector/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelector'
    ),
);

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialogActions
  extends ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorActionDefinitions {
  backAction?: () => Promise<void>;
  setAction?: (selected: ServiceServiceUserStored[]) => Promise<void>;
}

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialogProps {
  ownerData: any;
  onClose: () => Promise<void>;
  actions: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  alreadySelected: ServiceServiceUserStored[];
  selectionDiff: ServiceServiceUserStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceServiceUserStored[]>>;
  isDraft?: boolean;
}

// Name: service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit::VoteEntryBase::virtual::owner::SetSelector
export default function ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialog(
  props: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialogProps,
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
          id="User/(esm/_EKuyIHz6Ee6Q9LyUVjs1Qw)/TabularReferenceFieldLinkSetSelectorPageContainer-dialog-close-wrapper"
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
          <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelector
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
              id="User/(esm/_EKuyIHz6Ee6Q9LyUVjs1Qw)/TabularReferenceFieldLinkSetSelectorBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>
                {t(
                  'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.VoteEntryBase.virtual.owner.Back',
                  { defaultValue: 'Back' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.setAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_EKuyIHz6Ee6Q9LyUVjs1Qw)/TabularReferenceFieldLinkSetSelectorSetButton"
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
                {t(
                  'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.VoteEntryBase.virtual.owner.Set',
                  { defaultValue: 'Set' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}