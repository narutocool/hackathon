import { Dispatch, SetStateAction, createContext } from "react";

interface IEventContext {
    event: {};
    setEvent: Dispatch<SetStateAction<{}>>;
    isShowNavigation: boolean;
    setShowNavigation: Dispatch<SetStateAction<boolean>>
}

export const EventContext = createContext<IEventContext>({
    event: {},
    setEvent: () => {},
    isShowNavigation: false,
    setShowNavigation: () => {},
});