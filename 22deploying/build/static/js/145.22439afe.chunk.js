"use strict";
(self.webpackChunkreact_temp = self.webpackChunkreact_temp || []).push([
  [145],
  {
    145: function (t, r, e) {
      e.r(r),
        e.d(r, {
          default: function () {
            return o;
          },
          loader: function () {
            return l;
          },
        });
      var n = e(689),
        s = e(87),
        i = { list: "PostList_list__zl9Ee" },
        c = e(184);
      var u = function (t) {
        var r = t.posts;
        return (0, c.jsx)("ul", {
          className: i.list,
          children: r.map(function (t) {
            return (0,
            c.jsx)("li", { children: (0, c.jsx)(s.rU, { to: t.id.toString(), children: t.title }) }, t.id);
          }),
        });
      };
      var o = function () {
        var t = (0, n.f_)();
        return (0, c.jsx)(u, { posts: t });
      };
      function l() {
        return fetch("https://jsonplaceholder.typicode.com/posts");
      }
    },
  },
]);
//# sourceMappingURL=145.22439afe.chunk.js.map
