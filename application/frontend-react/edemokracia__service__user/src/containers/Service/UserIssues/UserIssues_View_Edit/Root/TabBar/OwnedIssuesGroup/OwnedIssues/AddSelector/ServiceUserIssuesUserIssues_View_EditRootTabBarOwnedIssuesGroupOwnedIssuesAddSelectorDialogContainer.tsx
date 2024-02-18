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
import type { ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorActionDefinitions } from './ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelector';

const ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelector = lazy(
  () =>
    import(
      '~/containers/Service/UserIssues/UserIssues_View_Edit/Root/TabBar/OwnedIssuesGroup/OwnedIssues/AddSelector/ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelector'
    ),
);

export interface ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorDialogActions
  extends ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorActionDefinitions {
  addAction?: (selected: ServiceIssueStored[]) => Promise<void>;
  backAction?: () => Promise<void>;
}

export interface ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorDialogProps {
  ownerData: any;
  onClose: () => Promise<void>;
  actions: ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  alreadySelected: ServiceIssueStored[];
  selectionDiff: ServiceIssueStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceIssueStored[]>>;
  isDraft?: boolean;
}

// Name: service::UserIssues::UserIssues_View_Edit::root::tabBar::ownedIssuesGroup::ownedIssues::AddSelector
export default function ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorDialog(
  props: ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorDialogProps,
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
          id="User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldTableAddSelectorPageContainer-dialog-close-wrapper"
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
          <ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelector
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
              id="User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldTableAddSelectorBackButton"
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
              id="User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldTableAddSelectorAddButton"
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
