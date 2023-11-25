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
import { useJudoNavigation, MdiIcon } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import type { ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationActionDefinitions } from './ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperation';
import type {
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionStored,
  SelectAnswerVoteSelectionQueryCustomizer,
} from '~/services/data-api';

const ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperation = lazy(
  () =>
    import(
      '~/containers/Service/VoteDefinition/VoteDefinition_View_Edit/TabBar/Selectanswervote/VoteSelectAnswer/CallOperation/ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperation'
    ),
);

export interface ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationDialogActions
  extends ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationActionDefinitions {
  backAction?: () => Promise<void>;
  voteSelectAnswerForVoteDefinitionAction?: () => Promise<void>;
}

export interface ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationDialogProps {
  ownerData: any;
  title: string;
  onClose: () => Promise<void>;
  actions: ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  selectionDiff: SelectAnswerVoteSelectionStored[];
  setSelectionDiff: Dispatch<SetStateAction<SelectAnswerVoteSelectionStored[]>>;
}

// Name: service::VoteDefinition::VoteDefinition_View_Edit::tabBar::selectanswervote::voteSelectAnswer::CallOperation
export default function ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationDialog(
  props: ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationDialogProps,
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
          id="User/(esm/_T6Ar0I4jEe29qs15q2b6yw)/OperationFormMappedInputCallOperationSelectorPageContainer-dialog-close-wrapper"
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
          <ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperation
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
              id="User/(esm/_T6Ar0I4jEe29qs15q2b6yw)/OperationFormMappedInputCallOperationSelectorBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>
                {t('service.VoteDefinition.VoteDefinition_View_Edit.tabBar.selectanswervote.voteSelectAnswer.Back', {
                  defaultValue: 'Back',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.voteSelectAnswerForVoteDefinitionAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_T6Ar0I4jEe29qs15q2b6yw)/OperationFormMappedInputCallOperationSelectorCallOperationButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="rocket-launch" />}
              onClick={async () => {
                await actions.voteSelectAnswerForVoteDefinitionAction!();
              }}
            >
              <span>
                {t(
                  'service.VoteDefinition.VoteDefinition_View_Edit.tabBar.selectanswervote.voteSelectAnswer.CallOperation',
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
