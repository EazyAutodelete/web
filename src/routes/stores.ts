import { writable } from "svelte/store";

// a store i can dynamically write schema org infos to
// export const schemaOrg = writable<any>(
//   {
//     "@context": "https://schema.org",
//     "@type": "Service",
//     "name": "EazyAutodelete",
//     "description": "Kurze Beschreibung des Produkts",
//     "image": "https://dev.eazyautodelete.xyz/logo.png",
//     "provider": {
//       "@type": "Organization",
//       "name": "EazyAutodelete",
//       "url": "https://dev.eazyautodelete.xyz",
//       "logo": {
//         "@type": "ImageObject",
//         "url": "https://dev.eazyautodelete.xyz/logo.png"
//       }
//     },
//     "feature": [
//       {
//         "@type": "PropertyValue",
//         "name": "Feature 1",
//         "value": "Beschreibung des ersten Features"
//       },
//       {
//         "@type": "PropertyValue",
//         "name": "Feature 2",
//         "value": "Beschreibung des zweiten Features"
//       },
//       {
//         "@type": "PropertyValue",
//         "name": "Feature 3",
//         "value": "Beschreibung des dritten Features"
//       },
//       {
//         "@type": "PropertyValue",
//         "name": "Feature 4",
//         "value": "Beschreibung des vierten Features"
//       },
//       {
//         "@type": "PropertyValue",
//         "name": "Feature 5",
//         "value": "Beschreibung des fünften Features"
//       },
//       {
//         "@type": "PropertyValue",
//         "name": "Feature 6",
//         "value": "Beschreibung des sechsten Features"
//       },
//       {
//         "@type": "PropertyValue",
//         "name": "Feature 7",
//         "value": "Beschreibung des siebten Features"
//       },
//       {
//         "@type": "PropertyValue",
//         "name": "Feature 8",
//         "value": "Beschreibung des achten Features"
//       },
//       {
//         "@type": "PropertyValue",
//         "name": "Feature 9",
//         "value": "Beschreibung des neunten Features"
//       }
//     ],
//     "offers": {
//       "@type": "Offer",
//       "url": "https://example.com/produkt",
//       "priceCurrency": "EUR",
//       "price": "29.99",
//       "availability": "https://schema.org/InStock",
//       "itemCondition": "https://schema.org/NewCondition"
//     }
//   }
// );
