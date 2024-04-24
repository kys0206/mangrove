//import {Link} from 'react-router-dom'
import {Link as RRLink} from 'react-router-dom'
import {Link} from '../../components'
import {useAuth} from '../../contexts'

export type LoggedUser = {email: string; password: string}

export default function NavigationBar() {
  const {loggedUser} = useAuth()

  return (
    <div className="flex justify-between bg-base-100">
      <div className="flex p-2 navBar">
        <Link to="/" className="pl-3 text-2xl font-bold bg-white border-white shadow-none">
          mangrove
        </Link>
      </div>

      <div className="flex p-2 navBar">
        <Link to="/" className="mr-4 text-base text-black bg-white border-white shadow-none btn hover:bg-blue-200 hover:border-none hover:text-white">
          Home
        </Link>
        <Link to="/rest" className="text-base text-black bg-white border-white shadow-none btn hover:bg-blue-200 hover:border-none hover:text-white">
          Rest Test
        </Link>
        {loggedUser && (
          <Link to="/board" className="ml-4 text-base text-black bg-white border-white shadow-none btn hover:bg-blue-200 hover:border-none hover:text-white">
            게시판
          </Link>
        )}
      </div>
      <div className="flex items-center p-2">
        {!loggedUser && (
          <RRLink to="/login" className="text-blue-500 bg-white border-none shadow-none btn btn-sm hover:bg-white">
            로그인
          </RRLink>
        )}

        {!loggedUser && (
          <RRLink to="/signup" className="ml-4 text-blue-500 bg-white border-none shadow-none btn btn-sm hover:bg-white">
            회원가입
          </RRLink>
        )}

        {loggedUser && (
          <RRLink to="/logout" className="ml-4 mr-4 font-bold">
            로그아웃
          </RRLink>
        )}
      </div>
    </div>
  )
}
