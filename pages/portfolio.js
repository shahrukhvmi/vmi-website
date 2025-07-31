import PortfolioDesignWrap from "@/components/portfolio/PortfolioDesignWrap";
import PortfolioDevelopmentWrap from "@/components/portfolio/PortfolioDevelopmentWrap";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioSeoWrap from "@/components/portfolio/PortfolioSeoWrap";
import PortfolioSocialWrap from "@/components/portfolio/PortfolioSocialWrap";
import React from "react";

export default function portfolio() {
  return (
    <main className="relative text-white  overflow-hidden">
      <PortfolioHero />

      <PortfolioDesignWrap />

      <PortfolioDevelopmentWrap />

      <PortfolioSocialWrap />

      <PortfolioSeoWrap />
    </main>
  );
}
