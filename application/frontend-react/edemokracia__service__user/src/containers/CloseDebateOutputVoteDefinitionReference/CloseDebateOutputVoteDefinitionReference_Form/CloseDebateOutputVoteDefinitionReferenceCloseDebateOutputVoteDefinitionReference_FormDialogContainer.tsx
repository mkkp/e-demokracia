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
import type {
  CloseDebateOutputVoteDefinitionReference,
  CloseDebateOutputVoteDefinitionReferenceQueryCustomizer,
  CloseDebateOutputVoteDefinitionReferenceStored,
} from '~/services/data-api';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { processQueryCustomizer } from '~/utilities';
import type { CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormActionDefinitions } from './CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_Form';

const CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_Form = lazy(
  () =>
    import(
      '~/containers/CloseDebateOutputVoteDefinitionReference/CloseDebateOutputVoteDefinitionReference_Form/CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_Form'
    ),
);

export interface CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormDialogActions
  extends CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormActionDefinitions {
  getTemplateAction?: () => Promise<JudoRestResponse<CloseDebateOutputVoteDefinitionReference>>;
  backAction?: () => Promise<void>;
  createAction?: (openCreated?: boolean) => Promise<void>;
}

export interface CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormDialogProps {
  ownerData: any;
  onClose: () => Promise<void>;
  actions: CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: CloseDebateOutputVoteDefinitionReferenceStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof CloseDebateOutputVoteDefinitionReference, value: any) => void;
  validation: Map<keyof CloseDebateOutputVoteDefinitionReference, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof CloseDebateOutputVoteDefinitionReference, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// Name: CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_Form
export default function CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormDialog(
  props: CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormDialogProps,
) {
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
  const queryCustomizer: CloseDebateOutputVoteDefinitionReferenceQueryCustomizer = {
    _mask: '{context}',
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
          id="User/(esm/_YoAHuVu1Ee6Lb6PYNSnQSA)/TransferObjectFormPageContainer-dialog-close-wrapper"
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
          <CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_Form
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
              id="User/(esm/_YoAHuVu1Ee6Lb6PYNSnQSA)/TransferObjectFormBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              disabled={isLoading}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('judo.action.back', { defaultValue: 'Back' })}</span>
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
                id="User/(esm/_YoAHuVu1Ee6Lb6PYNSnQSA)/TransferObjectFormCreateButton"
                loading={isLoading}
                loadingPosition="start"
                variant={'contained'}
                disabled={isLoading}
                startIcon={isDraft ? <MdiIcon path="check" /> : <MdiIcon path="content-save" />}
                onClick={async () => {
                  await actions.createAction!();
                }}
              >
                <span>
                  {isDraft
                    ? t('judo.dialogs.draft.submit', { defaultValue: 'Ok' })
                    : t('judo.action.create', { defaultValue: 'Create' })}
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
      </DialogActions>
    </>
  );
}
