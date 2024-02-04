"use client"
import React, { useEffect, useState } from 'react';
import dot from '../../public/images/3dot.png'
import Image from 'next/image';
import ellipse from '../../public/images/Ellipse.png'



const items =
    [
        {
            events: "All events",
            data: [
                {
                    time: "9.00 am",
                    Monday: null,
                    Tuesday: null,
                    Wednesday: {
                        title: "cardio",
                        description: "cardio excesses"
                    },
                    Thursday: null,
                    Friday: null,
                    Saturday: null,
                    Sunday: {
                        title: "cardio",
                        description: "cardio excesses"
                    },

                },
                {
                    time: "10.00 am",
                    Monday: null,
                    Tuesday: {
                        title: "krunch & kore",
                        description: "krunch & kore"
                    },
                    Wednesday: {
                        title: "cardio",
                        description: "cardio excesses"
                    },
                    Thursday: null,
                    Friday: null,
                    Saturday: {
                        title: "CrossFit",
                        description: "CrossFit stretchy"
                    },
                    Sunday: null

                },
                {
                    time: "12.00 pm",
                    Monday: null,
                    Tuesday: {
                        title: "krunch & kore",
                        description: "krunch & kore"
                    },
                    Wednesday: {
                        title: "cardio",
                        description: "cardio excesses"
                    },
                    Thursday: null,
                    Friday: null,
                    Saturday: {
                        title: "CrossFit",
                        description: "CrossFit stretchy"
                    },
                    Sunday: null

                },
                {
                    time: "1.00 pm",
                    Monday: null,
                    Tuesday: {
                        title: "krunch & kore",
                        description: "krunch & kore"
                    },
                    Wednesday: {
                        title: "cardio",
                        description: "cardio excesses"
                    },
                    Thursday: null,
                    Friday: null,
                    Saturday: {
                        title: "CrossFit",
                        description: "CrossFit stretchy"
                    },
                    Sunday: null

                },
                {
                    time: "2.00 pm",
                    Monday: null,
                    Tuesday: {
                        title: "krunch & kore",
                        description: "krunch & kore"
                    },
                    Wednesday: {
                        title: "cardio",
                        description: "cardio excesses"
                    },
                    Thursday: null,
                    Friday: null,
                    Saturday: {
                        title: "CrossFit",
                        description: "CrossFit stretchy"
                    },
                    Sunday: null

                },
                {
                    time: "3.00 pm",
                    Monday: null,
                    Tuesday: {
                        title: "krunch & kore",
                        description: "krunch & kore"
                    },
                    Wednesday: {
                        title: "cardio",
                        description: "cardio excesses"
                    },
                    Thursday: null,
                    Friday: null,
                    Saturday: {
                        title: "CrossFit",
                        description: "CrossFit stretchy"
                    },
                    Sunday: null

                },
                {
                    time: "4.00 pm",
                    Monday: null,
                    Tuesday: {
                        title: "krunch & kore",
                        description: "krunch & kore"
                    },
                    Wednesday: {
                        title: "cardio",
                        description: "cardio excesses"
                    },
                    Thursday: null,
                    Friday: null,
                    Saturday: {
                        title: "CrossFit",
                        description: "CrossFit stretchy"
                    },
                    Sunday: null

                },
                {
                    time: "5.00 pm",
                    Monday: null,
                    Tuesday: {
                        title: "krunch & kore",
                        description: "krunch & kore"
                    },
                    Wednesday: {
                        title: "cardio",
                        description: "cardio excesses"
                    },
                    Thursday: null,
                    Friday: null,
                    Saturday: {
                        title: "CrossFit",
                        description: "CrossFit stretchy"
                    },
                    Sunday: null

                },
                {
                    time: "6.00 pm",
                    Monday: null,
                    Tuesday: {
                        title: "krunch & kore",
                        description: "krunch & kore"
                    },
                    Wednesday: {
                        title: "cardio",
                        description: "cardio excesses"
                    },
                    Thursday: null,
                    Friday: null,
                    Saturday: {
                        title: "CrossFit",
                        description: "CrossFit stretchy"
                    },
                    Sunday: null

                },
                {
                    time: "7.00 pm",
                    Monday: null,
                    Tuesday: {
                        title: "krunch & kore",
                        description: "krunch & kore"
                    },
                    Wednesday: {
                        title: "cardio",
                        description: "cardio excesses"
                    },
                    Thursday: null,
                    Friday: null,
                    Saturday: {
                        title: "CrossFit",
                        description: "CrossFit stretchy"
                    },
                    Sunday: null

                },
            ]
        }
        ,
        {
            events: "Open gym",
            data: [
                {
                    time: "9.00 am",
                    Monday: null,
                    Tuesday: null,
                    Wednesday: {
                        title: "cardio",
                        description: "cardio excesses"
                    },
                    Thursday: null,
                    Friday: null,
                    Saturday: null,
                    Sunday: {
                        title: "cardio",
                        description: "cardio excesses"
                    },

                },
                {
                    time: "10.00 am",
                    Monday: null,
                    Tuesday: {
                        title: "krunch & kore",
                        description: "krunch & kore"
                    },
                    Wednesday: {
                        title: "cardio",
                        description: "cardio excesses"
                    },
                    Thursday: null,
                    Friday: null,
                    Saturday: {
                        title: "CrossFit",
                        description: "CrossFit stretchy"
                    },
                    Sunday: null

                },
                {
                    time: "12.00 pm",
                    Monday: null,
                    Tuesday: {
                        title: "krunch & kore",
                        description: "krunch & kore"
                    },
                    Wednesday: {
                        title: "cardio",
                        description: "cardio excesses"
                    },
                    Thursday: null,
                    Friday: null,
                    Saturday: {
                        title: "CrossFit",
                        description: "CrossFit stretchy"
                    },
                    Sunday: null

                },
                {
                    time: "1.00 pm",
                    Monday: null,
                    Tuesday: {
                        title: "krunch & kore",
                        description: "krunch & kore"
                    },
                    Wednesday: {
                        title: "cardio",
                        description: "cardio excesses"
                    },
                    Thursday: null,
                    Friday: null,
                    Saturday: {
                        title: "CrossFit",
                        description: "CrossFit stretchy"
                    },
                    Sunday: null

                },
                {
                    time: "2.00 pm",
                    Monday: null,
                    Tuesday: {
                        title: "krunch & kore",
                        description: "krunch & kore"
                    },
                    Wednesday: {
                        title: "cardio",
                        description: "cardio excesses"
                    },
                    Thursday: null,
                    Friday: null,
                    Saturday: {
                        title: "CrossFit",
                        description: "CrossFit stretchy"
                    },
                    Sunday: null

                },
                {
                    time: "3.00 pm",
                    Monday: null,
                    Tuesday: {
                        title: "krunch & kore",
                        description: "krunch & kore"
                    },
                    Wednesday: {
                        title: "cardio",
                        description: "cardio excesses"
                    },
                    Thursday: null,
                    Friday: null,
                    Saturday: {
                        title: "CrossFit",
                        description: "CrossFit stretchy"
                    },
                    Sunday: null

                },
                {
                    time: "4.00 pm",
                    Monday: null,
                    Tuesday: {
                        title: "krunch & kore",
                        description: "krunch & kore"
                    },
                    Wednesday: {
                        title: "cardio",
                        description: "cardio excesses"
                    },
                    Thursday: null,
                    Friday: null,
                    Saturday: {
                        title: "CrossFit",
                        description: "CrossFit stretchy"
                    },
                    Sunday: null

                },
                {
                    time: "5.00 pm",
                    Monday: null,
                    Tuesday: {
                        title: "krunch & kore",
                        description: "krunch & kore"
                    },
                    Wednesday: {
                        title: "cardio",
                        description: "cardio excesses"
                    },
                    Thursday: null,
                    Friday: null,
                    Saturday: {
                        title: "CrossFit",
                        description: "CrossFit stretchy"
                    },
                    Sunday: null

                },
                {
                    time: "6.00 pm",
                    Monday: null,
                    Tuesday: {
                        title: "krunch & kore",
                        description: "krunch & kore"
                    },
                    Wednesday: {
                        title: "cardio",
                        description: "cardio excesses"
                    },
                    Thursday: null,
                    Friday: null,
                    Saturday: {
                        title: "CrossFit",
                        description: "CrossFit stretchy"
                    },
                    Sunday: null

                },
                {
                    time: "7.00 pm",
                    Monday: null,
                    Tuesday: {
                        title: "krunch & kore",
                        description: "krunch & kore"
                    },
                    Wednesday: {
                        title: "cardio",
                        description: "cardio excesses"
                    },
                    Thursday: null,
                    Friday: null,
                    Saturday: {
                        title: "CrossFit",
                        description: "CrossFit stretchy"
                    },
                    Sunday: null

                },
            ]
        }
    ]


