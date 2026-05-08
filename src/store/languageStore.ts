import { create } from "zustand";
import { persist } from "zustand/middleware";

type Lang = "KO" | "EN";

interface LangStore {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const useLangStore = create<LangStore>()(
  persist(
    (set) => ({
      lang: "EN",
      setLang: (lang) => set({ lang }),
    }),
    { name: "porsche-language" },
  ),
);
