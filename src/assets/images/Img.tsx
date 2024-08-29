// imageData.js
import Indonesia from './indonesia.png';
import KepalaSekolah from './kepala_sekolah.png';
import Sekolah from './smk2.png';
import exam1 from './exam1.jpeg';
import exam2 from './exam2.jpeg';
import exam3 from './exam3.jpeg';
import exam4 from './exam4.jpeg';

const images = {

  exam1,
  exam2,
  exam3,
  exam4
};
interface props{
  name?: string;
  alt?: string;
}

export function Img({ name, alt }
  :props
) {
  // Jika props `name` tidak diberikan, tampilkan semua gambar
  if (!name) {
    return (
      <>
        {Object.keys(images).map((key) => (
          <img key={key} className='w-full h-full' src={images[key]} alt={key} />
        ))}
      </>
    );
  }

  // Jika props `name` diberikan, tampilkan gambar yang spesifik
  const selectedImage = images[name];

  return (
    <>
      {selectedImage ? (
        <img src={selectedImage} alt={alt || name} />
      ) : (
        <p>Image not found</p>
      )}
    </>
  );
}
