const site_url = process.env.NEXT_PUBLIC_APP_URL || "";

export const siteConfig = {
  name: "johnson | Mern Stack developer",
  description:
    "Personal portfolio website showcasing my projects and skills as a Mern Stack developer",
  url: site_url,
  ogImage: `${site_url}/_static/og-image.png`,
  links: {
    twitter: "https://x.com/_real_jay0?s=11",
    github: "https://github.com/Johnson17755",
  },
  mailSupport: "otuoghajohnson@gmail.com",
};
