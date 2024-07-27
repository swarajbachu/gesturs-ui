import StickyMouseWrapper from '@/components/gesturs/sticky-mouse'
import { Button } from '@/components/ui/button'
import React from 'react'
import { FaInstagram } from 'react-icons/fa'

export default function StickyMouseDemo() {
  return (
    <div>
      <StickyMouseWrapper>
        <Button size='icon'>
            <FaInstagram  />
        </Button>
      </StickyMouseWrapper>
    </div>
  )
}
