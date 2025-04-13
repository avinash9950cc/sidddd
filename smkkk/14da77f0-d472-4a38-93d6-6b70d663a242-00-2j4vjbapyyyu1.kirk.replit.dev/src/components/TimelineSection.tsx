import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/TimelineSection.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f91473b9"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/components/TimelineSection.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { motion } from "/@fs/home/runner/workspace/node_modules/.vite/deps/framer-motion.js?v=3cc6b24e";
import { SectionHeading } from "/src/components/ui/section-heading.tsx";
import { fadeIn } from "/src/lib/framerAnimations.ts";
import { resumeData } from "/src/lib/utils.ts";
export const TimelineSection = () => {
  const timelineItems = [
    ...resumeData.experiences,
    ...resumeData.education.filter((item) => item.startDate)
    // Only include education with start dates
  ].sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB.getTime() - dateA.getTime();
  });
  return /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/components/TimelineSection.tsx:19:4", "data-component-name": "section", className: "py-20 bg-black relative", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/TimelineSection.tsx:20:6", "data-component-name": "div", className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxDEV(
      SectionHeading,
      {
        "data-replit-metadata": "client/src/components/TimelineSection.tsx:21:8",
        "data-component-name": "SectionHeading",
        subtitle: "My Journey",
        title: "Career Timeline",
        accentedWord: " Timeline"
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/client/src/components/TimelineSection.tsx",
        lineNumber: 21,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/TimelineSection.tsx:27:8", "data-component-name": "div", className: "relative", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/TimelineSection.tsx:29:10", "data-component-name": "div", className: "absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-deep-gold/30" }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/components/TimelineSection.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      timelineItems.map(
        (item, index) => /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            "data-replit-metadata": "client/src/components/TimelineSection.tsx:33:10",
            "data-component-name": "motion.div",
            className: "relative z-10 mb-16",
            variants: fadeIn("up", 0.2 * index),
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, amount: 0.3 },
            children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/TimelineSection.tsx:41:14", "data-component-name": "div", className: "flex flex-col md:flex-row items-center", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/TimelineSection.tsx:43:16", "data-component-name": "div", className: `md:w-1/2 md:pr-12 mb-8 md:mb-0 ${index % 2 === 0 ? "text-right" : "md:text-right"}`, children: index % 2 === 0 ? /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/TimelineSection.tsx:45:16", "data-component-name": "div", children: [
                /* @__PURE__ */ jsxDEV("h4", { "data-replit-metadata": "client/src/components/TimelineSection.tsx:46:22", "data-component-name": "h4", className: "text-deep-gold font-playfair text-2xl mb-2", children: item.title || item.degree || item.subject }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/TimelineSection.tsx",
                  lineNumber: 46,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/TimelineSection.tsx:49:22", "data-component-name": "p", className: "text-ivory/80 font-inter mb-1", children: [
                  item.company || item.institution,
                  " | ",
                  item.location
                ] }, void 0, true, {
                  fileName: "/home/runner/workspace/client/src/components/TimelineSection.tsx",
                  lineNumber: 49,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/TimelineSection.tsx:52:22", "data-component-name": "p", className: "text-deep-gold/70 font-inter text-sm", children: [
                  item.startDate,
                  " - ",
                  item.endDate
                ] }, void 0, true, {
                  fileName: "/home/runner/workspace/client/src/components/TimelineSection.tsx",
                  lineNumber: 52,
                  columnNumber: 23
                }, this),
                item.description && /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/TimelineSection.tsx:56:18", "data-component-name": "p", className: "mt-4 text-ivory/70 font-inter", children: item.description }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/TimelineSection.tsx",
                  lineNumber: 56,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/client/src/components/TimelineSection.tsx",
                lineNumber: 45,
                columnNumber: 17
              }, this) : null }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/components/TimelineSection.tsx",
                lineNumber: 43,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/TimelineSection.tsx:63:16", "data-component-name": "div", className: "w-4 h-4 bg-deep-gold rounded-full border-4 border-black" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/components/TimelineSection.tsx",
                lineNumber: 63,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/TimelineSection.tsx:66:16", "data-component-name": "div", className: "md:w-1/2 md:pl-12", children: index % 2 === 1 ? /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/TimelineSection.tsx:68:16", "data-component-name": "div", children: [
                /* @__PURE__ */ jsxDEV("h4", { "data-replit-metadata": "client/src/components/TimelineSection.tsx:69:22", "data-component-name": "h4", className: "text-deep-gold font-playfair text-2xl mb-2", children: item.title || item.degree || item.subject }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/TimelineSection.tsx",
                  lineNumber: 69,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/TimelineSection.tsx:72:22", "data-component-name": "p", className: "text-ivory/80 font-inter mb-1", children: [
                  item.company || item.institution,
                  " | ",
                  item.location
                ] }, void 0, true, {
                  fileName: "/home/runner/workspace/client/src/components/TimelineSection.tsx",
                  lineNumber: 72,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/TimelineSection.tsx:75:22", "data-component-name": "p", className: "text-deep-gold/70 font-inter text-sm", children: [
                  item.startDate,
                  " - ",
                  item.endDate
                ] }, void 0, true, {
                  fileName: "/home/runner/workspace/client/src/components/TimelineSection.tsx",
                  lineNumber: 75,
                  columnNumber: 23
                }, this),
                item.description && /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/TimelineSection.tsx:79:18", "data-component-name": "p", className: "mt-4 text-ivory/70 font-inter", children: item.description }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/TimelineSection.tsx",
                  lineNumber: 79,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/client/src/components/TimelineSection.tsx",
                lineNumber: 68,
                columnNumber: 17
              }, this) : null }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/components/TimelineSection.tsx",
                lineNumber: 66,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/client/src/components/TimelineSection.tsx",
              lineNumber: 41,
              columnNumber: 15
            }, this)
          },
          index,
          false,
          {
            fileName: "/home/runner/workspace/client/src/components/TimelineSection.tsx",
            lineNumber: 33,
            columnNumber: 11
          },
          this
        )
      )
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/client/src/components/TimelineSection.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/components/TimelineSection.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/runner/workspace/client/src/components/TimelineSection.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
};
_c = TimelineSection;
var _c;
$RefreshReg$(_c, "TimelineSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/TimelineSection.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/TimelineSection.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFBO0FBQUE7QUFBQSx1QkFFQTtBQUFBLGdCQUNBLHVCQUFDLDhHQUFFLFdBQVUsaUNBQ1ZmO0FBQUFBLHVCQUFLZ0IsV0FBV2hCLEtBQUtpQjtBQUFBQSxrQkFBWTtBQUFBLGtCQUFJakIsS0FBS2tCO0FBQUFBLHFCQUQ3QztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVBO0FBQUEsZ0JBQ0EsdUJBQUMsOEdBQUUsV0FBVSx3Q0FDVmxCO0FBQUFBLHVCQUFLQztBQUFBQSxrQkFBVTtBQUFBLGtCQUFJRCxLQUFLbUI7QUFBQUEscUJBRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRUE7QUFBQSxnQkFDQ25CLEtBQUtvQixlQUNKLHVCQUFDLDhHQUFFLFdBQVUsaUNBQWlDcEIsZUFBS29CLGVBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQStEO0FBQUEsbUJBWG5FO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBYUEsSUFDRSxRQWhCTjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWlCQTtBQUFBLGlCQTFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTJDQTtBQUFBO0FBQUEsVUFsREtWO0FBQUFBLFVBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQW9EQTtBQUFBLE1BQ0Q7QUFBQSxTQTNESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBNERBO0FBQUEsT0FuRUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQW9FQSxLQXJFRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBc0VBO0FBRUo7QUFBRVcsS0FyRlcxQjtBQUFlLElBQUEwQjtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiU2VjdGlvbkhlYWRpbmciLCJmYWRlSW4iLCJyZXN1bWVEYXRhIiwiVGltZWxpbmVTZWN0aW9uIiwidGltZWxpbmVJdGVtcyIsImV4cGVyaWVuY2VzIiwiZWR1Y2F0aW9uIiwiZmlsdGVyIiwiaXRlbSIsInN0YXJ0RGF0ZSIsInNvcnQiLCJhIiwiYiIsImRhdGVBIiwiRGF0ZSIsImRhdGVCIiwiZ2V0VGltZSIsIm1hcCIsImluZGV4Iiwib25jZSIsImFtb3VudCIsInRpdGxlIiwiZGVncmVlIiwic3ViamVjdCIsImNvbXBhbnkiLCJpbnN0aXR1dGlvbiIsImxvY2F0aW9uIiwiZW5kRGF0ZSIsImRlc2NyaXB0aW9uIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiVGltZWxpbmVTZWN0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgU2VjdGlvbkhlYWRpbmcgfSBmcm9tIFwiLi91aS9zZWN0aW9uLWhlYWRpbmdcIjtcbmltcG9ydCB7IGZhZGVJbiB9IGZyb20gXCJAL2xpYi9mcmFtZXJBbmltYXRpb25zXCI7XG5pbXBvcnQgeyByZXN1bWVEYXRhIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmV4cG9ydCBjb25zdCBUaW1lbGluZVNlY3Rpb24gPSAoKSA9PiB7XG4gIC8vIENvbWJpbmUgZXhwZXJpZW5jZXMgYW5kIGVkdWNhdGlvbiBmb3IgdGhlIHRpbWVsaW5lXG4gIGNvbnN0IHRpbWVsaW5lSXRlbXMgPSBbXG4gICAgLi4ucmVzdW1lRGF0YS5leHBlcmllbmNlcyxcbiAgICAuLi5yZXN1bWVEYXRhLmVkdWNhdGlvbi5maWx0ZXIoaXRlbSA9PiBpdGVtLnN0YXJ0RGF0ZSksIC8vIE9ubHkgaW5jbHVkZSBlZHVjYXRpb24gd2l0aCBzdGFydCBkYXRlc1xuICBdLnNvcnQoKGEsIGIpID0+IHtcbiAgICAvLyBTb3J0IGJ5IHN0YXJ0IGRhdGUgaW4gZGVzY2VuZGluZyBvcmRlciAobmV3ZXN0IGZpcnN0KVxuICAgIGNvbnN0IGRhdGVBID0gbmV3IERhdGUoYS5zdGFydERhdGUpO1xuICAgIGNvbnN0IGRhdGVCID0gbmV3IERhdGUoYi5zdGFydERhdGUpO1xuICAgIHJldHVybiBkYXRlQi5nZXRUaW1lKCkgLSBkYXRlQS5nZXRUaW1lKCk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMjAgYmctYmxhY2sgcmVsYXRpdmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICA8U2VjdGlvbkhlYWRpbmcgXG4gICAgICAgICAgc3VidGl0bGU9XCJNeSBKb3VybmV5XCJcbiAgICAgICAgICB0aXRsZT1cIkNhcmVlciBUaW1lbGluZVwiIFxuICAgICAgICAgIGFjY2VudGVkV29yZD1cIiBUaW1lbGluZVwiXG4gICAgICAgIC8+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgey8qIFRpbWVsaW5lIGxpbmUgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiBoLWZ1bGwgdy1weCBiZy1kZWVwLWdvbGQvMzBcIj48L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogVGltZWxpbmUgaXRlbXMgKi99XG4gICAgICAgICAge3RpbWVsaW5lSXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgbWItMTZcIlxuICAgICAgICAgICAgICB2YXJpYW50cz17ZmFkZUluKFwidXBcIiwgMC4yICogaW5kZXgpfVxuICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgd2hpbGVJblZpZXc9XCJzaG93XCJcbiAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSwgYW1vdW50OiAwLjMgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIHsvKiBMZWZ0IHNpZGUgKGV2ZW4gaXRlbXMpICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWQ6dy0xLzIgbWQ6cHItMTIgbWItOCBtZDptYi0wICR7aW5kZXggJSAyID09PSAwID8gJ3RleHQtcmlnaHQnIDogJ21kOnRleHQtcmlnaHQnfWB9PlxuICAgICAgICAgICAgICAgICAge2luZGV4ICUgMiA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1kZWVwLWdvbGQgZm9udC1wbGF5ZmFpciB0ZXh0LTJ4bCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZSB8fCBpdGVtLmRlZ3JlZSB8fCBpdGVtLnN1YmplY3R9XG4gICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWl2b3J5LzgwIGZvbnQtaW50ZXIgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY29tcGFueSB8fCBpdGVtLmluc3RpdHV0aW9ufSB8IHtpdGVtLmxvY2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRlZXAtZ29sZC83MCBmb250LWludGVyIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnN0YXJ0RGF0ZX0gLSB7aXRlbS5lbmREYXRlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC00IHRleHQtaXZvcnkvNzAgZm9udC1pbnRlclwiPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHsvKiBUaW1lbGluZSBkb3QgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTQgaC00IGJnLWRlZXAtZ29sZCByb3VuZGVkLWZ1bGwgYm9yZGVyLTQgYm9yZGVyLWJsYWNrXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgey8qIFJpZ2h0IHNpZGUgKG9kZCBpdGVtcykgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTEvMiBtZDpwbC0xMlwiPlxuICAgICAgICAgICAgICAgICAge2luZGV4ICUgMiA9PT0gMSA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1kZWVwLWdvbGQgZm9udC1wbGF5ZmFpciB0ZXh0LTJ4bCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZSB8fCBpdGVtLmRlZ3JlZSB8fCBpdGVtLnN1YmplY3R9XG4gICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWl2b3J5LzgwIGZvbnQtaW50ZXIgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY29tcGFueSB8fCBpdGVtLmluc3RpdHV0aW9ufSB8IHtpdGVtLmxvY2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRlZXAtZ29sZC83MCBmb250LWludGVyIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnN0YXJ0RGF0ZX0gLSB7aXRlbS5lbmREYXRlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC00IHRleHQtaXZvcnkvNzAgZm9udC1pbnRlclwiPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuIl0sImZpbGUiOiIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2NsaWVudC9zcmMvY29tcG9uZW50cy9UaW1lbGluZVNlY3Rpb24udHN4In0=