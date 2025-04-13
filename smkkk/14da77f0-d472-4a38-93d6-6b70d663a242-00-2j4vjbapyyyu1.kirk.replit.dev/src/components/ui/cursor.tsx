import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/cursor.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f91473b9"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/components/ui/cursor.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/@fs/home/runner/workspace/node_modules/.vite/deps/react.js?v=f91473b9"; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
import { cn } from "/src/lib/utils.ts";
import { motion } from "/@fs/home/runner/workspace/node_modules/.vite/deps/framer-motion.js?v=3cc6b24e";
export const CustomCursor = () => {
  _s();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorSize, setCursorSize] = useState(40);
  const isMobile = () => {
    return window.innerWidth < 768;
  };
  useEffect(() => {
    if (isMobile()) return;
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
      const target = e.target;
      const isInteractive = target.tagName.toLowerCase() === "a" || target.tagName.toLowerCase() === "button" || target.classList.contains("tilt-card") || target.tagName.toLowerCase() === "input" || target.tagName.toLowerCase() === "textarea" || target.tagName.toLowerCase() === "select" || target.closest("a") !== null || target.closest("button") !== null;
      setIsPointer(isInteractive);
      setCursorSize(isInteractive ? 60 : 40);
    };
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    const handleMouseEnter = () => {
      setIsVisible(true);
    };
    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);
  if (isMobile() || !isVisible) return null;
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-replit-metadata": "client/src/components/ui/cursor.tsx:64:6",
        "data-component-name": "motion.div",
        className: cn(
          "fixed w-10 h-10 rounded-full border-2 border-deep-gold pointer-events-none z-[9999]",
          isPointer && "bg-deep-gold/10"
        ),
        style: {
          left: position.x,
          top: position.y
        },
        animate: {
          width: cursorSize,
          height: cursorSize,
          x: -cursorSize / 2,
          y: -cursorSize / 2,
          transition: { type: "spring", stiffness: 150, damping: 15 }
        }
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/client/src/components/ui/cursor.tsx",
        lineNumber: 64,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-replit-metadata": "client/src/components/ui/cursor.tsx:83:6",
        "data-component-name": "motion.div",
        className: "fixed w-2 h-2 bg-deep-gold rounded-full pointer-events-none z-[9999]",
        style: {
          left: position.x,
          top: position.y
        },
        animate: {
          x: -4,
          y: -4,
          transition: { type: "spring", stiffness: 250, damping: 20 }
        }
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/client/src/components/ui/cursor.tsx",
        lineNumber: 83,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/components/ui/cursor.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
};
_s(CustomCursor, "/WCLyjk2wwbTKLsmAxrk21LC8G0=");
_c = CustomCursor;
var _c;
$RefreshReg$(_c, "CustomCursor");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/ui/cursor.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/ui/cursor.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUEsTUFBQyxPQUFPO0FBQUEsTUFBUDtBQUFBLFFBQU87QUFBQTtBQUFBLFFBQ04sV0FBVTtBQUFBLFFBQ1YsT0FBTztBQUFBLFVBQ0xQLE1BQU05QixTQUFTRTtBQUFBQSxVQUNmNkIsS0FBSy9CLFNBQVNHO0FBQUFBLFFBQ2hCO0FBQUEsUUFDQSxTQUFTO0FBQUEsVUFDUEQsR0FBRztBQUFBLFVBQ0hDLEdBQUc7QUFBQSxVQUNIK0IsWUFBWSxFQUFFQyxNQUFNLFVBQVVDLFdBQVcsS0FBS0MsU0FBUyxHQUFHO0FBQUEsUUFDNUQ7QUFBQTtBQUFBLE1BVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVUk7QUFBQSxPQS9CTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBaUNBO0FBRUo7QUFBRXRDLEdBNUZXRCxjQUFZO0FBQUF3QyxLQUFaeEM7QUFBWSxJQUFBd0M7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbInVzZVN0YXRlIiwiY24iLCJtb3Rpb24iLCJDdXN0b21DdXJzb3IiLCJfcyIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJ4IiwieSIsImlzUG9pbnRlciIsInNldElzUG9pbnRlciIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsImN1cnNvclNpemUiLCJzZXRDdXJzb3JTaXplIiwiaXNNb2JpbGUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidXNlRWZmZWN0IiwidXBkYXRlUG9zaXRpb24iLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJ0YXJnZXQiLCJpc0ludGVyYWN0aXZlIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJjbG9zZXN0IiwiaGFuZGxlTW91c2VMZWF2ZSIsImhhbmRsZU1vdXNlRW50ZXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibGVmdCIsInRvcCIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNpdGlvbiIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiY3Vyc29yLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuZXhwb3J0IGNvbnN0IEN1c3RvbUN1cnNvciA9ICgpID0+IHtcbiAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7IHg6IDAsIHk6IDAgfSk7XG4gIGNvbnN0IFtpc1BvaW50ZXIsIHNldElzUG9pbnRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjdXJzb3JTaXplLCBzZXRDdXJzb3JTaXplXSA9IHVzZVN0YXRlKDQwKTtcblxuICAvLyBPbmx5IGVuYWJsZSBjdXN0b20gY3Vyc29yIG9uIGRlc2t0b3BcbiAgY29uc3QgaXNNb2JpbGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4O1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzTW9iaWxlKCkpIHJldHVybjtcblxuICAgIGNvbnN0IHVwZGF0ZVBvc2l0aW9uID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIHNldFBvc2l0aW9uKHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfSk7XG4gICAgICBcbiAgICAgIGlmICghaXNWaXNpYmxlKSBzZXRJc1Zpc2libGUodHJ1ZSk7XG4gICAgICBcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBlbGVtZW50IHVuZGVyIHRoZSBjdXJzb3Igc2hvdWxkIHNob3cgYSBwb2ludGVyXG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IGlzSW50ZXJhY3RpdmUgPSBcbiAgICAgICAgdGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2EnIHx8IFxuICAgICAgICB0YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYnV0dG9uJyB8fCBcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGlsdC1jYXJkJykgfHxcbiAgICAgICAgdGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0JyB8fFxuICAgICAgICB0YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAndGV4dGFyZWEnIHx8XG4gICAgICAgIHRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzZWxlY3QnIHx8XG4gICAgICAgIHRhcmdldC5jbG9zZXN0KCdhJykgIT09IG51bGwgfHwgXG4gICAgICAgIHRhcmdldC5jbG9zZXN0KCdidXR0b24nKSAhPT0gbnVsbDtcbiAgICAgICAgXG4gICAgICBzZXRJc1BvaW50ZXIoaXNJbnRlcmFjdGl2ZSk7XG4gICAgICBzZXRDdXJzb3JTaXplKGlzSW50ZXJhY3RpdmUgPyA2MCA6IDQwKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICAgIHNldElzVmlzaWJsZShmYWxzZSk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBoYW5kbGVNb3VzZUVudGVyID0gKCkgPT4ge1xuICAgICAgc2V0SXNWaXNpYmxlKHRydWUpO1xuICAgIH07XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB1cGRhdGVQb3NpdGlvbik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGhhbmRsZU1vdXNlTGVhdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBoYW5kbGVNb3VzZUVudGVyKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB1cGRhdGVQb3NpdGlvbik7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgaGFuZGxlTW91c2VMZWF2ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaGFuZGxlTW91c2VFbnRlcik7XG4gICAgfTtcbiAgfSwgW2lzVmlzaWJsZV0pO1xuXG4gIGlmIChpc01vYmlsZSgpIHx8ICFpc1Zpc2libGUpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiBNYWluIGN1cnNvciBjaXJjbGUgKi99XG4gICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICBcImZpeGVkIHctMTAgaC0xMCByb3VuZGVkLWZ1bGwgYm9yZGVyLTIgYm9yZGVyLWRlZXAtZ29sZCBwb2ludGVyLWV2ZW50cy1ub25lIHotWzk5OTldXCIsXG4gICAgICAgICAgaXNQb2ludGVyICYmIFwiYmctZGVlcC1nb2xkLzEwXCJcbiAgICAgICAgKX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBsZWZ0OiBwb3NpdGlvbi54LFxuICAgICAgICAgIHRvcDogcG9zaXRpb24ueSxcbiAgICAgICAgfX1cbiAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgIHdpZHRoOiBjdXJzb3JTaXplLFxuICAgICAgICAgIGhlaWdodDogY3Vyc29yU2l6ZSxcbiAgICAgICAgICB4OiAtY3Vyc29yU2l6ZSAvIDIsXG4gICAgICAgICAgeTogLWN1cnNvclNpemUgLyAyLFxuICAgICAgICAgIHRyYW5zaXRpb246IHsgdHlwZTogXCJzcHJpbmdcIiwgc3RpZmZuZXNzOiAxNTAsIGRhbXBpbmc6IDE1IH1cbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICBcbiAgICAgIHsvKiBDdXJzb3IgZG90ICovfVxuICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHctMiBoLTIgYmctZGVlcC1nb2xkIHJvdW5kZWQtZnVsbCBwb2ludGVyLWV2ZW50cy1ub25lIHotWzk5OTldXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBsZWZ0OiBwb3NpdGlvbi54LFxuICAgICAgICAgIHRvcDogcG9zaXRpb24ueSxcbiAgICAgICAgfX1cbiAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgIHg6IC00LFxuICAgICAgICAgIHk6IC00LFxuICAgICAgICAgIHRyYW5zaXRpb246IHsgdHlwZTogXCJzcHJpbmdcIiwgc3RpZmZuZXNzOiAyNTAsIGRhbXBpbmc6IDIwIH1cbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuIl0sImZpbGUiOiIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2NsaWVudC9zcmMvY29tcG9uZW50cy91aS9jdXJzb3IudHN4In0=