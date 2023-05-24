//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionFormsForPages(#application)
// Path expression: #pagePath(#getActionContainer(#self))+'actions/'+#pageActionFormPathSuffix(#self)+'/index.tsx'
// Template name: actor/src/pages/actions/actionForm.tsx
// Template file: actor/src/pages/actions/actionForm.tsx.hbs

//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionFormsForPages(#application)
// Path expression: #pagePath(#getActionContainer(#self))+'actions/'+#pageActionFormPathSuffix(#self)+'/index.tsx'
// Template name: actor/src/pages/actions/actionForm.tsx
// Template file: actor/src/pages/actions/actionForm.tsx.hbs
// Action: CreateAction

import { useState, useEffect, useRef, useCallback, Dispatch, SetStateAction, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@mui/lab';
import {
  Grid,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  ClickAwayListener,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grow,
  IconButton,
  InputAdornment,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  TextField,
} from '@mui/material';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { ComponentProxy } from '@pandino/react-hooks';
import { JudoIdentifiable } from '@judo/data-api-common';
import { useSnackbar } from 'notistack';
import { v1 as uuidv1 } from 'uuid';
import { useJudoNavigation, MdiIcon, ModeledTabs } from '~/components';
import { useRangeDialog } from '~/components/dialog';
import {
  AggregationInput,
  AssociationButton,
  BinaryInput,
  CollectionAssociationButton,
  TrinaryLogicCombobox,
} from '~/components/widgets';
import {
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
  fileHandling,
  uiDateToServiceDate,
  serviceDateToUiDate,
  uiTimeToServiceTime,
  serviceTimeToUiTime,
  stringToBooleanSelect,
  booleanToStringSelect,
} from '~/utilities';
import { toastConfig, dividerHeight } from '~/config';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY, CustomFormVisualElementProps } from '~/custom';
import { useL10N } from '~/l10n/l10n-context';

import {
  AdminIssueCategory,
  AdminIssueCategoryQueryCustomizer,
  AdminIssueCategoryStored,
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
} from '~/generated/data-api';
import { adminAdminServiceForCategoriesImpl, adminIssueCategoryServiceImpl } from '~/generated/data-axios';

import { OwnerLink } from './components/OwnerLink';

export interface PageCreateCategoriesFormProps {
  successCallback: () => void;
  cancel: () => void;
}

