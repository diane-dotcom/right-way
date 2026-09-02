const nextConfig = {
  async redirects() {
    return [
      // ── Core pages ──────────────────────────────────────────────
      { source: '/about-rightway', destination: '/about', permanent: true },
      { source: '/rightway-guarantee', destination: '/about#guarantee', permanent: true },
      { source: '/contact-us', destination: '/#quote', permanent: true },
      { source: '/all-services', destination: '/#services', permanent: true },
      { source: '/services_group/in-detail', destination: '/#services', permanent: true },

      // ── Service slug changes ───────────────────────────────────
      { source: '/services/termites', destination: '/services/termite-control', permanent: true },
      { source: '/services/mosquitoes', destination: '/services/mosquito-control', permanent: true },
      { source: '/services/tree-and-shrub-care', destination: '/services/tree-shrub-care', permanent: true },

      // ── PPC location landing pages ─────────────────────────────
      { source: '/lawn-pest-control-st-johns-county', destination: '/service-areas/st-johns-county', permanent: true },
      { source: '/pest-control-st-johns-county-fl', destination: '/service-areas/st-johns-county', permanent: true },
      { source: '/pest-control-st-augustine-fl', destination: '/service-areas/st-augustine', permanent: true },
      { source: '/lawn-care-st-augustine-fl', destination: '/service-areas/st-augustine', permanent: true },
      { source: '/pest-control-ponte-vedra-fl', destination: '/service-areas/ponte-vedra', permanent: true },
      { source: '/lawn-care-ponte-vedra-fl', destination: '/service-areas/ponte-vedra', permanent: true },
      { source: '/pest-control-ponte-vedra-beach-fl', destination: '/service-areas/ponte-vedra-beach', permanent: true },

      // ── Blog posts → nearest service page ──────────────────────
      { source: '/blogs', destination: '/', permanent: true },
      { source: '/house-protection/four-things-you-should-be-doing-to-protect-your-home-against-termites', destination: '/services/termite-control', permanent: true },
      { source: '/termites/termite-control-jacksonville-fl', destination: '/services/termite-control', permanent: true },
      { source: '/house-protection/potential-diseases-mosquitoes-can-carry', destination: '/services/mosquito-control', permanent: true },
      { source: '/lawn-maintenance/mosquito-control', destination: '/services/mosquito-control', permanent: true },
      { source: '/lawn-maintenance/why-is-lawn-maintenance-important', destination: '/services/lawn-care', permanent: true },
      { source: '/lawn-maintenance/3-basic-needs-of-a-lawn', destination: '/services/lawn-care', permanent: true },
      { source: '/lawn-maintenance/protect-your-lawn-during-the-summer-months', destination: '/services/lawn-care', permanent: true },
      { source: '/pests-fighters/get-ready-for-summer-pests', destination: '/services/pest-control', permanent: true },
      { source: '/house-protection/5-way-to-keep-roaches-out-of-the-house', destination: '/services/pest-control', permanent: true },
      { source: '/news-updates/choosing-the-best-pest-control-company', destination: '/about', permanent: true },

      // ── Category archives ──────────────────────────────────────
      { source: '/category/termites', destination: '/services/termite-control', permanent: true },
      { source: '/category/lawn-maintenance', destination: '/services/lawn-care', permanent: true },
      { source: '/category/house-protection', destination: '/services/pest-control', permanent: true },
      { source: '/category/pests-fighters', destination: '/services/pest-control', permanent: true },
      { source: '/category/:path*', destination: '/', permanent: true },

      // ── Wildcards: tags, theme layouts, testimonials, authors ──
      { source: '/tag/:path*', destination: '/', permanent: true },
      { source: '/layouts/:path*', destination: '/', permanent: true },
      { source: '/testimonial/:path*', destination: '/#reviews', permanent: true },
      { source: '/author/:path*', destination: '/about', permanent: true },
    ];
  },
};

export default nextConfig;
