import GlobalStyles from '@mui/material/GlobalStyles';
import NProgress from 'nprogress';
import { paletteThemeLight } from './theme/palette';

const color = paletteThemeLight.palette.secondary.main;

export const progressGlobalStyles = (
  <GlobalStyles
    styles={{
      '#nprogress': {
        pointerEvents: 'none',
      },
      '#nprogress .bar': {
        background: color,
        position: 'fixed',
        zIndex: 1331,
        top: 0,
        left: 0,
        width: '100%',
        height: '2px',
      },
      '#nprogress .peg': {
        display: 'block',
        position: 'absolute',
        right: '0px',
        width: '100px',
        height: '100%',
        boxShadow: `0 0 10px ${color}, 0 0 5px ${color}`,
        opacity: '1.0',

        transform: 'rotate(3deg) translate(0px, -4px)',
      },
      '.nprogress-custom-parent': {
        overflow: 'hidden',
        position: 'relative',
      },
      '.nprogress-custom-parent #nprogress .bar': {
        position: 'absolute',
      },
    }}
  />
);

const calculatePercentage = (loaded: any, total: any) => Math.floor(loaded * 1.0) / total;

export function loadProgressBar(config: any, instance: any) {
  let requestsCounter = 0;

  const setupStartProgress = () => {
    instance.interceptors.request.use((config: any) => {
      requestsCounter++;
      NProgress.start();
      return config;
    });
  };

  const setupUpdateProgress = () => {
    const update = (e: any) => NProgress.inc(calculatePercentage(e.loaded, e.total) || 1);
    instance.defaults.onDownloadProgress = update;
    instance.defaults.onUploadProgress = update;
  };

  const setupStopProgress = () => {
    const responseFunc = (response: any) => {
      if (--requestsCounter === 0) {
        NProgress.done();
      }
      return response;
    };

    const errorFunc = (error: any) => {
      if (--requestsCounter === 0) {
        NProgress.done();
      }
      return Promise.reject(error);
    };

    instance.interceptors.response.use(responseFunc, errorFunc);
  };

  NProgress.configure(config);
  setupStartProgress();
  setupUpdateProgress();
  setupStopProgress();
}
