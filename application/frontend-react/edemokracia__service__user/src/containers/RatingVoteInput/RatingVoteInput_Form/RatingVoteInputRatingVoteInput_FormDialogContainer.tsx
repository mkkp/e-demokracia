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
import { processQueryCustomizer } from '~/utilities';
import type { RatingVoteInputRatingVoteInput_FormActionDefinitions } from './RatingVoteInputRatingVoteInput_Form';
import type { RatingVoteInput, RatingVoteInputStored, RatingVoteInputQueryCustomizer } from '~/services/data-api';

const RatingVoteInputRatingVoteInput_Form = lazy(
  () => import('~/containers/RatingVoteInput/RatingVoteInput_Form/RatingVoteInputRatingVoteInput_Form'),
);

export interface RatingVoteInputRatingVoteInput_FormDialogActions
  extends RatingVoteInputRatingVoteInput_FormActionDefinitions {
  getTemplateAction?: () => Promise<RatingVoteInput>;
  backAction?: () => Promise<void>;
  createAction?: () => Promise<void>;
  voteForRatingVoteDefinitionAction?: () => Promise<void>;
  voteRatingForVoteDefinitionAction?: () => Promise<void>;
}

export interface RatingVoteInputRatingVoteInput_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => Promise<void>;
  actions: RatingVoteInputRatingVoteInput_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: RatingVoteInputStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof RatingVoteInput, value: any) => void;
  validation: Map<keyof RatingVoteInput, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof RatingVoteInput, string>>>;
  submit: () => Promise<void>;
}

// Name: RatingVoteInput::RatingVoteInput_Form
export default function RatingVoteInputRatingVoteInput_FormDialog(
  props: RatingVoteInputRatingVoteInput_FormDialogProps,
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
    data,
    isFormUpdateable,
    isFormDeleteable,
    storeDiff,
    validation,
    setValidation,
    submit,
  } = props;
  const queryCustomizer: RatingVoteInputQueryCustomizer = {
    _mask: '{value}',
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="User/(esm/_LEKjo35YEe2kLcMqsIbMgQ)/TransferObjectFormPageContainer-dialog-close-wrapper"
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
          <RatingVoteInputRatingVoteInput_Form
            actions={actions}
            refreshCounter={refreshCounter}
            data={data}
            isLoading={isLoading}
            editMode={editMode}
            storeDiff={storeDiff}
            isFormUpdateable={isFormUpdateable}
            isFormDeleteable={isFormDeleteable}
            validation={validation}
            setValidation={setValidation}
            submit={submit}
          />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_LEKjo35YEe2kLcMqsIbMgQ)/TransferObjectFormBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('RatingVoteInput.RatingVoteInput_Form.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.createAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_LEKjo35YEe2kLcMqsIbMgQ)/TransferObjectFormCreateButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.createAction!();
              }}
            >
              <span>{t('RatingVoteInput.RatingVoteInput_Form.Create', { defaultValue: 'Create' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.voteRatingForVoteDefinitionAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_T5_dsI4jEe29qs15q2b6yw)/OperationFormCallButton/(discriminator/User/(esm/_LEKjo35YEe2kLcMqsIbMgQ)/TransferObjectFormButtonGroup)"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="vote" />}
              onClick={async () => {
                await actions.voteRatingForVoteDefinitionAction!();
              }}
            >
              <span>
                {t(
                  'service.VoteDefinition.VoteDefinition_View_Edit.tabBar.ratingvote.voteRating.OperationFormCallButton',
                  { defaultValue: 'Submit' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.voteForRatingVoteDefinitionAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_NHnv2FsoEe6Mx9dH3yj5gQ)/OperationFormCallButton/(discriminator/User/(esm/_LEKjo35YEe2kLcMqsIbMgQ)/TransferObjectFormButtonGroup)"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="vote" />}
              onClick={async () => {
                await actions.voteForRatingVoteDefinitionAction!();
              }}
            >
              <span>
                {t(
                  'service.RatingVoteDefinition.RatingVoteDefinition_View_Edit.userVoteEntryGroup.TakeVote.vote.OperationFormCallButton',
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
