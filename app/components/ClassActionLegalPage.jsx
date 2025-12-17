import React from 'react';

const ClassActionLegalPage = () => {
  return (
    <div className="min-h-screen bg-white text-[#4a4a4a] font-sans selection:bg-blue-100">

      <div className="max-w-6xl mx-auto px-4 py-12 md:px-8">
        
        {/* ==================== SECTION 1: MASS TORT ==================== */}
        
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Left Content Column */}
          <div className="flex-1">
            <h1
              className="font-noto-serif font-normal capitalize text-[#2d3663] mb-6"
              style={{
                fontSize: 'clamp(32px, 7vw, 60px)',
                lineHeight: 'clamp(40px, 8vw, 70px)',
                letterSpacing: '0px',
              }}
            >
              What Is A Mass Tort?
            </h1>
            <p
              className="font-urbanist font-normal mb-10"
              style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '0px' }}
            >
              Mass torts cases are civil lawsuits filed by victims against a single company or companies for causing similar harm. These lawsuits often arise when defective medical products, harmful medications, or corporate negligence affect thousands of people in similar ways.
            </p>

            <h2
              className="font-noto-serif font-normal capitalize text-[#2d3663] mb-4"
              style={{ fontSize: 'clamp(24px, 5vw, 40px)', lineHeight: 'clamp(32px, 6vw, 52px)', letterSpacing: '0px' }}
            >
              How Do You Qualify For A Mass Tort Lawsuit?
            </h2>
            <p
              className="font-urbanist font-normal mb-4"
              style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '0px' }}
            >
              Mass tort lawsuits bring together victims harmed by the same product or action. To qualify, you need to meet specific criteria related to your injury and the case.
            </p>
            <p
              className="font-urbanist font-semibold text-[#2d3663] mb-4"
              style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '0px' }}
            >
              Here's what we look for:
            </p>
            
            <ol
              className="list-decimal list-outside ml-5 space-y-3 mb-8 marker:text-[#2d3663] marker:font-bold font-urbanist font-normal"
              style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '0px' }}
            >
              <li className="pl-2">
                <span className="text-[#2d3663] font-semibold" style={{ fontWeight: 600 }}>Harmed by Defective Product or Misconduct:</span> You experienced injury from a dangerous drug, faulty product, or corporate wrongdoing.
              </li>
              <li className="pl-2">
                <span className="text-[#2d3663] font-semibold" style={{ fontWeight: 600 }}>Harmed by Defective Product or Misconduct:</span> You experienced injury from a dangerous drug, faulty product, or corporate wrongdoing.
              </li>
              <li className="pl-2">
                <span className="text-[#2d3663] font-semibold" style={{ fontWeight: 600 }}>Direct Link to Injury:</span> Your harm must be caused by the product or action in question.
              </li>
              <li className="pl-2">
                <span className="text-[#2d3663] font-semibold" style={{ fontWeight: 600 }}>Others Affected Similarly:</span> There are multiple individuals with claims like yours.
              </li>
            </ol>
          </div>

          {/* Right Sidebar - CTA Card */}
          <div className="w-full lg:w-[350px] flex-shrink-0">
            <div className="bg-[#1a237e] rounded-lg overflow-hidden shadow-xl sticky top-8">
              {/* Placeholder for Courthouse Image */}
              <div className="h-48 overflow-hidden bg-gray-300">
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Courthouse" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center text-white">
                <h3
                  className="font-noto-serif font-normal capitalize mb-3"
                  style={{ fontSize: '24px', lineHeight: '32px', letterSpacing: '0px' }}
                >
                  Ready to Get Started?
                </h3>
                <p
                  className="font-urbanist font-normal text-gray-200 mb-6 leading-relaxed"
                  style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '0px' }}
                >
                  Don't wait to seek the justice you deserve. Contact us today to schedule your free case evaluation.
                </p>
                <button
                  className="w-full bg-[#fccb48] hover:bg-[#eebb20] text-[#1a237e] font-urbanist font-semibold py-3 px-4 rounded uppercase tracking-wide transition-colors duration-200"
                  style={{ fontSize: '18px', lineHeight: '100%', letterSpacing: '0%', fontWeight: 600 }}
                >
                  Get a Free Case Review
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mass Tort Compensation Section */}
        <div className="mb-16">
          <h2
            className="font-noto-serif font-normal capitalize text-[#2d3663] mb-4"
            style={{ fontSize: 'clamp(24px, 5vw, 40px)', lineHeight: 'clamp(32px, 6vw, 52px)', letterSpacing: '0px' }}
          >
            What Compensation Can You Seek?
          </h2>
          <p
            className="font-urbanist font-normal mb-4"
            style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '0px' }}
          >
            Compensation typically covers medical costs and lost income. In some cases, it can also include punitive damages to hold the parties accountable.
          </p>
          <p
            className="font-urbanist font-semibold text-[#2d3663] mb-4"
            style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '0px' }}
          >
            Your compensation may include:
          </p>
          
          <ul
            className="custom-bullet font-urbanist font-normal"
            style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '0px' }}
          >
            <li>
              <strong className="text-[#2d3663]" style={{ fontWeight: 600 }}>Medical Expenses:</strong> Covers hospital stays, treatments, and procedures.
            </li>
            <li>
              <strong className="text-[#2d3663]" style={{ fontWeight: 600 }}>Lost Income:</strong> Compensates for wages lost and reduced ability to earn in the future.
            </li>
            <li>
              <strong className="text-[#2d3663]" style={{ fontWeight: 600 }}>Pain and Suffering:</strong> Pays for physical and emotional distress, and lower quality of life.
            </li>
            <li>
              <strong className="text-[#2d3663]" style={{ fontWeight: 600 }}>Long-Term Disability:</strong> Pays for ongoing care and support for lasting impairments.
            </li>
            <li>
              <strong className="text-[#2d3663]" style={{ fontWeight: 600 }}>Punitive Damages:</strong> Additional penalties for corporate negligence.
            </li>
          </ul>
        </div>

        {/* Connect2Attorney Steps Section 1 */}
        <div className="mb-24">
          <h2
            className="font-noto-serif font-normal capitalize text-[#2d3663] mb-4"
            style={{ fontSize: 'clamp(24px, 5vw, 40px)', lineHeight: 'clamp(32px, 6vw, 52px)', letterSpacing: '0px' }}
          >
            How Can Connect2Attorney Help You File A Mass Tort Lawsuit?
          </h2>
          <p
            className="font-urbanist font-normal mb-8"
            style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '0px' }}
          >
            Connect2Attorney guides you through the process of filing a mass tort claim against the responsible party, in just three simple steps:
          </p>
          <StepsComponent />
        </div>


        {/* ==================== SECTION 2: CLASS ACTION ==================== */}
        
        
      </div>
    </div>
  );
};

