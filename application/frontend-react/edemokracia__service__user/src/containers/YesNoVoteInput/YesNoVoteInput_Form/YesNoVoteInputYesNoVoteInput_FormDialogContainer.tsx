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
import type { YesNoVoteInputYesNoVoteInput_FormActionDefinitions } from './YesNoVoteInputYesNoVoteInput_Form';
import type { YesNoVoteInput, YesNoVoteInputStored, YesNoVoteInputQueryCustomizer } from '~/services/data-api';

const YesNoVoteInputYesNoVoteInput_Form = lazy(
  () => import('~/containers/YesNoVoteInput/YesNoVoteInput_Form/YesNoVoteInputYesNoVoteInput_Form'),
);

export interface YesNoVoteInputYesNoVoteInput_FormDialogActions
  extends YesNoVoteInputYesNoVoteInput_FormActionDefinitions {
  getTemplateAction?: () => Promise<YesNoVoteInput>;
  backAction?: () => Promise<void>;
  createAction?: () => Promise<void>;
  voteYesNoForVoteDefinitionAction?: () => Promise<void>;
  voteForYesNoVoteDefinitionAction?: () => Promise<void>;
}

export interface YesNoVoteInputYesNoVoteInput_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => Promise<void>;
  actions: YesNoVoteInputYesNoVoteInput_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: YesNoVoteInputStored;
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
          id="User/(esm/_-1R8g3WyEe2LTNnGda5kaw)/TransferObjectFormPageContainer-dialog-close-wrapper"
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
        {editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_-1R8g3WyEe2LTNnGda5kaw)/TransferObjectFormBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('YesNoVoteInput.YesNoVoteInput_Form.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.createAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_-1R8g3WyEe2LTNnGda5kaw)/TransferObjectFormCreateButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.createAction!();
              }}
            >
              <span>{t('YesNoVoteInput.YesNoVoteInput_Form.Create', { defaultValue: 'Create' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.voteYesNoForVoteDefinitionAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_T6ChAI4jEe29qs15q2b6yw)/OperationFormCallButton/(discriminator/_uYcNYY0GEe6vroMdQ80Hug)"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="vote" />}
              onClick={async () => {
                await actions.voteYesNoForVoteDefinitionAction!();
              }}
            >
              <span>
                {t(
                  'service.VoteDefinition.VoteDefinition_View_Edit.tabBar.yesnovote.voteYesNo.OperationFormCallButton',
                  { defaultValue: 'Submit' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.voteForYesNoVoteDefinitionAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_eMuv8FoSEe6_67aMO2jOsw)/OperationFormCallButton/(discriminator/_uYcNYY0GEe6vroMdQ80Hug)"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="vote" />}
              onClick={async () => {
                await actions.voteForYesNoVoteDefinitionAction!();
              }}
            >
              <span>
                {t(
                  'service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.userVoteEntryGroup.TakeVote.vote.OperationFormCallButton',
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
