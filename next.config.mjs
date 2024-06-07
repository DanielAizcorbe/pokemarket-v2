/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: ["./src/sass"],
        prependData: "@import 'main.sass'"
    }
};

export default nextConfig;
