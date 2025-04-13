import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/not-found.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f91473b9"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/pages/not-found.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { AlertCircle } from "/@fs/home/runner/workspace/node_modules/.vite/deps/lucide-react.js?v=1f3e4e7c";
export default function NotFound() {
  return /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/not-found.tsx:6:4", "data-component-name": "div", className: "min-h-screen w-full flex items-center justify-center bg-gray-50", children: /* @__PURE__ */ jsxDEV(Card, { "data-replit-metadata": "client/src/pages/not-found.tsx:7:6", "data-component-name": "Card", className: "w-full max-w-md mx-4", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-replit-metadata": "client/src/pages/not-found.tsx:8:8", "data-component-name": "CardContent", className: "pt-6", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/not-found.tsx:9:10", "data-component-name": "div", className: "flex mb-4 gap-2", children: [
      /* @__PURE__ */ jsxDEV(AlertCircle, { "data-replit-metadata": "client/src/pages/not-found.tsx:10:12", "data-component-name": "AlertCircle", className: "h-8 w-8 text-red-500" }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/not-found.tsx",
        lineNumber: 10,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("h1", { "data-replit-metadata": "client/src/pages/not-found.tsx:11:12", "data-component-name": "h1", className: "text-2xl font-bold text-gray-900", children: "404 Page Not Found" }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/not-found.tsx",
        lineNumber: 11,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/client/src/pages/not-found.tsx",
      lineNumber: 9,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/not-found.tsx:14:10", "data-component-name": "p", className: "mt-4 text-sm text-gray-600", children: "Did you forget to add the page to the router?" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/not-found.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/pages/not-found.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/home/runner/workspace/client/src/pages/not-found.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/runner/workspace/client/src/pages/not-found.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
_c = NotFound;
var _c;
$RefreshReg$(_c, "NotFound");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/pages/not-found.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/pages/not-found.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBU1k7QUFUWiwyQkFBMEI7QUFBUSxvQkFBc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3hELFNBQVNBLG1CQUFtQjtBQUU1Qix3QkFBd0JDLFdBQVc7QUFDakMsU0FDRSx1QkFBQyxxR0FBSSxXQUFVLG1FQUNiLGlDQUFDLHFHQUFLLFdBQVUsd0JBQ2QsaUNBQUMsbUhBQVksV0FBVSxRQUNyQjtBQUFBLDJCQUFDLHNHQUFJLFdBQVUsbUJBQ2I7QUFBQSw2QkFBQyxxSEFBWSxXQUFVLDBCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQTZDO0FBQUEsTUFDN0MsdUJBQUMscUdBQUcsV0FBVSxvQ0FBbUMsa0NBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBbUU7QUFBQSxTQUZyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBR0E7QUFBQSxJQUVBLHVCQUFDLG1HQUFFLFdBQVUsOEJBQTRCLDZEQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRUE7QUFBQSxPQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FTQSxLQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FXQSxLQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FhQTtBQUVKO0FBQUNDLEtBakJ1QkQ7QUFBUSxJQUFBQztBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiQWxlcnRDaXJjbGUiLCJOb3RGb3VuZCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IEFsZXJ0Q2lyY2xlIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RGb3VuZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctZ3JheS01MFwiPlxuICAgICAgPENhcmQgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LW1kIG14LTRcIj5cbiAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInB0LTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWItNCBnYXAtMlwiPlxuICAgICAgICAgICAgPEFsZXJ0Q2lyY2xlIGNsYXNzTmFtZT1cImgtOCB3LTggdGV4dC1yZWQtNTAwXCIgLz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMFwiPjQwNCBQYWdlIE5vdCBGb3VuZDwvaDE+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC00IHRleHQtc20gdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgRGlkIHlvdSBmb3JnZXQgdG8gYWRkIHRoZSBwYWdlIHRvIHRoZSByb3V0ZXI/XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPC9DYXJkPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sImZpbGUiOiIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2NsaWVudC9zcmMvcGFnZXMvbm90LWZvdW5kLnRzeCJ9