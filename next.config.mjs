/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Add this line
  // Other configurations can go here
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

export default nextConfig; // Change this line
