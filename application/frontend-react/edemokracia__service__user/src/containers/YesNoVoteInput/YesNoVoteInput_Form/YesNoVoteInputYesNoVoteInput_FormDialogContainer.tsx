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
import type { YesNoVoteInputYesNoVoteInput_FormActionDefinitions } from './YesNoVoteInputYesNoVoteInput_Form';
import type { YesNoVoteInput, YesNoVoteInputStored, YesNoVoteInputQueryCustomizer } from '~/services/data-api';

const YesNoVoteInputYesNoVoteInput_Form = lazy(
  () => import('~/containers/YesNoVoteInput/YesNoVoteInput_Form/YesNoVoteInputYesNoVoteInput_Form'),
);

export interface YesNoVoteInputYesNoVoteInput_FormDialogActions
  extends YesNoVoteInputYesNoVoteInput_FormActionDefinitions {
  yesNoVoteInputYesNoVoteInput_FormGetTemplate?: () => Promise<YesNoVoteInput>;
  yesNoVoteInputYesNoVoteInput_FormBack?: () => Promise<void>;
  yesNoVoteInputYesNoVoteInput_FormCreate?: () => Promise<void>;
  serviceVoteDefinitionVoteDefinition_View_EditTabBarYesnovoteVoteYesNo?: () => Promise<void>;
  serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVote?: () => Promise<void>;
}

export interface YesNoVoteInputYesNoVoteInput_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: YesNoVoteInputYesNoVoteInput_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: YesNoVoteInput;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof YesNoVoteInput, value: any) => void;
  validation: Map<keyof YesNoVoteInput, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof YesNoVoteInput, string>>>;
}

// Name: YesNoVoteInput::YesNoVoteInput_Form
export default function YesNoVoteInputYesNoVoteInput_FormDialog(props: YesNoVoteInputYesNoVoteInput_FormDialogProps) {
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
  const queryCustomizer: YesNoVoteInputQueryCustomizer = {
    _mask: '{value}',
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="YesNoVoteInputYesNoVoteInput_Form-dialog-close-wrapper"
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
          <YesNoVoteInputYesNoVoteInput_Form
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
        {editMode && actions.yesNoVoteInputYesNoVoteInput_FormBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="YesNoVoteInput::YesNoVoteInput_Form::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.yesNoVoteInputYesNoVoteInput_FormBack!();
              }}
            >
              <span>
                {t('YesNoVoteInput.YesNoVoteInput.Form.YesNoVoteInput::YesNoVoteInput_Form::Back', {
                  defaultValue: 'Back',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.yesNoVoteInputYesNoVoteInput_FormCreate && (
          <Grid className="page-action" item>
            <LoadingButton
              id="YesNoVoteInput::YesNoVoteInput_Form::Create"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.yesNoVoteInputYesNoVoteInput_FormCreate!();
              }}
            >
              <span>
                {t('YesNoVoteInput.YesNoVoteInput.Form.YesNoVoteInput::YesNoVoteInput_Form::Create', {
                  defaultValue: 'Create',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVote && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit::userVoteEntryGroup::TakeVote::vote::OperationFormCallButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="vote" />}
              onClick={async () => {
                await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVote!();
              }}
            >
              <span>
                {t(
                  'YesNoVoteInput.YesNoVoteInput.Form.service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit::userVoteEntryGroup::TakeVote::vote::OperationFormCallButton',
                  { defaultValue: 'Submit' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceVoteDefinitionVoteDefinition_View_EditTabBarYesnovoteVoteYesNo && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::VoteDefinition::VoteDefinition_View_Edit::tabBar::yesnovote::voteYesNo::OperationFormCallButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="vote" />}
              onClick={async () => {
                await actions.serviceVoteDefinitionVoteDefinition_View_EditTabBarYesnovoteVoteYesNo!();
              }}
            >
              <span>
                {t(
                  'YesNoVoteInput.YesNoVoteInput.Form.service::VoteDefinition::VoteDefinition_View_Edit::tabBar::yesnovote::voteYesNo::OperationFormCallButton',
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
