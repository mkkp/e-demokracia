//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::Issue.createDebate#Output
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: output
// Page DataElement owner name: createDebate

import type { FC, Dispatch, SetStateAction } from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Button, Card, CardContent } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import type { DateValidationError, DateTimeValidationError, TimeValidationError } from '@mui/x-date-pickers';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useSnackbar } from 'notistack';
import { ComponentProxy, useTrackService } from '@pandino/react-hooks';
import { useParams } from 'react-router-dom';
import { MdiIcon, ModeledTabs, PageHeader, DropdownButton, CustomBreadcrumb, useJudoNavigation } from '~/components';
import { useRangeDialog } from '~/components/dialog';
import { AssociationButton, BinaryInput, CollectionAssociationButton, NumericInput } from '~/components/widgets';
import {
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
  fileHandling,
  passesLocalValidation,
  processQueryCustomizer,
  uiDateToServiceDate,
  serviceDateToUiDate,
  uiTimeToServiceTime,
  serviceTimeToUiTime,
  stringToBooleanSelect,
  booleanToStringSelect,
} from '~/utilities';
import { useConfirmationBeforeChange } from '~/hooks';
import { toastConfig, DIVIDER_HEIGHT } from '~/config';
import { useL10N } from '~/l10n/l10n-context';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY, CustomFormVisualElementProps } from '~/custom';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { mainContainerPadding } from '~/theme';
import { PageContainerTransition } from '~/theme/animations';
import { clsx } from 'clsx';

import {
  CreateDebateOutputDebateReference,
  CreateDebateOutputDebateReferenceQueryCustomizer,
  CreateDebateOutputDebateReferenceStored,
} from '~/generated/data-api';
import { createDebateOutputDebateReferenceServiceForClassImpl } from '~/generated/data-axios';
import {} from './actions';

import { PageActions } from './components/PageActions';

export type AdminIssueCreatedebateOutputPostRefreshAction = (
  data: CreateDebateOutputDebateReferenceStored,
  storeDiff: (attributeName: keyof CreateDebateOutputDebateReferenceStored, value: any) => void,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  setValidation: Dispatch<SetStateAction<Map<keyof CreateDebateOutputDebateReference, string>>>,
) => Promise<void>;

export const ADMIN_ISSUE_CREATEDEBATE_OUTPUT_POST_REFRESH_HOOK_INTERFACE_KEY =
  'AdminIssueCreatedebateOutputPostRefreshHook';
export type AdminIssueCreatedebateOutputPostRefreshHook = () => AdminIssueCreatedebateOutputPostRefreshAction;

/**
 * Name: edemokracia::admin::Issue.createDebate#Output
 * Is Operation Output: true
 * Type: OperationOutput
 **/
export default function AdminIssueCreatedebateOutput() {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { signedIdentifier } = useParams();

  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<CreateDebateOutputDebateReferenceStored>(
    {} as unknown as CreateDebateOutputDebateReferenceStored,
  );
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof CreateDebateOutputDebateReferenceStored, any>>(
    {} as unknown as Record<keyof CreateDebateOutputDebateReferenceStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof CreateDebateOutputDebateReferenceStored, value: any) => void = useCallback(
    (attributeName: keyof CreateDebateOutputDebateReferenceStored, value: any) => {},
    [data],
  );
  const [validation, setValidation] = useState<Map<keyof CreateDebateOutputDebateReference, string>>(new Map());

  const queryCustomizer: CreateDebateOutputDebateReferenceQueryCustomizer = {
    _mask: '{}',
  };

  const { service: postRefreshHook } = useTrackService<AdminIssueCreatedebateOutputPostRefreshHook>(
    `(${OBJECTCLASS}=${ADMIN_ISSUE_CREATEDEBATE_OUTPUT_POST_REFRESH_HOOK_INTERFACE_KEY})`,
  );
  const postRefreshAction: AdminIssueCreatedebateOutputPostRefreshAction | undefined =
    postRefreshHook && postRefreshHook();

  const title: string = t('CreateDebateOutputDebateReferenceView', {
    defaultValue: 'CreateDebateOutputDebateReference View / Edit',
  });

  const isFormUpdateable = useCallback(() => {
    return false && typeof data?.__updateable === 'boolean' && data?.__updateable;
  }, [data]);

  const isFormDeleteable = useCallback(() => {
    return false && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
  }, [data]);

  useConfirmationBeforeChange(
    editMode,
    t('judo.form.navigation.confirmation', {
      defaultValue: 'You have potential unsaved changes in your form, are you sure you would like to navigate away?',
    }),
  );

  async function fetchData() {
    setIsLoading(true);

    try {
      const res = await createDebateOutputDebateReferenceServiceForClassImpl.refresh(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<CreateDebateOutputDebateReference>,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof CreateDebateOutputDebateReferenceStored, any>);
      if (postRefreshAction) {
        try {
          await postRefreshAction(res, storeDiff, setEditMode, setValidation);
        } catch (error) {
          console.error(error);
        }
      }
    } catch (error) {
      handleFetchError(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <PageHeader title={title}>
        <PageActions
          data={data}
          fetchData={fetchData}
          editMode={editMode}
          setEditMode={setEditMode}
          isLoading={isLoading}
        />
      </PageHeader>
      <PageContainerTransition>
        <Box sx={mainContainerPadding}>
          <Grid
            className="operation-output-page-data"
            container
            spacing={2}
            direction="column"
            alignItems="stretch"
            justifyContent="flex-start"
          ></Grid>
        </Box>
      </PageContainerTransition>
    </>
  );
}
