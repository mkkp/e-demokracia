import { useRef, useCallback, useState } from 'react';
import { clsx } from 'clsx';
import { CircularProgress, Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { toastConfig } from '../../config';
import { MdiIcon } from '../MdiIcon';
import { fileHandling } from '../../utilities';

interface BinaryInputProps<P> {
  id: string;
  label: string;
  data: P;
  attributeName: keyof P;
  attributePath: string;
  validation: Map<keyof P, string>;
  editMode?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  uploadCallback?: (uploadedData: { token: string }) => Promise<any>;
  deleteCallback?: () => Promise<void>;
  icon?: string;
  mimeType?: {
    type: string;
    subType: string;
  };
}

export function BinaryInput<P>(props: BinaryInputProps<P>) {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const fileInput = useRef<HTMLInputElement>(null);
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const placeholderText = t('judo.files.no-file-present', { defaultValue: 'No file present' }) as string;

  const extractFileName = useCallback(
    (token?: string) => {
      return extractFileNameFromToken(token, placeholderText);
    },
    [props.data],
  );

  return (
    <Grid container item direction="row" justifyContent="center" alignItems="center">
      <Grid item xs>
        <TextField
          required={props.required}
          name={props.id}
          id={props.id}
          label={props.label}
          value={extractFileName(props.data[props.attributeName] as string | undefined)}
          className={clsx({
            'JUDO-viewMode': true,
            'JUDO-required': props.required,
          })}
          disabled={props.disabled || isUploading}
          error={!!props.validation.get(props.attributeName)}
          helperText={props.validation.get(props.attributeName)}
          fullWidth
          sx={{
            '& .MuiInputBase-input': {
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
          }}
          InputLabelProps={{ shrink: true }}
          InputProps={
            props.icon
              ? {
                  startAdornment: (
                    <InputAdornment position="start">
                      <MdiIcon path={props.icon} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <CircularProgress size='1rem' sx={{ visibility: isUploading ? 'visible' : 'hidden' }} />
                  ),
                }
              : {
                  endAdornment: (
                    <CircularProgress size='1rem' sx={{ visibility: isUploading ? 'visible' : 'hidden' }} />
                  ),
                }
          }
        />
      </Grid>
      <Grid item xs="auto">
        <IconButton
          disabled={!props.data[props.attributeName] || isUploading}
          id={`${props.id}-download`}
          onClick={() => downloadFile(props.data, props.attributeName as string)}
          title={t('judo.component.BinaryInput.download', { defaultValue: 'Download file' }) as string}
        >
          <MdiIcon path="download" mimeType={props.mimeType} />
        </IconButton>
      </Grid>
      {!props.readonly && (
        <Grid item xs="auto">
          <IconButton
            disabled={props.disabled || isUploading}
            id={`${props.id}-upload`}
            onClick={() => fileInput.current!.click()}
            title={t('judo.component.BinaryInput.upload', { defaultValue: 'Upload file' }) as string}
          >
            <input
              ref={fileInput}
              hidden
              type="file"
              accept={props.mimeType && `${props.mimeType.type}/${props.mimeType.subType}`}
              onChange={async (event: any) => {
                try {
                  setIsUploading(true);
                  const uploadedData = await uploadFile(
                    props.data,
                    props.attributeName as string,
                    event.target.files,
                    props.attributePath,
                  );
                  if (uploadedData) {
                    if (uploadedData.error) {
                      enqueueSnackbar(t('judo.files.upload-error', { defaultValue: uploadedData.error }) as string, {
                        variant: 'error',
                        ...toastConfig.error,
                      });
                      console.error(uploadedData);
                      return;
                    }
                    const fileName = extractFileName(uploadedData.token);
                    enqueueSnackbar(
                      t('judo.files.upload-success', {
                        defaultValue: '{{fileName}} successfully uploaded.',
                        fileName,
                      }) as string,
                      {
                        variant: 'success',
                        ...toastConfig.success,
                      },
                    );
                    props.uploadCallback!(uploadedData);
                  }
                } catch (err) {
                  enqueueSnackbar(
                    t('judo.files.upload-error', { defaultValue: 'An error occurred during file upload!' }) as string,
                    {
                      variant: 'error',
                      ...toastConfig.error,
                    },
                  );
                  console.error(err);
                } finally {
                  setIsUploading(false);
                }
              }}
            />
            <MdiIcon path="upload" />
          </IconButton>
        </Grid>
      )}
      {!props.readonly && props.data[props.attributeName] && props.deleteCallback && (
        <Grid item xs="auto">
          <IconButton
            id={`${props.id}-remove`}
            className={`${props.attributeName as string}-remove`}
            disabled={props.readonly || props.disabled || isUploading}
            onClick={async () => {
              if (props.deleteCallback) {
                await props.deleteCallback();
              }
            }}
            title={t('judo.component.BinaryInput.remove', { defaultValue: 'Remove file' }) as string}
          >
            <MdiIcon path="link-off" />
          </IconButton>
        </Grid>
      )}
    </Grid>
  );
}
