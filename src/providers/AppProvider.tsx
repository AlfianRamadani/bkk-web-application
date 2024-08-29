import React from 'react'
import RoutingProvider from './RoutingProvider'
import { ReactQueryProvider } from './ReactQuery'

export default function AppProvider() {
  return (
    <ReactQueryProvider>
      <RoutingProvider />
      
    </ReactQueryProvider>

  )
}