const Schedule = () => {
    const [schedule, setSchedule] = useState(null);
    const [event, setEvent] = useState("All events");
    const events = [
        "All events", "Open gym", "Total body", "krunch & kore", "Yoga", "Crossfit", "gym", "cardio"
    ];

    useEffect(() => {
        fetch('/schedule.json')
            .then(response => response.json())
            .then(json => setSchedule(json))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const eventData = items.find((item) => item?.events === event);

    const renderTableCell = (day) => {
        return day !== null ? (
            <td className='lg:w-[120px] md:w-[120px] w-full lg:p-0 md:p-0 h-[80px] border border-white'>
                <span className='font-bold'>{day?.title}</span><br />
                <span className='text-[12px]'>{day?.description}</span>
            </td>
        ) : (
            <td className='lg:w-[120px] md:w-[120px] w-full lg:p-0 md:p-0 h-[80px] border border-white'></td>
        );
    };

    const Tbody = (
        <>
            {eventData ? (
                <tbody className='border border-white'>
                    {eventData.data.map((item, j) => (
                        <tr className='w-full text-center schedule border border-white' key={j}>
                            <th className='lg:w-[120px] md:w-[120px] w-full border border-white lg:p-0 md:p-0 h-[80px] bg-primary text-white text-[12px] bg-[#FF4E25]'>{item.time}</th>
                            {renderTableCell(item.Monday)}
                            {renderTableCell(item.Tuesday)}
                            {renderTableCell(item.Wednesday)}
                            {renderTableCell(item.Thursday)}
                            {renderTableCell(item.Friday)}
                            {renderTableCell(item.Saturday)}
                            {renderTableCell(item.Sunday)}
                        </tr>
                    ))}
                </tbody>
            ) : (
                <td colSpan={8} className='text-center text-primary lg:text-[48px] text-[24px] font-bold border border-white'>Not Found Any Data</td>
            )}
        </>
    );

    return (
        <div className='border relative'>
            <div className='mt-[150px] container overflow-scroll '>
            <h4 className='text-lg text-[#ff4e25] font-bold flex gap-2 items-center uppercase mx-auto w-fit'><Image className=' w-4 h-3' src={dot} width={500} height={500} alt='dot' /><span>About us</span></h4>
                <h1 className='text-[48px] text-center font-bold mb-[60px] capitalize'>join our class</h1>
                <div className='flex justify-between lg:mx-[47px] mb-[40px] overflow-x-auto'>
                    {events.map((item, i) => (
                        <button key={i} className={`font-bold ${event === item ? 'bg-[#FF4E25] text-white' : 'text-black1'} py-[12px] px-[30px] hover:bg-[#FF4E25]`} onClick={() => { setEvent(item) }}>
                            {item}
                        </button>
                    ))}
                </div>
                <div className=' '>
                    <table className='table w-[1440px]'>
                        <thead className='bg-[#F0F0F0] text-[#827F7F] h-[70px] '>
                            <tr className='border border-white '>
                                <th className='w-[120px]'>#</th>
                                <th className='w-[120px]'>Monday</th>
                                <th className='w-[120px]'>Tuesday</th>
                                <th className='w-[120px]'>Wednesday</th>
                                <th className='w-[120px]'>Thursday</th>
                                <th className='w-[120px]'>Friday</th>
                                <th className='w-[120px]'>Saturday</th>
                                <th className='w-[120px]'>Sunday</th>
                            </tr>
                        </thead>
                        {Tbody}
                    </table>
                </div>
            </div>
            <Image src={ellipse} width={500} height={500} alt='' className='absolute top-0 left-[200px]'/>
        </div>
    );
};

export default Schedule;