import React from 'react';
import { MantineSize } from '@mantine/styles';
import { IconStar } from '@tabler/icons';
import useStyles from './StarSymbol.styles';

const sizes: Record<MantineSize, number> = {
  xs: 14,
  sm: 18,
  md: 20,
  lg: 28,
  xl: 32,
};

export interface StarSymbolProps {
  size: MantineSize;
  type: 'empty' | 'full';
}
export function StarSymbol({ size, type }: StarSymbolProps) {
  const { classes } = useStyles();

  return <IconStar size={sizes[size || 'sm']} className={classes[type || 'empty']} />;
}
