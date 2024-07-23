import ourServices from '../app/home/ourServices';
import ImageSlider from '../components/ImageSlider 1';
// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/", key: "aboutus", label: "About us" },
  { href: "/", key: "collectioncentre", label: "Collection centre" },
  { href: "/", key: "diagnosticservices ", label: "Diagnostic Services" },
  { href: "/careers", key: "career", label: "Career" },
  { href: "/contact", key: "contactus", label: "Contact us" },
];

// HomePage

export const container_images = [
  "/con1.webp",
  "/con2.webp",
  "/con3.webp",
  "/con4.webp",

];
export const images = [
  {
    desktop: "/Family banner1.webp",
    mobile: "/MobileBanner1.webp",
  },
  

];
export const imageData = {
  imageUrl: "Frame.webp"
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
  { id: 1, title: 'Liver', icon: '/liver.webp', link: '/liver' },
  { id: 2, title: 'Lungs', icon: '/Lungs.webp', link: '/lungs' },
  { id: 3, title: 'Kidney', icon: '/kidney.webp', link: '/kidney' },
  { id: 4, title: 'CBC', icon: '/CBC.webp', link: '/cbc' },
  { id: 5, title: 'Thyroid', icon: '/thyroid.webp', link: '/thyroid' },
  { id: 6, title: 'Fertility', icon: '/Firtility.webp', link: '/fertility' },
];


export const packageImages = {
  swasthBiharWellness1: '/images/swasth_bihar_wellness.webp',
  swasthBiharWellness2: '/images/swasth_bihar_wellness2.jpg',
  // Add more image URLs as needed
};


export const testimonials = [
  {
    text: "I was referred by my doctor to Medibridge Diagnostic Center for some tests and I was very happy with the services I received. The employee politely asked to wait for a few moments. The results came back quickly and the doctor was able to provide me with the answers I needed to move forward with my treatment. Thanks, Medibridge!",
    name: "Hamid Raza",
    location: "Patna, Bihar - 04",
    image: "/Masklogo.webp",
  },
  {
    text: "Medi Bridge diagnostic is the advanced level diagnostic center in the District. We are offering to offer a wide variety of test menus. We wish to diagnose all the possible diseases inside the human body. We have incorporated almost 95% of automation in our state-of-art healthcare equipment.",
    name: "Hamid Raza",
    location: "Patna, Bihar - 04",
    image: "/Masklogo.webp",
  },
  {
    text: "I can't say enough good things about Medibridge Diagnostic Center but the staff was friendly and the doctors were knowledgeable. I was impressed with the efficiency of the center and I received my results very quickly. I highly recommend visiting Medibridge to anyone in need of diagnostic testing.",
    name: "Hamid Raza",
    location: "Patna, Bihar - 04",
    image: "/Masklogo.webp",
  },
  {
    text: "Recently, I got some medical tests done for my health condition and I am very glad that I chose this Medibridge Diagnostic Center. The tests were done very smoothly. It takes almost 3 to 4 days at other medical test centers but here the results were provided within few hours. I would recommend this to anyone looking for a reliable and trustworthy place to get medical tests done. I would highly recommend Medibridge Diagnostic Center.",
    name: "Hamid Raza",
    location: "Patna, Bihar - 04",
    image: "/Masklogo.webp",
  },
  {
    text: "Recently, I got some medical tests done for my health condition and I am very glad that I chose this Medibridge Diagnostic Center. The tests were done very smoothly. It takes almost 3 to 4 days at other medical test centers but here the results were provided within few hours. I would recommend this to anyone looking for a reliable and trustworthy place to get medical tests done. I would highly recommend Medibridge Diagnostic Center.",
    name: "Hamid Raza",
    location: "Patna, Bihar - 04",
    image: "/Masklogo.webp",
  },
  {
    text: "Recently, I got some medical tests done for my health condition and I am very glad that I chose this Medibridge Diagnostic Center. The tests were done very smoothly. It takes almost 3 to 4 days at other medical test centers but here the results were provided within few hours. I would recommend this to anyone looking for a reliable and trustworthy place to get medical tests done. I would highly recommend Medibridge Diagnostic Center.",
    name: "Hamid Raza",
    location: "Patna, Bihar - 04",
    image: "/Masklogo.webp",
  },
  {
    text: "Recently, I got some medical tests done for my health condition and I am very glad that I chose this Medibridge Diagnostic Center. The tests were done very smoothly. It takes almost 3 to 4 days at other medical test centers but here the results were provided within few hours. I would recommend this to anyone looking for a reliable and trustworthy place to get medical tests done. I would highly recommend Medibridge Diagnostic Center.",
    name: "Hamid Raza",
    location: "Patna, Bihar - 04",
    image: "/Masklogo.webp",
  },
  {
    text: "Recently, I got some medical tests done for my health condition and I am very glad that I chose this Medibridge Diagnostic Center. The tests were done very smoothly. It takes almost 3 to 4 days at other medical test centers but here the results were provided within few hours. I would recommend this to anyone looking for a reliable and trustworthy place to get medical tests done. I would highly recommend Medibridge Diagnostic Center.",
    name: "Hamid Raza",
    location: "Patna, Bihar - 04",
    image: "/Masklogo.webp",
  },
];

