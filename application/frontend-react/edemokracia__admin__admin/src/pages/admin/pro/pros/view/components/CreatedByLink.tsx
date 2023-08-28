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
  AdminPro,
  AdminProQueryCustomizer,
  AdminProStored,
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
  _StringOperation,
} from '~/generated/data-api';
import { adminProServiceForClassImpl, adminUserServiceForClassImpl } from '~/generated/data-axios';

import { useLinkViewCreatedByAction } from '../actions';

export interface CreatedByLinkProps {
  ownerData: AdminProStored;
  storeDiff: (attributeName: keyof AdminProStored, value: any) => void;
  validation: Map<keyof AdminProStored, string>;
  fetchOwnerData: () => Promise<void>;
  disabled: boolean;
  readOnly: boolean;
  editMode: boolean;
}

export function CreatedByLink(props: CreatedByLinkProps) {
  const { ownerData, disabled, readOnly, editMode, fetchOwnerData, storeDiff, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const createdBySortModel: GridSortModel = [{ field: 'representation', sort: null }];

  const linkViewCreatedByAction = useLinkViewCreatedByAction();

  return (
    <AggregationInput
      name="createdBy"
      id="LinkedemokraciaAdminAdminEdemokraciaAdminProProsViewDefaultProViewProLabelWrapperProCreatedBy"
      label={t('admin.ProView.createdBy', { defaultValue: 'Created by' }) as string}
      labelList={[ownerData.createdBy?.representation?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validation.get('createdBy')}
      helperText={validation.get('createdBy')}
      icon={<MdiIcon path="table_rows" />}
      disabled={disabled}
      readOnly={readOnly}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(createdBy) => {
        storeDiff('createdBy', createdBy);
      }}
      onView={async () => linkViewCreatedByAction(ownerData, ownerData?.createdBy!, () => fetchOwnerData())}
    />
  );
}