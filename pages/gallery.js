
// import Image from 'next/image'
// import { search, mapImagesResources } from '../src/lib/cloudinary'
// import { useState } from 'react'
import Head from 'next/head'
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';


const Gallery = ({ images: defaultImages, nextCursor: defaultNextCursor }) => {

  const router = useRouter();

  // const [images, setImages] = useState(defaultImages);
  // const [nextCursor, setNextCursor] = useState(defaultNextCursor);

  // async function handleLoadMore(event) {
  //   event.preventDefault();

  //   const results = await fetch('/api/search', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       nextCursor
  //     })
  //   }).then(r => r.json());

  //   const { resources, next_cursor: updatedNextCursor } = results;

  //   const images = mapImagesResources(resources);

  //   setImages(prev => {
  //     return [
  //       ...prev,
  //       ...images
  //     ]
  //   });

  //   setNextCursor(updatedNextCursor);
  // }


  return (
    <>
      <Head>
        <title>Gallery - Inkara Indonesia</title>
        <meta name='description' content='Inkara Indonesia adalah perusahaan jasa Event Organizer (EO) terpercaya dan berpengalaman di Bandung. ' />
        <meta name='keywords' content=' perusahaan EO, about inkara, in.id, Inkara Indonesia, event organizer (EO), EO bandung, inkara.id, tourism, event planner, event management, event fest, event festival, product event ' />
        <meta property='og:title' content='Gallery Inkara' />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <div className='tourism'>
          <div className="box-error">
            <h1>SORRY</h1><hr />
            <h3>Page Maintenance</h3>
            <Button className='btn-warning btn-lg text-white' onClick={() => router.push('/')}>Back to Home</Button>
          </div>
        </div>
      <div className="container">
        
        {/* <div className="image-gallery">
          <div className="gallery-title">
            <h3>Images <span>Gallery</span></h3>
            <p><strong>docs by : Inkara Indonesia 2021 - 2022</strong></p><hr />
          </div>
          <ul className='image-content'>
            {images.map(image => {
              return (
              <li key={image.id}>
                <a href={image.url} rel="noreferrer">
                  <div className="imageImage">
                    <Image priority={true} width={image.width} height={image.height} src={image.image} alt={image.title}/>
                  </div>
                </a>
              </li>
              )
            })}
          </ul>
          <center className="center-button">
            <button onClick={handleLoadMore} className='button'>Load More Images</button>
          </center>
        </div> */}
      </div>
    </>
  )
}

export default Gallery




// export async function getStaticProps() {

//   const results = await search();


//   const { resources, next_cursor: nextCursor } = results;

//   const images = mapImagesResources(resources);

//   return {
//     props: {
//       images,
//       nextCursor
//     }

//   }
// }