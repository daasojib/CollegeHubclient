import teacher from '../../assets/dr-terrence-underwood-Io0eEAfSMjY-unsplash.jpg'
import './Featured.css'


const Featured = () => {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold my-10 text-pink-600">
        Featured Teacher
          </h2>
          <div className='featured-item font-bold text-white bg-fixed bg-slate-400 bg-blend-color-burn md:flex justify-center items-center bg- p-5'>
              <div>
                  <img className='md:p-20' src={teacher} alt="" />
              </div>
              <div className='md:ml-50 my-10'>
                  <h2 className='font-bold'>Name: Armstrong, J. Scott</h2>
                  <p>College: Imperial College</p>
                  <p>This professor is internationally known for his pioneering work on forecasting methods. He is author of Long-Range Forecasting, the most frequently cited book on forecasting methods, and Principles of Forecasting, voted the “Favorite Book — First 25 Years” by researchers and practitioners associated with the International Institute of Forecasters. Recently, Armstrong challenged the former vice president to a 10-year bet, in which $10,000 from the two would be set aside in escrow as Gore pits his forecast of how much global temperature will increase during that time against a so-called “naive model,” in which temperature would be expected to stay the same.</p>
             </div>
          </div>
    </div>
  );
};

export default Featured;
