import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Div} from '../../components'
import {Button} from '../../theme/daisyui'

export default function MyInfopage() {
  const [activeTab, setActiveTab] = useState('password') // 'password'가 기본 탭으로 설정됨

  return (
    <div>
      <div className="pt-10 px-10">
        <p className="text-2xl font-bold">프로필 수정</p>
        <p className="text-sm">프로필 정보를 수정할 수 있습니다.</p>
      </div>

      <div className="flex flex-col items-center justify-center ml-4 mr-4 pt-10 pb-4">
        <div className="flex flex-row space-x-10 border-b-2 w-full justify-center">
          <div
            className={`flex items-center justify-center cursor-pointer ${
              activeTab === 'password'
                ? 'text-black border-b-2 pb-2 border-black'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('password')}>
            <p>비밀번호 수정</p>
          </div>
          <div
            className={`flex items-center justify-center cursor-pointer ${
              activeTab === 'profile'
                ? 'text-black pb-2 border-b-2 border-black'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('profile')}>
            <p>프로필 수정</p>
          </div>
        </div>

        <Div className="w-full h-screen bg-gray-100 bg-no-repeat">
          <div className="flex flex-col justify-center p-4 font-bold">
            <div className="flex items-center justify-center mt-10">
              <div className="flex flex-row space-x-10">
                <div style={{display: activeTab === 'password' ? 'block' : 'none'}}>
                  <div className="pb-5 flex items-center">
                    <p className="font-normal mr-3 w-28">현재 비밀번호</p>
                    <input type="text" className="input bg-white" />
                  </div>

                  <div className="pb-5 flex items-center">
                    <p className="font-normal mr-3 w-28">새 비밀번호</p>
                    <input type="text" className="input bg-white" />
                  </div>

                  <div className="pb-5 flex items-center">
                    <p className="font-normal mr-3 w-28">새 비밀번호 확인</p>
                    <input type="text" className="input bg-white" />
                  </div>
                </div>

                <div style={{display: activeTab === 'profile' ? 'block' : 'none'}}>
                  <div className="flex justify-center">
                    <div className="bg-gray-300 w-28 h-28 mb-10 rounded-full" />
                  </div>

                  <div className="pb-5 flex items-center">
                    <p className="font-normal mr-3 w-28">이름</p>
                    <input type="text" className="input bg-white" />
                  </div>

                  <div className="pb-5 flex items-center">
                    <p className="font-normal mr-3 w-28">이메일</p>
                    <input type="text" className="input bg-white" />
                  </div>

                  <div className="pb-5 flex items-center">
                    <p className="font-normal mr-3 w-28">전화번호</p>
                    <input type="text" className="input bg-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button className="bg-white border-gray-300 text-black hover:text-white m-2">
              적용
            </Button>
            <Button className="bg-white border-gray-300 text-black hover:text-white m-2">
              취소
            </Button>
          </div>
        </Div>
      </div>
    </div>
  )
}
