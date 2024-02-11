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
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
} from '~/services/data-api';
import type { JudoRestResponse } from '~/services/data-api/rest';
import type { ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsAddSelectorActionDefinitions } from './ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsAddSelector';

const ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsAddSelector =
  lazy(
    () =>
      import(
        '~/containers/Service/Dashboard/Dashboard_View_Edit/Selector/Votes/VotesTabBar/FavoriteVotesGroup/FavoriteVoteDefinitions/AddSelector/ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsAddSelector'
      ),
  );

export interface ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsAddSelectorDialogActions
  extends ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsAddSelectorActionDefinitions {
  addAction?: (selected: ServiceVoteDefinitionStored[]) => Promise<void>;
  backAction?: () => Promise<void>;
}

export interface ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsAddSelectorDialogProps {
  ownerData: any;
  onClose: () => Promise<void>;
  actions: ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsAddSelectorDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  alreadySelected: ServiceVoteDefinitionStored[];
  selectionDiff: ServiceVoteDefinitionStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceVoteDefinitionStored[]>>;
  isDraft?: boolean;
}

// Name: service::Dashboard::Dashboard_View_Edit::Selector::votes::votesTabBar::favoriteVotesGroup::favoriteVoteDefinitions::AddSelector
export default function ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsAddSelectorDialog(
  props: ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsAddSelectorDialogProps,
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
          id="User/(esm/_vp60sGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorPageContainer-dialog-close-wrapper"
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
          <ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsAddSelector
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
              id="User/(esm/_vp60sGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorBackButton"
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
                  'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.favoriteVotesGroup.favoriteVoteDefinitions.Back',
                  { defaultValue: 'Back' },
                )}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.addAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_vp60sGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorAddButton"
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
                  'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.favoriteVotesGroup.favoriteVoteDefinitions.Add',
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