export const carouselImages = [

  {
    desktop: "/mediabox.webp",
    mobile: "/sliderbanner1.webp",
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
    '/twitter.webp',
    '/facebook.webp',
    '/instagram.webp',
  ],
};

export const MAP ={
 img: "/maps.webp"
}



export const ADDRESS = `Medi Bridge Diagnostic center, N.H - 31, Bihar Sharif, Nalanda, Bihar, 803101`;
export const PHONE = "+91 92042 11809";
export const WEBSITE = "www.medibridge.in";
export const EMAIL = "info@medibridge.in";

export const ICONS = {
  address: "place",
  phone: "phone",
  website: "public",
  email: "email",
};


// Contact Page

export const CONTACT_FORM_FIELDS = {
  name: {
    // label: "Name",
    placeholder: "Full name",
  },
  address: {
    // label: "Address",
    placeholder: "Address",
  },
  phone: {
    // label: "Phone Number",
    placeholder: "Phone Number",
  },
  message: {
    // label: "Message",
    placeholder: "Your message",
  },
};


export const CONTACT_DETAILS = {
  address: 'Medi Bridge Diagnostic center, N.H - 31, Bihar Sharif, Nalanda, Bihar, 803101',
  phone: '+91 9204211809',
  website: 'medibridge.in',
  email: 'info@medibridge.in',
  social: [
    { icon: 'twitter', link: 'https://twitter.com/medibridge' },
    { icon: 'instagram', link: 'https://instagram.com/medibridge' },
    { icon: 'facebook', link: 'https://facebook.com/medibridge' },
  ],
};

// Careers Page

export const jobs = [
  {
    title: 'Lab Technicians',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    location: 'Bihar Shareef',
    postedDate: '10-09-2022',
  },
  {
    title: 'Receptionist',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    location: 'Bihar Shareef',
    postedDate: '10-09-2022',
  },
  {
    title: 'Microbiologist',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    location: 'Bihar Shareef',
    postedDate: '10-09-2022',
  },
];

export const countdata = [
  { count: "300+", text: "Test menu" },
  { count: "150+", text: "Doctors" },
  { count: "450+", text: "Well trained Lab Technician" },
  { count: "450+", text: "Well trained Lab Technician" },
];

export const countimageSrc = "/count1.webp";

export const benefitsData = [
  {
    id: 1,
    title: 'Annual Leaves',
    icon: '/bene1.webp', 
  },
  {
    id: 2,
    title: 'Skill Development',
    icon: '/bene2.webp',
  },
  {
    id: 3,
    title: 'Health Insurance',
    icon: '/bene3.webp',
  },
  {
    id: 4,
    title: 'Yearly Preventive Health package for your family.',
    icon: '/bene4.webp',
  },
];

// category page

