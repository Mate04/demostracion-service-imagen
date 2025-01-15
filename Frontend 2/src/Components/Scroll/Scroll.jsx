import {
    Container,
    Hero,
    Title,
    StepsContainer,
    StepCard,
    Feature,
    FeatureContent,
    FeatureImage,
    InstantResults,
} from './ScrollStyle'
import DogWithBg from '../../../public/dogExample.jpg';
import DogWithingBg from '../../../public/dogExampleWithingBg.png';
import Example from './Example'
import Chiguagua from '../../../public/Chiguagua.png'
import Instance from '../../../public/Instance.png'
import Colo from '../../../public/Colorada.png'
export default function Scroll() {
  return (
    <Container>
      <Hero>
        <Title>
          Dile adios a tu fondo en <span>tres simple pasos</span>
        </Title>
      </Hero>

      <StepsContainer>
        <StepCard>
          <img 
            src={DogWithBg}
            alt="Step 1" 
          />
          <h3>Paso uno</h3>
          <p>Elige tu imagen</p>
          <span>Seleccione la imagen de la que desea eliminar el fondo. Los formatos admitidos son JPG, PNG y WEBP.</span>
        </StepCard>

        <StepCard>
          <Example/>
          <h3>Paso dos</h3>
          <p>Elimina el fondo</p>
          <span>Observa cómo la IA hace su magia. Recuerda que siempre puedes editar la imagen o cambiar el fondo.</span>
        </StepCard>

        <StepCard>
          <img 
            src={DogWithingBg} 
            alt="Step 3" 
          />
          <h3>Paso tres</h3>
          <p>Descargar</p>
          <span>Una vez que obtengas el resultado deseado, sólo tienes que descargar la imagen y ¡listo!</span>
        </StepCard>
      </StepsContainer>

      <Feature>
        <FeatureImage>
          <img 
            src={Chiguagua} 
            alt="Transform your photos" 
          />
        </FeatureImage>
        <FeatureContent>
          <h2>Transforma tus fotos con fondos transparentes</h2>
          <p>
          Esta herramienta gratuita de eliminación de fondo te 
          permite resaltar el sujeto principal de tu imagen y 
          crear un fondo limpio, listo para ser utilizado en varios diseños y 
          contextos. 
          Puede colocar su imagen sobre un fondo de color sólido o integrarla en un nuevo entorno para obtener un ambiente completamente diferente
          </p>
        </FeatureContent>
      </Feature>

      <InstantResults>
        <FeatureContent>
          <h2>Elimina el fondo de tus fotos y obtén resultados instantáneos</h2>
          <p>
          Es más fácil que nunca eliminar el fondo de una imagen. 
          Solo tienes que seleccionar tu foto, subirla a nuestra herramienta gratuita y, 
          en tan solo unos segundos, estará lista para descargarla y usarla como quieras. 
          Ya sea para mejorar sus redes sociales, crear un diseño personalizado o cualquier otro propósito, 
          Remove Background simplifica el proceso.
          </p>
        </FeatureContent>
        <FeatureImage>
          <img 
            src={Instance} 
            alt="Instant results" 
          />
        </FeatureImage>
      </InstantResults>
      <InstantResults>
        <FeatureImage>
          <img 
            src={Colo} 
            alt="Instant results" 
          />
        </FeatureImage>
        <FeatureContent>
          <h2>Resalta tus imágenes con Eliminar fondo</h2>
          <p>
          Convierte tus fotos en obras maestras visuales con Eliminar fondo. 
          Nuestra plataforma ofrece herramientas innovadoras para que cada imagen tenga el impacto que deseas, ya sea para redes sociales, 
          proyectos personales o presentaciones profesionales. Juega con ajustes creativos, personaliza tus imágenes y haz que se destaquen como piezas únicas que llamen la atención 
          y transmitan tu mensaje de manera efectiva
          </p>
        </FeatureContent>
      </InstantResults>
    </Container>
  )
}
