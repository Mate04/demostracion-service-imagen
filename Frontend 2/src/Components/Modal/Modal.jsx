import {CloseModalButton,ModalContent,Overlay} from './StyleModal'
import { X } from 'lucide-react'
export default function Modal({ toggleModal, children }) {

  return (
      <Overlay>
        <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseModalButton onClick={toggleModal}>
                <X size={20} />
            </CloseModalButton>
            {children}
        </ModalContent>
      </Overlay>
  )
}
