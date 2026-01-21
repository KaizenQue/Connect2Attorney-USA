import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_ioxlemt';
const PUBLIC_KEY = 'DyDZ85E9uwzwSyUoD';
export const ADMIN_TEMPLATE_ID = "template_cw0k096";
export const USER_TEMPLATE_ID = "template_iiks8gi";


emailjs.init(PUBLIC_KEY);
export const sendWithEmailJS = async (apiBody: any) => {
  const data = apiBody.data;
  const currentYear = new Date().getFullYear();

  // ============================
  // ADMIN EMAIL (FULL DATA)
  // ============================
  const adminParams = {
    full_name: data.name,
    email: data.email,
    phone: data.phone,
    zip: data.zip,
    case_type: data.caseType,
    description: data.description,

    ip_address: data.ipAddress,
    source_url: apiBody.sourceUrl,
    submission_date: data.submissionDate,

    trusted_form_cert_url: data.trustedFormCertUrl,
    trusted_form_ping_url: data.trustedFormPingUrl,
    trusted_form_token: data.trustedFormToken,

    country: apiBody.countryName,
    brand: apiBody.brandName,
    website: apiBody.websiteName,
    form_name: apiBody.formname,
        year: currentYear,

  };

  // ============================
  // USER EMAIL (ONLY USER DATA)
  // ============================
  const userParams = {
    full_name: data.name,
    email: data.email,
    phone: data.phone,
    zip: data.zip,
    case_type: data.caseType,
    description: data.description,
    submission_date: data.submissionDate,
        year: currentYear,

  };

  // ============================
  // SEND BOTH
  // ============================
  await Promise.all([
    emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, adminParams),
    emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, userParams),
  ]);
};


