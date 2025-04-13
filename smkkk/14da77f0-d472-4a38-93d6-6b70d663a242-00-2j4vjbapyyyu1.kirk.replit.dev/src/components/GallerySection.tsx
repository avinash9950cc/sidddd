import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/GallerySection.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f91473b9"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/components/GallerySection.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/@fs/home/runner/workspace/node_modules/.vite/deps/react.js?v=f91473b9"; const useState = __vite__cjsImport3_react["useState"];
import { motion, AnimatePresence } from "/@fs/home/runner/workspace/node_modules/.vite/deps/framer-motion.js?v=3cc6b24e";
import { SectionHeading } from "/src/components/ui/section-heading.tsx";
import { fadeIn, staggerContainer } from "/src/lib/framerAnimations.ts";
import { galleryItems } from "/src/lib/utils.ts";
export const GallerySection = () => {
  _s();
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeImage, setActiveImage] = useState(null);
  const filteredGallery = activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter);
  const openLightbox = (image) => {
    setActiveImage(image);
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    setActiveImage(null);
    document.body.style.overflow = "auto";
  };
  return /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/components/GallerySection.tsx:26:4", "data-component-name": "section", id: "gallery", className: "py-20 bg-gradient-dark relative", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/GallerySection.tsx:27:6", "data-component-name": "div", className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxDEV(
      SectionHeading,
      {
        "data-replit-metadata": "client/src/components/GallerySection.tsx:28:8",
        "data-component-name": "SectionHeading",
        subtitle: "Captured Moments",
        title: "Photo Gallery",
        accentedWord: " Gallery"
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/client/src/components/GallerySection.tsx",
        lineNumber: 28,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-replit-metadata": "client/src/components/GallerySection.tsx:35:8",
        "data-component-name": "motion.div",
        className: "flex justify-center mb-10",
        variants: fadeIn("up", 0.2),
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true },
        children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/GallerySection.tsx:42:10", "data-component-name": "div", className: "flex flex-wrap gap-4 justify-center", children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              "data-replit-metadata": "client/src/components/GallerySection.tsx:43:12",
              "data-component-name": "button",
              className: `px-4 py-2 font-inter text-sm uppercase tracking-wider ${activeFilter === "all" ? "bg-deep-gold text-black" : "bg-transparent border border-deep-gold text-deep-gold hover:bg-deep-gold hover:text-black transition-colors"}`,
              onClick: () => setActiveFilter("all"),
              children: "All"
            },
            void 0,
            false,
            {
              fileName: "/home/runner/workspace/client/src/components/GallerySection.tsx",
              lineNumber: 43,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              "data-replit-metadata": "client/src/components/GallerySection.tsx:53:12",
              "data-component-name": "button",
              className: `px-4 py-2 font-inter text-sm uppercase tracking-wider ${activeFilter === "tournaments" ? "bg-deep-gold text-black" : "bg-transparent border border-deep-gold text-deep-gold hover:bg-deep-gold hover:text-black transition-colors"}`,
              onClick: () => setActiveFilter("tournaments"),
              children: "Tournaments"
            },
            void 0,
            false,
            {
              fileName: "/home/runner/workspace/client/src/components/GallerySection.tsx",
              lineNumber: 53,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              "data-replit-metadata": "client/src/components/GallerySection.tsx:63:12",
              "data-component-name": "button",
              className: `px-4 py-2 font-inter text-sm uppercase tracking-wider ${activeFilter === "training" ? "bg-deep-gold text-black" : "bg-transparent border border-deep-gold text-deep-gold hover:bg-deep-gold hover:text-black transition-colors"}`,
              onClick: () => setActiveFilter("training"),
              children: "Training"
            },
            void 0,
            false,
            {
              fileName: "/home/runner/workspace/client/src/components/GallerySection.tsx",
              lineNumber: 63,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              "data-replit-metadata": "client/src/components/GallerySection.tsx:73:12",
              "data-component-name": "button",
              className: `px-4 py-2 font-inter text-sm uppercase tracking-wider ${activeFilter === "events" ? "bg-deep-gold text-black" : "bg-transparent border border-deep-gold text-deep-gold hover:bg-deep-gold hover:text-black transition-colors"}`,
              onClick: () => setActiveFilter("events"),
              children: "Events"
            },
            void 0,
            false,
            {
              fileName: "/home/runner/workspace/client/src/components/GallerySection.tsx",
              lineNumber: 73,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/components/GallerySection.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/client/src/components/GallerySection.tsx",
        lineNumber: 35,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-replit-metadata": "client/src/components/GallerySection.tsx:87:8",
        "data-component-name": "motion.div",
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        variants: staggerContainer,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.1 },
        children: /* @__PURE__ */ jsxDEV(AnimatePresence, { "data-replit-metadata": "client/src/components/GallerySection.tsx:94:10", "data-component-name": "AnimatePresence", children: filteredGallery.map(
          (item, index) => /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              "data-replit-metadata": "client/src/components/GallerySection.tsx:96:12",
              "data-component-name": "motion.div",
              className: "gallery-item",
              variants: fadeIn("up", 0.1 * index),
              initial: "hidden",
              animate: "show",
              exit: { opacity: 0, scale: 0.9 },
              layout: true,
              children: /* @__PURE__ */ jsxDEV(
                "div",
                {
                  "data-replit-metadata": "client/src/components/GallerySection.tsx:105:16",
                  "data-component-name": "div",
                  className: "relative overflow-hidden rounded-sm cursor-pointer",
                  onClick: () => openLightbox(item.image),
                  children: [
                    /* @__PURE__ */ jsxDEV(
                      "img",
                      {
                        "data-replit-metadata": "client/src/components/GallerySection.tsx:109:18",
                        "data-component-name": "img",
                        src: `${item.image}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80`,
                        alt: item.title,
                        className: "w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                      },
                      void 0,
                      false,
                      {
                        fileName: "/home/runner/workspace/client/src/components/GallerySection.tsx",
                        lineNumber: 109,
                        columnNumber: 19
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/GallerySection.tsx:114:18", "data-component-name": "div", className: "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/GallerySection.tsx:115:20", "data-component-name": "div", className: "p-4", children: [
                      /* @__PURE__ */ jsxDEV("h5", { "data-replit-metadata": "client/src/components/GallerySection.tsx:116:22", "data-component-name": "h5", className: "font-playfair text-xl font-bold", children: item.title }, void 0, false, {
                        fileName: "/home/runner/workspace/client/src/components/GallerySection.tsx",
                        lineNumber: 116,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/GallerySection.tsx:117:22", "data-component-name": "p", className: "text-ivory/80 font-inter text-sm", children: item.description }, void 0, false, {
                        fileName: "/home/runner/workspace/client/src/components/GallerySection.tsx",
                        lineNumber: 117,
                        columnNumber: 23
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/home/runner/workspace/client/src/components/GallerySection.tsx",
                      lineNumber: 115,
                      columnNumber: 21
                    }, this) }, void 0, false, {
                      fileName: "/home/runner/workspace/client/src/components/GallerySection.tsx",
                      lineNumber: 114,
                      columnNumber: 19
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/home/runner/workspace/client/src/components/GallerySection.tsx",
                  lineNumber: 105,
                  columnNumber: 17
                },
                this
              )
            },
            item.image,
            false,
            {
              fileName: "/home/runner/workspace/client/src/components/GallerySection.tsx",
              lineNumber: 96,
              columnNumber: 13
            },
            this
          )
        ) }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/components/GallerySection.tsx",
          lineNumber: 94,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/client/src/components/GallerySection.tsx",
        lineNumber: 87,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(AnimatePresence, { "data-replit-metadata": "client/src/components/GallerySection.tsx:127:8", "data-component-name": "AnimatePresence", children: activeImage && /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-replit-metadata": "client/src/components/GallerySection.tsx:129:10",
        "data-component-name": "motion.div",
        className: "fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: closeLightbox,
        children: /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            "data-replit-metadata": "client/src/components/GallerySection.tsx:136:14",
            "data-component-name": "motion.div",
            className: "relative max-w-4xl max-h-[90vh]",
            initial: { scale: 0.9, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.9, opacity: 0 },
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  "data-replit-metadata": "client/src/components/GallerySection.tsx:143:16",
                  "data-component-name": "button",
                  className: "absolute -top-12 right-0 text-white p-2 z-10",
                  onClick: closeLightbox,
                  children: /* @__PURE__ */ jsxDEV("i", { "data-replit-metadata": "client/src/components/GallerySection.tsx:147:18", "data-component-name": "i", className: "fas fa-times text-2xl" }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/components/GallerySection.tsx",
                    lineNumber: 147,
                    columnNumber: 19
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/home/runner/workspace/client/src/components/GallerySection.tsx",
                  lineNumber: 143,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "img",
                {
                  "data-replit-metadata": "client/src/components/GallerySection.tsx:149:16",
                  "data-component-name": "img",
                  src: `${activeImage}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=90`,
                  alt: "Gallery full view",
                  className: "w-full max-h-[80vh] object-contain rounded-sm"
                },
                void 0,
                false,
                {
                  fileName: "/home/runner/workspace/client/src/components/GallerySection.tsx",
                  lineNumber: 149,
                  columnNumber: 17
                },
                this
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "/home/runner/workspace/client/src/components/GallerySection.tsx",
            lineNumber: 136,
            columnNumber: 15
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/client/src/components/GallerySection.tsx",
        lineNumber: 129,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/components/GallerySection.tsx",
      lineNumber: 127,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/components/GallerySection.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/runner/workspace/client/src/components/GallerySection.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
};
_s(GallerySection, "RZwH1qHQ3JseLMMCgf0UgRb3iIU=");
_c = GallerySection;
var _c;
$RefreshReg$(_c, "GallerySection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/GallerySection.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/GallerySection.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBMkJROzJCQTNCUjtBQUFpQixNQUFRLGNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEMsU0FBU0EsUUFBUUMsdUJBQXVCO0FBQ3hDLFNBQVNDLHNCQUFzQjtBQUMvQixTQUFTQyxRQUFRQyx3QkFBd0I7QUFDekMsU0FBU0Msb0JBQW9CO0FBRXRCLGFBQU1DLGlCQUFpQkEsTUFBTTtBQUFBQyxLQUFBO0FBQ2xDLFFBQU0sQ0FBQ0MsY0FBY0MsZUFBZSxJQUFJQyxTQUFTLEtBQUs7QUFDdEQsUUFBTSxDQUFDQyxhQUFhQyxjQUFjLElBQUlGLFNBQXdCLElBQUk7QUFFbEUsUUFBTUcsa0JBQWtCTCxpQkFBaUIsUUFDckNILGVBQ0FBLGFBQWFTLE9BQU8sQ0FBQUMsU0FBUUEsS0FBS0MsYUFBYVIsWUFBWTtBQUU5RCxRQUFNUyxlQUFlQSxDQUFDQyxVQUFrQjtBQUN0Q04sbUJBQWVNLEtBQUs7QUFDcEJDLGFBQVNDLEtBQUtDLE1BQU1DLFdBQVc7QUFBQSxFQUNqQztBQUVBLFFBQU1DLGdCQUFnQkEsTUFBTTtBQUMxQlgsbUJBQWUsSUFBSTtBQUNuQk8sYUFBU0MsS0FBS0MsTUFBTUMsV0FBVztBQUFBLEVBQ2pDO0FBRUEsU0FDRSx1QkFBQyx3SEFBUSxJQUFHLFdBQVUsV0FBVSxtQ0FDOUIsaUNBQUMsZ0hBQUksV0FBVSwwQkFDYjtBQUFBO0FBQUEsTUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQ0MsVUFBUztBQUFBLFFBQ1QsT0FBTTtBQUFBLFFBQ04sY0FBYTtBQUFBO0FBQUEsTUFIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFHeUI7QUFBQSxJQUl6QjtBQUFBLE1BQUMsT0FBTztBQUFBLE1BQVA7QUFBQSxRQUFPO0FBQUE7QUFBQSxRQUNOLFdBQVU7QUFBQSxRQUNWLFVBQVVuQixPQUFPLE1BQU0sR0FBRztBQUFBLFFBQzFCLFNBQVE7QUFBQSxRQUNSLGFBQVk7QUFBQSxRQUNaLFVBQVUsRUFBRXFCLE1BQU0sS0FBSztBQUFBLFFBRXZCLGlDQUFDLGlIQUFJLFdBQVUsdUNBQ2I7QUFBQTtBQUFBLFlBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUNDLFdBQVcseURBQ1RoQixpQkFBaUIsUUFDYiw0QkFDQSw2R0FBNkc7QUFBQSxjQUVuSCxTQUFTLE1BQU1DLGdCQUFnQixLQUFLO0FBQUEsY0FBRTtBQUFBO0FBQUEsWUFOeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBU0E7QUFBQSxVQUNBO0FBQUEsWUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQ0MsV0FBVyx5REFDVEQsaUJBQWlCLGdCQUNiLDRCQUNBLDZHQUE2RztBQUFBLGNBRW5ILFNBQVMsTUFBTUMsZ0JBQWdCLGFBQWE7QUFBQSxjQUFFO0FBQUE7QUFBQSxZQU5oRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFTQTtBQUFBLFVBQ0E7QUFBQSxZQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FDQyxXQUFXLHlEQUNURCxpQkFBaUIsYUFDYiw0QkFDQSw2R0FBNkc7QUFBQSxjQUVuSCxTQUFTLE1BQU1DLGdCQUFnQixVQUFVO0FBQUEsY0FBRTtBQUFBO0FBQUEsWUFON0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBU0E7QUFBQSxVQUNBO0FBQUEsWUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQ0MsV0FBVyx5REFDVEQsaUJBQWlCLFdBQ2IsNEJBQ0EsNkdBQTZHO0FBQUEsY0FFbkgsU0FBUyxNQUFNQyxnQkFBZ0IsUUFBUTtBQUFBLGNBQUU7QUFBQTtBQUFBLFlBTjNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVNBO0FBQUEsYUF4Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXlDQTtBQUFBO0FBQUEsTUFoREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaURBO0FBQUEsSUFHQTtBQUFBLE1BQUMsT0FBTztBQUFBLE1BQVA7QUFBQSxRQUFPO0FBQUE7QUFBQSxRQUNOLFdBQVU7QUFBQSxRQUNWLFVBQVVMO0FBQUFBLFFBQ1YsU0FBUTtBQUFBLFFBQ1IsYUFBWTtBQUFBLFFBQ1osVUFBVSxFQUFFb0IsTUFBTSxNQUFNQyxRQUFRLElBQUk7QUFBQSxRQUVwQyxpQ0FBQyx1SUFDRVosMEJBQWdCYTtBQUFBQSxVQUFJLENBQUNYLE1BQU1ZLFVBQzFCO0FBQUEsWUFBQyxPQUFPO0FBQUEsWUFBUDtBQUFBLGNBQU87QUFBQTtBQUFBLGNBRU4sV0FBVTtBQUFBLGNBQ1YsVUFBVXhCLE9BQU8sTUFBTSxNQUFNd0IsS0FBSztBQUFBLGNBQ2xDLFNBQVE7QUFBQSxjQUNSLFNBQVE7QUFBQSxjQUNSLE1BQU0sRUFBRUMsU0FBUyxHQUFHQyxPQUFPLElBQUk7QUFBQSxjQUMvQixRQUFNO0FBQUEsY0FFTjtBQUFBLGdCQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ0MsV0FBVTtBQUFBLGtCQUNWLFNBQVMsTUFBTVosYUFBYUYsS0FBS0csS0FBSztBQUFBLGtCQUV0QztBQUFBO0FBQUEsc0JBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFDQyxLQUFLLEdBQUdILEtBQUtHLEtBQUs7QUFBQSx3QkFDbEIsS0FBS0gsS0FBS2U7QUFBQUEsd0JBQ1YsV0FBVTtBQUFBO0FBQUEsc0JBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUd3RjtBQUFBLG9CQUV4Rix1QkFBQyxrSEFBSSxXQUFVLDZJQUNiLGlDQUFDLGtIQUFJLFdBQVUsT0FDYjtBQUFBLDZDQUFDLGdIQUFHLFdBQVUsbUNBQW1DZixlQUFLZSxTQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUE0RDtBQUFBLHNCQUM1RCx1QkFBQyw4R0FBRSxXQUFVLG9DQUFvQ2YsZUFBS2dCLGVBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQWtFO0FBQUEseUJBRnBFO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBR0EsS0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUtBO0FBQUE7QUFBQTtBQUFBLGdCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWVBO0FBQUE7QUFBQSxZQXZCS2hCLEtBQUtHO0FBQUFBLFlBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQXlCQTtBQUFBLFFBQ0QsS0E1Qkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTZCQTtBQUFBO0FBQUEsTUFwQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcUNBO0FBQUEsSUFHQSx1QkFBQyx1SUFDRVAseUJBQ0M7QUFBQSxNQUFDLE9BQU87QUFBQSxNQUFQO0FBQUEsUUFBTztBQUFBO0FBQUEsUUFDTixXQUFVO0FBQUEsUUFDVixTQUFTLEVBQUVpQixTQUFTLEVBQUU7QUFBQSxRQUN0QixTQUFTLEVBQUVBLFNBQVMsRUFBRTtBQUFBLFFBQ3RCLE1BQU0sRUFBRUEsU0FBUyxFQUFFO0FBQUEsUUFDbkIsU0FBU0w7QUFBQUEsUUFFVDtBQUFBLFVBQUMsT0FBTztBQUFBLFVBQVA7QUFBQSxZQUFPO0FBQUE7QUFBQSxZQUNOLFdBQVU7QUFBQSxZQUNWLFNBQVMsRUFBRU0sT0FBTyxLQUFLRCxTQUFTLEVBQUU7QUFBQSxZQUNsQyxTQUFTLEVBQUVDLE9BQU8sR0FBR0QsU0FBUyxFQUFFO0FBQUEsWUFDaEMsTUFBTSxFQUFFQyxPQUFPLEtBQUtELFNBQVMsRUFBRTtBQUFBLFlBQy9CLFNBQVMsQ0FBQ0ksTUFBTUEsRUFBRUMsZ0JBQWdCO0FBQUEsWUFFbEM7QUFBQTtBQUFBLGdCQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ0MsV0FBVTtBQUFBLGtCQUNWLFNBQVNWO0FBQUFBLGtCQUVULGlDQUFDLDhHQUFFLFdBQVUsMkJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBcUM7QUFBQTtBQUFBLGdCQUp2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FLQTtBQUFBLGNBQ0E7QUFBQSxnQkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNDLEtBQUssR0FBR1osV0FBVztBQUFBLGtCQUNuQixLQUFJO0FBQUEsa0JBQ0osV0FBVTtBQUFBO0FBQUEsZ0JBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRzJEO0FBQUE7QUFBQTtBQUFBLFVBaEI3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFrQkE7QUFBQTtBQUFBLE1BekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTBCQSxLQTVCSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBOEJBO0FBQUEsT0FsSUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQW1JQSxLQXBJRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBcUlBO0FBRUo7QUFBRUosR0ExSldELGdCQUFjO0FBQUE0QixLQUFkNUI7QUFBYyxJQUFBNEI7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIlNlY3Rpb25IZWFkaW5nIiwiZmFkZUluIiwic3RhZ2dlckNvbnRhaW5lciIsImdhbGxlcnlJdGVtcyIsIkdhbGxlcnlTZWN0aW9uIiwiX3MiLCJhY3RpdmVGaWx0ZXIiLCJzZXRBY3RpdmVGaWx0ZXIiLCJ1c2VTdGF0ZSIsImFjdGl2ZUltYWdlIiwic2V0QWN0aXZlSW1hZ2UiLCJmaWx0ZXJlZEdhbGxlcnkiLCJmaWx0ZXIiLCJpdGVtIiwiY2F0ZWdvcnkiLCJvcGVuTGlnaHRib3giLCJpbWFnZSIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJjbG9zZUxpZ2h0Ym94Iiwib25jZSIsImFtb3VudCIsIm1hcCIsImluZGV4Iiwib3BhY2l0eSIsInNjYWxlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJHYWxsZXJ5U2VjdGlvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IFNlY3Rpb25IZWFkaW5nIH0gZnJvbSBcIi4vdWkvc2VjdGlvbi1oZWFkaW5nXCI7XG5pbXBvcnQgeyBmYWRlSW4sIHN0YWdnZXJDb250YWluZXIgfSBmcm9tIFwiQC9saWIvZnJhbWVyQW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgZ2FsbGVyeUl0ZW1zIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmV4cG9ydCBjb25zdCBHYWxsZXJ5U2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW2FjdGl2ZUZpbHRlciwgc2V0QWN0aXZlRmlsdGVyXSA9IHVzZVN0YXRlKFwiYWxsXCIpO1xuICBjb25zdCBbYWN0aXZlSW1hZ2UsIHNldEFjdGl2ZUltYWdlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBcbiAgY29uc3QgZmlsdGVyZWRHYWxsZXJ5ID0gYWN0aXZlRmlsdGVyID09PSBcImFsbFwiIFxuICAgID8gZ2FsbGVyeUl0ZW1zIFxuICAgIDogZ2FsbGVyeUl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uY2F0ZWdvcnkgPT09IGFjdGl2ZUZpbHRlcik7XG4gICAgXG4gIGNvbnN0IG9wZW5MaWdodGJveCA9IChpbWFnZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0QWN0aXZlSW1hZ2UoaW1hZ2UpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICB9O1xuICBcbiAgY29uc3QgY2xvc2VMaWdodGJveCA9ICgpID0+IHtcbiAgICBzZXRBY3RpdmVJbWFnZShudWxsKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cImdhbGxlcnlcIiBjbGFzc05hbWU9XCJweS0yMCBiZy1ncmFkaWVudC1kYXJrIHJlbGF0aXZlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgPFNlY3Rpb25IZWFkaW5nIFxuICAgICAgICAgIHN1YnRpdGxlPVwiQ2FwdHVyZWQgTW9tZW50c1wiXG4gICAgICAgICAgdGl0bGU9XCJQaG90byBHYWxsZXJ5XCIgXG4gICAgICAgICAgYWNjZW50ZWRXb3JkPVwiIEdhbGxlcnlcIlxuICAgICAgICAvPlxuICAgICAgICBcbiAgICAgICAgey8qIEdhbGxlcnkgZmlsdGVycyAqL31cbiAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtYi0xMFwiXG4gICAgICAgICAgdmFyaWFudHM9e2ZhZGVJbihcInVwXCIsIDAuMil9XG4gICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgd2hpbGVJblZpZXc9XCJzaG93XCJcbiAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC00IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC00IHB5LTIgZm9udC1pbnRlciB0ZXh0LXNtIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciAke1xuICAgICAgICAgICAgICAgIGFjdGl2ZUZpbHRlciA9PT0gXCJhbGxcIiBcbiAgICAgICAgICAgICAgICAgID8gXCJiZy1kZWVwLWdvbGQgdGV4dC1ibGFja1wiIFxuICAgICAgICAgICAgICAgICAgOiBcImJnLXRyYW5zcGFyZW50IGJvcmRlciBib3JkZXItZGVlcC1nb2xkIHRleHQtZGVlcC1nb2xkIGhvdmVyOmJnLWRlZXAtZ29sZCBob3Zlcjp0ZXh0LWJsYWNrIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZUZpbHRlcihcImFsbFwiKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQWxsXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTQgcHktMiBmb250LWludGVyIHRleHQtc20gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyICR7XG4gICAgICAgICAgICAgICAgYWN0aXZlRmlsdGVyID09PSBcInRvdXJuYW1lbnRzXCIgXG4gICAgICAgICAgICAgICAgICA/IFwiYmctZGVlcC1nb2xkIHRleHQtYmxhY2tcIiBcbiAgICAgICAgICAgICAgICAgIDogXCJiZy10cmFuc3BhcmVudCBib3JkZXIgYm9yZGVyLWRlZXAtZ29sZCB0ZXh0LWRlZXAtZ29sZCBob3ZlcjpiZy1kZWVwLWdvbGQgaG92ZXI6dGV4dC1ibGFjayB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVGaWx0ZXIoXCJ0b3VybmFtZW50c1wiKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVG91cm5hbWVudHNcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtNCBweS0yIGZvbnQtaW50ZXIgdGV4dC1zbSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgJHtcbiAgICAgICAgICAgICAgICBhY3RpdmVGaWx0ZXIgPT09IFwidHJhaW5pbmdcIiBcbiAgICAgICAgICAgICAgICAgID8gXCJiZy1kZWVwLWdvbGQgdGV4dC1ibGFja1wiIFxuICAgICAgICAgICAgICAgICAgOiBcImJnLXRyYW5zcGFyZW50IGJvcmRlciBib3JkZXItZGVlcC1nb2xkIHRleHQtZGVlcC1nb2xkIGhvdmVyOmJnLWRlZXAtZ29sZCBob3Zlcjp0ZXh0LWJsYWNrIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZUZpbHRlcihcInRyYWluaW5nXCIpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBUcmFpbmluZ1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC00IHB5LTIgZm9udC1pbnRlciB0ZXh0LXNtIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciAke1xuICAgICAgICAgICAgICAgIGFjdGl2ZUZpbHRlciA9PT0gXCJldmVudHNcIiBcbiAgICAgICAgICAgICAgICAgID8gXCJiZy1kZWVwLWdvbGQgdGV4dC1ibGFja1wiIFxuICAgICAgICAgICAgICAgICAgOiBcImJnLXRyYW5zcGFyZW50IGJvcmRlciBib3JkZXItZGVlcC1nb2xkIHRleHQtZGVlcC1nb2xkIGhvdmVyOmJnLWRlZXAtZ29sZCBob3Zlcjp0ZXh0LWJsYWNrIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZUZpbHRlcihcImV2ZW50c1wiKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRXZlbnRzXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICBcbiAgICAgICAgey8qIEdhbGxlcnkgZ3JpZCAqL31cbiAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNFwiXG4gICAgICAgICAgdmFyaWFudHM9e3N0YWdnZXJDb250YWluZXJ9XG4gICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgd2hpbGVJblZpZXc9XCJzaG93XCJcbiAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlLCBhbW91bnQ6IDAuMSB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgIHtmaWx0ZXJlZEdhbGxlcnkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaW1hZ2V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2FsbGVyeS1pdGVtXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50cz17ZmFkZUluKFwidXBcIiwgMC4xICogaW5kZXgpfVxuICAgICAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgIGFuaW1hdGU9XCJzaG93XCJcbiAgICAgICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjkgfX1cbiAgICAgICAgICAgICAgICBsYXlvdXRcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1zbSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuTGlnaHRib3goaXRlbS5pbWFnZSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtpdGVtLmltYWdlfT9peGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz02MDAmcT04MGB9IFxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0udGl0bGV9IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC02NCBvYmplY3QtY292ZXIgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNzAwIGhvdmVyOnNjYWxlLTExMFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1ibGFjay84MCB0by10cmFuc3BhcmVudCBvcGFjaXR5LTAgaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTMwMCBmbGV4IGl0ZW1zLWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXBsYXlmYWlyIHRleHQteGwgZm9udC1ib2xkXCI+e2l0ZW0udGl0bGV9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWl2b3J5LzgwIGZvbnQtaW50ZXIgdGV4dC1zbVwiPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgXG4gICAgICAgIHsvKiBMaWdodGJveCAqL31cbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICB7YWN0aXZlSW1hZ2UgJiYgKFxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgYmctYmxhY2svOTAgei01MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTRcIlxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZUxpZ2h0Ym94fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYXgtdy00eGwgbWF4LWgtWzkwdmhdXCJcbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHNjYWxlOiAwLjksIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHNjYWxlOiAxLCBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgICAgZXhpdD17eyBzY2FsZTogMC45LCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC0xMiByaWdodC0wIHRleHQtd2hpdGUgcC0yIHotMTBcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VMaWdodGJveH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXMgdGV4dC0yeGxcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICAgIHNyYz17YCR7YWN0aXZlSW1hZ2V9P2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEyMDAmcT05MGB9IFxuICAgICAgICAgICAgICAgICAgYWx0PVwiR2FsbGVyeSBmdWxsIHZpZXdcIiBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtaC1bODB2aF0gb2JqZWN0LWNvbnRhaW4gcm91bmRlZC1zbVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9jbGllbnQvc3JjL2NvbXBvbmVudHMvR2FsbGVyeVNlY3Rpb24udHN4In0=