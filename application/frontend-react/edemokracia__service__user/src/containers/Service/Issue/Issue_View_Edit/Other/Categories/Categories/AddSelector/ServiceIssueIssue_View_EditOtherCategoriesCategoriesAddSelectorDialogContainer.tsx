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
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
} from '~/services/data-api';
import type { JudoRestResponse } from '~/services/data-api/rest';
import type { ServiceIssueIssue_View_EditOtherCategoriesCategoriesAddSelectorActionDefinitions } from './ServiceIssueIssue_View_EditOtherCategoriesCategoriesAddSelector';

const ServiceIssueIssue_View_EditOtherCategoriesCategoriesAddSelector = lazy(
  () =>
    import(
      '~/containers/Service/Issue/Issue_View_Edit/Other/Categories/Categories/AddSelector/ServiceIssueIssue_View_EditOtherCategoriesCategoriesAddSelector'
    ),
);

export interface ServiceIssueIssue_View_EditOtherCategoriesCategoriesAddSelectorDialogActions
  extends ServiceIssueIssue_View_EditOtherCategoriesCategoriesAddSelectorActionDefinitions {
  addAction?: (selected: ServiceIssueCategoryStored[]) => Promise<void>;
  backAction?: () => Promise<void>;
}

export interface ServiceIssueIssue_View_EditOtherCategoriesCategoriesAddSelectorDialogProps {
  ownerData: any;
  onClose: () => Promise<void>;
  actions: ServiceIssueIssue_View_EditOtherCategoriesCategoriesAddSelectorDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  alreadySelected: ServiceIssueCategoryStored[];
  selectionDiff: ServiceIssueCategoryStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceIssueCategoryStored[]>>;
  isDraft?: boolean;
}

// Name: service::Issue::Issue_View_Edit::other::categories::categories::AddSelector
export default function ServiceIssueIssue_View_EditOtherCategoriesCategoriesAddSelectorDialog(
  props: ServiceIssueIssue_View_EditOtherCategoriesCategoriesAddSelectorDialogProps,
) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const {
    ownerData,
    onClose,
    actions,
    isLoading,
    editMode,
    refreshCounter,
    selectionDiff,
    setSelectionDiff,
    alreadySelected,
    isDraft,
  } = props;

  return (
    <>
      <DialogTitle>
        {isDraft ? t('judo') : actions.getPageTitle ? actions.getPageTitle() : ''}
        <IconButton
          id="User/(esm/_LRJ3AId9Ee2kLcMqsIbMgQ)/TabularReferenceFieldTableAddSelectorPageContainer-dialog-close-wrapper"
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
          <ServiceIssueIssue_View_EditOtherCategoriesCategoriesAddSelector
            actions={actions}
            refreshCounter={refreshCounter}
            isLoading={isLoading}
            selectionDiff={selectionDiff}
            setSelectionDiff={setSelectionDiff}
            alreadySelected={alreadySelected}
            isDraft={isDraft}
          />
        </Suspense>
      </DialogContent>
      <DialogActions>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_LRJ3AId9Ee2kLcMqsIbMgQ)/TabularReferenceFieldTableAddSelectorBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>
                {t('service.Issue.Issue_View_Edit.other.categories.categories.Back', { defaultValue: 'Back' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.addAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_LRJ3AId9Ee2kLcMqsIbMgQ)/TabularReferenceFieldTableAddSelectorAddButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              disabled={!selectionDiff.length}
              startIcon={<MdiIcon path="attachment-plus" />}
              onClick={async () => {
                await actions.addAction!(selectionDiff);
              }}
            >
              <span>{t('service.Issue.Issue_View_Edit.other.categories.categories.Add', { defaultValue: 'Add' })}</span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
