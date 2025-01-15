import UploadImagen from '../Components/UploadImg/UploadImagen'
import EditImagenes from '../Components/EditImagen2/EditImagenes'
import {loadImages} from '../script/loadImageStorage'
function MainPage() {
  const images = loadImages()
  return (
    <>
      {
        images.length > 0 ? <EditImagenes/> : <UploadImagen/>
      }
    </>
  )
}

export default MainPage