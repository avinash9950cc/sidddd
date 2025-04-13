import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/progress-bar.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f91473b9"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/components/ui/progress-bar.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import { useScrollProgress } from "/src/hooks/useScrollProgress.ts";
import { motion, useSpring } from "/@fs/home/runner/workspace/node_modules/.vite/deps/framer-motion.js?v=3cc6b24e";
export const ProgressBar = () => {
  _s();
  const scrollProgress = useScrollProgress();
  const scaleX = useSpring(scrollProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 1e-3
  });
  return /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      "data-replit-metadata": "client/src/components/ui/progress-bar.tsx:13:4",
      "data-component-name": "motion.div",
      className: "fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-deep-gold to-bronze z-50",
      style: { scaleX, transformOrigin: "0%" }
    },
    void 0,
    false,
    {
      fileName: "/home/runner/workspace/client/src/components/ui/progress-bar.tsx",
      lineNumber: 13,
      columnNumber: 5
    },
    this
  );
};
_s(ProgressBar, "RCXDQgf64+29HvYFJQbUhj0tPVY=", false, function() {
  return [useScrollProgress, useSpring];
});
_c = ProgressBar;
var _c;
$RefreshReg$(_c, "ProgressBar");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/ui/progress-bar.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/ui/progress-bar.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBWUk7MkJBWko7QUFBU0EsTUFBaUIsY0FBUSw2QkFBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDN0QsU0FBU0MsUUFBbUJDLGlCQUFpQjtBQUV0QyxhQUFNQyxjQUFjQSxNQUFNO0FBQUFDLEtBQUE7QUFDL0IsUUFBTUMsaUJBQWlCTCxrQkFBa0I7QUFDekMsUUFBTU0sU0FBU0osVUFBVUcsZ0JBQWdCO0FBQUEsSUFDdkNFLFdBQVc7QUFBQSxJQUNYQyxTQUFTO0FBQUEsSUFDVEMsV0FBVztBQUFBLEVBQ2IsQ0FBQztBQUVELFNBQ0U7QUFBQSxJQUFDLE9BQU87QUFBQSxJQUFQO0FBQUEsTUFBTztBQUFBO0FBQUEsTUFDTixXQUFVO0FBQUEsTUFDVixPQUFPLEVBQUVILFFBQVFJLGlCQUFpQixLQUFLO0FBQUE7QUFBQSxJQUZ6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFFMkM7QUFHL0M7QUFBRU4sR0FkV0QsYUFBVztBQUFBLFVBQ0NILG1CQUNSRSxTQUFTO0FBQUE7QUFBQVMsS0FGYlI7QUFBVyxJQUFBUTtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsidXNlU2Nyb2xsUHJvZ3Jlc3MiLCJtb3Rpb24iLCJ1c2VTcHJpbmciLCJQcm9ncmVzc0JhciIsIl9zIiwic2Nyb2xsUHJvZ3Jlc3MiLCJzY2FsZVgiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwicmVzdERlbHRhIiwidHJhbnNmb3JtT3JpZ2luIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsicHJvZ3Jlc3MtYmFyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTY3JvbGxQcm9ncmVzcyB9IGZyb20gXCJAL2hvb2tzL3VzZVNjcm9sbFByb2dyZXNzXCI7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZVNjcm9sbCwgdXNlU3ByaW5nIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuZXhwb3J0IGNvbnN0IFByb2dyZXNzQmFyID0gKCkgPT4ge1xuICBjb25zdCBzY3JvbGxQcm9ncmVzcyA9IHVzZVNjcm9sbFByb2dyZXNzKCk7XG4gIGNvbnN0IHNjYWxlWCA9IHVzZVNwcmluZyhzY3JvbGxQcm9ncmVzcywge1xuICAgIHN0aWZmbmVzczogMTAwLFxuICAgIGRhbXBpbmc6IDMwLFxuICAgIHJlc3REZWx0YTogMC4wMDFcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdiBcbiAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCByaWdodC0wIGgtMC41IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1kZWVwLWdvbGQgdG8tYnJvbnplIHotNTBcIlxuICAgICAgc3R5bGU9e3sgc2NhbGVYLCB0cmFuc2Zvcm1PcmlnaW46IFwiMCVcIiB9fVxuICAgIC8+XG4gICk7XG59O1xuIl0sImZpbGUiOiIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2NsaWVudC9zcmMvY29tcG9uZW50cy91aS9wcm9ncmVzcy1iYXIudHN4In0=