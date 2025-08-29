// src/i18nPlural.ts
export type PluralSuffix = 'one' | 'few' | 'many' | 'other';

export function ruPluralSuffix(count: number): PluralSuffix {
  // Handle negatives and decimals explicitly
  if (!Number.isFinite(count)) return 'other';
  const n = Math.abs(count);

  // Non-integers → "other" in most UIs (e.g., 1.5 items)
  if (!Number.isInteger(n)) return 'other';

  const last = n % 10;
  const last2 = n % 100;

  if (last === 1 && last2 !== 11) return 'one'; // 1, 21, 31...
  if (last >= 2 && last <= 4 && (last2 < 12 || last2 > 14)) return 'few'; // 2-4, 22-24...
  // Common convention: 0 uses "many" in Russian UIs (e.g., "0 предметов")
  return 'many'; // 5-20, 25-30, 0, etc.
}

export function enPluralSuffix(count: number): PluralSuffix {
  return count === 1 ? 'one' : 'other';
}

/** Build the exact translation key you want to call */
export function pluralKey(
  baseKey: string,
  count: number,
  lang: string,
): string {
  let suffix: PluralSuffix;
  switch (lang) {
    case 'ru':
      suffix = ruPluralSuffix(count);
      break;
    case 'en':
    default:
      suffix = enPluralSuffix(count);
      break;
  }
  return `${baseKey}_${suffix}`;
}
