import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.tsx?v=K8o4iXlnwUjs-9b5EqlRs");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f91473b9"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/App.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { QueryClientProvider } from "/@fs/home/runner/workspace/node_modules/.vite/deps/@tanstack_react-query.js?v=824f4d2b";
import { queryClient } from "/src/lib/queryClient.ts";
import { Route, Switch } from "/@fs/home/runner/workspace/node_modules/.vite/deps/wouter.js?v=540833d0";
import { Toaster } from "/src/components/ui/toaster.tsx";
import Home from "/src/pages/home.tsx";
import NotFound from "/src/pages/not-found.tsx";
import { CustomCursor } from "/src/components/ui/cursor.tsx";
import { NoiseBackground } from "/src/components/ui/noise-background.tsx";
import { ProgressBar } from "/src/components/ui/progress-bar.tsx";
function Router() {
  return /* @__PURE__ */ jsxDEV(Switch, { "data-replit-metadata": "client/src/App.tsx:13:4", "data-component-name": "Switch", children: [
    /* @__PURE__ */ jsxDEV(Route, { "data-replit-metadata": "client/src/App.tsx:14:6", "data-component-name": "Route", path: "/", component: Home }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/App.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { "data-replit-metadata": "client/src/App.tsx:15:6", "data-component-name": "Route", component: NotFound }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/App.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/App.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
_c = Router;
function App() {
  return /* @__PURE__ */ jsxDEV(QueryClientProvider, { "data-replit-metadata": "client/src/App.tsx:22:4", "data-component-name": "QueryClientProvider", client: queryClient, children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/App.tsx:23:6", "data-component-name": "div", className: "relative", children: [
    /* @__PURE__ */ jsxDEV(NoiseBackground, { "data-replit-metadata": "client/src/App.tsx:24:8", "data-component-name": "NoiseBackground" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/App.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(ProgressBar, { "data-replit-metadata": "client/src/App.tsx:25:8", "data-component-name": "ProgressBar" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/App.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(CustomCursor, { "data-replit-metadata": "client/src/App.tsx:26:8", "data-component-name": "CustomCursor" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/App.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Router, { "data-replit-metadata": "client/src/App.tsx:27:8", "data-component-name": "Router" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/App.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Toaster, { "data-replit-metadata": "client/src/App.tsx:28:8", "data-component-name": "Toaster" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/App.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/App.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/runner/workspace/client/src/App.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
_c2 = App;
export default App;
var _c, _c2;
$RefreshReg$(_c, "Router");
$RefreshReg$(_c2, "App");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/App.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/App.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBYU07QUFiTiwyQkFBU0E7QUFBMkIsb0JBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMzRCxTQUFTQyxtQkFBbUI7QUFDNUIsU0FBU0MsT0FBT0MsY0FBYztBQUM5QixTQUFTQyxlQUFlO0FBQ3hCLE9BQU9DLFVBQVU7QUFDakIsT0FBT0MsY0FBYztBQUNyQixTQUFTQyxvQkFBb0I7QUFDN0IsU0FBU0MsdUJBQXVCO0FBQ2hDLFNBQVNDLG1CQUFtQjtBQUU1QixTQUFTQyxTQUFTO0FBQ2hCLFNBQ0UsdUJBQUMsOEZBQ0M7QUFBQSwyQkFBQyw0RkFBTSxNQUFLLEtBQUksV0FBV0wsUUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFnQztBQUFBLElBQ2hDLHVCQUFDLDRGQUFNLFdBQVdDLFlBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBMkI7QUFBQSxPQUY3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBR0E7QUFFSjtBQUFDSyxLQVBRRDtBQVNULFNBQVNFLE1BQU07QUFDYixTQUNFLHVCQUFDLHdIQUFvQixRQUFRWCxhQUMzQixpQ0FBQywwRkFBSSxXQUFVLFlBQ2I7QUFBQSwyQkFBQyxrSEFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWdCO0FBQUEsSUFDaEIsdUJBQUMsMEdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFZO0FBQUEsSUFDWix1QkFBQyw0R0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWE7QUFBQSxJQUNiLHVCQUFDLGdHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBTztBQUFBLElBQ1AsdUJBQUMsa0dBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFRO0FBQUEsT0FMVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTUEsS0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBUUE7QUFFSjtBQUFDWSxNQVpRRDtBQWNULGVBQWVBO0FBQUksSUFBQUQsSUFBQUU7QUFBQUMsYUFBQUgsSUFBQTtBQUFBRyxhQUFBRCxLQUFBIiwibmFtZXMiOlsiUXVlcnlDbGllbnRQcm92aWRlciIsInF1ZXJ5Q2xpZW50IiwiUm91dGUiLCJTd2l0Y2giLCJUb2FzdGVyIiwiSG9tZSIsIk5vdEZvdW5kIiwiQ3VzdG9tQ3Vyc29yIiwiTm9pc2VCYWNrZ3JvdW5kIiwiUHJvZ3Jlc3NCYXIiLCJSb3V0ZXIiLCJfYyIsIkFwcCIsIl9jMiIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJBcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBxdWVyeUNsaWVudCB9IGZyb20gXCIuL2xpYi9xdWVyeUNsaWVudFwiO1xuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCB9IGZyb20gXCJ3b3V0ZXJcIjtcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RvYXN0ZXJcIjtcbmltcG9ydCBIb21lIGZyb20gXCJAL3BhZ2VzL2hvbWVcIjtcbmltcG9ydCBOb3RGb3VuZCBmcm9tIFwiQC9wYWdlcy9ub3QtZm91bmRcIjtcbmltcG9ydCB7IEN1c3RvbUN1cnNvciB9IGZyb20gXCIuL2NvbXBvbmVudHMvdWkvY3Vyc29yXCI7XG5pbXBvcnQgeyBOb2lzZUJhY2tncm91bmQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3VpL25vaXNlLWJhY2tncm91bmRcIjtcbmltcG9ydCB7IFByb2dyZXNzQmFyIH0gZnJvbSBcIi4vY29tcG9uZW50cy91aS9wcm9ncmVzcy1iYXJcIjtcblxuZnVuY3Rpb24gUm91dGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxTd2l0Y2g+XG4gICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0hvbWV9IC8+XG4gICAgICA8Um91dGUgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgICA8L1N3aXRjaD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICA8Tm9pc2VCYWNrZ3JvdW5kIC8+XG4gICAgICAgIDxQcm9ncmVzc0JhciAvPlxuICAgICAgICA8Q3VzdG9tQ3Vyc29yIC8+XG4gICAgICAgIDxSb3V0ZXIgLz5cbiAgICAgICAgPFRvYXN0ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sImZpbGUiOiIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2NsaWVudC9zcmMvQXBwLnRzeCJ9