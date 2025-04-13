import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/AboutSection.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f91473b9"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/components/AboutSection.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import { motion } from "/@fs/home/runner/workspace/node_modules/.vite/deps/framer-motion.js?v=3cc6b24e";
import { fadeIn } from "/src/lib/framerAnimations.ts";
import { useAnimatedCounter } from "/src/hooks/useAnimatedCounter.ts";
import { useInView } from "/src/hooks/useInView.ts";
import { resumeData } from "/src/lib/utils.ts";
export const AboutSection = () => {
  _s();
  const { ref: counterRef, inView: counterInView } = useInView({ threshold: 0.5 });
  const { ref: skillRef, inView: skillInView } = useInView({ threshold: 0.3 });
  const yearsCount = useAnimatedCounter({
    end: 12,
    duration: 2,
    startOnInView: counterInView
  });
  const tournamentsCount = useAnimatedCounter({
    end: 78,
    duration: 2.5,
    startOnInView: counterInView
  });
  return /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/components/AboutSection.tsx:26:4", "data-component-name": "section", id: "about", className: "py-20 md:py-32 bg-gradient-dark relative", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/AboutSection.tsx:27:6", "data-component-name": "div", className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/AboutSection.tsx:28:8", "data-component-name": "div", className: "grid grid-cols-1 md:grid-cols-2 gap-16 items-center", children: [
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-replit-metadata": "client/src/components/AboutSection.tsx:30:10",
        "data-component-name": "motion.div",
        className: "relative",
        variants: fadeIn("right", 0.3),
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/AboutSection.tsx:37:12", "data-component-name": "div", className: "w-full h-[500px] relative overflow-hidden rounded", children: [
            /* @__PURE__ */ jsxDEV(
              "img",
              {
                "data-replit-metadata": "client/src/components/AboutSection.tsx:38:14",
                "data-component-name": "img",
                src: "https://images.unsplash.com/photo-1533082238526-851cf377b8ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                alt: "Shaik Mahaboob Khan portrait",
                className: "w-full h-full object-cover"
              },
              void 0,
              false,
              {
                fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
                lineNumber: 38,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/AboutSection.tsx:44:14", "data-component-name": "div", className: "absolute -bottom-6 -right-6 w-40 h-40 bg-deep-gold opacity-20 z-0" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
              lineNumber: 44,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
            lineNumber: 37,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              "data-replit-metadata": "client/src/components/AboutSection.tsx:48:12",
              "data-component-name": "div",
              ref: counterRef,
              className: "glass absolute -bottom-10 -right-10 p-6 rounded-sm shadow-lg w-64",
              children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/AboutSection.tsx:52:14", "data-component-name": "div", className: "flex flex-col space-y-4", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/AboutSection.tsx:53:16", "data-component-name": "div", children: [
                  /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "client/src/components/AboutSection.tsx:54:18", "data-component-name": "h3", className: "text-3xl font-playfair text-deep-gold font-bold", children: yearsCount }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
                    lineNumber: 54,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/AboutSection.tsx:57:18", "data-component-name": "p", className: "text-sm text-ivory font-inter uppercase tracking-wider", children: "Years Experience" }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
                    lineNumber: 57,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
                  lineNumber: 53,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/AboutSection.tsx:61:16", "data-component-name": "div", children: [
                  /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "client/src/components/AboutSection.tsx:62:18", "data-component-name": "h3", className: "text-3xl font-playfair text-deep-gold font-bold", children: tournamentsCount }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
                    lineNumber: 62,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/AboutSection.tsx:65:18", "data-component-name": "p", className: "text-sm text-ivory font-inter uppercase tracking-wider", children: "Tournaments" }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
                    lineNumber: 65,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
                  lineNumber: 61,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
                lineNumber: 52,
                columnNumber: 15
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
              lineNumber: 48,
              columnNumber: 13
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
        lineNumber: 30,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-replit-metadata": "client/src/components/AboutSection.tsx:74:10",
        "data-component-name": "motion.div",
        variants: fadeIn("left", 0.5),
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/components/AboutSection.tsx:80:12", "data-component-name": "h2", className: "text-sm font-inter uppercase tracking-widest text-deep-gold mb-2", children: "About Me" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
            lineNumber: 80,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "client/src/components/AboutSection.tsx:83:12", "data-component-name": "h3", className: "text-4xl md:text-5xl font-playfair font-bold mb-8", children: [
            "The Pursuit ",
            /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/components/AboutSection.tsx:84:26", "data-component-name": "span", className: "text-deep-gold", children: "of Excellence" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
              lineNumber: 84,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
            lineNumber: 83,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/AboutSection.tsx:87:12", "data-component-name": "div", className: "space-y-6 font-inter text-ivory/80", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/AboutSection.tsx:88:14", "data-component-name": "p", children: "An Administrative genius with an analytical approach towards goals, I bring the same precision and strategy to polo that I apply to every aspect of my life." }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
              lineNumber: 88,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/AboutSection.tsx:92:14", "data-component-name": "p", children: "As a semi-professional polo player and riding instructor, I've dedicated my life to mastering this elite sport while maintaining the highest standards of performance." }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
              lineNumber: 92,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/AboutSection.tsx:96:14", "data-component-name": "p", children: "My journey through the ranks of the NCC, culminating as a Cadet of the 2019 Republic Day Camp contingent, instilled in me the discipline and leadership that define my play today." }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
              lineNumber: 96,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
            lineNumber: 87,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/AboutSection.tsx:103:12", "data-component-name": "div", ref: skillRef, className: "mt-10 space-y-4", children: resumeData.skills.slice(0, 3).map(
            (skill, index) => /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/AboutSection.tsx:105:14", "data-component-name": "div", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/AboutSection.tsx:106:18", "data-component-name": "div", className: "flex justify-between mb-1", children: [
                /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/components/AboutSection.tsx:107:20", "data-component-name": "span", className: "text-sm text-ivory font-inter", children: skill.name }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
                  lineNumber: 107,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/components/AboutSection.tsx:108:20", "data-component-name": "span", className: "text-sm text-deep-gold font-inter", children: [
                  skill.level,
                  "%"
                ] }, void 0, true, {
                  fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
                  lineNumber: 108,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
                lineNumber: 106,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/AboutSection.tsx:110:18", "data-component-name": "div", className: "h-1 w-full bg-white/10 rounded-sm overflow-hidden", children: /* @__PURE__ */ jsxDEV(
                motion.div,
                {
                  "data-replit-metadata": "client/src/components/AboutSection.tsx:111:20",
                  "data-component-name": "motion.div",
                  className: "h-full bg-gradient-to-r from-deep-gold to-bronze",
                  initial: { width: 0 },
                  animate: skillInView ? { width: `${skill.level}%` } : { width: 0 },
                  transition: { duration: 1, delay: index * 0.2 }
                },
                void 0,
                false,
                {
                  fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
                  lineNumber: 111,
                  columnNumber: 21
                },
                this
              ) }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
                lineNumber: 110,
                columnNumber: 19
              }, this)
            ] }, index, true, {
              fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
              lineNumber: 105,
              columnNumber: 15
            }, this)
          ) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
            lineNumber: 103,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/AboutSection.tsx:122:12", "data-component-name": "div", className: "mt-10", children: /* @__PURE__ */ jsxDEV(
            motion.a,
            {
              "data-replit-metadata": "client/src/components/AboutSection.tsx:123:14",
              "data-component-name": "motion.a",
              href: "#achievements",
              className: "flex items-center group",
              whileHover: { x: 5 },
              children: [
                /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/components/AboutSection.tsx:128:16", "data-component-name": "span", className: "text-deep-gold font-inter uppercase tracking-wider text-sm mr-2", children: "View Achievements" }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
                  lineNumber: 128,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("i", { "data-replit-metadata": "client/src/components/AboutSection.tsx:131:16", "data-component-name": "i", className: "fas fa-arrow-right text-deep-gold transform group-hover:translate-x-2 transition-transform" }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
                  lineNumber: 131,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
              lineNumber: 123,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
            lineNumber: 122,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
        lineNumber: 74,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
    lineNumber: 28,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/runner/workspace/client/src/components/AboutSection.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
};
_s(AboutSection, "3dHlXmC1S43K8id6bPUxTy+tTO4=", false, function() {
  return [useInView, useInView, useAnimatedCounter, useAnimatedCounter];
});
_c = AboutSection;
var _c;
$RefreshReg$(_c, "AboutSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/AboutSection.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/AboutSection.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBcUNjOzJCQXJDZDtBQUFlLE1BQVEsY0FBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUV0QyxTQUFTQSxjQUFjO0FBQ3ZCLFNBQVNDLDBCQUEwQjtBQUNuQyxTQUFTQyxpQkFBaUI7QUFDMUIsU0FBU0Msa0JBQWtCO0FBRXBCLGFBQU1DLGVBQWVBLE1BQU07QUFBQUMsS0FBQTtBQUNoQyxRQUFNLEVBQUVDLEtBQUtDLFlBQVlDLFFBQVFDLGNBQWMsSUFBSVAsVUFBVSxFQUFFUSxXQUFXLElBQUksQ0FBQztBQUMvRSxRQUFNLEVBQUVKLEtBQUtLLFVBQVVILFFBQVFJLFlBQVksSUFBSVYsVUFBVSxFQUFFUSxXQUFXLElBQUksQ0FBQztBQUczRSxRQUFNRyxhQUFhWixtQkFBbUI7QUFBQSxJQUNwQ2EsS0FBSztBQUFBLElBQ0xDLFVBQVU7QUFBQSxJQUNWQyxlQUFlUDtBQUFBQSxFQUNqQixDQUFDO0FBRUQsUUFBTVEsbUJBQW1CaEIsbUJBQW1CO0FBQUEsSUFDMUNhLEtBQUs7QUFBQSxJQUNMQyxVQUFVO0FBQUEsSUFDVkMsZUFBZVA7QUFBQUEsRUFDakIsQ0FBQztBQUVELFNBQ0UsdUJBQUMsc0hBQVEsSUFBRyxTQUFRLFdBQVUsNENBQzVCLGlDQUFDLDhHQUFJLFdBQVUsMEJBQ2IsaUNBQUMsOEdBQUksV0FBVSx1REFFYjtBQUFBO0FBQUEsTUFBQyxPQUFPO0FBQUEsTUFBUDtBQUFBLFFBQU87QUFBQTtBQUFBLFFBQ04sV0FBVTtBQUFBLFFBQ1YsVUFBVVQsT0FBTyxTQUFTLEdBQUc7QUFBQSxRQUM3QixTQUFRO0FBQUEsUUFDUixhQUFZO0FBQUEsUUFDWixVQUFVLEVBQUVrQixNQUFNLEtBQUs7QUFBQSxRQUV2QjtBQUFBLGlDQUFDLCtHQUFJLFdBQVUscURBQ2I7QUFBQTtBQUFBLGNBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFDQyxLQUFJO0FBQUEsZ0JBQ0osS0FBSTtBQUFBLGdCQUNKLFdBQVU7QUFBQTtBQUFBLGNBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBR3dDO0FBQUEsWUFHeEMsdUJBQUMsK0dBQUksV0FBVSx1RUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFtRjtBQUFBLGVBUHJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUUE7QUFBQSxVQUdBO0FBQUEsWUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQ0MsS0FBS1g7QUFBQUEsY0FDTCxXQUFVO0FBQUEsY0FFVixpQ0FBQywrR0FBSSxXQUFVLDJCQUNiO0FBQUEsdUNBQUMsK0dBQ0M7QUFBQSx5Q0FBQyw2R0FBRyxXQUFVLG1EQUNYTSx3QkFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUVBO0FBQUEsa0JBQ0EsdUJBQUMsMkdBQUUsV0FBVSwwREFBd0QsZ0NBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRUE7QUFBQSxxQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU9BO0FBQUEsZ0JBQ0EsdUJBQUMsK0dBQ0M7QUFBQSx5Q0FBQyw2R0FBRyxXQUFVLG1EQUNYSSw4QkFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUVBO0FBQUEsa0JBQ0EsdUJBQUMsMkdBQUUsV0FBVSwwREFBd0QsMkJBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRUE7QUFBQSxxQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU9BO0FBQUEsbUJBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBaUJBO0FBQUE7QUFBQSxZQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFzQkE7QUFBQTtBQUFBO0FBQUEsTUF4Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeUNBO0FBQUEsSUFHQTtBQUFBLE1BQUMsT0FBTztBQUFBLE1BQVA7QUFBQSxRQUFPO0FBQUE7QUFBQSxRQUNOLFVBQVVqQixPQUFPLFFBQVEsR0FBRztBQUFBLFFBQzVCLFNBQVE7QUFBQSxRQUNSLGFBQVk7QUFBQSxRQUNaLFVBQVUsRUFBRWtCLE1BQU0sS0FBSztBQUFBLFFBRXZCO0FBQUEsaUNBQUMsNkdBQUcsV0FBVSxvRUFBa0Usd0JBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRUE7QUFBQSxVQUNBLHVCQUFDLDZHQUFHLFdBQVUscURBQW1EO0FBQUE7QUFBQSxZQUNuRCx1QkFBQyxpSEFBSyxXQUFVLGtCQUFpQiw2QkFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBOEM7QUFBQSxlQUQ1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVBO0FBQUEsVUFFQSx1QkFBQywrR0FBSSxXQUFVLHNDQUNiO0FBQUEsbUNBQUMsMkdBQUMsNEtBQUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFHQTtBQUFBLFlBQ0EsdUJBQUMsMkdBQUMsc0xBQUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFHQTtBQUFBLFlBQ0EsdUJBQUMsMkdBQUMsa01BQUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFHQTtBQUFBLGVBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFhQTtBQUFBLFVBR0EsdUJBQUMsZ0hBQUksS0FBS1AsVUFBVSxXQUFVLG1CQUMzQlIscUJBQVdnQixPQUFPQyxNQUFNLEdBQUcsQ0FBQyxFQUFFQztBQUFBQSxZQUFJLENBQUNDLE9BQU9DLFVBQ3pDLHVCQUFDLGdIQUNDO0FBQUEscUNBQUMsZ0hBQUksV0FBVSw2QkFDYjtBQUFBLHVDQUFDLGtIQUFLLFdBQVUsaUNBQWlDRCxnQkFBTUUsUUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBNEQ7QUFBQSxnQkFDNUQsdUJBQUMsa0hBQUssV0FBVSxxQ0FBcUNGO0FBQUFBLHdCQUFNRztBQUFBQSxrQkFBTTtBQUFBLHFCQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFrRTtBQUFBLG1CQUZwRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUdBO0FBQUEsY0FDQSx1QkFBQyxnSEFBSSxXQUFVLHFEQUNiO0FBQUEsZ0JBQUMsT0FBTztBQUFBLGdCQUFQO0FBQUEsa0JBQU87QUFBQTtBQUFBLGtCQUNOLFdBQVU7QUFBQSxrQkFDVixTQUFTLEVBQUVDLE9BQU8sRUFBRTtBQUFBLGtCQUNwQixTQUFTZCxjQUFjLEVBQUVjLE9BQU8sR0FBR0osTUFBTUcsS0FBSyxJQUFJLElBQUksRUFBRUMsT0FBTyxFQUFFO0FBQUEsa0JBQ2pFLFlBQVksRUFBRVgsVUFBVSxHQUFHWSxPQUFPSixRQUFRLElBQUk7QUFBQTtBQUFBLGdCQUpoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FJa0QsS0FMcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFPQTtBQUFBLGlCQVpRQSxPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBYUE7QUFBQSxVQUNELEtBaEJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaUJBO0FBQUEsVUFFQSx1QkFBQyxnSEFBSSxXQUFVLFNBQ2I7QUFBQSxZQUFDLE9BQU87QUFBQSxZQUFQO0FBQUEsY0FBTztBQUFBO0FBQUEsY0FDTixNQUFLO0FBQUEsY0FDTCxXQUFVO0FBQUEsY0FDVixZQUFZLEVBQUVLLEdBQUcsRUFBRTtBQUFBLGNBRW5CO0FBQUEsdUNBQUMsa0hBQUssV0FBVSxtRUFBaUUsaUNBQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRUE7QUFBQSxnQkFDQSx1QkFBQyw0R0FBRSxXQUFVLGdHQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQTBHO0FBQUE7QUFBQTtBQUFBLFlBUjVHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVNBLEtBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFXQTtBQUFBO0FBQUE7QUFBQSxNQTNERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE0REE7QUFBQSxPQTFHRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBMkdBLEtBNUdGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0E2R0EsS0E5R0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQStHQTtBQUVKO0FBQUV2QixHQW5JV0QsY0FBWTtBQUFBLFVBQzRCRixXQUNKQSxXQUc1QkQsb0JBTU1BLGtCQUFrQjtBQUFBO0FBQUE0QixLQVhoQ3pCO0FBQVksSUFBQXlCO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJmYWRlSW4iLCJ1c2VBbmltYXRlZENvdW50ZXIiLCJ1c2VJblZpZXciLCJyZXN1bWVEYXRhIiwiQWJvdXRTZWN0aW9uIiwiX3MiLCJyZWYiLCJjb3VudGVyUmVmIiwiaW5WaWV3IiwiY291bnRlckluVmlldyIsInRocmVzaG9sZCIsInNraWxsUmVmIiwic2tpbGxJblZpZXciLCJ5ZWFyc0NvdW50IiwiZW5kIiwiZHVyYXRpb24iLCJzdGFydE9uSW5WaWV3IiwidG91cm5hbWVudHNDb3VudCIsIm9uY2UiLCJza2lsbHMiLCJzbGljZSIsIm1hcCIsInNraWxsIiwiaW5kZXgiLCJuYW1lIiwibGV2ZWwiLCJ3aWR0aCIsImRlbGF5IiwieCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkFib3V0U2VjdGlvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IFNlY3Rpb25IZWFkaW5nIH0gZnJvbSBcIi4vdWkvc2VjdGlvbi1oZWFkaW5nXCI7XG5pbXBvcnQgeyBmYWRlSW4gfSBmcm9tIFwiQC9saWIvZnJhbWVyQW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgdXNlQW5pbWF0ZWRDb3VudGVyIH0gZnJvbSBcIkAvaG9va3MvdXNlQW5pbWF0ZWRDb3VudGVyXCI7XG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tIFwiQC9ob29rcy91c2VJblZpZXdcIjtcbmltcG9ydCB7IHJlc3VtZURhdGEgfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuZXhwb3J0IGNvbnN0IEFib3V0U2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgeyByZWY6IGNvdW50ZXJSZWYsIGluVmlldzogY291bnRlckluVmlldyB9ID0gdXNlSW5WaWV3KHsgdGhyZXNob2xkOiAwLjUgfSk7XG4gIGNvbnN0IHsgcmVmOiBza2lsbFJlZiwgaW5WaWV3OiBza2lsbEluVmlldyB9ID0gdXNlSW5WaWV3KHsgdGhyZXNob2xkOiAwLjMgfSk7XG5cbiAgLy8gQW5pbWF0ZWQgY291bnRlcnNcbiAgY29uc3QgeWVhcnNDb3VudCA9IHVzZUFuaW1hdGVkQ291bnRlcih7XG4gICAgZW5kOiAxMixcbiAgICBkdXJhdGlvbjogMixcbiAgICBzdGFydE9uSW5WaWV3OiBjb3VudGVySW5WaWV3XG4gIH0pO1xuICBcbiAgY29uc3QgdG91cm5hbWVudHNDb3VudCA9IHVzZUFuaW1hdGVkQ291bnRlcih7XG4gICAgZW5kOiA3OCxcbiAgICBkdXJhdGlvbjogMi41LFxuICAgIHN0YXJ0T25JblZpZXc6IGNvdW50ZXJJblZpZXdcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cImFib3V0XCIgY2xhc3NOYW1lPVwicHktMjAgbWQ6cHktMzIgYmctZ3JhZGllbnQtZGFyayByZWxhdGl2ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtMTYgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgey8qIExlZnQgY29sdW1uIC0gSW1hZ2UgKi99XG4gICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiXG4gICAgICAgICAgICB2YXJpYW50cz17ZmFkZUluKFwicmlnaHRcIiwgMC4zKX1cbiAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgICAgd2hpbGVJblZpZXc9XCJzaG93XCJcbiAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLVs1MDBweF0gcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzMzA4MjIzODUyNi04NTFjZjM3N2I4ZWU/aXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODAwJnE9ODBcIiBcbiAgICAgICAgICAgICAgICBhbHQ9XCJTaGFpayBNYWhhYm9vYiBLaGFuIHBvcnRyYWl0XCIgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7LyogR29sZCBhY2NlbnQgZWxlbWVudCAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtYm90dG9tLTYgLXJpZ2h0LTYgdy00MCBoLTQwIGJnLWRlZXAtZ29sZCBvcGFjaXR5LTIwIHotMFwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHsvKiBTdGF0cyBjYXJkcyAqL31cbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgIHJlZj17Y291bnRlclJlZn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2xhc3MgYWJzb2x1dGUgLWJvdHRvbS0xMCAtcmlnaHQtMTAgcC02IHJvdW5kZWQtc20gc2hhZG93LWxnIHctNjRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXBsYXlmYWlyIHRleHQtZGVlcC1nb2xkIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICB7eWVhcnNDb3VudH1cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtaXZvcnkgZm9udC1pbnRlciB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgWWVhcnMgRXhwZXJpZW5jZVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1wbGF5ZmFpciB0ZXh0LWRlZXAtZ29sZCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAge3RvdXJuYW1lbnRzQ291bnR9XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWl2b3J5IGZvbnQtaW50ZXIgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIFRvdXJuYW1lbnRzXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIHsvKiBSaWdodCBjb2x1bW4gLSBDb250ZW50ICovfVxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICB2YXJpYW50cz17ZmFkZUluKFwibGVmdFwiLCAwLjUpfVxuICAgICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgICB3aGlsZUluVmlldz1cInNob3dcIlxuICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtaW50ZXIgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCB0ZXh0LWRlZXAtZ29sZCBtYi0yXCI+XG4gICAgICAgICAgICAgIEFib3V0IE1lXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtNHhsIG1kOnRleHQtNXhsIGZvbnQtcGxheWZhaXIgZm9udC1ib2xkIG1iLThcIj5cbiAgICAgICAgICAgICAgVGhlIFB1cnN1aXQgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1kZWVwLWdvbGRcIj5vZiBFeGNlbGxlbmNlPC9zcGFuPlxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTYgZm9udC1pbnRlciB0ZXh0LWl2b3J5LzgwXCI+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIEFuIEFkbWluaXN0cmF0aXZlIGdlbml1cyB3aXRoIGFuIGFuYWx5dGljYWwgYXBwcm9hY2ggdG93YXJkcyBnb2FscywgXG4gICAgICAgICAgICAgICAgSSBicmluZyB0aGUgc2FtZSBwcmVjaXNpb24gYW5kIHN0cmF0ZWd5IHRvIHBvbG8gdGhhdCBJIGFwcGx5IHRvIGV2ZXJ5IGFzcGVjdCBvZiBteSBsaWZlLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIEFzIGEgc2VtaS1wcm9mZXNzaW9uYWwgcG9sbyBwbGF5ZXIgYW5kIHJpZGluZyBpbnN0cnVjdG9yLCBJJ3ZlIGRlZGljYXRlZCBcbiAgICAgICAgICAgICAgICBteSBsaWZlIHRvIG1hc3RlcmluZyB0aGlzIGVsaXRlIHNwb3J0IHdoaWxlIG1haW50YWluaW5nIHRoZSBoaWdoZXN0IHN0YW5kYXJkcyBvZiBwZXJmb3JtYW5jZS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBNeSBqb3VybmV5IHRocm91Z2ggdGhlIHJhbmtzIG9mIHRoZSBOQ0MsIGN1bG1pbmF0aW5nIGFzIGEgQ2FkZXQgb2YgdGhlIDIwMTkgXG4gICAgICAgICAgICAgICAgUmVwdWJsaWMgRGF5IENhbXAgY29udGluZ2VudCwgaW5zdGlsbGVkIGluIG1lIHRoZSBkaXNjaXBsaW5lIGFuZCBsZWFkZXJzaGlwIHRoYXQgZGVmaW5lIG15IHBsYXkgdG9kYXkuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7LyogU2tpbGxzIGJhcnMgKi99XG4gICAgICAgICAgICA8ZGl2IHJlZj17c2tpbGxSZWZ9IGNsYXNzTmFtZT1cIm10LTEwIHNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICB7cmVzdW1lRGF0YS5za2lsbHMuc2xpY2UoMCwgMykubWFwKChza2lsbCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1pdm9yeSBmb250LWludGVyXCI+e3NraWxsLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZGVlcC1nb2xkIGZvbnQtaW50ZXJcIj57c2tpbGwubGV2ZWx9JTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTEgdy1mdWxsIGJnLXdoaXRlLzEwIHJvdW5kZWQtc20gb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCBiZy1ncmFkaWVudC10by1yIGZyb20tZGVlcC1nb2xkIHRvLWJyb256ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyB3aWR0aDogMCB9fVxuICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3NraWxsSW5WaWV3ID8geyB3aWR0aDogYCR7c2tpbGwubGV2ZWx9JWAgfSA6IHsgd2lkdGg6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxLCBkZWxheTogaW5kZXggKiAwLjIgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwXCI+XG4gICAgICAgICAgICAgIDxtb3Rpb24uYSBcbiAgICAgICAgICAgICAgICBocmVmPVwiI2FjaGlldmVtZW50c1wiIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdyb3VwXCJcbiAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHg6IDUgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGVlcC1nb2xkIGZvbnQtaW50ZXIgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtc20gbXItMlwiPlxuICAgICAgICAgICAgICAgICAgVmlldyBBY2hpZXZlbWVudHNcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFycm93LXJpZ2h0IHRleHQtZGVlcC1nb2xkIHRyYW5zZm9ybSBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC0yIHRyYW5zaXRpb24tdHJhbnNmb3JtXCI+PC9pPlxuICAgICAgICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG4iXSwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3Jrc3BhY2UvY2xpZW50L3NyYy9jb21wb25lbnRzL0Fib3V0U2VjdGlvbi50c3gifQ==