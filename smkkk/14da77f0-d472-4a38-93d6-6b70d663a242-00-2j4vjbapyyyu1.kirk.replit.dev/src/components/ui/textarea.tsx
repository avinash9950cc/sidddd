import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/textarea.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f91473b9"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/components/ui/textarea.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/@fs/home/runner/workspace/node_modules/.vite/deps/react.js?v=f91473b9"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import { cn } from "/src/lib/utils.ts";
const Textarea = React.forwardRef(
  _c = ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxDEV(
      "textarea",
      {
        "data-replit-metadata": "client/src/components/ui/textarea.tsx:11:4",
        "data-component-name": "textarea",
        className: cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/client/src/components/ui/textarea.tsx",
        lineNumber: 11,
        columnNumber: 5
      },
      this
    );
  }
);
_c2 = Textarea;
Textarea.displayName = "Textarea";
export { Textarea };
var _c, _c2;
$RefreshReg$(_c, "Textarea$React.forwardRef");
$RefreshReg$(_c2, "Textarea");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/ui/textarea.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/ui/textarea.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBVU07QUFWTixPQUFPLG9CQUFnQjtBQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUU5QixTQUFTQSxVQUFVO0FBS25CLE1BQU1DLFdBQVdDLE1BQU1DO0FBQUFBLEVBQThDQyxLQUNuRUEsQ0FBQyxFQUFFQyxXQUFXLEdBQUdDLE1BQU0sR0FBR0MsUUFBUTtBQUNoQyxXQUNFO0FBQUEsTUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQ0MsV0FBV1A7QUFBQUEsVUFDVDtBQUFBLFVBQ0FLO0FBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsUUFDQSxHQUFJQztBQUFBQTtBQUFBQSxNQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU1ZO0FBQUEsRUFHaEI7QUFDRjtBQUFDRSxNQWJLUDtBQWNOQSxTQUFTUSxjQUFjO0FBRXZCLFNBQVNSO0FBQVUsSUFBQUcsSUFBQUk7QUFBQUUsYUFBQU4sSUFBQTtBQUFBTSxhQUFBRixLQUFBIiwibmFtZXMiOlsiY24iLCJUZXh0YXJlYSIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsIl9jIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJyZWYiLCJfYzIiLCJkaXNwbGF5TmFtZSIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJ0ZXh0YXJlYS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIlxuXG5leHBvcnQgaW50ZXJmYWNlIFRleHRhcmVhUHJvcHNcbiAgZXh0ZW5kcyBSZWFjdC5UZXh0YXJlYUhUTUxBdHRyaWJ1dGVzPEhUTUxUZXh0QXJlYUVsZW1lbnQ+IHt9XG5cbmNvbnN0IFRleHRhcmVhID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MVGV4dEFyZWFFbGVtZW50LCBUZXh0YXJlYVByb3BzPihcbiAgKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgXCJmbGV4IG1pbi1oLVs4MHB4XSB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWlucHV0IGJnLWJhY2tncm91bmQgcHgtMyBweS0yIHRleHQtc20gcmluZy1vZmZzZXQtYmFja2dyb3VuZCBwbGFjZWhvbGRlcjp0ZXh0LW11dGVkLWZvcmVncm91bmQgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpyaW5nLTIgZm9jdXMtdmlzaWJsZTpyaW5nLXJpbmcgZm9jdXMtdmlzaWJsZTpyaW5nLW9mZnNldC0yIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCBkaXNhYmxlZDpvcGFjaXR5LTUwXCIsXG4gICAgICAgICAgY2xhc3NOYW1lXG4gICAgICAgICl9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfVxuKVxuVGV4dGFyZWEuZGlzcGxheU5hbWUgPSBcIlRleHRhcmVhXCJcblxuZXhwb3J0IHsgVGV4dGFyZWEgfVxuIl0sImZpbGUiOiIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2NsaWVudC9zcmMvY29tcG9uZW50cy91aS90ZXh0YXJlYS50c3gifQ==