import { FaPhoneAlt } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';
import { IoCopy } from "react-icons/io5";

const ContactInfo = () => {
  return (
    <div>
      {/* Title */}
      <div className="flex items-center gap-4">
        <p className="font-semibold text-[#003865] uppercase tracking-wider">
          QUICK CONTACT
        </p>
        <div className="flex flex-col justify-center gap-[7px]">
            <div className="w-10 h-[2px] bg-[#003865]"></div>
            <div className="w-16 h-[2px] bg-[#E02454]"></div>
        </div>
      </div>
      <h2 className="text-3xl lg:text-4xl font-bold text-[#003865] mt-4 leading-tight ">
        Have Questions? <br /> Don&apos;t Hesitate to Contact Us
      </h2>
      <p className="mt-4 text-[16px] text-[#7A8A9E]">
        We&apos;re here to help with any inquiries about visas, immigration services, or travel support. Reach out today — our team is ready to assist you.
      </p>

      {/* Info Blocks */}
      <div className="mt-8 space-y-6">
        {/* Location */}
        <div className="flex items-start gap-4 border-b-[1.5px] border-gray-200 pb-3">
          <div className="bg-slate-100 p-4 rounded-lg">
            <FaMapLocationDot className="lg:text-6xl text-4xl text-[#002b4e]" />
          </div>
          <div>
            <h3 className="font-bold text-[#003865] text-xl" >Location</h3>
            <p className="text-[16px] text-[#7A8A9E]">123, First Floor, 123 St Roots Terrace, Los Angeles 90010 Unitd States of America.</p>
          </div>
        </div>

       <div className='flex flex-wrap lg:flex-nowrap lg:gap-1 gap-8'>
            {/* Quick Contact */}
            <div className="flex items-start gap-4">
                <div className="p-4 rounded-lg">
                    <FaPhoneAlt className="text-3xl lg:text-5xl text-[#003865]" />
                </div>
                <div>
                    <h3 className="font-bold text-[#003865] text-xl">Quick Contact</h3>
                    <p className="text-[#003865] text-sm font-semibol lg:text-[17px]">Phone: <br /> +012 3456 7890</p>
                    <p className="text-[#003865] text-sm font-mdium lg:text-[17px]">Email: Smoothflight Travels@example.com</p>
                </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start gap-4">
            <div className="p-4 rounded-lg">
                <IoCopy className="text-3xl lg:text-5xl text-[#003865]" />
            </div>
            <div>
                <h3 className="font-bold text-[#003865] text-xl">Opening Hrs</h3>
                <p className="text-[#003865] font-mdium text-sm lg:text-[16px]">Mon - Friday: 09.00 am to 07.00 pm</p>
                <p className="text-[#003865] text-sm font-mdium lg:text-[16px]">Satday: 10.00 am to 05.00 pm</p>
            </div>
            </div>
       </div>
      </div>
    </div>
  );
};

export default ContactInfo;