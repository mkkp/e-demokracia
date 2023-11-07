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
import type { ServiceIssueCategoryIssueCategory_FormActionDefinitions } from './ServiceIssueCategoryIssueCategory_Form';
import type {
  ServiceIssueCategory,
  ServiceIssueCategoryStored,
  ServiceIssueCategoryQueryCustomizer,
} from '~/services/data-api';

const ServiceIssueCategoryIssueCategory_Form = lazy(
  () => import('~/containers/Service/IssueCategory/IssueCategory_Form/ServiceIssueCategoryIssueCategory_Form'),
);

export interface ServiceIssueCategoryIssueCategory_FormDialogActions
  extends ServiceIssueCategoryIssueCategory_FormActionDefinitions {
  serviceIssueCategoryIssueCategory_FormGetTemplate?: () => Promise<ServiceIssueCategory>;
  serviceIssueCategoryIssueCategory_FormBack?: () => Promise<void>;
  serviceIssueCategoryIssueCategory_FormCreate?: () => Promise<void>;
}

export interface ServiceIssueCategoryIssueCategory_FormDialogProps {
  ownerData: any;
  title: string;
  onClose: () => void;
  actions: ServiceIssueCategoryIssueCategory_FormDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;

  data: ServiceIssueCategory;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceIssueCategory, value: any) => void;
  validation: Map<keyof ServiceIssueCategory, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceIssueCategory, string>>>;
}

// Name: service::IssueCategory::IssueCategory_Form
export default function ServiceIssueCategoryIssueCategory_FormDialog(
  props: ServiceIssueCategoryIssueCategory_FormDialogProps,
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
  const queryCustomizer: ServiceIssueCategoryQueryCustomizer = {
    _mask: '{description,title,owner{representation}}',
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="ServiceIssueCategoryIssueCategory_Form-dialog-close-wrapper"
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
          <ServiceIssueCategoryIssueCategory_Form
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
        {editMode && actions.serviceIssueCategoryIssueCategory_FormBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::IssueCategory::IssueCategory_Form::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceIssueCategoryIssueCategory_FormBack!();
              }}
            >
              <span>
                {t('service.IssueCategory.IssueCategory.Form.service::IssueCategory::IssueCategory_Form::Back', {
                  defaultValue: 'Back',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {editMode && actions.serviceIssueCategoryIssueCategory_FormCreate && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::IssueCategory::IssueCategory_Form::Create"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              startIcon={<MdiIcon path="content-save" />}
              onClick={async () => {
                await actions.serviceIssueCategoryIssueCategory_FormCreate!();
              }}
            >
              <span>
                {t('service.IssueCategory.IssueCategory.Form.service::IssueCategory::IssueCategory_Form::Create', {
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
