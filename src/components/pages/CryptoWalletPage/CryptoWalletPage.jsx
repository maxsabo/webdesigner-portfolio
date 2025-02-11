import { AsideNav } from "../../AsideNav/AsideNav";
import { Back } from "../../Back/Back";
import { Overview } from "../../Overview/Overview";
import "./CryptoWalletPage.scss";
import { imageSrc, overview, role, roleDescription, sections, status, team, timeline } from "./walletConst";


export default function CryptoWalletPage() {
  return (
    <div className="crypto-wallet-page">
      <Back />

      <section className="logo-section">
        <img
          src="src\images\logo.png"
          alt="logo"
          className="logo-section__name"
        />
        <img
          src="src\images\Ceratops_logo.svg"
          alt="Ceratops Logo"
          className="logo-section__dynozaur"
        />

        <h1 className="logo-section__title">
          Ceratops{" "}
          <span className="logo-section__wallet-text">CryptoWallet</span>
        </h1>
        <p className="logo-section__subtitle">Web Bunny – May 2024</p>
      </section>
      <Overview
        imageSrc={imageSrc}
        role={role}
        roleDescription={roleDescription}
        team={team}
        timeline={timeline}
        status={status}
        overview={overview}
      />

      <AsideNav sections={sections} />
    </div>
  );
}
