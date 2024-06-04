import React, {useState, useRef} from 'react'

export default function TravelInfoPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedTab, setSelectedTab] = useState('')
  const postsPerPage = 2

  // 현재 페이지에 보여질 게시물
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage

  // 페이지 변경
  const paginate = (pageNumber: React.SetStateAction<number>) =>
    setCurrentPage(pageNumber)

  const detailRef = useRef<HTMLDivElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)
  const recommendRef = useRef<HTMLDivElement>(null)

  const onMoveToDetail = () => {
    detailRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
    setSelectedTab('상세보기')
  }

  const onMoveToPhoto = () => {
    photoRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
    setSelectedTab('사진보기')
  }

  const onMoveToRecommend = () => {
    recommendRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
    setSelectedTab('추천여행')
  }

  return (
    <div className="w-full">
      <div className="flex justify-center px-10 pt-10">
        <div className="text-center">
          <p className="pb-5 text-4xl font-black">스몹 대전</p>
          <p className="pb-8 text-lg text-gray-500">대전 유성구</p>
          <p className="pb-5 text-3xl font-bold underline decoration-red-100 decoration-8 underline-offset-1">
            &ensp; 어른들의 놀이터 스몹! &ensp;
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-8/12">
          <div className="flex flex-col pt-10 pb-4">
            <div className="flex flex-row text-center border-t-2 border-b-2 border-solid">
              <div
                className={`flex items-center justify-center w-1/4 h-10 ${
                  selectedTab === '사진보기' ? 'border-b-2 border-black font-black' : ''
                }`}
                onClick={onMoveToPhoto}>
                사진보기
              </div>

              <div
                className={`flex items-center justify-center w-1/4 h-10 ${
                  selectedTab === '상세보기' ? 'border-b-2 border-black font-black' : ''
                }`}
                onClick={onMoveToDetail}>
                상세보기
              </div>

              <div
                className={`flex items-center justify-center w-1/4 h-10 ${
                  selectedTab === '여행톡' ? 'border-b-2 border-black font-black' : ''
                }`}
                onClick={() => setSelectedTab('여행톡')}>
                여행톡
              </div>

              <div
                className={`flex items-center justify-center w-1/4 h-10 ${
                  selectedTab === '추천여행' ? 'border-b-2 border-black font-black' : ''
                }`}
                onClick={onMoveToRecommend}>
                추천여행
              </div>
            </div>

            <div className="flex justify-center p-5" ref={photoRef}>
              <img src="/assets/images/smob.png" width="400px" height="auto" />
            </div>

            <div className="flex flex-col justify-center pt-20">
              <div className="w-full border-b-2 border-black border-solid">
                <p className="font-bold">상세정보</p>
              </div>

              <div className="pt-5" ref={detailRef}>
                <p className="text-sm">
                  스몹은 세계 최초 어른들의 놀이터이다. 스포츠에 기반한 약 25종의
                  어트랙션을 자체 개발하거나 스몹만의 콘텐츠로 커스터마이징해, 새롭고
                  액티브한 경험을 제공한다. 스포츠에 익숙하지 않아도, 운동을 즐겨하지
                  않아도 친구, 연인, 동료와 가볍게 즐길 수 있는 다양한 콘텐츠를 만날 수
                  있다. 어디에서도 볼 수 없는 스포츠 콘텐츠로 가득찬 유니크하고 컬러풀한
                  공간에 플레이어님을 초대한다.
                </p>
              </div>

              <div className="pt-10 font-bold">지도 위치</div>

              <div className="pt-5">
                <table>
                  <tbody className="text-sm">
                    <tr>
                      <td className="w-72">문의 및 안내</td>
                      <td>1668-4832</td>
                    </tr>

                    <tr>
                      <td>홈페이지</td>
                      <td>https://www.smob.co.kr</td>
                    </tr>

                    <tr>
                      <td>주소</td>
                      <td>대전광역시 유성구 엑스포로 1 (도룡동)</td>
                    </tr>

                    <tr>
                      <td>이용시간</td>
                      <td>10:30~21:00</td>
                    </tr>

                    <tr>
                      <td>휴일</td>
                      <td>연중무휴 / *백화점 휴점일 운영시간 (10:30 ~ 20:00)</td>
                    </tr>

                    <tr>
                      <td>주차</td>
                      <td>있음</td>
                    </tr>

                    <tr>
                      <td>체험프로그램</td>
                      <td>기본이용 시간 : 2시간</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="pt-20 pb-24">
                <div>
                  <p className="text-lg font-bold">
                    '스몹대전'와(과) 유사한 여행지 추천 👍
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-5 pt-5" ref={recommendRef}>
                  <div className="flex items-center justify-center rounded h-44">
                    <img
                      src="/assets/images/danghangpo.png"
                      className="object-cover rounded h-44"
                    />
                  </div>
                  <div className="flex items-center justify-center rounded h-44">
                    <img
                      src="/assets/images/buyeo.png"
                      className="object-cover rounded h-44"
                    />
                  </div>
                  <div className="flex items-center justify-center rounded h-44">
                    <img
                      src="/assets/images/forest.png"
                      className="object-cover rounded h-44"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
