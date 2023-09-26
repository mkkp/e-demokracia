//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getLinksForPages(#application)
// Path expression: #pagePath(#self.pageDefinition)+'components/'+#linkComponentName(#self)+'.tsx'
// Template name: actor/src/pages/components/link.tsx
// Template file: actor/src/pages/components/link.tsx.hbs

import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup } from '@mui/material';
import type {
  GridColDef,
  GridFilterModel,
  GridRenderCellParams,
  GridRowParams,
  GridSortModel,
  GridValueFormatterParams,
  GridRowId,
  GridSortItem,
} from '@mui/x-data-grid';
import { useTrackService } from '@pandino/react-hooks';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { MdiIcon } from '~/components';
import {
  AggregationInput,
  AssociationButton,
  BinaryInput,
  CollectionAssociationButton,
  TrinaryLogicCombobox,
} from '~/components/widgets';
import { useFilterDialog, useRangeDialog } from '~/components/dialog';
import { FilterType } from '~/components-api';
import type { FilterOption, Filter } from '~/components-api';
import { baseColumnConfig, toastConfig } from '~/config';
import {
  fileHandling,
  mapAllFiltersToQueryCustomizerProperties,
  serviceDateToUiDate,
  serviceTimeToUiTime,
  processQueryCustomizer,
  PersistedTableData,
  TableRowAction,
} from '~/utilities';
import { useL10N } from '~/l10n/l10n-context';

import {
  AdminComment,
  AdminCommentQueryCustomizer,
  AdminCommentStored,
  AdminCon,
  AdminConQueryCustomizer,
  AdminConStored,
  AdminDebate,
  AdminDebateQueryCustomizer,
  AdminDebateStored,
  AdminIssue,
  AdminIssueQueryCustomizer,
  AdminIssueStored,
  AdminPro,
  AdminProQueryCustomizer,
  AdminProStored,
  AdminRatingVoteDefinition,
  AdminRatingVoteDefinitionStored,
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
  AdminVoteDefinition,
  AdminVoteDefinitionQueryCustomizer,
  AdminVoteDefinitionStored,
  EdemokraciaDebateStatus,
  _StringOperation,
} from '~/generated/data-api';
import { adminDebateServiceForClassImpl, adminVoteDefinitionServiceForClassImpl } from '~/generated/data-axios';
import { useLinkViewVoteDefinitionAction } from '../actions';

export type VoteDefinitionLinkFilterInitializer = (ownerData: AdminDebateStored) => Filter[] | undefined;

export const VOTE_DEFINITION_LINK_FILTER_INITIALIZER_INTERFACE_KEY = 'VoteDefinitionLinkFilterInitializerHook';
export type VoteDefinitionLinkFilterInitializerHook = () => VoteDefinitionLinkFilterInitializer;

export interface VoteDefinitionLinkProps {
  ownerData: AdminDebateStored;
  validation: Map<keyof AdminDebateStored, string>;
  fetchOwnerData: () => Promise<void>;
  onChange: (value: AdminVoteDefinition | AdminVoteDefinitionStored | null) => void;
  disabled: boolean;
  readOnly: boolean;
  editMode: boolean;
}

export function VoteDefinitionLink(props: VoteDefinitionLinkProps) {
  const { ownerData, disabled, readOnly, editMode, fetchOwnerData, onChange, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const { service: filterInitializerHook } = useTrackService<VoteDefinitionLinkFilterInitializerHook>(
    `(${OBJECTCLASS}=${VOTE_DEFINITION_LINK_FILTER_INITIALIZER_INTERFACE_KEY})`,
  );
  const callFilterInitializer: VoteDefinitionLinkFilterInitializer | undefined =
    filterInitializerHook && filterInitializerHook();

  const voteDefinitionSortModel: GridSortModel = [{ field: 'title', sort: null }];

  const linkViewVoteDefinitionAction = useLinkViewVoteDefinitionAction();

  return (
    <AggregationInput
      name="voteDefinition"
      id="LinkedemokraciaAdminAdminEdemokraciaAdminRatingVoteDefinitionDebateViewDefaultDebateViewEditDebateLabelWrapperDebateVoteDefinition"
      label={t('admin.DebateView.voteDefinition', { defaultValue: 'VoteDefinition' }) as string}
      labelList={[
        ownerData.voteDefinition?.title?.toString() ?? '',
        ownerData.voteDefinition?.created?.toString() ?? '',
        ownerData.voteDefinition?.status?.toString() ?? '',
        ownerData.voteDefinition?.closeAt?.toString() ?? '',
      ]}
      ownerData={ownerData}
      error={!!validation.get('voteDefinition')}
      helperText={validation.get('voteDefinition')}
      icon={<MdiIcon path="table_rows" />}
      disabled={disabled}
      readOnly={readOnly}
      editMode={editMode}
      autoCompleteAttribute={'title'}
      onAutoCompleteSelect={(voteDefinition) => {
        // storeDiff('voteDefinition', voteDefinition);
        onChange(voteDefinition as AdminVoteDefinitionStored);
      }}
      onView={async () => linkViewVoteDefinitionAction(ownerData, ownerData?.voteDefinition!, () => fetchOwnerData())}
    />
  );
}
