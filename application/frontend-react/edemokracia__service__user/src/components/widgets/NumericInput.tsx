import type { InputAttributes, NumericFormatProps } from 'react-number-format';
import { NumericFormat } from 'react-number-format';
import { useL10N } from '~/l10n/l10n-context';
import { decimalSeparators, thousandSeparator } from '~/l10n/separators';

export interface AdditionalNumericInputProps {
  formatValue?: boolean;
}

export function NumericInput<BaseType = InputAttributes>(
  props: NumericFormatProps<BaseType> & AdditionalNumericInputProps,
) {
  const { locale: l10nLocale } = useL10N();
  const propsExpanded: NumericFormatProps<BaseType> = {
    decimalScale: 0,
    ...props,
  };

  return (
    <NumericFormat
      {...propsExpanded}
      decimalSeparator={decimalSeparators[l10nLocale]}
      thousandSeparator={props.formatValue ? thousandSeparator[l10nLocale] : undefined}
    />
  );
}
