"use client";
import React, { useState } from 'react';

// --- Types ---
interface SectionLink {
  id: string;
  label: string;
}

// --- Data Constants ---
const tocLinks: SectionLink[] = [
  { id: 'intro', label: 'What Is An Ozempic Lawsuit?' },
  { id: 'allegations', label: 'What Are The Allegations?' },
  { id: 'health-risks', label: 'What Are The Health Risks?' },
  { id: 'who-qualifies', label: 'Who Qualifies for a Lawsuit?' },
  { id: 'compensation', label: 'What Compensation Can You Seek?' },
  { id: 'real-stories', label: 'Real Stories Behind Lawsuit' },
  { id: 'how-to-file', label: 'How To File an Ozempic Lawsuit?' },
];

const riskData = [
  { id: '01', title: 'Severe Gastrointestinal Issues', desc: 'Reports indicate that Ozempic users have suffered from gastroparesis, a condition where the stomach muscles stop working properly, leading to chronic nausea, vomiting, and bloating.' },
  { id: '02', title: 'Uncontrollable Vomiting', desc: 'Lawsuits have highlighted cases where individuals experienced excessive and repeated vomiting, leading to emergency medical treatment.' },
  { id: '03', title: 'Gallbladder Diseases', desc: 'Medical studies have linked Ozempic to an increased risk of gallbladder problems. This includes gallstones and inflammation, requiring surgery in some users.' },
  { id: '04', title: 'Pancreatitis', desc: 'The inflammation of the pancreas causes severe abdominal pain and, in some cases, requires hospitalization and surgery.' },
  { id: '05', title: 'Intestinal Blockage', desc: 'Paralysis or inflammation can cause food to build up in the intestines. This may lead to surgery or bowel removal.' },
];

const stepsData = [
  { step: 1, title: 'Submit a Free Case Review', desc: 'Share details about your situation so we can understand your claim.' },
  { step: 2, title: 'Confirm Eligibility', desc: 'Our legal team will review your case and let you know if you qualify.' },
  { step: 3, title: 'Sign Agreement', desc: 'If eligible, sign a legal agreement. Your attorney will handle all legal formalities.' },
];

