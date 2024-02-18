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
import type { ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorActionDefinitions } from './ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelector';

const ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelector =
  lazy(
    () =>
      import(
        '~/containers/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/Root/TabBar/OwnedVoteDefinitionsGroup/OwnedVoteDefinitions/AddSelector/ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelector'
      ),
  );

export interface ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorDialogActions
  extends ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorActionDefinitions {
  addAction?: (selected: ServiceVoteDefinitionStored[]) => Promise<void>;
  backAction?: () => Promise<void>;
}

export interface ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorDialogProps {
  ownerData: any;
  onClose: () => Promise<void>;
  actions: ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  alreadySelected: ServiceVoteDefinitionStored[];
  selectionDiff: ServiceVoteDefinitionStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceVoteDefinitionStored[]>>;
  isDraft?: boolean;
}

// Name: service::UserVoteDefinition::UserVoteDefinition_View_Edit::root::tabBar::OwnedVoteDefinitionsGroup::ownedVoteDefinitions::AddSelector
export default function ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorDialog(
  props: ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorDialogProps,
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
          id="User/(esm/_GBBigF5HEe6vsex_cZNQbQ)/TabularReferenceFieldTableAddSelectorPageContainer-dialog-close-wrapper"
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
          <ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelector
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
              id="User/(esm/_GBBigF5HEe6vsex_cZNQbQ)/TabularReferenceFieldTableAddSelectorBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              disabled={isLoading}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('judo.action.back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.addAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_GBBigF5HEe6vsex_cZNQbQ)/TabularReferenceFieldTableAddSelectorAddButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              disabled={!selectionDiff.length}
              startIcon={<MdiIcon path="attachment-plus" />}
              onClick={async () => {
                await actions.addAction!(selectionDiff);
              }}
            >
              <span>{t('judo.action.add', { defaultValue: 'Add' })}</span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
