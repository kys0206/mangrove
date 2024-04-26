import {Link} from 'react-router-dom'
import {Div} from '../../components'
import {Button} from '../../theme/daisyui'

export default function Part() {
  return (
    <div className="flex justify-center items-center p-4">
      <Div>
        <div className="flex flex-col justify-center p-4 font-bold">
          <p className="text-xl line-clamp-5">안녕</p>
        </div>
      </Div>
    </div>
  )
}
