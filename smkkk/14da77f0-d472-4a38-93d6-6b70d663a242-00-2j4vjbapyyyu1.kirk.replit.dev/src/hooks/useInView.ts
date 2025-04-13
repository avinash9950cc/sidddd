import __vite__cjsImport0_react from "/@fs/home/runner/workspace/node_modules/.vite/deps/react.js?v=f91473b9"; const useState = __vite__cjsImport0_react["useState"]; const useEffect = __vite__cjsImport0_react["useEffect"]; const useRef = __vite__cjsImport0_react["useRef"];
export function useInView({
  threshold = 0,
  rootMargin = "0px",
  triggerOnce = true
} = {}) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const observerRef = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const isIntersecting = entry.isIntersecting;
        if (isIntersecting !== inView) {
          setInView(isIntersecting);
          if (triggerOnce && isIntersecting && observerRef.current) {
            observerRef.current.disconnect();
          }
        }
      },
      { threshold, rootMargin }
    );
    observerRef.current.observe(ref.current);
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, triggerOnce, inView]);
  return { ref, inView };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZUluVmlldy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBJblZpZXdPcHRpb25zIHtcbiAgdGhyZXNob2xkPzogbnVtYmVyO1xuICByb290TWFyZ2luPzogc3RyaW5nO1xuICB0cmlnZ2VyT25jZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJblZpZXcoe1xuICB0aHJlc2hvbGQgPSAwLFxuICByb290TWFyZ2luID0gJzBweCcsXG4gIHRyaWdnZXJPbmNlID0gdHJ1ZSxcbn06IEluVmlld09wdGlvbnMgPSB7fSkge1xuICBjb25zdCBbaW5WaWV3LCBzZXRJblZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQgfCBudWxsPihudWxsKTtcbiAgY29uc3Qgb2JzZXJ2ZXJSZWYgPSB1c2VSZWY8SW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSByZWYsIGRvbid0IGRvIGFueXRoaW5nXG4gICAgaWYgKCFyZWYuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgLy8gQ2xlYW51cCBwcmV2aW91cyBvYnNlcnZlciBpZiBpdCBleGlzdHNcbiAgICBpZiAob2JzZXJ2ZXJSZWYuY3VycmVudCkge1xuICAgICAgb2JzZXJ2ZXJSZWYuY3VycmVudC5kaXNjb25uZWN0KCk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIG9ic2VydmVyXG4gICAgb2JzZXJ2ZXJSZWYuY3VycmVudCA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICAgIGNvbnN0IFtlbnRyeV0gPSBlbnRyaWVzO1xuICAgICAgICBjb25zdCBpc0ludGVyc2VjdGluZyA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nO1xuXG4gICAgICAgIC8vIE9ubHkgdXBkYXRlIGlmIHRoZSBzdGF0ZSBjaGFuZ2VzIG9yIGlmIHdlIGFsd2F5cyB3YW50IHVwZGF0ZXNcbiAgICAgICAgaWYgKGlzSW50ZXJzZWN0aW5nICE9PSBpblZpZXcpIHtcbiAgICAgICAgICBzZXRJblZpZXcoaXNJbnRlcnNlY3RpbmcpO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIElmIHRyaWdnZXJPbmNlIGlzIHRydWUgYW5kIHdlJ3JlIG5vdyBpbiB2aWV3LCBkaXNjb25uZWN0XG4gICAgICAgICAgaWYgKHRyaWdnZXJPbmNlICYmIGlzSW50ZXJzZWN0aW5nICYmIG9ic2VydmVyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIG9ic2VydmVyUmVmLmN1cnJlbnQuZGlzY29ubmVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHsgdGhyZXNob2xkLCByb290TWFyZ2luIH1cbiAgICApO1xuXG4gICAgLy8gU3RhcnQgb2JzZXJ2aW5nIHRoZSBlbGVtZW50XG4gICAgb2JzZXJ2ZXJSZWYuY3VycmVudC5vYnNlcnZlKHJlZi5jdXJyZW50KTtcblxuICAgIC8vIENsZWFudXAgb24gdW5tb3VudFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAob2JzZXJ2ZXJSZWYuY3VycmVudCkge1xuICAgICAgICBvYnNlcnZlclJlZi5jdXJyZW50LmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbdGhyZXNob2xkLCByb290TWFyZ2luLCB0cmlnZ2VyT25jZSwgaW5WaWV3XSk7XG5cbiAgcmV0dXJuIHsgcmVmLCBpblZpZXcgfTtcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxVQUFVLFdBQVcsY0FBYztBQVFyQyxnQkFBUyxVQUFVO0FBQUEsRUFDeEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsY0FBYztBQUNoQixJQUFtQixDQUFDLEdBQUc7QUFDckIsUUFBTSxDQUFDLFFBQVEsU0FBUyxJQUFJLFNBQVMsS0FBSztBQUMxQyxRQUFNLE1BQU0sT0FBMkIsSUFBSTtBQUMzQyxRQUFNLGNBQWMsT0FBb0MsSUFBSTtBQUU1RCxZQUFVLE1BQU07QUFFZCxRQUFJLENBQUMsSUFBSSxRQUFTO0FBR2xCLFFBQUksWUFBWSxTQUFTO0FBQ3ZCLGtCQUFZLFFBQVEsV0FBVztBQUFBLElBQ2pDO0FBR0EsZ0JBQVksVUFBVSxJQUFJO0FBQUEsTUFDeEIsQ0FBQyxZQUFZO0FBQ1gsY0FBTSxDQUFDLEtBQUssSUFBSTtBQUNoQixjQUFNLGlCQUFpQixNQUFNO0FBRzdCLFlBQUksbUJBQW1CLFFBQVE7QUFDN0Isb0JBQVUsY0FBYztBQUd4QixjQUFJLGVBQWUsa0JBQWtCLFlBQVksU0FBUztBQUN4RCx3QkFBWSxRQUFRLFdBQVc7QUFBQSxVQUNqQztBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxFQUFFLFdBQVcsV0FBVztBQUFBLElBQzFCO0FBR0EsZ0JBQVksUUFBUSxRQUFRLElBQUksT0FBTztBQUd2QyxXQUFPLE1BQU07QUFDWCxVQUFJLFlBQVksU0FBUztBQUN2QixvQkFBWSxRQUFRLFdBQVc7QUFBQSxNQUNqQztBQUFBLElBQ0Y7QUFBQSxFQUNGLEdBQUcsQ0FBQyxXQUFXLFlBQVksYUFBYSxNQUFNLENBQUM7QUFFL0MsU0FBTyxFQUFFLEtBQUssT0FBTztBQUN2QjsiLCJuYW1lcyI6W119