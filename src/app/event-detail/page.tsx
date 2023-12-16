'use client'
import EventDetail from '@/containers/EventDetail';
import { EventContext } from '@/contexts/eventContext';
import { useContext } from 'react';

export default function Home() {
  const { event } = useContext(EventContext)
  return (
    <EventDetail />
  )
}
