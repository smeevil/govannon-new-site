import React, {FC} from 'react'

export interface IFeaturedImageProps {
  src: string
}

export const FeaturedImage: FC<IFeaturedImageProps> = ({src}): JSX.Element => (
  <div className="featuredImage">
    <img alt="background image" src={src}/>
  </div>
)