//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.pageContainers
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'DialogContainer.tsx'
// Template name: actor/src/containers/dialog.tsx
// Template file: actor/src/containers/dialog.tsx.hbs

import { lazy, Suspense } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import LoadingButton from '@mui/lab/LoadingButton';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation, MdiIcon, PageHeader } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import type { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationActionDefinitions } from './ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperation';
import type {
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionStored,
  SelectAnswerVoteSelectionQueryCustomizer,
} from '~/services/data-api';

const ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperation =
  lazy(
    () =>
      import(
        '~/containers/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_View_Edit/UserVoteEntryGroup/TakeVote/Vote/CallOperation/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperation'
      ),
  );

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationDialogActions
  extends ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationActionDefinitions {
  backAction?: () => Promise<void>;
  voteForSelectAnswerVoteDefinitionAction?: () => Promise<void>;
}

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationDialogProps {
  ownerData: any;
  title: string;
  onClose: () => Promise<void>;
  actions: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  selectionDiff: SelectAnswerVoteSelectionStored[];
  setSelectionDiff: Dispatch<SetStateAction<SelectAnswerVoteSelectionStored[]>>;
}

// Name: service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit::userVoteEntryGroup::TakeVote::vote::CallOperation
export default function ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationDialog(
  props: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationDialogProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { ownerData, title, onClose, actions, isLoading, editMode, refreshCounter, selectionDiff, setSelectionDiff } =
    props;

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="User/(esm/_0SJy11tuEe6Mx9dH3yj5gQ)/OperationFormMappedInputCallOperationSelectorPageContainer-dialog-close-wrapper"
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
          <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperation
            actions={actions}
            refreshCounter={refreshCounter}
            selectionDiff={selectionDiff}
            setSelectionDiff={setSelectionDiff}
          />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_0SJy11tuEe6Mx9dH3yj5gQ)/OperationFormMappedInputCallOperationSelectorBackButton"
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
                  'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.userVoteEntryGroup.TakeVote.vote.Back',
                  { defaultValue: 'Back' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.voteForSelectAnswerVoteDefinitionAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_0SJy11tuEe6Mx9dH3yj5gQ)/OperationFormMappedInputCallOperationSelectorCallOperationButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="rocket-launch" />}
              onClick={async () => {
                await actions.voteForSelectAnswerVoteDefinitionAction!();
              }}
            >
              <span>
                {t(
                  'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.userVoteEntryGroup.TakeVote.vote.CallOperation',
                  { defaultValue: 'Submit' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}