//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components/ModeledTabs.tsx'
// Template name: actor/src/components/ModeledTabs.tsx
// Template file: actor/src/components/ModeledTabs.tsx.hbs

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import type { ReactNode, SyntheticEvent } from 'react';
import { useEffect, useState } from 'react';
import { useDataStore } from '~/hooks';
import { MdiIcon } from './MdiIcon';

export interface TabPanelProps {
  id: string;
  children?: ReactNode;
  index: number;
  value: number;
  orientation?: 'horizontal' | 'vertical';
}

export function TabPanel(props: TabPanelProps) {
  const { id, children, value, orientation, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={id}
      aria-labelledby={`simple-tab-${index}`}
      sx={{ flex: orientation === 'vertical' ? '1' : undefined }}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            py: (theme) => (orientation === 'horizontal' ? theme.spacing(3) : 0),
            px: (theme) => (orientation === 'vertical' ? theme.spacing(3) : 0),
          }}
        >
          {children}
        </Box>
      )}
    </Box>
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
        {childTabs.map((c: any, index: number) => (
          <Tab
            className={hasNestedError(c) ? 'JUDO-nestedError' : undefined}
            id={`${c.id}-tab`}
            key={c.id}
            label={c.label}
            icon={c.icon ? <MdiIcon path={c.icon} sx={{ m: '0 0.5rem' }} /> : ''}
            iconPosition="start"
            disabled={c.disabled}
            style={{ display: c.hidden ? 'none' : undefined }}
          />
        ))}
      </Tabs>
      {childTabs.map((c: any, index: number) => (
        <TabPanel id={`${c.id}-tab-panel`} key={c.id} value={value} index={index} orientation={orientation}>
          {Array.isArray(children) ? children[index] : ''}
        </TabPanel>
      ))}
    </Box>
  );
}
