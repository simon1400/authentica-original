import { FC } from "react";
import {IImage} from '../../interfaces/image'

const APP_API = process.env.APP_API

interface ImageProps {
  image?: IImage
  svg?: boolean
  url?: string
  format?: string
  alt?: string
}

const Image: FC<ImageProps> = ({ 
  image = undefined, 
  url = '/assets/placeholder.svg', 
  svg = false,
  format = '',
  alt = ''
}) => {

  let altText = '', caption = ''
  
  if(image){
    url = APP_API+image.attributes.url
    altText = image.attributes.alternativeText || ''
  }

  if(url.indexOf('.mp4') > 0) {
    return <video src={url} autoPlay loop muted />
  }
  
  if(svg) return <img src={url} alt={altText} />
  else return <img src={url+'?format=webp'+format} alt={altText} />
};

export default Image;
