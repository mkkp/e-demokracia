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
import type { ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormActionDefinitions } from './ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_Form';
import type {
  ServiceSelectAnswerVoteSelection,
  ServiceSelectAnswerVoteSelectionStored,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
} from '~/services/data-api';

const ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_Form = lazy(
  () =>
    import(
      '~/containers/Service/SelectAnswerVoteSelection/SelectAnswerVoteSelection_Form/ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_Form'
    ),
);

export interface ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialogActions
  extends ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormActionDefinitions {
  serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormGetTemplate?: () => Promise<ServiceSelectAnswerVoteSelection>;
  serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormBack?: () => Promise<void>;
  serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormCreate?: () => Promise<void>;
}

export interface ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: ServiceSelectAnswerVoteSelection;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceSelectAnswerVoteSelection, value: any) => void;
  validation: Map<keyof ServiceSelectAnswerVoteSelection, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceSelectAnswerVoteSelection, string>>>;
}

// Name: service::SelectAnswerVoteSelection::SelectAnswerVoteSelection_Form
export default function ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialog(
  props: ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormDialogProps,
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
  const queryCustomizer: ServiceSelectAnswerVoteSelectionQueryCustomizer = {
    _mask: '{description,title}',
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_Form-dialog-close-wrapper"
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
          <ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_Form
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
        {editMode && actions.serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::SelectAnswerVoteSelection::SelectAnswerVoteSelection_Form::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormBack!();
              }}
            >
              <span>
                {t(
                  'service.SelectAnswerVoteSelection.SelectAnswerVoteSelection.Form.service::SelectAnswerVoteSelection::SelectAnswerVoteSelection_Form::Back',
                  { defaultValue: 'Back' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormCreate && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::SelectAnswerVoteSelection::SelectAnswerVoteSelection_Form::Create"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.serviceSelectAnswerVoteSelectionSelectAnswerVoteSelection_FormCreate!();
              }}
            >
              <span>
                {t(
                  'service.SelectAnswerVoteSelection.SelectAnswerVoteSelection.Form.service::SelectAnswerVoteSelection::SelectAnswerVoteSelection_Form::Create',
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
