import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/HeroSection.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f91473b9"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/components/HeroSection.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { motion } from "/@fs/home/runner/workspace/node_modules/.vite/deps/framer-motion.js?v=3cc6b24e";
import { MagneticButton } from "/src/components/ui/magnetic-button.tsx";
import { fadeIn, float } from "/src/lib/framerAnimations.ts";
export const HeroSection = () => {
  return /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/components/HeroSection.tsx:7:4", "data-component-name": "section", className: "relative h-screen flex items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/HeroSection.tsx:9:6", "data-component-name": "div", className: "absolute top-0 left-0 w-full h-full", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/HeroSection.tsx:10:8", "data-component-name": "div", className: "absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent z-10 opacity-90" }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/components/HeroSection.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        "img",
        {
          "data-replit-metadata": "client/src/components/HeroSection.tsx:13:8",
          "data-component-name": "img",
          src: "https://images.unsplash.com/photo-1593767159397-9a137a2b92fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
          alt: "Polo player racing on horseback",
          className: "object-cover w-full h-full"
        },
        void 0,
        false,
        {
          fileName: "/home/runner/workspace/client/src/components/HeroSection.tsx",
          lineNumber: 13,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/client/src/components/HeroSection.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/HeroSection.tsx:21:6", "data-component-name": "div", className: "container mx-auto px-4 relative z-20", children: /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-replit-metadata": "client/src/components/HeroSection.tsx:22:8",
        "data-component-name": "motion.div",
        className: "max-w-3xl",
        variants: fadeIn("up", 0.2),
        initial: "hidden",
        animate: "show",
        children: [
          /* @__PURE__ */ jsxDEV("h1", { "data-replit-metadata": "client/src/components/HeroSection.tsx:28:10", "data-component-name": "h1", className: "font-playfair text-5xl md:text-7xl font-bold mb-2 leading-tight", children: [
            "SHAIK",
            /* @__PURE__ */ jsxDEV("br", { "data-replit-metadata": "client/src/components/HeroSection.tsx:29:17", "data-component-name": "br" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/HeroSection.tsx",
              lineNumber: 29,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/components/HeroSection.tsx:30:12", "data-component-name": "span", className: "text-deep-gold", children: "MAHABOOB" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/HeroSection.tsx",
              lineNumber: 30,
              columnNumber: 13
            }, this),
            " KHAN"
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/components/HeroSection.tsx",
            lineNumber: 28,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/components/HeroSection.tsx:32:10", "data-component-name": "h2", className: "font-inter text-xl md:text-2xl uppercase tracking-widest mb-8 text-ivory opacity-90", children: "International Polo Player" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/HeroSection.tsx",
            lineNumber: 32,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/HeroSection.tsx:35:10", "data-component-name": "div", className: "flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxDEV(MagneticButton, { "data-replit-metadata": "client/src/components/HeroSection.tsx:36:12", "data-component-name": "MagneticButton", children: /* @__PURE__ */ jsxDEV(
              "a",
              {
                "data-replit-metadata": "client/src/components/HeroSection.tsx:37:14",
                "data-component-name": "a",
                href: "#about",
                className: "px-8 py-3 bg-deep-gold text-black font-inter uppercase tracking-widest text-sm",
                children: "My Journey"
              },
              void 0,
              false,
              {
                fileName: "/home/runner/workspace/client/src/components/HeroSection.tsx",
                lineNumber: 37,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/HeroSection.tsx",
              lineNumber: 36,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(MagneticButton, { "data-replit-metadata": "client/src/components/HeroSection.tsx:44:12", "data-component-name": "MagneticButton", children: /* @__PURE__ */ jsxDEV(
              "a",
              {
                "data-replit-metadata": "client/src/components/HeroSection.tsx:45:14",
                "data-component-name": "a",
                href: "#media",
                className: "px-8 py-3 border border-deep-gold text-deep-gold font-inter uppercase tracking-widest text-sm hover:bg-deep-gold hover:text-black transition-all duration-300",
                children: "Watch Reel"
              },
              void 0,
              false,
              {
                fileName: "/home/runner/workspace/client/src/components/HeroSection.tsx",
                lineNumber: 45,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/HeroSection.tsx",
              lineNumber: 44,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/components/HeroSection.tsx",
            lineNumber: 35,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/home/runner/workspace/client/src/components/HeroSection.tsx",
        lineNumber: 22,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/components/HeroSection.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-replit-metadata": "client/src/components/HeroSection.tsx:57:6",
        "data-component-name": "motion.div",
        className: "absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20",
        variants: float,
        initial: "hidden",
        animate: "animate",
        children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/HeroSection.tsx:63:8", "data-component-name": "div", className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/components/HeroSection.tsx:64:10", "data-component-name": "span", className: "text-ivory text-sm uppercase tracking-widest font-inter mb-2", children: "Scroll Down" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/HeroSection.tsx",
            lineNumber: 64,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("i", { "data-replit-metadata": "client/src/components/HeroSection.tsx:67:10", "data-component-name": "i", className: "fas fa-chevron-down text-deep-gold" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/HeroSection.tsx",
            lineNumber: 67,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/components/HeroSection.tsx",
          lineNumber: 63,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/client/src/components/HeroSection.tsx",
        lineNumber: 57,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/components/HeroSection.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
};
_c = HeroSection;
var _c;
$RefreshReg$(_c, "HeroSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/HeroSection.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/HeroSection.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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LE9BOURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0ErREE7QUFFSjtBQUFFRSxLQW5FV0Q7QUFBVyxJQUFBQztBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiTWFnbmV0aWNCdXR0b24iLCJmYWRlSW4iLCJmbG9hdCIsIkhlcm9TZWN0aW9uIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiSGVyb1NlY3Rpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBNYWduZXRpY0J1dHRvbiB9IGZyb20gXCIuL3VpL21hZ25ldGljLWJ1dHRvblwiO1xuaW1wb3J0IHsgZmFkZUluLCBmbG9hdCB9IGZyb20gXCJAL2xpYi9mcmFtZXJBbmltYXRpb25zXCI7XG5cbmV4cG9ydCBjb25zdCBIZXJvU2VjdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgIHsvKiBWaWRlbyBCYWNrZ3JvdW5kIHdpdGggb3ZlcmxheSAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWZ1bGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtZnVsbCBiZy1ncmFkaWVudC10by10IGZyb20tYmxhY2sgdG8tdHJhbnNwYXJlbnQgei0xMCBvcGFjaXR5LTkwXCI+PC9kaXY+XG4gICAgICAgIFxuICAgICAgICB7LyogQmFja2dyb3VuZCBpbWFnZSAod291bGQgYmUgcmVwbGFjZWQgd2l0aCB2aWRlbyBpbiBwcm9kdWN0aW9uKSAqL31cbiAgICAgICAgPGltZyBcbiAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU5Mzc2NzE1OTM5Ny05YTEzN2EyYjkyZmE/aXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTkyMCZxPTgwXCIgXG4gICAgICAgICAgYWx0PVwiUG9sbyBwbGF5ZXIgcmFjaW5nIG9uIGhvcnNlYmFja1wiIFxuICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciB3LWZ1bGwgaC1mdWxsXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICB7LyogSGVybyBjb250ZW50ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHJlbGF0aXZlIHotMjBcIj5cbiAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctM3hsXCJcbiAgICAgICAgICB2YXJpYW50cz17ZmFkZUluKFwidXBcIiwgMC4yKX1cbiAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICBhbmltYXRlPVwic2hvd1wiXG4gICAgICAgID5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1wbGF5ZmFpciB0ZXh0LTV4bCBtZDp0ZXh0LTd4bCBmb250LWJvbGQgbWItMiBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICBTSEFJSzxici8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWRlZXAtZ29sZFwiPk1BSEFCT09CPC9zcGFuPiBLSEFOXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1pbnRlciB0ZXh0LXhsIG1kOnRleHQtMnhsIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgbWItOCB0ZXh0LWl2b3J5IG9wYWNpdHktOTBcIj5cbiAgICAgICAgICAgIEludGVybmF0aW9uYWwgUG9sbyBQbGF5ZXJcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTRcIj5cbiAgICAgICAgICAgIDxNYWduZXRpY0J1dHRvbj5cbiAgICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNhYm91dFwiIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTggcHktMyBiZy1kZWVwLWdvbGQgdGV4dC1ibGFjayBmb250LWludGVyIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgdGV4dC1zbVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBNeSBKb3VybmV5XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTWFnbmV0aWNCdXR0b24+XG4gICAgICAgICAgICA8TWFnbmV0aWNCdXR0b24+XG4gICAgICAgICAgICAgIDxhIFxuICAgICAgICAgICAgICAgIGhyZWY9XCIjbWVkaWFcIiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC04IHB5LTMgYm9yZGVyIGJvcmRlci1kZWVwLWdvbGQgdGV4dC1kZWVwLWdvbGQgZm9udC1pbnRlciB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IHRleHQtc20gaG92ZXI6YmctZGVlcC1nb2xkIGhvdmVyOnRleHQtYmxhY2sgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFdhdGNoIFJlZWxcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9NYWduZXRpY0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIHsvKiBTY3JvbGwgaW5kaWNhdG9yICovfVxuICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0xMCBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiB6LTIwXCJcbiAgICAgICAgdmFyaWFudHM9e2Zsb2F0fVxuICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1pdm9yeSB0ZXh0LXNtIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgZm9udC1pbnRlciBtYi0yXCI+XG4gICAgICAgICAgICBTY3JvbGwgRG93blxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1kb3duIHRleHQtZGVlcC1nb2xkXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuIl0sImZpbGUiOiIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2NsaWVudC9zcmMvY29tcG9uZW50cy9IZXJvU2VjdGlvbi50c3gifQ==