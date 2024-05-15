// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/", key: "aboutus", label: "About us" },
  { href: "/", key: "collectioncentre", label: "Collection centre" },
  { href: "/", key: "diagnosticservices ", label: "Diagnostic Services" },
  { href: "/", key: "career", label: "Career" },
  { href: "/", key: "contactus", label: "Contact us" },
];

export const container_images = [
  "/con1.png",
  "/con2.png",
  "/con3.png",
  "/con4.png",
  // Add more image URLs as needed
];
export const images = [
  {
    desktop: "/Banner1.png",
    mobile: "/MobileBanner1.png",
  },
  {
    desktop: "/B.png",
    mobile: "/MobileBanner1.png",
  },
  // Add more images as needed
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

export const packages = [
  {
    id: 1,
    title: 'Swasth Bihar Wellness 1',
    tests: ['CBC', 'ESR', 'Sugar Fasting', 'Lipid Profile Screen', 'Liver Function Test', 'Kidney Function Test'],
    discount: '40%',
    mrp: '₹2500',
    price: '₹1500',
    image: '/package1500.png',
  },
  {
    id: 1,
    title: 'Swasth Bihar Wellness 2',
    tests: ['CBC', 'ESR', 'Sugar Fasting', 'Lipid Profile Screen', 'Thyroid Profile Total', 'Liver Function Test', 'HbA1c (HPLC)','Kidney Function Test' ],
    discount: '45%',
    mrp: '₹3320',
    price: '₹1826',
    image: '/package1826.png',
  },
];

export const tabs = [
  { id: 1, name: 'Swasth Bihar Packages' },
  { id: 2, name: 'Full Body Special Packages' },
  { id: 3, name: 'Medi Bridge Special Packages' },
  { id: 4, name: 'Special Health Packages' },
];