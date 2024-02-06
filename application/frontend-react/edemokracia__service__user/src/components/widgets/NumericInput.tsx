import type { InputAttributes, NumericFormatProps } from 'react-number-format';
import { NumericFormat } from 'react-number-format';
import { useL10N } from '~/l10n/l10n-context';
import { decimalSeparators, thousandSeparator } from '~/l10n/separators';

export function NumericInput<BaseType = InputAttributes>(props: NumericFormatProps<BaseType>) {
  const { locale: l10nLocale } = useL10N();
  const propsExpanded: NumericFormatProps<BaseType> = {
    decimalScale: 0,
    ...props,
  };

  return (
    <NumericFormat
      {...propsExpanded}
      decimalSeparator={decimalSeparators[l10nLocale]}
      thousandSeparator={thousandSeparator[l10nLocale]}
    />
  );
}
