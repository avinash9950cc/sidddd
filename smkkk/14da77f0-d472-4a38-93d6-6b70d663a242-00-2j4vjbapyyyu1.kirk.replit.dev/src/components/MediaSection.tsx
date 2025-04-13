import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/MediaSection.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f91473b9"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/components/MediaSection.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/@fs/home/runner/workspace/node_modules/.vite/deps/react.js?v=f91473b9"; const useState = __vite__cjsImport3_react["useState"]; const useRef = __vite__cjsImport3_react["useRef"];
import { motion, AnimatePresence } from "/@fs/home/runner/workspace/node_modules/.vite/deps/framer-motion.js?v=3cc6b24e";
import { SectionHeading } from "/src/components/ui/section-heading.tsx";
import { fadeIn, scaleIn } from "/src/lib/framerAnimations.ts";
import { mediaItems } from "/src/lib/utils.ts";
export const MediaSection = () => {
  _s();
  const [activeVideo, setActiveVideo] = useState(null);
  const scrollRef = useRef(null);
  const featuredVideo = mediaItems.find((item) => item.type === "featured");
  const regularVideos = mediaItems.filter((item) => item.type === "regular");
  const openVideo = (videoUrl) => {
    setActiveVideo(videoUrl);
    document.body.style.overflow = "hidden";
  };
  const closeVideo = () => {
    setActiveVideo(null);
    document.body.style.overflow = "auto";
  };
  return /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/components/MediaSection.tsx:25:4", "data-component-name": "section", id: "media", className: "py-20 bg-black relative", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/MediaSection.tsx:26:6", "data-component-name": "div", className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxDEV(
      SectionHeading,
      {
        "data-replit-metadata": "client/src/components/MediaSection.tsx:27:8",
        "data-component-name": "SectionHeading",
        subtitle: "Watch & Experience",
        title: "Media Showcase",
        accentedWord: " Showcase"
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
        lineNumber: 27,
        columnNumber: 9
      },
      this
    ),
    featuredVideo && /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-replit-metadata": "client/src/components/MediaSection.tsx:35:8",
        "data-component-name": "motion.div",
        className: "mb-16",
        variants: fadeIn("up", 0.2),
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true },
        children: /* @__PURE__ */ jsxDEV(
          "div",
          {
            "data-replit-metadata": "client/src/components/MediaSection.tsx:42:12",
            "data-component-name": "div",
            className: "relative rounded-sm overflow-hidden group cursor-pointer",
            onClick: () => openVideo(featuredVideo.thumbnail),
            children: [
              /* @__PURE__ */ jsxDEV(
                "img",
                {
                  "data-replit-metadata": "client/src/components/MediaSection.tsx:46:14",
                  "data-component-name": "img",
                  src: `${featuredVideo.thumbnail}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80`,
                  alt: featuredVideo.title,
                  className: "w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                },
                void 0,
                false,
                {
                  fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
                  lineNumber: 46,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/MediaSection.tsx:51:14", "data-component-name": "div", className: "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
                lineNumber: 51,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/MediaSection.tsx:52:14", "data-component-name": "div", className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(
                motion.div,
                {
                  "data-replit-metadata": "client/src/components/MediaSection.tsx:53:16",
                  "data-component-name": "motion.div",
                  className: "w-20 h-20 rounded-full bg-deep-gold/80 flex items-center justify-center cursor-pointer transform transition-transform duration-300",
                  whileHover: { scale: 1.1 },
                  children: /* @__PURE__ */ jsxDEV("i", { "data-replit-metadata": "client/src/components/MediaSection.tsx:57:18", "data-component-name": "i", className: "fas fa-play text-black text-2xl pl-1" }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
                    lineNumber: 57,
                    columnNumber: 19
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
                  lineNumber: 53,
                  columnNumber: 17
                },
                this
              ) }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
                lineNumber: 52,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/MediaSection.tsx:60:14", "data-component-name": "div", className: "absolute bottom-8 left-8 right-8", children: [
                /* @__PURE__ */ jsxDEV("h4", { "data-replit-metadata": "client/src/components/MediaSection.tsx:61:16", "data-component-name": "h4", className: "font-playfair text-2xl font-bold mb-2", children: featuredVideo.title }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
                  lineNumber: 61,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/MediaSection.tsx:62:16", "data-component-name": "p", className: "text-ivory/80 font-inter", children: featuredVideo.description }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
                  lineNumber: 62,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
                lineNumber: 60,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
            lineNumber: 42,
            columnNumber: 13
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
        lineNumber: 35,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      motion.h4,
      {
        "data-replit-metadata": "client/src/components/MediaSection.tsx:69:8",
        "data-component-name": "motion.h4",
        className: "font-playfair text-2xl font-bold mb-6",
        variants: fadeIn("up", 0.3),
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true },
        children: "Recent Matches"
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
        lineNumber: 69,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-replit-metadata": "client/src/components/MediaSection.tsx:79:8",
        "data-component-name": "motion.div",
        ref: scrollRef,
        className: "flex overflow-x-auto pb-4 -mx-4 px-4 space-x-6 hide-scrollbar",
        variants: fadeIn("up", 0.4),
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true },
        children: regularVideos.map(
          (video, index) => /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              "data-replit-metadata": "client/src/components/MediaSection.tsx:88:10",
              "data-component-name": "motion.div",
              className: "flex-shrink-0 w-80",
              variants: scaleIn(0.1 * index),
              whileHover: { y: -8 },
              transition: { type: "spring", stiffness: 300 },
              children: [
                /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    "data-replit-metadata": "client/src/components/MediaSection.tsx:95:14",
                    "data-component-name": "div",
                    className: "relative rounded-sm overflow-hidden group cursor-pointer",
                    onClick: () => openVideo(video.thumbnail),
                    children: [
                      /* @__PURE__ */ jsxDEV(
                        "img",
                        {
                          "data-replit-metadata": "client/src/components/MediaSection.tsx:99:16",
                          "data-component-name": "img",
                          src: `${video.thumbnail}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80`,
                          alt: video.title,
                          className: "w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
                          lineNumber: 99,
                          columnNumber: 17
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/MediaSection.tsx:104:16", "data-component-name": "div", className: "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }, void 0, false, {
                        fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
                        lineNumber: 104,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/MediaSection.tsx:105:16", "data-component-name": "div", className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/MediaSection.tsx:106:18", "data-component-name": "div", className: "w-12 h-12 rounded-full bg-deep-gold/80 flex items-center justify-center cursor-pointer", children: /* @__PURE__ */ jsxDEV("i", { "data-replit-metadata": "client/src/components/MediaSection.tsx:107:20", "data-component-name": "i", className: "fas fa-play text-black text-sm pl-0.5" }, void 0, false, {
                        fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
                        lineNumber: 107,
                        columnNumber: 21
                      }, this) }, void 0, false, {
                        fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
                        lineNumber: 106,
                        columnNumber: 19
                      }, this) }, void 0, false, {
                        fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
                        lineNumber: 105,
                        columnNumber: 17
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
                    lineNumber: 95,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV("h5", { "data-replit-metadata": "client/src/components/MediaSection.tsx:111:14", "data-component-name": "h5", className: "font-playfair text-lg font-bold mt-3 mb-1", children: video.title }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
                  lineNumber: 111,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/MediaSection.tsx:112:14", "data-component-name": "p", className: "text-ivory/70 font-inter text-sm", children: video.description }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
                  lineNumber: 112,
                  columnNumber: 15
                }, this)
              ]
            },
            index,
            true,
            {
              fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
              lineNumber: 88,
              columnNumber: 11
            },
            this
          )
        )
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
        lineNumber: 79,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(AnimatePresence, { "data-replit-metadata": "client/src/components/MediaSection.tsx:118:8", "data-component-name": "AnimatePresence", children: activeVideo && /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-replit-metadata": "client/src/components/MediaSection.tsx:120:10",
        "data-component-name": "motion.div",
        className: "fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        children: /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            "data-replit-metadata": "client/src/components/MediaSection.tsx:126:14",
            "data-component-name": "motion.div",
            className: "relative w-full max-w-4xl",
            initial: { scale: 0.9, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.9, opacity: 0 },
            children: [
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  "data-replit-metadata": "client/src/components/MediaSection.tsx:132:16",
                  "data-component-name": "button",
                  className: "absolute -top-12 right-0 text-white p-2 z-10",
                  onClick: closeVideo,
                  children: /* @__PURE__ */ jsxDEV("i", { "data-replit-metadata": "client/src/components/MediaSection.tsx:136:18", "data-component-name": "i", className: "fas fa-times text-2xl" }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
                    lineNumber: 136,
                    columnNumber: 19
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
                  lineNumber: 132,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/MediaSection.tsx:138:16", "data-component-name": "div", className: "relative pb-[56.25%] overflow-hidden rounded-sm", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/MediaSection.tsx:139:18", "data-component-name": "div", className: "absolute inset-0 flex items-center justify-center bg-black", children: [
                /* @__PURE__ */ jsxDEV(
                  "img",
                  {
                    "data-replit-metadata": "client/src/components/MediaSection.tsx:140:20",
                    "data-component-name": "img",
                    src: `${activeVideo}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80`,
                    alt: "Video preview",
                    className: "w-full h-full object-cover"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
                    lineNumber: 140,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/MediaSection.tsx:145:20", "data-component-name": "div", className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/MediaSection.tsx:146:22", "data-component-name": "div", className: "bg-deep-gold/80 text-black px-6 py-3 rounded-sm", children: /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/MediaSection.tsx:147:24", "data-component-name": "p", className: "font-inter text-sm", children: "Video would play here in production version" }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
                  lineNumber: 147,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
                  lineNumber: 146,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
                  lineNumber: 145,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
                lineNumber: 139,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
                lineNumber: 138,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
            lineNumber: 126,
            columnNumber: 15
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
        lineNumber: 120,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
      lineNumber: 118,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/runner/workspace/client/src/components/MediaSection.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
};
_s(MediaSection, "qHX3BBTxLuVSBYVCpuj3XP+Dkcs=");
_c = MediaSection;
var _c;
$RefreshReg$(_c, "MediaSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/MediaSection.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/MediaSection.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUEwQkE7QUFBQTtBQUFBLE1BaENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWlDQSxLQW5DSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBcUNBO0FBQUEsT0FqSUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWtJQSxLQW5JRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBb0lBO0FBRUo7QUFBRUQsR0F4SldELGNBQVk7QUFBQThCLEtBQVo5QjtBQUFZLElBQUE4QjtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsidXNlUmVmIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiU2VjdGlvbkhlYWRpbmciLCJmYWRlSW4iLCJzY2FsZUluIiwibWVkaWFJdGVtcyIsIk1lZGlhU2VjdGlvbiIsIl9zIiwiYWN0aXZlVmlkZW8iLCJzZXRBY3RpdmVWaWRlbyIsInVzZVN0YXRlIiwic2Nyb2xsUmVmIiwiZmVhdHVyZWRWaWRlbyIsImZpbmQiLCJpdGVtIiwidHlwZSIsInJlZ3VsYXJWaWRlb3MiLCJmaWx0ZXIiLCJvcGVuVmlkZW8iLCJ2aWRlb1VybCIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJjbG9zZVZpZGVvIiwib25jZSIsInRodW1ibmFpbCIsInRpdGxlIiwic2NhbGUiLCJkZXNjcmlwdGlvbiIsIm1hcCIsInZpZGVvIiwiaW5kZXgiLCJ5Iiwic3RpZmZuZXNzIiwib3BhY2l0eSIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIk1lZGlhU2VjdGlvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgU2VjdGlvbkhlYWRpbmcgfSBmcm9tIFwiLi91aS9zZWN0aW9uLWhlYWRpbmdcIjtcbmltcG9ydCB7IGZhZGVJbiwgc2NhbGVJbiB9IGZyb20gXCJAL2xpYi9mcmFtZXJBbmltYXRpb25zXCI7XG5pbXBvcnQgeyBtZWRpYUl0ZW1zIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmV4cG9ydCBjb25zdCBNZWRpYVNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IFthY3RpdmVWaWRlbywgc2V0QWN0aXZlVmlkZW9dID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IHNjcm9sbFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIFxuICBjb25zdCBmZWF0dXJlZFZpZGVvID0gbWVkaWFJdGVtcy5maW5kKGl0ZW0gPT4gaXRlbS50eXBlID09PSBcImZlYXR1cmVkXCIpO1xuICBjb25zdCByZWd1bGFyVmlkZW9zID0gbWVkaWFJdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnR5cGUgPT09IFwicmVndWxhclwiKTtcbiAgXG4gIGNvbnN0IG9wZW5WaWRlbyA9ICh2aWRlb1VybDogc3RyaW5nKSA9PiB7XG4gICAgc2V0QWN0aXZlVmlkZW8odmlkZW9VcmwpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICB9O1xuICBcbiAgY29uc3QgY2xvc2VWaWRlbyA9ICgpID0+IHtcbiAgICBzZXRBY3RpdmVWaWRlbyhudWxsKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cIm1lZGlhXCIgY2xhc3NOYW1lPVwicHktMjAgYmctYmxhY2sgcmVsYXRpdmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICA8U2VjdGlvbkhlYWRpbmcgXG4gICAgICAgICAgc3VidGl0bGU9XCJXYXRjaCAmIEV4cGVyaWVuY2VcIlxuICAgICAgICAgIHRpdGxlPVwiTWVkaWEgU2hvd2Nhc2VcIiBcbiAgICAgICAgICBhY2NlbnRlZFdvcmQ9XCIgU2hvd2Nhc2VcIlxuICAgICAgICAvPlxuICAgICAgICBcbiAgICAgICAgey8qIEZlYXR1cmVkIHZpZGVvICovfVxuICAgICAgICB7ZmVhdHVyZWRWaWRlbyAmJiAoXG4gICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0xNlwiXG4gICAgICAgICAgICB2YXJpYW50cz17ZmFkZUluKFwidXBcIiwgMC4yKX1cbiAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgICAgd2hpbGVJblZpZXc9XCJzaG93XCJcbiAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSByb3VuZGVkLXNtIG92ZXJmbG93LWhpZGRlbiBncm91cCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5WaWRlbyhmZWF0dXJlZFZpZGVvLnRodW1ibmFpbCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgc3JjPXtgJHtmZWF0dXJlZFZpZGVvLnRodW1ibmFpbH0/aXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTkyMCZxPTgwYH0gXG4gICAgICAgICAgICAgICAgYWx0PXtmZWF0dXJlZFZpZGVvLnRpdGxlfSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bNTAwcHhdIG9iamVjdC1jb3ZlciB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi03MDAgZ3JvdXAtaG92ZXI6c2NhbGUtMTA1XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1ibGFjay84MCB0by10cmFuc3BhcmVudFwiPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMjAgaC0yMCByb3VuZGVkLWZ1bGwgYmctZGVlcC1nb2xkLzgwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGN1cnNvci1wb2ludGVyIHRyYW5zZm9ybSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4xIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsYXkgdGV4dC1ibGFjayB0ZXh0LTJ4bCBwbC0xXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTggbGVmdC04IHJpZ2h0LThcIj5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1wbGF5ZmFpciB0ZXh0LTJ4bCBmb250LWJvbGQgbWItMlwiPntmZWF0dXJlZFZpZGVvLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1pdm9yeS84MCBmb250LWludGVyXCI+e2ZlYXR1cmVkVmlkZW8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgKX1cbiAgICAgICAgXG4gICAgICAgIHsvKiBIb3Jpem9udGFsIHZpZGVvIGdhbGxlcnkgKi99XG4gICAgICAgIDxtb3Rpb24uaDQgXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1wbGF5ZmFpciB0ZXh0LTJ4bCBmb250LWJvbGQgbWItNlwiXG4gICAgICAgICAgdmFyaWFudHM9e2ZhZGVJbihcInVwXCIsIDAuMyl9XG4gICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgd2hpbGVJblZpZXc9XCJzaG93XCJcbiAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgID5cbiAgICAgICAgICBSZWNlbnQgTWF0Y2hlc1xuICAgICAgICA8L21vdGlvbi5oND5cbiAgICAgICAgXG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgcmVmPXtzY3JvbGxSZWZ9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBvdmVyZmxvdy14LWF1dG8gcGItNCAtbXgtNCBweC00IHNwYWNlLXgtNiBoaWRlLXNjcm9sbGJhclwiXG4gICAgICAgICAgdmFyaWFudHM9e2ZhZGVJbihcInVwXCIsIDAuNCl9XG4gICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgd2hpbGVJblZpZXc9XCJzaG93XCJcbiAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgID5cbiAgICAgICAgICB7cmVndWxhclZpZGVvcy5tYXAoKHZpZGVvLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCB3LTgwXCJcbiAgICAgICAgICAgICAgdmFyaWFudHM9e3NjYWxlSW4oMC4xICogaW5kZXgpfVxuICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC04IH19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgdHlwZTogXCJzcHJpbmdcIiwgc3RpZmZuZXNzOiAzMDAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSByb3VuZGVkLXNtIG92ZXJmbG93LWhpZGRlbiBncm91cCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlblZpZGVvKHZpZGVvLnRodW1ibmFpbCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgICAgc3JjPXtgJHt2aWRlby50aHVtYm5haWx9P2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTYwMCZxPTgwYH0gXG4gICAgICAgICAgICAgICAgICBhbHQ9e3ZpZGVvLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtNDggb2JqZWN0LWNvdmVyIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTUwMCBncm91cC1ob3ZlcjpzY2FsZS0xMDVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1ibGFjay84MCB0by10cmFuc3BhcmVudCBvcGFjaXR5LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTMwMFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvcGFjaXR5LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgcm91bmRlZC1mdWxsIGJnLWRlZXAtZ29sZC84MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGxheSB0ZXh0LWJsYWNrIHRleHQtc20gcGwtMC41XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC1wbGF5ZmFpciB0ZXh0LWxnIGZvbnQtYm9sZCBtdC0zIG1iLTFcIj57dmlkZW8udGl0bGV9PC9oNT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1pdm9yeS83MCBmb250LWludGVyIHRleHQtc21cIj57dmlkZW8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIFxuICAgICAgICB7LyogVmlkZW8gTGlnaHRib3ggKi99XG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAge2FjdGl2ZVZpZGVvICYmIChcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWJsYWNrLzkwIHotNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00XCJcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIG1heC13LTR4bFwiXG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyBzY2FsZTogMC45LCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBzY2FsZTogMSwgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgICAgIGV4aXQ9e3sgc2NhbGU6IDAuOSwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtMTIgcmlnaHQtMCB0ZXh0LXdoaXRlIHAtMiB6LTEwXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlVmlkZW99XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzIHRleHQtMnhsXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcGItWzU2LjI1JV0gb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtc21cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibGFja1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7YWN0aXZlVmlkZW99P2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE5MjAmcT04MGB9IFxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlZpZGVvIHByZXZpZXdcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1kZWVwLWdvbGQvODAgdGV4dC1ibGFjayBweC02IHB5LTMgcm91bmRlZC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1pbnRlciB0ZXh0LXNtXCI+VmlkZW8gd291bGQgcGxheSBoZXJlIGluIHByb2R1Y3Rpb24gdmVyc2lvbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9jbGllbnQvc3JjL2NvbXBvbmVudHMvTWVkaWFTZWN0aW9uLnRzeCJ9