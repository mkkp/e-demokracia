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
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
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
import type { ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorOwnerSetSelectorComponentActionDefinitions } from './components/ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorOwnerSetSelectorComponent';
import { ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorOwnerSetSelectorComponent } from './components/ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorOwnerSetSelectorComponent';

export const SERVICE_RATING_VOTE_DEFINITION_RATING_VOTE_DEFINITION_VIEW_EDIT_VOTE_ENTRY_BASE_VIRTUAL_OWNER_SET_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_RATING_VOTE_DEFINITION_RATING_VOTE_DEFINITION_VIEW_EDIT_VOTE_ENTRY_BASE_VIRTUAL_OWNER_SET_SELECTOR_CONTAINER_ACTIONS_HOOK';
export type ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorContainerHook =
  () => ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorActionDefinitions;

export interface ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorActionDefinitions
  extends ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorOwnerSetSelectorComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorActionDefinitions;
  selectionDiff: ServiceServiceUserStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceServiceUserStored[]>>;
  alreadySelected: ServiceServiceUserStored[];
  isDraft?: boolean;
}

// XMIID: User/(esm/_fOODEHz5Ee6Q9LyUVjs1Qw)/TabularReferenceFieldLinkSetSelectorPageContainer
// Name: service::RatingVoteDefinition::RatingVoteDefinition_View_Edit::VoteEntryBase::virtual::owner::SetSelector
export default function ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelector(
  props: ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorProps,
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
    useTrackService<ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_RATING_VOTE_DEFINITION_RATING_VOTE_DEFINITION_VIEW_EDIT_VOTE_ENTRY_BASE_VIRTUAL_OWNER_SET_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);

  return (
    <Grid container>
      <Grid item data-name="owner" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_fOODEHz5Ee6Q9LyUVjs1Qw)/TabularReferenceFieldLinkSetSelectorVisualElement"
          data-name="owner"
        >
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_fOODEHz5Ee6Q9LyUVjs1Qw)/TabularReferenceFieldLinkSetSelectorTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorOwnerSetSelectorComponent
                    uniqueId={'User/(esm/_fOODEHz5Ee6Q9LyUVjs1Qw)/TabularReferenceFieldLinkSetSelectorTable'}
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
