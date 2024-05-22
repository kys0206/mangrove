import {Link} from 'react-router-dom'
import {Div} from '../../components'
import {Button} from '../../theme/daisyui'

export default function Part() {
  return (
    <div className="flex justify-center items-center p-4 w-full">
      <div className="p-4 font-bold">
        <p className="text-xl line-clamp-5">⭐️ 이번주 소통</p>
        <div style={{padding: '10px'}}>
          {/* <div>
            <p>이름</p>
            <p>나이</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}
