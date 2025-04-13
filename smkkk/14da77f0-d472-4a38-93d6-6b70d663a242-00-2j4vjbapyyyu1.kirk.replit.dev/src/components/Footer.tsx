import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Footer.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f91473b9"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/components/Footer.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { MagneticButton } from "/src/components/ui/magnetic-button.tsx";
export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ jsxDEV("footer", { "data-replit-metadata": "client/src/components/Footer.tsx:12:4", "data-component-name": "footer", className: "py-8 bg-black", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/Footer.tsx:13:6", "data-component-name": "div", className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/Footer.tsx:14:8", "data-component-name": "div", className: "flex flex-col md:flex-row justify-between items-center", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/Footer.tsx:15:10", "data-component-name": "div", className: "mb-4 md:mb-0", children: /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/components/Footer.tsx:16:12", "data-component-name": "a", href: "#", className: "text-deep-gold font-playfair text-xl font-bold tracking-wider", children: "SMK" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/components/Footer.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/components/Footer.tsx",
      lineNumber: 15,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/Footer.tsx:21:10", "data-component-name": "div", className: "text-ivory/60 font-inter text-sm", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Shaik Mahaboob Khan. All rights reserved."
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/client/src/components/Footer.tsx",
      lineNumber: 21,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/Footer.tsx:25:10", "data-component-name": "div", className: "mt-4 md:mt-0", children: /* @__PURE__ */ jsxDEV(MagneticButton, { "data-replit-metadata": "client/src/components/Footer.tsx:26:12", "data-component-name": "MagneticButton", children: /* @__PURE__ */ jsxDEV(
      "button",
      {
        "data-replit-metadata": "client/src/components/Footer.tsx:27:14",
        "data-component-name": "button",
        onClick: scrollToTop,
        className: "w-10 h-10 rounded-full bg-deep-gold/20 flex items-center justify-center text-deep-gold hover:bg-deep-gold hover:text-black transition-colors",
        "aria-label": "Back to top",
        children: /* @__PURE__ */ jsxDEV("i", { "data-replit-metadata": "client/src/components/Footer.tsx:32:16", "data-component-name": "i", className: "fas fa-chevron-up" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/components/Footer.tsx",
          lineNumber: 32,
          columnNumber: 17
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/client/src/components/Footer.tsx",
        lineNumber: 27,
        columnNumber: 15
      },
      this
    ) }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/components/Footer.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/components/Footer.tsx",
      lineNumber: 25,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/components/Footer.tsx",
    lineNumber: 14,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/home/runner/workspace/client/src/components/Footer.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/runner/workspace/client/src/components/Footer.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
};
_c = Footer;
var _c;
$RefreshReg$(_c, "Footer");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/Footer.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/Footer.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBZVk7QUFmWiwyQkFBdUI7QUFBUSxvQkFBc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRTlDLGFBQU1BLFNBQVNBLE1BQU07QUFDMUIsUUFBTUMsY0FBY0EsTUFBTTtBQUN4QkMsV0FBT0MsU0FBUztBQUFBLE1BQ2RDLEtBQUs7QUFBQSxNQUNMQyxVQUFVO0FBQUEsSUFDWixDQUFDO0FBQUEsRUFDSDtBQUVBLFNBQ0UsdUJBQUMsOEdBQU8sV0FBVSxpQkFDaEIsaUNBQUMsd0dBQUksV0FBVSwwQkFDYixpQ0FBQyx3R0FBSSxXQUFVLDBEQUNiO0FBQUEsMkJBQUMseUdBQUksV0FBVSxnQkFDYixpQ0FBQyxxR0FBRSxNQUFLLEtBQUksV0FBVSxpRUFBK0QsbUJBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FFQSxLQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FJQTtBQUFBLElBRUEsdUJBQUMseUdBQUksV0FBVSxvQ0FBa0M7QUFBQTtBQUFBLE9BQ3ZDLG9CQUFJQyxLQUFLLEdBQUVDLFlBQVk7QUFBQSxNQUFFO0FBQUEsU0FEbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUVBO0FBQUEsSUFFQSx1QkFBQyx5R0FBSSxXQUFVLGdCQUNiLGlDQUFDLDZIQUNDO0FBQUEsTUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQ0MsU0FBU047QUFBQUEsUUFDVCxXQUFVO0FBQUEsUUFDVixjQUFXO0FBQUEsUUFFWCxpQ0FBQyxxR0FBRSxXQUFVLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBaUM7QUFBQTtBQUFBLE1BTG5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU1BLEtBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVFBLEtBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVVBO0FBQUEsT0FyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQXNCQSxLQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBd0JBLEtBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0EwQkE7QUFFSjtBQUFFTyxLQXJDV1I7QUFBTSxJQUFBUTtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiRm9vdGVyIiwic2Nyb2xsVG9Ub3AiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiRm9vdGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYWduZXRpY0J1dHRvbiB9IGZyb20gXCIuL3VpL21hZ25ldGljLWJ1dHRvblwiO1xuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgdG9wOiAwLFxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInB5LTggYmctYmxhY2tcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBtZDptYi0wXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtZGVlcC1nb2xkIGZvbnQtcGxheWZhaXIgdGV4dC14bCBmb250LWJvbGQgdHJhY2tpbmctd2lkZXJcIj5cbiAgICAgICAgICAgICAgU01LXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWl2b3J5LzYwIGZvbnQtaW50ZXIgdGV4dC1zbVwiPlxuICAgICAgICAgICAgJmNvcHk7IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IFNoYWlrIE1haGFib29iIEtoYW4uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IG1kOm10LTBcIj5cbiAgICAgICAgICAgIDxNYWduZXRpY0J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Njcm9sbFRvVG9wfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGwgYmctZGVlcC1nb2xkLzIwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtZGVlcC1nb2xkIGhvdmVyOmJnLWRlZXAtZ29sZCBob3Zlcjp0ZXh0LWJsYWNrIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQmFjayB0byB0b3BcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tdXBcIj48L2k+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9NYWduZXRpY0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn07XG4iXSwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3Jrc3BhY2UvY2xpZW50L3NyYy9jb21wb25lbnRzL0Zvb3Rlci50c3gifQ==