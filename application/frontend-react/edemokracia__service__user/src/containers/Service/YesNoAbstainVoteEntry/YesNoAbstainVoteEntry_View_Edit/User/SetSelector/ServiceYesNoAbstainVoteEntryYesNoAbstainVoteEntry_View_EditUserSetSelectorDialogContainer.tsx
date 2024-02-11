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
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
import type { JudoRestResponse } from '~/services/data-api/rest';
import type { ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorActionDefinitions } from './ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelector';

const ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelector = lazy(
  () =>
    import(
      '~/containers/Service/YesNoAbstainVoteEntry/YesNoAbstainVoteEntry_View_Edit/User/SetSelector/ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelector'
    ),
);

export interface ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorDialogActions
  extends ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorActionDefinitions {
  backAction?: () => Promise<void>;
  setAction?: (selected: ServiceServiceUserStored[]) => Promise<void>;
}

export interface ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorDialogProps {
  ownerData: any;
  onClose: () => Promise<void>;
  actions: ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorDialogActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
  alreadySelected: ServiceServiceUserStored[];
  selectionDiff: ServiceServiceUserStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceServiceUserStored[]>>;
  isDraft?: boolean;
}

// Name: service::YesNoAbstainVoteEntry::YesNoAbstainVoteEntry_View_Edit::user::SetSelector
export default function ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorDialog(
  props: ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorDialogProps,
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
          id="User/(esm/_eryuAFskEe6Mx9dH3yj5gQ)/TabularReferenceFieldLinkSetSelectorPageContainer-dialog-close-wrapper"
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
          <ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelector
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
              id="User/(esm/_eryuAFskEe6Mx9dH3yj5gQ)/TabularReferenceFieldLinkSetSelectorBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>
                {t('service.YesNoAbstainVoteEntry.YesNoAbstainVoteEntry_View_Edit.user.Back', { defaultValue: 'Back' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && actions.setAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_eryuAFskEe6Mx9dH3yj5gQ)/TabularReferenceFieldLinkSetSelectorSetButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'contained'}
              disabled={!selectionDiff.length}
              startIcon={<MdiIcon path="attachment-plus" />}
              onClick={async () => {
                await actions.setAction!(selectionDiff);
              }}
            >
              <span>
                {t('service.YesNoAbstainVoteEntry.YesNoAbstainVoteEntry_View_Edit.user.Set', { defaultValue: 'Set' })}
              </span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
