import { useTheme } from '@shopify/restyle';
import { Theme } from '../assets/theme/theme';

export function useAppTheme() {
  return useTheme<Theme>();
}
