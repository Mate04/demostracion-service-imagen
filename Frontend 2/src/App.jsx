import { Routes, Route, createBrowserRouter, createRoutesFromElements,RouterProvider} from "react-router";

import Main from './page/main'
import Price from './page/Price'
import LoaderPayment from './page/LoaderPayment'
import MainPage from './page/PageMain'
import UploadImagen from './page/UploadImage'
import EditImage from "./page/EditImageFree";
import PageFAQ from './page/FAQ'

import { getTipeSuscription } from './service/getTypeSuscription'

function App() {

  const pages = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/*' element={<Main/>} >
          <Route path="" element={<MainPage/>}/>
          <Route path="edit/free" element={<EditImage/>}/>
          <Route path="FAQ" element={<PageFAQ/>}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={pages}/>
    </>
  )
}

export default App
