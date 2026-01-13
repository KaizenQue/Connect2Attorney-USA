import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_brjo5qt';
const PUBLIC_KEY = 'DyDZ85E9uwzwSyUoD';
const LAWYER_ADMIN_TEMPLATE_ID = 'template_wp73bg8';
const LAWYER_TEMPLATE_ID = 'template_lkcnb11';

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



// Comprehensive admin email with all tracking data
export const sendFormAdmin = async (formData) => {
  try {
    const ipAddress = await getIPAddress();
    const sourceUrl = getSourceUrl();
    const timestamp = getTimestamp();

    const templateParams = {
      // Main contact details - matching admin template variables
      full_name: sanitize(formData.name),
      email: sanitize(formData.email),
      phone: sanitize(formData.phone),
      concern: sanitize(formData.category),
      state: sanitize(formData.state),
      case_details: sanitize(formData.caseHistory),
      
      // Tracking and verification data
      submission_date: timestamp,
      ip_address: ipAddress,
      page_source: sourceUrl,
      
      // TrustedForm certification data
      trusted_form_cert_url: sanitize(formData.certId),
      trusted_form_ping_url: sanitize(formData.pingUrl),
      trusted_form_token: sanitize(formData.tokenUrl)
    };

    const response = await emailjs.send(SERVICE_ID, LAWYER_ADMIN_TEMPLATE_ID, templateParams);
    return response;
  } catch (error) {
    throw error;
  }
};

// Minimal user confirmation email
export const sendFormUser = async (formData) => {
  try {
    const timestamp = getTimestamp();
    const currentYear = new Date().getFullYear();

    const templateParams = {
      // Basic user information - matching user template variables
      full_name: sanitize(formData.name),
      email: sanitize(formData.email),
      phone: sanitize(formData.phone),
      concern: sanitize(formData.category),
      submission_date: timestamp,
      state: sanitize(formData.state),
      case_details: sanitize(formData.caseHistory),
      year: currentYear
    };

    const response = await emailjs.send(SERVICE_ID, LAWYER_TEMPLATE_ID, templateParams);
    return response;
  } catch (error) {
    throw error;
  }
};