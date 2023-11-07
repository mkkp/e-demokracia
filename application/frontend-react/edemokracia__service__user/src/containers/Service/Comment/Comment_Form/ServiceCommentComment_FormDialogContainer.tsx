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
import type { ServiceCommentComment_FormActionDefinitions } from './ServiceCommentComment_Form';
import type { ServiceComment, ServiceCommentStored, ServiceCommentQueryCustomizer } from '~/services/data-api';

const ServiceCommentComment_Form = lazy(
  () => import('~/containers/Service/Comment/Comment_Form/ServiceCommentComment_Form'),
);

export interface ServiceCommentComment_FormDialogActions extends ServiceCommentComment_FormActionDefinitions {
  serviceCommentComment_FormGetTemplate?: () => Promise<ServiceComment>;
  serviceCommentComment_FormBack?: () => Promise<void>;
  serviceCommentComment_FormCreate?: () => Promise<void>;
}

export interface ServiceCommentComment_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceCommentComment_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: ServiceComment;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceComment, value: any) => void;
  validation: Map<keyof ServiceComment, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceComment, string>>>;
}

// Name: service::Comment::Comment_Form
export default function ServiceCommentComment_FormDialog(props: ServiceCommentComment_FormDialogProps) {
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
  const queryCustomizer: ServiceCommentQueryCustomizer = {
    _mask: '{created,upVotes,comment,downVotes,createdBy{representation}}',
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="ServiceCommentComment_Form-dialog-close-wrapper"
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
          <ServiceCommentComment_Form
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
        {editMode && actions.serviceCommentComment_FormBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::Comment::Comment_Form::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceCommentComment_FormBack!();
              }}
            >
              <span>
                {t('service.Comment.Comment.Form.service::Comment::Comment_Form::Back', { defaultValue: 'Back' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceCommentComment_FormCreate && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::Comment::Comment_Form::Create"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.serviceCommentComment_FormCreate!();
              }}
            >
              <span>
                {t('service.Comment.Comment.Form.service::Comment::Comment_Form::Create', { defaultValue: 'Create' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
