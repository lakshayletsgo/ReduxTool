import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarPannel from './NavBarPannel'
import { Provider } from 'react-redux'
import store from '../store/store'


export default function RootLayout() {
  return (
    <div>
        <Provider store={store}>

        <NavBarPannel/>
        <main>
            <Outlet/>
        </main>
        </Provider>
    </div>
  )
}
