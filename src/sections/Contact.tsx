import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import { toast } from "sonner";
import TitleHeader from "../components/TitleHeader";
import { useLocale } from "../i18n/LocaleContext";

const Contact = () => {
  const { t } = useLocale();
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Odilson Italis",
          from_email: form.email,
          to_email: "italisodilsonwoodly@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);

          toast.success(t.contact.successTitle(form.name), {
            description: t.contact.successDescription,
            duration: 5000,
          });

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          toast.error(t.contact.errorMessage);
        }
      );
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title={t.contact.title} sub={t.contact.sub} />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">{t.contact.nameLabel}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">{t.contact.emailLabel}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">{t.contact.messageLabel}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t.contact.messagePlaceholder}
                    rows={5}
                    required
                  />
                </div>

                <button type="submit" disabled={loading}>
                  <div
                    className={`cta-button group ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? t.contact.sending : t.contact.send}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96 flex justify-center items-center">
            <div className="w-[80%] h-[80%]  hover:cursor-grab rounded-3xl overflow-hidden">
              <img
                className="block"
                src="/images/shooting-2.png"
                alt="shooting-2 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
