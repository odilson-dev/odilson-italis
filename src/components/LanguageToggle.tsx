import { useLocale } from "../i18n/LocaleContext";

const LanguageToggle = () => {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className="flex items-center rounded-lg border border-white/10 p-0.5 text-xs font-medium"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`px-2.5 py-1.5 rounded-md transition-colors duration-200 ${
          locale === "en"
            ? "bg-white text-black"
            : "text-white-50 hover:text-white"
        }`}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale("fr")}
        className={`px-2.5 py-1.5 rounded-md transition-colors duration-200 ${
          locale === "fr"
            ? "bg-white text-black"
            : "text-white-50 hover:text-white"
        }`}
        aria-pressed={locale === "fr"}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageToggle;
