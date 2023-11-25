//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components/widgets/AssociationButton.tsx'
// Template name: actor/src/components/widgets/AssociationButton.tsx
// Template file: actor/src/components/widgets/AssociationButton.tsx.hbs

import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import type { JudoIdentifiable } from '@judo/data-api-common';

export interface AssociationBaseProps {
  id: string;
  variant?: 'text' | 'contained' | 'outlined';
  editMode?: boolean;
  children?: ReactNode;
}

export interface AssociationButtonProps extends AssociationBaseProps {
  refreshCounter: number;
  fetchCall?: () => Promise<JudoIdentifiable<any>>;
  navigateAction?: (target?: JudoIdentifiable<any> | any) => Promise<void>;
  children?: ReactNode;
}

export function AssociationButton({
  id,
  variant,
  editMode,
  refreshCounter,
  fetchCall,
  navigateAction,
  children,
}: AssociationButtonProps) {
  const { t } = useTranslation();
  const [data, setData] = useState<JudoIdentifiable<any> | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      // only trigger after first owner fetch
      if (refreshCounter > 0 && !editMode && fetchCall) {
        try {
          setIsLoading(true);
          const res = await fetchCall();

          setData(res);
        } catch (e) {
          setData(undefined);
          console.error(e);
        } finally {
          setIsLoading(false);
        }
      }
    })();
  }, [refreshCounter, editMode, fetchCall]);

  return (
    <Button
      id={id}
      variant={variant ?? 'text'}
      onClick={navigateAction ? () => navigateAction!(data) : undefined}
      disabled={!navigateAction || isLoading || editMode || (fetchCall && !data?.__signedIdentifier)}
    >
      {children}
    </Button>
  );
}