export const contentData = {
  overview: {
    title: "Overview",
    content: `
    <p>In India, 1.36 Lakhs adults die due to chronic kidney disease, which is more than AIDS.</p>
    <p>The kidneys are a pair of bean-shaped organs located at the bottom of the rib cage and are mainly responsible for:</p>
    <ul>
      <li>- Filtering waste products, excess water, and other impurities out of the blood.</li>
      <li>- Regulating pH, salt, and potassium levels in the body.</li>
      <li>- Regulating blood pressure and the production of red blood cells.</li>
      <li>- Activating a form of vitamin D that enhances calcium absorption.</li>
    </ul>
    `,
  },
  symptoms: {
    title: "Symptoms",
    content: `
      In India, 1.36 Lakhs adults die due to chronic kidney disease, which is more than AIDS. 
      The kidneys are a pair of bean-shaped organs located at the bottom of the rib cage and are mainly responsible for:
      - Filtering waste products, excess water, and other impurities out of the blood.
      - Regulating pH, salt, and potassium levels in the body.
      - Regulating blood pressure and the production of red blood cells.
      - Activating a form of vitamin D that enhances calcium absorption.
    `,
  },
  KidneyStone: {
    title: "Are you at risk of Kidney Disease?",
    content: `
      In India, 1.36 Lakhs adults die due to chronic kidney disease, which is more than AIDS. 
      The kidneys are a pair of bean-shaped organs located at the bottom of the rib cage and are mainly responsible for:
      - Filtering waste products, excess water, and other impurities out of the blood.
      - Regulating pH, salt, and potassium levels in the body.
      - Regulating blood pressure and the production of red blood cells.
      - Activating a form of vitamin D that enhances calcium absorption.
    `,
  },
  TypesOfDisease: {
    title: "Types of Kidney Disease",
    content: `
      In India, 1.36 Lakhs adults die due to chronic kidney disease, which is more than AIDS. 
      The kidneys are a pair of bean-shaped organs located at the bottom of the rib cage and are mainly responsible for:
      - Filtering waste products, excess water, and other impurities out of the blood.
      - Regulating pH, salt, and potassium levels in the body.
      - Regulating blood pressure and the production of red blood cells.
      - Activating a form of vitamin D that enhances calcium absorption.
    `,
  },
  DiagnosisTests: {
    title: "Diagnosis and Tests",
    content: `
      In India, 1.36 Lakhs adults die due to chronic kidney disease, which is more than AIDS. 
      The kidneys are a pair of bean-shaped organs located at the bottom of the rib cage and are mainly responsible for:
      - Filtering waste products, excess water, and other impurities out of the blood.
      - Regulating pH, salt, and potassium levels in the body.
      - Regulating blood pressure and the production of red blood cells.
      - Activating a form of vitamin D that enhances calcium absorption.
    `,
  },
  Prevention: {
    title: "Prevention",
    content: `
      In India, 1.36 Lakhs adults die due to chronic kidney disease, which is more than AIDS. 
      The kidneys are a pair of bean-shaped organs located at the bottom of the rib cage and are mainly responsible for:
      - Filtering waste products, excess water, and other impurities out of the blood.
      - Regulating pH, salt, and potassium levels in the body.
      - Regulating blood pressure and the production of red blood cells.
      - Activating a form of vitamin D that enhances calcium absorption.
    `,
  },
};

export const infoData = {
  liverFunctionTest: {
    title: "Liver function Test",
    features: [
      "Lorem ipsum dolor sit",
      "Duis autem vel eum iriure",
      "Ut wisi enim ad minim",
    ],
    price: "₹700/-",
    buttonText: "BOOK NOW"
  },
  headline: {
    title: "Headline",
    items: [
      "Lorem ipsum dolor sit",
      "Duis autem vel eum iriure",
      "Ut wisi enim ad minim",
      "Lorem ipsum dolor sit",
      "Duis autem vel eum iriure",
      "Ut wisi enim ad minim",
      "Lorem ipsum dolor sit",
      "Duis autem vel eum iriure",
      "Ut wisi enim ad minim",
      "Lorem ipsum dolor sit",
      "Duis autem vel eum iriure",
      "Ut wisi enim ad minim",
    ]
  },
}



export const ageGroupsM = [
  {
    id: 1,
    src: '/Boy 1.webp',
    alt: 'Under 25 Years',
    title: 'Under',
    highlight: '25 Years',
  },
  {
    id: 2,
    src: '/Men 1.webp',
    alt: '20-50 Years',
    title: '20-50',
    highlight: 'Years',
  },
  {
    id: 3,
    src: '/Old man 1.webp',
    alt: 'Above 50 Years',
    title: 'Above',
    highlight: '50 Years',
  },
];


export const ageGroupsF = [
  {
    id: 1,
    src: '/Under 25 Years.webp',
    alt: 'Under 25 Years',
    title: 'Under',
    highlight: '25 Years',
  },
  {
    id: 2,
    src: '/20 - 50.webp',
    alt: '20-50 Years',
    title: '20-50',
    highlight: 'Years',
  },
  {
    id: 3,
    src: '/Above 50 Years.webp',
    alt: 'Above 50 Years',
    title: 'Above',
    highlight: '50 Years',
  },
];

export const stepsData = [
  {
    image: "/stepicon1.webp",
    text: "You need a pathology test / Choose health test and package",
  },
  {
    image: "/stepicon2.webp",
    text: "Book your free Home test",
  },
  {
    image: "/stepicon3.webp",
    text: "Our phlebotomist and pricking blood sample",
  },
  {
    image: "/stepicon4.webp",
    text: "Get your results on your phone same day",
  },
];

