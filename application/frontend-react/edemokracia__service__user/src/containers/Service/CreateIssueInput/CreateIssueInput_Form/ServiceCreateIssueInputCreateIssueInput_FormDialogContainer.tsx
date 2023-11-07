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
import type { ServiceCreateIssueInputCreateIssueInput_FormActionDefinitions } from './ServiceCreateIssueInputCreateIssueInput_Form';
import type {
  ServiceCreateIssueInput,
  ServiceCreateIssueInputStored,
  ServiceCreateIssueInputQueryCustomizer,
} from '~/services/data-api';

const ServiceCreateIssueInputCreateIssueInput_Form = lazy(
  () =>
    import('~/containers/Service/CreateIssueInput/CreateIssueInput_Form/ServiceCreateIssueInputCreateIssueInput_Form'),
);

export interface ServiceCreateIssueInputCreateIssueInput_FormDialogActions
  extends ServiceCreateIssueInputCreateIssueInput_FormActionDefinitions {
  serviceCreateIssueInputCreateIssueInput_FormGetTemplate?: () => Promise<ServiceCreateIssueInput>;
  serviceCreateIssueInputCreateIssueInput_FormBack?: () => Promise<void>;
  serviceCreateIssueInputCreateIssueInput_FormCreate?: () => Promise<void>;
  serviceUserIssuesUserIssues_View_EditRootActionGroupCreateIssue?: () => Promise<void>;
}

export interface ServiceCreateIssueInputCreateIssueInput_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceCreateIssueInputCreateIssueInput_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: ServiceCreateIssueInput;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceCreateIssueInput, value: any) => void;
  validation: Map<keyof ServiceCreateIssueInput, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceCreateIssueInput, string>>>;
}

// Name: service::CreateIssueInput::CreateIssueInput_Form
export default function ServiceCreateIssueInputCreateIssueInput_FormDialog(
  props: ServiceCreateIssueInputCreateIssueInput_FormDialogProps,
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
  const queryCustomizer: ServiceCreateIssueInputQueryCustomizer = {
    _mask:
      '{debateCloseAt,description,title,city{representation,name,county},county{representation,name},district{representation,name,county,city},issueType{representation,title,description}}',
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="ServiceCreateIssueInputCreateIssueInput_Form-dialog-close-wrapper"
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
          <ServiceCreateIssueInputCreateIssueInput_Form
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
        {editMode && actions.serviceCreateIssueInputCreateIssueInput_FormBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::CreateIssueInput::CreateIssueInput_Form::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceCreateIssueInputCreateIssueInput_FormBack!();
              }}
            >
              <span>
                {t(
                  'service.CreateIssueInput.CreateIssueInput.Form.service::CreateIssueInput::CreateIssueInput_Form::Back',
                  { defaultValue: 'Back' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceCreateIssueInputCreateIssueInput_FormCreate && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::CreateIssueInput::CreateIssueInput_Form::Create"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.serviceCreateIssueInputCreateIssueInput_FormCreate!();
              }}
            >
              <span>
                {t(
                  'service.CreateIssueInput.CreateIssueInput.Form.service::CreateIssueInput::CreateIssueInput_Form::Create',
                  { defaultValue: 'Create' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceUserIssuesUserIssues_View_EditRootActionGroupCreateIssue && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::UserIssues::UserIssues_View_Edit::root::actionGroup::createIssue::OperationFormCallButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="wechat" />}
              onClick={async () => {
                await actions.serviceUserIssuesUserIssues_View_EditRootActionGroupCreateIssue!();
              }}
            >
              <span>
                {t(
                  'service.CreateIssueInput.CreateIssueInput.Form.service::UserIssues::UserIssues_View_Edit::root::actionGroup::createIssue::OperationFormCallButton',
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