/* Reusable Steps Component */
const StepsComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Step 1 */}
          <div className="bg-[#f4f6f8] rounded-xl p-5 flex flex-row items-start gap-4">
        <div className="bg-[#1a237e] text-white w-10 h-10 flex-shrink-0 rounded flex flex-col items-center justify-center leading-none">
          <span className="text-[0.6rem] font-bold uppercase mt-1">Step</span>
          <span className="text-lg font-bold">1</span>
        </div>
        <div>
          <h4
            className="font-urbanist font-semibold text-[#1a237e] mb-1"
            style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '0px', fontWeight: 600 }}
          >
            Submit a Free Case Review
          </h4>
          <p
            className="font-urbanist font-normal text-gray-600 leading-relaxed"
            style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '0px' }}
          >
            Share details about your situation so we can understand your claim.
          </p>
        </div>
      </div>

      {/* Step 2 */}
          <div className="bg-[#f4f6f8] rounded-xl p-5 flex flex-row items-start gap-4">
        <div className="bg-[#1a237e] text-white w-10 h-10 flex-shrink-0 rounded flex flex-col items-center justify-center leading-none">
          <span className="text-[0.6rem] font-bold uppercase mt-1">Step</span>
          <span className="text-lg font-bold">2</span>
        </div>
        <div>
          <h4
            className="font-urbanist font-semibold text-[#1a237e] mb-1"
            style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '0px', fontWeight: 600 }}
          >
            Confirm Eligibility
          </h4>
          <p
            className="font-urbanist font-normal text-gray-600 leading-relaxed"
            style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '0px' }}
          >
            Our legal team will review your case and let you know if you qualify.
          </p>
        </div>
      </div>

      {/* Step 3 */}
          <div className="bg-[#f4f6f8] rounded-xl p-5 flex flex-row items-start gap-4">
        <div className="bg-[#1a237e] text-white w-10 h-10 flex-shrink-0 rounded flex flex-col items-center justify-center leading-none">
          <span className="text-[0.6rem] font-bold uppercase mt-1">Step</span>
          <span className="text-lg font-bold">3</span>
        </div>
        <div>
          <h4
            className="font-urbanist font-semibold text-[#1a237e] mb-1"
            style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '0px', fontWeight: 600 }}
          >
            Sign Agreement
          </h4>
          <p
            className="font-urbanist font-normal text-gray-600 leading-relaxed"
            style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '0px' }}
          >
            If eligible, sign a legal agreement. Your attorney will handle all legal formalities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClassActionLegalPage;