import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";

const DisclaimerPage = () => {
  return (
    <div>

         <div className="w-full text-[18px] bg-white text-black font-noto-serif px-6 md:px-16 lg:px-28 py-16">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 font-noto-serif">
        Disclaimer
      </h2>
      <p className="font-bold font-urbanist">Last Updated: 3 February 2026</p>
      <br />
      <p className="font-urbanist">
        The information provided on{" "}
        <a href="https://connect2attorney.com" className="underline text-blue-800 font-bold">www.connect2attorney.com</a> is
        intended for general informational purposes only and does not constitute
        legal advice or a substitute for professional legal consultation.
      </p>
      <br />
      <p className="font-urbanist">
        By using this website, you acknowledge and agree to the following:
      </p>
      <br />

      <ol>
        <li className="font-urbanist">
          <strong>No Attorney-Client Relationship:</strong> Submitting your
          information through this site does <strong>not </strong> 
          create an attorney-client relationship with{" "}
          <strong>Connect2Attorney</strong> or any law firm unless and until a
          formal written agreement is signed.
        </li>
        <br />

        <li className="font-urbanist">
          <strong>Legal Matching Service:</strong> Connect2Attorney is a
          marketing platform that connects potential claimants with legal
          professionals or law firms who handle relevant legal matters. We do{" "}
          <strong>not</strong> 
          provide legal representation or advice ourselves.
        </li>
        <br />
        <li className="font-urbanist">
          <strong>Attorney Representation Not Guaranteed:</strong> We cannot
          guarantee that your case will be accepted by a law firm or that you
          are entitled to compensation. Each case is unique and evaluated on its
          own facts. Submission of your information does not guarantee a
          response, legal representation, or compensation
        </li>
        <br />
        <li className="font-urbanist">
          <strong>Jurisdiction Limitations:</strong> Legal outcomes vary by
          jurisdiction. Some services and legal actions described on this site
          may not be available in all states or jurisdictions.
        </li>
        <br />
        <li className="font-urbanist">
          <strong> No Endorsement:</strong> The listing of any attorney or law
          firm on this site does not constitute an endorsement or recommendation
          by Connect2Attorney
        </li>
        <br />
        <li className="font-urbanist">
          <strong>Advertising Disclosure:</strong> This website is a{" "}
          <strong>paid advertisement.</strong> It is{" "}
          <strong>not a law firm,</strong> and its content is{" "}
          <strong>not legal advice.</strong> This is a{" "}
          <strong>free service</strong> to connect users with law firms that may
          handle their case. Participating law firms pay to be included in our
          network.
        </li>
        <br />
        <li className="font-urbanist">
          <strong>Medical Disclaimer:</strong> Content related to drugs, medical
          devices, or health conditions is informational only and not intended
          as a substitute for medical advice, diagnosis, or treatment from a
          healthcare provider
        </li>
        <br />
        <li className="font-urbanist">
          <strong> No Guarantee of Results:</strong> Past results do not predict
          or guarantee future outcomes. Every legal matter is unique.
        </li>
        <br />

        <li className="font-urbanist">
          <strong> Privacy and Communication:</strong> By submitting your
          information, you authorize Connect2Attorney and its partners to
          contact you via phone, email, or SMS (message/data rates may apply).
          See our <a href="/privacy-policy" className="underline text-blue-800 font-bold">Privacy Policy</a> for more details
        </li>
      </ol>
    </div>

<ContactCard />
      <Footer />
    </div>
   
  );
};

export default DisclaimerPage;
