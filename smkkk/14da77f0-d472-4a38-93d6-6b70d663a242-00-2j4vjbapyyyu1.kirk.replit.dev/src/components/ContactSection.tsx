import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ContactSection.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f91473b9"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/components/ContactSection.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import { motion } from "/@fs/home/runner/workspace/node_modules/.vite/deps/framer-motion.js?v=3cc6b24e";
import { useForm } from "/@fs/home/runner/workspace/node_modules/.vite/deps/react-hook-form.js?v=a6038cab";
import { z } from "/@fs/home/runner/workspace/node_modules/.vite/deps/zod.js?v=cae20c18";
import { zodResolver } from "/@fs/home/runner/workspace/node_modules/.vite/deps/@hookform_resolvers_zod.js?v=7a2bec6c";
import { useMutation } from "/@fs/home/runner/workspace/node_modules/.vite/deps/@tanstack_react-query.js?v=824f4d2b";
import { apiRequest } from "/src/lib/queryClient.ts";
import { SectionHeading } from "/src/components/ui/section-heading.tsx";
import { fadeIn } from "/src/lib/framerAnimations.ts";
import { useToast } from "/src/hooks/use-toast.ts";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "/src/components/ui/form.tsx";
import { Input } from "/src/components/ui/input.tsx";
import { Textarea } from "/src/components/ui/textarea.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "/src/components/ui/select.tsx";
import { MagneticButton } from "/src/components/ui/magnetic-button.tsx";
import { resumeData } from "/src/lib/utils.ts";
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(1, { message: "Please select a subject" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});
export const ContactSection = () => {
  _s();
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });
  const mutation = useMutation({
    mutationFn: (data) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5e3
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
        duration: 5e3
      });
    }
  });
  const onSubmit = (data) => {
    mutation.mutate(data);
  };
  return /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/components/ContactSection.tsx:71:4", "data-component-name": "section", id: "contact", className: "py-20 bg-gradient-dark relative", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/ContactSection.tsx:72:6", "data-component-name": "div", className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxDEV(
      SectionHeading,
      {
        "data-replit-metadata": "client/src/components/ContactSection.tsx:73:8",
        "data-component-name": "SectionHeading",
        subtitle: "Get In Touch",
        title: "Connect With Me",
        accentedWord: " With Me"
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
        lineNumber: 73,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/ContactSection.tsx:79:8", "data-component-name": "div", className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-replit-metadata": "client/src/components/ContactSection.tsx:81:10",
          "data-component-name": "motion.div",
          className: "glass p-8 rounded-sm",
          variants: fadeIn("right", 0.2),
          initial: "hidden",
          whileInView: "show",
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsxDEV("h4", { "data-replit-metadata": "client/src/components/ContactSection.tsx:88:12", "data-component-name": "h4", className: "font-playfair text-2xl font-bold mb-6", children: "Send a Message" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
              lineNumber: 88,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(Form, { "data-replit-metadata": "client/src/components/ContactSection.tsx:90:12", "data-component-name": "Form", ...form, children: /* @__PURE__ */ jsxDEV("form", { "data-replit-metadata": "client/src/components/ContactSection.tsx:91:14", "data-component-name": "form", onSubmit: form.handleSubmit(onSubmit), className: "space-y-6", children: [
              /* @__PURE__ */ jsxDEV(
                FormField,
                {
                  "data-replit-metadata": "client/src/components/ContactSection.tsx:92:16",
                  "data-component-name": "FormField",
                  control: form.control,
                  name: "name",
                  render: ({ field }) => /* @__PURE__ */ jsxDEV(FormItem, { "data-replit-metadata": "client/src/components/ContactSection.tsx:96:18", "data-component-name": "FormItem", children: [
                    /* @__PURE__ */ jsxDEV(FormLabel, { "data-replit-metadata": "client/src/components/ContactSection.tsx:97:22", "data-component-name": "FormLabel", className: "text-ivory font-inter text-sm", children: "Name" }, void 0, false, {
                      fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                      lineNumber: 97,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV(FormControl, { "data-replit-metadata": "client/src/components/ContactSection.tsx:98:22", "data-component-name": "FormControl", children: /* @__PURE__ */ jsxDEV(
                      Input,
                      {
                        "data-replit-metadata": "client/src/components/ContactSection.tsx:99:24",
                        "data-component-name": "Input",
                        placeholder: "Your name",
                        className: "bg-white/5 border border-white/10 text-ivory font-inter focus-visible:ring-deep-gold",
                        ...field
                      },
                      void 0,
                      false,
                      {
                        fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                        lineNumber: 99,
                        columnNumber: 25
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                      lineNumber: 98,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV(FormMessage, { "data-replit-metadata": "client/src/components/ContactSection.tsx:105:22", "data-component-name": "FormMessage" }, void 0, false, {
                      fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                      lineNumber: 105,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                    lineNumber: 96,
                    columnNumber: 19
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                  lineNumber: 92,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                FormField,
                {
                  "data-replit-metadata": "client/src/components/ContactSection.tsx:110:16",
                  "data-component-name": "FormField",
                  control: form.control,
                  name: "email",
                  render: ({ field }) => /* @__PURE__ */ jsxDEV(FormItem, { "data-replit-metadata": "client/src/components/ContactSection.tsx:114:18", "data-component-name": "FormItem", children: [
                    /* @__PURE__ */ jsxDEV(FormLabel, { "data-replit-metadata": "client/src/components/ContactSection.tsx:115:22", "data-component-name": "FormLabel", className: "text-ivory font-inter text-sm", children: "Email" }, void 0, false, {
                      fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                      lineNumber: 115,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV(FormControl, { "data-replit-metadata": "client/src/components/ContactSection.tsx:116:22", "data-component-name": "FormControl", children: /* @__PURE__ */ jsxDEV(
                      Input,
                      {
                        "data-replit-metadata": "client/src/components/ContactSection.tsx:117:24",
                        "data-component-name": "Input",
                        placeholder: "Your email address",
                        className: "bg-white/5 border border-white/10 text-ivory font-inter focus-visible:ring-deep-gold",
                        ...field
                      },
                      void 0,
                      false,
                      {
                        fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                        lineNumber: 117,
                        columnNumber: 25
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                      lineNumber: 116,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV(FormMessage, { "data-replit-metadata": "client/src/components/ContactSection.tsx:123:22", "data-component-name": "FormMessage" }, void 0, false, {
                      fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                      lineNumber: 123,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                    lineNumber: 114,
                    columnNumber: 19
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                  lineNumber: 110,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                FormField,
                {
                  "data-replit-metadata": "client/src/components/ContactSection.tsx:128:16",
                  "data-component-name": "FormField",
                  control: form.control,
                  name: "subject",
                  render: ({ field }) => /* @__PURE__ */ jsxDEV(FormItem, { "data-replit-metadata": "client/src/components/ContactSection.tsx:132:18", "data-component-name": "FormItem", children: [
                    /* @__PURE__ */ jsxDEV(FormLabel, { "data-replit-metadata": "client/src/components/ContactSection.tsx:133:22", "data-component-name": "FormLabel", className: "text-ivory font-inter text-sm", children: "Subject" }, void 0, false, {
                      fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                      lineNumber: 133,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV(
                      Select,
                      {
                        "data-replit-metadata": "client/src/components/ContactSection.tsx:134:22",
                        "data-component-name": "Select",
                        onValueChange: field.onChange,
                        defaultValue: field.value,
                        children: [
                          /* @__PURE__ */ jsxDEV(FormControl, { "data-replit-metadata": "client/src/components/ContactSection.tsx:138:24", "data-component-name": "FormControl", children: /* @__PURE__ */ jsxDEV(SelectTrigger, { "data-replit-metadata": "client/src/components/ContactSection.tsx:139:26", "data-component-name": "SelectTrigger", className: "bg-white/5 border border-white/10 text-ivory font-inter focus:ring-deep-gold", children: /* @__PURE__ */ jsxDEV(SelectValue, { "data-replit-metadata": "client/src/components/ContactSection.tsx:140:28", "data-component-name": "SelectValue", placeholder: "Select an option" }, void 0, false, {
                            fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                            lineNumber: 140,
                            columnNumber: 29
                          }, this) }, void 0, false, {
                            fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                            lineNumber: 139,
                            columnNumber: 27
                          }, this) }, void 0, false, {
                            fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                            lineNumber: 138,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ jsxDEV(SelectContent, { "data-replit-metadata": "client/src/components/ContactSection.tsx:143:24", "data-component-name": "SelectContent", className: "bg-charcoal border border-white/10", children: [
                            /* @__PURE__ */ jsxDEV(SelectItem, { "data-replit-metadata": "client/src/components/ContactSection.tsx:144:26", "data-component-name": "SelectItem", value: "coaching", children: "Coaching Inquiry" }, void 0, false, {
                              fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                              lineNumber: 144,
                              columnNumber: 27
                            }, this),
                            /* @__PURE__ */ jsxDEV(SelectItem, { "data-replit-metadata": "client/src/components/ContactSection.tsx:145:26", "data-component-name": "SelectItem", value: "sponsorship", children: "Sponsorship Opportunity" }, void 0, false, {
                              fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                              lineNumber: 145,
                              columnNumber: 27
                            }, this),
                            /* @__PURE__ */ jsxDEV(SelectItem, { "data-replit-metadata": "client/src/components/ContactSection.tsx:146:26", "data-component-name": "SelectItem", value: "event", children: "Event Invitation" }, void 0, false, {
                              fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                              lineNumber: 146,
                              columnNumber: 27
                            }, this),
                            /* @__PURE__ */ jsxDEV(SelectItem, { "data-replit-metadata": "client/src/components/ContactSection.tsx:147:26", "data-component-name": "SelectItem", value: "media", children: "Media Request" }, void 0, false, {
                              fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                              lineNumber: 147,
                              columnNumber: 27
                            }, this),
                            /* @__PURE__ */ jsxDEV(SelectItem, { "data-replit-metadata": "client/src/components/ContactSection.tsx:148:26", "data-component-name": "SelectItem", value: "other", children: "Other" }, void 0, false, {
                              fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                              lineNumber: 148,
                              columnNumber: 27
                            }, this)
                          ] }, void 0, true, {
                            fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                            lineNumber: 143,
                            columnNumber: 25
                          }, this)
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                        lineNumber: 134,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV(FormMessage, { "data-replit-metadata": "client/src/components/ContactSection.tsx:151:22", "data-component-name": "FormMessage" }, void 0, false, {
                      fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                      lineNumber: 151,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                    lineNumber: 132,
                    columnNumber: 19
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                  lineNumber: 128,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                FormField,
                {
                  "data-replit-metadata": "client/src/components/ContactSection.tsx:156:16",
                  "data-component-name": "FormField",
                  control: form.control,
                  name: "message",
                  render: ({ field }) => /* @__PURE__ */ jsxDEV(FormItem, { "data-replit-metadata": "client/src/components/ContactSection.tsx:160:18", "data-component-name": "FormItem", children: [
                    /* @__PURE__ */ jsxDEV(FormLabel, { "data-replit-metadata": "client/src/components/ContactSection.tsx:161:22", "data-component-name": "FormLabel", className: "text-ivory font-inter text-sm", children: "Message" }, void 0, false, {
                      fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                      lineNumber: 161,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV(FormControl, { "data-replit-metadata": "client/src/components/ContactSection.tsx:162:22", "data-component-name": "FormControl", children: /* @__PURE__ */ jsxDEV(
                      Textarea,
                      {
                        "data-replit-metadata": "client/src/components/ContactSection.tsx:163:24",
                        "data-component-name": "Textarea",
                        placeholder: "Your message",
                        className: "bg-white/5 border border-white/10 text-ivory font-inter focus-visible:ring-deep-gold resize-none",
                        rows: 5,
                        ...field
                      },
                      void 0,
                      false,
                      {
                        fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                        lineNumber: 163,
                        columnNumber: 25
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                      lineNumber: 162,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV(FormMessage, { "data-replit-metadata": "client/src/components/ContactSection.tsx:170:22", "data-component-name": "FormMessage" }, void 0, false, {
                      fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                      lineNumber: 170,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                    lineNumber: 160,
                    columnNumber: 19
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                  lineNumber: 156,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                Button,
                {
                  "data-replit-metadata": "client/src/components/ContactSection.tsx:175:16",
                  "data-component-name": "Button",
                  type: "submit",
                  className: "w-full bg-deep-gold text-black font-inter uppercase tracking-wider py-6 rounded-sm hover:bg-bronze transition-colors",
                  disabled: mutation.isPending,
                  children: mutation.isPending ? "Sending..." : "Send Message"
                },
                void 0,
                false,
                {
                  fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                  lineNumber: 175,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
              lineNumber: 91,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
              lineNumber: 90,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
          lineNumber: 81,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-replit-metadata": "client/src/components/ContactSection.tsx:187:10",
          "data-component-name": "motion.div",
          variants: fadeIn("left", 0.4),
          initial: "hidden",
          whileInView: "show",
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsxDEV("h4", { "data-replit-metadata": "client/src/components/ContactSection.tsx:193:12", "data-component-name": "h4", className: "font-playfair text-2xl font-bold mb-6", children: "Contact Information" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
              lineNumber: 193,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/ContactSection.tsx:195:12", "data-component-name": "div", className: "space-y-8", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/ContactSection.tsx:196:14", "data-component-name": "div", className: "flex items-start", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/ContactSection.tsx:197:16", "data-component-name": "div", className: "w-12 h-12 rounded-full bg-deep-gold/20 flex items-center justify-center mr-4", children: /* @__PURE__ */ jsxDEV("i", { "data-replit-metadata": "client/src/components/ContactSection.tsx:198:18", "data-component-name": "i", className: "fas fa-envelope text-deep-gold" }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                  lineNumber: 198,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                  lineNumber: 197,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/ContactSection.tsx:200:16", "data-component-name": "div", children: [
                  /* @__PURE__ */ jsxDEV("h5", { "data-replit-metadata": "client/src/components/ContactSection.tsx:201:18", "data-component-name": "h5", className: "font-playfair font-bold", children: "Email" }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                    lineNumber: 201,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/ContactSection.tsx:202:18", "data-component-name": "p", className: "text-ivory/80 font-inter", children: resumeData.email }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                    lineNumber: 202,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                  lineNumber: 200,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                lineNumber: 196,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/ContactSection.tsx:206:14", "data-component-name": "div", className: "flex items-start", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/ContactSection.tsx:207:16", "data-component-name": "div", className: "w-12 h-12 rounded-full bg-deep-gold/20 flex items-center justify-center mr-4", children: /* @__PURE__ */ jsxDEV("i", { "data-replit-metadata": "client/src/components/ContactSection.tsx:208:18", "data-component-name": "i", className: "fas fa-phone text-deep-gold" }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                  lineNumber: 208,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                  lineNumber: 207,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/ContactSection.tsx:210:16", "data-component-name": "div", children: [
                  /* @__PURE__ */ jsxDEV("h5", { "data-replit-metadata": "client/src/components/ContactSection.tsx:211:18", "data-component-name": "h5", className: "font-playfair font-bold", children: "Phone" }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                    lineNumber: 211,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/ContactSection.tsx:212:18", "data-component-name": "p", className: "text-ivory/80 font-inter", children: [
                    "+91 ",
                    resumeData.phone
                  ] }, void 0, true, {
                    fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                    lineNumber: 212,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                  lineNumber: 210,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                lineNumber: 206,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/ContactSection.tsx:216:14", "data-component-name": "div", className: "flex items-start", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/ContactSection.tsx:217:16", "data-component-name": "div", className: "w-12 h-12 rounded-full bg-deep-gold/20 flex items-center justify-center mr-4", children: /* @__PURE__ */ jsxDEV("i", { "data-replit-metadata": "client/src/components/ContactSection.tsx:218:18", "data-component-name": "i", className: "fas fa-map-marker-alt text-deep-gold" }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                  lineNumber: 218,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                  lineNumber: 217,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/ContactSection.tsx:220:16", "data-component-name": "div", children: [
                  /* @__PURE__ */ jsxDEV("h5", { "data-replit-metadata": "client/src/components/ContactSection.tsx:221:18", "data-component-name": "h5", className: "font-playfair font-bold", children: "Nasr Polo Club" }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                    lineNumber: 221,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/ContactSection.tsx:222:18", "data-component-name": "p", className: "text-ivory/80 font-inter", children: "Janwada, Hyderabad, India" }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                    lineNumber: 222,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                  lineNumber: 220,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                lineNumber: 216,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
              lineNumber: 195,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/ContactSection.tsx:228:12", "data-component-name": "div", className: "mt-10", children: [
              /* @__PURE__ */ jsxDEV("h5", { "data-replit-metadata": "client/src/components/ContactSection.tsx:229:14", "data-component-name": "h5", className: "font-playfair text-xl font-bold mb-4", children: "Follow Me" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                lineNumber: 229,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/ContactSection.tsx:230:14", "data-component-name": "div", className: "flex space-x-4", children: [
                { icon: "fa-instagram", href: "#" },
                { icon: "fa-facebook-f", href: "#" },
                { icon: "fa-twitter", href: "#" },
                { icon: "fa-linkedin-in", href: "#" }
              ].map(
                (social, index) => /* @__PURE__ */ jsxDEV(MagneticButton, { "data-replit-metadata": "client/src/components/ContactSection.tsx:237:16", "data-component-name": "MagneticButton", children: /* @__PURE__ */ jsxDEV(
                  "a",
                  {
                    "data-replit-metadata": "client/src/components/ContactSection.tsx:238:20",
                    "data-component-name": "a",
                    href: social.href,
                    className: "w-12 h-12 rounded-full bg-deep-gold/20 flex items-center justify-center text-deep-gold hover:bg-deep-gold hover:text-black transition-colors",
                    children: /* @__PURE__ */ jsxDEV("i", { "data-replit-metadata": "client/src/components/ContactSection.tsx:242:22", "data-component-name": "i", className: `fab ${social.icon}` }, void 0, false, {
                      fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                      lineNumber: 242,
                      columnNumber: 23
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                    lineNumber: 238,
                    columnNumber: 21
                  },
                  this
                ) }, index, false, {
                  fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                  lineNumber: 237,
                  columnNumber: 17
                }, this)
              ) }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
                lineNumber: 230,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
              lineNumber: 228,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
          lineNumber: 187,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
      lineNumber: 79,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
    lineNumber: 72,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/runner/workspace/client/src/components/ContactSection.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
};
_s(ContactSection, "OWuNnT3RNeQK6G0wMoi2RIQbcqE=", false, function() {
  return [useToast, useForm, useMutation];
});
_c = ContactSection;
var _c;
$RefreshReg$(_c, "ContactSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/ContactSection.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/ContactSection.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QTtBQUFBLE1BNkRBO0FBQUEsU0F6S0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQTBLQTtBQUFBLE9BakxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FrTEEsS0FuTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQW9MQTtBQUVKO0FBQUU5QixHQWhPV0QsZ0JBQWM7QUFBQSxVQUNQekIsVUFHTFAsU0FXSUcsV0FBVztBQUFBO0FBQUE2RCxLQWZqQmhDO0FBQWMsSUFBQWdDO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJtb3Rpb24iLCJ1c2VGb3JtIiwieiIsInpvZFJlc29sdmVyIiwidXNlTXV0YXRpb24iLCJhcGlSZXF1ZXN0IiwiU2VjdGlvbkhlYWRpbmciLCJmYWRlSW4iLCJ1c2VUb2FzdCIsIkZvcm0iLCJGb3JtQ29udHJvbCIsIkZvcm1GaWVsZCIsIkZvcm1JdGVtIiwiRm9ybUxhYmVsIiwiRm9ybU1lc3NhZ2UiLCJJbnB1dCIsIlRleHRhcmVhIiwiQnV0dG9uIiwiU2VsZWN0IiwiU2VsZWN0Q29udGVudCIsIlNlbGVjdEl0ZW0iLCJTZWxlY3RUcmlnZ2VyIiwiU2VsZWN0VmFsdWUiLCJNYWduZXRpY0J1dHRvbiIsInJlc3VtZURhdGEiLCJjb250YWN0Rm9ybVNjaGVtYSIsIm9iamVjdCIsIm5hbWUiLCJzdHJpbmciLCJtaW4iLCJtZXNzYWdlIiwiZW1haWwiLCJzdWJqZWN0IiwiQ29udGFjdFNlY3Rpb24iLCJfcyIsInRvYXN0IiwiZm9ybSIsInJlc29sdmVyIiwiZGVmYXVsdFZhbHVlcyIsIm11dGF0aW9uIiwibXV0YXRpb25GbiIsImRhdGEiLCJvblN1Y2Nlc3MiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVyYXRpb24iLCJyZXNldCIsIm9uRXJyb3IiLCJlcnJvciIsInZhcmlhbnQiLCJvblN1Ym1pdCIsIm11dGF0ZSIsIm9uY2UiLCJoYW5kbGVTdWJtaXQiLCJjb250cm9sIiwiZmllbGQiLCJvbkNoYW5nZSIsInZhbHVlIiwiaXNQZW5kaW5nIiwicGhvbmUiLCJpY29uIiwiaHJlZiIsIm1hcCIsInNvY2lhbCIsImluZGV4IiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQ29udGFjdFNlY3Rpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5pbXBvcnQgeyB6b2RSZXNvbHZlciB9IGZyb20gXCJAaG9va2Zvcm0vcmVzb2x2ZXJzL3pvZFwiO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBhcGlSZXF1ZXN0IH0gZnJvbSBcIkAvbGliL3F1ZXJ5Q2xpZW50XCI7XG5pbXBvcnQgeyBTZWN0aW9uSGVhZGluZyB9IGZyb20gXCIuL3VpL3NlY3Rpb24taGVhZGluZ1wiO1xuaW1wb3J0IHsgZmFkZUluIH0gZnJvbSBcIkAvbGliL2ZyYW1lckFuaW1hdGlvbnNcIjtcbmltcG9ydCB7IHVzZVRvYXN0IH0gZnJvbSBcIkAvaG9va3MvdXNlLXRvYXN0XCI7XG5pbXBvcnQgeyBGb3JtLCBGb3JtQ29udHJvbCwgRm9ybUZpZWxkLCBGb3JtSXRlbSwgRm9ybUxhYmVsLCBGb3JtTWVzc2FnZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvZm9ybVwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCI7XG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGV4dGFyZWFcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBTZWxlY3QsIFNlbGVjdENvbnRlbnQsIFNlbGVjdEl0ZW0sIFNlbGVjdFRyaWdnZXIsIFNlbGVjdFZhbHVlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9zZWxlY3RcIjtcbmltcG9ydCB7IE1hZ25ldGljQnV0dG9uIH0gZnJvbSBcIi4vdWkvbWFnbmV0aWMtYnV0dG9uXCI7XG5pbXBvcnQgeyByZXN1bWVEYXRhIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbi8vIEZvcm0gc2NoZW1hXG5jb25zdCBjb250YWN0Rm9ybVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgbmFtZTogei5zdHJpbmcoKS5taW4oMiwgeyBtZXNzYWdlOiBcIk5hbWUgbXVzdCBiZSBhdCBsZWFzdCAyIGNoYXJhY3RlcnNcIiB9KSxcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoeyBtZXNzYWdlOiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3NcIiB9KSxcbiAgc3ViamVjdDogei5zdHJpbmcoKS5taW4oMSwgeyBtZXNzYWdlOiBcIlBsZWFzZSBzZWxlY3QgYSBzdWJqZWN0XCIgfSksXG4gIG1lc3NhZ2U6IHouc3RyaW5nKCkubWluKDEwLCB7IG1lc3NhZ2U6IFwiTWVzc2FnZSBtdXN0IGJlIGF0IGxlYXN0IDEwIGNoYXJhY3RlcnNcIiB9KSxcbn0pO1xuXG50eXBlIENvbnRhY3RGb3JtVmFsdWVzID0gei5pbmZlcjx0eXBlb2YgY29udGFjdEZvcm1TY2hlbWE+O1xuXG5leHBvcnQgY29uc3QgQ29udGFjdFNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHsgdG9hc3QgfSA9IHVzZVRvYXN0KCk7XG4gIFxuICAvLyBGb3JtIHNldHVwXG4gIGNvbnN0IGZvcm0gPSB1c2VGb3JtPENvbnRhY3RGb3JtVmFsdWVzPih7XG4gICAgcmVzb2x2ZXI6IHpvZFJlc29sdmVyKGNvbnRhY3RGb3JtU2NoZW1hKSxcbiAgICBkZWZhdWx0VmFsdWVzOiB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgZW1haWw6IFwiXCIsXG4gICAgICBzdWJqZWN0OiBcIlwiLFxuICAgICAgbWVzc2FnZTogXCJcIixcbiAgICB9LFxuICB9KTtcbiAgXG4gIC8vIEZvcm0gc3VibWlzc2lvblxuICBjb25zdCBtdXRhdGlvbiA9IHVzZU11dGF0aW9uKHtcbiAgICBtdXRhdGlvbkZuOiAoZGF0YTogQ29udGFjdEZvcm1WYWx1ZXMpID0+IHtcbiAgICAgIHJldHVybiBhcGlSZXF1ZXN0KFwiUE9TVFwiLCBcIi9hcGkvY29udGFjdFwiLCBkYXRhKTtcbiAgICB9LFxuICAgIG9uU3VjY2VzczogKCkgPT4ge1xuICAgICAgdG9hc3Qoe1xuICAgICAgICB0aXRsZTogXCJNZXNzYWdlIHNlbnQgc3VjY2Vzc2Z1bGx5IVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGFuayB5b3UgZm9yIHJlYWNoaW5nIG91dC4gSSdsbCBnZXQgYmFjayB0byB5b3Ugc29vbi5cIixcbiAgICAgICAgZHVyYXRpb246IDUwMDAsXG4gICAgICB9KTtcbiAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICB9LFxuICAgIG9uRXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgdG9hc3Qoe1xuICAgICAgICB0aXRsZTogXCJFcnJvciBzZW5kaW5nIG1lc3NhZ2VcIixcbiAgICAgICAgZGVzY3JpcHRpb246IGVycm9yLm1lc3NhZ2UgfHwgXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgICAgICB2YXJpYW50OiBcImRlc3RydWN0aXZlXCIsXG4gICAgICAgIGR1cmF0aW9uOiA1MDAwLFxuICAgICAgfSk7XG4gICAgfSxcbiAgfSk7XG4gIFxuICBjb25zdCBvblN1Ym1pdCA9IChkYXRhOiBDb250YWN0Rm9ybVZhbHVlcykgPT4ge1xuICAgIG11dGF0aW9uLm11dGF0ZShkYXRhKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwiY29udGFjdFwiIGNsYXNzTmFtZT1cInB5LTIwIGJnLWdyYWRpZW50LWRhcmsgcmVsYXRpdmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICA8U2VjdGlvbkhlYWRpbmcgXG4gICAgICAgICAgc3VidGl0bGU9XCJHZXQgSW4gVG91Y2hcIlxuICAgICAgICAgIHRpdGxlPVwiQ29ubmVjdCBXaXRoIE1lXCIgXG4gICAgICAgICAgYWNjZW50ZWRXb3JkPVwiIFdpdGggTWVcIlxuICAgICAgICAvPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC0xMiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICB7LyogQ29udGFjdCBmb3JtICovfVxuICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2xhc3MgcC04IHJvdW5kZWQtc21cIlxuICAgICAgICAgICAgdmFyaWFudHM9e2ZhZGVJbihcInJpZ2h0XCIsIDAuMil9XG4gICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICAgIHdoaWxlSW5WaWV3PVwic2hvd1wiXG4gICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtcGxheWZhaXIgdGV4dC0yeGwgZm9udC1ib2xkIG1iLTZcIj5TZW5kIGEgTWVzc2FnZTwvaDQ+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxGb3JtIHsuLi5mb3JtfT5cbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm0uaGFuZGxlU3VibWl0KG9uU3VibWl0KX0gY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICAgICAgY29udHJvbD17Zm9ybS5jb250cm9sfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGNsYXNzTmFtZT1cInRleHQtaXZvcnkgZm9udC1pbnRlciB0ZXh0LXNtXCI+TmFtZTwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlLzUgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCB0ZXh0LWl2b3J5IGZvbnQtaW50ZXIgZm9jdXMtdmlzaWJsZTpyaW5nLWRlZXAtZ29sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybU1lc3NhZ2UgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgICAgICBjb250cm9sPXtmb3JtLmNvbnRyb2x9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGNsYXNzTmFtZT1cInRleHQtaXZvcnkgZm9udC1pbnRlciB0ZXh0LXNtXCI+RW1haWw8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsIGFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZS81IGJvcmRlciBib3JkZXItd2hpdGUvMTAgdGV4dC1pdm9yeSBmb250LWludGVyIGZvY3VzLXZpc2libGU6cmluZy1kZWVwLWdvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1NZXNzYWdlIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICAgICAgY29udHJvbD17Zm9ybS5jb250cm9sfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cInN1YmplY3RcIlxuICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGNsYXNzTmFtZT1cInRleHQtaXZvcnkgZm9udC1pbnRlciB0ZXh0LXNtXCI+U3ViamVjdDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgXG4gICAgICAgICAgICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlPXtmaWVsZC5vbkNoYW5nZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2ZpZWxkLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFRyaWdnZXIgY2xhc3NOYW1lPVwiYmctd2hpdGUvNSBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHRleHQtaXZvcnkgZm9udC1pbnRlciBmb2N1czpyaW5nLWRlZXAtZ29sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RWYWx1ZSBwbGFjZWhvbGRlcj1cIlNlbGVjdCBhbiBvcHRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdFRyaWdnZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdENvbnRlbnQgY2xhc3NOYW1lPVwiYmctY2hhcmNvYWwgYm9yZGVyIGJvcmRlci13aGl0ZS8xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSB2YWx1ZT1cImNvYWNoaW5nXCI+Q29hY2hpbmcgSW5xdWlyeTwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gdmFsdWU9XCJzcG9uc29yc2hpcFwiPlNwb25zb3JzaGlwIE9wcG9ydHVuaXR5PC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSB2YWx1ZT1cImV2ZW50XCI+RXZlbnQgSW52aXRhdGlvbjwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gdmFsdWU9XCJtZWRpYVwiPk1lZGlhIFJlcXVlc3Q8L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIHZhbHVlPVwib3RoZXJcIj5PdGhlcjwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Q29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybU1lc3NhZ2UgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgICAgICBjb250cm9sPXtmb3JtLmNvbnRyb2x9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWwgY2xhc3NOYW1lPVwidGV4dC1pdm9yeSBmb250LWludGVyIHRleHQtc21cIj5NZXNzYWdlPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUvNSBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHRleHQtaXZvcnkgZm9udC1pbnRlciBmb2N1cy12aXNpYmxlOnJpbmctZGVlcC1nb2xkIHJlc2l6ZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTWVzc2FnZSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWRlZXAtZ29sZCB0ZXh0LWJsYWNrIGZvbnQtaW50ZXIgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHB5LTYgcm91bmRlZC1zbSBob3ZlcjpiZy1icm9uemUgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e211dGF0aW9uLmlzUGVuZGluZ31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bXV0YXRpb24uaXNQZW5kaW5nID8gXCJTZW5kaW5nLi4uXCIgOiBcIlNlbmQgTWVzc2FnZVwifVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIHsvKiBDb250YWN0IGluZm9ybWF0aW9uICovfVxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICB2YXJpYW50cz17ZmFkZUluKFwibGVmdFwiLCAwLjQpfVxuICAgICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgICB3aGlsZUluVmlldz1cInNob3dcIlxuICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LXBsYXlmYWlyIHRleHQtMnhsIGZvbnQtYm9sZCBtYi02XCI+Q29udGFjdCBJbmZvcm1hdGlvbjwvaDQ+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS04XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHJvdW5kZWQtZnVsbCBiZy1kZWVwLWdvbGQvMjAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXItNFwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVudmVsb3BlIHRleHQtZGVlcC1nb2xkXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC1wbGF5ZmFpciBmb250LWJvbGRcIj5FbWFpbDwvaDU+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWl2b3J5LzgwIGZvbnQtaW50ZXJcIj57cmVzdW1lRGF0YS5lbWFpbH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgcm91bmRlZC1mdWxsIGJnLWRlZXAtZ29sZC8yMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtci00XCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGhvbmUgdGV4dC1kZWVwLWdvbGRcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXBsYXlmYWlyIGZvbnQtYm9sZFwiPlBob25lPC9oNT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtaXZvcnkvODAgZm9udC1pbnRlclwiPis5MSB7cmVzdW1lRGF0YS5waG9uZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgcm91bmRlZC1mdWxsIGJnLWRlZXAtZ29sZC8yMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtci00XCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbWFwLW1hcmtlci1hbHQgdGV4dC1kZWVwLWdvbGRcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXBsYXlmYWlyIGZvbnQtYm9sZFwiPk5hc3IgUG9sbyBDbHViPC9oNT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtaXZvcnkvODAgZm9udC1pbnRlclwiPkphbndhZGEsIEh5ZGVyYWJhZCwgSW5kaWE8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHsvKiBTb2NpYWwgbWVkaWEgbGlua3MgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwXCI+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXBsYXlmYWlyIHRleHQteGwgZm9udC1ib2xkIG1iLTRcIj5Gb2xsb3cgTWU8L2g1PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICAgIHsgaWNvbjogXCJmYS1pbnN0YWdyYW1cIiwgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgICAgICAgICAgIHsgaWNvbjogXCJmYS1mYWNlYm9vay1mXCIsIGhyZWY6IFwiI1wiIH0sXG4gICAgICAgICAgICAgICAgICB7IGljb246IFwiZmEtdHdpdHRlclwiLCBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgICAgICAgeyBpY29uOiBcImZhLWxpbmtlZGluLWluXCIsIGhyZWY6IFwiI1wiIH0sXG4gICAgICAgICAgICAgICAgXS5tYXAoKHNvY2lhbCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxNYWduZXRpY0J1dHRvbiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17c29jaWFsLmhyZWZ9IFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTIgaC0xMiByb3VuZGVkLWZ1bGwgYmctZGVlcC1nb2xkLzIwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtZGVlcC1nb2xkIGhvdmVyOmJnLWRlZXAtZ29sZCBob3Zlcjp0ZXh0LWJsYWNrIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGZhYiAke3NvY2lhbC5pY29ufWB9PjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9NYWduZXRpY0J1dHRvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9jbGllbnQvc3JjL2NvbXBvbmVudHMvQ29udGFjdFNlY3Rpb24udHN4In0=