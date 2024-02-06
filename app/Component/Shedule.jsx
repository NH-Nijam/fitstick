"use client"
import React, { useEffect, useState } from 'react';
import ellipase10 from '../../public/images/Ellipse 10.png'
import ellipase from '../../public/images/Ellipse 397.png'
import star from '../../public/images/5.png'
import ellipse from '../../public/images/4.png'
import Image from 'next/image';
import dot from '../../public/images/3dot.png'


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
            <td className='lg:w-[120px] md:w-[120px] w-full lg:p-0 md:p-0 h-[80px] border-white'>
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

        <div className='w-full relative overflow-hidden'>
            <div className='container px-3 md:px-5 2xl:px-0 md:py-40 py-20 relative z-40'>
                <div className='md:w-4/6 mx-auto flex flex-col mb-10 md:items-center md:text-center'>
                    <h4 className='lg:text-lg md:text-base text-[10px] text-[#ff4e25]  font-bold flex gap-2 uppercase md:items-center '><Image className=' md:w-4 md:h-3 w-2 h-2 mt-[4px] lg:mt-0' src={dot} width={500} height={500} alt='dot' /><span>class time</span></h4>
                    <h1 className='xl:text-[48px] lg:text-[30px]  font-bold mt-1' >join our class</h1>
                </div>
                <div className='flex justify-between lg:mx-[47px] mb-[40px] overflow-x-auto'>
                    {events.map((item, i) => (
                        <button key={i} className={`font-bold ${event === item ? 'bg-[#FF4E25] text-white' : 'text-black1'} py-[12px] px-[30px] hover:bg-[#FF4E25]`} onClick={() => { setEvent(item) }}>
                            {item}
                        </button>
                    ))}
                </div>
                <div className='lg:overflow-auto md:overflow-auto overflow-scroll w-full'>
                    <table className='table w-full' style={{ overflow: 'auto' }}>
                        <thead className='bg-[#F0F0F0] text-[#827F7F] h-[70px] '>
                            <tr className='border border-white'>
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
            <Image src={ellipase10} width={500} height={500} className='absolute w-full full top-[35%] z-0' />
            <Image src={ellipase} width={500} height={500} className='absolute w-[50%] h-[50%] left-0 top-[10%]  z-0' />
            <Image src={star} width={500} height={500} className='absolute w-[254px] h-[254px]  bottom-0 lg:flex hidden 2xl:right-28 right-0  z-0' />
            <Image src={ellipse} width={500} height={500} className='absolute w-[254px] h-[254px] lg:flex hidden -rotate-90 top-[10%] right-0  z-0' />
        </div>
    );
};

export default Schedule;