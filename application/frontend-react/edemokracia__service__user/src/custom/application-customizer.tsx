//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/custom/application-customizer.tsx'
// Template name: actor/src/custom/application-customizer.tsx
// Template file: actor/src/custom/application-customizer.tsx.hbs

import type { BundleContext } from '@pandino/pandino-api';
import { registerServiceIssueIssueRichTextEditorConfig } from './components/IssueRichTextEditor';
import { registerCloseDebateInputCloseDebateInput_FormActionsHook } from './customCloseDebateInputCloseDebateInput_FormActionsHook';
import { registerServiceCreateIssueInputCreateIssueInput_FormActionsHook } from './customServiceCreateIssueInputCreateIssueInput_FormActionsHook';
import { registerServiceDashboardDashboard_View_EditActionsHook } from './customServiceDashboardDashboard_View_EditActionsHook';
import { registerServiceUserIssuesUserIssues_View_EditActionsHook } from './customServiceUserIssuesUserIssues_View_EditActionsHook';
import { registerServiceUserVoteDefinitionUserVoteDefinition_View_EditContainerHook } from './customServiceUserVoteDefinitionUserVoteDefinition_TableActionsHook';
import { registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActionsHook } from './customServiceUserVoteDefinitionUserVoteDefinition_View_EditActionsHook';
import { registerServiceVoteDefinitionVoteDefinition_TableActionsHook } from './customServiceVoteDefinitionVoteDefinition_TableActionsHook';
import { registerServiceIssueCommentsCards } from './hooks/components/cards/ServiceIssueCommentCards';
import { registerServiceConCon_View_EditConsComponentCardsContainerConfig } from './hooks/components/cards/registerServiceConCon_View_EditConsComponentConfigurationHook';
import { registerServiceConCon_View_EditProsComponentCardsContainerConfig } from './hooks/components/cards/registerServiceConCon_View_EditProsComponentConfigurationHook';
import { registerServiceDashboardDashboard_View_EditFavoriteIssuesComponentCardsContainerConfig } from './hooks/components/cards/registerServiceDashboardDashboard_View_EditFavoriteIssuesComponentConfigurationHook';
import { registerServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponentCardsContainerConfig } from './hooks/components/cards/registerServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponentConfigurationHook';
import { registerServiceDashboardDashboard_View_EditOwnedIssuesComponentCardsContainerConfig } from './hooks/components/cards/registerServiceDashboardDashboard_View_EditOwnedIssuesComponentConfigurationHook';
import { registerServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponentCardsContainerConfig } from './hooks/components/cards/registerServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponentConfigurationHook';
import { registerServiceIssueIssue_View_EditCommentsComponentCardsContainerConfig } from './hooks/components/cards/registerServiceIssueIssue_View_EditCommentsComponentConfigurationHook';
import { registerServiceIssueIssue_View_EditConsComponentCardsContainerConfig } from './hooks/components/cards/registerServiceIssueIssue_View_EditConsComponentConfigurationHook';
import { registerServiceIssueIssue_View_EditProsComponentCardsContainerConfig } from './hooks/components/cards/registerServiceIssueIssue_View_EditProsComponentConfigurationHook';
import { registerServiceProPro_View_EditConsComponentCardsContainerConfig } from './hooks/components/cards/registerServiceProPro_View_EditConsComponentConfigurationHook';
import { registerServiceProPro_View_EditProsComponentCardsContainerConfig } from './hooks/components/cards/registerServiceProPro_View_EditProsComponentConfigurationHook';
import { registerServiceUserIssuesUserIssues_View_EditActiveGobalIssuesComponentCardsContainerConfig } from './hooks/components/cards/registerServiceUserIssuesUserIssues_View_EditActiveGobalIssuesComponentConfigurationHook';
import { registerServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityComponentCardsContainerConfig } from './hooks/components/cards/registerServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityComponentConfigurationHook';
import { registerServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentComponentCardsContainerConfig } from './hooks/components/cards/registerServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentComponentConfigurationHook';
import { registerServiceUserIssuesUserIssues_View_EditOwnedIssuesComponentCardsContainerConfig } from './hooks/components/cards/registerServiceUserIssuesUserIssues_View_EditOwnedIssuesComponentConfigurationHook';
import { registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsGlobalComponentCardsContainerConfig } from './hooks/components/cards/registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsGlobalComponentConfigurationHook';
import { registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityComponentCardsContainerConfig } from './hooks/components/cards/registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityComponentConfigurationHook';
import { registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInResidentComponentCardsContainerConfig } from './hooks/components/cards/registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInResidentComponentConfigurationHook';
import { registerServiceUserVoteDefinitionUserVoteDefinition_View_EditOwnedVoteDefinitionsComponentCardsContainerConfig } from './hooks/components/cards/registerServiceUserVoteDefinitionUserVoteDefinition_View_EditOwnedVoteDefinitionsComponentConfigurationHook';
import { registerIssuecardSubThemeHook } from './hooks/sub-themes/registerIssuecardSubThemeHook';
import { registerIssueheaderSubThemeHook } from './hooks/sub-themes/registerIssueheaderSubThemeHook';
import { ApplicationCustomizer } from './interfaces';
import { SidekickComponentProps } from '~/utilities/table';
import { Filter, FilterType, Operation } from '~/components-api';
import { buildFilter } from '~/utilities';
import { _StringOperation } from '~/services/data-api/common';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { TextField, Button, Grid, Typography, debounce } from '@mui/material';
import { ServiceServiceUserStored } from '~/services/data-api/model/ServiceServiceUser';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY } from './custom-element-types';
import { SERVICE_USER_MANAGER_USER_MANAGER_VIEW_EDIT_USERS_COMPONENT_SIDEKICK_COMPONENT_INTERFACE_KEY } from '~/containers/Service/UserManager/UserManager_View_Edit/components/ServiceUserManagerUserManager_View_EditUsersComponent';
import { useTranslation } from 'react-i18next';
import { debounceInputs } from '~/config/general';

