//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components/ModeledTabs.tsx'
// Template name: actor/src/components/ModeledTabs.tsx
// Template file: actor/src/components/ModeledTabs.tsx.hbs

import type { ReactNode, SyntheticEvent } from 'react';
import { useState, useEffect } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { useDataStore } from '~/hooks';
import { MdiIcon } from './MdiIcon';

export interface TabPanelProps {
  id: string;
  children?: ReactNode;
  index: number;
  value: number;
}

export function TabPanel(props: TabPanelProps) {
  const { id, children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={id} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ p: (theme) => theme.spacing(3) }}>{children}</Box>}
    </div>
  );
}

export interface ChildTabProps {
  id: string;
  name: string;
  nestedDataKeys: string[];
  label?: string;
  icon?: string;
  disabled?: boolean | null;
  hidden?: boolean | null;
}

export interface ModeledTabsProps {
  id: string;
  ownerData?: Record<any, any>;
  childTabs: ChildTabProps[];
  children: ReactNode;
  orientation?: 'horizontal' | 'vertical';
  validation: Map<any, string>;
}

export function ModeledTabs({ id, ownerData, childTabs, children, orientation, validation }: ModeledTabsProps) {
  const { getItemWithDefault, setItem } = useDataStore('sessionStorage');
  const [value, setValue] = useState<number>(0);
  const border = orientation === 'vertical' ? 'borderRight' : 'borderBottom';
  const additionalBoxSx = orientation === 'vertical' ? { flexGrow: 1, display: 'flex' } : {};

  useEffect(() => {
    if (ownerData && ownerData.__identifier) {
      setItem(`${id}-${ownerData.__identifier}-activeTab`, String(value));
    }
  }, [value]);

  useEffect(() => {
    if (ownerData && ownerData.__identifier) {
      setValue(Number(getItemWithDefault(`${id}-${ownerData.__identifier}-activeTab`, '0')));
    }
  }, [ownerData]);

  const hasNestedError = (tab: ChildTabProps): boolean => {
    if (tab.nestedDataKeys.length) {
      return tab.nestedDataKeys.some((key) => validation.has(key));
    }
    return false;
  };

  const tabsHaveError = (): boolean => {
    return childTabs.some((tab) => hasNestedError(tab));
  };

  return (
    <Box id={id} sx={{ width: '100%', ...additionalBoxSx }}>
      <Tabs
        orientation={orientation}
        variant="scrollable"
        value={value}
        onChange={(event: SyntheticEvent, newValue: number) => setValue(newValue)}
        textColor="secondary"
        indicatorColor="secondary"
        sx={{ [border]: 1, borderColor: 'divider' }}
      >
        {childTabs
          .filter((c) => !c.hidden)
          .map((c: any, index: number) => (
            <Tab
              className={hasNestedError(c) ? 'JUDO-nestedError' : undefined}
              id={`${c.id}-tab`}
              key={c.id}
              label={c.label}
              icon={c.icon ? <MdiIcon path={c.icon} sx={{ m: '0 0.5rem' }} /> : ''}
              iconPosition="start"
              disabled={c.disabled}
            />
          ))}
      </Tabs>
      {childTabs
        .filter((c) => !c.hidden)
        .map((c: any, index: number) => (
          <TabPanel id={`${c.id}-tab-panel`} key={c.id} value={value} index={index}>
            {Array.isArray(children) ? children[index] : ''}
          </TabPanel>
        ))}
    </Box>
  );
}
