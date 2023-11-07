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
import type { ServiceVoteDefinitionVoteDefinition_FormActionDefinitions } from './ServiceVoteDefinitionVoteDefinition_Form';
import type {
  ServiceVoteDefinition,
  ServiceVoteDefinitionStored,
  ServiceVoteDefinitionQueryCustomizer,
} from '~/services/data-api';

const ServiceVoteDefinitionVoteDefinition_Form = lazy(
  () => import('~/containers/Service/VoteDefinition/VoteDefinition_Form/ServiceVoteDefinitionVoteDefinition_Form'),
);

export interface ServiceVoteDefinitionVoteDefinition_FormDialogActions
  extends ServiceVoteDefinitionVoteDefinition_FormActionDefinitions {
  serviceVoteDefinitionVoteDefinition_FormGetTemplate?: () => Promise<ServiceVoteDefinition>;
  serviceVoteDefinitionVoteDefinition_FormBack?: () => Promise<void>;
  serviceVoteDefinitionVoteDefinition_FormCreate?: () => Promise<void>;
}

export interface ServiceVoteDefinitionVoteDefinition_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceVoteDefinitionVoteDefinition_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: ServiceVoteDefinition;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceVoteDefinition, value: any) => void;
  validation: Map<keyof ServiceVoteDefinition, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceVoteDefinition, string>>>;
}

// Name: service::VoteDefinition::VoteDefinition_Form
export default function ServiceVoteDefinitionVoteDefinition_FormDialog(
  props: ServiceVoteDefinitionVoteDefinition_FormDialogProps,
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
  const queryCustomizer: ServiceVoteDefinitionQueryCustomizer = {
    _mask: '{isYesNoAbstainType,created,isSelectAnswerType,description,title,closeAt,isRatingType,isYesNoType,status}',
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="ServiceVoteDefinitionVoteDefinition_Form-dialog-close-wrapper"
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
          <ServiceVoteDefinitionVoteDefinition_Form
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
        {editMode && actions.serviceVoteDefinitionVoteDefinition_FormBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::VoteDefinition::VoteDefinition_Form::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceVoteDefinitionVoteDefinition_FormBack!();
              }}
            >
              <span>
                {t('service.VoteDefinition.VoteDefinition.Form.service::VoteDefinition::VoteDefinition_Form::Back', {
                  defaultValue: 'Back',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceVoteDefinitionVoteDefinition_FormCreate && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::VoteDefinition::VoteDefinition_Form::Create"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.serviceVoteDefinitionVoteDefinition_FormCreate!();
              }}
            >
              <span>
                {t('service.VoteDefinition.VoteDefinition.Form.service::VoteDefinition::VoteDefinition_Form::Create', {
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
