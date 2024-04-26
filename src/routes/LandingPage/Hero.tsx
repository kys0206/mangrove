import {Link} from 'react-router-dom'
import {Div} from '../../components'
import {Button} from '../../theme/daisyui'

export default function Hero() {
  return (
    <div className="flex items-center p-4">
      <Div minWidth="30rem" width="30rem" maxWidth="30rem">
        <div className="flex flex-col justify-center p-4 font-bold">
          <p className="pb-10 px-20 text-3xl text-left line-clamp-5">
            새로운 방식으로
            <br />
            <br />
            소통하는
            <br />
            <br />
            커뮤니티, 맹그로브
          </p>
          <div className="flex items-center justify-center mt-4">
            <Link to="/board">
              <Button className="bg-white border-gray-500 hover:text-white">
                게시판 이동
              </Button>
            </Link>
          </div>
        </div>
      </Div>
      <Div
        src={'assets/images/main.png'}
        className="w-full ml-4 bg-blue-100 bg-no-repeat rounded-lg"
        minHeight="20rem"
        height="20rm"
      />
    </div>
  )
}
