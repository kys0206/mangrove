import {useCallback} from 'react'
import {useNavigate} from 'react-router-dom'
import {Modal, ModalContent, ModalAction} from '../../theme/daisyui'
import {useToggle} from '../../hooks'
import {useAuth} from '../../contexts'
import {Button} from '../../theme/daisyui'

export default function Logout() {
  const [open, toggleOpen] = useToggle(true)

  const navigate = useNavigate()
  const {logout} = useAuth()
  const onAccept = useCallback(() => {
    logout(() => {
      toggleOpen()
      navigate('/')
    })
  }, [logout, navigate, toggleOpen])
  const onCancel = useCallback(() => {
    toggleOpen()
    navigate(-1)
  }, [navigate, toggleOpen])

  return (
    <Modal open={open}>
      <ModalContent
        closeIconClassName="bg-white border-none text-3xl btn-outline hover:bg-white hover:border-none hover:text-black"
        onCloseIconClicked={onCancel}>
        <p className="text-xl font-bold text-center">로그아웃을 하시겠습니까?</p>
        <ModalAction>
          <Button className="text-white bg-blue-400 btn-sm" onClick={onAccept}>
            로그아웃
          </Button>
          <Button className="text-white bg-red-400 btn-sm" onClick={onCancel}>
            취소
          </Button>
        </ModalAction>
      </ModalContent>
    </Modal>
  )
}
