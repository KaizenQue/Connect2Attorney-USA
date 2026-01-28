import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_ioxlemt';
const PUBLIC_KEY = 'DyDZ85E9uwzwSyUoD';
export const ADMIN_TEMPLATE_ID = "template_cw0k096";
export const USER_TEMPLATE_ID = "template_iiks8gi";

emailjs.init(PUBLIC_KEY);

export const sendWithEmailJS = async (apiBody: any) => {
  const d = apiBody.data;
  const currentYear = new Date().getFullYear();
  

  const adminParams = {
    full_name: d.name,
    email: d.email,
    phone: d.phone,
    zip: d.zip || "N/A",
    case_type: d.caseType || "N/A",
    description: d.description || "N/A",
    ip_address: d.ipAddress,
    source_url: apiBody.sourceUrl,
    submission_date: d.submissionDate,
    trusted_form_cert_url: d.trustedFormCertUrl,
    trusted_form_ping_url: d.trustedFormPingUrl,
    trusted_form_token: d.trustedFormToken,
    country: apiBody.countryName,
    brand: apiBody.brandName,
    website: apiBody.websiteName,
    form_name: apiBody.formname,
    year: currentYear,
  };

  // 1️ADMIN EMAIL — ALWAYS TRY
  await emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, adminParams);

  //  USER EMAIL — SAFE + OPTIONAL
  const userParams = {
    full_name: d.name,
    email: d.email,
    phone: d.phone,
    zip: d.zip || "N/A",
    case_type: d.caseType || "N/A",
    description: d.description || "N/A",
    submission_date: d.submissionDate,
    year: currentYear,
  };

  if (isValidEmail(d.email)) {
    try {
      await emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, userParams);
    } catch (err) {
      console.warn("User confirmation email failed (non-blocking)", err);
    }
  } else {
    console.warn("Invalid user email, skipping confirmation:", d.email);
  }
};

const isValidEmail = (email?: string) =>
  !!email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);



