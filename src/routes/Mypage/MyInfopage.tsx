import React, {useCallback, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from '../../contexts'
import {get} from '../../server'

import {Div} from '../../components'
import {Button} from '../../theme/daisyui'

export default function MyInfopage() {
  const {jwt, loggedUser} = useAuth()
  const [data, setData] = useState<object>({})
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('profile') // 'profile'가 기본 탭으로 설정됨
  const [email, setEmail] = useState<string>('')

  interface UserData {
    email: string
    name: string
    birth: string
    phone: string
  }

  const getUserInfo = async (id: any) => {
    try {
      const res = await fetch(`http://localhost:4000/user/${id}`, {method: 'GET'}).then(
        response => response.json()
      )
      const userData: UserData = res // res를 UserData로 형 변환
      setData(userData)
    } catch (err) {
      console.error('fetch info error: ', err)
    }
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    const email = user.email
    setEmail(email) // 상태 업데이트
    // console.log(email)
  }, [])

  return (
    <div>
      <div className="px-10 pt-10">
        <p className="text-2xl font-bold">프로필 수정</p>
        <p className="text-sm">프로필 정보를 수정할 수 있습니다.</p>
      </div>

      <div className="flex flex-col items-center justify-center pt-10 pb-4 ml-4 mr-4">
        <div className="flex flex-row justify-center w-full space-x-10 border-b-2">
          <div
            className={`flex items-center justify-center cursor-pointer ${
              activeTab === 'profile'
                ? 'text-black pb-2 border-b-2 border-black font-bold'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('profile')}>
            <p>프로필 수정</p>
          </div>
          <div
            className={`flex items-center justify-center cursor-pointer ${
              activeTab === 'password'
                ? 'text-black border-b-2 pb-2 border-black font-bold'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('password')}>
            <p>비밀번호 수정</p>
          </div>
        </div>

        <Div className="w-full h-screen bg-gray-100 bg-no-repeat">
          <div className="flex flex-col justify-center p-4 font-bold">
            <div className="flex items-center justify-center mt-10">
              <div className="flex flex-row space-x-10">
                <div style={{display: activeTab === 'password' ? 'block' : 'none'}}>
                  <div className="flex items-center pb-5">
                    <p className="mr-3 font-normal w-28">현재 비밀번호</p>
                    <input type="text" className="bg-white input" />
                  </div>

                  <div className="flex items-center pb-5">
                    <p className="mr-3 font-normal w-28">새 비밀번호</p>
                    <input type="text" className="bg-white input" />
                  </div>

                  <div className="flex items-center pb-5">
                    <p className="mr-3 font-normal w-28">새 비밀번호 확인</p>
                    <input type="text" className="bg-white input" />
                  </div>
                </div>

                <div style={{display: activeTab === 'profile' ? 'block' : 'none'}}>
                  <div className="flex justify-center">
                    <div className="mb-10 bg-gray-300 rounded-full w-28 h-28" />
                  </div>

                  <div className="flex items-center pb-5">
                    <p className="mr-3 font-normal w-28">이름</p>
                    <input type="text" className="bg-white input" />
                  </div>

                  <div className="flex items-center pb-5">
                    <p className="mr-3 font-normal w-28">이메일</p>
                    <input
                      type="text"
                      className="bg-white input"
                      value={email} // 상태값 사용
                      onChange={e => setEmail(e.target.value)} // 상태 업데이트
                    />
                  </div>

                  <div className="flex items-center pb-5">
                    <p className="mr-3 font-normal w-28">전화번호</p>
                    <input type="text" className="bg-white input" />
                  </div>

                  <Button onClick={getUserInfo} className="bnt-primary">
                    GET ID 1234
                  </Button>

                  <div className="mt-4 text-center">
                    <p>data: {JSON.stringify(data, null, 2)}</p>
                    {errorMessage && <p>error: {errorMessage}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button className="m-2 text-black bg-white border-gray-300 hover:text-white">
              적용
            </Button>
            <Button className="m-2 text-black bg-white border-gray-300 hover:text-white">
              취소
            </Button>
          </div>
        </Div>
      </div>
    </div>
  )
}