export const OurServices = [
  {
    id: 1,
    src: '/Pathology.webp',
    alt: 'Pathology',
    title: 'Pathology',
    // highlight: '',
  },
  {
    id: 2,
    src: '/Pathology 1.webp',
    alt: 'Pathology 1',
    title: 'Pathology 1',
    // highlight: 'Years',
  },
  {
    id: 3,
    src: '/Ultrasound.webp',
    alt: 'Ultrasound',
    title: 'Ultrasound',
    // highlight: '50 Years',
  },
];

export const safetyStepsData = [
  {
    image: "/Temp.webp",
    title: "Temperature Checks",
  },
  {
    image: "/handwash.webp",
    title: "Hand Sanitization",
  },
  {
    image: "/suit.webp",
    title: "Use of Masks & Gloves",
  },
  {
    image: "/Distance.webp",
    title: "Social Distancing",
  },
];

export const ImagesSlider = [
  {
    desktop: "/slider1.webp",
    mobile: "/MobileBanner1.webp",
  },
]

export const galleryimages = [
  {
    src: '/gallery1.webp',
    alt: 'Health camp - Nawada',
  },
  {
    src: '/gallery2.webp',
    alt: 'Doctor consultation',
  },
  {
    src: '/gallery3.webp',
    alt: 'Community health education',
  },
  {
    src: '/gallery4.webp',
    alt: 'Child healthcare',
  },
  {
    src: '/gallery5.webp',
    alt: 'Child healthcare',
  },
];

//seach page content


export const healthCheckupDetails = {
  name: "Essential Full Body Checkup + Reports in 6 Hours",
  subName: "Tests for 68 Parameters",
  brief: "The Full Body Checkup- Essential includes doctor curated tests for the liver, kidneys, sugar, thyroid, cholesterol, blood, and urine, among others. This package helps detect potential health disorders and vitamin deficiencies. Screening for vitamin D and B12 deficiencies is vital for overall health. Deficiencies can cause weak bones, fatigue, numbness, mood swings, and impaired immunity. Regular checkups maintain optimal health, ensuring recommended levels of both vitamins.",
  availabile: "Available everyday from 6:30 AM to 10 PM",
  sample: [
    { 
      src: '/Blood.webp',
      alt: 'Blood',
    },
    { 
      src: '/urine.webp',
      alt: 'Urine',
    },
  ],
  made: {
    title: "Preparation required",
    details: "No Fasting Required",
  },
};

// constants/index.ts
export const faqData = [
  {
    title: 'CBC + ESR',
    description: 'Press to expand',
    content: [
      'Hemoglobin',
      'Total Leucocyte Count',
      'RBC Count',
      'Packed Cell Volume',
      'Mean Corpuscular Volume (MCV)',
      'MCH',
      'MCHC',
      'RDW-CV',
      'RDW-SD',
      'Platelet Count',
      'MPV',
      'PCT',
      'Mentzer Index',
      'Sehgal Index',
      'Neutrophil',
      'Monocyte',
      'Basophil',
      'Lymphocytes',
      'Absolute Neutrophils',
      'Absolute Lymphocytes',
      'Absolute Monocytes',
      'Absolute Eosinophils',
      'Absolute Basophils',
      'NLR (Neutrophil Lymphocyte ratio)',
      'ESR',
    ],
  },
  {
    title: 'Urine Complete Analysis',
    description: '27 parameters',
    content: ['Urine Complete Analysis parameters'],
  },
  {
    title: 'Liver Function Test',
    description: '12 parameters',
    content: ['Liver Function Test parameters'],
  },
  {
    title: 'Smear for Malarial Parasite',
    description: '1 parameter',
    content: ['Smear for Malarial Parasite parameter'],
  },
  {
    title: 'Typhidot',
    description: '1 parameter',
    content: ['Typhidot parameter'],
  },
  {
    title: 'Dengue Profile (ELISA)',
    description: '3 parameters',
    content: ['Dengue Profile (ELISA) parameters'],
  },
];

export const healthCheckup = {
  title: 'Health Checkup',
  subTitle: 'Complete health checkup',
  description: 'This is a comprehensive health checkup package.',
  availability: 'Available 24/7',
  samples: [
    { src: '/blood-sample.webp', alt: 'Blood Sample' },
    { src: '/urine-sample.webp', alt: 'Urine Sample' }
  ],
  preparation: {
    title: 'Preparation Required',
    details: 'Fast for 12 hours before the test.'
  },
  pricing: {
    originalPrice: '₹4130',
    discountedPrice: '₹1599',
    discount: '61% off'
  },
  features: [
    { imgSrc: '/award.webp', description: 'In-house labs 400+ test' },
    { imgSrc: '/newreport.webp', description: '60 mins collection 6 AM - 10 PM' },
    { imgSrc: '/quick.webp', description: 'Reports in 6 hours' }
  ]
};
