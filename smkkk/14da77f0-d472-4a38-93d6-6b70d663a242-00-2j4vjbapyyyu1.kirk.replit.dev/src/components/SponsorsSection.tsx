import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/SponsorsSection.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f91473b9"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/components/SponsorsSection.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { motion } from "/@fs/home/runner/workspace/node_modules/.vite/deps/framer-motion.js?v=3cc6b24e";
import { SectionHeading } from "/src/components/ui/section-heading.tsx";
import { fadeIn } from "/src/lib/framerAnimations.ts";
import { testimonials, sponsors } from "/src/lib/utils.ts";
export const SponsorsSection = () => {
  return /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/components/SponsorsSection.tsx:8:4", "data-component-name": "section", id: "sponsors", className: "py-20 bg-black relative", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/SponsorsSection.tsx:9:6", "data-component-name": "div", className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxDEV(
      SectionHeading,
      {
        "data-replit-metadata": "client/src/components/SponsorsSection.tsx:10:8",
        "data-component-name": "SectionHeading",
        subtitle: "Proud Partnerships",
        title: "Sponsors & Collaborators",
        accentedWord: " Collaborators"
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/client/src/components/SponsorsSection.tsx",
        lineNumber: 10,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-replit-metadata": "client/src/components/SponsorsSection.tsx:17:8",
        "data-component-name": "motion.div",
        className: "mb-20 overflow-hidden",
        variants: fadeIn("up", 0.2),
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true },
        children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/SponsorsSection.tsx:24:10", "data-component-name": "div", className: "py-6 flex gap-8", children: /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            "data-replit-metadata": "client/src/components/SponsorsSection.tsx:25:12",
            "data-component-name": "motion.div",
            className: "flex gap-8 min-w-max",
            animate: {
              x: [0, -1920],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear"
                }
              }
            },
            children: [
              sponsors.map(
                (sponsor, index) => /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/SponsorsSection.tsx:41:14", "data-component-name": "div", className: "flex items-center justify-center min-w-[200px]", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/SponsorsSection.tsx:42:18", "data-component-name": "div", className: "w-32 h-16 bg-white/5 p-4 rounded-sm flex items-center justify-center hover:bg-white/10 transition-colors", children: /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/components/SponsorsSection.tsx:43:20", "data-component-name": "span", className: "text-deep-gold font-playfair text-xl", children: sponsor.name }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/SponsorsSection.tsx",
                  lineNumber: 43,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/SponsorsSection.tsx",
                  lineNumber: 42,
                  columnNumber: 19
                }, this) }, index, false, {
                  fileName: "/home/runner/workspace/client/src/components/SponsorsSection.tsx",
                  lineNumber: 41,
                  columnNumber: 15
                }, this)
              ),
              sponsors.map(
                (sponsor, index) => /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/SponsorsSection.tsx:50:14", "data-component-name": "div", className: "flex items-center justify-center min-w-[200px]", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/SponsorsSection.tsx:51:18", "data-component-name": "div", className: "w-32 h-16 bg-white/5 p-4 rounded-sm flex items-center justify-center hover:bg-white/10 transition-colors", children: /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/components/SponsorsSection.tsx:52:20", "data-component-name": "span", className: "text-deep-gold font-playfair text-xl", children: sponsor.name }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/SponsorsSection.tsx",
                  lineNumber: 52,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/SponsorsSection.tsx",
                  lineNumber: 51,
                  columnNumber: 19
                }, this) }, `duplicate-${index}`, false, {
                  fileName: "/home/runner/workspace/client/src/components/SponsorsSection.tsx",
                  lineNumber: 50,
                  columnNumber: 15
                }, this)
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "/home/runner/workspace/client/src/components/SponsorsSection.tsx",
            lineNumber: 25,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/components/SponsorsSection.tsx",
          lineNumber: 24,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/client/src/components/SponsorsSection.tsx",
        lineNumber: 17,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      motion.h4,
      {
        "data-replit-metadata": "client/src/components/SponsorsSection.tsx:61:8",
        "data-component-name": "motion.h4",
        className: "font-playfair text-2xl font-bold mb-8 text-center",
        variants: fadeIn("up", 0.3),
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true },
        children: "Testimonials"
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/client/src/components/SponsorsSection.tsx",
        lineNumber: 61,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/SponsorsSection.tsx:71:8", "data-component-name": "div", className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: testimonials.map(
      (testimonial, index) => /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-replit-metadata": "client/src/components/SponsorsSection.tsx:73:10",
          "data-component-name": "motion.div",
          className: "glass p-8 rounded-sm relative",
          variants: fadeIn("up", 0.4 + index * 0.1),
          initial: "hidden",
          whileInView: "show",
          viewport: { once: true },
          whileHover: { y: -10 },
          transition: { type: "spring", stiffness: 300 },
          children: [
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/SponsorsSection.tsx:83:14", "data-component-name": "div", className: "text-deep-gold text-6xl absolute -top-4 -left-2 opacity-20", children: '"' }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/SponsorsSection.tsx",
              lineNumber: 83,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/SponsorsSection.tsx:84:14", "data-component-name": "div", className: "relative z-10", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/SponsorsSection.tsx:85:16", "data-component-name": "p", className: "text-ivory/80 font-inter mb-6 italic", children: testimonial.text }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/components/SponsorsSection.tsx",
                lineNumber: 85,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/SponsorsSection.tsx:86:16", "data-component-name": "div", className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/SponsorsSection.tsx:87:18", "data-component-name": "div", className: "w-12 h-12 rounded-full bg-deep-gold/20 flex items-center justify-center mr-4", children: /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/components/SponsorsSection.tsx:88:20", "data-component-name": "span", className: "text-deep-gold font-playfair font-bold", children: testimonial.initials }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/SponsorsSection.tsx",
                  lineNumber: 88,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/SponsorsSection.tsx",
                  lineNumber: 87,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/SponsorsSection.tsx:90:18", "data-component-name": "div", children: [
                  /* @__PURE__ */ jsxDEV("h5", { "data-replit-metadata": "client/src/components/SponsorsSection.tsx:91:20", "data-component-name": "h5", className: "font-playfair font-bold", children: testimonial.name }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/components/SponsorsSection.tsx",
                    lineNumber: 91,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/SponsorsSection.tsx:92:20", "data-component-name": "p", className: "text-ivory/60 font-inter text-sm", children: testimonial.position }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/components/SponsorsSection.tsx",
                    lineNumber: 92,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/runner/workspace/client/src/components/SponsorsSection.tsx",
                  lineNumber: 90,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/client/src/components/SponsorsSection.tsx",
                lineNumber: 86,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/client/src/components/SponsorsSection.tsx",
              lineNumber: 84,
              columnNumber: 15
            }, this)
          ]
        },
        index,
        true,
        {
          fileName: "/home/runner/workspace/client/src/components/SponsorsSection.tsx",
          lineNumber: 73,
          columnNumber: 11
        },
        this
      )
    ) }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/components/SponsorsSection.tsx",
      lineNumber: 71,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/components/SponsorsSection.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/runner/workspace/client/src/components/SponsorsSection.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
};
_c = SponsorsSection;
var _c;
$RefreshReg$(_c, "SponsorsSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/SponsorsSection.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/SponsorsSection.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QTtBQUFBO0FBQUEsTUF1QkE7QUFBQSxJQUNELEtBMUJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0EyQkE7QUFBQSxPQXpGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBMEZBLEtBM0ZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0E0RkE7QUFFSjtBQUFFUyxLQWhHV3BCO0FBQWUsSUFBQW9CO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJTZWN0aW9uSGVhZGluZyIsImZhZGVJbiIsInRlc3RpbW9uaWFscyIsInNwb25zb3JzIiwiU3BvbnNvcnNTZWN0aW9uIiwib25jZSIsIngiLCJ0cmFuc2l0aW9uIiwicmVwZWF0IiwiSW5maW5pdHkiLCJyZXBlYXRUeXBlIiwiZHVyYXRpb24iLCJlYXNlIiwibWFwIiwic3BvbnNvciIsImluZGV4IiwibmFtZSIsInRlc3RpbW9uaWFsIiwieSIsInR5cGUiLCJzdGlmZm5lc3MiLCJ0ZXh0IiwiaW5pdGlhbHMiLCJwb3NpdGlvbiIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlNwb25zb3JzU2VjdGlvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IFNlY3Rpb25IZWFkaW5nIH0gZnJvbSBcIi4vdWkvc2VjdGlvbi1oZWFkaW5nXCI7XG5pbXBvcnQgeyBmYWRlSW4gfSBmcm9tIFwiQC9saWIvZnJhbWVyQW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgdGVzdGltb25pYWxzLCBzcG9uc29ycyB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG5leHBvcnQgY29uc3QgU3BvbnNvcnNTZWN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwic3BvbnNvcnNcIiBjbGFzc05hbWU9XCJweS0yMCBiZy1ibGFjayByZWxhdGl2ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgIDxTZWN0aW9uSGVhZGluZyBcbiAgICAgICAgICBzdWJ0aXRsZT1cIlByb3VkIFBhcnRuZXJzaGlwc1wiXG4gICAgICAgICAgdGl0bGU9XCJTcG9uc29ycyAmIENvbGxhYm9yYXRvcnNcIiBcbiAgICAgICAgICBhY2NlbnRlZFdvcmQ9XCIgQ29sbGFib3JhdG9yc1wiXG4gICAgICAgIC8+XG4gICAgICAgIFxuICAgICAgICB7LyogTWFycXVlZSBzY3JvbGxpbmcgbG9nb3MgKi99XG4gICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTIwIG92ZXJmbG93LWhpZGRlblwiXG4gICAgICAgICAgdmFyaWFudHM9e2ZhZGVJbihcInVwXCIsIDAuMil9XG4gICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgd2hpbGVJblZpZXc9XCJzaG93XCJcbiAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTYgZmxleCBnYXAtOFwiPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBnYXAtOCBtaW4tdy1tYXhcIlxuICAgICAgICAgICAgICBhbmltYXRlPXt7IFxuICAgICAgICAgICAgICAgIHg6IFswLCAtMTkyMF0sXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgeDoge1xuICAgICAgICAgICAgICAgICAgICByZXBlYXQ6IEluZmluaXR5LFxuICAgICAgICAgICAgICAgICAgICByZXBlYXRUeXBlOiBcImxvb3BcIixcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDI1LFxuICAgICAgICAgICAgICAgICAgICBlYXNlOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgey8qIEZpcnN0IHNldCBvZiBzcG9uc29ycyAqL31cbiAgICAgICAgICAgICAge3Nwb25zb3JzLm1hcCgoc3BvbnNvciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi13LVsyMDBweF1cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zMiBoLTE2IGJnLXdoaXRlLzUgcC00IHJvdW5kZWQtc20gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaG92ZXI6Ymctd2hpdGUvMTAgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1kZWVwLWdvbGQgZm9udC1wbGF5ZmFpciB0ZXh0LXhsXCI+e3Nwb25zb3IubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB7LyogRHVwbGljYXRlIGZvciBzZWFtbGVzcyBsb29wICovfVxuICAgICAgICAgICAgICB7c3BvbnNvcnMubWFwKChzcG9uc29yLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgZHVwbGljYXRlLSR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLXctWzIwMHB4XVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMyIGgtMTYgYmctd2hpdGUvNSBwLTQgcm91bmRlZC1zbSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBob3ZlcjpiZy13aGl0ZS8xMCB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWRlZXAtZ29sZCBmb250LXBsYXlmYWlyIHRleHQteGxcIj57c3BvbnNvci5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICBcbiAgICAgICAgey8qIFRlc3RpbW9uaWFscyAqL31cbiAgICAgICAgPG1vdGlvbi5oNCBcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXBsYXlmYWlyIHRleHQtMnhsIGZvbnQtYm9sZCBtYi04IHRleHQtY2VudGVyXCJcbiAgICAgICAgICB2YXJpYW50cz17ZmFkZUluKFwidXBcIiwgMC4zKX1cbiAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICB3aGlsZUluVmlldz1cInNob3dcIlxuICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFRlc3RpbW9uaWFsc1xuICAgICAgICA8L21vdGlvbi5oND5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtOFwiPlxuICAgICAgICAgIHt0ZXN0aW1vbmlhbHMubWFwKCh0ZXN0aW1vbmlhbCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnbGFzcyBwLTggcm91bmRlZC1zbSByZWxhdGl2ZVwiXG4gICAgICAgICAgICAgIHZhcmlhbnRzPXtmYWRlSW4oXCJ1cFwiLCAwLjQgKyBpbmRleCAqIDAuMSl9XG4gICAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICB3aGlsZUluVmlldz1cInNob3dcIlxuICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTEwIH19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgdHlwZTogXCJzcHJpbmdcIiwgc3RpZmZuZXNzOiAzMDAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRlZXAtZ29sZCB0ZXh0LTZ4bCBhYnNvbHV0ZSAtdG9wLTQgLWxlZnQtMiBvcGFjaXR5LTIwXCI+XCI8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1pdm9yeS84MCBmb250LWludGVyIG1iLTYgaXRhbGljXCI+e3Rlc3RpbW9uaWFsLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHJvdW5kZWQtZnVsbCBiZy1kZWVwLWdvbGQvMjAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXItNFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWRlZXAtZ29sZCBmb250LXBsYXlmYWlyIGZvbnQtYm9sZFwiPnt0ZXN0aW1vbmlhbC5pbml0aWFsc308L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXBsYXlmYWlyIGZvbnQtYm9sZFwiPnt0ZXN0aW1vbmlhbC5uYW1lfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtaXZvcnkvNjAgZm9udC1pbnRlciB0ZXh0LXNtXCI+e3Rlc3RpbW9uaWFsLnBvc2l0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuIl0sImZpbGUiOiIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2NsaWVudC9zcmMvY29tcG9uZW50cy9TcG9uc29yc1NlY3Rpb24udHN4In0=