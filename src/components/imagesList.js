import React from "react"

const ImageList = props => {
  console.log(props.images)

  const images = props.images.map((image) => {
    return <img id={image.urls.id} src={image.urls.regular}  alt={image.urls.id} style={{
      "width": "50%", "height" : "auto", "display" : "block", "margin" : "auto"
    }}/>
  })

  return <div>{images}</div>
}
export default ImageList