import { useLocale } from "../i18n/LocaleContext";

const LanguageToggle = () => {
  const { locale, toggleLocale } = useLocale();
  const isFrench = locale === "fr";

  return (
    <button
      type="button"
      onClick={toggleLocale}
      title={isFrench ? "Switch to English" : "Passer en français"}
      aria-label={isFrench ? "Switch to English" : "Passer en français"}
      className="flex items-center justify-center cursor-pointer rounded-lg border border-white/10 p-2 text-lg leading-none transition-all duration-200 hover:bg-white/5 hover:scale-105"
    >
      <span aria-hidden="true">{isFrench ? "🇺🇸" : "🇫🇷"}</span>
    </button>
  );
};

export default LanguageToggle;
