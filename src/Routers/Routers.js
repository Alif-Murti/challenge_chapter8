import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home }from '../Views/Home/Home'
import { Search } from '../Views/Search/Search'

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home view="homepage" />} />
            <Route path="/search" element={<Home view="search" />} />
            <Route path="/search/result/driver=:driver&date=:date&time=:time&passenger=:passenger" element={<Search view="result" />} />
            <Route path="/search/detail/:id" element={<Search view="detail" />} />
        </Routes>
    )
}