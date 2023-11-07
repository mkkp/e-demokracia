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
import type { YesNoAbstainVoteInputYesNoAbstainVoteInput_FormActionDefinitions } from './YesNoAbstainVoteInputYesNoAbstainVoteInput_Form';
import type {
  YesNoAbstainVoteInput,
  YesNoAbstainVoteInputStored,
  YesNoAbstainVoteInputQueryCustomizer,
} from '~/services/data-api';

const YesNoAbstainVoteInputYesNoAbstainVoteInput_Form = lazy(
  () =>
    import(
      '~/containers/YesNoAbstainVoteInput/YesNoAbstainVoteInput_Form/YesNoAbstainVoteInputYesNoAbstainVoteInput_Form'
    ),
);

export interface YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogActions
  extends YesNoAbstainVoteInputYesNoAbstainVoteInput_FormActionDefinitions {
  yesNoAbstainVoteInputYesNoAbstainVoteInput_FormGetTemplate?: () => Promise<YesNoAbstainVoteInput>;
  yesNoAbstainVoteInputYesNoAbstainVoteInput_FormBack?: () => Promise<void>;
  yesNoAbstainVoteInputYesNoAbstainVoteInput_FormCreate?: () => Promise<void>;
  serviceVoteDefinitionVoteDefinition_View_EditTabBarYesnoabstainvoteVoteYesNoAbstain?: () => Promise<void>;
  serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVote?: () => Promise<void>;
}

export interface YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: YesNoAbstainVoteInput;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof YesNoAbstainVoteInput, value: any) => void;
  validation: Map<keyof YesNoAbstainVoteInput, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof YesNoAbstainVoteInput, string>>>;
}

// Name: YesNoAbstainVoteInput::YesNoAbstainVoteInput_Form
export default function YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialog(
  props: YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogProps,
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
  const queryCustomizer: YesNoAbstainVoteInputQueryCustomizer = {
    _mask: '{value}',
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="YesNoAbstainVoteInputYesNoAbstainVoteInput_Form-dialog-close-wrapper"
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
          <YesNoAbstainVoteInputYesNoAbstainVoteInput_Form
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
        {editMode && actions.yesNoAbstainVoteInputYesNoAbstainVoteInput_FormBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="YesNoAbstainVoteInput::YesNoAbstainVoteInput_Form::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.yesNoAbstainVoteInputYesNoAbstainVoteInput_FormBack!();
              }}
            >
              <span>
                {t(
                  'YesNoAbstainVoteInput.YesNoAbstainVoteInput.Form.YesNoAbstainVoteInput::YesNoAbstainVoteInput_Form::Back',
                  { defaultValue: 'Back' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.yesNoAbstainVoteInputYesNoAbstainVoteInput_FormCreate && (
          <Grid className="page-action" item>
            <LoadingButton
              id="YesNoAbstainVoteInput::YesNoAbstainVoteInput_Form::Create"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.yesNoAbstainVoteInputYesNoAbstainVoteInput_FormCreate!();
              }}
            >
              <span>
                {t(
                  'YesNoAbstainVoteInput.YesNoAbstainVoteInput.Form.YesNoAbstainVoteInput::YesNoAbstainVoteInput_Form::Create',
                  { defaultValue: 'Create' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceVoteDefinitionVoteDefinition_View_EditTabBarYesnoabstainvoteVoteYesNoAbstain && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::VoteDefinition::VoteDefinition_View_Edit::tabBar::yesnoabstainvote::voteYesNoAbstain::OperationFormCallButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="vote" />}
              onClick={async () => {
                await actions.serviceVoteDefinitionVoteDefinition_View_EditTabBarYesnoabstainvoteVoteYesNoAbstain!();
              }}
            >
              <span>
                {t(
                  'YesNoAbstainVoteInput.YesNoAbstainVoteInput.Form.service::VoteDefinition::VoteDefinition_View_Edit::tabBar::yesnoabstainvote::voteYesNoAbstain::OperationFormCallButton',
                  { defaultValue: 'Submit' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode &&
          actions.serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVote && (
            <Grid className="page-action" item>
              <LoadingButton
                id="service::YesNoAbstainVoteDefinition::YesNoAbstainVoteDefinition_View_Edit::userVoteEntryGroup::TakeVote::vote::OperationFormCallButton"
                loading={isLoading}
                loadingPosition="start"
                variant={'contained'}
                startIcon={<MdiIcon path="vote" />}
                onClick={async () => {
                  await actions.serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVote!();
                }}
              >
                <span>
                  {t(
                    'YesNoAbstainVoteInput.YesNoAbstainVoteInput.Form.service::YesNoAbstainVoteDefinition::YesNoAbstainVoteDefinition_View_Edit::userVoteEntryGroup::TakeVote::vote::OperationFormCallButton',
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
