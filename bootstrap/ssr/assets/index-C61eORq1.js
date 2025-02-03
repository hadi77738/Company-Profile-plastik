import { jsxs, jsx } from "react/jsx-runtime";
import { useForm, Head, Link } from "@inertiajs/react";
import { I as Input } from "./input-BfHi4kA4.js";
import { B as Button } from "./button-CjC9Szlf.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuItem, d as DropdownMenuSeparator } from "./dropdown-menu-CF6IcL5L.js";
import { MoreHorizontal } from "lucide-react";
import { A as AdminLayout } from "./AdminLayout-Tf--kNfM.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-dropdown-menu";
import "./separator-CfZpDZ-P.js";
import "@radix-ui/react-separator";
import "./sheet-D96Gr-EJ.js";
import "@radix-ui/react-dialog";
import "@radix-ui/react-visually-hidden";
import "./skeleton-m_7ss9_C.js";
import "@radix-ui/react-tooltip";
import "./breadcrumb-HvNy41ef.js";
import "@radix-ui/react-collapsible";
function Carousel({
  carousels
}) {
  const { delete: destroy } = useForm();
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this data?")) {
      destroy(route("carousels.destroy", id));
    }
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Kategori Artikel" }),
    /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "overflow-hidden bg-white shadow-sm sm:rounded-lg", children: [
      /* @__PURE__ */ jsx("div", { className: "flex px-6 pt-6 justify-end", children: /* @__PURE__ */ jsx(Link, { href: route("carousels.create"), children: /* @__PURE__ */ jsx(Button, { children: "Tambah" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "p-6 flex", children: /* @__PURE__ */ jsx(Input, { placeholder: "Cari...", className: "text-lg" }) }),
      /* @__PURE__ */ jsx("div", { className: "px-6 my-6 space-y-5", children: carousels.length === 0 ? /* @__PURE__ */ jsx("p", { children: "Belum ada data" }) : carousels.map((carousel) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex flex-row gap-4",
          children: [
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
              "img",
              {
                src: `http://127.0.0.1:8000/storage/${carousel.image}`,
                alt: "Img",
                className: "w-44 h-32 object-cover"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col", children: [
              /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold", children: carousel.title }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: carousel.description.length > 100 ? `${carousel.description.slice(
                0,
                100
              )}...` : carousel.description })
            ] }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
              /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", children: /* @__PURE__ */ jsx(MoreHorizontal, {}) }) }),
              /* @__PURE__ */ jsxs(DropdownMenuContent, { className: "w-36 bg-white", children: [
                /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: route(
                      "carousels.edit",
                      carousel.id
                    ),
                    className: "inline-block w-full",
                    children: "Edit"
                  }
                ) }),
                /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
                /* @__PURE__ */ jsx(
                  DropdownMenuItem,
                  {
                    onClick: () => handleDelete(
                      carousel.id
                    ),
                    className: "text-red-500 hover:bg-red-100 hover:text-red-500",
                    children: "Delete"
                  }
                )
              ] })
            ] }) })
          ]
        },
        carousel.id
      )) })
    ] }) }) })
  ] });
}
export {
  Carousel as default
};
