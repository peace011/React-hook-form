import { style } from '@vanilla-extract/css';

export const autocompleteInput = style({
  outline: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  padding: 'var(--space-3)',
});

export const autocompleteList = style({
  padding: 'var(--space-1)',
});

export const autocompleteItemBase = style({
  marginTop: 'var(--space-1)',
  marginBottom: 'var(--space-1)',
});

export const autocompleteItem = style({
  padding: 'var(--space-1) var(--space-3)',
  borderRadius: 'max(var(--radius-2),var(--radius-full))',
  color: 'var(--gray-11)',
  ':active': {
    backgroundColor: 'var(--accent-a4)',
    color: 'var(--accent-a11)',
  },
  selectors: {
    '&[data-selected=true]': {
      backgroundColor: 'var(--gray-a3)',
    },
    '&:hover': {
      backgroundColor: 'var(--accent-a3)',
      color: 'var(--accent-a11)',
    },
  },
});

export const autocompleteSeparator = style({
  width: '100%',
  height: '1px',
  backgroundColor: 'var(--gray-a6)',
});

export const autocompleteItemCheckbox = style({
  visibility: 'hidden',
  selectors: {
    [`${autocompleteItem}[data-selected=true] &, &[data-state="checked"]`]: {
      visibility: 'visible',
    },
  },
});
