// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/", key: "aboutus", label: "About us" },
  { href: "/", key: "collectioncentre", label: "Collection centre" },
  { href: "/", key: "diagnosticservices ", label: "Diagnostic Services" },
  { href: "/", key: "career", label: "Career" },
  { href: "/", key: "contactus", label: "Contact us" },
];

// HomePage

export const container_images = [
  "/con1.png",
  "/con2.png",
  "/con3.png",
  "/con4.png",

];
export const images = [
  {
    desktop: "/Banner1.png",
    mobile: "/MobileBanner1.png",
  },
  {
    desktop: "/bg2.png",
    mobile: "/MobileBanner1.png",
  },

];
export const imageData = {
  imageUrl: "Frame.png"
};

export const textData = {
  title: "FREE",
  description: ["home sample", "collection"],
};

export const formData = {
  fields: [
    { label: "Name" },
    { label: "Phone number", type: "tel" },
    { label: "Package/test", type: "select", options: ["Package/test", "Option 2", "Option 3"] }
  ]
};


export const cards = [
  { id: 1, title: 'Liver', icon: '/liver.png' },
  { id: 2, title: 'Lungs', icon: '/Lungs.png' },
  { id: 3, title: 'Kidney', icon: '/kidney.png' },
  { id: 4, title: 'CBC', icon: '/CBC.png' },
  { id: 5, title: 'Thyroid', icon: '/thyroid.png' },
  { id: 6, title: 'Fertility', icon: '/Firtility.png' },

];

export const packageImages = {
  swasthBiharWellness1: '/images/swasth_bihar_wellness1.jpg',
  swasthBiharWellness2: '/images/swasth_bihar_wellness2.jpg',
  // Add more image URLs as needed
};

// export const packages = [
//   {
//     id: 1,
//     tabId: 1, 
//     title: 'Swasth Bihar Wellness 1',
//     tests: ['CBC', 'ESR', 'Sugar Fasting', 'Lipid Profile Screen', 'Liver Function Test', 'Kidney Function Test'],
//     discount: '40%',
//     mrp: '₹2500',
//     price: '₹1500',
//     image: '/package1500.png',
//   },
//   {
//     id: 2,
//     tabId: 2, 
//     title: 'Swasth Bihar Wellness 2',
//     tests: ['CBC', 'ESR', 'Sugar Fasting', 'Lipid Profile Screen', 'Thyroid Profile Total', 'Liver Function Test', 'HbA1c (HPLC)','Kidney Function Test' ],
//     discount: '45%',
//     mrp: '₹3320',
//     price: '₹1826',
//     image: '/package1826.png',
//   },
//   // {
//   //   id: 3,
//   //   tabId: 3, 
//   //   title: 'Test',
//   //   tests: ['CBC',  'Thyroid Profile Total', 'Liver Function Test', 'HbA1c (HPLC)','Kidney Function Test' ],
//   //   discount: '25%',
//   //   mrp: '₹2320',
//   //   price: '₹1626',
//   //   image: '/package1826.png',
//   // },
// ];

// export const tabs = [
//   { id: 1, tabId: 1,  name: 'Swasth Bihar Packages' },
//   { id: 2, tabId: 1,  name: 'Full Body Special Packages' },
//   { id: 3, tabId: 1, name: 'Medi Bridge Special Packages' },
//   { id: 4, tabId: 1, name: 'Special Health Packages' },
// ];

export const carouselImages = [

  {
    desktop: "/mediabox.png",
    mobile: "/sliderbanner1.png",
  },
  {
    desktop: "/mediabox2.jpg",
    mobile: "/MobileBanner1.png",
  },

];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: '',
    links: [
      'Home',
      'About us',
      'Collection centre',
      'Diagnostic Services',
      'Blog',
      'Career',
      'Media',
      'Making Healthcare Better',
      'Contact Us',
    ],
  },
  {
    title: 'Packages',
    links: ['Swasth Bihar Packages', 'Full Body Special Packages', 'Medi Bridge Special Packages', 'Special Health Packages'],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Get your report Download App Now',
  links: [
    { label: 'Admin Officer', value: '123-456-7890' },
    { label: 'Email Officer', value: 'hilink@akinthil.com' },
  ],
};

export const SOCIALS = {
  title: '',
  links: [
    '/twitter.png',
    '/facebook.png',
    '/instagram.png',
  ],
};

export const ADDRESS = "NH-20, Mangla Asthan, Biharsharif, Nalanda, Bihar 803101";
export const PHONE = "+91 92042 11809";
export const WEBSITE = "www.medibridge.in";
export const EMAIL = "info@medibridge.in";

export const ICONS = {
  address: "place",
  phone: "phone",
  website: "public",
  email: "email",
};