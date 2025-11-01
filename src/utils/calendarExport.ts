/**
 * Utility function to generate ICS calendar file for 30-day AI roadmap
 */

interface CalendarEvent {
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    url?: string;
}

export const generateICSFile = (events: CalendarEvent[], filename: string = 'ai-roadmap.ics'): void => {
    const formatDate = (date: Date): string => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}${month}${day}T${hours}${minutes}${seconds}`;
    };

    const escapeText = (text: string): string => {
        return text
            .replace(/\\/g, '\\\\')
            .replace(/;/g, '\\;')
            .replace(/,/g, '\\,')
            .replace(/\n/g, '\\n');
    };

    let icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//AI Roadmap//30-Day Plan//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
    ];

    events.forEach(event => {
        icsContent.push('BEGIN:VEVENT');
        icsContent.push(`DTSTART:${formatDate(event.startDate)}`);
        icsContent.push(`DTEND:${formatDate(event.endDate)}`);
        icsContent.push(`SUMMARY:${escapeText(event.title)}`);
        icsContent.push(`DESCRIPTION:${escapeText(event.description)}`);
        if (event.url) {
            icsContent.push(`URL:${event.url}`);
        }
        icsContent.push(`UID:${Date.now()}-${Math.random()}@ai-roadmap`);
        icsContent.push(`DTSTAMP:${formatDate(new Date())}`);
        icsContent.push('STATUS:CONFIRMED');
        icsContent.push('END:VEVENT');
    });

    icsContent.push('END:VCALENDAR');

    const icsString = icsContent.join('\r\n');
    const blob = new Blob([icsString], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export const generateRoadmapEvents = (
    plan: 'beginner' | 'advanced',
    weekData: any,
    baseUrl: string = window.location.origin
): CalendarEvent[] => {
    const events: CalendarEvent[] = [];
    const startDate = new Date();
    startDate.setHours(9, 0, 0, 0); // Start at 9 AM

    // Generate events for all 4 weeks
    for (let week = 1; week <= 4; week++) {
        const weekInfo = weekData[plan][`week${week}`];
        if (!weekInfo) continue;

        // Calculate week start (current date + (week-1) * 7 days)
        const weekStartDate = new Date(startDate);
        weekStartDate.setDate(startDate.getDate() + (week - 1) * 7);

        // Add 3 tasks per week
        for (let taskNum = 1; taskNum <= 3; taskNum++) {
            const task = weekInfo[`task${taskNum}`];
            if (!task) continue;

            // Space tasks out across the week
            const taskDate = new Date(weekStartDate);
            const daysOffset = (taskNum - 1) * 2; // Day 1, 3, 5 of the week
            taskDate.setDate(weekStartDate.getDate() + daysOffset);

            const endDate = new Date(taskDate);
            endDate.setHours(10, 0, 0, 0); // 1-hour event

            let url = baseUrl;
            if (task.link) {
                // Map link text to actual URLs
                if (task.link.includes('Tool') || task.link.includes('Prompt')) {
                    url = `${baseUrl}#prompt-improver`;
                } else if (task.link.includes('Gem')) {
                    url = `${baseUrl}#hero-gem`;
                } else if (task.link.includes('NotebookLM')) {
                    url = `${baseUrl}#notebooklm`;
                } else if (task.link.includes('Vibe')) {
                    url = `${baseUrl}#vibe-coding`;
                } else if (task.link.includes('AI Studio') || task.link.includes('Studio')) {
                    url = 'https://aistudio.google.com';
                } else if (task.link.includes('Stitch')) {
                    url = 'https://google.com/stitch';
                }
            }

            events.push({
                title: `${weekInfo.title}: ${task.title}`,
                description: `${task.desc}\n\n${weekInfo.goal ? `Week Goal: ${weekInfo.goal}` : ''}`,
                startDate: taskDate,
                endDate: endDate,
                url: url,
            });
        }
    }

    return events;
};
