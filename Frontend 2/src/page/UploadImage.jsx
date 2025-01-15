import {Container,Title,Subtitle ,UploadCard,UploadButton,DropText,URLText} from '../Components/UploadImagenComponents/StyleImagen'
import { useDropzone } from 'react-dropzone';
import {useState, useCallback, useContext, useEffect} from 'react'
import { AuthContext } from '../context/AuthContext';
import Register from '../Components/NavBar/FormLogin/FormRegister'
import {imageToBase64, saveURLImagen} from '../script/base64'
import {createImagen, createImagenFree} from '../service/serviceImagen'
import {PuffLoader} from 'react-spinners'
import {useNavigate} from 'react-router'
import ScrollSteps from '../Components/Scroll/Scroll'


export default function UploadImage() {

  useEffect(()=>{
    localStorage.removeItem('imagen_con_fondo')
    localStorage.removeItem('imagen_sin_fondo')
  },[])

    const navigate = useNavigate()
    const [file, setFile ] = useState(null);
    const [error, setError] = useState('');
    const [modal, setModal] = useState(false)
    const [loader,setLoader] = useState(false)
    //nuevo estado para imagen ya procesada
    const [processedImage, setProcessedImage] = useState(null);

    

    //Habilitacion de modal
    const onModal = () => setModal(!modal)
    const { token } = useContext(AuthContext);
    //aca valido la imagen y si esta logueado
    const onDrop = useCallback(async (acceptedFiles) => {
      setLoader(true)
      //obtengo el token si en ese momento existe
      const validImageTypes = ['image/jpeg', 'image/png', 'image/webp'];
      const uploadedFile = acceptedFiles[0];
      try {
        if (!validImageTypes.includes(uploadedFile.type)) {
          setFile(null);
          setError('Por favor, sube un archivo en formato de imagen (JPEG, PNG, WEBP).');
          return
        }
        
  
        const maxSizeInBytes = 6 * 1024 * 1024; // 6 MB
        if (uploadedFile.size > maxSizeInBytes) {
          setFile(null);
          setError('El archivo debe pesar menos de 6 MB.');
          return;
        }
        // Convertir a Base64 usando async/await
        const base64 = await imageToBase64(uploadedFile);
        const data = {
          "imagen":base64
        }
        const res = token
        ? await createImagen(data,token)
        : await createImagenFree(data)
        
        const base64res = res.imagen
        //Guardar las dos imagenes en el frontend
        const imageWithBackgroundURL = saveURLImagen(base64)
        const imageWithingBackgroundURL = saveURLImagen(base64res)
        //guardamos la direcciones en memoria cache del navegador
        localStorage.setItem('imagen_con_fondo',base64)
        localStorage.setItem('imagen_sin_fondo',base64res)

        if (!token){
          navigate('/edit/free')
        }else{
          //aca si esta logueado que le vaya a una pagina mas especializada
        }

        setProcessedImage(imageWithingBackgroundURL); // Guarda el URL en el estado para mostrarlo        
        //enviar al server
        setFile(imageWithingBackgroundURL); // Guardar el archivo si lo necesitas
        setError('');
      } catch (error) {
        console.error('Error al convertir la imagen:', error);
          setError(error ? error : 'Error al procesar la imagen, intenelo mas tarde');
      }finally{
        setLoader(false)
      }
      
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <>
      <Container>
        <Title>Eliminar el fondo al instante</Title>
          <Subtitle>
          Elimina fácilmente el fondo de tus imágenes, en cuestión de segundos y de forma gratuita.
          </Subtitle>
          <UploadCard {...getRootProps()} isDragActive={isDragActive}>
        {
          !loader ? (
            <>
              
          
            <input {...getInputProps()} />
            <UploadButton onClick={(e) => e.stopPropagation()}>
              Subir imagen
            </UploadButton>
            <DropText>{isDragActive ? 'o suelte aqui su imagen' : 'Seleccione un archivo'}</DropText>
            <URLText>
              Puedes quitarle el fondo a cualquier <span>IMAGEN</span>
            </URLText>
            {/* Mostrar error si existe */}
            {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
            {/*Aca si quiero mostrar el archivo*/}
            
            {/*{file && (<p style={{marginTop: '10px' }}>File uploaded: {file.name}</p>)}*/}          
            {modal && (
                <Register toggleModal={onModal} />
            )}
            </>
          ) : <>
          <PuffLoader size={80} />
          </>
        }
        
        </UploadCard>
        {/* Esto se borra */}
        {processedImage && (
        <div style={{ marginTop: '20px' }}>
          <p>Imagen procesada:</p>
          <img src={processedImage} alt="Resultado procesado" style={{ maxWidth: '100%', maxHeight: '300px' }} />
        </div>
        )}
      </Container>
      <ScrollSteps/>
    </>
  )
}


