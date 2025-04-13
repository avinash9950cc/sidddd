import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/AchievementsSection.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f91473b9"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/components/AchievementsSection.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { motion } from "/@fs/home/runner/workspace/node_modules/.vite/deps/framer-motion.js?v=3cc6b24e";
import { SectionHeading } from "/src/components/ui/section-heading.tsx";
import { fadeIn, staggerContainer } from "/src/lib/framerAnimations.ts";
import { achievements } from "/src/lib/utils.ts";
export const AchievementsSection = () => {
  return /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/components/AchievementsSection.tsx:8:4", "data-component-name": "section", id: "achievements", className: "py-20 bg-gradient-dark relative overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/AchievementsSection.tsx:9:6", "data-component-name": "div", className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxDEV(
      SectionHeading,
      {
        "data-replit-metadata": "client/src/components/AchievementsSection.tsx:10:8",
        "data-component-name": "SectionHeading",
        subtitle: "Highlights & Recognition",
        title: "Achievements & Certifications",
        accentedWord: " Certifications"
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/client/src/components/AchievementsSection.tsx",
        lineNumber: 10,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-replit-metadata": "client/src/components/AchievementsSection.tsx:16:8",
        "data-component-name": "motion.div",
        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
        variants: staggerContainer,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.1 },
        children: achievements.map(
          (achievement, index) => /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              "data-replit-metadata": "client/src/components/AchievementsSection.tsx:24:10",
              "data-component-name": "motion.div",
              className: "glass p-6 rounded-sm group cursor-default",
              variants: fadeIn("up", 0.1 * index),
              whileHover: {
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 15 }
              },
              children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/AchievementsSection.tsx:33:14", "data-component-name": "div", className: "h-full flex flex-col", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/AchievementsSection.tsx:34:16", "data-component-name": "div", className: "mb-4", children: /* @__PURE__ */ jsxDEV("i", { "data-replit-metadata": "client/src/components/AchievementsSection.tsx:35:18", "data-component-name": "i", className: `fas ${achievement.icon} text-deep-gold text-2xl` }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/AchievementsSection.tsx",
                  lineNumber: 35,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/AchievementsSection.tsx",
                  lineNumber: 34,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("h4", { "data-replit-metadata": "client/src/components/AchievementsSection.tsx:37:16", "data-component-name": "h4", className: "font-playfair text-xl font-bold mb-3", children: achievement.title }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/AchievementsSection.tsx",
                  lineNumber: 37,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/AchievementsSection.tsx:38:16", "data-component-name": "p", className: "text-ivory/70 font-inter text-sm flex-grow", children: achievement.description }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/AchievementsSection.tsx",
                  lineNumber: 38,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/AchievementsSection.tsx:41:16", "data-component-name": "div", className: "mt-4", children: /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/components/AchievementsSection.tsx:42:18", "data-component-name": "span", className: "text-deep-gold font-inter text-xs uppercase tracking-wider", children: achievement.date }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/AchievementsSection.tsx",
                  lineNumber: 42,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/AchievementsSection.tsx",
                  lineNumber: 41,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/client/src/components/AchievementsSection.tsx",
                lineNumber: 33,
                columnNumber: 15
              }, this)
            },
            index,
            false,
            {
              fileName: "/home/runner/workspace/client/src/components/AchievementsSection.tsx",
              lineNumber: 24,
              columnNumber: 11
            },
            this
          )
        )
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/client/src/components/AchievementsSection.tsx",
        lineNumber: 16,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/components/AchievementsSection.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/runner/workspace/client/src/components/AchievementsSection.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
};
_c = AchievementsSection;
var _c;
$RefreshReg$(_c, "AchievementsSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/AchievementsSection.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/AchievementsSection.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBU1E7QUFUUiwyQkFBdUI7QUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdEMsU0FBU0Esc0JBQXNCO0FBQy9CLFNBQVNDLFFBQVFDLHdCQUF3QjtBQUN6QyxTQUFTQyxvQkFBb0I7QUFFdEIsYUFBTUMsc0JBQXNCQSxNQUFNO0FBQ3ZDLFNBQ0UsdUJBQUMsNEhBQVEsSUFBRyxnQkFBZSxXQUFVLG1EQUNuQyxpQ0FBQyxvSEFBSSxXQUFVLDBCQUNiO0FBQUE7QUFBQSxNQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFDQyxVQUFTO0FBQUEsUUFDVCxPQUFNO0FBQUEsUUFDTixjQUFhO0FBQUE7QUFBQSxNQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUdnQztBQUFBLElBR2hDO0FBQUEsTUFBQyxPQUFPO0FBQUEsTUFBUDtBQUFBLFFBQU87QUFBQTtBQUFBLFFBQ04sV0FBVTtBQUFBLFFBQ1YsVUFBVUY7QUFBQUEsUUFDVixTQUFRO0FBQUEsUUFDUixhQUFZO0FBQUEsUUFDWixVQUFVLEVBQUVHLE1BQU0sTUFBTUMsUUFBUSxJQUFJO0FBQUEsUUFFbkNILHVCQUFhSTtBQUFBQSxVQUFJLENBQUNDLGFBQWFDLFVBQzlCO0FBQUEsWUFBQyxPQUFPO0FBQUEsWUFBUDtBQUFBLGNBQU87QUFBQTtBQUFBLGNBRU4sV0FBVTtBQUFBLGNBQ1YsVUFBVVIsT0FBTyxNQUFNLE1BQU1RLEtBQUs7QUFBQSxjQUNsQyxZQUFZO0FBQUEsZ0JBQ1ZDLEdBQUc7QUFBQSxnQkFDSEMsWUFBWSxFQUFFQyxNQUFNLFVBQVVDLFdBQVcsS0FBS0MsU0FBUyxHQUFHO0FBQUEsY0FDNUQ7QUFBQSxjQUVBLGlDQUFDLHNIQUFJLFdBQVUsd0JBQ2I7QUFBQSx1Q0FBQyxzSEFBSSxXQUFVLFFBQ2IsaUNBQUMsa0hBQUUsV0FBVyxPQUFPTixZQUFZTyxJQUFJLDhCQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFpRSxLQURuRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVBO0FBQUEsZ0JBQ0EsdUJBQUMsb0hBQUcsV0FBVSx3Q0FBd0NQLHNCQUFZUSxTQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUF3RTtBQUFBLGdCQUN4RSx1QkFBQyxrSEFBRSxXQUFVLDhDQUNWUixzQkFBWVMsZUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVBO0FBQUEsZ0JBQ0EsdUJBQUMsc0hBQUksV0FBVSxRQUNiLGlDQUFDLHdIQUFLLFdBQVUsOERBQ2JULHNCQUFZVSxRQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRUEsS0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUlBO0FBQUEsbUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFhQTtBQUFBO0FBQUEsWUFyQktUO0FBQUFBLFlBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQXVCQTtBQUFBLFFBQ0Q7QUFBQTtBQUFBLE1BaENIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWlDQTtBQUFBLE9BeENGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0F5Q0EsS0ExQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQTJDQTtBQUVKO0FBQUVVLEtBL0NXZjtBQUFtQixJQUFBZTtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiU2VjdGlvbkhlYWRpbmciLCJmYWRlSW4iLCJzdGFnZ2VyQ29udGFpbmVyIiwiYWNoaWV2ZW1lbnRzIiwiQWNoaWV2ZW1lbnRzU2VjdGlvbiIsIm9uY2UiLCJhbW91bnQiLCJtYXAiLCJhY2hpZXZlbWVudCIsImluZGV4IiwieSIsInRyYW5zaXRpb24iLCJ0eXBlIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsImljb24iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGF0ZSIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkFjaGlldmVtZW50c1NlY3Rpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBTZWN0aW9uSGVhZGluZyB9IGZyb20gXCIuL3VpL3NlY3Rpb24taGVhZGluZ1wiO1xuaW1wb3J0IHsgZmFkZUluLCBzdGFnZ2VyQ29udGFpbmVyIH0gZnJvbSBcIkAvbGliL2ZyYW1lckFuaW1hdGlvbnNcIjtcbmltcG9ydCB7IGFjaGlldmVtZW50cyB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG5leHBvcnQgY29uc3QgQWNoaWV2ZW1lbnRzU2VjdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cImFjaGlldmVtZW50c1wiIGNsYXNzTmFtZT1cInB5LTIwIGJnLWdyYWRpZW50LWRhcmsgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgPFNlY3Rpb25IZWFkaW5nIFxuICAgICAgICAgIHN1YnRpdGxlPVwiSGlnaGxpZ2h0cyAmIFJlY29nbml0aW9uXCJcbiAgICAgICAgICB0aXRsZT1cIkFjaGlldmVtZW50cyAmIENlcnRpZmljYXRpb25zXCIgXG4gICAgICAgICAgYWNjZW50ZWRXb3JkPVwiIENlcnRpZmljYXRpb25zXCJcbiAgICAgICAgLz5cbiAgICAgICAgXG4gICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTZcIlxuICAgICAgICAgIHZhcmlhbnRzPXtzdGFnZ2VyQ29udGFpbmVyfVxuICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgIHdoaWxlSW5WaWV3PVwic2hvd1wiXG4gICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSwgYW1vdW50OiAwLjEgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHthY2hpZXZlbWVudHMubWFwKChhY2hpZXZlbWVudCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnbGFzcyBwLTYgcm91bmRlZC1zbSBncm91cCBjdXJzb3ItZGVmYXVsdFwiXG4gICAgICAgICAgICAgIHZhcmlhbnRzPXtmYWRlSW4oXCJ1cFwiLCAwLjEgKiBpbmRleCl9XG4gICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgXG4gICAgICAgICAgICAgICAgeTogLTEwLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHsgdHlwZTogXCJzcHJpbmdcIiwgc3RpZmZuZXNzOiAzMDAsIGRhbXBpbmc6IDE1IH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgZmFzICR7YWNoaWV2ZW1lbnQuaWNvbn0gdGV4dC1kZWVwLWdvbGQgdGV4dC0yeGxgfT48L2k+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtcGxheWZhaXIgdGV4dC14bCBmb250LWJvbGQgbWItM1wiPnthY2hpZXZlbWVudC50aXRsZX08L2g0PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtaXZvcnkvNzAgZm9udC1pbnRlciB0ZXh0LXNtIGZsZXgtZ3Jvd1wiPlxuICAgICAgICAgICAgICAgICAge2FjaGlldmVtZW50LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGVlcC1nb2xkIGZvbnQtaW50ZXIgdGV4dC14cyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge2FjaGlldmVtZW50LmRhdGV9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuIl0sImZpbGUiOiIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2NsaWVudC9zcmMvY29tcG9uZW50cy9BY2hpZXZlbWVudHNTZWN0aW9uLnRzeCJ9