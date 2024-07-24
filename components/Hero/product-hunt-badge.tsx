"use client";

import { useTheme } from "next-themes";

const ProductHuntBadge = () => {
  const { theme } = useTheme();

  return (
    theme && (
      <a
        href="https://www.producthunt.com/posts/publish-studio?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-publish&#0045;studio"
        target="_blank"
        className="mb-8 flex justify-center"
      >
        <img
          src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=473692&theme=${theme === "dark" ? "dark" : "light"}`}
          alt="Publish&#0032;Studio - The&#0032;Ultimate&#0032;Platform&#0032;for&#0032;Content&#0032;Curation&#0032;and&#0032;Distribution&#0046; | Product Hunt"
          style={{ width: "250px", height: "54px" }}
          width="250"
          height="54"
        />
      </a>
    )
  );
};

export default ProductHuntBadge;
