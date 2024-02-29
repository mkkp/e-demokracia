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
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
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
import type { ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorUserSetSelectorComponentActionDefinitions } from './components/ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorUserSetSelectorComponent';
import { ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorUserSetSelectorComponent } from './components/ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorUserSetSelectorComponent';

export const SERVICE_YES_NO_ABSTAIN_VOTE_ENTRY_YES_NO_ABSTAIN_VOTE_ENTRY_VIEW_EDIT_USER_SET_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_YES_NO_ABSTAIN_VOTE_ENTRY_YES_NO_ABSTAIN_VOTE_ENTRY_VIEW_EDIT_USER_SET_SELECTOR_CONTAINER_ACTIONS_HOOK';
export type ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorContainerHook =
  () => ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorActionDefinitions;

export interface ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorActionDefinitions
  extends ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorUserSetSelectorComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorActionDefinitions;
  selectionDiff: ServiceServiceUserStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceServiceUserStored[]>>;
  alreadySelected: ServiceServiceUserStored[];
  isDraft?: boolean;
}

// XMIID: User/(esm/_eryuAFskEe6Mx9dH3yj5gQ)/TabularReferenceFieldLinkSetSelectorPageContainer
// Name: service::YesNoAbstainVoteEntry::YesNoAbstainVoteEntry_View_Edit::user::SetSelector
export default function ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelector(
  props: ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorProps,
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
    useTrackService<ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_YES_NO_ABSTAIN_VOTE_ENTRY_YES_NO_ABSTAIN_VOTE_ENTRY_VIEW_EDIT_USER_SET_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);

  return (
    <Grid container>
      <Grid item data-name="user" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_eryuAFskEe6Mx9dH3yj5gQ)/TabularReferenceFieldLinkSetSelectorVisualElement"
          data-name="user"
        >
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_eryuAFskEe6Mx9dH3yj5gQ)/TabularReferenceFieldLinkSetSelectorTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorUserSetSelectorComponent
                    uniqueId={'User/(esm/_eryuAFskEe6Mx9dH3yj5gQ)/TabularReferenceFieldLinkSetSelectorTable'}
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
