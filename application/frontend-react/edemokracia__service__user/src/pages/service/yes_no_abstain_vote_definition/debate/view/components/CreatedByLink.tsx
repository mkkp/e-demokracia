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
  EdemokraciaDebateStatus,
  EdemokraciaIssueScope,
  ServiceComment,
  ServiceCommentQueryCustomizer,
  ServiceCommentStored,
  ServiceCon,
  ServiceConQueryCustomizer,
  ServiceConStored,
  ServiceDebate,
  ServiceDebateQueryCustomizer,
  ServiceDebateStored,
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServicePro,
  ServiceProQueryCustomizer,
  ServiceProStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
  ServiceYesNoAbstainVoteDefinition,
  ServiceYesNoAbstainVoteDefinitionStored,
  _StringOperation,
} from '~/generated/data-api';
import { serviceDebateServiceForClassImpl, serviceServiceUserServiceForClassImpl } from '~/generated/data-axios';
import { useLinkViewCreatedByAction } from '../actions';

export type CreatedByLinkFilterInitializer = (ownerData: ServiceDebateStored) => Filter[] | undefined;

export const CREATED_BY_LINK_FILTER_INITIALIZER_INTERFACE_KEY = 'CreatedByLinkFilterInitializerHook';
export type CreatedByLinkFilterInitializerHook = () => CreatedByLinkFilterInitializer;

export interface CreatedByLinkProps {
  ownerData: ServiceDebateStored;
  validation: Map<keyof ServiceDebateStored, string>;
  fetchOwnerData: () => Promise<void>;
  onChange: (value: ServiceServiceUser | ServiceServiceUserStored | null) => void;
  disabled: boolean;
  readOnly: boolean;
  editMode: boolean;
}

export function CreatedByLink(props: CreatedByLinkProps) {
  const { ownerData, disabled, readOnly, editMode, fetchOwnerData, onChange, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const { service: filterInitializerHook } = useTrackService<CreatedByLinkFilterInitializerHook>(
    `(${OBJECTCLASS}=${CREATED_BY_LINK_FILTER_INITIALIZER_INTERFACE_KEY})`,
  );
  const callFilterInitializer: CreatedByLinkFilterInitializer | undefined =
    filterInitializerHook && filterInitializerHook();

  const createdBySortModel: GridSortModel = [{ field: 'representation', sort: null }];

  const linkViewCreatedByAction = useLinkViewCreatedByAction();

  return (
    <AggregationInput
      name="createdBy"
      id="LinkedemokraciaServiceUserEdemokraciaServiceYesNoAbstainVoteDefinitionDebateViewDefaultDebateViewEditDebateLabelWrapperDebateCreatedBy"
      label={t('service.DebateView.createdBy', { defaultValue: 'Created by' }) as string}
      labelList={[ownerData.createdBy?.representation?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validation.get('createdBy')}
      helperText={validation.get('createdBy')}
      icon={<MdiIcon path="account" />}
      disabled={disabled}
      readOnly={readOnly}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(createdBy) => {
        // storeDiff('createdBy', createdBy);
        onChange(createdBy as ServiceServiceUserStored);
      }}
      onView={async () => linkViewCreatedByAction(ownerData, ownerData?.createdBy!, () => fetchOwnerData())}
    />
  );
}
