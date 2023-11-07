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
import { processQueryCustomizer } from '~/utilities';
import type { RatingVoteInputRatingVoteInput_FormActionDefinitions } from './RatingVoteInputRatingVoteInput_Form';
import type { RatingVoteInput, RatingVoteInputStored, RatingVoteInputQueryCustomizer } from '~/services/data-api';

const RatingVoteInputRatingVoteInput_Form = lazy(
  () => import('~/containers/RatingVoteInput/RatingVoteInput_Form/RatingVoteInputRatingVoteInput_Form'),
);

export interface RatingVoteInputRatingVoteInput_FormDialogActions
  extends RatingVoteInputRatingVoteInput_FormActionDefinitions {
  ratingVoteInputRatingVoteInput_FormGetTemplate?: () => Promise<RatingVoteInput>;
  ratingVoteInputRatingVoteInput_FormBack?: () => Promise<void>;
  ratingVoteInputRatingVoteInput_FormCreate?: () => Promise<void>;
  serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVote?: () => Promise<void>;
  serviceVoteDefinitionVoteDefinition_View_EditTabBarRatingvoteVoteRating?: () => Promise<void>;
}

export interface RatingVoteInputRatingVoteInput_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: RatingVoteInputRatingVoteInput_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: RatingVoteInput;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof RatingVoteInput, value: any) => void;
  validation: Map<keyof RatingVoteInput, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof RatingVoteInput, string>>>;
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
  } = props;
  const queryCustomizer: RatingVoteInputQueryCustomizer = {
    _mask: '{value}',
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="RatingVoteInputRatingVoteInput_Form-dialog-close-wrapper"
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
          />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {editMode && actions.ratingVoteInputRatingVoteInput_FormBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="RatingVoteInput::RatingVoteInput_Form::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.ratingVoteInputRatingVoteInput_FormBack!();
              }}
            >
              <span>
                {t('RatingVoteInput.RatingVoteInput.Form.RatingVoteInput::RatingVoteInput_Form::Back', {
                  defaultValue: 'Back',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.ratingVoteInputRatingVoteInput_FormCreate && (
          <Grid className="page-action" item>
            <LoadingButton
              id="RatingVoteInput::RatingVoteInput_Form::Create"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.ratingVoteInputRatingVoteInput_FormCreate!();
              }}
            >
              <span>
                {t('RatingVoteInput.RatingVoteInput.Form.RatingVoteInput::RatingVoteInput_Form::Create', {
                  defaultValue: 'Create',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode &&
          actions.serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVote && (
            <Grid className="page-action" item>
              <LoadingButton
                id="service::RatingVoteDefinition::RatingVoteDefinition_View_Edit::userVoteEntryGroup::TakeVote::vote::OperationFormCallButton"
                loading={isLoading}
                loadingPosition="start"
                variant={'contained'}
                startIcon={<MdiIcon path="vote" />}
                onClick={async () => {
                  await actions.serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVote!();
                }}
              >
                <span>
                  {t(
                    'RatingVoteInput.RatingVoteInput.Form.service::RatingVoteDefinition::RatingVoteDefinition_View_Edit::userVoteEntryGroup::TakeVote::vote::OperationFormCallButton',
                    { defaultValue: 'Submit' },
                  )}
                </span>
              </LoadingButton>
            </Grid>
          )}
        {editMode && actions.serviceVoteDefinitionVoteDefinition_View_EditTabBarRatingvoteVoteRating && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::VoteDefinition::VoteDefinition_View_Edit::tabBar::ratingvote::voteRating::OperationFormCallButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="vote" />}
              onClick={async () => {
                await actions.serviceVoteDefinitionVoteDefinition_View_EditTabBarRatingvoteVoteRating!();
              }}
            >
              <span>
                {t(
                  'RatingVoteInput.RatingVoteInput.Form.service::VoteDefinition::VoteDefinition_View_Edit::tabBar::ratingvote::voteRating::OperationFormCallButton',
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
