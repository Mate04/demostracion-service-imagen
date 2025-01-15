import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import DogWithBg from '../../../public/dogExample.jpg'
import DogWithingBg from '../../../public/dogExampleWithingBg.png'
export default function Example() {
  return (
    <ReactCompareSlider
    disabled={true}
    position={30}
    itemOne={
        <ReactCompareSliderImage
        src={DogWithBg}
        />
    }
    itemTwo={
        <ReactCompareSliderImage
        src={DogWithingBg}
        style={{
            backgroundImage: `
                  linear-gradient(45deg, #ccc 25%, white 25%),
                  linear-gradient(-45deg, #ccc 25%, white 25%),
                  linear-gradient(45deg, white 75%, #ccc 75%),
                  linear-gradient(-45deg, white 75%, #ccc 75%)
                `,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }}
        />
    }
    />
  )
}
