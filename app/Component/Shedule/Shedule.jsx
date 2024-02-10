"use client"
import React, { useEffect, useState } from 'react';
// import ellipase10 from '../../../public/images/Ellipse 10.png'
// import ellipase from '../../../public/images/Ellipse 397.png'
// import star from '../../../public/images/5.png'
// import ellipse from '../../../public/images/4.png'
import Image from 'next/image';
import dot from '../../../public/images/3dot.png'


const Schedule = () => {
    const [active, setActive] = useState()
    const [currDay, setCurrday] = useState([])
    const events = [
        { id: 1, name: "All events" },
        { id: 2, name: "Open gym" },
        { id: 4, name: "Total body" },
        { id: 5, name: "krunch & kore" },
        { id: 6, name: "Yoga" },
        { id: 7, name: "Crossfit" },
        { id: 8, name: "gym" },
        { id: 9, name: "cardio" }
    ];
    useEffect(() => {
        fetch('Sedule.json')
            .then(res => res.json())
            .then(data => {
                setCurrday(data)
            })
    }, [])


    // const activeHandler = (event) => {
    //     const getActive = events.find(e => e.id === event.id)
    //     if (getActive) {

    //         setDay(setActive(id))
    //     }


    // }
    const activeHandler = (category) => {
        const updateData = setCurrday.filter(currData => currData.Category === category)
        setCurrday(updateData)
        const getActive = events.find(e => e.id === category)
        if (getActive) {
            setActive(id)
        }
    }



    return (
        <div className='py-20'>
            <div className='container'>
                <div className='md:w-4/6 mx-auto flex flex-col md:items-center md:text-center'>
                    <h4 className='lg:text-lg md:text-base text-[10px] text-[#ff4e25]  font-bold flex gap-2 uppercase md:items-center '><Image className=' md:w-4 md:h-3 w-2 h-2 mt-[4px] lg:mt-0' src={dot} width={500} height={500} alt='dot' /><span>class time</span></h4>
                    <h1 className='xl:text-[48px] lg:text-[30px]  font-bold mt-1 capitalize' >join our class</h1>
                </div>
                <div className=' w-8/12 mx-auto my-10 flex justify-between'>
                    
                </div>
                <div className='border'>
                    <table className='w-full '>
                        <thead>
                            <tr className='  text-center bg-white text-black py-4'>
                                <th className='uppercase py-4'></th>
                                <th className='uppercase py-4'>Monday</th>
                                <th className='uppercase py-4'>tuesday</th>
                                <th className='uppercase py-4'>tuesday</th>
                                <th className='uppercase py-4'>Wednesday</th>
                                <th className='uppercase py-4'>Tuesday</th>
                                <th className='uppercase py-4'>Friday</th>
                                <th className='uppercase py-4'>Saturday</th>
                                <th className='uppercase py-4'>Sunday</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                currDay.map(curday => (
                                    <tr className='border text-center' key={curday.id} curday={curday}>
                                        <td className='border bg-[#ff4e25]'>{curday.time}</td>
                                        <td className='border'>{curday.Monday}</td>
                                        <td className='border'>{curday.Tuesday}</td>
                                        <td className='border flex flex-col'><span>{curday.Wednesday.title}</span><span>{curday.Wednesday.description}</span></td>
                                        <td className='border'>{curday.Thursday}</td>
                                        <td className='border'>{curday.Friday}</td>
                                        <td className='border'>{curday.Saturday}</td>
                                        <td className='border flex flex-col'><span>{curday.Sunday.title}</span><span>{curday.Sunday.description}</span></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Schedule;