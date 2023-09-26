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
  AdminDebate,
  AdminDebateStored,
  AdminYesNoVoteDefinition,
  AdminYesNoVoteDefinitionQueryCustomizer,
  AdminYesNoVoteDefinitionStored,
  AdminYesNoVoteEntry,
  AdminYesNoVoteEntryQueryCustomizer,
  AdminYesNoVoteEntryStored,
  EdemokraciaVoteStatus,
  _StringOperation,
} from '~/generated/data-api';
import {
  adminYesNoVoteDefinitionServiceForClassImpl,
  adminYesNoVoteEntryServiceForClassImpl,
} from '~/generated/data-axios';
import { useLinkViewUserVoteEntryAction } from '../actions';

export type UserVoteEntryLinkFilterInitializer = (ownerData: AdminYesNoVoteDefinitionStored) => Filter[] | undefined;

export const USER_VOTE_ENTRY_LINK_FILTER_INITIALIZER_INTERFACE_KEY = 'UserVoteEntryLinkFilterInitializerHook';
export type UserVoteEntryLinkFilterInitializerHook = () => UserVoteEntryLinkFilterInitializer;

export interface UserVoteEntryLinkProps {
  ownerData: AdminYesNoVoteDefinitionStored;
  validation: Map<keyof AdminYesNoVoteDefinitionStored, string>;
  fetchOwnerData: () => Promise<void>;
  onChange: (value: AdminYesNoVoteEntry | AdminYesNoVoteEntryStored | null) => void;
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

  const { service: filterInitializerHook } = useTrackService<UserVoteEntryLinkFilterInitializerHook>(
    `(${OBJECTCLASS}=${USER_VOTE_ENTRY_LINK_FILTER_INITIALIZER_INTERFACE_KEY})`,
  );
  const callFilterInitializer: UserVoteEntryLinkFilterInitializer | undefined =
    filterInitializerHook && filterInitializerHook();

  const userVoteEntrySortModel: GridSortModel = [{ field: 'created', sort: null }];

  const linkViewUserVoteEntryAction = useLinkViewUserVoteEntryAction();

  return (
    <AggregationInput
      name="userVoteEntry"
      id="LinkedemokraciaAdminAdminEdemokraciaAdminDebateYesNoVoteDefinitionViewDefaultYesNoVoteDefinitionViewEditUserVoteEntryGroupLabelWrapperUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntry"
      label={t('admin.YesNoVoteDefinitionView.userVoteEntry', { defaultValue: 'Value' }) as string}
      labelList={[ownerData.userVoteEntry?.value?.toString() ?? '', ownerData.userVoteEntry?.created?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validation.get('userVoteEntry')}
      helperText={validation.get('userVoteEntry')}
      icon={<MdiIcon path="vote" />}
      disabled={disabled}
      readOnly={readOnly}
      editMode={editMode}
      autoCompleteAttribute={'value'}
      onAutoCompleteSelect={(userVoteEntry) => {
        // storeDiff('userVoteEntry', userVoteEntry);
        onChange(userVoteEntry as AdminYesNoVoteEntryStored);
      }}
      onView={async () => linkViewUserVoteEntryAction(ownerData, ownerData?.userVoteEntry!, () => fetchOwnerData())}
    />
  );
}
