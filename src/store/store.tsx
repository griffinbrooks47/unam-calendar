import { create } from 'zustand';
import { schedule } from '@/samplejson';

/* Global State. */

interface Event {
    title: string;
    time: string;
    location: string;
    description: string;
}

interface Day {
    events: Event[];
    notes: string;
}

interface Schedule {
    [timestamp: number]: Day;
}

type Store = {
    calendarData: Schedule,
};

const useStore = create<Store>(() => ({
    calendarData: schedule,
}));

export default useStore;
