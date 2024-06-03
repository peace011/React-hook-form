import React, { ReactNode, createContext, useContext, useMemo, useState } from 'react';
import { Popover } from '@radix-ui/themes';
import { Command } from 'cmdk';
import { Value } from 'classnames';
import { CheckIcon } from '@radix-ui/react-icons';

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
  const {
    children,
    value,
    onValueChange,
    defaultValue,
    open,
    onOpenChange,
    ...rootProps
  } = props;

  const [initialOpen, setInitialOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue ?? '');
  const [search, setSearch] = useState('');

  const contextValue = useMemo(
    () => ({
      value: value ?? selected,
      onValueChange: (value: string) => {
        if (onValueChange) onValueChange(value);
        else setSelected(value);
      },
      search,
      setSearch,
      changeOpenState: (value: boolean) => {
        if (onOpenChange) onOpenChange(value);
        else setInitialOpen(value);
      },
    }),
    [value, onValueChange, selected, search, onOpenChange, setInitialOpen]
  );

  return (
    <Popover.Root
      {...rootProps}
      open={onOpenChange ? open : initialOpen}
      onOpenChange={onOpenChange ?? setInitialOpen}
    >
      <AutoCompleteContext.Provider value={contextValue}>
        {children}
      </AutoCompleteContext.Provider>
    </Popover.Root>
  );
};

type AutocompleteTriggerType = Popover.TriggerProps & {
  buttonFunction: (value: string) => ReactNode;
};

const AutocompleteTrigger = (props: AutocompleteTriggerType) => {
  const { buttonFunction, ...triggerProps } = props;
  const { value } = useContext(AutoCompleteContext);

  return (
    <Popover.Trigger {...triggerProps}>
      <button>
        {value && (typeof value === 'string' || value?.length > 0)
          ? buttonFunction(value)
          : 'Select a value'}
      </button>
    </Popover.Trigger>
  );
};

type AutocompleteContentType = Popover.ContentProps;

const AutocompleteContent = (props: AutocompleteContentType) => {
  const { children, ...contentProps } = props;

  return (
    <Popover.Content {...contentProps}>
      <Command
        filter={(value, search, keywords) => {      //can filter with the valuw also as 1
          const extendedValue = value + ' ' + keywords?.map(k => k.toLowerCase()).join(' ');
          if (extendedValue.includes(search)) return 1;
          return 0;
        }}
      >
        {children}
      </Command>
    </Popover.Content>
  );
};

type AutocompleteInputType = React.ComponentPropsWithoutRef<typeof Command.Input>;

const AutocompleteInput = (props: AutocompleteInputType) => {
  const { ...inputProps } = props;
  const { search, setSearch } = useContext(AutoCompleteContext);

  return <Command.Input value={search} onValueChange={setSearch} {...inputProps} />;
};

type AutocompleteListType = React.ComponentPropsWithoutRef<typeof Command.List>;

const AutocompleteList = (props: AutocompleteListType) => {
  const { children, ...listProps } = props;
  return <Command.List {...listProps}>{children}</Command.List>;
};

type AutocompleteItemType = React.ComponentPropsWithoutRef<typeof Command.Item> & 
{showIndicator:boolean;}

const AutocompleteItem = (props: AutocompleteItemType) => {
  const { children, value,onSelect,showIndicator=true,...itemProps } = props;
  const {value:selectedValue,onValueChange}=useContext(AutoCompleteContext);

  const isSelected = value ? value === selectedValue : false;

        return (
        <Command.Item {...itemProps} 
         onSelect={onSelect?onSelect:onValueChange}
         value={value}>
            {children}
          {isSelected && showIndicator ? <CheckIcon /> : null}
        </Command.Item>);
};

export { AutocompleteRoot as Root };
export { AutocompleteTrigger as Trigger };
export { AutocompleteContent as Content };
export { AutocompleteInput as Input };
export { AutocompleteList as List };
export { AutocompleteItem as Item };