const OzempicLawsuitPage: React.FC = () => {
  const [isTocOpen, setIsTocOpen] = useState(true);

  // Smooth scroll handler
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#333] font-sans selection:bg-[#f0c441] selection:text-[#1b264f]">
      <div className="max-w-[1200px] mx-auto p-5 flex flex-col lg:flex-row gap-10 relative">
        
        {/* --- Main Content Column --- */}
        <main className="flex-1">
          
          <h1 id="intro" className="font-serif text-3xl lg:text-4xl text-[#1b264f] mb-4 leading-tight">
            What Is An Ozempic Lawsuit?
          </h1>
          <p className="mb-4 text-base leading-relaxed">
            <strong>Ozempic (semaglutide)</strong> is a medication drug approved for Type 2 Diabetes but increasingly used for weight loss. It belongs to a class of medications called GLP-1 Receptor Agonists, which affect insulin levels and digestion.
          </p>
          <p className="mb-4 text-base leading-relaxed">
            Users have reported severe gastrointestinal issues and other side effects that were not properly disclosed. As of 2023, Novo Nordisk faces multiple lawsuits claiming they failed to warn consumers about these risks. If you or a loved one has experienced serious side effects after using Ozempic, Wegovy, or Mounjaro, you may be eligible for compensation.
          </p>
          <p className="mb-8 text-base leading-relaxed">
            More than 2,000 Multidistrict Litigation (MDL) lawsuits have been filed against the manufacturers of Ozempic, including Novo Nordisk and Eli Lilly.
          </p>

          {/* CTA Banner */}
          <div 
            id="form-scroll-target"
            className="bg-[#1b264f] text-white p-8 rounded-lg mb-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-lg"
          >
            {/* Background Image Overlay */}
            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Supreme_Court_of_the_United_States_%28First_Street_facade%29.jpg/640px-Supreme_Court_of_the_United_States_%28First_Street_facade%29.jpg')] bg-cover bg-center opacity-20 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1b264f] to-[#1b264f]/90 pointer-events-none"></div>
            
            <div className="relative z-10 text-center md:text-left">
              <h3 className="font-serif text-2xl font-bold mb-1">Start Your Free Case Review Today</h3>
              <p className="text-gray-300">Connect with top Ozempic attorneys now.</p>
            </div>
            <button className="relative z-10 bg-[#f0c441] hover:bg-[#d4ac39] text-[#1b264f] font-bold py-3 px-6 rounded uppercase text-sm tracking-wide transition-colors duration-300">
              Get A Free Case Review
            </button>
          </div>

          <h2 id="allegations" className="font-serif text-2xl md:text-3xl text-[#1b264f] mb-4 mt-10 pt-4 border-t border-gray-100">
            What Are The Allegations Against Ozempic?
          </h2>
          <p className="mb-4">
            Patients allege that Novo Nordisk failed to warn them about Gastroparesis, a condition that delays stomach emptying. They also claim the company downplayed serious side effects in its marketing.
          </p>
          <p className="font-bold mb-2 text-[#1b264f]">Allegations Against The Manufacturers Include:</p>
          <ul className="list-none mb-8 space-y-3">
            {[
              "Failure to warn of gastroparesis: Patients weren't told about the risk of severe stomach paralysis.",
              "Misleading marketing: Ads downplayed serious side effects.",
              "Omitting label box warnings: Potential vision risks were not included.",
              "Ignoring safety signals: Internal data reports were allegedly dismissed."
            ].map((item, idx) => (
              <li key={idx} className="relative pl-6">
                <span className="absolute left-0 top-0 text-[#1b264f] font-bold text-lg">•</span>
                <span dangerouslySetInnerHTML={{ 
                  __html: item.replace(":", ":</strong>").replace(/^/, "<strong>") 
                }} />
              </li>
            ))}
          </ul>

          <h2 id="health-risks" className="font-serif text-2xl md:text-3xl text-[#1b264f] mb-6">
            What Are The Health Risks Of Ozempic?
          </h2>
          <p className="mb-6">Affected individuals argue that the manufacturers failed to disclose the potential risks associated with prolonged use.</p>
          
          <div className="space-y-4">
            {riskData.map((risk) => (
              <div key={risk.id} className="group bg-[#f5f7fa] p-5 rounded-md border-l-4 border-transparent hover:border-[#1b264f] transition-all duration-300 hover:shadow-sm">
                <div className="text-[#2c4a85] font-serif font-bold text-lg mb-2">
                  {risk.id} - {risk.title}
                </div>
                <p className="text-sm md:text-base m-0 text-gray-700">{risk.desc}</p>
              </div>
            ))}
          </div>

          {/* Blue Qualification Box */}
          <div id="who-qualifies" className="bg-[#1b264f] text-white p-8 md:p-10 rounded-lg my-12 shadow-md">
            <h2 className="font-serif text-2xl md:text-3xl text-[#f0c441] mb-4 mt-0">
              Who Qualifies <span className="text-white">For An Ozempic Lawsuit?</span>
            </h2>
            <p className="text-gray-200 mb-6">
              Many users of Ozempic or similar drugs have developed severe digestive issues like gastroparesis after using them for weight loss or diabetes.
            </p>
            <p className="font-bold mb-4 text-[#f0c441]">You may be eligible to file a claim if:</p>
            <ul className="space-y-3">
              {[
                "You used Ozempic, Wegovy, Mounjaro, Rybelsus, Saxenda, Trulicity, or Zepbound.",
                "You were diagnosed with gastroparesis, intestinal blockage, or experienced chronic vomiting.",
                "Your symptoms began during or shortly after taking the medication.",
                "You are within your state's statute of limitations for filing a lawsuit."
              ].map((item, idx) => (
                <li key={idx} className="relative pl-6 text-gray-200">
                  <span className="absolute left-0 top-[-2px] text-[#f0c441] font-bold text-lg">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="compensation" className="font-serif text-2xl md:text-3xl text-[#1b264f] mb-4">
            What Compensation Can You Seek?
          </h2>
          <p className="mb-6">
            Patients harmed by Ozempic are pursuing compensation for the physical, emotional, and financial toll caused by undisclosed side effects.
          </p>
          
          <div className="bg-[#f5f7fa] p-6 rounded-md mb-8">
            <ul className="space-y-4">
              {[
                { title: "Medical Expenses", desc: "Reimbursement for hospital visits, medications, and surgeries." },
                { title: "Lost Wages", desc: "Compensation for time missed from work due to severe side effects." },
                { title: "Pain and Suffering", desc: "Financial awards for physical pain, emotional distress, and diminished quality of life." },
                { title: "Punitive Damages", desc: "Additional damages if the manufacturer knowingly withheld risks." }
              ].map((item, idx) => (
                <li key={idx} className="relative pl-6">
                  <span className="absolute left-0 top-[-5px] text-[#1b264f] font-bold text-lg">•</span>
                  <strong>{item.title}:</strong> {item.desc}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="real-stories" className="font-serif text-2xl md:text-3xl text-[#1b264f] mb-4">
            Real Stories Behind Lawsuit
          </h2>
          <ul className="mb-10 space-y-4">
            <li className="relative pl-6">
              <span className="absolute left-0 top-[-5px] text-[#1b264f] font-bold text-lg">•</span>
              <strong>Todd Engel:</strong> Prescribed Ozempic in 2022. Within four months, diagnosed with NAION leading to irreversible vision loss.
            </li>
            <li className="relative pl-6">
              <span className="absolute left-0 top-[-5px] text-[#1b264f] font-bold text-lg">•</span>
              <strong>Paulsen Bomanor:</strong> Experienced severe side effects including persistent diarrhea, requiring gallbladder removal.
            </li>
            <li className="relative pl-6">
              <span className="absolute left-0 top-[-5px] text-[#1b264f] font-bold text-lg">•</span>
              <strong>Monica Church:</strong> Developed symptoms like pain, vomiting, and gastroparesis shortly after starting the medication.
            </li>
          </ul>

          <h2 id="how-to-file" className="font-serif text-2xl md:text-3xl text-[#1b264f] mb-4">
            How To File An Ozempic Lawsuit?
          </h2>
          <p className="mb-6">Connect2Attorney guides you through the process in three simple steps.</p>
          
          <div className="flex flex-wrap gap-5">
            {stepsData.map((step) => (
              <div key={step.step} className="bg-[#f5f7fa] p-5 rounded-lg flex-1 min-w-[200px]">
                <div className="w-10 h-10 bg-[#1b264f] text-white flex items-center justify-center rounded font-bold mb-3 shadow-md">
                  {step.step}
                </div>
                <span className="block text-[#2c4a85] font-bold mb-2">{step.title}</span>
                <p className="text-sm text-gray-600 m-0">{step.desc}</p>
              </div>
            ))}
          </div>

        </main>

        {/* --- Sidebar Column --- */}
        <aside className="w-full lg:w-[320px] order-last lg:order-none shrink-0">
          <div className="sticky top-5 flex flex-col gap-6">
            
            {/* Ad Widget */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="h-[150px] bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Supreme_Court_of_the_United_States_%28First_Street_facade%29.jpg/640px-Supreme_Court_of_the_United_States_%28First_Street_facade%29.jpg')] bg-cover bg-center"></div>
              <div className="bg-[#1b264f] p-6 text-center text-white">
                <h3 className="font-serif text-xl mb-2">Were You Harmed?</h3>
                <p className="text-sm text-gray-300 mb-4">You may be entitled to compensation.</p>
                <button className="w-full bg-[#f0c441] hover:bg-[#d4ac39] text-[#1b264f] font-bold py-3 rounded uppercase text-sm transition-colors">
                  Get a Free Case Review
                </button>
              </div>
            </div>

            {/* Table of Contents Widget */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg bg-white">
              <div 
                className="bg-[#f5f7fa] p-4 flex justify-between items-center cursor-pointer border-b border-gray-200 hover:bg-gray-100 transition-colors"
                onClick={() => setIsTocOpen(!isTocOpen)}
              >
                <span className="font-bold text-[#1b264f]">Table of Contents</span>
                <span className={`text-sm text-gray-500 transform transition-transform duration-300 ${isTocOpen ? 'rotate-0' : '-rotate-90'}`}>
                  {isTocOpen ? '▼' : '✖'}
                </span>
              </div>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isTocOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="py-2">
                  {tocLinks.map((link) => (
                    <li key={link.id}>
                      <a 
                        href={`#${link.id}`}
                        onClick={(e) => handleScrollTo(e, link.id)}
                        className="block px-4 py-3 text-sm text-[#1b264f] border-b border-gray-100 last:border-0 hover:bg-[#f0f4f8] hover:text-[#2c4a85] hover:pl-6 transition-all duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </aside>

      </div>
    </div>
  );
};

export default OzempicLawsuitPage;