import React from "react"
import ImageGallery from "react-image-gallery"
import { useStaticQuery, graphql } from "gatsby"

import galleryStyle from "../../styles/gallery.module.css"

const GalleryFull = () => {
  const data = useStaticQuery(graphql`
    query GalleryItems {
      allGalleryJson {
        nodes {
          original
          thumbnail
        }
      }
    }
  `)

  return (
    <div className={galleryStyle.galleryWrapper}>
      <ImageGallery
        className={galleryStyle.imageGallery}
        items={data.allGalleryJson.nodes}
      />
    </div>
  )
}

export default GalleryFull
