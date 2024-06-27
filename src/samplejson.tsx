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

export const schedule: Schedule = {
    1719446400: {
        events: [
            {
                title: 'Meeting with Team',
                time: '10:00',
                location: 'Conference Room A',
                description: 'Discussing project milestones.',
            },
            {
                title: 'Lunch with Sarah',
                time: '12:30',
                location: 'Downtown Bistro',
                description: 'Catch up over lunch.',
            },
        ],
        notes: 'Prepare the project report.',
    },
    1719532800: {
        events: [
            {
                title: 'Client Presentation',
                time: '09:00',
                location: "Client's Office",
                description: 'Present the new project proposal.',
            },
            {
                title: 'Yoga Class',
                time: '18:00',
                location: 'Wellness Center',
                description: 'Evening relaxation.',
            },
        ],
        notes: 'Send follow-up emails.',
    },
    1719619200: {
        events: [],
        notes: 'Review project timelines.',
    },
};
