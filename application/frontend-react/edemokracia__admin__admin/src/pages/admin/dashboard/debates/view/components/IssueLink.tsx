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
  GridFilterModel,
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
  AdminDashboard,
  AdminDashboardStored,
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
  _StringOperation,
} from '~/generated/data-api';
import { adminDebateServiceForClassImpl, adminIssueServiceForClassImpl } from '~/generated/data-axios';

import { useLinkViewIssueAction } from '../actions';

export interface IssueLinkProps {
  ownerData: AdminDebateStored;
  storeDiff: (attributeName: keyof AdminDebateStored, value: any) => void;
  validation: Map<keyof AdminDebateStored, string>;
  fetchOwnerData: () => Promise<void>;
  disabled: boolean;
  readOnly: boolean;
  editMode: boolean;
}

export function IssueLink(props: IssueLinkProps) {
  const { ownerData, disabled, readOnly, editMode, fetchOwnerData, storeDiff, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const issueSortModel: GridSortModel = [{ field: 'representation', sort: null }];

  const linkViewIssueAction = useLinkViewIssueAction();

  return (
    <AggregationInput
      name="issue"
      id="LinkedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewDebateLabelWrapperDebateIssue"
      label={t('admin.DebateView.issue', { defaultValue: 'Issue' }) as string}
      labelList={[ownerData.issue?.representation?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validation.get('issue')}
      helperText={validation.get('issue')}
      icon={<MdiIcon path="file-document" />}
      disabled={disabled}
      readOnly={readOnly}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(issue) => {
        storeDiff('issue', issue);
      }}
      onView={async () => linkViewIssueAction(ownerData, ownerData?.issue!, () => fetchOwnerData())}
    />
  );
}