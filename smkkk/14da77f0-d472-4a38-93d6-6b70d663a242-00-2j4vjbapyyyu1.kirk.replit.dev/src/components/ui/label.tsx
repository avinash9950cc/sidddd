import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/label.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f91473b9"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/components/ui/label.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/@fs/home/runner/workspace/node_modules/.vite/deps/react.js?v=f91473b9"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import * as LabelPrimitive from "/@fs/home/runner/workspace/node_modules/.vite/deps/@radix-ui_react-label.js?v=4bee9b91";
import { cva } from "/@fs/home/runner/workspace/node_modules/.vite/deps/class-variance-authority.js?v=9a74c803";
import { cn } from "/src/lib/utils.ts";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(
  _c = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    LabelPrimitive.Root,
    {
      "data-replit-metadata": "client/src/components/ui/label.tsx:16",
      "data-component-name": "LabelPrimitive.Root",
      ref,
      className: cn(labelVariants(), className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/runner/workspace/client/src/components/ui/label.tsx",
      lineNumber: 16,
      columnNumber: 1
    },
    this
  )
);
_c2 = Label;
Label.displayName = LabelPrimitive.Root.displayName;
export { Label };
var _c, _c2;
$RefreshReg$(_c, "Label$React.forwardRef");
$RefreshReg$(_c2, "Label");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/ui/label.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/ui/label.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBZUU7QUFmRixPQUFPLG9CQUFnQjtBQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM5QixZQUFZQSxvQkFBb0I7QUFDaEMsU0FBU0MsV0FBOEI7QUFFdkMsU0FBU0MsVUFBVTtBQUVuQixNQUFNQyxnQkFBZ0JGO0FBQUFBLEVBQ3BCO0FBQ0Y7QUFFQSxNQUFNRyxRQUFRQyxNQUFNQztBQUFBQSxFQUluQkMsS0FBQ0EsQ0FBQyxFQUFFQyxXQUFXLEdBQUdDLE1BQU0sR0FBR0MsUUFDMUI7QUFBQSxJQUFDLGVBQWU7QUFBQSxJQUFmO0FBQUEsTUFBZTtBQUFBO0FBQUEsTUFDZDtBQUFBLE1BQ0EsV0FBV1IsR0FBR0MsY0FBYyxHQUFHSyxTQUFTO0FBQUEsTUFDeEMsR0FBSUM7QUFBQUE7QUFBQUEsSUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFHWTtBQUViO0FBQUNFLE1BVklQO0FBV05BLE1BQU1RLGNBQWNaLGVBQWVhLEtBQUtEO0FBRXhDLFNBQVNSO0FBQU8sSUFBQUcsSUFBQUk7QUFBQUcsYUFBQVAsSUFBQTtBQUFBTyxhQUFBSCxLQUFBIiwibmFtZXMiOlsiTGFiZWxQcmltaXRpdmUiLCJjdmEiLCJjbiIsImxhYmVsVmFyaWFudHMiLCJMYWJlbCIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsIl9jIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJyZWYiLCJfYzIiLCJkaXNwbGF5TmFtZSIsIlJvb3QiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsibGFiZWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgKiBhcyBMYWJlbFByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWxhYmVsXCJcbmltcG9ydCB7IGN2YSwgdHlwZSBWYXJpYW50UHJvcHMgfSBmcm9tIFwiY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5XCJcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIlxuXG5jb25zdCBsYWJlbFZhcmlhbnRzID0gY3ZhKFxuICBcInRleHQtc20gZm9udC1tZWRpdW0gbGVhZGluZy1ub25lIHBlZXItZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIHBlZXItZGlzYWJsZWQ6b3BhY2l0eS03MFwiXG4pXG5cbmNvbnN0IExhYmVsID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgTGFiZWxQcmltaXRpdmUuUm9vdD4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgTGFiZWxQcmltaXRpdmUuUm9vdD4gJlxuICAgIFZhcmlhbnRQcm9wczx0eXBlb2YgbGFiZWxWYXJpYW50cz5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPExhYmVsUHJpbWl0aXZlLlJvb3RcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKGxhYmVsVmFyaWFudHMoKSwgY2xhc3NOYW1lKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKVxuTGFiZWwuZGlzcGxheU5hbWUgPSBMYWJlbFByaW1pdGl2ZS5Sb290LmRpc3BsYXlOYW1lXG5cbmV4cG9ydCB7IExhYmVsIH1cbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9jbGllbnQvc3JjL2NvbXBvbmVudHMvdWkvbGFiZWwudHN4In0=