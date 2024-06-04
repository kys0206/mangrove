import {Routes, Route} from 'react-router-dom'

import Layout from './Layout'

import RequireAuth from './Auth/RequireAuth'

import LandingPage from './LandingPage'
import Board from '../pages/Board'
import Mypage from '../routes/Mypage'

import Signup from './Auth/SignUp'
import Login from './Auth/Login'
import Logout from './Auth/Logout'

import NoMatch from './NoMatch'
import TravelList from '../pages/Travel/travelList'
import TravelInfo from '../pages/Travel/travelInfo'
import RestTest from './RestTest'

export default function RoutesSetup() {
  return (
    <div className="text-black bg-white">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="mypage" element={<Mypage />} />
          <Route path="list/travel" element={<TravelList />} />
          <Route path="list/travel/info" element={<TravelInfo />} />

          <Route path="/rest" element={<RestTest />} />

          <Route
            path="/board"
            element={
              <RequireAuth>
                <Board />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>

        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route
          path="logout"
          element={
            <RequireAuth>
              <Logout />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  )
}
