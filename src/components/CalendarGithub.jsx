import React from 'react'
// import GitHubCalendar from 'react-github-calendar'

export default function CalendarGithub() {
    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 6;

        return contributions.filter(day => {
            const date = new Date(day.date);
            const monthOfDay = date.getMonth();

            return (
                date.getFullYear() === currentYear &&
                monthOfDay > currentMonth - shownMonths &&
                monthOfDay <= currentMonth
            );
        });
    };
    return (
        <div className="calendar">
            Loading the data just for you.
        </div>



    )
}

{/* <GitHubCalendar username="kaushalragini" /> */ }
{/* <GitHubCalendar
                username="kaushalragini"
                transformData={selectLastHalfYear}
                hideColorLegend
                hideTotalCount
            >
                <ReactTooltip delayShow={20} html />
            </GitHubCalendar> */}