///////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// ------------------------------
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::User.votes#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: votes
// Page DataElement owner name: edemokracia::User

import { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  InputAdornment,
  TextField,
  MenuItem,
  Typography,
  Paper,
  Divider,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import {
  DataGrid,
  GridRowId,
  GridSortModel,
  GridSortItem,
  GridToolbarContainer,
  GridRowParams,
} from '@mui/x-data-grid';
import { DatePicker, DateTimePicker, TimePicker } from '@mui/x-date-pickers';
import { useParams } from 'react-router-dom';
import type { Dayjs } from 'dayjs';
import {
  columnsActionCalculator,
  MdiIcon,
  ModeledTabs,
  PageHeader,
  DropdownButton,
  CustomBreadcrumb,
  TrinaryLogicCombobox,
  useJudoNavigation,
  useRangeDialog,
  AggregationInput,
  useSnackbar,
} from '../../../../components';
import {
  errorHandling,
  fileHandling,
  processQueryCustomizer,
  TableRowAction,
  uiDateToServiceDate,
  stringToBooleanSelect,
  booleanToStringSelect,
} from '../../../../utilities';
import { baseTableConfig, toastConfig, dividerHeight } from '../../../../config';
import {
  SimpleVote,
  EdemokraciaSimpleVoteType,
  User,
  UserStored,
  SimpleVoteStored,
  SimpleVoteQueryCustomizer,
} from '../../../../generated/data-api';
import { userServiceImpl, simpleVoteServiceImpl } from '../../../../generated/data-axios';
import { JudoIdentifiable } from '@judo/data-api-common';
import { mainContainerPadding } from '../../../../theme';
import { useUserVotesView } from './hooks/useUserVotesView';
import { usePageRefreshVotesAction } from './actions';

/**
 * Name: edemokracia::User.votes#View
 * Is Access: false
 * Type: View
 * Edit Mode Available: false
 **/
export default function UserVotesView() {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { signedIdentifier } = useParams();
  const pageRefreshVotesAction = usePageRefreshVotesAction();

  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, uploadFile } = fileHandling();
  const { queryCustomizer } = useUserVotesView();

  const [enqueueSnackbar] = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<SimpleVoteStored>({} as unknown as SimpleVoteStored);
  const [payloadDiff, setPayloadDiff] = useState<Record<string, any>>({});
  const storeDiff: (attributeName: string, value: any) => void = useCallback(
    (attributeName: string, value: any) => {
      payloadDiff[attributeName] = value;
      setData({ ...data, [attributeName]: value });
    },
    [data],
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const [validation, setValidation] = useState<Map<string, string>>(new Map());

  const title: string = t('edemokracia.User.votes.View', { defaultValue: 'Entity View' });

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await simpleVoteServiceImpl.refresh(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<SimpleVote>,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      });
    } catch (error) {
      errorHandling(error, enqueueSnackbar);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setValidation(new Map<string, string>());
  }, [editMode]);

  return (
    <>
      <PageHeader title={title}>
        {!editMode && (
          <Grid item>
            <Button onClick={() => fetchData()} disabled={isLoading}>
              <MdiIcon path="refresh" />
              {t('judo.pages.refresh', { defaultValue: 'Refresh' })}
            </Button>
          </Grid>
        )}
      </PageHeader>
      <Container component="main" maxWidth="xl">
        <Box sx={mainContainerPadding}>
          <Grid
            container
            xs={12}
            sm={12}
            spacing={2}
            direction="column"
            alignItems="stretch"
            justifyContent="flex-start"
          ></Grid>
        </Box>
      </Container>
    </>
  );
}
