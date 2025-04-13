import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/toaster.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f91473b9"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/components/ui/toaster.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import { useToast } from "/src/hooks/use-toast.ts";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport
} from "/src/components/ui/toast.tsx";
export function Toaster() {
  _s();
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxDEV(ToastProvider, { "data-replit-metadata": "client/src/components/ui/toaster.tsx:15:4", "data-component-name": "ToastProvider", children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxDEV(Toast, { "data-replit-metadata": "client/src/components/ui/toaster.tsx:18:10", "data-component-name": "Toast", ...props, children: [
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/ui/toaster.tsx:19:12", "data-component-name": "div", className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsxDEV(ToastTitle, { "data-replit-metadata": "client/src/components/ui/toaster.tsx:20:24", "data-component-name": "ToastTitle", children: title }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/ui/toaster.tsx",
            lineNumber: 20,
            columnNumber: 25
          }, this),
          description && /* @__PURE__ */ jsxDEV(ToastDescription, { "data-replit-metadata": "client/src/components/ui/toaster.tsx:22:14", "data-component-name": "ToastDescription", children: description }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/ui/toaster.tsx",
            lineNumber: 22,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/components/ui/toaster.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this),
        action,
        /* @__PURE__ */ jsxDEV(ToastClose, { "data-replit-metadata": "client/src/components/ui/toaster.tsx:26:12", "data-component-name": "ToastClose" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/components/ui/toaster.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this)
      ] }, id, true, {
        fileName: "/home/runner/workspace/client/src/components/ui/toaster.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this);
    }),
    /* @__PURE__ */ jsxDEV(ToastViewport, { "data-replit-metadata": "client/src/components/ui/toaster.tsx:30:6", "data-component-name": "ToastViewport" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/components/ui/toaster.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/components/ui/toaster.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
_s(Toaster, "1YTCnXrq2qRowe0H/LBWLjtXoYc=", false, function() {
  return [useToast];
});
_c = Toaster;
var _c;
$RefreshReg$(_c, "Toaster");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/ui/toaster.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/ui/toaster.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBbUJ3QjsyQkFuQnhCO0FBQWlCLE1BQVEscUJBQW1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzVDO0FBQUEsRUFDRUE7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsT0FDSztBQUVBLGdCQUFTQyxVQUFVO0FBQUFDLEtBQUE7QUFDeEIsUUFBTSxFQUFFQyxPQUFPLElBQUlDLFNBQVM7QUFFNUIsU0FDRSx1QkFBQyw4SEFDRUQ7QUFBQUEsV0FBT0UsSUFBSSxTQUFVLEVBQUVDLElBQUlDLE9BQU9DLGFBQWFDLFFBQVEsR0FBR0MsTUFBTSxHQUFHO0FBQ2xFLGFBQ0UsdUJBQUMsK0dBQWUsR0FBSUEsT0FDbEI7QUFBQSwrQkFBQyw2R0FBSSxXQUFVLGNBQ1pIO0FBQUFBLG1CQUFTLHVCQUFDLHlIQUFZQSxtQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFtQjtBQUFBLFVBQzVCQyxlQUNDLHVCQUFDLHFJQUFrQkEseUJBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQStCO0FBQUEsYUFIbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUtBO0FBQUEsUUFDQ0M7QUFBQUEsUUFDRCx1QkFBQywySEFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVc7QUFBQSxXQVJESCxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFTQTtBQUFBLElBRUosQ0FBQztBQUFBLElBQ0QsdUJBQUMsZ0lBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFjO0FBQUEsT0FmaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWdCQTtBQUVKO0FBQUNKLEdBdEJlRCxTQUFPO0FBQUEsVUFDRkcsUUFBUTtBQUFBO0FBQUFPLEtBRGJWO0FBQU8sSUFBQVU7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIlRvYXN0IiwiVG9hc3RDbG9zZSIsIlRvYXN0RGVzY3JpcHRpb24iLCJUb2FzdFByb3ZpZGVyIiwiVG9hc3RUaXRsZSIsIlRvYXN0Vmlld3BvcnQiLCJUb2FzdGVyIiwiX3MiLCJ0b2FzdHMiLCJ1c2VUb2FzdCIsIm1hcCIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsInByb3BzIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsidG9hc3Rlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVG9hc3QgfSBmcm9tIFwiQC9ob29rcy91c2UtdG9hc3RcIlxuaW1wb3J0IHtcbiAgVG9hc3QsXG4gIFRvYXN0Q2xvc2UsXG4gIFRvYXN0RGVzY3JpcHRpb24sXG4gIFRvYXN0UHJvdmlkZXIsXG4gIFRvYXN0VGl0bGUsXG4gIFRvYXN0Vmlld3BvcnQsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdG9hc3RcIlxuXG5leHBvcnQgZnVuY3Rpb24gVG9hc3RlcigpIHtcbiAgY29uc3QgeyB0b2FzdHMgfSA9IHVzZVRvYXN0KClcblxuICByZXR1cm4gKFxuICAgIDxUb2FzdFByb3ZpZGVyPlxuICAgICAge3RvYXN0cy5tYXAoZnVuY3Rpb24gKHsgaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgYWN0aW9uLCAuLi5wcm9wcyB9KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFRvYXN0IGtleT17aWR9IHsuLi5wcm9wc30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTFcIj5cbiAgICAgICAgICAgICAge3RpdGxlICYmIDxUb2FzdFRpdGxlPnt0aXRsZX08L1RvYXN0VGl0bGU+fVxuICAgICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgICAgICAgIDxUb2FzdERlc2NyaXB0aW9uPntkZXNjcmlwdGlvbn08L1RvYXN0RGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHthY3Rpb259XG4gICAgICAgICAgICA8VG9hc3RDbG9zZSAvPlxuICAgICAgICAgIDwvVG9hc3Q+XG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgICAgPFRvYXN0Vmlld3BvcnQgLz5cbiAgICA8L1RvYXN0UHJvdmlkZXI+XG4gIClcbn1cbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9jbGllbnQvc3JjL2NvbXBvbmVudHMvdWkvdG9hc3Rlci50c3gifQ==