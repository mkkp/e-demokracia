//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components-api/components/MenuTree.ts'
// Template name: actor/src/components-api/components/MenuTree.ts
// Template file: actor/src/components-api/components/MenuTree.ts.hbs

export type MenuItem = {
  id: string;
  icon?: string;
  level?: number;
  label: string;
  to?: string;
  items?: MenuItem[];
  hidden?: boolean;
};

export interface MenuProps {
  items: MenuItem[];
  height?: number;
  maxWidth?: number;
  defaultExpanded?: string[];
}
