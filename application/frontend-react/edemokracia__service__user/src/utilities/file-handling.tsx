//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/utilities/file-handling.tsx'
// Template name: actor/src/utilities/file-handling.tsx
// Template file: actor/src/utilities/file-handling.tsx.hbs

import jwt_decode from 'jwt-decode';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'react-i18next';
import { MdiIcon } from '~/components';
import { useDialog } from '~/components/dialog';
import { accessServiceImpl } from '~/services/data-axios';

export type FileHandlingHook = () => {
  downloadFile: (data: any, attributeName: string, disposition: 'inline' | 'attachment') => Promise<void>;
  extractFileNameFromToken: (token?: string | null, fallbackText?: string) => string;
  uploadFile: (data: any, attributeName: string, files: any[], path: string) => Promise<any | void>;
};

export const fileHandling: FileHandlingHook = () => {
  const { t } = useTranslation();
  const [createDialog, closeDialog] = useDialog();

  const downloadFile = async (data: any, attributeName: string, disposition: 'inline' | 'attachment') => {
    const response = await accessServiceImpl.downloadFile(data[attributeName], disposition);

    if (response && response.status === 200) {
      const fileName = response.headers['content-disposition'].match(/filename=\"(.*)\"/)[1];
      const fileType = response.headers['content-type'];
      const url = window.URL.createObjectURL(new Blob([response.data], { type: fileType }));

      if (response.headers['content-disposition'].includes('inline')) {
        createDialog({
          fullWidth: true,
          maxWidth: 'lg',
          onClose: (event: object, reason: string) => {
            if (reason !== 'backdropClick') {
              closeDialog();
            }
          },
          children: (
            <>
              <DialogTitle>
                {fileName}
                <IconButton
                  id="close-inline-binary-dialog-top-button"
                  aria-label="close"
                  onClick={() => closeDialog()}
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
                <Box>
                  <iframe src={url} width={'100%'} height={document.body.scrollHeight * 0.6} style={{ border: 0 }} />
                </Box>
              </DialogContent>
              <DialogActions>
                <Button id="close-inline-binary-dialog-button" variant="text" onClick={() => closeDialog()}>
                  {t('judo.pages.close', { defaultValue: 'Close' })}
                </Button>
              </DialogActions>
            </>
          ),
        });
      } else {
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } else {
      throw new Error('Error processing download response: ' + response);
    }
  };

  const uploadFile = async (data: any, attributeName: string, files: any[], path: string): Promise<any | void> => {
    const response = await accessServiceImpl.uploadFile(path, files[0]);
    try {
      if (response && response.status === 200) {
        return response.data.files[0];
      }

      throw new Error('Could not process upload response: ' + response);
    } catch (err) {
      console.error(response);
      console.error(err);
    }
  };

  const extractFileNameFromToken = (token?: string | null, fallbackText?: string): string => {
    if (!token) {
      return fallbackText ?? '';
    }

    try {
      const decoded: { fileName: string } = jwt_decode(token);
      return decoded.fileName;
    } catch (error) {
      console.error(`Decoding of jwt token failed for: ${token}`);
      return fallbackText ?? '';
    }
  };

  return {
    downloadFile,
    extractFileNameFromToken,
    uploadFile,
  };
};
