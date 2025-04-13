import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/magnetic-button.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f91473b9"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/components/ui/magnetic-button.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/@fs/home/runner/workspace/node_modules/.vite/deps/react.js?v=f91473b9"; const useRef = __vite__cjsImport3_react["useRef"]; const useState = __vite__cjsImport3_react["useState"];
import { motion } from "/@fs/home/runner/workspace/node_modules/.vite/deps/framer-motion.js?v=3cc6b24e";
import { cn } from "/src/lib/utils.ts";
export const MagneticButton = ({
  children,
  className,
  href,
  onClick,
  strength = 30
}) => {
  _s();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x / strength, y: y / strength });
  };
  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };
  const buttonContent = /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      "data-replit-metadata": "client/src/components/ui/magnetic-button.tsx:40:2",
      "data-component-name": "motion.div",
      ref,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      animate: { x: position.x, y: position.y },
      transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
      className: cn("relative inline-block", className),
      onClick,
      children
    },
    void 0,
    false,
    {
      fileName: "/home/runner/workspace/client/src/components/ui/magnetic-button.tsx",
      lineNumber: 40,
      columnNumber: 3
    },
    this
  );
  if (href) {
    return /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/components/ui/magnetic-button.tsx:54:11", "data-component-name": "a", href, children: buttonContent }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/components/ui/magnetic-button.tsx",
      lineNumber: 54,
      columnNumber: 12
    }, this);
  }
  return buttonContent;
};
_s(MagneticButton, "hbH7caSyCB/8l81czKB4usGYCi0=");
_c = MagneticButton;
var _c;
$RefreshReg$(_c, "MagneticButton");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/ui/magnetic-button.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/ui/magnetic-button.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBdUNJOzJCQXZDSjtBQUFnQkEsTUFBUUMsY0FBZ0IsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMvQyxTQUFTQyxjQUFjO0FBQ3ZCLFNBQVNDLFVBQVU7QUFVWixhQUFNQyxpQkFBZ0RBLENBQUM7QUFBQSxFQUM1REM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUMsV0FBVztBQUNiLE1BQU07QUFBQUMsS0FBQTtBQUNKLFFBQU0sQ0FBQ0MsVUFBVUMsV0FBVyxJQUFJWCxTQUFTLEVBQUVZLEdBQUcsR0FBR0MsR0FBRyxFQUFFLENBQUM7QUFDdkQsUUFBTUMsTUFBTWYsT0FBdUIsSUFBSTtBQUV2QyxRQUFNZ0Isa0JBQWtCQSxDQUFDQyxNQUF3QztBQUMvRCxRQUFJLENBQUNGLElBQUlHLFFBQVM7QUFFbEIsVUFBTSxFQUFFQyxTQUFTQyxRQUFRLElBQUlIO0FBQzdCLFVBQU0sRUFBRUksTUFBTUMsS0FBS0MsT0FBT0MsT0FBTyxJQUFJVCxJQUFJRyxRQUFRTyxzQkFBc0I7QUFFdkUsVUFBTVosSUFBSU0sV0FBV0UsT0FBT0UsUUFBUTtBQUNwQyxVQUFNVCxJQUFJTSxXQUFXRSxNQUFNRSxTQUFTO0FBRXBDWixnQkFBWSxFQUFFQyxHQUFHQSxJQUFJSixVQUFVSyxHQUFHQSxJQUFJTCxTQUFTLENBQUM7QUFBQSxFQUNsRDtBQUVBLFFBQU1pQixtQkFBbUJBLE1BQU07QUFDN0JkLGdCQUFZLEVBQUVDLEdBQUcsR0FBR0MsR0FBRyxFQUFFLENBQUM7QUFBQSxFQUM1QjtBQUVBLFFBQU1hLGdCQUNKO0FBQUEsSUFBQyxPQUFPO0FBQUEsSUFBUDtBQUFBLE1BQU87QUFBQTtBQUFBLE1BQ047QUFBQSxNQUNBLGFBQWFYO0FBQUFBLE1BQ2IsY0FBY1U7QUFBQUEsTUFDZCxTQUFTLEVBQUViLEdBQUdGLFNBQVNFLEdBQUdDLEdBQUdILFNBQVNHLEVBQUU7QUFBQSxNQUN4QyxZQUFZLEVBQUVjLE1BQU0sVUFBVUMsV0FBVyxLQUFLQyxTQUFTLElBQUlDLE1BQU0sSUFBSTtBQUFBLE1BQ3JFLFdBQVc1QixHQUFHLHlCQUF5QkcsU0FBUztBQUFBLE1BQ2hEO0FBQUEsTUFFQ0Q7QUFBQUE7QUFBQUEsSUFUSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFVQTtBQUdGLE1BQUlFLE1BQU07QUFDUixXQUFPLHVCQUFDLGlIQUFFLE1BQWFvQiwyQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUE4QjtBQUFBLEVBQ3ZDO0FBRUEsU0FBT0E7QUFDVDtBQUFFakIsR0E3Q1dOLGdCQUE2QztBQUFBNEIsS0FBN0M1QjtBQUE2QyxJQUFBNEI7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbInVzZVJlZiIsInVzZVN0YXRlIiwibW90aW9uIiwiY24iLCJNYWduZXRpY0J1dHRvbiIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiaHJlZiIsIm9uQ2xpY2siLCJzdHJlbmd0aCIsIl9zIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsIngiLCJ5IiwicmVmIiwiaGFuZGxlTW91c2VNb3ZlIiwiZSIsImN1cnJlbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsImhlaWdodCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhhbmRsZU1vdXNlTGVhdmUiLCJidXR0b25Db250ZW50IiwidHlwZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJtYXNzIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsibWFnbmV0aWMtYnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmludGVyZmFjZSBNYWduZXRpY0J1dHRvblByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBocmVmPzogc3RyaW5nO1xuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcbiAgc3RyZW5ndGg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBNYWduZXRpY0J1dHRvbjogUmVhY3QuRkM8TWFnbmV0aWNCdXR0b25Qcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBocmVmLFxuICBvbkNsaWNrLFxuICBzdHJlbmd0aCA9IDMwLFxufSkgPT4ge1xuICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKHsgeDogMCwgeTogMCB9KTtcbiAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBpZiAoIXJlZi5jdXJyZW50KSByZXR1cm47XG4gICAgXG4gICAgY29uc3QgeyBjbGllbnRYLCBjbGllbnRZIH0gPSBlO1xuICAgIGNvbnN0IHsgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0IH0gPSByZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBcbiAgICBjb25zdCB4ID0gY2xpZW50WCAtIChsZWZ0ICsgd2lkdGggLyAyKTtcbiAgICBjb25zdCB5ID0gY2xpZW50WSAtICh0b3AgKyBoZWlnaHQgLyAyKTtcbiAgICBcbiAgICBzZXRQb3NpdGlvbih7IHg6IHggLyBzdHJlbmd0aCwgeTogeSAvIHN0cmVuZ3RoIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgc2V0UG9zaXRpb24oeyB4OiAwLCB5OiAwIH0pO1xuICB9O1xuXG4gIGNvbnN0IGJ1dHRvbkNvbnRlbnQgPSAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIHJlZj17cmVmfVxuICAgICAgb25Nb3VzZU1vdmU9e2hhbmRsZU1vdXNlTW92ZX1cbiAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cbiAgICAgIGFuaW1hdGU9e3sgeDogcG9zaXRpb24ueCwgeTogcG9zaXRpb24ueSB9fVxuICAgICAgdHJhbnNpdGlvbj17eyB0eXBlOiBcInNwcmluZ1wiLCBzdGlmZm5lc3M6IDE1MCwgZGFtcGluZzogMTUsIG1hc3M6IDAuMSB9fVxuICAgICAgY2xhc3NOYW1lPXtjbihcInJlbGF0aXZlIGlubGluZS1ibG9ja1wiLCBjbGFzc05hbWUpfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xuXG4gIGlmIChocmVmKSB7XG4gICAgcmV0dXJuIDxhIGhyZWY9e2hyZWZ9PntidXR0b25Db250ZW50fTwvYT47XG4gIH1cblxuICByZXR1cm4gYnV0dG9uQ29udGVudDtcbn07XG4iXSwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3Jrc3BhY2UvY2xpZW50L3NyYy9jb21wb25lbnRzL3VpL21hZ25ldGljLWJ1dHRvbi50c3gifQ==