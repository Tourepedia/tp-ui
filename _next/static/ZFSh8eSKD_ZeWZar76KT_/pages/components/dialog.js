(window.webpackJsonp=window.webpackJsonp||[]).push([["c59a"],{M6l4:function(e,n,t){"use strict";t.d(n,"a",function(){return c});var a=t("q1tI"),o=t.n(a),l=t("62q6"),i=t("h7RS");function r(){return o.a.createElement(l.d,{scope:"/components"},o.a.createElement(l.c,null,o.a.createElement(l.b,{href:""},"Getting Started")),o.a.createElement(l.c,null,o.a.createElement(l.a,null,"Components"),o.a.createElement(l.b,{href:"/button"},"Button"),o.a.createElement(l.b,{href:"/badge"},"Badge"),o.a.createElement(l.b,{href:"/input"},"Input"),o.a.createElement(l.b,{href:"/select"},"Select"),o.a.createElement(l.b,{href:"/table"},"Table"),o.a.createElement(l.b,{href:"/paginate"},"Paginate"),o.a.createElement(l.b,{href:"/dialog"},"Dialog")),o.a.createElement(l.c,null,o.a.createElement(l.a,null,"Icons"),o.a.createElement(l.b,{href:"/icons"},"Icons")))}function c(e){var n=e.children,t=e.meta;return o.a.createElement(i.a,{meta:t,sideBar:o.a.createElement(r,null)},n)}},fi7D:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/dialog",function(){var e=t("jDs6");return{page:e.default||e}}])},jDs6:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",function(){return r}),t.d(n,"default",function(){return u});var a=t("kOwS"),o=t("qNsG"),l=(t("q1tI"),t("E/Ix")),i=t("M6l4"),r={title:"Dialog",description:"Dialog component for React built on Tourepedia Design System"},c={meta:r},s=i.a;function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(l.b)(s,Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",null,"Installation"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save @tourepedia/dialog\n")),Object(l.b)("h2",null,"Usage"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import Dialog, { useDialog } from "@tourepedia/dialog"\n\nfunction App () {\n  const [isOpen, open, close] = useDialog(false)\n  return <>\n    <Dialog open={isOpen} onClose={close}>\n      Dialog Content Here\n    </Dialog>\n    <Button onClick={open}>Open</Button>\n  </>\n}\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"live=true",live:"true"}),"function () {\n  const [isOpen, open, close] = useDialog(false)\n  return <div>\n    <Dialog open={isOpen} onClose={close}>\n      <Dialog.Header>\n        <Dialog.Title>Dialog Title</Dialog.Title>\n      </Dialog.Header>\n      <Dialog.Body>\n        <h2>Here is some stuff inside the dialog</h2>\n        <p>Some more stuff</p>\n      </Dialog.Body>\n      <Dialog.Footer>\n        <Button primary onClick={close}>OK! Close Now</Button>\n      </Dialog.Footer>\n    </Dialog>\n    <p>Here is a simple Dialog Component</p>\n    <Button onClick={open}>Open Dialog</Button>\n  </div>\n}\n")))}u.isMDXComponent=!0}},[["fi7D","5d41","9da1"]]]);