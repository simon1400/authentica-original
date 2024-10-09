import ChapterItem from "components/ChapterItem";
import Numbers from "components/Numbers";
import { FC } from "react"

interface IChapters {
  data: any
}

const Chapters: FC<IChapters> = ({
  data
}) => {

  const strCE = "ComponentElement"
  
  // @ts-ignore
  return data.map((item, index) => {
    
    if(item.__typename === strCE+"Images") {
      return <ChapterItem key={index} images={item.images.data} />
    }else if(item.__typename === strCE+"Text") {
      return <ChapterItem key={index} content={item.content} />
    }else if(item.__typename === strCE+"Head") {
      return <ChapterItem key={index} head={item.title} />
    }else if(item.__typename === strCE+"Button") {
      return <ChapterItem 
                key={index} 
                buttonVariant={item.type === 'velke' ? "contained" : undefined} 
                button={{
                text: item.title,
                link: item.link
              }} />
    }else if(item.__typename === strCE+"Numbers") {
      return <Numbers key={index} data={item.number} />
    }else if(item.__typename === strCE+"Reference") {      
      return <ChapterItem key={index} smallReference={true} items={item.references.data} />
    }else if(item.__typename === strCE+"Video") {      
      return <ChapterItem key={index} videoUrl={item.videoUrl} />
    }
    return null
  })
  
}

export default Chapters