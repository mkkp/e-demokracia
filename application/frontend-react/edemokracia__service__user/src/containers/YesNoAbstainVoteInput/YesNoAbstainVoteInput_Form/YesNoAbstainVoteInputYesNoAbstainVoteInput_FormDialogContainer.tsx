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
  getTemplateAction?: () => Promise<YesNoAbstainVoteInput>;
  backAction?: () => Promise<void>;
  createAction?: () => Promise<void>;
  voteYesNoAbstainForVoteDefinitionAction?: () => Promise<void>;
  voteForYesNoAbstainVoteDefinitionAction?: () => Promise<void>;
}

export interface YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => Promise<void>;
  actions: YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: YesNoAbstainVoteInputStored;
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
          id="User/(esm/_-1U_03WyEe2LTNnGda5kaw)/TransferObjectFormPageContainer-dialog-close-wrapper"
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
        {editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_-1U_03WyEe2LTNnGda5kaw)/TransferObjectFormBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('YesNoAbstainVoteInput.YesNoAbstainVoteInput_Form.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.createAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_-1U_03WyEe2LTNnGda5kaw)/TransferObjectFormCreateButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.createAction!();
              }}
            >
              <span>{t('YesNoAbstainVoteInput.YesNoAbstainVoteInput_Form.Create', { defaultValue: 'Create' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.voteForYesNoAbstainVoteDefinitionAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_7M-IPFsnEe6Mx9dH3yj5gQ)/OperationFormCallButton/(discriminator/_sXlYAY1KEe6sgdrBpAinBQ)"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="vote" />}
              onClick={async () => {
                await actions.voteForYesNoAbstainVoteDefinitionAction!();
              }}
            >
              <span>
                {t(
                  'service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.userVoteEntryGroup.TakeVote.vote.OperationFormCallButton',
                  { defaultValue: 'Submit' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.voteYesNoAbstainForVoteDefinitionAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_T6DvII4jEe29qs15q2b6yw)/OperationFormCallButton/(discriminator/_sXlYAY1KEe6sgdrBpAinBQ)"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="vote" />}
              onClick={async () => {
                await actions.voteYesNoAbstainForVoteDefinitionAction!();
              }}
            >
              <span>
                {t(
                  'service.VoteDefinition.VoteDefinition_View_Edit.tabBar.yesnoabstainvote.voteYesNoAbstain.OperationFormCallButton',
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
