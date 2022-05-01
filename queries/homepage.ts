import qs from 'qs'

export const homepageQuery = qs.stringify({
  populate: [
    "video",
    "titles",
    "references",
    "refCta",
    "partners",
    "footerLink",
    "cta",
  ],
  fields: [
    'content', 
    "contentReference",
    "label",
    "titlePartners"
  ],
  publicationState: 'live',
}, {
  encodeValuesOnly: true, // prettify url
});