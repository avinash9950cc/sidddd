import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/button.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f91473b9"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/components/ui/button.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/@fs/home/runner/workspace/node_modules/.vite/deps/react.js?v=f91473b9"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import { Slot } from "/@fs/home/runner/workspace/node_modules/.vite/deps/@radix-ui_react-slot.js?v=114a00ff";
import { cva } from "/@fs/home/runner/workspace/node_modules/.vite/deps/class-variance-authority.js?v=9a74c803";
import { cn } from "/src/lib/utils.ts";
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  _c = ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxDEV(
      Comp,
      {
        "data-replit-metadata": "client/src/components/ui/button.tsx:46:4",
        "data-component-name": "Comp",
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/client/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 5
      },
      this
    );
  }
);
_c2 = Button;
Button.displayName = "Button";
export { Button, buttonVariants };
var _c, _c2;
$RefreshReg$(_c, "Button$React.forwardRef");
$RefreshReg$(_c2, "Button");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/ui/button.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/ui/button.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBNkNNO0FBN0NOLE9BQU8sb0JBQWdCO0FBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzlCLFNBQVNBLFlBQVk7QUFDckIsU0FBU0MsV0FBOEI7QUFFdkMsU0FBU0MsVUFBVTtBQUVuQixNQUFNQyxpQkFBaUJGO0FBQUFBLEVBQ3JCO0FBQUEsRUFDQTtBQUFBLElBQ0VHLFVBQVU7QUFBQSxNQUNSQyxTQUFTO0FBQUEsUUFDUEMsU0FBUztBQUFBLFFBQ1RDLGFBQ0U7QUFBQSxRQUNGQyxTQUNFO0FBQUEsUUFDRkMsV0FDRTtBQUFBLFFBQ0ZDLE9BQU87QUFBQSxRQUNQQyxNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0FDLE1BQU07QUFBQSxRQUNKTixTQUFTO0FBQUEsUUFDVE8sSUFBSTtBQUFBLFFBQ0pDLElBQUk7QUFBQSxRQUNKQyxNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxJQUNBQyxpQkFBaUI7QUFBQSxNQUNmWCxTQUFTO0FBQUEsTUFDVE8sTUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQ0Y7QUFRQSxNQUFNSyxTQUFTQyxNQUFNQztBQUFBQSxFQUEwQ0MsS0FDN0RBLENBQUMsRUFBRUMsV0FBV2hCLFNBQVNPLE1BQU1VLFVBQVUsT0FBTyxHQUFHQyxNQUFNLEdBQUdDLFFBQVE7QUFDaEUsVUFBTUMsT0FBT0gsVUFBVXRCLE9BQU87QUFDOUIsV0FDRTtBQUFBLE1BQUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUNDLFdBQVdFLEdBQUdDLGVBQWUsRUFBRUUsU0FBU08sTUFBTVMsVUFBVSxDQUFDLENBQUM7QUFBQSxRQUMxRDtBQUFBLFFBQ0EsR0FBSUU7QUFBQUE7QUFBQUEsTUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFHWTtBQUFBLEVBR2hCO0FBQ0Y7QUFBQ0csTUFYS1Q7QUFZTkEsT0FBT1UsY0FBYztBQUVyQixTQUFTVixRQUFRZDtBQUFnQixJQUFBaUIsSUFBQU07QUFBQUUsYUFBQVIsSUFBQTtBQUFBUSxhQUFBRixLQUFBIiwibmFtZXMiOlsiU2xvdCIsImN2YSIsImNuIiwiYnV0dG9uVmFyaWFudHMiLCJ2YXJpYW50cyIsInZhcmlhbnQiLCJkZWZhdWx0IiwiZGVzdHJ1Y3RpdmUiLCJvdXRsaW5lIiwic2Vjb25kYXJ5IiwiZ2hvc3QiLCJsaW5rIiwic2l6ZSIsInNtIiwibGciLCJpY29uIiwiZGVmYXVsdFZhcmlhbnRzIiwiQnV0dG9uIiwiUmVhY3QiLCJmb3J3YXJkUmVmIiwiX2MiLCJjbGFzc05hbWUiLCJhc0NoaWxkIiwicHJvcHMiLCJyZWYiLCJDb21wIiwiX2MyIiwiZGlzcGxheU5hbWUiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiYnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgU2xvdCB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc2xvdFwiXG5pbXBvcnQgeyBjdmEsIHR5cGUgVmFyaWFudFByb3BzIH0gZnJvbSBcImNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eVwiXG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcblxuY29uc3QgYnV0dG9uVmFyaWFudHMgPSBjdmEoXG4gIFwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIHdoaXRlc3BhY2Utbm93cmFwIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bSByaW5nLW9mZnNldC1iYWNrZ3JvdW5kIHRyYW5zaXRpb24tY29sb3JzIGZvY3VzLXZpc2libGU6b3V0bGluZS1ub25lIGZvY3VzLXZpc2libGU6cmluZy0yIGZvY3VzLXZpc2libGU6cmluZy1yaW5nIGZvY3VzLXZpc2libGU6cmluZy1vZmZzZXQtMiBkaXNhYmxlZDpwb2ludGVyLWV2ZW50cy1ub25lIGRpc2FibGVkOm9wYWNpdHktNTAgWyZfc3ZnXTpwb2ludGVyLWV2ZW50cy1ub25lIFsmX3N2Z106c2l6ZS00IFsmX3N2Z106c2hyaW5rLTBcIixcbiAge1xuICAgIHZhcmlhbnRzOiB7XG4gICAgICB2YXJpYW50OiB7XG4gICAgICAgIGRlZmF1bHQ6IFwiYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBob3ZlcjpiZy1wcmltYXJ5LzkwXCIsXG4gICAgICAgIGRlc3RydWN0aXZlOlxuICAgICAgICAgIFwiYmctZGVzdHJ1Y3RpdmUgdGV4dC1kZXN0cnVjdGl2ZS1mb3JlZ3JvdW5kIGhvdmVyOmJnLWRlc3RydWN0aXZlLzkwXCIsXG4gICAgICAgIG91dGxpbmU6XG4gICAgICAgICAgXCJib3JkZXIgYm9yZGVyLWlucHV0IGJnLWJhY2tncm91bmQgaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYWNjZW50LWZvcmVncm91bmRcIixcbiAgICAgICAgc2Vjb25kYXJ5OlxuICAgICAgICAgIFwiYmctc2Vjb25kYXJ5IHRleHQtc2Vjb25kYXJ5LWZvcmVncm91bmQgaG92ZXI6Ymctc2Vjb25kYXJ5LzgwXCIsXG4gICAgICAgIGdob3N0OiBcImhvdmVyOmJnLWFjY2VudCBob3Zlcjp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kXCIsXG4gICAgICAgIGxpbms6IFwidGV4dC1wcmltYXJ5IHVuZGVybGluZS1vZmZzZXQtNCBob3Zlcjp1bmRlcmxpbmVcIixcbiAgICAgIH0sXG4gICAgICBzaXplOiB7XG4gICAgICAgIGRlZmF1bHQ6IFwiaC0xMCBweC00IHB5LTJcIixcbiAgICAgICAgc206IFwiaC05IHJvdW5kZWQtbWQgcHgtM1wiLFxuICAgICAgICBsZzogXCJoLTExIHJvdW5kZWQtbWQgcHgtOFwiLFxuICAgICAgICBpY29uOiBcImgtMTAgdy0xMFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlZmF1bHRWYXJpYW50czoge1xuICAgICAgdmFyaWFudDogXCJkZWZhdWx0XCIsXG4gICAgICBzaXplOiBcImRlZmF1bHRcIixcbiAgICB9LFxuICB9XG4pXG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uUHJvcHNcbiAgZXh0ZW5kcyBSZWFjdC5CdXR0b25IVE1MQXR0cmlidXRlczxIVE1MQnV0dG9uRWxlbWVudD4sXG4gICAgVmFyaWFudFByb3BzPHR5cGVvZiBidXR0b25WYXJpYW50cz4ge1xuICBhc0NoaWxkPzogYm9vbGVhblxufVxuXG5jb25zdCBCdXR0b24gPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxCdXR0b25FbGVtZW50LCBCdXR0b25Qcm9wcz4oXG4gICh7IGNsYXNzTmFtZSwgdmFyaWFudCwgc2l6ZSwgYXNDaGlsZCA9IGZhbHNlLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcbiAgICBjb25zdCBDb21wID0gYXNDaGlsZCA/IFNsb3QgOiBcImJ1dHRvblwiXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wXG4gICAgICAgIGNsYXNzTmFtZT17Y24oYnV0dG9uVmFyaWFudHMoeyB2YXJpYW50LCBzaXplLCBjbGFzc05hbWUgfSkpfVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbilcbkJ1dHRvbi5kaXNwbGF5TmFtZSA9IFwiQnV0dG9uXCJcblxuZXhwb3J0IHsgQnV0dG9uLCBidXR0b25WYXJpYW50cyB9XG4iXSwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3Jrc3BhY2UvY2xpZW50L3NyYy9jb21wb25lbnRzL3VpL2J1dHRvbi50c3gifQ==