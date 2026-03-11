// Email configuration
export const EMAIL_CONFIG = {
  // For testing: use "RBF Fund <onboarding@resend.dev>"
  // For production: use your verified domain (e.g., "RBF Fund <noreply@rbf-fund.org>")
  from: process.env.EMAIL_FROM || "RBF Fund <onboarding@resend.dev>",
  to: process.env.EMAIL_TO || "admin@theregentoniansbenevolentfund.org",
  replyTo: process.env.EMAIL_REPLY_TO || process.env.EMAIL_TO,
};

// Resend API configuration
export const RESEND_API_KEY = process.env.RESEND_API_KEY;

if (!RESEND_API_KEY && process.env.NODE_ENV === "production") {
  console.warn("⚠️  RESEND_API_KEY not defined. Email notifications will not work.");
}

