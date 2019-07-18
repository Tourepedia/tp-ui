(window.webpackJsonp=window.webpackJsonp||[]).push([["4359"],{LqtV:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/select",function(){var e=t("Vl5Z");return{page:e.default||e}}])},M6l4:function(e,n,t){"use strict";t.d(n,"a",function(){return u});var a=t("q1tI"),l=t.n(a),c=t("62q6"),r=t("h7RS");function o(){return l.a.createElement(c.d,{scope:"/components"},l.a.createElement(c.c,null,l.a.createElement(c.b,{href:""},"Getting Started")),l.a.createElement(c.c,null,l.a.createElement(c.a,null,"Components"),l.a.createElement(c.b,{href:"/button"},"Button"),l.a.createElement(c.b,{href:"/badge"},"Badge"),l.a.createElement(c.b,{href:"/input"},"Input"),l.a.createElement(c.b,{href:"/select"},"Select"),l.a.createElement(c.b,{href:"/table"},"Table"),l.a.createElement(c.b,{href:"/paginate"},"Paginate"),l.a.createElement(c.b,{href:"/dialog"},"Dialog")),l.a.createElement(c.c,null,l.a.createElement(c.a,null,"Icons"),l.a.createElement(c.b,{href:"/icons"},"Icons")))}function u(e){var n=e.children,t=e.meta;return l.a.createElement(r.a,{meta:t,sideBar:l.a.createElement(o,null)},n)}},Vl5Z:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",function(){return o}),t.d(n,"default",function(){return i});var a=t("kOwS"),l=t("qNsG"),c=(t("q1tI"),t("E/Ix")),r=t("M6l4"),o={title:"Select",description:"A custom select component that supports searching with multi select"},u={meta:o},s=r.a;function i(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(c.b)(s,Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",null,"Installation"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save @tourepedia/select\n")),Object(c.b)("h2",null,"Usage"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import Select from "@tourepedia/select"\n\nfunction App () {\n  return <Select value={null} options={[{\n    id: 1, name: "Apple"\n  }]} />\n}\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"live=true",live:"true"}),'function () {\n  const fruits = useMemo(() => [\n    { id: 1, name: "Apple" },\n    { id: 2, name: "Orange" },\n    { id: 3, name: "Banana" },\n    { id: 4, name: "Pineapple" },\n    { id: 5, name: "Mango" }\n  ], [])\n  const [value, setValue] = useState(null)\n  const [query, setQuery] = useState("")\n  const [options, changeOptions] = useState(fruits)\n  return <Select\n    label="Select a fruit"\n    value={value}\n    onChange={val => setValue(val)}\n    multiple\n    options={options}\n    query={query}\n    onQuery={(q) => {\n      setQuery(q)\n      changeOptions(fruits.filter(o => (o.name.toLowerCase()).indexOf((q || "").toLowerCase()) !== -1))\n    }}\n    />\n}\n')))}i.isMDXComponent=!0}},[["LqtV","5d41","9da1"]]]);