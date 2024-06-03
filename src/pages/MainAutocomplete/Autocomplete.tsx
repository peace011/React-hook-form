import { CheckIcon } from '@radix-ui/react-icons';
import {
  Button,
  ButtonProps,
  Checkbox,
  Flex,
  Inset,
  Popover,
  Separator,
} from '@radix-ui/themes';
import classNames from 'classnames';
import { Command } from 'cmdk';
import { produce } from 'immer';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import {
  autocompleteInput,
  autocompleteItem,
  autocompleteItemBase,
  autocompleteItemCheckbox,
  autocompleteList,
  autocompleteSeparator,
} from './autocomplete.css';

type AutocompleteContextValue = {
  value?: string | string[];
  onValueChange: (value?: string | string[]) => void;
  search: string;
  setSearch: (value?: string) => void;
  type: 'single' | 'multiple';
  changeOpenState: (value: boolean) => void;
};
const AutocompleteContext = React.createContext<AutocompleteContextValue>(
  {} as never
);
interface AutocompleteRootSingleProps {
  value?: string;
  onValueChange?: (value?: string) => void;
  defaultValue?: string;
  type?: 'single';
}

interface AutocompleteRootMultipleProps {
  value?: string[];
  onValueChange?: (value?: string[]) => void;
  defaultValue?: string[];

  type?: 'multiple';
}

type AutocompleteRootProps = Popover.RootProps &
  (AutocompleteRootSingleProps | AutocompleteRootMultipleProps);

const AutocompleteRoot = (props: AutocompleteRootProps) => {
  const {
    children,
    value,
    onValueChange,
    defaultValue,
    type = 'single',
    open,
    onOpenChange,
    ...rootProps
  } = props;
  const [internalOpenState, setInternalOpenState] = useState(false);
  const [selected, setSelected] = useState<string | string[] | undefined>(
    defaultValue ? defaultValue : type === 'single' ? undefined : []
  );
  const [search, setSearch] = useState('');

  return (
    <Popover.Root
      {...rootProps}
      open={onOpenChange ? open : internalOpenState}
      onOpenChange={onOpenChange ?? setInternalOpenState}>
      <AutocompleteContext.Provider
        value={useMemo(
          () =>
            ({
              value: value ?? selected,
              onValueChange: (value) => {
                if (onValueChange) onValueChange(value as never);
                else setSelected(value);
                if (onOpenChange) onOpenChange(false);
                else setInternalOpenState(false);
              },
              search,
              setSearch,
              type,
              changeOpenState: onOpenChange && setInternalOpenState,
            }) as AutocompleteContextValue,
          [value, selected, search, type, onOpenChange, onValueChange]
        )}>
        {children}
      </AutocompleteContext.Provider>
    </Popover.Root>
  );
};

interface AutocompleteTriggerProps extends Omit<ButtonProps, 'children'> {
  placeholder?: React.ReactNode;
  render: (value: string | string[]) => React.ReactNode;
}

const AutocompleteTrigger = (props: AutocompleteTriggerProps) => {
  const { render, placeholder, ...triggerProps } = props;
  const { value } = useContext(AutocompleteContext);
  return (
    <Popover.Trigger>
      <Button {...triggerProps}>
        {value && (typeof value === 'string' || value?.length > 0)
          ? render(value)
          : placeholder}
      </Button>
    </Popover.Trigger>
  );
};

type AutocompleteContentProps = Popover.ContentProps;

const AutocompleteContent = React.forwardRef(
  (props: AutocompleteContentProps, ref?: React.Ref<HTMLDivElement>) => {
    const { children, ...contentProps } = props;

    const filter = useCallback(
      (value: string, search: string, keywords?: string[]) => {
        const extendValue =
          value + ' ' + keywords?.map((d) => d.toLowerCase()).join(' ');
        if (extendValue.includes(search.toLowerCase())) return 1;
        return 0;
      },
      []
    );

    return (
      <Popover.Content
        {...contentProps}
        size='1'>
        <Inset
          clip='padding-box'
          side='all'>
          <Command
            ref={ref}
            filter={filter}>
            {children}
          </Command>
        </Inset>
      </Popover.Content>
    );
  }
);

type AutocompleteInputProps = React.ComponentPropsWithoutRef<
  typeof Command.Input
>;

