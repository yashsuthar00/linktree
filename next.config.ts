import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect all variations to the main links.yashsuthar.com domain
      {
        "source": "/(.*)",
        "destination": "https://links.yashsuthar.com/$1",
        "permanent": true,
        "has": [
          {
            "type": "host",
            "value": "linktree.yashsuthar.com"
          }
        ]
      },
      {
        "source": "/(.*)",
        "destination": "https://links.yashsuthar.com/$1",
        "permanent": true,
        "has": [
          {
            "type": "host",
            "value": "link.yashsuthar.com"
          }
        ]
      },
      {
        "source": "/(.*)",
        "destination": "https://links.yashsuthar.com/$1",
        "permanent": true,
        "has": [
          {
            "type": "host",
            "value": "info.yashsuthar.com"
          }
        ]
      },
    ];
  },
};

export default nextConfig;
