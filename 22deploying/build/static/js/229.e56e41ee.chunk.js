"use strict";
(self.webpackChunkreact_temp = self.webpackChunkreact_temp || []).push([
  [229],
  {
    229: function (t, e, r) {
      r.r(e),
        r.d(e, {
          default: function () {
            return i;
          },
          loader: function () {
            return o;
          },
        });
      var n = r(689),
        c = { item: "PostItem_item__8pCZS" },
        s = r(184);
      var a = function (t) {
        var e = t.post;
        return (0, s.jsxs)("article", {
          className: c.item,
          children: [
            (0, s.jsx)("h1", { children: e.title }),
            (0, s.jsx)("p", { children: e.body }),
          ],
        });
      };
      var i = function () {
        var t = (0, n.f_)();
        return (0, s.jsx)(a, { post: t });
      };
      function o(t) {
        var e = t.params.id;
        return fetch("https://jsonplaceholder.typicode.com/posts/" + e);
      }
    },
  },
]);
//# sourceMappingURL=229.e56e41ee.chunk.js.map
