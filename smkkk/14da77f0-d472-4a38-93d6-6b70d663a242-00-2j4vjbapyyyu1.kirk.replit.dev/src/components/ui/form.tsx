import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/form.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f91473b9"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/components/ui/form.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$(), _s4 = $RefreshSig$(), _s5 = $RefreshSig$(), _s6 = $RefreshSig$();
import __vite__cjsImport3_react from "/@fs/home/runner/workspace/node_modules/.vite/deps/react.js?v=f91473b9"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import { Slot } from "/@fs/home/runner/workspace/node_modules/.vite/deps/@radix-ui_react-slot.js?v=114a00ff";
import {
  Controller,
  FormProvider,
  useFormContext
} from "/@fs/home/runner/workspace/node_modules/.vite/deps/react-hook-form.js?v=a6038cab";
import { cn } from "/src/lib/utils.ts";
import { Label } from "/src/components/ui/label.tsx";
const Form = FormProvider;
const FormFieldContext = React.createContext(
  {}
);
const FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsxDEV(FormFieldContext.Provider, { "data-replit-metadata": "client/src/components/ui/form.tsx:36:4", "data-component-name": "FormFieldContext.Provider", value: { name: props.name }, children: /* @__PURE__ */ jsxDEV(Controller, { "data-replit-metadata": "client/src/components/ui/form.tsx:37:6", "data-component-name": "Controller", ...props }, void 0, false, {
    fileName: "/home/runner/workspace/client/src/components/ui/form.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/runner/workspace/client/src/components/ui/form.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
};
_c = FormField;
const useFormField = () => {
  _s();
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
_s(useFormField, "eRzki+X5SldVDcAh3BokmSZW9NU=", false, function() {
  return [useFormContext];
});
const FormItemContext = React.createContext(
  {}
);
const FormItem = _s2(React.forwardRef(_c2 = _s2(
  ({ className, ...props }, ref) => {
    _s2();
    const id = React.useId();
    return /* @__PURE__ */ jsxDEV(FormItemContext.Provider, { "data-replit-metadata": "client/src/components/ui/form.tsx:80:6", "data-component-name": "FormItemContext.Provider", value: { id }, children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/ui/form.tsx:81:6", "data-component-name": "div", ref, className: cn("space-y-2", className), ...props }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/components/ui/form.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/components/ui/form.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this);
  },
  "WhsuKpSQZEWeFcB7gWlfDRQktoQ=",
  false,
  function() {
    return [React.useId];
  }
)), "WhsuKpSQZEWeFcB7gWlfDRQktoQ=", false, function() {
  return [React.useId];
});
_c3 = FormItem;
FormItem.displayName = "FormItem";
const FormLabel = _s3(React.forwardRef(_c4 = _s3(
  ({ className, ...props }, ref) => {
    _s3();
    const { error, formItemId } = useFormField();
    return /* @__PURE__ */ jsxDEV(
      Label,
      {
        "data-replit-metadata": "client/src/components/ui/form.tsx:94:6",
        "data-component-name": "Label",
        ref,
        className: cn(error && "text-destructive", className),
        htmlFor: formItemId,
        ...props
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/client/src/components/ui/form.tsx",
        lineNumber: 94,
        columnNumber: 7
      },
      this
    );
  },
  "Z4R+rKjylfAcqmbRnqWEg1TfTcg=",
  false,
  function() {
    return [useFormField];
  }
)), "Z4R+rKjylfAcqmbRnqWEg1TfTcg=", false, function() {
  return [useFormField];
});
_c5 = FormLabel;
FormLabel.displayName = "FormLabel";
const FormControl = _s4(React.forwardRef(_c6 = _s4(
  ({ ...props }, ref) => {
    _s4();
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return /* @__PURE__ */ jsxDEV(
      Slot,
      {
        "data-replit-metadata": "client/src/components/ui/form.tsx:111:6",
        "data-component-name": "Slot",
        ref,
        id: formItemId,
        "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
        "aria-invalid": !!error,
        ...props
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/client/src/components/ui/form.tsx",
        lineNumber: 111,
        columnNumber: 7
      },
      this
    );
  },
  "mI3rlmONcPPBVtOc6UefMrXAJ6w=",
  false,
  function() {
    return [useFormField];
  }
)), "mI3rlmONcPPBVtOc6UefMrXAJ6w=", false, function() {
  return [useFormField];
});
_c7 = FormControl;
FormControl.displayName = "FormControl";
const FormDescription = _s5(React.forwardRef(_c8 = _s5(
  ({ className, ...props }, ref) => {
    _s5();
    const { formDescriptionId } = useFormField();
    return /* @__PURE__ */ jsxDEV(
      "p",
      {
        "data-replit-metadata": "client/src/components/ui/form.tsx:133:6",
        "data-component-name": "p",
        ref,
        id: formDescriptionId,
        className: cn("text-sm text-muted-foreground", className),
        ...props
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/client/src/components/ui/form.tsx",
        lineNumber: 133,
        columnNumber: 7
      },
      this
    );
  },
  "573aRXA8dloSrMaQM9SdAF4A9NI=",
  false,
  function() {
    return [useFormField];
  }
)), "573aRXA8dloSrMaQM9SdAF4A9NI=", false, function() {
  return [useFormField];
});
_c9 = FormDescription;
FormDescription.displayName = "FormDescription";
const FormMessage = _s6(React.forwardRef(_c10 = _s6(
  ({ className, children, ...props }, ref) => {
    _s6();
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;
    if (!body) {
      return null;
    }
    return /* @__PURE__ */ jsxDEV(
      "p",
      {
        "data-replit-metadata": "client/src/components/ui/form.tsx:155:6",
        "data-component-name": "p",
        ref,
        id: formMessageId,
        className: cn("text-sm font-medium text-destructive", className),
        ...props,
        children: body
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/client/src/components/ui/form.tsx",
        lineNumber: 155,
        columnNumber: 7
      },
      this
    );
  },
  "WONNS8VCMr8LShuUovb8QgOmMVY=",
  false,
  function() {
    return [useFormField];
  }
)), "WONNS8VCMr8LShuUovb8QgOmMVY=", false, function() {
  return [useFormField];
});
_c11 = FormMessage;
FormMessage.displayName = "FormMessage";
export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField
};
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
$RefreshReg$(_c, "FormField");
$RefreshReg$(_c2, "FormItem$React.forwardRef");
$RefreshReg$(_c3, "FormItem");
$RefreshReg$(_c4, "FormLabel$React.forwardRef");
$RefreshReg$(_c5, "FormLabel");
$RefreshReg$(_c6, "FormControl$React.forwardRef");
$RefreshReg$(_c7, "FormControl");
$RefreshReg$(_c8, "FormDescription$React.forwardRef");
$RefreshReg$(_c9, "FormDescription");
$RefreshReg$(_c10, "FormMessage$React.forwardRef");
$RefreshReg$(_c11, "FormMessage");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/ui/form.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/ui/form.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFrQixLQUFBSSxLQUFBSSxLQUFBRSxLQUFBRyxLQUFBQyxLQUFBRyxLQUFBQyxLQUFBRyxNQUFBSztBQUFBQyxhQUFBN0MsSUFBQTtBQUFBNkMsYUFBQTNCLEtBQUE7QUFBQTJCLGFBQUF2QixLQUFBO0FBQUF1QixhQUFBbkIsS0FBQTtBQUFBbUIsYUFBQWpCLEtBQUE7QUFBQWlCLGFBQUFkLEtBQUE7QUFBQWMsYUFBQWIsS0FBQTtBQUFBYSxhQUFBVixLQUFBO0FBQUFVLGFBQUFULEtBQUE7QUFBQVMsYUFBQU4sTUFBQTtBQUFBTSxhQUFBRCxNQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJTbG90IiwiQ29udHJvbGxlciIsIkZvcm1Qcm92aWRlciIsInVzZUZvcm1Db250ZXh0IiwiY24iLCJMYWJlbCIsIkZvcm0iLCJGb3JtRmllbGRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkZvcm1GaWVsZCIsInByb3BzIiwibmFtZSIsIl9jIiwidXNlRm9ybUZpZWxkIiwiX3MiLCJmaWVsZENvbnRleHQiLCJ1c2VDb250ZXh0IiwiaXRlbUNvbnRleHQiLCJGb3JtSXRlbUNvbnRleHQiLCJnZXRGaWVsZFN0YXRlIiwiZm9ybVN0YXRlIiwiZmllbGRTdGF0ZSIsIkVycm9yIiwiaWQiLCJmb3JtSXRlbUlkIiwiZm9ybURlc2NyaXB0aW9uSWQiLCJmb3JtTWVzc2FnZUlkIiwiRm9ybUl0ZW0iLCJfczIiLCJmb3J3YXJkUmVmIiwiX2MyIiwiY2xhc3NOYW1lIiwicmVmIiwidXNlSWQiLCJfYzMiLCJkaXNwbGF5TmFtZSIsIkZvcm1MYWJlbCIsIl9zMyIsIl9jNCIsImVycm9yIiwiX2M1IiwiRm9ybUNvbnRyb2wiLCJfczQiLCJfYzYiLCJfYzciLCJGb3JtRGVzY3JpcHRpb24iLCJfczUiLCJfYzgiLCJfYzkiLCJGb3JtTWVzc2FnZSIsIl9zNiIsIl9jMTAiLCJjaGlsZHJlbiIsImJvZHkiLCJTdHJpbmciLCJtZXNzYWdlIiwiX2MxMSIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJmb3JtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0ICogYXMgTGFiZWxQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1sYWJlbFwiXG5pbXBvcnQgeyBTbG90IH0gZnJvbSBcIkByYWRpeC11aS9yZWFjdC1zbG90XCJcbmltcG9ydCB7XG4gIENvbnRyb2xsZXIsXG4gIENvbnRyb2xsZXJQcm9wcyxcbiAgRmllbGRQYXRoLFxuICBGaWVsZFZhbHVlcyxcbiAgRm9ybVByb3ZpZGVyLFxuICB1c2VGb3JtQ29udGV4dCxcbn0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiXG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9sYWJlbFwiXG5cbmNvbnN0IEZvcm0gPSBGb3JtUHJvdmlkZXJcblxudHlwZSBGb3JtRmllbGRDb250ZXh0VmFsdWU8XG4gIFRGaWVsZFZhbHVlcyBleHRlbmRzIEZpZWxkVmFsdWVzID0gRmllbGRWYWx1ZXMsXG4gIFROYW1lIGV4dGVuZHMgRmllbGRQYXRoPFRGaWVsZFZhbHVlcz4gPSBGaWVsZFBhdGg8VEZpZWxkVmFsdWVzPlxuPiA9IHtcbiAgbmFtZTogVE5hbWVcbn1cblxuY29uc3QgRm9ybUZpZWxkQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8Rm9ybUZpZWxkQ29udGV4dFZhbHVlPihcbiAge30gYXMgRm9ybUZpZWxkQ29udGV4dFZhbHVlXG4pXG5cbmNvbnN0IEZvcm1GaWVsZCA9IDxcbiAgVEZpZWxkVmFsdWVzIGV4dGVuZHMgRmllbGRWYWx1ZXMgPSBGaWVsZFZhbHVlcyxcbiAgVE5hbWUgZXh0ZW5kcyBGaWVsZFBhdGg8VEZpZWxkVmFsdWVzPiA9IEZpZWxkUGF0aDxURmllbGRWYWx1ZXM+XG4+KHtcbiAgLi4ucHJvcHNcbn06IENvbnRyb2xsZXJQcm9wczxURmllbGRWYWx1ZXMsIFROYW1lPikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGb3JtRmllbGRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IG5hbWU6IHByb3BzLm5hbWUgfX0+XG4gICAgICA8Q29udHJvbGxlciB7Li4ucHJvcHN9IC8+XG4gICAgPC9Gb3JtRmllbGRDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmNvbnN0IHVzZUZvcm1GaWVsZCA9ICgpID0+IHtcbiAgY29uc3QgZmllbGRDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChGb3JtRmllbGRDb250ZXh0KVxuICBjb25zdCBpdGVtQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoRm9ybUl0ZW1Db250ZXh0KVxuICBjb25zdCB7IGdldEZpZWxkU3RhdGUsIGZvcm1TdGF0ZSB9ID0gdXNlRm9ybUNvbnRleHQoKVxuXG4gIGNvbnN0IGZpZWxkU3RhdGUgPSBnZXRGaWVsZFN0YXRlKGZpZWxkQ29udGV4dC5uYW1lLCBmb3JtU3RhdGUpXG5cbiAgaWYgKCFmaWVsZENvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VGb3JtRmllbGQgc2hvdWxkIGJlIHVzZWQgd2l0aGluIDxGb3JtRmllbGQ+XCIpXG4gIH1cblxuICBjb25zdCB7IGlkIH0gPSBpdGVtQ29udGV4dFxuXG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgbmFtZTogZmllbGRDb250ZXh0Lm5hbWUsXG4gICAgZm9ybUl0ZW1JZDogYCR7aWR9LWZvcm0taXRlbWAsXG4gICAgZm9ybURlc2NyaXB0aW9uSWQ6IGAke2lkfS1mb3JtLWl0ZW0tZGVzY3JpcHRpb25gLFxuICAgIGZvcm1NZXNzYWdlSWQ6IGAke2lkfS1mb3JtLWl0ZW0tbWVzc2FnZWAsXG4gICAgLi4uZmllbGRTdGF0ZSxcbiAgfVxufVxuXG50eXBlIEZvcm1JdGVtQ29udGV4dFZhbHVlID0ge1xuICBpZDogc3RyaW5nXG59XG5cbmNvbnN0IEZvcm1JdGVtQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8Rm9ybUl0ZW1Db250ZXh0VmFsdWU+KFxuICB7fSBhcyBGb3JtSXRlbUNvbnRleHRWYWx1ZVxuKVxuXG5jb25zdCBGb3JtSXRlbSA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxEaXZFbGVtZW50LFxuICBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcbiAgY29uc3QgaWQgPSBSZWFjdC51c2VJZCgpXG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUl0ZW1Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGlkIH19PlxuICAgICAgPGRpdiByZWY9e3JlZn0gY2xhc3NOYW1lPXtjbihcInNwYWNlLXktMlwiLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9IC8+XG4gICAgPC9Gb3JtSXRlbUNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn0pXG5Gb3JtSXRlbS5kaXNwbGF5TmFtZSA9IFwiRm9ybUl0ZW1cIlxuXG5jb25zdCBGb3JtTGFiZWwgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBMYWJlbFByaW1pdGl2ZS5Sb290PixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBMYWJlbFByaW1pdGl2ZS5Sb290PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4ge1xuICBjb25zdCB7IGVycm9yLCBmb3JtSXRlbUlkIH0gPSB1c2VGb3JtRmllbGQoKVxuXG4gIHJldHVybiAoXG4gICAgPExhYmVsXG4gICAgICByZWY9e3JlZn1cbiAgICAgIGNsYXNzTmFtZT17Y24oZXJyb3IgJiYgXCJ0ZXh0LWRlc3RydWN0aXZlXCIsIGNsYXNzTmFtZSl9XG4gICAgICBodG1sRm9yPXtmb3JtSXRlbUlkfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gIClcbn0pXG5Gb3JtTGFiZWwuZGlzcGxheU5hbWUgPSBcIkZvcm1MYWJlbFwiXG5cbmNvbnN0IEZvcm1Db250cm9sID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgU2xvdD4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgU2xvdD5cbj4oKHsgLi4ucHJvcHMgfSwgcmVmKSA9PiB7XG4gIGNvbnN0IHsgZXJyb3IsIGZvcm1JdGVtSWQsIGZvcm1EZXNjcmlwdGlvbklkLCBmb3JtTWVzc2FnZUlkIH0gPSB1c2VGb3JtRmllbGQoKVxuXG4gIHJldHVybiAoXG4gICAgPFNsb3RcbiAgICAgIHJlZj17cmVmfVxuICAgICAgaWQ9e2Zvcm1JdGVtSWR9XG4gICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtcbiAgICAgICAgIWVycm9yXG4gICAgICAgICAgPyBgJHtmb3JtRGVzY3JpcHRpb25JZH1gXG4gICAgICAgICAgOiBgJHtmb3JtRGVzY3JpcHRpb25JZH0gJHtmb3JtTWVzc2FnZUlkfWBcbiAgICAgIH1cbiAgICAgIGFyaWEtaW52YWxpZD17ISFlcnJvcn1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApXG59KVxuRm9ybUNvbnRyb2wuZGlzcGxheU5hbWUgPSBcIkZvcm1Db250cm9sXCJcblxuY29uc3QgRm9ybURlc2NyaXB0aW9uID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTFBhcmFncmFwaEVsZW1lbnQsXG4gIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxQYXJhZ3JhcGhFbGVtZW50PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4ge1xuICBjb25zdCB7IGZvcm1EZXNjcmlwdGlvbklkIH0gPSB1c2VGb3JtRmllbGQoKVxuXG4gIHJldHVybiAoXG4gICAgPHBcbiAgICAgIHJlZj17cmVmfVxuICAgICAgaWQ9e2Zvcm1EZXNjcmlwdGlvbklkfVxuICAgICAgY2xhc3NOYW1lPXtjbihcInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIsIGNsYXNzTmFtZSl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKVxufSlcbkZvcm1EZXNjcmlwdGlvbi5kaXNwbGF5TmFtZSA9IFwiRm9ybURlc2NyaXB0aW9uXCJcblxuY29uc3QgRm9ybU1lc3NhZ2UgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBIVE1MUGFyYWdyYXBoRWxlbWVudCxcbiAgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTFBhcmFncmFwaEVsZW1lbnQ+XG4+KCh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4ge1xuICBjb25zdCB7IGVycm9yLCBmb3JtTWVzc2FnZUlkIH0gPSB1c2VGb3JtRmllbGQoKVxuICBjb25zdCBib2R5ID0gZXJyb3IgPyBTdHJpbmcoZXJyb3I/Lm1lc3NhZ2UpIDogY2hpbGRyZW5cblxuICBpZiAoIWJvZHkpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8cFxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBpZD17Zm9ybU1lc3NhZ2VJZH1cbiAgICAgIGNsYXNzTmFtZT17Y24oXCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZGVzdHJ1Y3RpdmVcIiwgY2xhc3NOYW1lKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICB7Ym9keX1cbiAgICA8L3A+XG4gIClcbn0pXG5Gb3JtTWVzc2FnZS5kaXNwbGF5TmFtZSA9IFwiRm9ybU1lc3NhZ2VcIlxuXG5leHBvcnQge1xuICB1c2VGb3JtRmllbGQsXG4gIEZvcm0sXG4gIEZvcm1JdGVtLFxuICBGb3JtTGFiZWwsXG4gIEZvcm1Db250cm9sLFxuICBGb3JtRGVzY3JpcHRpb24sXG4gIEZvcm1NZXNzYWdlLFxuICBGb3JtRmllbGQsXG59XG4iXSwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3Jrc3BhY2UvY2xpZW50L3NyYy9jb21wb25lbnRzL3VpL2Zvcm0udHN4In0=