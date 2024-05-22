import {useCallback} from 'react'
import {useNavigate} from 'react-router-dom'
import {Button} from '../theme/daisyui'

export default function NoMatch() {
  const navigate = useNavigate()

  const goBack = useCallback(() => {
    navigate(-1)
  }, [navigate])

  return (
    <div className="flex flex-col p-4">
      <p className="text-xl text-center alert alert-error">404 page not found!</p>
      <div className="flex justify-center mt-4">
        <Button
          className="ml-4 bg-white btn-base text-blue-300 border-gray-300"
          onClick={goBack}>
          이전페이지
        </Button>
      </div>
    </div>
  )
}
