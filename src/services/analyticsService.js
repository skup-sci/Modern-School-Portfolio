// Analytics service for tracking user interactions
import { analytics, trackEvent } from '../firebase.js';

/**
 * Track page view event
 * @param {string} pageName - The name of the page
 * @param {string} pageLocation - The URL of the page
 */
export const trackPageView = (pageName, pageLocation = window.location.pathname) => {
  trackEvent('page_view', {
    page_title: pageName,
    page_location: pageLocation
  });
};

/**
 * Track user login event
 * @param {string} method - The login method used (e.g., 'email', 'google')
 */
export const trackLogin = (method = 'email') => {
  trackEvent('login', { method });
};

/**
 * Track search event
 * @param {string} searchTerm - The search term used
 */
export const trackSearch = (searchTerm) => {
  trackEvent('search', { search_term: searchTerm });
};

/**
 * Track notice view event
 * @param {string} noticeId - The ID of the notice
 * @param {string} noticeTitle - The title of the notice
 */
export const trackNoticeView = (noticeId, noticeTitle) => {
  trackEvent('notice_view', {
    notice_id: noticeId,
    notice_title: noticeTitle
  });
};

/**
 * Track gallery image view event
 * @param {string} imageId - The ID of the image
 * @param {string} category - The category of the image
 */
export const trackGalleryImageView = (imageId, category) => {
  trackEvent('gallery_view', {
    image_id: imageId,
    category
  });
};

/**
 * Track download event
 * @param {string} contentType - The type of content downloaded
 * @param {string} itemId - The ID of the downloaded item
 */
export const trackDownload = (contentType, itemId) => {
  trackEvent('download', {
    content_type: contentType,
    item_id: itemId
  });
};

/**
 * Track form submission event
 * @param {string} formName - The name of the form
 */
export const trackFormSubmit = (formName) => {
  trackEvent('form_submit', { form_name: formName });
};

/**
 * Track outbound link click
 * @param {string} linkUrl - The URL of the link
 * @param {string} linkText - The text of the link
 */
export const trackOutboundLink = (linkUrl, linkText) => {
  trackEvent('outbound_link', {
    link_url: linkUrl,
    link_text: linkText
  });
};

/**
 * Track language change event
 * @param {string} language - The new language selected
 */
export const trackLanguageChange = (language) => {
  trackEvent('language_change', { language });
};

export default {
  trackPageView,
  trackLogin,
  trackSearch,
  trackNoticeView,
  trackGalleryImageView,
  trackDownload,
  trackFormSubmit,
  trackOutboundLink,
  trackLanguageChange
};
