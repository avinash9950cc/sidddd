import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Navbar.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f91473b9"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/components/Navbar.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/@fs/home/runner/workspace/node_modules/.vite/deps/react.js?v=f91473b9"; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { cn } from "/src/lib/utils.ts";
import { MagneticButton } from "/src/components/ui/magnetic-button.tsx";
import { motion, AnimatePresence } from "/@fs/home/runner/workspace/node_modules/.vite/deps/framer-motion.js?v=3cc6b24e";
import { navVariants } from "/src/lib/framerAnimations.ts";
export const Navbar = () => {
  _s();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Achievements", href: "#achievements" },
    { name: "Media", href: "#media" },
    { name: "Gallery", href: "#gallery" },
    { name: "Sponsors", href: "#sponsors" }
  ];
  return /* @__PURE__ */ jsxDEV(
    motion.nav,
    {
      "data-replit-metadata": "client/src/components/Navbar.tsx:33:4",
      "data-component-name": "motion.nav",
      className: cn(
        "fixed w-full top-0 z-50 px-4 py-3 transition-all duration-300",
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5" : "glass"
      ),
      variants: navVariants,
      initial: "hidden",
      animate: "visible",
      children: [
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/Navbar.tsx:42:6", "data-component-name": "div", className: "container mx-auto flex justify-between items-center", children: [
          /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/components/Navbar.tsx:44:8", "data-component-name": "a", href: "#", className: "text-deep-gold font-playfair text-xl font-bold tracking-wider", children: "SMK" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/Navbar.tsx",
            lineNumber: 44,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/Navbar.tsx:49:8", "data-component-name": "div", className: "hidden md:flex space-x-6 items-center", children: [
            navLinks.map(
              (link) => /* @__PURE__ */ jsxDEV(
                "a",
                {
                  "data-replit-metadata": "client/src/components/Navbar.tsx:51:10",
                  "data-component-name": "a",
                  href: link.href,
                  className: "text-ivory hover:text-deep-gold transition-colors font-inter text-sm uppercase tracking-wider",
                  children: link.name
                },
                link.name,
                false,
                {
                  fileName: "/home/runner/workspace/client/src/components/Navbar.tsx",
                  lineNumber: 51,
                  columnNumber: 11
                },
                this
              )
            ),
            /* @__PURE__ */ jsxDEV(MagneticButton, { "data-replit-metadata": "client/src/components/Navbar.tsx:59:10", "data-component-name": "MagneticButton", children: /* @__PURE__ */ jsxDEV(
              "a",
              {
                "data-replit-metadata": "client/src/components/Navbar.tsx:60:12",
                "data-component-name": "a",
                href: "#contact",
                className: "bg-deep-gold text-black px-4 py-2 rounded-sm font-inter text-sm uppercase tracking-wider hover:bg-bronze transition-colors",
                children: "Contact"
              },
              void 0,
              false,
              {
                fileName: "/home/runner/workspace/client/src/components/Navbar.tsx",
                lineNumber: 60,
                columnNumber: 13
              },
              this
            ) }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/Navbar.tsx",
              lineNumber: 59,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/components/Navbar.tsx",
            lineNumber: 49,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              "data-replit-metadata": "client/src/components/Navbar.tsx:70:8",
              "data-component-name": "button",
              className: "md:hidden text-ivory focus:outline-none",
              onClick: toggleMenu,
              children: /* @__PURE__ */ jsxDEV("i", { "data-replit-metadata": "client/src/components/Navbar.tsx:74:10", "data-component-name": "i", className: "fas fa-bars text-xl" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/components/Navbar.tsx",
                lineNumber: 74,
                columnNumber: 11
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/home/runner/workspace/client/src/components/Navbar.tsx",
              lineNumber: 70,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/components/Navbar.tsx",
          lineNumber: 42,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(AnimatePresence, { "data-replit-metadata": "client/src/components/Navbar.tsx:79:6", "data-component-name": "AnimatePresence", children: isMenuOpen && /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            "data-replit-metadata": "client/src/components/Navbar.tsx:81:8",
            "data-component-name": "motion.div",
            className: "fixed top-0 right-0 h-full w-64 bg-charcoal z-50 shadow-lg",
            initial: { x: "100%" },
            animate: { x: 0 },
            exit: { x: "100%" },
            transition: { type: "tween", duration: 0.3 },
            children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/Navbar.tsx:88:12", "data-component-name": "div", className: "p-6", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/Navbar.tsx:89:14", "data-component-name": "div", className: "flex justify-end", children: /* @__PURE__ */ jsxDEV(
                "button",
                {
                  "data-replit-metadata": "client/src/components/Navbar.tsx:90:16",
                  "data-component-name": "button",
                  className: "text-ivory focus:outline-none",
                  onClick: closeMenu,
                  children: /* @__PURE__ */ jsxDEV("i", { "data-replit-metadata": "client/src/components/Navbar.tsx:94:18", "data-component-name": "i", className: "fas fa-times text-xl" }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/components/Navbar.tsx",
                    lineNumber: 94,
                    columnNumber: 19
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/home/runner/workspace/client/src/components/Navbar.tsx",
                  lineNumber: 90,
                  columnNumber: 17
                },
                this
              ) }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/components/Navbar.tsx",
                lineNumber: 89,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/Navbar.tsx:97:14", "data-component-name": "div", className: "flex flex-col space-y-6 mt-10", children: [
                navLinks.map(
                  (link) => /* @__PURE__ */ jsxDEV(
                    "a",
                    {
                      "data-replit-metadata": "client/src/components/Navbar.tsx:99:14",
                      "data-component-name": "a",
                      href: link.href,
                      className: "text-ivory hover:text-deep-gold transition-colors font-inter text-sm uppercase tracking-wider",
                      onClick: closeMenu,
                      children: link.name
                    },
                    link.name,
                    false,
                    {
                      fileName: "/home/runner/workspace/client/src/components/Navbar.tsx",
                      lineNumber: 99,
                      columnNumber: 15
                    },
                    this
                  )
                ),
                /* @__PURE__ */ jsxDEV(
                  "a",
                  {
                    "data-replit-metadata": "client/src/components/Navbar.tsx:108:16",
                    "data-component-name": "a",
                    href: "#contact",
                    className: "bg-deep-gold text-black px-4 py-2 rounded-sm font-inter text-sm uppercase tracking-wider text-center",
                    onClick: closeMenu,
                    children: "Contact"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/home/runner/workspace/client/src/components/Navbar.tsx",
                    lineNumber: 108,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/client/src/components/Navbar.tsx",
                lineNumber: 97,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/client/src/components/Navbar.tsx",
              lineNumber: 88,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/home/runner/workspace/client/src/components/Navbar.tsx",
            lineNumber: 81,
            columnNumber: 9
          },
          this
        ) }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/components/Navbar.tsx",
          lineNumber: 79,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/home/runner/workspace/client/src/components/Navbar.tsx",
      lineNumber: 33,
      columnNumber: 5
    },
    this
  );
};
_s(Navbar, "OuTyq8NkCg/NO/ioVShif1OcFTc=");
_c = Navbar;
var _c;
$RefreshReg$(_c, "Navbar");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/Navbar.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/Navbar.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFrQkE7QUFBQSxpQkEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE0QkE7QUFBQTtBQUFBLFVBbkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQW9DQSxLQXRDSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBd0NBO0FBQUE7QUFBQTtBQUFBLElBdEZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQXVGQTtBQUVKO0FBQUVQLEdBbkhXRCxRQUFNO0FBQUF1QixLQUFOdkI7QUFBTSxJQUFBdUI7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbInVzZUVmZmVjdCIsImNuIiwiTWFnbmV0aWNCdXR0b24iLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJuYXZWYXJpYW50cyIsIk5hdmJhciIsIl9zIiwiaXNNZW51T3BlbiIsInNldElzTWVudU9wZW4iLCJ1c2VTdGF0ZSIsInNjcm9sbGVkIiwic2V0U2Nyb2xsZWQiLCJ0b2dnbGVNZW51IiwiY2xvc2VNZW51IiwiaGFuZGxlU2Nyb2xsIiwib2Zmc2V0Iiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibmF2TGlua3MiLCJuYW1lIiwiaHJlZiIsIm1hcCIsImxpbmsiLCJ4IiwidHlwZSIsImR1cmF0aW9uIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiTmF2YmFyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgTWFnbmV0aWNCdXR0b24gfSBmcm9tIFwiLi91aS9tYWduZXRpYy1idXR0b25cIjtcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IG5hdlZhcmlhbnRzIH0gZnJvbSBcIkAvbGliL2ZyYW1lckFuaW1hdGlvbnNcIjtcblxuZXhwb3J0IGNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgY29uc3QgW2lzTWVudU9wZW4sIHNldElzTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2Nyb2xsZWQsIHNldFNjcm9sbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4gc2V0SXNNZW51T3BlbighaXNNZW51T3Blbik7XG4gIGNvbnN0IGNsb3NlTWVudSA9ICgpID0+IHNldElzTWVudU9wZW4oZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBzZXRTY3JvbGxlZChvZmZzZXQgPiA1MCk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBuYXZMaW5rcyA9IFtcbiAgICB7IG5hbWU6IFwiQWJvdXRcIiwgaHJlZjogXCIjYWJvdXRcIiB9LFxuICAgIHsgbmFtZTogXCJBY2hpZXZlbWVudHNcIiwgaHJlZjogXCIjYWNoaWV2ZW1lbnRzXCIgfSxcbiAgICB7IG5hbWU6IFwiTWVkaWFcIiwgaHJlZjogXCIjbWVkaWFcIiB9LFxuICAgIHsgbmFtZTogXCJHYWxsZXJ5XCIsIGhyZWY6IFwiI2dhbGxlcnlcIiB9LFxuICAgIHsgbmFtZTogXCJTcG9uc29yc1wiLCBocmVmOiBcIiNzcG9uc29yc1wiIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLm5hdiBcbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwiZml4ZWQgdy1mdWxsIHRvcC0wIHotNTAgcHgtNCBweS0zIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiLFxuICAgICAgICBzY3JvbGxlZCA/IFwiYmctYmxhY2svODAgYmFja2Ryb3AtYmx1ci1tZCBib3JkZXItYiBib3JkZXItd2hpdGUvNVwiIDogXCJnbGFzc1wiXG4gICAgICApfVxuICAgICAgdmFyaWFudHM9e25hdlZhcmlhbnRzfVxuICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICBhbmltYXRlPVwidmlzaWJsZVwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgey8qIExvZ28gKi99XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1kZWVwLWdvbGQgZm9udC1wbGF5ZmFpciB0ZXh0LXhsIGZvbnQtYm9sZCB0cmFja2luZy13aWRlclwiPlxuICAgICAgICAgIFNNS1xuICAgICAgICA8L2E+XG5cbiAgICAgICAgey8qIERlc2t0b3AgTmF2ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IHNwYWNlLXgtNiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICB7bmF2TGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBrZXk9e2xpbmsubmFtZX1cbiAgICAgICAgICAgICAgaHJlZj17bGluay5ocmVmfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWl2b3J5IGhvdmVyOnRleHQtZGVlcC1nb2xkIHRyYW5zaXRpb24tY29sb3JzIGZvbnQtaW50ZXIgdGV4dC1zbSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bGluay5uYW1lfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxNYWduZXRpY0J1dHRvbj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCIjY29udGFjdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWRlZXAtZ29sZCB0ZXh0LWJsYWNrIHB4LTQgcHktMiByb3VuZGVkLXNtIGZvbnQtaW50ZXIgdGV4dC1zbSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgaG92ZXI6YmctYnJvbnplIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTWFnbmV0aWNCdXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBNb2JpbGUgbWVudSBidXR0b24gKi99XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJtZDpoaWRkZW4gdGV4dC1pdm9yeSBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9XG4gICAgICAgID5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYmFycyB0ZXh0LXhsXCI+PC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTW9iaWxlIE5hdiAqL31cbiAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgIHtpc01lbnVPcGVuICYmIChcbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgcmlnaHQtMCBoLWZ1bGwgdy02NCBiZy1jaGFyY29hbCB6LTUwIHNoYWRvdy1sZ1wiXG4gICAgICAgICAgICBpbml0aWFsPXt7IHg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IHg6IDAgfX1cbiAgICAgICAgICAgIGV4aXQ9e3sgeDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgdHlwZTogXCJ0d2VlblwiLCBkdXJhdGlvbjogMC4zIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTZcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1pdm9yeSBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VNZW51fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lcyB0ZXh0LXhsXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktNiBtdC0xMFwiPlxuICAgICAgICAgICAgICAgIHtuYXZMaW5rcy5tYXAoKGxpbmspID0+IChcbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGtleT17bGluay5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtsaW5rLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtaXZvcnkgaG92ZXI6dGV4dC1kZWVwLWdvbGQgdHJhbnNpdGlvbi1jb2xvcnMgZm9udC1pbnRlciB0ZXh0LXNtIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlTWVudX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2xpbmsubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNjb250YWN0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWRlZXAtZ29sZCB0ZXh0LWJsYWNrIHB4LTQgcHktMiByb3VuZGVkLXNtIGZvbnQtaW50ZXIgdGV4dC1zbSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VNZW51fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICApfVxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgPC9tb3Rpb24ubmF2PlxuICApO1xufTtcbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9jbGllbnQvc3JjL2NvbXBvbmVudHMvTmF2YmFyLnRzeCJ9