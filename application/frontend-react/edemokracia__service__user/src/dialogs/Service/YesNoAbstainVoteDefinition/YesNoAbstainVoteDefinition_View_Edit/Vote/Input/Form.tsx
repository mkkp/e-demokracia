//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, useMemo, lazy, Suspense } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import { useSnacks, useCRUDDialog } from '~/hooks';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';
import type { YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogActions } from '~/containers/YesNoAbstainVoteInput/YesNoAbstainVoteInput_Form/YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogContainer';
import type {
  YesNoAbstainVoteInput,
  YesNoAbstainVoteInputQueryCustomizer,
  YesNoAbstainVoteInputStored,
  YesNoAbstainVoteValue,
} from '~/services/data-api';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceYesNoAbstainVoteDefinitionServiceImpl } from '~/services/data-axios/ServiceYesNoAbstainVoteDefinitionServiceImpl';

export type YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogActionsExtended =
  YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogActions & {
    postVoteForYesNoAbstainVoteDefinitionAction?: (
      onSubmit: (result?: YesNoAbstainVoteInputStored) => Promise<void>,
      onClose: () => Promise<void>,
    ) => Promise<void>;
  };

export const SERVICE_YES_NO_ABSTAIN_VOTE_DEFINITION_YES_NO_ABSTAIN_VOTE_DEFINITION_VIEW_EDIT_VOTE_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY =
  'YesNoAbstainVoteInputYesNoAbstainVoteInput_FormActionsHook';
export type YesNoAbstainVoteInputYesNoAbstainVoteInput_FormActionsHook = (
  ownerData: any,
  data: YesNoAbstainVoteInputStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof YesNoAbstainVoteInput, value: any) => void,
) => YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogActionsExtended;

export const useServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteInputForm = (): ((
  ownerData: any,
) => Promise<DialogResult<YesNoAbstainVoteInputStored>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any) =>
    new Promise((resolve) => {
      createDialog({
        fullWidth: true,
        maxWidth: 'xs',
        onClose: async (event: object, reason: string) => {
          if (reason !== 'backdropClick') {
            await closeDialog();
            resolve({
              result: 'close',
            });
          }
        },
        children: (
          <ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteInputForm
            ownerData={ownerData}
            onClose={async () => {
              await closeDialog();
              resolve({
                result: 'close',
              });
            }}
            onSubmit={async () => {
              await closeDialog();
              resolve({
                result: 'submit',
              });
            }}
          />
        ),
      });
    });
};

export const convertServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteInputFormPayload = (
  attributeName: keyof YesNoAbstainVoteInput,
  value: any,
): any => {
  return value;
};

const YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogContainer = lazy(
  () =>
    import(
      '~/containers/YesNoAbstainVoteInput/YesNoAbstainVoteInput_Form/YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogContainer'
    ),
);

export interface ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteInputFormProps {
  ownerData: any;

  onClose: () => Promise<void>;
  onSubmit: (result?: YesNoAbstainVoteInputStored) => Promise<void>;
}

// XMIID: User/(esm/_7M-IPFsnEe6Mx9dH3yj5gQ)/OperationUnmappedInputPageDefinition
// Name: service::YesNoAbstainVoteDefinition::YesNoAbstainVoteDefinition_View_Edit::vote::Input::Form
export default function ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteInputForm(
  props: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteInputFormProps,
) {
  const { ownerData, onClose, onSubmit } = props;

  // Services
  const serviceYesNoAbstainVoteDefinitionServiceImpl = useMemo(
    () => new ServiceYesNoAbstainVoteDefinitionServiceImpl(judoAxiosProvider),
    [],
  );

  // Hooks section
  const { t } = useTranslation();
  const { showSuccessSnack, showErrorSnack } = useSnacks();
  const { navigate, back: navigateBack } = useJudoNavigation();
  const { openFilterDialog } = useFilterDialog();
  const { openConfirmDialog } = useConfirmDialog();
  const handleError = useErrorHandler();
  const openCRUDDialog = useCRUDDialog();
  const [createDialog, closeDialog] = useDialog();

  // State section
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(true);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<YesNoAbstainVoteInputStored>({} as YesNoAbstainVoteInputStored);
  const [validation, setValidation] = useState<Map<keyof YesNoAbstainVoteInput, string>>(
    new Map<keyof YesNoAbstainVoteInput, string>(),
  );

  // Ref section
  const payloadDiff = useRef<Record<keyof YesNoAbstainVoteInputStored, any>>(
    {} as unknown as Record<keyof YesNoAbstainVoteInputStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof YesNoAbstainVoteInput, value: any) => void = useCallback(
    (attributeName: keyof YesNoAbstainVoteInput, value: any) => {
      payloadDiff.current![attributeName] =
        convertServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteInputFormPayload(
          attributeName,
          value,
        );
      setData((prevData) => ({
        ...prevData,
        [attributeName]: value,
      }));
      if (!editMode) {
        setEditMode(true);
      }
    },
    [data, editMode],
  );
  const isFormUpdateable = useCallback(() => {
    return true;
  }, [data]);
  const isFormDeleteable = useCallback(() => {
    return false;
  }, [data]);

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<YesNoAbstainVoteInputYesNoAbstainVoteInput_FormActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_YES_NO_ABSTAIN_VOTE_DEFINITION_YES_NO_ABSTAIN_VOTE_DEFINITION_VIEW_EDIT_VOTE_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, storeDiff);

  // Dialog hooks

  // Calculated section
  const title: string = t('YesNoAbstainVoteInput.YesNoAbstainVoteInput_Form', {
    defaultValue: 'YesNoAbstainVoteInput Form',
  });

  // Private actions
  const submit = async () => {};

  // Action section
  const backAction = async () => {
    onClose();
  };
  const voteForYesNoAbstainVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await serviceYesNoAbstainVoteDefinitionServiceImpl.vote(ownerData, data);
      if (customActions?.postVoteForYesNoAbstainVoteDefinitionAction) {
        await customActions.postVoteForYesNoAbstainVoteDefinitionAction(
          onSubmit,
          onClose,
        );
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        onSubmit();
      }
    } catch (error) {
      handleError<YesNoAbstainVoteInput>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const getTemplateAction = async (): Promise<YesNoAbstainVoteInput> => {
    try {
      setIsLoading(true);
      const result = await serviceYesNoAbstainVoteDefinitionServiceImpl.getTemplateOnVote();
      setData(result as YesNoAbstainVoteInputStored);
      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogActions = {
    backAction,
    voteForYesNoAbstainVoteDefinitionAction,
    getTemplateAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    actions.getTemplateAction!();
  }, []);

  return (
    <div
      id="User/(esm/_7M-IPFsnEe6Mx9dH3yj5gQ)/OperationUnmappedInputPageDefinition"
      data-page-name="service::YesNoAbstainVoteDefinition::YesNoAbstainVoteDefinition_View_Edit::vote::Input::Form"
    >
      <Suspense>
        <YesNoAbstainVoteInputYesNoAbstainVoteInput_FormDialogContainer
          ownerData={ownerData}
          onClose={onClose}
          title={title}
          actions={actions}
          isLoading={isLoading}
          editMode={editMode}
          refreshCounter={refreshCounter}
          data={data}
          storeDiff={storeDiff}
          isFormUpdateable={isFormUpdateable}
          isFormDeleteable={isFormDeleteable}
          validation={validation}
          setValidation={setValidation}
          submit={submit}
        />
      </Suspense>
    </div>
  );
}
