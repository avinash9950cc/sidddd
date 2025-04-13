import __vite__cjsImport0_react from "/@fs/home/runner/workspace/node_modules/.vite/deps/react.js?v=f91473b9"; const useState = __vite__cjsImport0_react["useState"]; const useEffect = __vite__cjsImport0_react["useEffect"]; const useRef = __vite__cjsImport0_react["useRef"];
export function useAnimatedCounter({
  end,
  duration = 2,
  startOnInView = true,
  start = 0
}) {
  const [count, setCount] = useState(start);
  const countingRef = useRef(null);
  const startTimeRef = useRef(null);
  useEffect(() => {
    if (!startOnInView) return;
    if (countingRef.current) {
      clearInterval(countingRef.current);
    }
    const intervalTime = 16;
    const totalFrames = duration * 1e3 / intervalTime;
    const incrementPerFrame = (end - start) / totalFrames;
    startTimeRef.current = Date.now();
    countingRef.current = setInterval(() => {
      const elapsedTime = Date.now() - (startTimeRef.current || 0);
      const progress = Math.min(elapsedTime / (duration * 1e3), 1);
      const easedProgress = 1 - (1 - progress) ** 3;
      const nextCount = Math.floor(start + (end - start) * easedProgress);
      setCount(nextCount);
      if (nextCount >= end) {
        setCount(end);
        if (countingRef.current) {
          clearInterval(countingRef.current);
        }
      }
    }, intervalTime);
    return () => {
      if (countingRef.current) {
        clearInterval(countingRef.current);
      }
    };
  }, [end, duration, startOnInView, start]);
  return count;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZUFuaW1hdGVkQ291bnRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIEFuaW1hdGVkQ291bnRlclByb3BzIHtcbiAgZW5kOiBudW1iZXI7XG4gIGR1cmF0aW9uPzogbnVtYmVyO1xuICBzdGFydE9uSW5WaWV3PzogYm9vbGVhbjtcbiAgc3RhcnQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbmltYXRlZENvdW50ZXIoe1xuICBlbmQsXG4gIGR1cmF0aW9uID0gMixcbiAgc3RhcnRPbkluVmlldyA9IHRydWUsXG4gIHN0YXJ0ID0gMCxcbn06IEFuaW1hdGVkQ291bnRlclByb3BzKSB7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoc3RhcnQpO1xuICBjb25zdCBjb3VudGluZ1JlZiA9IHVzZVJlZjxOb2RlSlMuVGltZW91dCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBzdGFydFRpbWVSZWYgPSB1c2VSZWY8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBPbmx5IHN0YXJ0IGFuaW1hdGlvbiBpZiBzdGFydE9uSW5WaWV3IGlzIHRydWUgb3Igbm90IHByb3ZpZGVkXG4gICAgaWYgKCFzdGFydE9uSW5WaWV3KSByZXR1cm47XG5cbiAgICAvLyBDbGVhciBhbnkgZXhpc3RpbmcgYW5pbWF0aW9uXG4gICAgaWYgKGNvdW50aW5nUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRpbmdSZWYuY3VycmVudCk7XG4gICAgfVxuXG4gICAgLy8gRm9yIHNtYWxsIG51bWJlcnMsIHVwZGF0ZSBtb3JlIGZyZXF1ZW50bHkgdG8gYXBwZWFyIHNtb290aGVyXG4gICAgY29uc3QgaW50ZXJ2YWxUaW1lID0gMTY7IC8vIH42MGZwc1xuICAgIGNvbnN0IHRvdGFsRnJhbWVzID0gKGR1cmF0aW9uICogMTAwMCkgLyBpbnRlcnZhbFRpbWU7XG4gICAgY29uc3QgaW5jcmVtZW50UGVyRnJhbWUgPSAoZW5kIC0gc3RhcnQpIC8gdG90YWxGcmFtZXM7XG4gICAgXG4gICAgLy8gU3RhcnQgYW5pbWF0aW9uXG4gICAgc3RhcnRUaW1lUmVmLmN1cnJlbnQgPSBEYXRlLm5vdygpO1xuICAgIFxuICAgIGNvdW50aW5nUmVmLmN1cnJlbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBlbGFwc2VkVGltZSA9IERhdGUubm93KCkgLSAoc3RhcnRUaW1lUmVmLmN1cnJlbnQgfHwgMCk7XG4gICAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWluKGVsYXBzZWRUaW1lIC8gKGR1cmF0aW9uICogMTAwMCksIDEpO1xuICAgICAgXG4gICAgICAvLyBFYXNlIG91dCBjdWJpYyBmdW5jdGlvbiBmb3Igc21vb3RoZXIgZW5kaW5nXG4gICAgICBjb25zdCBlYXNlZFByb2dyZXNzID0gMSAtICgxIC0gcHJvZ3Jlc3MpICoqIDM7XG4gICAgICBjb25zdCBuZXh0Q291bnQgPSBNYXRoLmZsb29yKHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIGVhc2VkUHJvZ3Jlc3MpO1xuICAgICAgXG4gICAgICBzZXRDb3VudChuZXh0Q291bnQpO1xuICAgICAgXG4gICAgICBpZiAobmV4dENvdW50ID49IGVuZCkge1xuICAgICAgICBzZXRDb3VudChlbmQpO1xuICAgICAgICBpZiAoY291bnRpbmdSZWYuY3VycmVudCkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRpbmdSZWYuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBpbnRlcnZhbFRpbWUpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChjb3VudGluZ1JlZi5jdXJyZW50KSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRpbmdSZWYuY3VycmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW2VuZCwgZHVyYXRpb24sIHN0YXJ0T25JblZpZXcsIHN0YXJ0XSk7XG5cbiAgcmV0dXJuIGNvdW50O1xufVxuIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTLFVBQVUsV0FBVyxjQUFjO0FBU3JDLGdCQUFTLG1CQUFtQjtBQUFBLEVBQ2pDO0FBQUEsRUFDQSxXQUFXO0FBQUEsRUFDWCxnQkFBZ0I7QUFBQSxFQUNoQixRQUFRO0FBQ1YsR0FBeUI7QUFDdkIsUUFBTSxDQUFDLE9BQU8sUUFBUSxJQUFJLFNBQVMsS0FBSztBQUN4QyxRQUFNLGNBQWMsT0FBOEIsSUFBSTtBQUN0RCxRQUFNLGVBQWUsT0FBc0IsSUFBSTtBQUUvQyxZQUFVLE1BQU07QUFFZCxRQUFJLENBQUMsY0FBZTtBQUdwQixRQUFJLFlBQVksU0FBUztBQUN2QixvQkFBYyxZQUFZLE9BQU87QUFBQSxJQUNuQztBQUdBLFVBQU0sZUFBZTtBQUNyQixVQUFNLGNBQWUsV0FBVyxNQUFRO0FBQ3hDLFVBQU0scUJBQXFCLE1BQU0sU0FBUztBQUcxQyxpQkFBYSxVQUFVLEtBQUssSUFBSTtBQUVoQyxnQkFBWSxVQUFVLFlBQVksTUFBTTtBQUN0QyxZQUFNLGNBQWMsS0FBSyxJQUFJLEtBQUssYUFBYSxXQUFXO0FBQzFELFlBQU0sV0FBVyxLQUFLLElBQUksZUFBZSxXQUFXLE1BQU8sQ0FBQztBQUc1RCxZQUFNLGdCQUFnQixLQUFLLElBQUksYUFBYTtBQUM1QyxZQUFNLFlBQVksS0FBSyxNQUFNLFNBQVMsTUFBTSxTQUFTLGFBQWE7QUFFbEUsZUFBUyxTQUFTO0FBRWxCLFVBQUksYUFBYSxLQUFLO0FBQ3BCLGlCQUFTLEdBQUc7QUFDWixZQUFJLFlBQVksU0FBUztBQUN2Qix3QkFBYyxZQUFZLE9BQU87QUFBQSxRQUNuQztBQUFBLE1BQ0Y7QUFBQSxJQUNGLEdBQUcsWUFBWTtBQUVmLFdBQU8sTUFBTTtBQUNYLFVBQUksWUFBWSxTQUFTO0FBQ3ZCLHNCQUFjLFlBQVksT0FBTztBQUFBLE1BQ25DO0FBQUEsSUFDRjtBQUFBLEVBQ0YsR0FBRyxDQUFDLEtBQUssVUFBVSxlQUFlLEtBQUssQ0FBQztBQUV4QyxTQUFPO0FBQ1Q7IiwibmFtZXMiOltdfQ==