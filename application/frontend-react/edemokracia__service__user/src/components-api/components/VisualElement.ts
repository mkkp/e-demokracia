//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components-api/components/VisualElement.ts'
// Template name: actor/src/components-api/components/VisualElement.ts
// Template file: actor/src/components-api/components/VisualElement.ts.hbs

import { LabeledElement } from './LabeledElement';
import { NamedElement } from './NamedElement';

export interface VisualElement extends NamedElement, LabeledElement {
  disabled?: boolean | undefined;
  readonly?: boolean | undefined;
  hiddenBy?: string | undefined;
  enabledBy?: string | undefined;
}
