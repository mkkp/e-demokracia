//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::Admin.users#Table
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: users
// Page DataElement owner name: edemokracia::admin::Admin

import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Paper, Card, CardContent, Box, Grid, Button, Container } from '@mui/material';
import { MdiIcon, PageHeader } from '~/components';
import type { PersistedTableData, RefreshableTable } from '~/utilities';
import { useL10N } from '~/l10n/l10n-context';
import { mainContainerPadding } from '~/theme';

import { PageActions } from './components/PageActions';
import { User_TableTable } from './components/User_TableTable';

/**
 * Name: edemokracia::admin::Admin.users#Table
 * Is Access: true
 * Is Dashboard: false
 * Type: Table
 **/
export default function AdminAdminUsersTable() {
  const persistedTableData: PersistedTableData = JSON.parse(
    window.sessionStorage.getItem('pages.AdminAdminUsersTable') || '{}',
  );
  const tableRef = useRef<RefreshableTable>(null);
  const { t } = useTranslation();
  const { locale: l10nLocale } = useL10N();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const title: string = t('admin.UserTable', { defaultValue: 'Users' });

  const handleFetchData = async () => {
    tableRef.current?.fetchData();
  };

  return (
    <>
      <PageHeader title={title}>
        <PageActions fetchData={handleFetchData} isLoading={isLoading} />
      </PageHeader>
      <Container component="main" maxWidth="xl">
        <Box sx={mainContainerPadding}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card>
                <CardContent id="PageDefinitionedemokraciaAdminAdminEdemokraciaAdminAdminUsersTable-data-grid">
                  <User_TableTable ref={tableRef} isOwnerLoading={isLoading} setIsOwnerLoading={setIsLoading} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
