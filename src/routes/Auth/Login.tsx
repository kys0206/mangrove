import type {ChangeEvent} from 'react'
import {useState, useCallback, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from '../../contexts'
import * as U from '../../utils'

type LoginFormType = Record<'email' | 'password', string>
const initialFormState = {email: '', password: ''}

export default function Login() {
  const [{email, password}, setForm] = useState<LoginFormType>(initialFormState)
  const changed = useCallback(
    (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setForm(obj => ({...obj, [key]: e.target.value}))
    },
    []
  )

  const navigate = useNavigate()
  const {login} = useAuth()
  const loginAccount = useCallback(() => {
    login(email, password, () => navigate('/'))
  }, [email, login, navigate, password])

  useEffect(() => {
    U.readObjectP<LoginFormType>('user')
      .then(user => {
        if (user) setForm(user)
      })
      .catch(e => {})
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 border border-gray-300 shadow-xl rounded-xl">
      <div className="flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
        <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
          <h1 className="mb-8 text-2xl font-bold text-center text-black">로그인</h1>
          <input
            type="text"
            className="w-full p-3 mb-4 border-gray-400 input bg-white"
            name="email"
            placeholder="이메일"
            value={email}
            onChange={changed('email')}
          />
          <input
            type="password"
            className="w-full p-3 mb-4 border-gray-400 input bg-white"
            name="password"
            placeholder="비밀번호"
            value={password}
            onChange={changed('password')}
          />
          <button
            type="submit"
            className="w-full text-white bg-blue-400 btn border-none"
            onClick={loginAccount}>
            로그인
          </button>

          <div className="mt-6 text-gray-800">
            계정이 없으신가요?
            <Link className="text-base text-blue-400 btn btn-link" to="/signup/">
              회원가입
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-4"></div>
    </div>
  )
}
