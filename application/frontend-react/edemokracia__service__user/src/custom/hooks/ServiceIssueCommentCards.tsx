import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { BundleContext } from '@pandino/pandino-api';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CardProps, Filter, FilterType, ToolbarElementProps } from '~/components-api';
import { CardsFilter, CardsFilterDefinition } from '~/components/widgets';

import { useL10N } from '~/l10n/l10n-context';
import { _StringOperation } from '~/services/data-api/common';
import { ServiceCommentStored } from '~/services/data-api/model/ServiceComment';

import {
  SERVICE_ISSUE_ISSUE_VIEW_EDIT_COMMENTS_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
  ServiceIssueIssue_View_EditCommentsComponentCardsContainerConfigHook,
} from '~/containers/Service/Issue/Issue_View_Edit/components/ServiceIssueIssue_View_EditCommentsComponent/customization';
import { mapCardsFiltersToFilters } from '~/utilities';
import { commentCard } from '../components/CommentCard';

export function registerServiceIssueCommentsCards(context: BundleContext) {
  context.registerService<ServiceIssueIssue_View_EditCommentsComponentCardsContainerConfigHook>(
    SERVICE_ISSUE_ISSUE_VIEW_EDIT_COMMENTS_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
    CommentsCardsComponentCardsContainerConfigHook,
  );
}

export const CommentsCardsComponentCardsContainerConfigHook: ServiceIssueIssue_View_EditCommentsComponentCardsContainerConfigHook =
  () => {
    return {
      //      ToolbarElement: CustomToolbar,
      CardElement: conCard,
    };
  };

function CustomToolbar({ handleFiltersChange }: ToolbarElementProps<ServiceCommentStored>) {
  const { t } = useTranslation();
  const { locale } = useL10N();

  const [filterDefs, setFilterDefs] = useState<CardsFilterDefinition<ServiceCommentStored>[]>([]);

  const collator = useMemo(() => new Intl.Collator([], { numeric: true }), []);

  useEffect(() => {
    (async () => {
      try {
        setFilterDefs([
          {
            type: FilterType.string,
            inputType: 'text',
            operator: _StringOperation.like,
            field: 'comment',
            label: t('authorProductsCardsFilter.Title', { defaultValue: 'Cím' }),
            allowSearch: true,
            searchLabel: 'Keresés címben',
          },
        ]);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const onFiltersChanged = useCallback(
    (values: Record<string, any>) => {
      const newFilters: Filter[] = mapCardsFiltersToFilters(filterDefs, values);
      handleFiltersChange(newFilters);
    },
    [filterDefs, setFilterDefs, handleFiltersChange],
  );

  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <CardsFilter filterDefinitions={filterDefs} onFiltersChanged={onFiltersChanged} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

function conCard({ row, columns, onRowClick }: CardProps<ServiceCommentStored>) {
  return commentCard(row, onRowClick, row.upVotes, row.downVotes, undefined, undefined);
}
