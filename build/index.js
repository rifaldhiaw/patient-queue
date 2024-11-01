var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 66,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 116,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-WZVYYQJI.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : []
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { className: "bg-gray-50", children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/register.tsx
var register_exports = {};
__export(register_exports, {
  action: () => action,
  default: () => RegisterPage
});
import { json } from "@remix-run/node";
import { Form, useActionData, useNavigate } from "@remix-run/react";
import { PlusCircle } from "lucide-react";
import { useEffect } from "react";

// app/components/FormInput.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function FormInput({ label, error, ...props }) {
  return /* @__PURE__ */ jsxDEV3("div", { children: [
    /* @__PURE__ */ jsxDEV3("label", { htmlFor: props.id, className: "block text-sm font-medium text-gray-700", children: label }, void 0, !1, {
      fileName: "app/components/FormInput.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV3(
      "input",
      {
        ...props,
        className: "h-10 px-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
      },
      void 0,
      !1,
      {
        fileName: "app/components/FormInput.tsx",
        lineNumber: 15,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/FormInput.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    error && /* @__PURE__ */ jsxDEV3("p", { className: "mt-2 text-sm text-red-600", children: error }, void 0, !1, {
      fileName: "app/components/FormInput.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/FormInput.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/components/FormTextarea.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function FormTextarea({ label, error, ...props }) {
  return /* @__PURE__ */ jsxDEV4("div", { children: [
    /* @__PURE__ */ jsxDEV4("label", { htmlFor: props.id, className: "block text-sm font-medium text-gray-700", children: label }, void 0, !1, {
      fileName: "app/components/FormTextarea.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV4(
      "textarea",
      {
        ...props,
        className: "p-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
      },
      void 0,
      !1,
      {
        fileName: "app/components/FormTextarea.tsx",
        lineNumber: 15,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/FormTextarea.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    error && /* @__PURE__ */ jsxDEV4("p", { className: "mt-2 text-sm text-red-600", children: error }, void 0, !1, {
      fileName: "app/components/FormTextarea.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/FormTextarea.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/models/patient.server.ts
var patients = [
  {
    id: "1",
    name: "John Doe",
    age: 35,
    complaint: "Fever and headache",
    queueNumber: 1,
    status: "waiting",
    createdAt: /* @__PURE__ */ new Date()
  },
  {
    id: "2",
    name: "Jane Smith",
    age: 28,
    complaint: "Sore throat",
    queueNumber: 2,
    status: "in-progress",
    createdAt: /* @__PURE__ */ new Date()
  }
];
async function getPatients() {
  return patients;
}
async function addPatient(name, age, complaint) {
  let newPatient = {
    id: String(patients.length + 1),
    name,
    age,
    complaint,
    queueNumber: patients.length + 1,
    status: "waiting",
    createdAt: /* @__PURE__ */ new Date()
  };
  return patients.push(newPatient), newPatient;
}
async function updatePatientStatus(id, status) {
  let patient = patients.find((p) => p.id === id);
  return patient ? (patient.status = status, patient) : null;
}

// app/routes/register.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
async function action({ request }) {
  let formData = await request.formData(), name = formData.get("name"), age = formData.get("age"), complaint = formData.get("complaint");
  if (typeof name != "string" || !name)
    return json({ error: "Name is required" }, { status: 400 });
  if (typeof age != "string" || !age)
    return json({ error: "Age is required" }, { status: 400 });
  let ageNumber = parseInt(age, 10);
  return isNaN(ageNumber) ? json({ error: "Age must be a number" }, { status: 400 }) : typeof complaint != "string" || !complaint ? json({ error: "Complaint is required" }, { status: 400 }) : (await addPatient(name, ageNumber, complaint), json({ success: !0 }));
}
function RegisterPage() {
  let actionData = useActionData(), navigate = useNavigate();
  return useEffect(() => {
    actionData?.success && navigate("/");
  }, [actionData, navigate]), /* @__PURE__ */ jsxDEV5("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV5("div", { className: "bg-white p-8 rounded-lg shadow-lg max-w-md w-full", children: [
    /* @__PURE__ */ jsxDEV5("h1", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Register New Patient" }, void 0, !1, {
      fileName: "app/routes/register.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV5(Form, { method: "post", className: "space-y-6", children: [
      /* @__PURE__ */ jsxDEV5(
        FormInput,
        {
          id: "name",
          name: "name",
          type: "text",
          label: "Patient Name",
          placeholder: "Enter patient name",
          required: !0,
          error: actionData?.error === "Name is required" ? actionData.error : void 0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/register.tsx",
          lineNumber: 52,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV5(
        FormInput,
        {
          id: "age",
          name: "age",
          type: "number",
          label: "Age",
          placeholder: "Enter patient age",
          required: !0,
          min: "0",
          error: actionData?.error === "Age is required" || actionData?.error === "Age must be a number" ? actionData.error : void 0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/register.tsx",
          lineNumber: 62,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV5(
        FormTextarea,
        {
          id: "complaint",
          name: "complaint",
          label: "Chief Complaint",
          placeholder: "Enter patient's chief complaint",
          required: !0,
          rows: 3,
          error: actionData?.error === "Complaint is required" ? actionData.error : void 0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/register.tsx",
          lineNumber: 77,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV5("div", { className: "flex justify-end", children: [
        /* @__PURE__ */ jsxDEV5(
          "button",
          {
            type: "button",
            onClick: () => navigate("/"),
            className: "mr-4 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
            children: "Cancel"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/register.tsx",
            lineNumber: 88,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV5(
          "button",
          {
            type: "submit",
            className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
            children: [
              /* @__PURE__ */ jsxDEV5(PlusCircle, { className: "h-4 w-4 mr-2" }, void 0, !1, {
                fileName: "app/routes/register.tsx",
                lineNumber: 99,
                columnNumber: 15
              }, this),
              "Register Patient"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/register.tsx",
            lineNumber: 95,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/register.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/register.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/register.tsx",
    lineNumber: 48,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/register.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  action: () => action2,
  default: () => Index,
  loader: () => loader
});
import { json as json2 } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { Activity, Users, PlayCircle, CheckCircle } from "lucide-react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
async function loader({ request }) {
  let patients2 = await getPatients(), waitingPatients = patients2.filter((p) => p.status === "waiting"), lastCalledPatient = patients2.find((p) => p.status === "in-progress");
  return json2({
    patients: patients2,
    waitingCount: waitingPatients.length,
    lastCalledNumber: lastCalledPatient?.queueNumber || "-"
  });
}
async function action2({ request }) {
  let formData = await request.formData();
  if (formData.get("intent") === "updateStatus") {
    let id = formData.get("id"), status = formData.get("status");
    return typeof id != "string" || typeof status != "string" ? json2({ error: "Invalid request" }, { status: 400 }) : (await updatePatientStatus(id, status), json2({ success: !0 }));
  }
  return json2({ error: "Invalid request" }, { status: 400 });
}
function Index() {
  let { patients: patients2, waitingCount, lastCalledNumber } = useLoaderData();
  return /* @__PURE__ */ jsxDEV6("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxDEV6("nav", { className: "bg-white shadow-sm", children: /* @__PURE__ */ jsxDEV6("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV6("div", { className: "flex justify-between h-16", children: /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsxDEV6(Activity, { className: "h-8 w-8 text-blue-600" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 44,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV6("span", { className: "ml-2 text-xl font-semibold", children: "ClinicFlow" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 45,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 42,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("main", { className: "max-w-7xl mx-auto py-6 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV6("div", { className: "px-4 py-6 sm:px-0", children: /* @__PURE__ */ jsxDEV6("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxDEV6("div", { className: "grid grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxDEV6("div", { className: "bg-white overflow-hidden shadow rounded-lg", children: /* @__PURE__ */ jsxDEV6("div", { className: "p-5", children: /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxDEV6("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxDEV6(Users, { className: "h-6 w-6 text-gray-400" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 61,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 60,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "ml-5 w-0 flex-1", children: /* @__PURE__ */ jsxDEV6("dl", { children: [
            /* @__PURE__ */ jsxDEV6("dt", { className: "text-sm font-medium text-gray-500 truncate", children: "Waiting Patients" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 65,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV6("dd", { className: "flex items-baseline", children: /* @__PURE__ */ jsxDEV6("div", { className: "text-2xl font-semibold text-gray-900", children: waitingCount }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 69,
              columnNumber: 27
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 68,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 64,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 63,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 59,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 58,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 57,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { className: "bg-white overflow-hidden shadow rounded-lg", children: /* @__PURE__ */ jsxDEV6("div", { className: "p-5", children: /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxDEV6("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxDEV6(PlayCircle, { className: "h-6 w-6 text-blue-500" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 84,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 83,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "ml-5 w-0 flex-1", children: /* @__PURE__ */ jsxDEV6("dl", { children: [
            /* @__PURE__ */ jsxDEV6("dt", { className: "text-sm font-medium text-gray-500 truncate", children: "Last Called Number" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 88,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV6("dd", { className: "flex items-baseline", children: /* @__PURE__ */ jsxDEV6("div", { className: "text-2xl font-semibold text-gray-900", children: lastCalledNumber }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 92,
              columnNumber: 27
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 91,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 87,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 86,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 82,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 81,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 80,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "bg-white overflow-hidden shadow rounded-lg", children: /* @__PURE__ */ jsxDEV6("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxDEV6("h3", { className: "text-lg leading-6 font-medium text-gray-900 mb-4", children: "Patient Registration" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 106,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV6("p", { className: "text-sm text-gray-500 mb-4", children: "Add a new patient to the queue system." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 109,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV6(
          Link,
          {
            to: "/register",
            className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
            children: "Register New Patient"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 112,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 105,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 104,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "bg-white overflow-hidden shadow rounded-lg col-span-full", children: /* @__PURE__ */ jsxDEV6("div", { className: "px-4 py-5 sm:p-6", children: [
        /* @__PURE__ */ jsxDEV6("h3", { className: "text-lg leading-6 font-medium text-gray-900 mb-4", children: "Current Queue" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 124,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { className: "mt-4", children: /* @__PURE__ */ jsxDEV6("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxDEV6("table", { className: "min-w-full divide-y divide-gray-200", children: [
          /* @__PURE__ */ jsxDEV6("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxDEV6("tr", { children: [
            /* @__PURE__ */ jsxDEV6("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Queue #" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 132,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ jsxDEV6("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Patient Name" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 135,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ jsxDEV6("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Age" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 138,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ jsxDEV6("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Complaint" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 141,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ jsxDEV6("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 144,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ jsxDEV6("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 147,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 131,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 130,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV6("tbody", { className: "bg-white divide-y divide-gray-200", children: patients2.map((patient) => /* @__PURE__ */ jsxDEV6("tr", { children: [
            /* @__PURE__ */ jsxDEV6("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900", children: patient.queueNumber }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 155,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV6("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900", children: patient.name }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 158,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV6("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900", children: patient.age }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 161,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV6("td", { className: "px-6 py-4 text-sm text-gray-900 max-w-xs truncate", children: patient.complaint }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 164,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV6("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxDEV6(
              "span",
              {
                className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                ${patient.status === "waiting" ? "bg-yellow-100 text-yellow-800" : patient.status === "in-progress" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"}`,
                children: patient.status
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_index.tsx",
                lineNumber: 168,
                columnNumber: 31
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 167,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV6("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: /* @__PURE__ */ jsxDEV6("div", { className: "flex space-x-2", children: [
              patient.status === "waiting" && /* @__PURE__ */ jsxDEV6("form", { method: "post", className: "inline", children: [
                /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "intent", value: "updateStatus" }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 180,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "id", value: patient.id }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 181,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "status", value: "in-progress" }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 182,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ jsxDEV6(
                  "button",
                  {
                    type: "submit",
                    className: "inline-flex items-center p-1 border border-transparent rounded-full text-blue-600 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                    title: "Start Treatment",
                    children: /* @__PURE__ */ jsxDEV6(PlayCircle, { className: "h-5 w-5" }, void 0, !1, {
                      fileName: "app/routes/_index.tsx",
                      lineNumber: 188,
                      columnNumber: 39
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 183,
                    columnNumber: 37
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 179,
                columnNumber: 35
              }, this),
              patient.status === "in-progress" && /* @__PURE__ */ jsxDEV6("form", { method: "post", className: "inline", children: [
                /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "intent", value: "updateStatus" }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 194,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "id", value: patient.id }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 195,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "status", value: "completed" }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 196,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ jsxDEV6(
                  "button",
                  {
                    type: "submit",
                    className: "inline-flex items-center p-1 border border-transparent rounded-full text-green-600 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",
                    title: "Complete Treatment",
                    children: /* @__PURE__ */ jsxDEV6(CheckCircle, { className: "h-5 w-5" }, void 0, !1, {
                      fileName: "app/routes/_index.tsx",
                      lineNumber: 202,
                      columnNumber: 39
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 197,
                    columnNumber: 37
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 193,
                columnNumber: 35
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 177,
              columnNumber: 31
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 176,
              columnNumber: 29
            }, this)
          ] }, patient.id, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 154,
            columnNumber: 27
          }, this)) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 152,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 129,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 128,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 127,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 123,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 122,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 53,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action3,
  default: () => LoginPage
});
import { json as json3 } from "@remix-run/node";
import { Form as Form2, useActionData as useActionData2 } from "@remix-run/react";
import { Activity as Activity2 } from "lucide-react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
async function action3({ request }) {
  let formData = await request.formData(), username = formData.get("username"), password = formData.get("password");
  return username === "admin" && password === "admin" ? json3({ success: !0 }) : json3(
    { error: "Invalid username or password" },
    { status: 401 }
  );
}
function LoginPage() {
  let actionData = useActionData2();
  return /* @__PURE__ */ jsxDEV7("div", { className: "min-h-screen bg-gray-50 flex flex-col justify-center", children: [
    /* @__PURE__ */ jsxDEV7("div", { className: "sm:mx-auto sm:w-full sm:max-w-md", children: [
      /* @__PURE__ */ jsxDEV7("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxDEV7(Activity2, { className: "h-12 w-12 text-blue-600" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7("h2", { className: "mt-6 text-center text-3xl font-extrabold text-gray-900", children: "ClinicFlow" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7("p", { className: "mt-2 text-center text-sm text-gray-600", children: "Queue Management System" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md", children: /* @__PURE__ */ jsxDEV7("div", { className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10", children: /* @__PURE__ */ jsxDEV7(Form2, { method: "post", className: "space-y-6", children: [
      actionData?.error && /* @__PURE__ */ jsxDEV7("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ jsxDEV7("div", { className: "flex", children: /* @__PURE__ */ jsxDEV7("div", { className: "text-sm text-red-700", children: actionData.error }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 44,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 42,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV7("div", { children: [
        /* @__PURE__ */ jsxDEV7(
          "label",
          {
            htmlFor: "username",
            className: "block text-sm font-medium text-gray-700",
            children: "Username"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 52,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV7("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV7(
          "input",
          {
            id: "username",
            name: "username",
            type: "text",
            autoComplete: "username",
            required: !0,
            className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 59,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 58,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV7("div", { children: [
        /* @__PURE__ */ jsxDEV7(
          "label",
          {
            htmlFor: "password",
            className: "block text-sm font-medium text-gray-700",
            children: "Password"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 71,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV7("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV7(
          "input",
          {
            id: "password",
            name: "password",
            type: "password",
            autoComplete: "current-password",
            required: !0,
            className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 78,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 77,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 70,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV7("div", { children: /* @__PURE__ */ jsxDEV7(
        "button",
        {
          type: "submit",
          className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
          children: "Sign in"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 90,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 40,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-7WBLAGFZ.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-AWWRXQQ5.js", "/build/_shared/chunk-HROVJQA4.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-HLTBESNW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-YEF7RX32.js", imports: ["/build/_shared/chunk-7B3CUU5R.js", "/build/_shared/chunk-ZZQWGIJC.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-XMDCKPEP.js", imports: ["/build/_shared/chunk-ZZQWGIJC.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/register": { id: "routes/register", parentId: "root", path: "register", index: void 0, caseSensitive: void 0, module: "/build/routes/register-P7F23DUX.js", imports: ["/build/_shared/chunk-7B3CUU5R.js", "/build/_shared/chunk-ZZQWGIJC.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "37e1af25", hmr: { runtime: "/build/_shared/chunk-HROVJQA4.js", timestamp: 1730435763609 }, url: "/build/manifest-37E1AF25.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/register": {
    id: "routes/register",
    parentId: "root",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
