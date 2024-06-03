import React, { ReactNode, createContext, useContext, useMemo, useState } from 'react';
import { Popover } from '@radix-ui/themes';
import { Command } from 'cmdk';

type AutocompleteContextType = {
  value: string;
  onValueChange: (value: string) => void;
  search: string;
  setSearch: (value: string) => void;
  changeOpenState: (value: boolean) => void;
};

type AutocompleteSingleType = {
  value?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
  open?: boolean;
  onOpenChange?: (value: boolean) => void;
};

type AutocompleteRootType = Popover.RootProps & AutocompleteSingleType;

const AutoCompleteContext = createContext<AutocompleteContextType>({} as never);

const AutocompleteRoot = (props: AutocompleteRootType) => {
  const { children, value, onValueChange, defaultValue, open, onOpenChange, ...rootprops } = props;
  const [initialOpen, setInitialOpen] = useState(false);
  const [selected, setSelected] = useState<string>(defaultValue ?? '');
  const [search, setSearch] = useState('');

  return (
    <Popover.Root
      {...rootprops}
      open={onOpenChange ? open : initialOpen}
      onOpenChange={onOpenChange ?? setInitialOpen}
    >
      <AutoCompleteContext.Provider
        value={useMemo(
          () => ({
            value: value ?? selected,
            onValueChange: (value) => {
              if (onValueChange) onValueChange(value);
              else setSelected(value);
            },
            search,
            setSearch,
            changeOpenState: onOpenChange ? setInitialOpen : () => {},
          }),
          [value, selected, search, onValueChange, onOpenChange]
        )}
      >
        {children}
      </AutoCompleteContext.Provider>
    </Popover.Root>
  );
};

type AutocompleteTriggerType = Popover.TriggerProps & {
  buttonFunction: (value: string) => ReactNode;
};

const AutocompleteTrigger = (props: AutocompleteTriggerType) => {
  const { buttonFunction, ...triggerprops } = props;
  const { value } = useContext(AutoCompleteContext);

  return (
    <Popover.Trigger {...triggerprops}>
      <button>
        {value && (typeof value === 'string' || value?.length > 0) ? buttonFunction(value) : 'Select a value'}
      </button>
    </Popover.Trigger>
  );
};

type AutocompleteContentType = Popover.ContentProps;

const AutocompleteContent = (props: AutocompleteContentType) => {
  const { children, ...contentprops } = props;

  const filter = (value: string, search: string, keywords?: string[]) => {
    const extendValue = value + ' ' + (keywords?.map((k) => k.toLowerCase()).join('') || '');
    return extendValue.includes(search.toLowerCase()) ? 1 : 0;
  };

  return (
    <Popover.Content {...contentprops}>
      <Command filter={filter}>
        {children}
      </Command>
    </Popover.Content>
  );
};

type AutocompleteInputType = React.ComponentPropsWithoutRef<typeof Command.Input>; 

const AutocompleteInput = (props: AutocompleteInputType) => {
  const { ...inputprops } = props;
  const { search, setSearch } = useContext(AutoCompleteContext);
  return (
    <Command.Input {...inputprops} value={search} onValueChange={setSearch} />
  );
};

type AutocompleteListType = React.ComponentPropsWithoutRef<typeof Command.List>;

const AutocompleteList = (props: AutocompleteListType) => {
  const { children, ...listprops } = props;
  return (
    <Command.List {...listprops}>
      {children}
    </Command.List>
  );
};

type AutocompleteItemType = React.ComponentPropsWithoutRef<typeof Command.Item>;

const AutocompleteItem = (props: AutocompleteItemType) => {
  const { children, ...itemprops } = props;
  return (
    <Command.Item {...itemprops}>
      {children}
    </Command.Item>
  );
};

export { AutocompleteRoot as Root };
export { AutocompleteTrigger as Trigger };
export { AutocompleteContent as Content };
export { AutocompleteInput as Input };
export { AutocompleteList as List };
export { AutocompleteItem as Item };
