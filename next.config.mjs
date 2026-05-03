const nextConfig = {
  output: 'export',
  /** Folder-based pages (e.g. services/logistics/index.html) so /services/logistics/ works on Apache/shared hosts */
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
