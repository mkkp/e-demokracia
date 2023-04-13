//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionsForPages(#application)
// Path expression: #pagePath(#self.value)+'actions/'+#pageActionPathSuffix(#self.key,#self.value)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx
// Base URL: mvn:hu.blackbelt.judo.generator:judo-ui-react:1.0.0.20230413_041932_3a0d360a_develop
// Template file: actor/src/pages/actions/action.tsx.hbs
// Action: DeleteAction

import type { JudoIdentifiable } from '@judo/data-api-common';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useSnackbar } from 'notistack';
import { useErrorHandler, ERROR_PROCESSOR_HOOK_INTERFACE_KEY } from '../../../../../../utilities';
import {
  AdminDistrict,
  AdminDistrictStored,
  AdminCityStored,
  AdminCity,
  AdminDistrictQueryCustomizer,
} from '../../../../../../generated/data-api';
import { adminCityServiceForDistrictsImpl, adminDistrictServiceImpl } from '../../../../../../generated/data-axios';

export type PageDeleteDistrictsAction = () => (
  owner: JudoIdentifiable<AdminCity>,
  selected: AdminDistrictStored,
  successCallback: () => void,
) => Promise<void>;

export const usePageDeleteDistrictsAction: PageDeleteDistrictsAction = () => {
  const { enqueueSnackbar } = useSnackbar();
  const handleActionError = useErrorHandler<JudoIdentifiable<AdminCity>>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=RowDeleteAction))`,
  );

  return async function pageDeleteDistrictsAction(
    owner: JudoIdentifiable<AdminCity>,
    selected: AdminDistrictStored,
    successCallback: () => void,
  ) {
    try {
      await adminDistrictServiceImpl.delete(selected);

      successCallback();
    } catch (error) {
      handleActionError(error);
    }
  };
};
