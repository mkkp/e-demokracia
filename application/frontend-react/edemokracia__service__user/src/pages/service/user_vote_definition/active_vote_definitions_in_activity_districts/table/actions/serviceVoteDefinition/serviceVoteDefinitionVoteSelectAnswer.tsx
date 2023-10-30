//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionsForPages(#application)
// Path expression: #pagePath(#getActionContainer(#self))+'actions/'+#pageActionPathSuffix(#self)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx
// Template file: actor/src/pages/actions/action.tsx.hbs
// Action: CallOperationAction
// Is Access: no
// Is Mapped: yes
// Is Static: no
// Input: yes
// InputParameterPage: yes
// OutputParameterPage: no

import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import type {
  GridColDef,
  GridRenderCellParams,
  GridRowParams,
  GridFilterModel,
  GridSortModel,
  GridRowSelectionModel,
  GridValueFormatterParams,
} from '@mui/x-data-grid';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { useSnackbar } from 'notistack';
import { useJudoNavigation, MdiIcon } from '~/components';
import { useDialog, useRangeDialog } from '~/components/dialog';
import { baseColumnConfig, toastConfig } from '~/config';
import { FilterOption, FilterType } from '~/components-api';
import { useL10N } from '~/l10n/l10n-context';
import {
  isErrorOperationFault,
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
  fileHandling,
  processQueryCustomizer,
  serviceDateToUiDate,
  serviceTimeToUiTime,
} from '~/utilities';
import {
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionQueryCustomizer,
  SelectAnswerVoteSelectionStored,
  ServiceUserVoteDefinition,
  ServiceUserVoteDefinitionStored,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
} from '~/generated/data-api';
import { serviceVoteDefinitionServiceForClassImpl } from '~/generated/data-axios';

export type ServiceVoteDefinitionVoteSelectAnswerActionPostHandler = (ownerCallback: () => void) => Promise<void>;

export const SERVICE_VOTE_DEFINITION_VOTE_SELECT_ANSWER_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY =
  'ServiceVoteDefinitionVoteSelectAnswerActionPostHandlerHook';
export type ServiceVoteDefinitionVoteSelectAnswerActionPostHandlerHook =
  () => ServiceVoteDefinitionVoteSelectAnswerActionPostHandler;

export type ServiceVoteDefinitionVoteSelectAnswerAction = () => (
  owner: ServiceVoteDefinitionStored,
  successCallback: () => void,
  errorCallback?: (error: any) => void,
  silentMode?: boolean,
) => Promise<void>;

export const useServiceVoteDefinitionVoteSelectAnswerAction: ServiceVoteDefinitionVoteSelectAnswerAction = () => {
  const { t } = useTranslation();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const handleActionError = useErrorHandler<ServiceVoteDefinition>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=CallOperation)(component=ServiceVoteDefinitionVoteSelectAnswerAction))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const { openRangeDialog } = useRangeDialog();
  const [createDialog, closeDialog] = useDialog();
  const { navigate } = useJudoNavigation();
  const title: string = t(
    'service.VoteDefinitionTable.activeVoteDefinitionsInActivityDistricts.voteSelectAnswer.ButtonCallOperation',
    { defaultValue: 'Take a vote' },
  );
  const { service: customPostHandler } = useTrackService<ServiceVoteDefinitionVoteSelectAnswerActionPostHandlerHook>(
    `(${OBJECTCLASS}=${SERVICE_VOTE_DEFINITION_VOTE_SELECT_ANSWER_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY})`,
  );
  const postHandler: ServiceVoteDefinitionVoteSelectAnswerActionPostHandler | undefined =
    customPostHandler && customPostHandler();

  return async function serviceVoteDefinitionVoteSelectAnswerAction(
    owner: ServiceVoteDefinitionStored,
    successCallback: () => void,
    errorCallback?: (error: any) => void,
    silentMode?: boolean,
  ) {
    const columns: GridColDef<SelectAnswerVoteSelectionStored>[] = [
      {
        ...baseColumnConfig,
        field: 'title',
        headerName: t('SelectAnswerVoteSelectionTable.input.title', { defaultValue: 'Title' }) as string,

        width: 230,
        type: 'string',
        filterable: false && true,
      },
      {
        ...baseColumnConfig,
        field: 'description',
        headerName: t('SelectAnswerVoteSelectionTable.input.description', { defaultValue: 'Description' }) as string,

        width: 230,
        type: 'string',
        filterable: false && true,
      },
    ];

    const filterOptions: FilterOption[] = [
      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceVoteDefinitionVoteSelectAnswerInputTableDefaultVoteSelectAnswerSelectAnswerVoteSelectionTableTitleFilter',
        attributeName: 'title',
        label: t('SelectAnswerVoteSelectionTable.input.title', { defaultValue: 'Title' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'FilteredemokraciaServiceUserEdemokraciaServiceVoteDefinitionVoteSelectAnswerInputTableDefaultVoteSelectAnswerSelectAnswerVoteSelectionTableDescriptionFilter',
        attributeName: 'description',
        label: t('SelectAnswerVoteSelectionTable.input.description', { defaultValue: 'Description' }) as string,
        filterType: FilterType.string,
      },
    ];

    const sortModel: GridSortModel = [{ field: 'title', sort: null }];

    const initialQueryCustomizer: SelectAnswerVoteSelectionQueryCustomizer = {
      _mask: '{title,description}',
      _orderBy: sortModel.length
        ? [
            {
              attribute: sortModel[0].field,
              descending: sortModel[0].sort === 'desc',
            },
          ]
        : [],
    };

    const res = await openRangeDialog<SelectAnswerVoteSelectionStored, SelectAnswerVoteSelectionQueryCustomizer>({
      id: 'PageDefinitionedemokraciaServiceUserEdemokraciaServiceVoteDefinitionVoteSelectAnswerInputTable',
      columns,
      defaultSortField: sortModel[0],
      rangeCall: async (queryCustomizer) =>
        await serviceVoteDefinitionServiceForClassImpl.getRangeForVoteSelectAnswer(
          owner,
          processQueryCustomizer(queryCustomizer),
        ),
      single: true,
      filterOptions,
      initialQueryCustomizer,
    });

    if (res === undefined) return;

    try {
      const result = await serviceVoteDefinitionServiceForClassImpl.voteSelectAnswer(
        owner,
        res.value as SelectAnswerVoteSelectionStored,
      );
      if (postHandler) {
        postHandler(successCallback);
        return;
      }
      successCallback();
      if (!silentMode) {
        enqueueSnackbar(title, {
          variant: 'success',
          ...toastConfig.success,
        });
      }
    } catch (error: any) {
      if (errorCallback) {
        errorCallback(error); // consider passing mapped content here eventually
      } else {
        handleActionError(error, undefined, owner);
      }
    }
  };
};
