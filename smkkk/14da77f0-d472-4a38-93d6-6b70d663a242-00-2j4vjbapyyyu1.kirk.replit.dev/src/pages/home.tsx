import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/home.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f91473b9"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/pages/home.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { Navbar } from "/src/components/Navbar.tsx";
import { HeroSection } from "/src/components/HeroSection.tsx";
import { AboutSection } from "/src/components/AboutSection.tsx";
import { TimelineSection } from "/src/components/TimelineSection.tsx";
import { AchievementsSection } from "/src/components/AchievementsSection.tsx";
import { MediaSection } from "/src/components/MediaSection.tsx";
import { GallerySection } from "/src/components/GallerySection.tsx";
import { SponsorsSection } from "/src/components/SponsorsSection.tsx";
import { ContactSection } from "/src/components/ContactSection.tsx";
import { Footer } from "/src/components/Footer.tsx";
export default function Home() {
  return /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/home.tsx:14:4", "data-component-name": "div", className: "bg-black text-ivory font-inter", children: [
    /* @__PURE__ */ jsxDEV(Navbar, { "data-replit-metadata": "client/src/pages/home.tsx:15:6", "data-component-name": "Navbar" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/home.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(HeroSection, { "data-replit-metadata": "client/src/pages/home.tsx:16:6", "data-component-name": "HeroSection" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/home.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(AboutSection, { "data-replit-metadata": "client/src/pages/home.tsx:17:6", "data-component-name": "AboutSection" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/home.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(TimelineSection, { "data-replit-metadata": "client/src/pages/home.tsx:18:6", "data-component-name": "TimelineSection" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/home.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(AchievementsSection, { "data-replit-metadata": "client/src/pages/home.tsx:19:6", "data-component-name": "AchievementsSection" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/home.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(MediaSection, { "data-replit-metadata": "client/src/pages/home.tsx:20:6", "data-component-name": "MediaSection" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/home.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(GallerySection, { "data-replit-metadata": "client/src/pages/home.tsx:21:6", "data-component-name": "GallerySection" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/home.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(SponsorsSection, { "data-replit-metadata": "client/src/pages/home.tsx:22:6", "data-component-name": "SponsorsSection" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/home.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(ContactSection, { "data-replit-metadata": "client/src/pages/home.tsx:23:6", "data-component-name": "ContactSection" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/home.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, { "data-replit-metadata": "client/src/pages/home.tsx:24:6", "data-component-name": "Footer" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/home.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/pages/home.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
_c = Home;
var _c;
$RefreshReg$(_c, "Home");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/pages/home.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/pages/home.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBY007QUFkTiwyQkFBdUI7QUFBcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzVDLFNBQVNBLG1CQUFtQjtBQUM1QixTQUFTQyxvQkFBb0I7QUFDN0IsU0FBU0MsdUJBQXVCO0FBQ2hDLFNBQVNDLDJCQUEyQjtBQUNwQyxTQUFTQyxvQkFBb0I7QUFDN0IsU0FBU0Msc0JBQXNCO0FBQy9CLFNBQVNDLHVCQUF1QjtBQUNoQyxTQUFTQyxzQkFBc0I7QUFDL0IsU0FBU0MsY0FBYztBQUV2Qix3QkFBd0JDLE9BQU87QUFDN0IsU0FDRSx1QkFBQyxpR0FBSSxXQUFVLGtDQUNiO0FBQUEsMkJBQUMsdUdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFPO0FBQUEsSUFDUCx1QkFBQyxpSEFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVk7QUFBQSxJQUNaLHVCQUFDLG1IQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBYTtBQUFBLElBQ2IsdUJBQUMseUhBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFnQjtBQUFBLElBQ2hCLHVCQUFDLGlJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBb0I7QUFBQSxJQUNwQix1QkFBQyxtSEFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWE7QUFBQSxJQUNiLHVCQUFDLHVIQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBZTtBQUFBLElBQ2YsdUJBQUMseUhBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFnQjtBQUFBLElBQ2hCLHVCQUFDLHVIQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBZTtBQUFBLElBQ2YsdUJBQUMsdUdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFPO0FBQUEsT0FWVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBV0E7QUFFSjtBQUFDQyxLQWZ1QkQ7QUFBSSxJQUFBQztBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiSGVyb1NlY3Rpb24iLCJBYm91dFNlY3Rpb24iLCJUaW1lbGluZVNlY3Rpb24iLCJBY2hpZXZlbWVudHNTZWN0aW9uIiwiTWVkaWFTZWN0aW9uIiwiR2FsbGVyeVNlY3Rpb24iLCJTcG9uc29yc1NlY3Rpb24iLCJDb250YWN0U2VjdGlvbiIsIkZvb3RlciIsIkhvbWUiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJob21lLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXZiYXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IHsgSGVyb1NlY3Rpb24gfSBmcm9tIFwiQC9jb21wb25lbnRzL0hlcm9TZWN0aW9uXCI7XG5pbXBvcnQgeyBBYm91dFNlY3Rpb24gfSBmcm9tIFwiQC9jb21wb25lbnRzL0Fib3V0U2VjdGlvblwiO1xuaW1wb3J0IHsgVGltZWxpbmVTZWN0aW9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy9UaW1lbGluZVNlY3Rpb25cIjtcbmltcG9ydCB7IEFjaGlldmVtZW50c1NlY3Rpb24gfSBmcm9tIFwiQC9jb21wb25lbnRzL0FjaGlldmVtZW50c1NlY3Rpb25cIjtcbmltcG9ydCB7IE1lZGlhU2VjdGlvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvTWVkaWFTZWN0aW9uXCI7XG5pbXBvcnQgeyBHYWxsZXJ5U2VjdGlvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvR2FsbGVyeVNlY3Rpb25cIjtcbmltcG9ydCB7IFNwb25zb3JzU2VjdGlvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvU3BvbnNvcnNTZWN0aW9uXCI7XG5pbXBvcnQgeyBDb250YWN0U2VjdGlvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvQ29udGFjdFNlY3Rpb25cIjtcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayB0ZXh0LWl2b3J5IGZvbnQtaW50ZXJcIj5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxIZXJvU2VjdGlvbiAvPlxuICAgICAgPEFib3V0U2VjdGlvbiAvPlxuICAgICAgPFRpbWVsaW5lU2VjdGlvbiAvPlxuICAgICAgPEFjaGlldmVtZW50c1NlY3Rpb24gLz5cbiAgICAgIDxNZWRpYVNlY3Rpb24gLz5cbiAgICAgIDxHYWxsZXJ5U2VjdGlvbiAvPlxuICAgICAgPFNwb25zb3JzU2VjdGlvbiAvPlxuICAgICAgPENvbnRhY3RTZWN0aW9uIC8+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3Jrc3BhY2UvY2xpZW50L3NyYy9wYWdlcy9ob21lLnRzeCJ9