/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'**',
            }
        ]
        
    }
};

export default nextConfig;
// domains:['lh3.googleusercontent.com','firebasestorage.googleapis.com']