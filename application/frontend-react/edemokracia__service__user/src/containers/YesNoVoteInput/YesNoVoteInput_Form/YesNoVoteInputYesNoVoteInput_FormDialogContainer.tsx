//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.pageContainers
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'DialogContainer.tsx'
// Template name: actor/src/containers/dialog.tsx
// Template file: actor/src/containers/dialog.tsx.hbs

import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import { Suspense, lazy, useCallback, useRef, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import type { YesNoVoteInput, YesNoVoteInputQueryCustomizer, YesNoVoteInputStored } from '~/services/data-api';
import { processQueryCustomizer } from '~/utilities';
import type { YesNoVoteInputYesNoVoteInput_FormActionDefinitions } from './YesNoVoteInputYesNoVoteInput_Form';

const YesNoVoteInputYesNoVoteInput_Form = lazy(
  () => import('~/containers/YesNoVoteInput/YesNoVoteInput_Form/YesNoVoteInputYesNoVoteInput_Form'),
);

export interface YesNoVoteInputYesNoVoteInput_FormDialogActions
  extends YesNoVoteInputYesNoVoteInput_FormActionDefinitions {
  getTemplateAction?: () => Promise<YesNoVoteInput>;
  backAction?: () => Promise<void>;
  createAction?: (openCreated?: boolean) => Promise<void>;
  voteYesNoForVoteDefinitionAction?: () => Promise<void>;
  voteForYesNoVoteDefinitionAction?: () => Promise<void>;
}

export interface YesNoVoteInputYesNoVoteInput_FormDialogProps {
  ownerData: any;
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
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// Name: YesNoVoteInput::YesNoVoteInput_Form
export default function YesNoVoteInputYesNoVoteInput_FormDialog(props: YesNoVoteInputYesNoVoteInput_FormDialogProps) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const [isCreateDropdownOpen, setIsCreateDropdownOpen] = useState<boolean>(false);
  const createDropdownRef = useRef<HTMLDivElement>(null);
  const {
    ownerData,
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
    isDraft,
  } = props;
  const queryCustomizer: YesNoVoteInputQueryCustomizer = {
    _mask: '{value}',
  };

  const handleCreateDropdownToggle = useCallback(() => {
    setIsCreateDropdownOpen((prevOpen) => !prevOpen);
  }, [isCreateDropdownOpen]);
  const handleCreateDropdownClose = useCallback(() => {
    setIsCreateDropdownOpen(false);
  }, [isCreateDropdownOpen]);

  return (
    <>
      <DialogTitle>
        {isDraft ? t('judo') : actions.getPageTitle ? actions.getPageTitle(data) : ''}
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
            isLoading={isLoading}
            data={data}
            editMode={editMode}
            storeDiff={storeDiff}
            isFormUpdateable={isFormUpdateable}
            isFormDeleteable={isFormDeleteable}
            validation={validation}
            setValidation={setValidation}
            submit={submit}
            isDraft={isDraft}
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
            <ButtonGroup
              disabled={isLoading}
              variant={'contained'}
              ref={createDropdownRef}
              sx={{ borderRadius: 0, boxShadow: 0 }}
              aria-label="split button for create action"
            >
              <LoadingButton
                id="User/(esm/_-1R8g3WyEe2LTNnGda5kaw)/TransferObjectFormCreateButton"
                loading={isLoading}
                loadingPosition="start"
                variant={'contained'}
                startIcon={isDraft ? <MdiIcon path="check" /> : <MdiIcon path="content-save" />}
                onClick={async () => {
                  await actions.createAction!();
                }}
              >
                <span>
                  {isDraft
                    ? t('judo.dialogs.draft.submit', { defaultValue: 'Ok' })
                    : t('YesNoVoteInput.YesNoVoteInput_Form.Create', { defaultValue: 'Create' })}
                </span>
              </LoadingButton>
              {!isDraft && (
                <Button
                  size="small"
                  onClick={handleCreateDropdownToggle}
                  aria-label="dropdown toggle for create dialog"
                >
                  <MdiIcon path="menu-down" />
                </Button>
              )}
            </ButtonGroup>
            <Popper
              sx={{ zIndex: 1 }}
              open={isCreateDropdownOpen}
              anchorEl={createDropdownRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleCreateDropdownClose}>
                      <MenuList id="split-button-menu" autoFocusItem>
                        <MenuItem
                          aria-label="create and open"
                          onClick={async () => {
                            if (actions.createAction) {
                              await actions.createAction!(true);
                            }
                          }}
                        >
                          {t('judo.pages.create-and-navigate', { defaultValue: 'Create and open' })}
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Grid>
        )}
        {editMode && actions.voteYesNoForVoteDefinitionAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_T6ChAI4jEe29qs15q2b6yw)/OperationFormCallButton/(discriminator/User/(esm/_-1R8g3WyEe2LTNnGda5kaw)/TransferObjectFormButtonGroup)"
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
              id="User/(esm/_eMuv8FoSEe6_67aMO2jOsw)/OperationFormCallButton/(discriminator/User/(esm/_-1R8g3WyEe2LTNnGda5kaw)/TransferObjectFormButtonGroup)"
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
