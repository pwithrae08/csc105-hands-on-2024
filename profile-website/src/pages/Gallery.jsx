import chaveepfp from '../image/chaveepfp.jpg';
import araya from '../image/araya.jpg';
import Cholly from '../image/cholly.jpg';
import YingMAE from '../image/YingMAE.jpg';
import YingYa from '../image/YingYa.jpg';
import Dedii from '../image/Dedii.jpg';

function Gallery() {
  return (
    <section id="gallery" className="min-h-screen flex flex-col items-center text-center p-6">
      <h2 className="text-4xl font-bold mb-6">Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <img src={chaveepfp} alt="Art 1" className="w-50 h-50 rounded-lg shadow-xl object-cover mx-auto" />
        <img src={araya} alt="Art 2" className="w-50 h-50 rounded-lg shadow-xl object-cover mx-auto" />
        <img src={Cholly} alt="Art 3" className="w-50 h-50 rounded-lg shadow-xl object-cover mx-auto" />
        <img src={YingMAE} alt="Art 4" className="w-50 h-50 rounded-lg shadow-xl object-cover mx-auto" />
        <img src={YingYa} alt="Art 5" className="w-50 h-50 rounded-lg shadow-xl object-cover mx-auto" />
        <img src={Dedii} alt="Art 6" className="w-50 h-50 rounded-lg shadow-xl object-cover mx-auto" />
      </div>
    </section>
  );
}

export default Gallery;
