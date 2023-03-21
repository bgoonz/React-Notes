import classes from "./PageContent.module.css";

function PageContent({ title, children }) {
  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      {children}
      <div style={{ textAlign: "left", width: "50%", margin: "auto" }}>
        <h3 id="what-is-react-router-anyway-">What is React-Router, anyway?</h3>
        <p>
          Many modern websites are actually made up of a single page, they just
          look like multiple pages because they contain components which render
          like separate pages. These are usually referred to as SPAs -
          single-page applications. At its core, what React Router does is
          conditionally render certain components to display depending on the{" "}
          <em>route</em> being used in the URL (<code>/</code> for the home
          page, <code>/about</code> for the about page, etc.).
        </p>
        <p>
          For example, we can use React Router to connect{" "}
          <em>www.knit-with-scrimba.com/</em> to{" "}
          <em>www.knit-with-scrimba.com/about</em> or{" "}
          <em>www.knit-with-scrimba.com/shop</em>
        </p>
        <h3 id="sounds-great-how-do-i-use-it-">
          Sounds great - how do I use it?
        </h3>
        <p>To use React Router, you first have to install it using NPM:</p>
        <pre>
          <code>
            npm <span className="hljs-keyword">install</span> react-router-dom
            {"\n"}
          </code>
        </pre>
        <p>
          Alternatively, you can just use{" "}
          <a href="https://scrimba.com/c/cNq8MzCr">
            this playground in Scrimba
          </a>
          , which has the completed code already written.
        </p>
        <p>
          You'll need to import BrowserRouter, Route, and Switch from{" "}
          <code>react-router-dom</code> package:
        </p>
        <pre>
          <code>
            <span className="hljs-keyword">import</span> React, {"{"} Component{" "}
            {"}"} <span className="hljs-keyword">from</span>{" "}
            <span className="hljs-string">'react'</span>;{"\n"}
            <span className="hljs-keyword">import</span> {"{"} BrowserRouter,
            Route, <span className="hljs-keyword">Switch</span> {"}"}{" "}
            <span className="hljs-keyword">from</span>{" "}
            <span className="hljs-string">'react-router-dom'</span>;{"\n"}
          </code>
        </pre>
        <p>
          In my example, I link the landing page with two other "pages" (which
          are actually just components) called <code>Shop</code> and{" "}
          <code>About</code>.
        </p>
        <p>
          First, you'll need to set up your app to work with React Router.
          Everything that gets rendered will need to go inside the{" "}
          <code>&lt;BrowserRouter&gt;</code> element, so wrap your App in those
          first. It's the component that does all the logic of displaying
          various components that you provide it with.
        </p>
        <pre>
          <code>
            <span className="hljs-comment">// index.js</span>
            {"\n"}ReactDOM.render({"\n"}
            {"    "}
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">BrowserRouter</span>&gt;
              </span>
              {"\n"}
              {"        "}
              <span className="hljs-tag">
                &lt;<span className="hljs-name">App</span> /&gt;
              </span>
              {"\n"}
              {"    "}
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">BrowserRouter</span>&gt;
              </span>
            </span>
            ,{"\n"}
            {"    "}
            <span className="hljs-built_in">document</span>.getElementById(
            <span className="hljs-string">'root'</span>){"\n"}){"\n"}
          </code>
        </pre>
        <p>
          Next, in your App component, add the <code>Switch</code> element (open
          and closing tags). These ensure that only one component is rendered at
          a time. If we don't use this, we can default to the <code>Error</code>{" "}
          component, which we're going to write later.
        </p>
        <pre>
          <code>
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">App</span>(
              <span className="hljs-params" />){" "}
            </span>
            {"{"}
            {"\n"}
            {"    "}
            <span className="hljs-keyword">return</span> ({"\n"}
            {"        "}
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">main</span>&gt;
              </span>
              {"\n"}
              {"            "}
              <span className="hljs-tag">
                &lt;<span className="hljs-name">Switch</span>&gt;
              </span>
              {"\n"}
              {"\n"}
              {"            "}
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">Switch</span>&gt;
              </span>
              {"\n"}
              {"        "}
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">main</span>&gt;
              </span>
            </span>
            {"\n"}
            {"    "}){"\n"}
            {"}"}
            {"\n"}
          </code>
        </pre>
        <p>
          It's now time to add your <code>&lt;Route&gt;</code> tags. These are
          the links between the components and should be placed inside the{" "}
          <code>&lt;Switch&gt;</code> tags.
        </p>
        <p>
          To tell the <code>&lt;Route&gt;</code> tags which component to load,
          simply add a <code>path</code> attribute and the name of the component
          you want to load with <code>component</code> attribute.
        </p>
        <pre>
          <code>
            <span className="hljs-tag">
              &lt;<span className="hljs-name">Route</span>{" "}
              <span className="hljs-attr">path</span>=
              <span className="hljs-string">'/'</span>{" "}
              <span className="hljs-attr">component</span>=
              <span className="hljs-string">
                {"{"}Home{"}"}
              </span>{" "}
              /&gt;
            </span>
            {"\n"}
          </code>
        </pre>
        <p>
          Many homepage URLs are the site name followed by <code>"/"</code>, for
          example, <em>www.knit-with-scrimba.com/</em>. In this case, we add{" "}
          <code>exact</code> to the Route tag. This is because the other URLs
          also contain "/", so if we don't tell the app that it needs to look
          for just <code>/</code>, it loads the first one to match the route,
          and we get a pretty tricky bug to deal with.
        </p>
        <pre>
          <code>
            function App() {"{"}
            {"\n"}
            {"    "}return ({"\n"}
            {"        "}
            <span className="hljs-tag">
              &lt;<span className="hljs-name">main</span>&gt;
            </span>
            {"\n"}
            {"            "}
            <span className="hljs-tag">
              &lt;<span className="hljs-name">Switch</span>&gt;
            </span>
            {"\n"}
            {"                "}
            <span className="hljs-tag">
              &lt;<span className="hljs-name">Route</span>{" "}
              <span className="hljs-attr">path</span>=
              <span className="hljs-string">"/"</span>{" "}
              <span className="hljs-attr">component</span>=
              <span className="hljs-string">
                {"{"}Home{"}"}
              </span>{" "}
              <span className="hljs-attr">exact</span> /&gt;
            </span>
            {"\n"}
            {"                "}
            <span className="hljs-tag">
              &lt;<span className="hljs-name">Route</span>{" "}
              <span className="hljs-attr">path</span>=
              <span className="hljs-string">"/about"</span>{" "}
              <span className="hljs-attr">component</span>=
              <span className="hljs-string">
                {"{"}About{"}"}
              </span>{" "}
              /&gt;
            </span>
            {"\n"}
            {"                "}
            <span className="hljs-tag">
              &lt;<span className="hljs-name">Route</span>{" "}
              <span className="hljs-attr">path</span>=
              <span className="hljs-string">"/shop"</span>{" "}
              <span className="hljs-attr">component</span>=
              <span className="hljs-string">
                {"{"}Shop{"}"}
              </span>{" "}
              /&gt;
            </span>
            {"\n"}
            {"            "}
            <span className="hljs-tag">
              &lt;/<span className="hljs-name">Switch</span>&gt;
            </span>
            {"\n"}
            {"        "}
            <span className="hljs-tag">
              &lt;/<span className="hljs-name">main</span>&gt;
            </span>
            {"\n"}
            {"    "}){"\n"}
            {"}"}
            {"\n"}
          </code>
        </pre>
        <p>
          Now import the components into the app. You may wish to have them in a
          separate "components" folder to keep code clean and readable.
        </p>
        <pre>
          <code>
            <span className="hljs-keyword">import</span> Home{" "}
            <span className="hljs-keyword">from</span>{" "}
            <span className="hljs-string">'./components/Home'</span>;{"\n"}
            <span className="hljs-keyword">import</span> About{" "}
            <span className="hljs-keyword">from</span>{" "}
            <span className="hljs-string">'./components/About'</span>;{"\n"}
            <span className="hljs-keyword">import</span> Shop{" "}
            <span className="hljs-keyword">from</span>{" "}
            <span className="hljs-string">'./components/Shop'</span>;{"\n"}
          </code>
        </pre>
        <p>
          Onto that error message I mentioned earlier, which loads if a user
          types an incorrect URL. This is just like a normal{" "}
          <code>&lt;Route&gt;</code> tag, but with no path. The Error component
          contains <code>&lt;h1&gt;Oops! Page not found!&lt;/h1&gt;</code>.
          Don't forget to import it into the app.
        </p>
        <pre>
          <code>
            function App() {"{"}
            {"\n"}
            {"    "}return ({"\n"}
            {"        "}
            <span className="hljs-tag">
              &lt;<span className="hljs-name">main</span>&gt;
            </span>
            {"\n"}
            {"            "}
            <span className="hljs-tag">
              &lt;<span className="hljs-name">Switch</span>&gt;
            </span>
            {"\n"}
            {"                "}
            <span className="hljs-tag">
              &lt;<span className="hljs-name">Route</span>{" "}
              <span className="hljs-attr">path</span>=
              <span className="hljs-string">"/"</span>{" "}
              <span className="hljs-attr">component</span>=
              <span className="hljs-string">
                {"{"}Home{"}"}
              </span>{" "}
              <span className="hljs-attr">exact</span> /&gt;
            </span>
            {"\n"}
            {"                "}
            <span className="hljs-tag">
              &lt;<span className="hljs-name">Route</span>{" "}
              <span className="hljs-attr">path</span>=
              <span className="hljs-string">"/about"</span>{" "}
              <span className="hljs-attr">component</span>=
              <span className="hljs-string">
                {"{"}About{"}"}
              </span>{" "}
              /&gt;
            </span>
            {"\n"}
            {"                "}
            <span className="hljs-tag">
              &lt;<span className="hljs-name">Route</span>{" "}
              <span className="hljs-attr">path</span>=
              <span className="hljs-string">"/shop"</span>{" "}
              <span className="hljs-attr">component</span>=
              <span className="hljs-string">
                {"{"}Shop{"}"}
              </span>{" "}
              /&gt;
            </span>
            {"\n"}
            {"                "}
            <span className="hljs-tag">
              &lt;<span className="hljs-name">Route</span>{" "}
              <span className="hljs-attr">component</span>=
              <span className="hljs-string">
                {"{"}Error{"}"}
              </span>{" "}
              /&gt;
            </span>
            {"\n"}
            {"            "}
            <span className="hljs-tag">
              &lt;/<span className="hljs-name">Switch</span>&gt;
            </span>
            {"\n"}
            {"        "}
            <span className="hljs-tag">
              &lt;/<span className="hljs-name">main</span>&gt;
            </span>
            {"\n"}
            {"    "}){"\n"}
            {"}"}
            {"\n"}
          </code>
        </pre>
        <p>
          So far, our site is only navigable by typing the URLs. To add
          clickable links to the site, we use the <code>Link</code> element from
          React Router and set up a new <code>Navbar</code> component. Once
          again, don't forget to import the new component into the app.
        </p>
        <p>
          Now add a <code>Link</code> for each component in the app and use{" "}
          <code>to="URL"</code> to link them.
        </p>
        <pre>
          <code>
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">Navbar</span>(
              <span className="hljs-params" />){" "}
            </span>
            {"{"}
            {"\n"}
            {"  "}
            <span className="hljs-keyword">return</span> ({"\n"}
            {"    "}
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">div</span>&gt;
              </span>
              {"\n"}
              {"      "}
              <span className="hljs-tag">
                &lt;<span className="hljs-name">Link</span>{" "}
                <span className="hljs-attr">to</span>=
                <span className="hljs-string">"/"</span>&gt;
              </span>
              Home{" "}
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">Link</span>&gt;
              </span>
              {"\n"}
              {"      "}
              <span className="hljs-tag">
                &lt;<span className="hljs-name">Link</span>{" "}
                <span className="hljs-attr">to</span>=
                <span className="hljs-string">"/about"</span>&gt;
              </span>
              About Us{" "}
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">Link</span>&gt;
              </span>
              {"\n"}
              {"      "}
              <span className="hljs-tag">
                &lt;<span className="hljs-name">Link</span>{" "}
                <span className="hljs-attr">to</span>=
                <span className="hljs-string">"/shop"</span>&gt;
              </span>
              Shop Now{" "}
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">Link</span>&gt;
              </span>
              {"\n"}
              {"    "}
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">div</span>&gt;
              </span>
            </span>
            {"\n"}
            {"  "});{"\n"}
            {"}"};{"\n"}
          </code>
        </pre>
        <p>
          Your site now has clickable links that can navigate you around your
          single-page app!
        </p>
      </div>
    </div>
  );
}

export default PageContent;