export class DefaultApplicationCustomizer implements ApplicationCustomizer {
  async customize(context: BundleContext): Promise<void> {
    // register your implementations here
    registerCloseDebateInputCloseDebateInput_FormActionsHook(context);
    registerServiceCreateIssueInputCreateIssueInput_FormActionsHook(context);
    registerServiceVoteDefinitionVoteDefinition_TableActionsHook(context);
    registerServiceUserVoteDefinitionUserVoteDefinition_View_EditContainerHook(context);
    registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActionsHook(context);
    registerServiceDashboardDashboard_View_EditActionsHook(context);
    registerServiceUserIssuesUserIssues_View_EditActionsHook(context);
    // registerServiceIssueProCards(context);
    // registerServiceIssueConCards(context);
    // registerConConCards(context);
    // registerProConCards(context);
    // registerConProCards(context);
    // registerProProCards(context);
    registerServiceConCon_View_EditConsComponentCardsContainerConfig(context);
    registerServiceConCon_View_EditProsComponentCardsContainerConfig(context);
    registerServiceIssueIssue_View_EditConsComponentCardsContainerConfig(context);
    registerServiceIssueIssue_View_EditProsComponentCardsContainerConfig(context);
    registerServiceProPro_View_EditConsComponentCardsContainerConfig(context);
    registerServiceProPro_View_EditProsComponentCardsContainerConfig(context);
    registerServiceIssueIssue_View_EditCommentsComponentCardsContainerConfig(context);
    registerServiceDashboardDashboard_View_EditFavoriteIssuesComponentCardsContainerConfig(context);
    registerServiceDashboardDashboard_View_EditOwnedIssuesComponentCardsContainerConfig(context);
    registerServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponentCardsContainerConfig(context);
    registerServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentComponentCardsContainerConfig(context);
    registerServiceUserIssuesUserIssues_View_EditOwnedIssuesComponentCardsContainerConfig(context);
    registerServiceUserIssuesUserIssues_View_EditActiveGobalIssuesComponentCardsContainerConfig(context);
    registerServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityComponentCardsContainerConfig(context);
    registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsGlobalComponentCardsContainerConfig(
      context,
    );
    registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityComponentCardsContainerConfig(
      context,
    );
    registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInResidentComponentCardsContainerConfig(
      context,
    );
    registerServiceUserVoteDefinitionUserVoteDefinition_View_EditOwnedVoteDefinitionsComponentCardsContainerConfig(
      context,
    );
    registerServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponentCardsContainerConfig(context);
    registerIssuecardSubThemeHook(context);
    registerServiceIssueCommentsCards(context);
    registerIssueheaderSubThemeHook(context);
    registerServiceIssueIssueRichTextEditorConfig(context);



    // SERVICE_USER_MANAGER_USER_MANAGER_VIEW_EDIT_USERS_COMPONENT_SIDEKICK_COMPONENT_INTERFACE_KEY
    context.registerService<FC<SidekickComponentProps<ServiceServiceUserStored>>>(CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY, SidekickGalaxiesComponent, {
      component: SERVICE_USER_MANAGER_USER_MANAGER_VIEW_EDIT_USERS_COMPONENT_SIDEKICK_COMPONENT_INTERFACE_KEY,
    });
  }
}


const DebouncedSearchField = () => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Clear existing timeout when input changes
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set new timeout to update debounced value after 1 second
    timeoutRef.current = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 1000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [inputValue]);

  useEffect(() => {
      performSearch(debouncedValue);
  }, [debouncedValue]);

  const performSearch = (value: string) => {
    console.log('Search value:', value);
  };

  return (
    <TextField
      fullWidth
      label="Search"
      variant="outlined"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};


