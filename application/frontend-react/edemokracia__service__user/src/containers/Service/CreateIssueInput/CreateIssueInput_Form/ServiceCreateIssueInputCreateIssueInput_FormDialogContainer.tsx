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
  getTemplateAction?: () => Promise<ServiceCreateIssueInput>;
  backAction?: () => Promise<void>;
  createAction?: () => Promise<void>;
  createIssueForUserIssuesAction?: () => Promise<void>;
}

export interface ServiceCreateIssueInputCreateIssueInput_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => Promise<void>;
  actions: ServiceCreateIssueInputCreateIssueInput_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: ServiceCreateIssueInputStored;
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
          id="User/(esm/_oCqSgIeIEe2kLcMqsIbMgQ)/TransferObjectFormPageContainer-dialog-close-wrapper"
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
        {editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_oCqSgIeIEe2kLcMqsIbMgQ)/TransferObjectFormBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('service.CreateIssueInput.CreateIssueInput_Form.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.createAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_oCqSgIeIEe2kLcMqsIbMgQ)/TransferObjectFormCreateButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.createAction!();
              }}
            >
              <span>{t('service.CreateIssueInput.CreateIssueInput_Form.Create', { defaultValue: 'Create' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.createIssueForUserIssuesAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_jK51w1q4Ee6_67aMO2jOsw)/OperationFormCallButton/(discriminator/_vTlnAY0GEe6vroMdQ80Hug)"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="wechat" />}
              onClick={async () => {
                await actions.createIssueForUserIssuesAction!();
              }}
            >
              <span>
                {t('service.UserIssues.UserIssues_View_Edit.root.actionGroup.createIssue.OperationFormCallButton', {
                  defaultValue: 'Submit',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
