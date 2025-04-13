import __vite__cjsImport0_react from "/@fs/home/runner/workspace/node_modules/.vite/deps/react.js?v=f91473b9"; const useState = __vite__cjsImport0_react["useState"]; const useEffect = __vite__cjsImport0_react["useEffect"];
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const scrolled = currentScrollY / scrollHeight;
        setProgress(scrolled);
      }
    };
    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);
  return progress;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZVNjcm9sbFByb2dyZXNzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNjcm9sbFByb2dyZXNzKCkge1xuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1cGRhdGVTY3JvbGxQcm9ncmVzcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIFxuICAgICAgaWYgKHNjcm9sbEhlaWdodCA+IDApIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsZWQgPSBjdXJyZW50U2Nyb2xsWSAvIHNjcm9sbEhlaWdodDtcbiAgICAgICAgc2V0UHJvZ3Jlc3Moc2Nyb2xsZWQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBVcGRhdGUgcHJvZ3Jlc3MgaW1tZWRpYXRlbHkgYW5kIGFkZCBzY3JvbGwgbGlzdGVuZXJcbiAgICB1cGRhdGVTY3JvbGxQcm9ncmVzcygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHVwZGF0ZVNjcm9sbFByb2dyZXNzLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdXBkYXRlU2Nyb2xsUHJvZ3Jlc3MpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gcHJvZ3Jlc3M7XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBLFNBQVMsVUFBVSxpQkFBaUI7QUFFN0IsZ0JBQVMsb0JBQW9CO0FBQ2xDLFFBQU0sQ0FBQyxVQUFVLFdBQVcsSUFBSSxTQUFpQixDQUFDO0FBRWxELFlBQVUsTUFBTTtBQUNkLFVBQU0sdUJBQXVCLE1BQU07QUFDakMsWUFBTSxpQkFBaUIsT0FBTztBQUM5QixZQUFNLGVBQWUsU0FBUyxLQUFLLGVBQWUsT0FBTztBQUV6RCxVQUFJLGVBQWUsR0FBRztBQUNwQixjQUFNLFdBQVcsaUJBQWlCO0FBQ2xDLG9CQUFZLFFBQVE7QUFBQSxNQUN0QjtBQUFBLElBQ0Y7QUFHQSx5QkFBcUI7QUFDckIsV0FBTyxpQkFBaUIsVUFBVSxzQkFBc0IsRUFBRSxTQUFTLEtBQUssQ0FBQztBQUV6RSxXQUFPLE1BQU07QUFDWCxhQUFPLG9CQUFvQixVQUFVLG9CQUFvQjtBQUFBLElBQzNEO0FBQUEsRUFDRixHQUFHLENBQUMsQ0FBQztBQUVMLFNBQU87QUFDVDsiLCJuYW1lcyI6W119