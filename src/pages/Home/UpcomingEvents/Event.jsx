import { useState } from "react";
import { useEffect } from "react";

const Event = ({ event }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const [startMonth, setStartMonth] = useState('');
    const [endMonth, setEndMonth] = useState('');

    const [startYear, setStartYear] = useState('');
    const [endYear, setEndYear] = useState('');
    
    useEffect(() => {
        const eventStart = new Date(event?.eventStartDate);
        const eventEnd = new Date(event?.eventEndDate);

        const monthMap = {
            1: 'Jan',
            2: 'Feb',
            3: 'Mar',
            4: 'Apr',
            5: 'May',
            6: 'Jun',
            7: 'Jul',
            8: 'Aug',
            9: 'Sep',
            10: 'Oct',
            11: 'Nov',
            12: 'Dec',
        }

        setStartDate(eventStart.getDate());
        setEndDate(eventEnd.getDate());

        setStartMonth(monthMap[eventStart.getMonth() + 1]);
        setEndMonth(monthMap[eventEnd.getMonth() + 1]);

        setStartYear(eventStart.getFullYear());
        setEndYear(eventEnd.getFullYear());
    }, [])

    return (
        <div className="flex justify-start bg-white w-72 lg:w-[450px] h-[230px] lg:h-[210px]">
            <div className="w-[30%] lg:w-[35%]">
                <img src={event?.eventPhoto} alt="Event" className="w-full h-full object-cover" />
            </div>
            <div className="w-[70%] lg:w-[65%] p-4">
                <h4 className="text-sm font-semibold mb-5">{event?.eventName}</h4>
                <p title={event?.eventDetails} className="text-sm mb-5">{event?.eventDetails?.slice(0, 80)}...</p>
                <p className="bg-yellow-400 w-fit px-2 lg:px-7 py-2 rounded font-semibold text-xs lg:text-sm">
                    {`${startMonth} ${startDate}, ${startYear}`} - {`${endMonth} ${endDate}, ${endYear}`}
                </p>
            </div>
        </div>
    );
};

export default Event;