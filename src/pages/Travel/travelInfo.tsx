import React, {useState} from 'react'
import {Div} from '../../components'
import Banner from './banner'

export default function TravelInfoPage() {
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
      <div className="pt-10 px-10 flex justify-center">
        <div className="text-center">
          <p className="text-4xl font-black pb-5">스몹 대전</p>
          <p className="text-lg pb-8 text-gray-500">대전 유성구</p>
          <p className="text-3xl pb-5 font-bold underline decoration-red-100 decoration-8 underline-offset-1">
            &ensp; 어른들의 놀이터 스몹! &ensp;
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center ml-4 mr-4 pt-10 pb-4"></div>
    </div>
  )
}
