import React, { Dispatch, ReactNode, useMemo, SetStateAction, createContext, useState } from "react";
import AutoInput from "./AutoInput";

interface ChildrenType {
  children: ReactNode;
}

interface OptionsType {
  value: string;
  label: string;
}

interface ContextType {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  showInput: boolean;
  setShowInput: Dispatch<SetStateAction<boolean>>;
  popoverMenu: string;
  setPopoverMenu: Dispatch<SetStateAction<string>>;
  filteredOptions: OptionsType[];
  handleSelectChange: (value: string) => void;
}

export const AutoContext = createContext<ContextType>({
  query: "",
  setQuery: () => {},
  showInput: false,
  setShowInput: () => {},
  popoverMenu: "",
  setPopoverMenu: () => {},
  filteredOptions: [],
  handleSelectChange: () => {},
});

const AutoState = ({ children }: ChildrenType) => {
  const [query, setQuery] = useState<string>('');
  const [showInput, setShowInput] = useState<boolean>(false);
  const [popoverMenu, setPopoverMenu] = useState<string>('');

  const options: OptionsType[] = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'blueberry', label: 'Blueberry' },
    { value: 'grapes', label: 'Grapes' },
    { value: 'pineapple', label: 'Pineapple' },
    { value: 'aubergine', label: 'Aubergine' },
    { value: 'broccoli', label: 'Broccoli' },
  ];

  const filteredOptions = useMemo(() => {
    return options.filter(item =>
      item.label.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const handleSelectChange = (value: string) => {
    setQuery(value);
    setPopoverMenu(value);
    setShowInput(false);
  };

  return (
    <AutoContext.Provider value={{
      query,
      setQuery,
      showInput,
      setShowInput,
      popoverMenu,
      setPopoverMenu,
      filteredOptions,
      handleSelectChange
    }}>
      {children}
    </AutoContext.Provider>
  );
};

AutoState.Input = AutoInput;

export default AutoState;
