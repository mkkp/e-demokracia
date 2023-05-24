//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getLinksForPages(#application)
// Path expression: #pagePath(#self.pageDefinition)+'components/'+#linkComponentName(#self)+'.tsx'
// Template name: actor/src/pages/components/link.tsx
// Template file: actor/src/pages/components/link.tsx.hbs

import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import type {
  GridColDef,
  GridRenderCellParams,
  GridRowParams,
  GridSortModel,
  GridValueFormatterParams,
  GridRowId,
  GridSortItem,
} from '@mui/x-data-grid';
import { MdiIcon } from '~/components';
import {
  AggregationInput,
  AssociationButton,
  BinaryInput,
  CollectionAssociationButton,
  TrinaryLogicCombobox,
} from '~/components/widgets';
import { useFilterDialog, useRangeDialog } from '~/components/dialog';
import { FilterOption, FilterType } from '~/components-api';
import { baseColumnConfig, toastConfig } from '~/config';
import {
  fileHandling,
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
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
  AdminVoteDefinition,
  AdminVoteDefinitionQueryCustomizer,
  AdminVoteDefinitionStored,
  EdemokraciaDebateStatus,
} from '~/generated/data-api';
import { adminDebateServiceImpl, adminVoteDefinitionServiceImpl } from '~/generated/data-axios';

import { useLinkViewVoteDefinitionAction } from '../actions';

export interface VoteDefinitionLinkProps {
  ownerData: AdminDebateStored;
  storeDiff: (attributeName: keyof AdminDebateStored, value: any) => void;
  validation: Map<keyof AdminDebateStored, string>;
  fetchOwnerData: () => Promise<void>;
  disabled: boolean;
  editMode: boolean;
}

export function VoteDefinitionLink(props: VoteDefinitionLinkProps) {
  const { ownerData, disabled, editMode, fetchOwnerData, storeDiff, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const voteDefinitionSortModel: GridSortModel = [{ field: 'title', sort: 'asc' }];

  const linkViewVoteDefinitionAction = useLinkViewVoteDefinitionAction();

  return (
    <AggregationInput
      name="voteDefinition"
      id="LinkedemokraciaAdminAdminEdemokraciaAdminVoteDefinitionDebateViewDefaultDebateViewDebateLabelWrapperDebateVoteDefinition"
      label={t('admin.DebateView.voteDefinition', { defaultValue: 'VoteDefinition' }) as string}
      labelList={[
        ownerData.voteDefinition?.title?.toString() ?? '',
        ownerData.voteDefinition?.created?.toString() ?? '',
        ownerData.voteDefinition?.status?.toString() ?? '',
        ownerData.voteDefinition?.closeAt?.toString() ?? '',
      ]}
      value={ownerData.voteDefinition}
      error={!!validation.get('voteDefinition')}
      helperText={validation.get('voteDefinition')}
      icon={<MdiIcon path="table_rows" />}
      disabled={disabled}
      editMode={editMode}
      onView={async () => linkViewVoteDefinitionAction(ownerData, ownerData?.voteDefinition!)}
    />
  );
}
