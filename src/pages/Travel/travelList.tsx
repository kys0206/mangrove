import React, {useState} from 'react'
import {Div} from '../../components'
import Banner from './banner'
import {Link} from 'react-router-dom'

export default function TravelListPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 2

  // 현재 페이지에 보여질 게시물
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // 페이지 변경
  const paginate = (pageNumber: React.SetStateAction<number>) =>
    setCurrentPage(pageNumber)

  return (
    <div>
      <div className="pt-10 px-10">
        <p className="text-2xl font-bold pb-2">🚙 여행지</p>
        <p className="text-sm">가고자 하는 여행지의 정보를 알아보세요!</p>
      </div>

      <div className="flex flex-col items-center justify-center ml-4 mr-4 pt-10 pb-4">
        <Div className="w-full h-screen bg-no-repeat">
          <div className="w-full pb-2 text-xl font-bold">#태그 위치</div>
          <div>
            <div className="w-full h-auto border-t-2 border-black">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="p-5 flex flex-row border-b-2">
                  <div>
                    <div className="bg-gray-300 w-28 h-20" />
                  </div>

                  <div className="flex flex-col text-sm pl-10">
                    <div>
                      <Link
                        className="text-lg font-bold hover:underline"
                        to="/list/travel/info">
                        스몹 대전
                      </Link>
                    </div>

                    <div>
                      <p>위치: 대전 유성구</p>
                    </div>

                    <div>
                      <p>설명: 어른들의 놀이터 스몹!</p>
                    </div>

                    <div>
                      <p>
                        태그: #가족과 함께 #대구가볼만한곳 #레포츠 #실내스포츠
                        #실내액티비티 #액티비티 #연인과 함께
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              {[...Array(Math.ceil(postsPerPage))].map((_, index) => (
                <div className="p-2">
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className="focus:outline-none">
                    {index + 1}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="py-56">
            <Banner />
          </div>
        </Div>
      </div>
    </div>
  )
}
