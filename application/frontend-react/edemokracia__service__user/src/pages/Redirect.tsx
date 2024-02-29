import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

export const REDIRECT_HOOK_INTERFACE_KEY = 'RedirectServiceHook';
export type RedirectServiceHook = () => (searchParams: URLSearchParams) => Promise<void>;

export function Redirect() {
  const { t } = useTranslation();
  const [errored, setErrored] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const { service: useRedirectService } = useTrackService<RedirectServiceHook>(
    `(${OBJECTCLASS}=${REDIRECT_HOOK_INTERFACE_KEY})`,
  );
  const redirect = useRedirectService && useRedirectService();

  useEffect(() => {
    if (redirect) {
      (async () => {
        try {
          await redirect(searchParams);
        } catch (e) {
          console.error(e);
          setErrored(true);
        }
      })();
    }
  }, []);

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        {!errored && (
          <Typography variant="h5">
            {t('judo.pages.redirect.wait', {
              defaultValue: 'Please wait, you will be redirected to the requested page...',
            })}
          </Typography>
        )}
        {errored && (
          <Typography variant="h5">
            {t('judo.pages.redirect.error', {
              defaultValue: 'An error occurred during redirect. Please try again later!',
            })}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
}
