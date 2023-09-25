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
  AdminDebate,
  AdminDebateStored,
  AdminRatingVoteDefinition,
  AdminRatingVoteDefinitionQueryCustomizer,
  AdminRatingVoteDefinitionStored,
  AdminRatingVoteEntry,
  AdminRatingVoteEntryQueryCustomizer,
  AdminRatingVoteEntryStored,
  EdemokraciaVoteStatus,
  _StringOperation,
} from '~/generated/data-api';
import {
  adminRatingVoteDefinitionServiceForClassImpl,
  adminRatingVoteEntryServiceForClassImpl,
} from '~/generated/data-axios';

import { useLinkViewUserVoteEntryAction } from '../actions';

export interface UserVoteEntryLinkProps {
  ownerData: AdminRatingVoteDefinitionStored;
  validation: Map<keyof AdminRatingVoteDefinitionStored, string>;
  fetchOwnerData: () => Promise<void>;
  onChange: (value: AdminRatingVoteEntry | AdminRatingVoteEntryStored | null) => void;
  disabled: boolean;
  readOnly: boolean;
  editMode: boolean;
}

export function UserVoteEntryLink(props: UserVoteEntryLinkProps) {
  const { ownerData, disabled, readOnly, editMode, fetchOwnerData, onChange, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const userVoteEntrySortModel: GridSortModel = [{ field: 'created', sort: null }];

  const linkViewUserVoteEntryAction = useLinkViewUserVoteEntryAction();

  return (
    <AggregationInput
      name="userVoteEntry"
      id="LinkedemokraciaAdminAdminEdemokraciaAdminDebateRatingVoteDefinitionViewDefaultRatingVoteDefinitionViewEditUserVoteEntryGroupLabelWrapperUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntry"
      label={t('admin.RatingVoteDefinitionView.userVoteEntry', { defaultValue: 'Value' }) as string}
      labelList={[ownerData.userVoteEntry?.created?.toString() ?? '', ownerData.userVoteEntry?.value?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validation.get('userVoteEntry')}
      helperText={validation.get('userVoteEntry')}
      icon={<MdiIcon path="vote" />}
      disabled={disabled}
      readOnly={readOnly}
      editMode={editMode}
      autoCompleteAttribute={'created'}
      onAutoCompleteSelect={(userVoteEntry) => {
        // storeDiff('userVoteEntry', userVoteEntry);
        onChange(userVoteEntry as AdminRatingVoteEntryStored);
      }}
      onView={async () => linkViewUserVoteEntryAction(ownerData, ownerData?.userVoteEntry!, () => fetchOwnerData())}
    />
  );
}
