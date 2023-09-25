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
  AdminSelectAnswerVoteDefinition,
  AdminSelectAnswerVoteDefinitionQueryCustomizer,
  AdminSelectAnswerVoteDefinitionStored,
  AdminSelectAnswerVoteEntry,
  AdminSelectAnswerVoteEntryQueryCustomizer,
  AdminSelectAnswerVoteEntryStored,
  AdminSelectAnswerVoteSelection,
  AdminSelectAnswerVoteSelectionQueryCustomizer,
  AdminSelectAnswerVoteSelectionStored,
  EdemokraciaVoteStatus,
  _StringOperation,
} from '~/generated/data-api';
import {
  adminSelectAnswerVoteDefinitionServiceForClassImpl,
  adminSelectAnswerVoteEntryServiceForClassImpl,
} from '~/generated/data-axios';

import { useLinkViewUserVoteEntryAction } from '../actions';

export interface UserVoteEntryLinkProps {
  ownerData: AdminSelectAnswerVoteDefinitionStored;
  validation: Map<keyof AdminSelectAnswerVoteDefinitionStored, string>;
  fetchOwnerData: () => Promise<void>;
  onChange: (value: AdminSelectAnswerVoteEntry | AdminSelectAnswerVoteEntryStored | null) => void;
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

  const userVoteEntrySortModel: GridSortModel = [{ field: 'valueRepresentation', sort: null }];

  const linkViewUserVoteEntryAction = useLinkViewUserVoteEntryAction();

  return (
    <AggregationInput
      name="userVoteEntry"
      id="LinkedemokraciaAdminAdminEdemokraciaAdminDebateSelectAnswerVoteDefinitionViewDefaultSelectAnswerVoteDefinitionViewEditUserVoteEntryGroupLabelWrapperUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntry"
      label={t('admin.SelectAnswerVoteDefinitionView.userVoteEntry', { defaultValue: 'Value' }) as string}
      labelList={[
        ownerData.userVoteEntry?.valueRepresentation?.toString() ?? '',
        ownerData.userVoteEntry?.created?.toString() ?? '',
      ]}
      ownerData={ownerData}
      error={!!validation.get('userVoteEntry')}
      helperText={validation.get('userVoteEntry')}
      icon={<MdiIcon path="vote" />}
      disabled={disabled}
      readOnly={readOnly}
      editMode={editMode}
      autoCompleteAttribute={'valueRepresentation'}
      onAutoCompleteSelect={(userVoteEntry) => {
        // storeDiff('userVoteEntry', userVoteEntry);
        onChange(userVoteEntry as AdminSelectAnswerVoteEntryStored);
      }}
      onView={async () => linkViewUserVoteEntryAction(ownerData, ownerData?.userVoteEntry!, () => fetchOwnerData())}
    />
  );
}
