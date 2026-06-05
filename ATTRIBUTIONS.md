This Figma Make file includes components from [shadcn/ui](https://ui.shadcn.com/) used under [MIT license](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md).

This Figma Make file includes photos from [Unsplash](https://unsplash.com) used under [license](https://unsplash.com/license).











import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  User,
  Mail,
  Phone,
  FileText,
  Send,
  CheckCircle,
  AlertCircle,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  projectDetails: string;
};

type SubmitState = "idle" | "loading" | "success" | "error";

export default function App() {
  const [submitState, setSubmitState] =
    useState<SubmitState>("idle");
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm<FormData>({ mode: "onTouched" });

  const onSubmit = async (data: FormData) => {
    setSubmitState("loading");
    setServerMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (res.ok) {
        setSubmitState("success");
        setServerMessage(json.message);
        reset();
      } else {
        setSubmitState("error");
        setServerMessage(
          json.error ||
            "Something went wrong. Please try again.",
        );
      }
    } catch {
      setSubmitState("error");
      setServerMessage(
        "Unable to connect to the server. Please try again later.",
      );
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-background"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Top bar */}
      <header className="border-b border-border bg-card px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded bg-foreground" />
            <span
              className="text-lg font-semibold text-foreground"
              style={{
                fontFamily: "'DM Serif Display', serif",
              }}
            >
              Studio
            </span>
          </div>
          <nav className="hidden gap-8 sm:flex">
            {["Work", "Services", "About", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item}
                </a>
              ),
            )}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Page heading */}
        <div className="mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
            Get In Touch
          </p>
          <h1
            className="text-4xl font-normal text-foreground sm:text-5xl"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Let&apos;s build something
            <br />
            <em>great together.</em>
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left info panel */}
          <aside className="lg:col-span-2">
            <div className="sticky top-8 rounded-xl bg-foreground p-8 text-primary-foreground">
              <h2
                className="mb-6 text-2xl font-normal"
                style={{
                  fontFamily: "'DM Serif Display', serif",
                }}
              >
                Contact Details
              </h2>

              <div className="space-y-5">
                <InfoRow
                  icon={<Mail className="h-4 w-4" />}
                  label="Email"
                >
                  akshayjejurkar18@gmail.com
                </InfoRow>
                <InfoRow
                  icon={<Phone className="h-4 w-4" />}
                  label="Phone"
                >
                  Available on request
                </InfoRow>
                <InfoRow
                  icon={<MapPin className="h-4 w-4" />}
                  label="Location"
                >
                  India
                </InfoRow>
                <InfoRow
                  icon={<Clock className="h-4 w-4" />}
                  label="Response time"
                >
                  Within 24 hours
                </InfoRow>
              </div>

              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-sm leading-relaxed text-white/60">
                  Whether you have a clear project brief or just
                  an idea — we&apos;d love to hear from you.
                  Tell us what you&apos;re working on and
                  we&apos;ll get back to you promptly.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-accent">
                <span>Fill in the form</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </aside>

          {/* Right form panel */}
          <section className="lg:col-span-3">
            <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
              {submitState === "success" ? (
                <SuccessState
                  message={serverMessage}
                  onReset={() => setSubmitState("idle")}
                />
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-6"
                >
                  <h2
                    className="text-xl font-normal text-foreground"
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                    }}
                  >
                    Send a Message
                  </h2>

                  {/* Name */}
                  <Field
                    label="Full Name"
                    icon={<User className="h-4 w-4" />}
                    error={errors.name?.message}
                    touched={touchedFields.name}
                  >
                    <input
                      type="text"
                      placeholder="Akshay Jejurkar"
                      className={inputClass(errors.name)}
                      {...register("name", {
                        required:
                          "Please enter your full name.",
                        minLength: {
                          value: 2,
                          message:
                            "Name must be at least 2 characters.",
                        },
                        pattern: {
                          value: /^[a-zA-Z\s'-]+$/,
                          message:
                            "Name can only contain letters, spaces, hyphens, or apostrophes.",
                        },
                      })}
                    />
                  </Field>

                  {/* Email */}
                  <Field
                    label="Email Address"
                    icon={<Mail className="h-4 w-4" />}
                    error={errors.email?.message}
                    touched={touchedFields.email}
                  >
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className={inputClass(errors.email)}
                      {...register("email", {
                        required:
                          "Please enter your email address.",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message:
                            "Please enter a valid email address.",
                        },
                      })}
                    />
                  </Field>

                  {/* Phone */}
                  <Field
                    label="Phone Number"
                    icon={<Phone className="h-4 w-4" />}
                    error={errors.phone?.message}
                    touched={touchedFields.phone}
                  >
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className={inputClass(errors.phone)}
                      {...register("phone", {
                        required:
                          "Please enter your phone number.",
                        pattern: {
                          value: /^[+]?[\d\s\-()]{7,15}$/,
                          message:
                            "Please enter a valid phone number (7–15 digits).",
                        },
                      })}
                    />
                  </Field>

                  {/* Project Details */}
                  <Field
                    label="Project Details"
                    icon={<FileText className="h-4 w-4" />}
                    error={errors.projectDetails?.message}
                    touched={touchedFields.projectDetails}
                  >
                    <textarea
                      rows={5}
                      placeholder="Describe your project — what you need, your timeline, budget, and any other relevant details…"
                      className={`${inputClass(errors.projectDetails)} resize-none`}
                      {...register("projectDetails", {
                        required:
                          "Please describe your project.",
                        minLength: {
                          value: 30,
                          message:
                            "Please provide at least 30 characters so we can understand your project.",
                        },
                        maxLength: {
                          value: 2000,
                          message:
                            "Project details cannot exceed 2000 characters.",
                        },
                      })}
                    />
                  </Field>

                  {/* Server error */}
                  {submitState === "error" && serverMessage && (
                    <div className="flex items-start gap-3 rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-3">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      <p className="text-sm text-destructive">
                        {serverMessage}
                      </p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitState === "loading"}
                    className="group flex w-full items-center justify-center gap-2 rounded-lg bg-foreground px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitState === "loading" ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-muted-foreground">
                    We&apos;ll reply to your email within 24
                    hours.
                  </p>
                </form>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function inputClass(error: unknown) {
  return [
    "w-full rounded-lg border bg-input-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground",
    "outline-none transition-all duration-150",
    "focus:border-accent focus:ring-2 focus:ring-accent/20",
    error
      ? "border-destructive focus:border-destructive focus:ring-destructive/20"
      : "border-border",
  ].join(" ");
}

type FieldProps = {
  label: string;
  icon: React.ReactNode;
  error?: string;
  touched?: boolean;
  children: React.ReactNode;
};

function Field({
  label,
  icon,
  error,
  touched,
  children,
}: FieldProps) {
  return (
    <div className="space-y-1.5">
      <label className="flex items-center gap-1.5 text-sm font-medium text-foreground">
        <span className="text-accent">{icon}</span>
        {label}
        <span className="text-destructive">*</span>
      </label>
      {children}
      {touched && error && (
        <p className="flex items-center gap-1.5 text-xs text-destructive">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

type InfoRowProps = {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
};

function InfoRow({ icon, label, children }: InfoRowProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white/70">
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-white/40">
          {label}
        </p>
        <p className="mt-0.5 text-sm text-white/80">
          {children}
        </p>
      </div>
    </div>
  );
}

function SuccessState({
  message,
  onReset,
}: {
  message: string;
  onReset: () => void;
}) {
  return (
    <div className="flex flex-col items-center py-12 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
        <CheckCircle className="h-8 w-8 text-green-500" />
      </div>
      <h3
        className="mb-2 text-2xl font-normal text-foreground"
        style={{ fontFamily: "'DM Serif Display', serif" }}
      >
        Message Sent!
      </h3>
      <p className="mb-8 max-w-sm text-sm text-muted-foreground">
        {message ||
          "Thank you for reaching out. We'll get back to you within 24 hours."}
      </p>
      <button
        onClick={onReset}
        className="rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
      >
        Send Another Message
      </button>
    </div>
  );
}