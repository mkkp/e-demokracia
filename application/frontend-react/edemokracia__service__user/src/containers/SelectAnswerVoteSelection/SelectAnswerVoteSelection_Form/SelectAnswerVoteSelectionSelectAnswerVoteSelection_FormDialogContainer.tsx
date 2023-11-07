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
import type { SelectAnswerVoteSelectionSelectAnswerVoteSelection_FormActionDefinitions } from './SelectAnswerVoteSelectionSelectAnswerVoteSelection_Form';
import type {
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionStored,
  SelectAnswerVoteSelectionQueryCustomizer,
} from '~/services/data-api';

const SelectAnswerVoteSelectionSelectAnswerVoteSelection_Form = lazy(
  () =>
    import(
      '~/containers/SelectAnswerVoteSelection/SelectAnswerVoteSelection_Form/SelectAnswerVoteSelectionSelectAnswerVoteSelection_Form'
    ),
);

export interface SelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialogActions
  extends SelectAnswerVoteSelectionSelectAnswerVoteSelection_FormActionDefinitions {
  selectAnswerVoteSelectionSelectAnswerVoteSelection_FormGetTemplate?: () => Promise<SelectAnswerVoteSelection>;
  selectAnswerVoteSelectionSelectAnswerVoteSelection_FormBack?: () => Promise<void>;
  selectAnswerVoteSelectionSelectAnswerVoteSelection_FormCreate?: () => Promise<void>;
}

export interface SelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: SelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: SelectAnswerVoteSelection;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof SelectAnswerVoteSelection, value: any) => void;
  validation: Map<keyof SelectAnswerVoteSelection, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof SelectAnswerVoteSelection, string>>>;
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
  } = props;
  const queryCustomizer: SelectAnswerVoteSelectionQueryCustomizer = {
    _mask: '{description,title}',
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="SelectAnswerVoteSelectionSelectAnswerVoteSelection_Form-dialog-close-wrapper"
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
          />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {editMode && actions.selectAnswerVoteSelectionSelectAnswerVoteSelection_FormBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="SelectAnswerVoteSelection::SelectAnswerVoteSelection_Form::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.selectAnswerVoteSelectionSelectAnswerVoteSelection_FormBack!();
              }}
            >
              <span>
                {t(
                  'SelectAnswerVoteSelection.SelectAnswerVoteSelection.Form.SelectAnswerVoteSelection::SelectAnswerVoteSelection_Form::Back',
                  { defaultValue: 'Back' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.selectAnswerVoteSelectionSelectAnswerVoteSelection_FormCreate && (
          <Grid className="page-action" item>
            <LoadingButton
              id="SelectAnswerVoteSelection::SelectAnswerVoteSelection_Form::Create"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.selectAnswerVoteSelectionSelectAnswerVoteSelection_FormCreate!();
              }}
            >
              <span>
                {t(
                  'SelectAnswerVoteSelection.SelectAnswerVoteSelection.Form.SelectAnswerVoteSelection::SelectAnswerVoteSelection_Form::Create',
                  { defaultValue: 'Create' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
