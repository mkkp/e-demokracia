//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.pageContainers
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'DialogContainer.tsx'
// Template name: actor/src/containers/dialog.tsx
// Template file: actor/src/containers/dialog.tsx.hbs

import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { Suspense, lazy } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import type {
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionQueryCustomizer,
  SelectAnswerVoteSelectionStored,
} from '~/services/data-api';
import { processQueryCustomizer } from '~/utilities';
import type { SelectAnswerVoteSelectionSelectAnswerVoteSelection_FormActionDefinitions } from './SelectAnswerVoteSelectionSelectAnswerVoteSelection_Form';

const SelectAnswerVoteSelectionSelectAnswerVoteSelection_Form = lazy(
  () =>
    import(
      '~/containers/SelectAnswerVoteSelection/SelectAnswerVoteSelection_Form/SelectAnswerVoteSelectionSelectAnswerVoteSelection_Form'
    ),
);

export interface SelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialogActions
  extends SelectAnswerVoteSelectionSelectAnswerVoteSelection_FormActionDefinitions {
  getTemplateAction?: () => Promise<SelectAnswerVoteSelection>;
  backAction?: () => Promise<void>;
  createAction?: () => Promise<void>;
}

export interface SelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => Promise<void>;
  actions: SelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: SelectAnswerVoteSelectionStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof SelectAnswerVoteSelection, value: any) => void;
  validation: Map<keyof SelectAnswerVoteSelection, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof SelectAnswerVoteSelection, string>>>;
  submit: () => Promise<void>;
}

// Name: SelectAnswerVoteSelection::SelectAnswerVoteSelection_Form
export default function SelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialog(
  props: SelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialogProps,
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
  const queryCustomizer: SelectAnswerVoteSelectionQueryCustomizer = {
    _mask: '{description,title}',
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="User/(esm/_XwtdgG6bEe2wNaja8kBvcQ)/TransferObjectFormPageContainer-dialog-close-wrapper"
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
          <SelectAnswerVoteSelectionSelectAnswerVoteSelection_Form
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
              id="User/(esm/_XwtdgG6bEe2wNaja8kBvcQ)/TransferObjectFormBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>
                {t('SelectAnswerVoteSelection.SelectAnswerVoteSelection_Form.Back', { defaultValue: 'Back' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.createAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_XwtdgG6bEe2wNaja8kBvcQ)/TransferObjectFormCreateButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.createAction!();
              }}
            >
              <span>
                {t('SelectAnswerVoteSelection.SelectAnswerVoteSelection_Form.Create', { defaultValue: 'Create' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
