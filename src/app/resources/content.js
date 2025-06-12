import { Logo } from "@/once-ui/components";
import { InlineCode, Fade } from "@/once-ui/components";
import Link from "next/link";

const person = {
  firstName: "Max",
  lastName: "Gauntner",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Product Designer @ Binary Defense",
  avatar: "/images/avatar.jpg",
  email: "maxgauntner@gmail.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English",], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/maxgauntner",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/maxgauntner/",
  },
  {
    name: "Unsplash",
    icon: "unsplash",
    link: "https://unsplash.com/@maxandrey",
  },
  {
    name: "Pexels",
    icon: "pexels",
    link: "https://www.pexels.com/@maxandrey/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>I'm Max, a product designer currently at <a href="https://www.binarydefense.com/" target="blank">Binary Defense</a>.</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Dashboarding Feature</strong></>,
    href: "/work/reporting-export-options-and-dashboard-customization",
  },
  subline: (
    <>
      When I’m not designing or spearheading UI or UX projects, you’ll find me with a camera in my hand, knee-deep in a remodel (ok, waist-deep), or building something new with my hands.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "/work/reporting-export-options-and-dashboard-customization",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>My full name is actually Max Andrey Gauntner. I'm based in Northeast Ohio where the
      weather is a year-round April Fool's joke. It's really not a joke - it could be sunny
      and 70° one day, and the next, it could be snowing. Ah, fun times. Growing up, I've
      always had a desire to create. When I was young, I loved to draw and was surrounded
      by art. During college, I went to school for business. It wasn't until after college
      that I found a medium I truly fell in love with; design and photography.
      <br /><br />
      In my free time, I spend the majority of my time with my wife, son, and German Shepherd. Hiking,
      cooking, and traveling are just a few of our favorite things. Currently, I am
      residing at <Link target="_blank" href="https://www.binarydefense.com/">Binary Defense</Link> as their <InlineCode style={{padding: 'var(--static-space-2) var(--static-space-8)'}}>Senior Product Designer</InlineCode>, focused on building a brand new
      product with a quick go-to market strategy. Before this role, I was their <InlineCode style={{padding: 'var(--static-space-2) var(--static-space-8)'}}>UX Architect</InlineCode> focused on the research strategy. Want to see some of my design work? Check out a few <Link target="_blank" href="/work">case studies</Link> I've put together to get a feel of how I work, and my design aesthetic.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Binary Defense Systems",
        timeframe: "Jan 2023 - Present",
        role: "Senior Product Designer",
        achievements: [
          <>
            As the Senior Product Designer, I lead cybersecurity focused projects through the full design lifecycle. I essentially take complex cybersecurity data and turn it into simple, intuitive, and useful interfaces that help us fulfill our mission and improve detection response metrics.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/reporting/hero.jpg",
            alt: "New BD Platform Features",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Binary Defense Systems",
        timeframe: "Sep 2021 - Jan 2023",
        role: "UX Architect",
        achievements: [
          <>
            As the UX Architect, my role was focused more on analyzing complex data solutions and creating various product research deliverables. I enabled our team to validate their value hypotheses for our product and helped our company to obtain $36 million in private equity funding.
          </>,
        ],
        images: [        
          {
          src: "/images/projects/investigations/hero.jpg",
          alt: "BD Platform MVP",
          width: 16,
          height: 9,
        },
      ],
      },
      {
        company: "OuterBox, Inc.",
        timeframe: "Oct 2017 - Sep 2021",
        role: "Senior UX Designer",
        achievements: [
          <>
            At OuterBox, as the Senior UX Designer, I helped optimize user engagement through conversion techniques through interface design. Our team also created comprehensive brand strategies and engineered complete website overhauls for numerous Inc. 5000 organizations.
          </>,
        ],
        images: [        
          {
          src: "/images/projects/curated/hero.jpg",
          alt: "Once UI Project",
          width: 16,
          height: 9,
        },
      ],
      },
      {
        company: "Edge of the Box Marketing",
        timeframe: "Aug 2016 - Oct 2017",
        role: "Lead Digital Designer",
        achievements: [
          <>
            Edge of the Box Marketing offers services like website maintenance, email marketing, event planning, promotions, website design and print. As the Lead Digital Designer, I managed 20+ client accounts to deliver marketing assets from creation to completion.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Neilsen Norman Group",
        description: <>UX Design Certification in Interaction Design (in progress)</>,
      },
      {
        name: "Google",
        description: <>UX Design Certification</>,
      },
      {
        name: "Kent State University",
        description: <>Bachelor of Business Administration (BBA)</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Photos",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/photo-1.jpg",
      alt: "image",
      orientation: "vertical",
      technical: "56mm | 1/1250 | f11 | ISO100",
      location: "Zillertal, Austria",
    },
    {
      src: "/images/gallery/photo-2.jpg",
      alt: "image",
      orientation: "vertical",
      technical: "56mm | 1/1250 | f11 | ISO100",
      location: "Zillertal, Austria",
    },
    {
      src: "/images/gallery/photo-3.jpg",
      alt: "image",
      orientation: "vertical",
      technical: "56mm | 1/1250 | f11 | ISO100",
      location: "Zillertal, Austria",
    },
    {
      src: "/images/gallery/photo-4.jpg",
      alt: "image",
      orientation: "vertical",
      technical: "56mm | 1/1250 | f11 | ISO100",
      location: "Zillertal, Austria",
    },
    {
      src: "/images/gallery/photo-5.jpg",
      alt: "image",
      orientation: "vertical",
      technical: "56mm | 1/1250 | f11 | ISO100",
      location: "Zillertal, Austria",
    },
    {
      src: "/images/gallery/photo-6.jpg",
      alt: "image",
      orientation: "vertical",
      technical: "56mm | 1/1250 | f11 | ISO100",
      location: "Zillertal, Austria",
    },
    {
      src: "/images/gallery/photo-7.jpg",
      alt: "image",
      orientation: "vertical",
      technical: "56mm | 1/1250 | f11 | ISO100",
      location: "Zillertal, Austria",
    },
    {
      src: "/images/gallery/photo-8.jpg",
      alt: "image",
      orientation: "vertical",
      technical: "56mm | 1/1250 | f11 | ISO100",
      location: "Zillertal, Austria",
    },
    {
      src: "/images/gallery/photo-9.jpg",
      alt: "image",
      orientation: "vertical",
      technical: "56mm | 1/1250 | f11 | ISO100",
      location: "Zillertal, Austria",
    },
    {
      src: "/images/gallery/photo-10.jpg",
      alt: "image",
      orientation: "vertical",
      technical: "56mm | 1/1250 | f11 | ISO100",
      location: "Zillertal, Austria",
    },
    {
      src: "/images/gallery/photo-11.jpg",
      alt: "image",
      orientation: "vertical",
      technical: "56mm | 1/1250 | f11 | ISO100",
      location: "Zillertal, Austria",
    },
    {
      src: "/images/gallery/photo-12.jpg",
      alt: "image",
      orientation: "vertical",
      technical: "56mm | 1/1250 | f11 | ISO100",
      location: "Zillertal, Austria",
    },
    {
      src: "/images/gallery/photo-13.jpg",
      alt: "image",
      orientation: "vertical",
      technical: "56mm | 1/1250 | f11 | ISO100",
      location: "Zillertal, Austria",
    },
    {
      src: "/images/gallery/photo-14.jpg",
      alt: "image",
      orientation: "vertical",
      technical: "56mm | 1/1250 | f11 | ISO100",
      location: "Zillertal, Austria",
    },
    {
      src: "/images/gallery/photo-15.jpg",
      alt: "image",
      orientation: "vertical",
      technical: "56mm | 1/1250 | f11 | ISO100",
      location: "Zillertal, Austria",
    },
    {
      src: "/images/gallery/photo-16.jpg",
      alt: "image",
      orientation: "vertical",
      technical: "56mm | 1/1250 | f11 | ISO100",
      location: "Zillertal, Austria",
    },
    {
      src: "/images/gallery/photo-17.jpg",
      alt: "image",
      orientation: "vertical",
      technical: "56mm | 1/1250 | f11 | ISO100",
      location: "Zillertal, Austria",
    },
    {
      src: "/images/gallery/photo-18.jpg",
      alt: "image",
      orientation: "vertical",
      technical: "56mm | 1/1250 | f11 | ISO100",
      location: "Zillertal, Austria",
    },
    {
      src: "/images/gallery/photo-19.jpg",
      alt: "image",
      orientation: "vertical",
      technical: "56mm | 1/1250 | f11 | ISO100",
      location: "Zillertal, Austria",
    },
    {
      src: "/images/gallery/photo-20.jpg",
      alt: "image",
      orientation: "vertical",
      technical: "56mm | 1/1250 | f11 | ISO100",
      location: "Zillertal, Austria",
    },
    {
      src: "/images/gallery/photo-21.jpg",
      alt: "image",
      orientation: "vertical",
      technical: "56mm | 1/1250 | f11 | ISO100",
      location: "Zillertal, Austria",
    },
    {
      src: "/images/gallery/photo-22.jpg",
      alt: "image",
      orientation: "vertical",
      technical: "56mm | 1/1250 | f11 | ISO100",
      location: "Zillertal, Austria",
    },
    {
      src: "/images/gallery/photo-23.jpg",
      alt: "image",
      orientation: "vertical",
      technical: "56mm | 1/1250 | f11 | ISO100",
      location: "Zillertal, Austria",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
