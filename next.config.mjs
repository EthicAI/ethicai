/** @type {import('next').NextConfig} */
const nextConfig = {
  serverComponentsExternalPackages: ["sharp", "onnxruntime-node"],
};

export default nextConfig;
