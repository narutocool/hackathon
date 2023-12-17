import { Dispatch, SetStateAction, createContext } from "react";


interface IEvent {
    eventName?: string;
    eventCode?: string
    eventStartTime?: Date;
    eventFinishTime?: Date;
    eventDescription?: string;
    eventLocation?: string,
    eventType?: string,
    eventDuration?: number,
    eventTimeline?: Array<{
        title?: string;
        location?: string;
        startTime?: Date;
        endTime?: Date
    }>,
    eventRecap?: Array<string>,
    guests?: Array<string>,
}
interface IEventContext {
    event: IEvent;
    setEvent: Dispatch<SetStateAction<IEvent>>;
    isShowNavigation: boolean;
    setShowNavigation: Dispatch<SetStateAction<boolean>>
}

export const EventContext = createContext<IEventContext>({
    event: {},
    setEvent: () => {},
    isShowNavigation: false,
    setShowNavigation: () => {},
});