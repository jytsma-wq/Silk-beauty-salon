export const siteConfig = {
  name: "Harley Street Injectables",
  description: "London's leading non-surgical aesthetic clinic at 106 Harley Street. We bring together world-class practitioners, cutting-edge treatments & luxury care to enhance your natural beauty with precision & confidence.",
  url: "https://www.harleystreetinjectables.com",
  bookingUrl: "https://phorest.com/book/salons/harleystreetinjectables1",
  
  contact: {
    address: "106 Harley Street",
    city: "London",
    postcode: "W1G 7JE",
    country: "United Kingdom",
    phone: "0345 548 5658",
    email: "info@harleystreetinjectables.com"
  },
  
  businessHours: {
    monday: "09:00 - 18:30",
    tuesday: "09:00 - 18:30",
    wednesday: "09:00 - 20:00",
    thursday: "09:00 - 20:00",
    friday: "09:00 - 18:30",
    saturday: "09:30 - 17:00",
    sunday: "09:30 - 17:00"
  },
  
  social: {
    instagram: "https://www.instagram.com/harley_st_injectables/",
    facebook: "https://www.facebook.com/HarleyInjectables/",
    twitter: "https://x.com/HInjectables",
    youtube: "https://www.youtube.com/channel/UCSMEsASgbUsTcxiGvdizrjw"
  },
  
  awards: [
    "Award Winning",
    "Voted London's top Cosmetic Clinic",
    "As featured in Vogue, Grazia, Vanity Fair and Tatler"
  ],
  
  navigation: {
    main: [
      { name: "Treatments", href: "#treatments", hasDropdown: true },
      { name: "Conditions", href: "#conditions", hasDropdown: true },
      { name: "About", href: "/about", hasDropdown: true },
      { name: "Price List", href: "/pricelist" },
      { name: "Offers", href: "/offers" },
      { name: "Contact", href: "/contact-us" }
    ],
    footer: {
      quickLinks: [
        { name: "Contact", href: "/contact-us" },
        { name: "FAQ", href: "/faq" },
        { name: "Press", href: "/media-press" },
        { name: "Blog", href: "/blog" }
      ],
      about: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/about#team" },
        { name: "Careers", href: "/careers" }
      ]
    }
  },
  
  team: [
    {
      name: "Alice",
      role: "Founder & Lead Practitioner",
      bio: "Alice is the founder of Harley Street Injectables and a renowned aesthetic practitioner with over 15 years of experience in the industry. She is known for her natural-looking results and meticulous attention to detail.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80"
    },
    {
      name: "Hazel",
      role: "Senior Aesthetic Practitioner",
      bio: "Hazel is a highly skilled aesthetic practitioner specializing in dermal fillers and skin treatments. Her gentle approach and artistic eye ensure beautiful, natural results for every client.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80"
    },
    {
      name: "Sophie",
      role: "Aesthetic Practitioner",
      bio: "Sophie brings a wealth of knowledge in advanced skin treatments and laser therapy. She is passionate about helping clients achieve their skin goals through personalized treatment plans.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80"
    },
    {
      name: "Emma",
      role: "Aesthetic Practitioner",
      bio: "Emma specializes in non-surgical facial rejuvenation and has extensive experience in anti-wrinkle treatments and dermal fillers. Her clients love her natural, fresh approach.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80"
    }
  ],
  
  faqs: [
    {
      question: "What should I expect during my first consultation?",
      answer: "During your initial consultation, we'll discuss your concerns, goals, and medical history. Our practitioner will examine your skin and facial anatomy before recommending appropriate treatments. We believe in honest, transparent advice and will never recommend unnecessary treatments."
    },
    {
      question: "Are the treatments painful?",
      answer: "Most treatments involve minimal discomfort. We use topical numbing cream where appropriate, and many of our dermal fillers contain built-in local anesthetic. Our practitioners are skilled in making treatments as comfortable as possible."
    },
    {
      question: "How long do results last?",
      answer: "This depends on the treatment. Anti-wrinkle injections typically last 3-6 months, dermal fillers 6-18 months depending on the product and area treated, and skin tightening treatments can provide results lasting 1-2 years. We'll discuss expected duration during your consultation."
    },
    {
      question: "Is there any downtime?",
      answer: "Many of our treatments have minimal to no downtime. Some treatments may cause temporary swelling, redness, or bruising. We'll provide detailed aftercare instructions and advice on timing treatments around social commitments."
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book online through our booking system, call us on 0345 548 5658, or email info@harleystreetinjectables.com. We recommend booking consultations in advance as we often have a waiting list."
    },
    {
      question: "Do you offer virtual consultations?",
      answer: "Yes, we offer virtual consultations for those who cannot visit the clinic initially. However, for treatments requiring precise assessment, an in-person consultation is recommended."
    },
    {
      question: "What brands of products do you use?",
      answer: "We use only premium, FDA-approved products from leading brands including Allergan (Juvederm), Galderma (Restylane), and Merz. For skin treatments, we use medical-grade products from iS Clinical, Obagi, and Mesoestetic."
    },
    {
      question: "Are your practitioners qualified?",
      answer: "All our practitioners are fully qualified and experienced medical professionals. They undergo continuous training in the latest techniques and safety protocols to ensure the highest standards of care."
    }
  ]
};

export type SiteConfig = typeof siteConfig;
