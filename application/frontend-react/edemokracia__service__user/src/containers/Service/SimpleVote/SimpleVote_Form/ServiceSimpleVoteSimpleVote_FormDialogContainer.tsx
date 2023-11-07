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
import type { ServiceSimpleVoteSimpleVote_FormActionDefinitions } from './ServiceSimpleVoteSimpleVote_Form';
import type { ServiceSimpleVote, ServiceSimpleVoteStored, ServiceSimpleVoteQueryCustomizer } from '~/services/data-api';

const ServiceSimpleVoteSimpleVote_Form = lazy(
  () => import('~/containers/Service/SimpleVote/SimpleVote_Form/ServiceSimpleVoteSimpleVote_Form'),
);

export interface ServiceSimpleVoteSimpleVote_FormDialogActions
  extends ServiceSimpleVoteSimpleVote_FormActionDefinitions {
  serviceSimpleVoteSimpleVote_FormGetTemplate?: () => Promise<ServiceSimpleVote>;
  serviceSimpleVoteSimpleVote_FormBack?: () => Promise<void>;
  serviceSimpleVoteSimpleVote_FormCreate?: () => Promise<void>;
}

export interface ServiceSimpleVoteSimpleVote_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceSimpleVoteSimpleVote_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: ServiceSimpleVote;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceSimpleVote, value: any) => void;
  validation: Map<keyof ServiceSimpleVote, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceSimpleVote, string>>>;
}

// Name: service::SimpleVote::SimpleVote_Form
export default function ServiceSimpleVoteSimpleVote_FormDialog(props: ServiceSimpleVoteSimpleVote_FormDialogProps) {
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
  const queryCustomizer: ServiceSimpleVoteQueryCustomizer = {
    _mask: '{created,type}',
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="ServiceSimpleVoteSimpleVote_Form-dialog-close-wrapper"
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
          <ServiceSimpleVoteSimpleVote_Form
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
        {editMode && actions.serviceSimpleVoteSimpleVote_FormBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::SimpleVote::SimpleVote_Form::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceSimpleVoteSimpleVote_FormBack!();
              }}
            >
              <span>
                {t('service.SimpleVote.SimpleVote.Form.service::SimpleVote::SimpleVote_Form::Back', {
                  defaultValue: 'Back',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceSimpleVoteSimpleVote_FormCreate && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::SimpleVote::SimpleVote_Form::Create"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.serviceSimpleVoteSimpleVote_FormCreate!();
              }}
            >
              <span>
                {t('service.SimpleVote.SimpleVote.Form.service::SimpleVote::SimpleVote_Form::Create', {
                  defaultValue: 'Create',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
