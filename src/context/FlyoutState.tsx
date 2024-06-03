import React, { createContext, useContext, useState, ReactNode } from "react";

interface FlyoutContextType {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type ContextProviderProps = {
    children: React.ReactNode;
}

// export const FlyoutContext = createContext<FlyoutContextType | null>(null);
export const FlyoutContext = createContext<FlyoutContextType>({
    open: false,
    setOpen: () => {}
});

export const FlyoutState = ({ children }: ContextProviderProps) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <FlyoutContext.Provider value={{ open, setOpen }}>
            {children}
        </FlyoutContext.Provider>
    );
}

const Toggle = () => {
    const { open, setOpen } = useContext<FlyoutContextType>(FlyoutContext);
    return (
        <div onClick={() => setOpen(!open)}>
            <svg width="35" height="35" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H2.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
        </div>
    )
}

const List = ({ children }:ContextProviderProps) => {
    const { open } = useContext(FlyoutContext);
    return open ? <ul>{children}</ul> : null;
}

// const Item: React.FC<ContextProviderProps> = ({ children }) => {
const Item = ({ children }:ContextProviderProps) => {
    return <li>{children}</li>;
}

FlyoutState.Toggle = Toggle;
FlyoutState.List = List;
FlyoutState.Item = Item;

export default FlyoutState;