export function PageCreateCategoriesForm({ successCallback, cancel }: PageCreateCategoriesFormProps) {
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const anchorRef = useRef<HTMLDivElement>(null);
  const { navigate } = useJudoNavigation();
  const [open, setOpen] = useState(false);

  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const handleCreateError = useErrorHandler<AdminIssueCategory>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Create)(component=PageCreateCategoriesForm))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<AdminIssueCategory>({
    __referenceId: uuidv1(),
  } as unknown as AdminIssueCategory);
  const [validation, setValidation] = useState<Map<keyof AdminIssueCategory, string>>(
    new Map<keyof AdminIssueCategory, string>(),
  );
  const [editMode, setEditMode] = useState<boolean>(true);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof AdminIssueCategory, any>>(
    {} as unknown as Record<keyof AdminIssueCategory, any>,
  );
  const storeDiff: (attributeName: keyof AdminIssueCategory, value: any) => void = useCallback(
    (attributeName: keyof AdminIssueCategory, value: any) => {
      const dateTypes: string[] = [];
      const dateTimeTypes: string[] = [];
      const timeTypes: string[] = [];
      if (dateTypes.includes(attributeName as string)) {
        payloadDiff[attributeName] = uiDateToServiceDate(value);
      } else if (dateTimeTypes.includes(attributeName as string)) {
        payloadDiff[attributeName] = value;
      } else if (timeTypes.includes(attributeName as string)) {
        payloadDiff[attributeName] = uiTimeToServiceTime(value);
      } else {
        payloadDiff[attributeName] = value;
      }
      setData({ ...data, [attributeName]: value });
      if (!editMode) {
        setEditMode(true);
      }
    },
    [data],
  );
  const title: string = t('admin.IssueCategoryForm', { defaultValue: 'Create Category' });

  const isFormUpdateable = useCallback(() => {
    return true;
  }, [data]);

  const isFormDeleteable = useCallback(() => {
    return false;
  }, [data]);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await adminIssueCategoryServiceImpl.getTemplate();
      setData((prevData) => ({ ...prevData, ...res }));
      setPayloadDiff({
        ...res,
      } as Record<keyof AdminIssueCategory, any>);
    } catch (error) {
      handleFetchError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const saveData = async () => {
    setIsLoading(true);

    try {
      const res = await adminAdminServiceForCategoriesImpl.createCategories(payloadDiff);

      return res;
    } catch (error) {
      handleCreateError(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="CreateActionedemokraciaAdminAdminEdemokraciaAdminAdminCategoriesTableEdemokraciaAdminAdminEdemokraciaAdminAdminCategoriesPageCreate-dialog-close"
          aria-label="close"
          onClick={() => cancel()}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <MdiIcon path="close" />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container xs={12} sm={12} spacing={2} direction="column" alignItems="stretch" justifyContent="flex-start">
          <Grid item xs={12} sm={12}>
            <TextField
              required
              name="title"
              id="TextInputedemokraciaAdminAdminEdemokraciaAdminAdminCategoriesCreateDefaultCategoryFormTitle"
              autoFocus
              label={t('admin.IssueCategoryForm.title', { defaultValue: 'Title' }) as string}
              value={data.title}
              className={!editMode ? 'JUDO-viewMode' : undefined}
              disabled={false || !isFormUpdateable()}
              error={!!validation.get('title')}
              helperText={validation.get('title')}
              onChange={(event) => {
                storeDiff('title', event.target.value);
              }}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MdiIcon path="text_fields" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              required
              name="description"
              id="TextInputedemokraciaAdminAdminEdemokraciaAdminAdminCategoriesCreateDefaultCategoryFormDescription"
              label={t('admin.IssueCategoryForm.description', { defaultValue: 'Description' }) as string}
              value={data.description}
              className={!editMode ? 'JUDO-viewMode' : undefined}
              disabled={false || !isFormUpdateable()}
              error={!!validation.get('description')}
              helperText={validation.get('description')}
              onChange={(event) => {
                storeDiff('description', event.target.value);
              }}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MdiIcon path="text_fields" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <OwnerLink
              ownerData={data}
              disabled={false || !isFormUpdateable()}
              editMode={editMode}
              storeDiff={storeDiff}
              validation={validation}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          id="CreateActionedemokraciaAdminAdminEdemokraciaAdminAdminCategoriesTableEdemokraciaAdminAdminEdemokraciaAdminAdminCategoriesPageCreate-action-form-action-cancel"
          variant="text"
          onClick={() => cancel()}
          disabled={isLoading}
        >
          {t('judo.pages.cancel', { defaultValue: 'Cancel' })}
        </Button>
        <ButtonGroup size="small" ref={anchorRef} aria-label="split button" disabled={isLoading}>
          <LoadingButton
            loading={isLoading}
            loadingPosition="start"
            id="CreateActionedemokraciaAdminAdminEdemokraciaAdminAdminCategoriesTableEdemokraciaAdminAdminEdemokraciaAdminAdminCategoriesPageCreate-action-form-action-create"
            variant="contained"
            onClick={async () => {
              const result = await saveData();
              if (result) {
                successCallback();
              }
            }}
          >
            <span>{t('judo.pages.create', { defaultValue: 'Create' })}</span>
          </LoadingButton>
          <Button variant="contained" size="small" onClick={handleToggle}>
            <MdiIcon path="menu-down" />
          </Button>
        </ButtonGroup>
        <Popper sx={{ zIndex: 1 }} open={open} anchorEl={anchorRef.current} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu" autoFocusItem>
                    <MenuItem
                      key="create-and-navigate"
                      onClick={async (event: any) => {
                        const result: { __signedIdentifier: string } | undefined = await saveData();

                        if (result) {
                          successCallback();
                          navigate(`admin/admin/categories/view/${result.__signedIdentifier}`);
                        }
                      }}
                      disabled={isLoading}
                    >
                      {t('judo.pages.create-and-navigate', { defaultValue: 'Create and navigate' })}
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </DialogActions>
    </>
  );
}
