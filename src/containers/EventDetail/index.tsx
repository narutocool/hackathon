'use client'
import { useRouter } from 'next/navigation';

import style from './style.module.css'
import { Button, Modal } from 'antd';
import { useState } from 'react';

const EventDetail = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false)

    const toggleModal = () => {
      setOpen(prev => !prev)
    }

    const onClick = () => {
        router.push('/time-agenda');
    }
  return (
    <div className={style.eventDetailContainer}>
        Event detail
        <button onClick={onClick}>Go to Time Agenda</button>
        <Button onClick={toggleModal}>Open modal</Button>
        <Modal closable open={open} onOk={toggleModal} onCancel={toggleModal} />
    </div>
  )
}

export default EventDetail