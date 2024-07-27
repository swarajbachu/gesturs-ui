import CompareImage from '@/components/gesturs/compare-image'
import React from 'react'

export default function CompareImageDemo() {
  return (
    <div>
      <CompareImage
        beforeImage="/components/compare/1.jpg"
        afterImage="/components/compare/2.jpg"
        />
    </div>
  )
}
