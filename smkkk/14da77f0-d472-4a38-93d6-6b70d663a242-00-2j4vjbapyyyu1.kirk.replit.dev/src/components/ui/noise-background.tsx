import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/noise-background.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f91473b9"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/components/ui/noise-background.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/@fs/home/runner/workspace/node_modules/.vite/deps/react.js?v=f91473b9"; const useEffect = __vite__cjsImport3_react["useEffect"]; const useRef = __vite__cjsImport3_react["useRef"];
export const NoiseBackground = () => {
  _s();
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.globalAlpha = 0.03;
    };
    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.floor(Math.random() * 255);
        data[i] = noise;
        data[i + 1] = noise;
        data[i + 2] = noise;
        data[i + 3] = 255;
      }
      ctx.putImageData(imageData, 0, 0);
    };
    let animationFrameId;
    const animate = () => {
      generateNoise();
      animationFrameId = requestAnimationFrame(animate);
    };
    window.addEventListener("resize", resize);
    resize();
    animate();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return /* @__PURE__ */ jsxDEV(
    "canvas",
    {
      "data-replit-metadata": "client/src/components/ui/noise-background.tsx:52:4",
      "data-component-name": "canvas",
      ref: canvasRef,
      className: "fixed top-0 left-0 w-full h-full pointer-events-none z-10",
      style: { opacity: 0.03 }
    },
    void 0,
    false,
    {
      fileName: "/home/runner/workspace/client/src/components/ui/noise-background.tsx",
      lineNumber: 52,
      columnNumber: 5
    },
    this
  );
};
_s(NoiseBackground, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = NoiseBackground;
var _c;
$RefreshReg$(_c, "NoiseBackground");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/ui/noise-background.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/ui/noise-background.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBbURJOzJCQW5ESjtBQUFvQkEsTUFBTSxjQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWxDLGFBQU1DLGtCQUFrQkEsTUFBTTtBQUFBQyxLQUFBO0FBQ25DLFFBQU1DLFlBQVlILE9BQTBCLElBQUk7QUFFaERJLFlBQVUsTUFBTTtBQUNkLFVBQU1DLFNBQVNGLFVBQVVHO0FBQ3pCLFFBQUksQ0FBQ0QsT0FBUTtBQUViLFVBQU1FLE1BQU1GLE9BQU9HLFdBQVcsSUFBSTtBQUNsQyxRQUFJLENBQUNELElBQUs7QUFFVixVQUFNRSxTQUFTQSxNQUFNO0FBQ25CSixhQUFPSyxRQUFRQyxPQUFPQztBQUN0QlAsYUFBT1EsU0FBU0YsT0FBT0c7QUFDdkJQLFVBQUlRLGNBQWM7QUFBQSxJQUNwQjtBQUVBLFVBQU1DLGdCQUFnQkEsTUFBTTtBQUMxQixZQUFNQyxZQUFZVixJQUFJVyxnQkFBZ0JiLE9BQU9LLE9BQU9MLE9BQU9RLE1BQU07QUFDakUsWUFBTU0sT0FBT0YsVUFBVUU7QUFFdkIsZUFBU0MsSUFBSSxHQUFHQSxJQUFJRCxLQUFLRSxRQUFRRCxLQUFLLEdBQUc7QUFDdkMsY0FBTUUsUUFBUUMsS0FBS0MsTUFBTUQsS0FBS0UsT0FBTyxJQUFJLEdBQUc7QUFDNUNOLGFBQUtDLENBQUMsSUFBSUU7QUFDVkgsYUFBS0MsSUFBSSxDQUFDLElBQUlFO0FBQ2RILGFBQUtDLElBQUksQ0FBQyxJQUFJRTtBQUNkSCxhQUFLQyxJQUFJLENBQUMsSUFBSTtBQUFBLE1BQ2hCO0FBRUFiLFVBQUltQixhQUFhVCxXQUFXLEdBQUcsQ0FBQztBQUFBLElBQ2xDO0FBRUEsUUFBSVU7QUFFSixVQUFNQyxVQUFVQSxNQUFNO0FBQ3BCWixvQkFBYztBQUNkVyx5QkFBbUJFLHNCQUFzQkQsT0FBTztBQUFBLElBQ2xEO0FBRUFqQixXQUFPbUIsaUJBQWlCLFVBQVVyQixNQUFNO0FBQ3hDQSxXQUFPO0FBQ1BtQixZQUFRO0FBRVIsV0FBTyxNQUFNO0FBQ1hqQixhQUFPb0Isb0JBQW9CLFVBQVV0QixNQUFNO0FBQzNDdUIsMkJBQXFCTCxnQkFBZ0I7QUFBQSxJQUN2QztBQUFBLEVBQ0YsR0FBRyxFQUFFO0FBRUwsU0FDRTtBQUFBLElBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNDLEtBQUt4QjtBQUFBQSxNQUNMLFdBQVU7QUFBQSxNQUNWLE9BQU8sRUFBRThCLFNBQVMsS0FBSztBQUFBO0FBQUEsSUFIekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRzJCO0FBRy9CO0FBQUUvQixHQXZEV0QsaUJBQWU7QUFBQWlDLEtBQWZqQztBQUFlLElBQUFpQztBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsidXNlUmVmIiwiTm9pc2VCYWNrZ3JvdW5kIiwiX3MiLCJjYW52YXNSZWYiLCJ1c2VFZmZlY3QiLCJjYW52YXMiLCJjdXJyZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsInJlc2l6ZSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiZ2xvYmFsQWxwaGEiLCJnZW5lcmF0ZU5vaXNlIiwiaW1hZ2VEYXRhIiwiY3JlYXRlSW1hZ2VEYXRhIiwiZGF0YSIsImkiLCJsZW5ndGgiLCJub2lzZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1dEltYWdlRGF0YSIsImFuaW1hdGlvbkZyYW1lSWQiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIm9wYWNpdHkiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJub2lzZS1iYWNrZ3JvdW5kLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgTm9pc2VCYWNrZ3JvdW5kID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgaWYgKCFjYW52YXMpIHJldHVybjtcblxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGlmICghY3R4KSByZXR1cm47XG5cbiAgICBjb25zdCByZXNpemUgPSAoKSA9PiB7XG4gICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICBjdHguZ2xvYmFsQWxwaGEgPSAwLjAzOyAvLyBWZXJ5IHN1YnRsZSBub2lzZVxuICAgIH07XG5cbiAgICBjb25zdCBnZW5lcmF0ZU5vaXNlID0gKCkgPT4ge1xuICAgICAgY29uc3QgaW1hZ2VEYXRhID0gY3R4LmNyZWF0ZUltYWdlRGF0YShjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgY29uc3QgZGF0YSA9IGltYWdlRGF0YS5kYXRhO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IDQpIHtcbiAgICAgICAgY29uc3Qgbm9pc2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTUpO1xuICAgICAgICBkYXRhW2ldID0gbm9pc2U7ICAgICAvLyByZWRcbiAgICAgICAgZGF0YVtpICsgMV0gPSBub2lzZTsgLy8gZ3JlZW5cbiAgICAgICAgZGF0YVtpICsgMl0gPSBub2lzZTsgLy8gYmx1ZVxuICAgICAgICBkYXRhW2kgKyAzXSA9IDI1NTsgICAvLyBhbHBoYVxuICAgICAgfVxuXG4gICAgICBjdHgucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7XG4gICAgfTtcblxuICAgIGxldCBhbmltYXRpb25GcmFtZUlkOiBudW1iZXI7XG4gICAgXG4gICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcbiAgICAgIGdlbmVyYXRlTm9pc2UoKTtcbiAgICAgIGFuaW1hdGlvbkZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemUpO1xuICAgIHJlc2l6ZSgpO1xuICAgIGFuaW1hdGUoKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplKTtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lSWQpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxjYW52YXNcbiAgICAgIHJlZj17Y2FudmFzUmVmfVxuICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWZ1bGwgcG9pbnRlci1ldmVudHMtbm9uZSB6LTEwXCJcbiAgICAgIHN0eWxlPXt7IG9wYWNpdHk6IDAuMDMgfX1cbiAgICAvPlxuICApO1xufTtcbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9jbGllbnQvc3JjL2NvbXBvbmVudHMvdWkvbm9pc2UtYmFja2dyb3VuZC50c3gifQ==