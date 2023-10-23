import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Event from './Event';
import { Flip } from 'react-awesome-reveal';

const UpcomingEvents = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data.slice(data.length - 3, data.length)));
    }, []);

    return (
        <section className="mt-28 px-4 lg:px-0">
            <div className="max-w-[1380px] mx-auto bg-black pt-28 pb-36 px-10 rounded-sm ">
                <Flip direction='horizontal'>
                    <h2 className="mb-20 text-center text-3xl md:text-4xl text-white font-semibold tracking-wide">
                        Upcoming Events
                    </h2>
                </Flip>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
                    {
                        events.map(event => <Event key={event?._id} event={event}>
                        </Event>)
                    }
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;