interface IAttributesImage {
  url: string
  alternativeText: string
}

interface IDataImage {
  attributes: IAttributesImage
  data: any
}

export interface IImage {
  data: IDataImage
  attributes: IAttributesImage
}