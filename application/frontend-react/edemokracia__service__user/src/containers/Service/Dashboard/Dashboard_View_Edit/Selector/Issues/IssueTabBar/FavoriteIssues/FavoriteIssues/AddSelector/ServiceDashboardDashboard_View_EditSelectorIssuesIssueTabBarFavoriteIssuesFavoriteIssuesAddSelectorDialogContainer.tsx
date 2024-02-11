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
import type { ServiceIssue, ServiceIssueQueryCustomizer, ServiceIssueStored } from '~/services/data-api';
import type { JudoRestResponse } from '~/services/data-api/rest';
import type { ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarFavoriteIssuesFavoriteIssuesAddSelectorActionDefinitions } from './ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarFavoriteIssuesFavoriteIssuesAddSelector';

const ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarFavoriteIssuesFavoriteIssuesAddSelector = lazy(
  () =>
    import(
      '~/containers/Service/Dashboard/Dashboard_View_Edit/Selector/Issues/IssueTabBar/FavoriteIssues/FavoriteIssues/AddSelector/ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarFavoriteIssuesFavoriteIssuesAddSelector'
    ),
);

export interface ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarFavoriteIssuesFavoriteIssuesAddSelectorDialogActions
  extends ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarFavoriteIssuesFavoriteIssuesAddSelectorActionDefinitions {
  addAction?: (selected: ServiceIssueStored[]) => Promise<void>;
  backAction?: () => Promise<void>;
}

export interface ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarFavoriteIssuesFavoriteIssuesAddSelectorDialogProps {
  ownerData: any;
  onClose: () => Promise<void>;
  actions: ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarFavoriteIssuesFavoriteIssuesAddSelectorDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  alreadySelected: ServiceIssueStored[];
  selectionDiff: ServiceIssueStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceIssueStored[]>>;
  isDraft?: boolean;
}

// Name: service::Dashboard::Dashboard_View_Edit::Selector::issues::IssueTabBar::favoriteIssues::favoriteIssues::AddSelector
export default function ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarFavoriteIssuesFavoriteIssuesAddSelectorDialog(
  props: ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarFavoriteIssuesFavoriteIssuesAddSelectorDialogProps,
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
          id="User/(esm/_7sPXAFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldTableAddSelectorPageContainer-dialog-close-wrapper"
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
          <ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarFavoriteIssuesFavoriteIssuesAddSelector
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
              id="User/(esm/_7sPXAFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldTableAddSelectorBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>
                {t(
                  'service.Dashboard.Dashboard_View_Edit.Selector.issues.IssueTabBar.favoriteIssues.favoriteIssues.Back',
                  { defaultValue: 'Back' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.addAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_7sPXAFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldTableAddSelectorAddButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              disabled={!selectionDiff.length}
              startIcon={<MdiIcon path="attachment-plus" />}
              onClick={async () => {
                await actions.addAction!(selectionDiff);
              }}
            >
              <span>
                {t(
                  'service.Dashboard.Dashboard_View_Edit.Selector.issues.IssueTabBar.favoriteIssues.favoriteIssues.Add',
                  { defaultValue: 'Add' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
