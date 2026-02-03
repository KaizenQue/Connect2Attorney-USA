import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <div className="w-full bg-white text-black  px-6 md:px-16 lg:px-28 py-16">
        {/* Page Title */}
        <h1 className="text-3xl font-noto-serif md:text-5xl font-bold mb-4">Privacy Policy</h1>

        <p className="text-[14px] mb-10">
          Last updated: 03 February 2026
        </p>

        {/* Intro */}
        <p className="leading-relaxed mb-6">
          The Privacy Policy outlined below discloses the specific ways in which{" "}
          <a href="https://www.connect2attorney.com"> Connect2Attorney.com </a>
          functions, how you should use it or can use it, how we collect user
          information and how that information is handled and protected. Your
          privacy is important to Connect2Attorney.com, and we’re committed to
          making sure it is protected. We use your information only in the ways
          described below.
        </p>

        <p className="leading-relaxed mb-12">
          By using this website you consent to this Policy, including your
          consent to our use and disclosure of information about you in the
          manner described in this Policy
        </p>

        {/* Section */}
       <h2 className="text-2xl font-noto-serif font-semibold mb-4">
          Information Collection and Use
        </h2>

        <p className="leading-relaxed mb-6">
          <strong>Connect2Attorney.com </strong> receives but does not track, a
          variety of “personally identifiable information,” including your email
          address, IP address, and message content. When we need to collect
          personally identifiable information from you to execute a requested
          transaction or provide you with a particular service, we will ask you
          to voluntarily supply us with the information we need
        </p>

        <p className="leading-relaxed mb-6">
          We may ask you for information such as, but not limited to: your name,
          address, telephone number, and email address to process your
          submission. You have the option of also providing information
          regarding your name, demographics (such as your state and country of
          residency), operating system, browser, Internet service provider
          (“ISP”), connection type and email program that you are using
        </p>

        <p className="leading-relaxed mb-6">
          <strong>Connect2Attorney.com </strong> also automatically receives and
          records information on our server logs from your browser, including
          your IP Address and the page you requested. Your IP address is not
          linked to your email address or <strong>Connect2Attorney.com </strong>
        </p>

        <p className="leading-relaxed mb-4">
          We do not collect your email address unless you actively provide it.
          IP addresses are collected every time you access a webpage and are
          used for:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-10">
          <li>
            Diagnosing service or technology problems associated with your IP
          </li>
          <li>Estimating total users from specific locales</li>
          <li>Communicating about issues or inquiries</li>
          <li>
            Contacting you regarding <strong>Connect2Attorney.com</strong>{" "}
            services or future opportunities
          </li>
        </ul>

       <h2 className="text-2xl font-noto-serif font-semibold mb-4">Log Files</h2>
        <p className="leading-relaxed mb-10">
          Each time a webpage is accessed, the request is logged with timestamp
          and IP address. These are used for debugging purposes only and are not
          linked to personal identifiers
        </p>

       <h2 className="text-2xl font-noto-serif font-semibold mb-4">Cookies</h2>
        <p className="leading-relaxed mb-6">
          Cookies are small data files that store basic information like session
          IDs or previously-entered details. Cookies may be used optionally by
          you, for instance, to recall your email address. Cookies cannot read
          data from your hard drive or transmit viruses.
        </p>

        <p className="leading-relaxed mb-10">
          <strong>Connect2Attorney.com</strong> uses Google Analytics to
          evaluate site performance. No personal information is captured through
          Google Analytics
        </p>

        {/* Cookie Choices */}
       <h2 className="text-2xl font-noto-serif font-semibold mb-4">Choices About Cookies</h2>
        <p className="leading-relaxed mb-10">
          You may configure your browser to accept, reject, or notify when a
          cookie is set. Rejecting all cookies will not prevent you from using
          the website
        </p>

        {/* Data Storage */}
       <h2 className="text-2xl font-noto-serif font-semibold mb-4">
          Data Storage / User Information
        </h2>
        <p className="leading-relaxed mb-10">
          We store all data on redundant disk systems. No offline backups are
          made. If deletion is requested, your data will be removed from our
          registration system within 30 days.
          <strong>Connect2Attorney.com </strong> is not responsible for misuse
          of data by third parties
        </p>

        {/* Sharing */}
       <h2 className="text-2xl font-noto-serif font-semibold mb-4">
          Information Sharing and Disclosure
        </h2>
        <p className="leading-relaxed mb-10">
          We do not sell or rent your personal data, including your email, name,
          or address, except as specified in our legal disclaimer or with your
          permission
        </p>

        {/* Legal Disclaimer */}
       <h2 className="text-2xl font-noto-serif font-semibold mb-4">Legal Disclaimer</h2>
        <p className="leading-relaxed mb-4">
          We may disclose your information:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-10">
          <li>As required by law, subpoena, or regulation</li>
          <li>To enforce our terms of use</li>
          <li>To protect rights or safety</li>
          <li>To consumer protection or fraud monitoring agencies</li>
        </ul>

        <p className="leading-relaxed mb-4">
          We may share or sell submitted data to third-party service providers
          under legal contracts. Consent will be requested wherever applicable
        </p>

       <h2 className="text-2xl font-noto-serif font-semibold mb-4">
          Transfer of Ownership and Sales of Assets
        </h2>
        <p className="leading-relaxed mb-10">
          If we undergo a business merger, acquisition, or sale, your data may
          be part of the transferred assets. We will notify you of such events
          and any new data practices
        </p>

       <h2 className="text-2xl font-noto-serif font-semibold mb-4">Spam & Spyware</h2>
        <p className="leading-relaxed mb-10">
          We do not tolerate spam or spyware. If you believe you’ve received
          such content due to
          <strong>Connect2Attorney.com</strong>, contact us at{" "}
          <strong>info@connect2attorney.com</strong>
        </p>

       <h2 className="text-2xl font-noto-serif font-semibold mb-4">
          Protecting Children’s Privacy Online
        </h2>
        <p className="leading-relaxed mb-4">
          We do not knowingly collect data from children under 13. If you
          believe this has occurred, email
          <strong>info@connect2attorney.com </strong>or call{" "}
          <strong>(888) 202-1350</strong>
        </p>

        
       <p className="leading-relaxed mb-4">
          If you are aged 13–18, read this policy with your parent/guardian and
          obtain their permission before submitting data or using site features
        </p>

        <h2 className="text-2xl font-noto-serif font-semibold mb-4">Contacting You</h2>

        <p className="leading-relaxed mb-4">
          By submitting information, you authorize us and our affiliates to
          contact you by phone, email, or mail for legal or related services
          (including future services not limited to drug or device cases)
        </p>

        <h2 className="text-2xl font-noto-serif font-semibold mb-4">Removing Your Information</h2>

       <p className="leading-relaxed mb-4">
          We will retain your data as long as necessary to provide service,
          unless you request removal. If your personal info changes, or you wish
          to stop communications, email us and we will process your request
          within 30 days
        </p>

        <h2 className="text-2xl font-noto-serif font-semibold mb-4">Testimonials</h2>

        <p className="leading-relaxed mb-4">
          We will obtain your consent before posting any testimonial publicly.
          You may request its removal at any time. Note that public testimonials
          are visible to all and may be used by third parties.
        </p>
        
       <h2 className="text-2xl font-noto-serif font-semibold mb-4">
          Contacting Connect2Attorney
        </h2>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            <strong>Email: </strong>info@connect2attorney.com
          </li>
          <li>
            <strong>Phone:</strong> (888) 202-1350
          </li>
        </ul>

        <p className="leading-relaxed mb-4">
          Note: Emails sent are not encrypted.
        </p>

        <h2 className="text-2xl font-noto-serif font-semibold mb-4">Notice to California Residents</h2>
