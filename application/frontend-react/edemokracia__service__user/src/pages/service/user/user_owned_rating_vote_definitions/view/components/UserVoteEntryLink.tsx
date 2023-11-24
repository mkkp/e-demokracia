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
  EdemokraciaVoteStatus,
  ServiceRatingVoteDefinition,
  ServiceRatingVoteDefinitionQueryCustomizer,
  ServiceRatingVoteDefinitionStored,
  ServiceRatingVoteEntry,
  ServiceRatingVoteEntryQueryCustomizer,
  ServiceRatingVoteEntryStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  _StringOperation,
} from '~/generated/data-api';
import {
  serviceRatingVoteDefinitionServiceForClassImpl,
  serviceRatingVoteEntryServiceForClassImpl,
} from '~/generated/data-axios';
import { useLinkViewUserVoteEntryAction } from '../actions';

export type UserVoteEntryLinkFilterInitializer = (ownerData: ServiceRatingVoteDefinitionStored) => Filter[] | undefined;

export const USER_VOTE_ENTRY_LINK_FILTER_INITIALIZER_INTERFACE_KEY = 'UserVoteEntryLinkFilterInitializerHook';
export type UserVoteEntryLinkFilterInitializerHook = () => UserVoteEntryLinkFilterInitializer;

export interface UserVoteEntryLinkProps {
  ownerData: ServiceRatingVoteDefinitionStored;
  validation: Map<keyof ServiceRatingVoteDefinitionStored, string>;
  fetchOwnerData: () => Promise<void>;
  onChange: (value: ServiceRatingVoteEntry | ServiceRatingVoteEntryStored | null) => void;
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
      id="LinkedemokraciaServiceUserEdemokraciaServiceUserUserOwnedRatingVoteDefinitionsViewDefaultRatingVoteDefinitionViewEditUserVoteEntryGroupLabelWrapperUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntry"
      label={t('service.RatingVoteDefinitionView.userVoteEntry', { defaultValue: 'Value' }) as string}
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
        onChange(userVoteEntry as ServiceRatingVoteEntryStored);
      }}
      onView={async () => linkViewUserVoteEntryAction(ownerData, ownerData?.userVoteEntry!, () => fetchOwnerData())}
    />
  );
}