const AutocompleteInput = React.forwardRef(
  (props: AutocompleteInputProps, ref?: React.Ref<HTMLInputElement>) => {
    const { ...inputProps } = props;
    const { search, setSearch } = useContext(AutocompleteContext);
    return (
      <>
        <Command.Input
          {...inputProps}
          ref={ref}
          className={autocompleteInput}
          value={search}
          onValueChange={setSearch}
        />
        <Separator size='4' />
      </>
    );
  }
);

type AutocompleteListProps = React.ComponentPropsWithoutRef<
  typeof Command.List
>;

const AutocompleteList = React.forwardRef(
  (props: AutocompleteListProps, ref?: React.Ref<HTMLDivElement>) => {
    const { children, ...listProps } = props;
    return (
      <Command.List
        {...listProps}
        ref={ref}
        className={autocompleteList}>
        {children}
      </Command.List>
    );
  }
);

type AutocompleteItemProps = React.ComponentPropsWithoutRef<
  typeof Command.Item
> & {
  shouldShowIndicator?: boolean;
};

const AutocompleteItem = React.forwardRef(
  (props: AutocompleteItemProps, ref?: React.Ref<HTMLDivElement>) => {
    const {
      children,
      value,
      onSelect,
      shouldShowIndicator = true,
      ...itemProps
    } = props;
    const { onValueChange, value: selectedValue } =
      useContext(AutocompleteContext);

    const isSelected = value ? value === selectedValue : false;
    return (
      <Command.Item
        ref={ref}
        onSelect={onSelect ? onSelect : onValueChange}
        className={autocompleteItem}
        value={value}
        {...itemProps}>
        <Flex
          justify='between'
          align='center'
          gap='4'>
          {children}
          {isSelected && shouldShowIndicator ? <CheckIcon /> : null}
        </Flex>
      </Command.Item>
    );
  }
);

type AutocompleteCheckboxItemProps = React.ComponentPropsWithoutRef<
  typeof Command.Item
>;

const AutocompleteCheckboxItem = React.forwardRef(
  (props: AutocompleteCheckboxItemProps, ref?: React.Ref<HTMLDivElement>) => {
    const { children, value, ...itemProps } = props;
    const { onValueChange, value: selectedValue = [] } =
      useContext(AutocompleteContext);

    const isSelected =
      value && selectedValue ? selectedValue.includes(value) : false;

    return (
      <Command.Item
        {...itemProps}
        ref={ref}
        onSelect={(value) => {
          onValueChange(
            produce(selectedValue, (draft: string[]) => {
              if (isSelected) {
                const index = draft.findIndex(
                  (draftValue) => draftValue === value
                );
                draft.splice(index, 1);
              } else {
                draft.push(value);
              }
            })
          );
        }}
        className={classNames(autocompleteItemBase, autocompleteItem)}
        value={value}>
        <Flex
          align='center'
          gap='4'>
          <Checkbox
            checked={isSelected}
            tabIndex={-1}
            className={autocompleteItemCheckbox}
          />
          {children}
        </Flex>
      </Command.Item>
    );
  }
);

type AutocompleteSeparatorProps = React.ComponentPropsWithoutRef<
  typeof Command.Separator
>;

const AutocompleteSeparator = (props: AutocompleteSeparatorProps) => {
  return (
    <Command.Separator
      {...props}
      className={classNames(autocompleteItemBase, autocompleteSeparator)}
    />
  );
};

type AutocompleteGroupProps = React.ComponentPropsWithoutRef<
  typeof Command.Group
>;

const AutocompleteGroup = (props: AutocompleteGroupProps) => {
  return <Command.Group {...props} />;
};

export {
  AutocompleteCheckboxItem as CheckboxItem,
  AutocompleteContent as Content,
  AutocompleteGroup as Group,
  AutocompleteInput as Input,
  AutocompleteItem as Item,
  AutocompleteList as List,
  AutocompleteRoot as Root,
  AutocompleteSeparator as Separator,
  AutocompleteTrigger as Trigger,
};

export type {
  AutocompleteCheckboxItemProps as CheckboxItemProps,
  AutocompleteContentProps as ContentProps,
  AutocompleteGroupProps as GroupProps,
  AutocompleteInputProps as InputProps,
  AutocompleteItemProps as ItemProps,
  AutocompleteListProps as ListProps,
  AutocompleteRootProps as RootProps,
  AutocompleteSeparatorProps as SeparatorProps,
  AutocompleteTriggerProps as TriggerProps,
};
