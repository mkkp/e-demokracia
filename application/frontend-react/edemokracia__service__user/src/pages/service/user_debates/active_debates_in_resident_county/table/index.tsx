//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::service::UserDebates.activeDebatesInResidentCounty#Table
// Page owner name: edemokracia::service::User
// Page DataElement name: activeDebatesInResidentCounty
// Page DataElement owner name: edemokracia::service::UserDebates

import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Paper, Card, CardContent, Box, Grid, Button, Container } from '@mui/material';
import { MdiIcon, PageHeader } from '~/components';
import type { PersistedTableData, RefreshableTable } from '~/utilities';
import { useL10N } from '~/l10n/l10n-context';
import { mainContainerPadding } from '~/theme';
import { PageContainerTransition } from '~/theme/animations';

import { PageActions } from './components/PageActions';
import { Debate_TableTable } from './components/Debate_TableTable';

/**
 * Name: edemokracia::service::UserDebates.activeDebatesInResidentCounty#Table
 * Is Access: false
 * Type: Table
 **/
export default function ServiceUserDebatesActiveDebatesInResidentCountyTable() {
  const tableRef = useRef<RefreshableTable>(null);
  const { t } = useTranslation();
  const { signedIdentifier } = useParams();
  const { locale: l10nLocale } = useL10N();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const title: string = t('service.DebateTable', { defaultValue: 'Debate Table' });

  const handleFetchData = async () => {
    tableRef.current?.fetchData();
  };

  return (
    <>
      <PageHeader title={title}>
        <PageActions fetchData={handleFetchData} isLoading={isLoading} signedIdentifier={signedIdentifier} />
      </PageHeader>
      <PageContainerTransition>
        <Box sx={mainContainerPadding}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card>
                <CardContent id="PageDefinitionedemokraciaServiceUserEdemokraciaServiceUserDebatesActiveDebatesInResidentCountyTable-data-grid">
                  <Debate_TableTable
                    ref={tableRef}
                    ownerData={{ __signedIdentifier: signedIdentifier! }}
                    isOwnerLoading={isLoading}
                    setIsOwnerLoading={setIsLoading}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </PageContainerTransition>
    </>
  );
}
