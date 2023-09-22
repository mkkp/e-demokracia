import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import type { JudoStored } from '@judo/data-api-common';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@mui/lab';
import {
  DialogContent,
  Grid,
  DialogTitle,
  IconButton,
  Box,
  LinearProgress,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  DialogActions,
  Button,
} from '@mui/material';
import type { LinearProgressProps } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useDialog } from '~/components/dialog';
import { MdiIcon } from '~/components';
import { toastConfig } from '~/config';

export type CRUDDialogOpenProps<T extends JudoStored<any>> = {
  dialogTitle: string;
  itemTitleFn: (item: T) => string;
  selectedItems: T[];
  action: (item: T, successHandler: () => void, errorHandler: (error: any) => void) => Promise<void>;
  onClose: (needsRefresh: boolean) => void;
  autoCloseOnSuccess?: boolean;
};

export type UseCRUDDialog = () => <T extends JudoStored<any>>(props: CRUDDialogOpenProps<T>) => void;

export const useCRUDDialog: UseCRUDDialog = () => {
  const [createDialog, closeDialog] = useDialog();

  return ({ dialogTitle, itemTitleFn, selectedItems, action, onClose, autoCloseOnSuccess }): void => {
    createDialog({
      fullWidth: true,
      maxWidth: 'sm',
      onClose: (event: object, reason: string) => {
        /*if (reason !== 'backdropClick') {
          closeDialog();
          onClose(false);
        }*/
      },
      children: (
        <CRUDDialog
          title={dialogTitle}
          queueItems={selectedItems.map((item) => ({
            id: item.__identifier!,
            data: item,
            title: itemTitleFn(item),
            status: 'in-progress',
          }))}
          action={action}
          close={(needsRefresh: boolean) => {
            closeDialog();
            onClose(needsRefresh);
          }}
          autoCloseOnSuccess={autoCloseOnSuccess}
        />
      ),
    });
  };
};

export type ItemStatus = 'success' | 'error' | 'in-progress';

const iconMapping: Record<ItemStatus, ReactNode> = {
  'in-progress': <MdiIcon path='minus' />,
  success: <MdiIcon path='check-circle' color='green' />,
  error: <MdiIcon path='close-circle' color='red' />,
};

export type QueueItem = { id: string; title: string; status: ItemStatus; data: any };

export type CRUDDialogProps = {
  title: string;
  close: (needsRefresh: boolean) => void;
  queueItems: Array<QueueItem>;
  action: (item: any, successHandler: () => void, errorHandler: (error: any) => void) => Promise<void>;
  autoCloseOnSuccess?: boolean;
};

export function CRUDDialog({ title, close, queueItems, action, autoCloseOnSuccess }: CRUDDialogProps) {
  const MAX_PROGRESS = 100;
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const runCount = useRef<number>(0);
  const [inProgress, setInProgress] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [queue, setQueue] = useState<Array<QueueItem>>([...queueItems]);
  const progressMultiplier = useMemo(() => Math.round(MAX_PROGRESS / queueItems.length), [queueItems]);

  const updateQueueItem = useCallback(
    (queueItem: QueueItem, status: ItemStatus) => {
      setQueue((prevQueue) => {
        const idx = prevQueue.findIndex((i) => i.id === queueItem.id);
        prevQueue[idx].status = status;
        return [...prevQueue];
      });
      if (status === 'success') {
        setProgress((prevProgress) => prevProgress + progressMultiplier);
      }
    },
    [queueItems],
  );

  const runActions = useCallback(async () => {
    if (inProgress) {
      console.warn('Actions already in progress!');
      return;
    }

    runCount.current = runCount.current + 1;
    setInProgress(true);
    setQueue((prevQueue) => {
      const newQueue: QueueItem[] = [];
      for (const entry of prevQueue) {
        // reset status for failed items
        newQueue.push({
          ...entry,
          status: entry.status === 'error' ? 'in-progress' : entry.status,
        });
      }
      return newQueue;
    });

    for (const queueItem of queue.filter((i) => i.status !== 'success')) {
      try {
        await action(
          queueItem.data,
          () => {
            updateQueueItem(queueItem, 'success');
          },
          () => {
            updateQueueItem(queueItem, 'error');
          },
        );
      } catch (e) {
        updateQueueItem(queueItem, 'error');
      }
    }

    setInProgress(false);
  }, [queue, progress]);

  useEffect(() => {
    if (runCount.current > 0 && !inProgress) {
      if (queue.every((i) => i.status === 'success')) {
        setProgress(MAX_PROGRESS); // in case round did not end up with full value :)
        enqueueSnackbar(
          t('judo.dialogs.crud-bulk.toast.success', { defaultValue: 'Operation(s) executed successfully' }) as string,
          {
            variant: 'success',
            ...toastConfig.success,
          },
        );
        if (autoCloseOnSuccess) {
          close(runCount.current > 0);
        }
      } else {
        enqueueSnackbar(
          t('judo.dialogs.crud-bulk.toast.warn', {
            defaultValue: 'Not all operations executed successfully!',
          }) as string,
          {
            variant: 'warning',
            ...toastConfig.warning,
          },
        );
      }
    }
  }, [queue, inProgress]);

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="use-crud-dialog-close-top"
          aria-label="close"
          onClick={() => close(runCount.current > 0)}
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
        <Grid container spacing={2} direction="column" alignItems="stretch" justifyContent="flex-start">
          <Grid item>
            <List>
              {queue.map((item) => (
                <ListItem key={item.id} disablePadding>
                  <ListItemIcon>{iconMapping[item.status]}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItem>
              ))}
            </List>
            <LinearProgressWithLabel value={progress} />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button id="use-crud-dialog-close" onClick={() => close(runCount.current > 0)} variant="text">
          {t('judo.modal.close', { defaultValue: 'Close' }) as string}
        </Button>
        <LoadingButton
          disabled={queue.every((i) => i.status === 'success')}
          loading={inProgress}
          loadingPosition="start"
          id="use-crud-dialog-execute"
          variant="contained"
          onClick={() => runActions()}
          startIcon={<MdiIcon path="play" />}
        >
          <span>{t('judo.dialogs.crud-bulk.execute', { defaultValue: 'Execute Operation(s)' }) as string}</span>
        </LoadingButton>
      </DialogActions>
    </>
  );
}

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}
