import amazon from '../assets/images/Recruiters/amazon.png'
import apple from '../assets/images/Recruiters/apple.png'
import bcg from '../assets/images/Recruiters/bcg.png'
import cisco from '../assets/images/Recruiters/cisco.png'
import mastercard from '../assets/images/Recruiters/mastercard.png'
import pandg from '../assets/images/Recruiters/p&g.png'
export default function Recruiters() {
    return (
        
      <div className="bg-white py-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-lg font-semibold leading-8 heading ">
          Our Recruiters
          </h2>
          <div className="flex flex-wrap justify-center sm:flex-nowrap">
            <img
              className="max-h-12  object-contain "
              src={bcg}
              alt="bcg"
              width={158}
              height={48}
            />
            <img
              className=" max-h-12  object-contain "
              src={mastercard}
              alt="mastercard"
              width={158}
              height={48}
            />
            <img
              className=" max-h-12  object-contain "
              src={apple}
              alt="apple"
              width={158}
              height={48}
            />
            <img
              className=" max-h-12  object-contain  "
              src={amazon}
              alt="amazon"
              width={158}
              height={48}
            />
            <img
              className="  max-h-12  object-contain "
              src={bcg}
              alt="bcg"
              width={158}
              height={48}
            />
             <img
              className="  max-h-12  object-contain "
              src={mastercard}
              alt="mastercard"
              width={158}
              height={48}
            />
             <img
              className="  max-h-12  object-contain "
              src={cisco}
              alt="cisco"
              width={158}
              height={48}
            />
             <img
              className="  max-h-12  object-contain "
              src={pandg}
              alt="p and g"
              width={158}
              height={48}
            />
             <img
              className="  max-h-12  object-contain "
              src={bcg}
              alt="bcg"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    )
  }
  