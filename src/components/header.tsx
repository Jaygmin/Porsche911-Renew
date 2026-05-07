import { useState } from "react";
import Logo from "@/assets/Logo.svg";

type Lang = "KO" | "EN";

export default function Header() {
  const [lang, setLang] = useState<Lang>("EN");

  return (
    <header className="flex min-h-20 w-full items-center justify-center px-10 py-5">
      <div className="hidden sm:block sm:flex-1" />
      <img src={Logo} alt="Porsche911 Renew Page Logo" className="w-auto" />
      <div className="hidden flex-1 items-center justify-end gap-1 sm:flex">
        <button
          onClick={() => setLang("KO")}
          className="cursor-pointer text-sm font-medium transition-colors"
          style={{ color: lang === "KO" ? "#0c0c0c" : "#B6B6B6" }}
        >
          KO
        </button>
        /
        <button
          onClick={() => setLang("EN")}
          className="cursor-pointer text-sm font-medium transition-colors"
          style={{ color: lang === "EN" ? "#0c0c0c" : "#B6B6B6" }}
        >
          EN
        </button>
      </div>
    </header>
  );
}
