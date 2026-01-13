import emailjs from '@emailjs/browser';

// const SERVICE_ID = 'service_brjo5qt';
const PUBLIC_KEY = 'DyDZ85E9uwzwSyUoD';
// const MVA_ADMIN_TEMPLATE_ID = 'template_ntoss9t';
// const MVA_TEMPLATE_ID = 'template_711p6jv';
// const MESO_ADMIN_TEMPLATE_ID = 'template_d2052kb';
// const MESO_TEMPLATE_ID = 'template_0sdfyxb';


const sanitize = (value) => {
  if (typeof value === 'string') {
    return value.trim() === '' ? 'N/A' : value;
  }
  if (value === undefined || value === null) {
    return 'N/A';
  }
  return value;
};

emailjs.init(PUBLIC_KEY);

let initialLandingUrl = null;

const getSourceUrl = () => {
  if (typeof window === "undefined") return "Unknown";
 
  // If we haven't stored the initial URL yet, store it
  if (!initialLandingUrl) {
    initialLandingUrl = window.location.href;
  }
 
  return initialLandingUrl;
};

const getIPAddress = async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("Failed to get IP address:", error);
    return "IP address not available";
  }
};

const getTimestamp = () => {
  return new Date().toLocaleString('en-AU', {
    timeZone: 'Australia/Sydney',  
    year: 'numeric',              
    month: '2-digit',              
    day: '2-digit',                
    hour: '2-digit',             
    minute: '2-digit',            
    second: '2-digit'              
  });
};

console.log(getTimestamp());

// ADMIN EMAIL (Full details to lawyer)
// ADMIN EMAIL (Full details to lawyer)
export const sendFormAdminMVA = async (payload) => {
  try {
    const ipAddress = await getIPAddress();
    const sourceUrl = getSourceUrl();
    const timestamp = getTimestamp();

    const fullName = `${sanitize(payload.firstName)} ${sanitize(payload.lastName)}`.trim();

    // ✅ Convert Q&A to plain text
    const questionsText = Object.values(payload.questionsAndAnswers)
      .map((item, index) => {
        return `Q${index + 1}: ${item.question}\nA: ${item.answer}`;
      })
      .join("\n\n"); // blank line between each pair

    const templateParams = {
      full_name: fullName,
      email: sanitize(payload.email),
      phone: sanitize(payload.phone),
      submission_date: timestamp,

      // ✅ Just send plain string into email template
      questions: questionsText,

      ip_address: ipAddress,
      page_source: sourceUrl,

      trusted_form_cert_url: payload.certId,
      trusted_form_ping_url: payload.pingUrl,
      trusted_form_token: payload.tokenUrl,
    };

    return await emailjs.send(
      SERVICE_ID,
      MVA_ADMIN_TEMPLATE_ID,
      templateParams
    );

  } catch (error) {
    throw error;
  }
};


export const sendFormUserMVA = async (payload) => {
  try {
    const timestamp = getTimestamp();
    const currentYear = new Date().getFullYear();

    const fullName = `${sanitize(payload.firstName)} ${sanitize(payload.lastName)}`.trim();
 const questionsText = Object.values(payload.questionsAndAnswers)
      .map((item, index) => {
        return `Q${index + 1}: ${item.question}\nA: ${item.answer}`;
      })
      .join("\n\n"); // blank line between each pair
    const templateParams = {
      full_name: fullName,
      email: sanitize(payload.email),
      phone: sanitize(payload.phone),
      submission_date: timestamp,
      questions: questionsText,
      year: currentYear,
    };

    return await emailjs.send(
      SERVICE_ID,
      MVA_TEMPLATE_ID,
      templateParams
    );
  } catch (error) {
    throw error;
  }
};


export const sendFormAdminMeso = async (payload) => {
  try {
    const ipAddress = await getIPAddress();
    const sourceUrl = getSourceUrl();
    const timestamp = getTimestamp();

    const fullName = `${sanitize(payload.firstName)} ${sanitize(payload.lastName)}`.trim();

    // ✅ Convert Q&A to plain text
    const questionsText = Object.values(payload.questionsAndAnswers)
      .map((item, index) => {
        return `Q${index + 1}: ${item.question}\nA: ${item.answer}`;
      })
      .join("\n\n"); // blank line between each pair

    const templateParams = {
      full_name: fullName,
      email: sanitize(payload.email),
      phone: sanitize(payload.phone),
      submission_date: timestamp,

      // ✅ Just send plain string into email template
      questions: questionsText,

      ip_address: ipAddress,
      page_source: sourceUrl,

      trusted_form_cert_url: payload.certId,
      trusted_form_ping_url: payload.pingUrl,
      trusted_form_token: payload.tokenUrl,
    };

    return await emailjs.send(
      SERVICE_ID,
      MESO_ADMIN_TEMPLATE_ID,
      templateParams
    );

  } catch (error) {
    throw error;
  }
};

export const sendFormUserMeso = async (payload) => {
  try {
    const timestamp = getTimestamp();
    const currentYear = new Date().getFullYear();

    const fullName = `${sanitize(payload.firstName)} ${sanitize(payload.lastName)}`.trim();
 const questionsText = Object.values(payload.questionsAndAnswers)
      .map((item, index) => {
        return `Q${index + 1}: ${item.question}\nA: ${item.answer}`;
      })
      .join("\n\n"); // blank line between each pair
    const templateParams = {
      full_name: fullName,
      email: sanitize(payload.email),
      phone: sanitize(payload.phone),
      concern: sanitize(payload.concern || "Not Specified"),
      submission_date: timestamp,
        questions: questionsText,

      year: currentYear,
    };

    return await emailjs.send(
      SERVICE_ID,
      MESO_TEMPLATE_ID,
      templateParams
    );
  } catch (error) {
    throw error;
  }
};
