import { useState } from 'react';
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
  ArrowRight,} from 'lucide-react';
import { Link } from 'react-router';
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  phone: string;
  projectDetails: string;
};

type SubmitState = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  // const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   alert('Thank you for your interest! We will contact you soon.');
  //   setFormData({ name: '', email: '', phone: '', message: '' });
  // };


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
    // <div className="min-h-screen bg-background">
    //   <section className="relative py-32 bg-gradient-to-br from-primary to-primary/90 text-white">
    //     <div className="max-w-7xl mx-auto px-6">
    //       <div className="max-w-3xl">
    //         <div className="flex items-center gap-2 mb-4 text-accent text-sm md:text-base">
    //           <Link to="/" className="hover:underline">Home</Link>
    //           <span>/</span>
    //           <span>Contact Us</span>
    //         </div>
    //         <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Contact Us</h1>
    //         <p className="text-lg md:text-xl text-white/90 leading-relaxed">
    //           Ready to start your project! Get in touch with us today for a free consultation.
    //         </p>
    //       </div>
    //     </div>
    //   </section>

    //   <section className="py-24">
    //     <div className="max-w-7xl mx-auto px-6">
    //       <div className="grid md:grid-cols-2 gap-12">
    //         <div className="bg-card p-8 md:p-12 rounded-2xl shadow-xl">
    //           <h3 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h3>
    //           <form onSubmit={handleSubmit} className="space-y-6">
    //             <div className="grid md:grid-cols-2 gap-6">
    //               <div>
    //                 <label className="block text-sm font-semibold text-foreground mb-2">Your Name</label>
    //                 <input
    //                   type="text"
    //                   required
    //                   value={formData.name}
    //                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    //                   className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
    //                   placeholder="Enter your name"
    //                 />
    //               </div>
    //               <div>
    //                 <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
    //                 <input
    //                   type="email"
    //                   required
    //                   value={formData.email}
    //                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    //                   className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
    //                   placeholder="Enter your email"
    //                 />
    //               </div>
    //             </div>

    //             <div>
    //               <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
    //               <input
    //                 type="tel"
    //                 required
    //                 value={formData.phone}
    //                 onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
    //                 className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
    //                 placeholder="Enter your phone number"
    //               />
    //             </div>

    //             <div>
    //               <label className="block text-sm font-semibold text-foreground mb-2">Project Details</label>
    //               <textarea
    //                 required
    //                 value={formData.message}
    //                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
    //                 rows={5}
    //                 className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-none"
    //                 placeholder="Tell us about your painting project..."
    //               />
    //             </div>

    //             <button
    //               type="submit"
    //               className="w-full bg-accent text-accent-foreground py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg text-lg"
    //             >
    //               Send Message
    //             </button>
    //           </form>
    //         </div>

    //         <div className="space-y-8">
    //           <div className="bg-card p-8 rounded-2xl shadow-lg">
    //             <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
    //             <div className="space-y-6">
    //               <div className="flex items-start gap-4">
    //                 <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
    //                   <Phone className="w-6 h-6 text-accent" />
    //                 </div>
    //                 <div>
    //                   <h4 className="font-bold text-primary mb-1">Phone</h4>
    //                   <a href="tel:7745871308" className="text-muted-foreground hover:text-accent transition-colors">
    //                     +91 7745871308 
    //                   </a>
    //                 </div>
    //               </div>

    //               <div className="flex items-start gap-4">
    //                 <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
    //                   <Mail className="w-6 h-6 text-accent" />
    //                 </div>
    //                 <div>
    //                   <h4 className="font-bold text-primary mb-1">Email</h4>
    //                   <a href="mailto:sanghapalpandit@gmail.com" className="text-muted-foreground hover:text-accent transition-colors break-all">
    //                     sanghapalpandit@gmail.com
    //                   </a>
    //                 </div>
    //               </div>

    //               <div className="flex items-start gap-4">
    //                 <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
    //                   <MapPin className="w-6 h-6 text-accent" />
    //                 </div>
    //                 <div>
    //                   <h4 className="font-bold text-primary mb-1">Address</h4>
    //                   <p className="text-muted-foreground">
    //                     B 15 sai shradha colony rajwade nagar kalewadi,<br />
    //                     pimpri chinchvad Rojas schoo! pune, Maharashtra, 411017.<br />
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="bg-primary text-white p-8 rounded-2xl">
    //             <h3 className="text-2xl font-bold mb-4">Schedule Free Consultation</h3>
    //             <p className="text-white/90 mb-6 leading-relaxed">
    //               Call us today to schedule a free onsite consultation. Our experts will visit your property and provide personalized design & color assistance.
    //             </p>
    //             <a
    //               href="tel:7745871308"
    //               className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
    //             >
    //               Call Now: +91 7745871308
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>



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