<p className="leading-relaxed mb-4">
          To request a list of third parties to whom data was disclosed for
          direct marketing in the past year, email us with the subject:
        </p>

        <p>
          <strong>“California Shine the Light Privacy Request”</strong>
        </p>
        <p className="leading-relaxed mb-4">Include your full contact information in the request.</p>

        <h2 className="text-2xl font-noto-serif font-semibold mb-4">Notice to Vermont Residents</h2>

        <p className="leading-relaxed mb-4">
          We will not disclose your personal data for marketing purposes without
          your consent. You may opt out by emailing info@connect2attorney.com
        </p>

        <h2 className="text-2xl font-noto-serif font-semibold mb-4">Changes to Privacy Policy</h2>

        <p className="leading-relaxed mb-4">
          We may modify this policy from time to time. Changes will be posted
          here. Your continued use of the site implies acceptance. If you do not
          agree with updated terms, discontinue using the site
        </p>

        <h2 className="text-2xl font-noto-serif font-semibold mb-4">SMS Terms and Conditions</h2>

        <p className="leading-relaxed mb-4">You may receive:</p>

         <ul className="list-disc pl-6 space-y-2 mb-10">
          <li>Case updates</li>
          <li>Appointment reminders</li>
          <li>Legal intake confirmations</li>
          <li>Attorney introductions</li>
          <li> Service notifications</li>
          <li>Document requests</li>

          <li>Eligibility updates</li>
          <li>Deadline alerts</li>
          <li>Promotions</li>
        </ul>

        <p className="leading-relaxed mb-4">
          You may opt out at any time by replying STOP. A confirmation message
          will follow. To rejoin, opt in again through any signup form
        </p>

        <p className="leading-relaxed mb-4">
          For help, reply HELP or email info@connect2attorney.com. Message
          frequency varies. Standard message/data rates apply. Carriers are not
          liable for delayed or undelivered messages
        </p>

        <h2 className="text-2xl font-noto-serif font-semibold mb-4">SMS Opt-Out</h2>

        <p className="leading-relaxed mb-4">
          To stop receiving SMS, reply STOP to any message. You will no longer
          receive texts from us.
        </p>
        <p className="mt-16 text-sm text-gray-500">
          PLEASE PRINT AND RETAIN A COPY OF THIS PRIVACY POLICY FOR YOUR
          RECORDS.
        </p>
      </div>
      <ContactCard />
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
