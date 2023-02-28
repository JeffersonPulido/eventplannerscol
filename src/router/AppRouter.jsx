import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Landing } from '../Landing'
import { HistoryPage } from '../HistoryPage'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/history" element={<HistoryPage/>}/>
      </Routes>
    </>
  )
}
