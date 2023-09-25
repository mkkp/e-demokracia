//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getLinksForViewDialogs(#application)
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
  AdminSelectAnswerVoteDefinition,
  AdminSelectAnswerVoteDefinitionStored,
  AdminSelectAnswerVoteEntry,
  AdminSelectAnswerVoteEntryQueryCustomizer,
  AdminSelectAnswerVoteEntryStored,
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
  _StringOperation,
} from '~/generated/data-api';
import { adminSelectAnswerVoteEntryServiceForClassImpl, adminUserServiceForClassImpl } from '~/generated/data-axios';

import { useLinkViewOwnerAction } from '../actions';

export interface OwnerLinkProps {
  ownerData: AdminSelectAnswerVoteEntryStored;
  validation: Map<keyof AdminSelectAnswerVoteEntryStored, string>;
  fetchOwnerData: () => Promise<void>;
  onChange: (value: AdminUser | AdminUserStored | null) => void;
  disabled: boolean;
  readOnly: boolean;
  editMode: boolean;
}

export function OwnerLink(props: OwnerLinkProps) {
  const { ownerData, disabled, readOnly, editMode, fetchOwnerData, onChange, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const ownerSortModel: GridSortModel = [{ field: 'representation', sort: null }];

  const ownerColumns: GridColDef<AdminUserStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('admin.SelectAnswerVoteEntryView.owner.representation', {
        defaultValue: 'Representation',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const ownerRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminSelectAnswerVoteDefinitionUserVoteEntryViewDefaultSelectAnswerVoteEntryViewEditOwnerRepresentationFilter',
      attributeName: 'representation',
      label: t('admin.SelectAnswerVoteEntryView.owner.representation', { defaultValue: 'Representation' }) as string,
      filterType: FilterType.string,
    },
  ];

  const ownerInitialQueryCustomizer: AdminUserQueryCustomizer = {
    _mask: '{representation}',
    _orderBy: ownerSortModel.length
      ? [
          {
            attribute: ownerSortModel[0].field,
            descending: ownerSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const linkViewOwnerAction = useLinkViewOwnerAction();

  return (
    <AggregationInput
      name="owner"
      id="LinkedemokraciaAdminAdminEdemokraciaAdminSelectAnswerVoteDefinitionUserVoteEntryViewDefaultSelectAnswerVoteEntryViewEditOwner"
      required={true}
      label={t('admin.SelectAnswerVoteEntryView.owner', { defaultValue: 'Owner' }) as string}
      labelList={[ownerData.owner?.representation?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validation.get('owner')}
      helperText={validation.get('owner')}
      icon={<MdiIcon path="table_rows" />}
      disabled={disabled}
      readOnly={readOnly}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(owner) => {
        // storeDiff('owner', owner);
        onChange(owner as AdminUserStored);
      }}
      onView={async () => linkViewOwnerAction(ownerData, ownerData?.owner!, () => fetchOwnerData())}
    />
  );
}
