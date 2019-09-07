(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{M6l4:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var a=t("q1tI"),r=t.n(a),c=t("62q6"),o=t("h7RS");function l(){return r.a.createElement(c.d,{scope:"/components"},r.a.createElement(c.c,null,r.a.createElement(c.b,{href:""},"Getting Started")),r.a.createElement(c.c,null,r.a.createElement(c.a,null,"Components"),r.a.createElement(c.b,{href:"/button"},"Button"),r.a.createElement(c.b,{href:"/badge"},"Badge"),r.a.createElement(c.b,{href:"/input"},"Input"),r.a.createElement(c.b,{href:"/select"},"Select"),r.a.createElement(c.b,{href:"/table"},"Table"),r.a.createElement(c.b,{href:"/paginate"},"Paginate"),r.a.createElement(c.b,{href:"/dialog"},"Dialog")),r.a.createElement(c.c,null,r.a.createElement(c.a,null,"Icons"),r.a.createElement(c.b,{href:"/icons"},"Icons")))}function i(e){var n=e.children,t=e.meta;return r.a.createElement(o.a,{meta:t,sideBar:r.a.createElement(l,null)},n)}},dFT5:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/paginate",function(){var e=t("zzA0");return{page:e.default||e}}])},zzA0:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",function(){return l}),t.d(n,"default",function(){return g});var a=t("kOwS"),r=t("qNsG"),c=(t("q1tI"),t("E/Ix")),o=t("M6l4"),l={title:"Paginate",description:"Pagination component",name:"@tourepedia/paginate",usage:'import Paginate from "@tourepedia/paginate"\nfunction App () {\n  return <Paginate\n    from={1}\n    to={10}\n    total={20}\n    currentPage={1}\n    lastPage={2}\n    isFetching={false}\n    onChange={page => {}}\n  />\n}'},i={meta:l},u=o.a;function g(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)(u,Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",null,"Playground"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"live=true",live:"true"}),"function () {\n  const perPage = 10\n  const total = 25\n  const lastPage = Math.ceil(total / perPage)\n  const [isFetching, changeIsFetching] = useState(false)\n  const [current, changeCurrent] = useState({\n    currentPage: 1,\n    from: Math.min(1, total),\n    to: Math.min(perPage, total)\n  })\n  function onPageChange(currentPage) {\n    changeIsFetching(true)\n    setTimeout(() => {\n      const from = Math.min((currentPage - 1 ) * perPage + 1, total)\n      const to = Math.min(from + perPage, total)\n      changeCurrent({\n        currentPage,\n        from,\n        to\n      })\n      changeIsFetching(false)\n    }, 1000)\n  }\n  const { currentPage, from, to} = current\n  return <Paginate\n    lastPage={lastPage}\n    total={total}\n    from={from}\n    to={to}\n    currentPage={currentPage}\n    isFetching={isFetching}\n    onChange={page => {\n      onPageChange(page)\n    }}\n  />\n}\n")))}g.isMDXComponent=!0}},[["dFT5",1,0]]]);