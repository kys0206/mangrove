import type {ChangeEvent} from 'react'
import {useState, useCallback} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from '../../contexts'
// import * as D from '../../data'

type SignUpFormType = Record<
  'email' | 'password' | 'confirmPassword' | 'name' | 'birth' | 'phone',
  string
>
const initialFormState = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  birth: '',
  phone: ''
}

export default function SignUp() {
  const [{email, password, confirmPassword, name, birth, phone}, setForm] =
    useState<SignUpFormType>(initialFormState)
  const changed = useCallback(
    (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setForm(obj => ({...obj, [key]: e.target.value}))
    },
    []
  )

  const navigate = useNavigate()
  const {signup} = useAuth()
  const createAccount = useCallback(() => {
    console.log(email, password, confirmPassword, name, birth, phone)
    if (password === confirmPassword) {
      signup(email, password, name, birth, phone, () => navigate('/'))
    } else alert('비밀번호가 일치하지 않습니다. 다시 입력하세요.')
  }, [confirmPassword, email, navigate, password, name, birth, phone, signup])

  return (
    <div className="flex flex-col min-h-screen border-gray-300 rounded-xl shadow-xl bg-gray-100 border">
      <div className="flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
        <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
          <h1 className="mb-8 text-2xl text-center text-black font-bold">회원가입</h1>
          <input
            type="text"
            className="w-full p-3 mb-4 input bg-white border-gray-300"
            name="email"
            placeholder="이메일"
            value={email}
            onChange={changed('email')}
          />
          <input
            type="password"
            className="w-full p-3 mb-4 input bg-white border-gray-300"
            name="password"
            placeholder="비밀번호"
            value={password}
            onChange={changed('password')}
          />
          <input
            type="password"
            className="w-full p-3 mb-4 input bg-white border-gray-300"
            name="confirm_password"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={changed('confirmPassword')}
          />

          <div className="pt-5">
            <input
              type="text"
              className="w-full p-3 mb-4 input bg-white border-gray-300"
              name="name"
              placeholder="이름"
              value={name}
              onChange={changed('name')}
            />
            <input
              type="text"
              className="w-full p-3 mb-4 input bg-white border-gray-300"
              name="birth"
              placeholder="생년월일"
              value={birth}
              onChange={changed('birth')}
            />
            <input
              type="text"
              className="w-full p-3 mb-4 input bg-white border-gray-300"
              name="phone"
              placeholder="전화번호"
              value={phone}
              onChange={changed('phone')}
            />
          </div>

          <div className="pt-8">
            <button
              type="submit"
              className="w-full btn bg-blue-400 text-white border-none"
              onClick={createAccount}>
              회원가입 하기
            </button>
          </div>

          <div className="mt-6 text-grey-dark">
            이미 가입한 계정이 있으신가요?
            <Link className="btn btn-link text-blue-400 text-base" to="/login/">
              로그인
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-4"></div>
    </div>
  )
}
