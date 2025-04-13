import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/section-heading.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f91473b9"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/components/ui/section-heading.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { motion } from "/@fs/home/runner/workspace/node_modules/.vite/deps/framer-motion.js?v=3cc6b24e";
import { fadeIn } from "/src/lib/framerAnimations.ts";
export function SectionHeading({
  subtitle,
  title,
  accentedWord,
  delay = 0,
  centered = true
}) {
  let formattedTitle = title;
  if (accentedWord) {
    const parts = title.split(accentedWord);
    formattedTitle = parts[0] + `<span class="text-deep-gold">${accentedWord}</span>` + parts[1];
  }
  return /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      "data-replit-metadata": "client/src/components/ui/section-heading.tsx:27:4",
      "data-component-name": "motion.div",
      variants: fadeIn("up", delay),
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true },
      className: `mb-16 ${centered ? "text-center" : ""}`,
      children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/components/ui/section-heading.tsx:34:6", "data-component-name": "h2", className: "text-sm font-inter uppercase tracking-widest text-deep-gold mb-2", children: subtitle }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/components/ui/section-heading.tsx",
          lineNumber: 34,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(
          "h3",
          {
            "data-replit-metadata": "client/src/components/ui/section-heading.tsx:37:6",
            "data-component-name": "h3",
            className: "text-4xl md:text-5xl font-playfair font-bold",
            dangerouslySetInnerHTML: { __html: formattedTitle }
          },
          void 0,
          false,
          {
            fileName: "/home/runner/workspace/client/src/components/ui/section-heading.tsx",
            lineNumber: 37,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/home/runner/workspace/client/src/components/ui/section-heading.tsx",
      lineNumber: 27,
      columnNumber: 5
    },
    this
  );
}
_c = SectionHeading;
var _c;
$RefreshReg$(_c, "SectionHeading");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/ui/section-heading.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/ui/section-heading.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBaUNNO0FBakNOLDJCQUF1QjtBQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN0QyxTQUFTQSxjQUFjO0FBVWhCLGdCQUFTQyxlQUFlO0FBQUEsRUFDN0JDO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDLFFBQVE7QUFBQSxFQUNSQyxXQUFXO0FBQ1EsR0FBRztBQUN0QixNQUFJQyxpQkFBaUJKO0FBRXJCLE1BQUlDLGNBQWM7QUFDaEIsVUFBTUksUUFBUUwsTUFBTU0sTUFBTUwsWUFBWTtBQUN0Q0cscUJBQWlCQyxNQUFNLENBQUMsSUFBSSxnQ0FBZ0NKLFlBQVksWUFBWUksTUFBTSxDQUFDO0FBQUEsRUFDN0Y7QUFFQSxTQUNFO0FBQUEsSUFBQyxPQUFPO0FBQUEsSUFBUDtBQUFBLE1BQU87QUFBQTtBQUFBLE1BQ04sVUFBVVIsT0FBTyxNQUFNSyxLQUFLO0FBQUEsTUFDNUIsU0FBUTtBQUFBLE1BQ1IsYUFBWTtBQUFBLE1BQ1osVUFBVSxFQUFFSyxNQUFNLEtBQUs7QUFBQSxNQUN2QixXQUFXLFNBQVNKLFdBQVcsZ0JBQWdCLEVBQUU7QUFBQSxNQUVqRDtBQUFBLCtCQUFDLGtIQUFHLFdBQVUsb0VBQ1hKLHNCQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFFQTtBQUFBLFFBQ0E7QUFBQSxVQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFDQyxXQUFVO0FBQUEsWUFDVix5QkFBeUIsRUFBRVMsUUFBUUosZUFBZTtBQUFBO0FBQUEsVUFGcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRXNEO0FBQUE7QUFBQTtBQUFBLElBWnhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWNBO0FBRUo7QUFBQ0ssS0EvQmVYO0FBQWMsSUFBQVc7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbImZhZGVJbiIsIlNlY3Rpb25IZWFkaW5nIiwic3VidGl0bGUiLCJ0aXRsZSIsImFjY2VudGVkV29yZCIsImRlbGF5IiwiY2VudGVyZWQiLCJmb3JtYXR0ZWRUaXRsZSIsInBhcnRzIiwic3BsaXQiLCJvbmNlIiwiX19odG1sIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsic2VjdGlvbi1oZWFkaW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgZmFkZUluIH0gZnJvbSBcIkAvbGliL2ZyYW1lckFuaW1hdGlvbnNcIjtcblxuaW50ZXJmYWNlIFNlY3Rpb25IZWFkaW5nUHJvcHMge1xuICBzdWJ0aXRsZTogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBhY2NlbnRlZFdvcmQ/OiBzdHJpbmc7XG4gIGRlbGF5PzogbnVtYmVyO1xuICBjZW50ZXJlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWN0aW9uSGVhZGluZyh7XG4gIHN1YnRpdGxlLFxuICB0aXRsZSxcbiAgYWNjZW50ZWRXb3JkLFxuICBkZWxheSA9IDAsXG4gIGNlbnRlcmVkID0gdHJ1ZSxcbn06IFNlY3Rpb25IZWFkaW5nUHJvcHMpIHtcbiAgbGV0IGZvcm1hdHRlZFRpdGxlID0gdGl0bGU7XG4gIFxuICBpZiAoYWNjZW50ZWRXb3JkKSB7XG4gICAgY29uc3QgcGFydHMgPSB0aXRsZS5zcGxpdChhY2NlbnRlZFdvcmQpO1xuICAgIGZvcm1hdHRlZFRpdGxlID0gcGFydHNbMF0gKyBgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRlZXAtZ29sZFwiPiR7YWNjZW50ZWRXb3JkfTwvc3Bhbj5gICsgcGFydHNbMV07XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICB2YXJpYW50cz17ZmFkZUluKFwidXBcIiwgZGVsYXkpfVxuICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICB3aGlsZUluVmlldz1cInNob3dcIlxuICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgY2xhc3NOYW1lPXtgbWItMTYgJHtjZW50ZXJlZCA/IFwidGV4dC1jZW50ZXJcIiA6IFwiXCJ9YH1cbiAgICA+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWludGVyIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgdGV4dC1kZWVwLWdvbGQgbWItMlwiPlxuICAgICAgICB7c3VidGl0bGV9XG4gICAgICA8L2gyPlxuICAgICAgPGgzIFxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBmb250LXBsYXlmYWlyIGZvbnQtYm9sZFwiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZm9ybWF0dGVkVGl0bGUgfX1cbiAgICAgIC8+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufVxuIl0sImZpbGUiOiIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2NsaWVudC9zcmMvY29tcG9uZW50cy91aS9zZWN0aW9uLWhlYWRpbmcudHN4In0=