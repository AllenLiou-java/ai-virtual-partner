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

export interface personalityType {
  index: number,
  name: string,
  type: string,
  typeDescription: string,
  bgClass: string
}

export interface productContentType {
  name: string,
  type: string,
  typeGroup: string,
  description: Array<string>,
  postList: Array<PostListType>
}