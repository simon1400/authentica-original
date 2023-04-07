import { useMediaQuery } from "@mui/material"
import Chapters from "components/Chapters"
import PageHeadInside from "components/PageHeadInside"
import ReferenceItem from "components/ReferenceItem"
import SectionSlider from "components/Slider"
import { IFooter } from "interfaces/footer"
import { IImage } from "interfaces/image"
import { IMeta } from "interfaces/meta"
import Page from "layout/Page"
import { NextPage } from "next"
import {checkColor} from '../utility/checkColor'

interface IReferenceFull {
  Background: string;
  categories: any;
  chapters: [];
  content: string;
  footer: IFooter;
  image: IImage;
  label: string;
  materials: any;
  meta: IMeta;
  references: any;
  slug: string;
  technologies: any;
  title: string;
}

const ReferenceFull: NextPage<{data: IReferenceFull}> = ({
  data
}) => {
  const mediaXs = useMediaQuery("(max-width: 960px)")
  const references = data.references.data.map((item: any) => item.attributes)
  
  return(
    <Page
      title={data.meta?.title}
      description={data.meta?.description}
    >
      <PageHeadInside
        label={data.label}
        title={data.title}
        background={data.Background}
        image={data.image.data.attributes.url}
        content={data.content}
        invert={checkColor(data.Background)}
        tags={{
          categories: data.categories.data,
          materials: data.materials.data,
          technologies: data.technologies.data
        }}
      />

      <Chapters data={data.chapters} />
      
      <>
        {!!references.length && <SectionSlider count={references.length}>
          {references.map((item: any, index: number) => <div style={{width: mediaXs ? '100vw' : "30vw", height: "800px"}} key={index}>
            <ReferenceItem data={item} />
          </div>)}
        </SectionSlider>}
      </>    
    </Page>
  )
}

export default ReferenceFull