export interface SingleValueFilterComponentProps<T> {
  filters: Filter[];
  onFiltersChange: (newFilters: Filter[]) => void;
  filterType: FilterType,
  operator: Operation,
  attributeName: keyof T,
  label: string
}

const SingleValueFilterComponent: FC<SingleValueFilterComponentProps<ServiceServiceUserStored>> = ({ filters, onFiltersChange, filterType, operator, attributeName, label }) => {
  const fallbackFilter: Filter = buildFilter(filterType, operator, attributeName, '');
  const [filter, setFilter] = useState<Filter>(filters?.find(f => f.filterOption.attributeName === attributeName ) || fallbackFilter);

  const updateFilter = useCallback((value: any) => {  
    setFilter((prevNameFilter) => {
      return {
        ...prevNameFilter,
        filterBy: {
          ...prevNameFilter.filterBy,
          value,
        },
      };
    });
    onFiltersChange([filter])
  }, [filter]);

  // const updateValueDebounced = useCallback(debounce(updateFilter, debounceInputs), [
  //   updateFilter,
  // ]);



  // const [inputValue, setInputValue] = useState('');
  // const [debouncedValue, setDebouncedValue] = useState('');
  // const timeoutRef = useRef<NodeJS.Timeout>();

  // useEffect(() => {
  //   // Clear existing timeout when input changes
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }

  //   // Set new timeout to update debounced value after 1 second
  //   timeoutRef.current = setTimeout(() => {
  //     setDebouncedValue(inputValue);
  //   }, 1000);

  //   return () => {
  //     if (timeoutRef.current) clearTimeout(timeoutRef.current);
  //   };
  // }, [inputValue]);

  // useEffect(() => {
  //     //performSearch(debouncedValue);
  //     console.log("FUKKA:> " + debouncedValue);
  //     updateFilter(debouncedValue);
  // }, [debouncedValue]);

  // const performSearch = (value: string) => {
  //   console.log('Search value:', value);
  // };

  const timeoutRef = useRef<NodeJS.Timeout>();
  useEffect(() => {
    // Clear existing timeout when input changes
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set new timeout to update debounced value after 1 second
    timeoutRef.current = setTimeout(() => {
      console.log("Change filter: " + filter);
      onFiltersChange([filter])
    }, 1000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [filter, updateFilter]);

  return (
  <>
      <Grid item xs={6}>
        <TextField
          variant="standard"
          label={label}
          value={filter.filterBy.value}
          onChange={(event) => {
            updateFilter(event.target.value);
          }}
        />
      </Grid>  
  </>);
}



const SidekickGalaxiesComponent: FC<SidekickComponentProps<ServiceServiceUserStored>> = ({ filters, onFiltersChange }) => {

  const { t } = useTranslation();

  // const fallbackFilter: Filter = buildFilter(FilterType.string, _StringOperation.like, 'userName', '');
  // const [userNameFilter, setUserNameFilter] = useState<Filter>(filters?.find(f => f.filterOption.attributeName === 'userName') || fallbackFilter);

  // const updateUserNameFilter = (value: string) => {  
  //   setUserNameFilter((prevNameFilter) => {
  //     return {
  //       ...prevNameFilter,
  //       filterBy: {
  //         ...prevNameFilter.filterBy,
  //         value,
  //       },
  //     };
  //   });
  // }

    const clearFilters = useCallback(() => {
      // We need to explicitly null out values because our filter may refer to Transfer fields which are not in the list
      // of columns. Other framework features rely on column info for e.g. queryCustomizer cleanup.
      const newValues: Record<string, any> = {};
    }, []);
  
  
  return (
    <Grid container sx={{ mb: 2 }}>
      <Grid item xs={12}>
        {/* <Typography variant="h4">
          {t('judo.component.CardsContainer.Filter.filter', { defaultValue: 'Filter' })}
        </Typography> */}
        <Button variant={'text'} onClick={clearFilters}>
          {t('judo.component.CardsContainer.Filter.clearAll', { defaultValue: 'Filter' })}
        </Button>
      </Grid>
      <Grid item xs={6}>
        <SingleValueFilterComponent 
            attributeName='userName' 
            filterType={FilterType.string} 
            operator={_StringOperation.like}
            filters={filters}
            onFiltersChange={onFiltersChange}
            label="User name"
        />
        {/* <DebouncedSearchField
        /> */}


        {/* <Button onClick={() => {
          onFiltersChange([
            userNameFilter,
          ]);
        }}>Apply</Button> */}
      </Grid>

      {/* <Grid item xs={6}>
        <TextField
          variant="standard"
          label="dddddf"
          value={userNameFilter.filterBy.value}
          onChange={(event) => {
            updateUserNameFilter(event.target.value);
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <Button onClick={() => {
          onFiltersChange([
            userNameFilter,
          ]);
        }}>Apply</Button>
      </Grid> */}
    </Grid>
  );
};

