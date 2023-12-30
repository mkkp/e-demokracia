import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom';
import { routeToDashboard } from '~/routes';
import { MdiIcon } from './MdiIcon';

export function RootErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();
  const { t } = useTranslation();

  let title: string = '';
  let body: string = '';
  let isRefreshOffered = true;

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        title = '404';
        body = t('judo.error.boundary.body.404', {
          defaultValue: 'The page you were trying to access does not exist.',
        });
        isRefreshOffered = false;
        break;
      case 403:
        title = '403';
        body = t('judo.error.boundary.body.403', { defaultValue: "You don't have permission to access this page." });
        break;
      case 503:
        title = '503';
        body = t('judo.error.boundary.body.503', {
          defaultValue: 'Our services were temporarily unavailable, please try again!',
        });
        break;
      default:
        title = t('judo.error.boundary.header.unknown-response-type', { defaultValue: 'Oops! Something went wrong.' });
        body = t('judo.error.boundary.body.unknown-response-type', {
          defaultValue:
            'We received an unknown response from the backend services. Please try any of the actions below to resolve the issue.',
        });
    }
  } else {
    title = t('judo.error.boundary.header.exception', { defaultValue: 'Oops! Something went wrong.' });
    body = t('judo.error.boundary.body.exception', {
      defaultValue: 'We apologize for the inconvenience. Please try any of the actions below to resolve the issue.',
    });
  }

  const resetSettings = () => {
    window.sessionStorage.clear();
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Box textAlign="center">
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {body}
        </Typography>
        <Button variant="text" color="primary" onClick={() => resetSettings()} style={{ marginTop: 16 }}>
          {t('judo.error.boundary.reset-settings', { defaultValue: 'Reset Settings' }) as string}
        </Button>
        <Button
          variant={isRefreshOffered ? 'text' : 'contained'}
          color="primary"
          onClick={() => navigate(routeToDashboard())}
          style={{ marginTop: 16 }}
        >
          {t('judo.error.boundary.navigate-to-dashboard', { defaultValue: 'Navigate to Dashboard' }) as string}
        </Button>
        {isRefreshOffered && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => window.location.reload()}
            style={{ marginTop: 16 }}
          >
            {t('judo.error.boundary.reload-page', { defaultValue: 'Reload Page' }) as string}
          </Button>
        )}
      </Box>
    </Box>
  );
}
