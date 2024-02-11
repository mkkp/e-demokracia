//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.pageContainers
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'.tsx'
// Template name: actor/src/containers/container.tsx
// Template file: actor/src/containers/container.tsx.hbs

import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import type { Dispatch, FC, SetStateAction } from 'react';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownButton, MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { useL10N } from '~/l10n/l10n-context';
import { ServiceServiceUser, ServiceServiceUserQueryCustomizer, ServiceServiceUserStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorOwnerSetSelectorComponentActionDefinitions } from './components/ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorOwnerSetSelectorComponent';
import { ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorOwnerSetSelectorComponent } from './components/ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorOwnerSetSelectorComponent';

export const SERVICE_RATING_VOTE_ENTRY_RATING_VOTE_ENTRY_VIEW_EDIT_OWNER_SET_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_RATING_VOTE_ENTRY_RATING_VOTE_ENTRY_VIEW_EDIT_OWNER_SET_SELECTOR_CONTAINER_ACTIONS_HOOK';
export type ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorContainerHook =
  () => ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorActionDefinitions;

export interface ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorActionDefinitions
  extends ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorOwnerSetSelectorComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorActionDefinitions;
  selectionDiff: ServiceServiceUserStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceServiceUserStored[]>>;
  alreadySelected: ServiceServiceUserStored[];
  isDraft?: boolean;
}

// XMIID: User/(esm/_L_YV8FuXEe6T042_LMmSdQ)/TabularReferenceFieldLinkSetSelectorPageContainer
// Name: service::RatingVoteEntry::RatingVoteEntry_View_Edit::owner::SetSelector
export default function ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelector(
  props: ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorProps,
) {
  // Container props
  const {
    refreshCounter,
    isLoading,
    isDraft,
    actions: pageActions,
    selectionDiff,
    setSelectionDiff,
    alreadySelected,
  } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  // Pandino Container Action overrides
  const { service: customContainerHook } =
    useTrackService<ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_RATING_VOTE_ENTRY_RATING_VOTE_ENTRY_VIEW_EDIT_OWNER_SET_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="owner" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_L_YV8FuXEe6T042_LMmSdQ)/TabularReferenceFieldLinkSetSelectorVisualElement"
          data-name="owner"
        >
          <CardContent>
            <Grid container direction="row" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_L_YV8FuXEe6T042_LMmSdQ)/TabularReferenceFieldLinkSetSelectorTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorOwnerSetSelectorComponent
                    uniqueId={'User/(esm/_L_YV8FuXEe6T042_LMmSdQ)/TabularReferenceFieldLinkSetSelectorTable'}
                    actions={actions}
                    selectionDiff={selectionDiff}
                    setSelectionDiff={setSelectionDiff}
                    alreadySelected={alreadySelected}
                    refreshCounter={refreshCounter}
                    isOwnerLoading={isLoading}
                  />
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
