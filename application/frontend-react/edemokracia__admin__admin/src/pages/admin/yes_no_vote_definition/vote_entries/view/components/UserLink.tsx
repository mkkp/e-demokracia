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
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
  AdminYesNoVoteDefinition,
  AdminYesNoVoteDefinitionStored,
  AdminYesNoVoteEntry,
  AdminYesNoVoteEntryQueryCustomizer,
  AdminYesNoVoteEntryStored,
  EdemokraciaYesNoVoteValue,
  _StringOperation,
} from '~/generated/data-api';
import { adminYesNoVoteEntryServiceForClassImpl, adminUserServiceForClassImpl } from '~/generated/data-axios';

import { useLinkViewUserAction } from '../actions';

export interface UserLinkProps {
  ownerData: AdminYesNoVoteEntryStored;
  validation: Map<keyof AdminYesNoVoteEntryStored, string>;
  fetchOwnerData: () => Promise<void>;
  onChange: (value: AdminUser | AdminUserStored | null) => void;
  disabled: boolean;
  readOnly: boolean;
  editMode: boolean;
}

export function UserLink(props: UserLinkProps) {
  const { ownerData, disabled, readOnly, editMode, fetchOwnerData, onChange, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const userSortModel: GridSortModel = [{ field: 'representation', sort: null }];

  const userColumns: GridColDef<AdminUserStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('admin.YesNoVoteEntryView.user.representation', { defaultValue: 'Representation' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const userRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminYesNoVoteDefinitionVoteEntriesViewDefaultYesNoVoteEntryViewEditUserRepresentationFilter',
      attributeName: 'representation',
      label: t('admin.YesNoVoteEntryView.user.representation', { defaultValue: 'Representation' }) as string,
      filterType: FilterType.string,
    },
  ];

  const userInitialQueryCustomizer: AdminUserQueryCustomizer = {
    _mask: '{representation}',
    _orderBy: userSortModel.length
      ? [
          {
            attribute: userSortModel[0].field,
            descending: userSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const linkViewUserAction = useLinkViewUserAction();

  return (
    <AggregationInput
      name="user"
      id="LinkedemokraciaAdminAdminEdemokraciaAdminYesNoVoteDefinitionVoteEntriesViewDefaultYesNoVoteEntryViewEditUser"
      required={true}
      label={t('admin.YesNoVoteEntryView.user', { defaultValue: 'User' }) as string}
      labelList={[ownerData.user?.representation?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validation.get('user')}
      helperText={validation.get('user')}
      icon={<MdiIcon path="account" />}
      disabled={disabled}
      readOnly={readOnly}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(user) => {
        // storeDiff('user', user);
        onChange(user as AdminUserStored);
      }}
      onView={async () => linkViewUserAction(ownerData, ownerData?.user!, () => fetchOwnerData())}
    />
  );
}
