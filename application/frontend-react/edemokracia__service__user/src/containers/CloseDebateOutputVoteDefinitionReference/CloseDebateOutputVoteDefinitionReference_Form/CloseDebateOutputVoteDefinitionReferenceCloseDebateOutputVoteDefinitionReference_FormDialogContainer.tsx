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
import type { CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormActionDefinitions } from './CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_Form';
import type {
  CloseDebateOutputVoteDefinitionReference,
  CloseDebateOutputVoteDefinitionReferenceStored,
  CloseDebateOutputVoteDefinitionReferenceQueryCustomizer,
} from '~/services/data-api';

const CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_Form = lazy(
  () =>
    import(
      '~/containers/CloseDebateOutputVoteDefinitionReference/CloseDebateOutputVoteDefinitionReference_Form/CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_Form'
    ),
);

export interface CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormDialogActions
  extends CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormActionDefinitions {
  closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormGetTemplate?: () => Promise<CloseDebateOutputVoteDefinitionReference>;
  closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormBack?: () => Promise<void>;
  closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormCreate?: () => Promise<void>;
}

export interface CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: CloseDebateOutputVoteDefinitionReference;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof CloseDebateOutputVoteDefinitionReference, value: any) => void;
  validation: Map<keyof CloseDebateOutputVoteDefinitionReference, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof CloseDebateOutputVoteDefinitionReference, string>>>;
}

// Name: CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_Form
export default function CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormDialog(
  props: CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormDialogProps,
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
  const queryCustomizer: CloseDebateOutputVoteDefinitionReferenceQueryCustomizer = {
    _mask: '{context}',
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_Form-dialog-close-wrapper"
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
        {editMode &&
          actions.closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormBack && (
            <Grid className="page-action" item>
              <LoadingButton
                id="CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_Form::Back"
                loading={isLoading}
                loadingPosition="start"
                variant={'text'}
                startIcon={<MdiIcon path="arrow-left" />}
                onClick={async () => {
                  await actions.closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormBack!();
                }}
              >
                <span>
                  {t(
                    'CloseDebateOutputVoteDefinitionReference.CloseDebateOutputVoteDefinitionReference.Form.CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_Form::Back',
                    { defaultValue: 'Back' },
                  )}
                </span>
              </LoadingButton>
            </Grid>
          )}
        {editMode &&
          actions.closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormCreate && (
            <Grid className="page-action" item>
              <LoadingButton
                id="CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_Form::Create"
                loading={isLoading}
                loadingPosition="start"
                variant={'contained'}
                startIcon={<MdiIcon path="content-save" />}
                onClick={async () => {
                  await actions.closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormCreate!();
                }}
              >
                <span>
                  {t(
                    'CloseDebateOutputVoteDefinitionReference.CloseDebateOutputVoteDefinitionReference.Form.CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_Form::Create',
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
