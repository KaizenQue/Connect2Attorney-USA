import React from 'react';

const ContactCardsSection = () => {
  const contactData = [
    {
      id: 1,
      title: "Give us a Call",
      subtitle: "(888) 202-1350",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-current text-[#f3c442]">
          <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Drop us an Email",
      subtitle: "connect2attorney.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-current text-[#f3c442]">
          <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Live Chat Support",
      subtitle: "Hi There!",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-current text-[#f3c442]">
          <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 44.7 480c-6.1 1.7-12-2.2-12-8.5c0-.1 0-.2 0-.3c0 0 0-3.5 0-9.2c0-21.9 8.3-43.9 15.2-58.1C16.3 373.4 0 326.8 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208zM144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32s-14.3-32-32-32zm144-32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32s-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32s-14.3-32-32-32z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="bg-[#FFFFFF] flex justify-center items-center py-16 md:py-20 lg:py-24 px-5 md:px-8 font-sans">
      <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-5 w-full max-w-[1200px] justify-center">
        {contactData.map((item) => (
          <ContactCard 
            key={item.id} 
            title={item.title} 
            subtitle={item.subtitle} 
            icon={item.icon} 
          />
        ))}
      </div>
    </div>
  );
};

// Reusable Card Component
const ContactCard = ({ title, subtitle, icon }: { title: string; subtitle: string; icon: React.ReactNode }) => {
  return (
    <div className="bg-white rounded-xl p-6 flex items-center gap-5 shadow-[0_8px_24px_rgba(149,157,165,0.1)] flex-1 min-w-[300px] max-w-full md:max-w-[400px] hover:-translate-y-0.5 transition-transform duration-200 cursor-default">
      {/* Icon Box */}
      <div className="w-[55px] h-[55px] min-w-[55px] rounded-xl border border-[#f3c442] flex justify-center items-center bg-white">
        {icon}
      </div>
      
      {/* Text Content */}
      <div className="flex flex-col justify-center">
        <h3
          className="font-noto-serif font-normal text-[#1f306e] mb-1"
          style={{
            fontSize: '20px',
            lineHeight: '28px',
            letterSpacing: '0px',
          }}
        >
          {title}
        </h3>
        <p
          className="text-gray-500 font-urbanist font-normal"
          style={{
            fontSize: '18px',
            lineHeight: '24px',
            letterSpacing: '0px',
          }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default ContactCardsSection;


