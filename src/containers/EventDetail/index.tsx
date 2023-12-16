'use client'
import { useRouter } from 'next/navigation';

import style from './style.module.css'

const EventDetail = () => {
    const router = useRouter();

    const onClick = () => {
        router.push('/time-agenda');
    }
  return (
    <div className={style.eventDetailContainer}>
        Event detail
        <button onClick={onClick}>Go to Time Agenda</button>
    </div>
  )
}

export default EventDetail