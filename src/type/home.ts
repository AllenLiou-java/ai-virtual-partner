export interface IntroductDataType {
  idxNo: string;
  title: string;
  description: string;
  imgUrl: string;
}


export interface PostListType {
  id: number,
  name: string,
  address: string,
  comment:string,
  product?: string,
  textColor: string,
  textColorClass: string,
  bgColorClass: string
}

export interface PersonalityType {
  index: number,
  name: string,
  type: string,
  typeDescription: string,
  bgClass: string
}

export interface ProductContentType {
  name: string,
  type: string,
  typeGroup: string,
  description: Array<string>,
  postList: Array<PostListType>
}

export interface NewsItemType {
  idxNo: string,
  duration: string,
  title: string,
  overview: string,
  detailContent?: string
  imageName: string,
  imageNameMobile?: string
}

export interface FaqItemType {
  question: string,
    answer: string
}