'use client'
import FeedbackContainer from '@/containers/Feedback';
import { EventContext } from '@/contexts/eventContext';
import { useContext } from 'react';

export default function Feedback() {
  const { event } = useContext(EventContext)
  console.log(event)
  return (
    <FeedbackContainer />
  )
}
