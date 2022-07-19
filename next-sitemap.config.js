/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://www.petepittawat.dev',
  generateRobotsTxt: true, // (optional)
}

export default config