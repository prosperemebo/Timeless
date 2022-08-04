import classes from './Gallery.module.scss';

const Gallery = ({ album }) => {
  return (
    <section className={classes.Gallery}>
      <h1 className='heading-primary'>Gallery</h1>
      <div className={classes.gallery}>
        {album.map((item, index) => (
          <div key={index} className={classes.galleryItem}>
            <img src={item} alt={`Album ${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
