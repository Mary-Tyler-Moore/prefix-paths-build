(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{151:function(e,t,a){"use strict";a(218),a(75),a(35);var n=a(150),s=a.n(n),r=function(e,t){return t=t.replace(/^\//,""),s.a.filter(e,{relativeDir:t})},i=(a(33),a(0)),c=a.n(i),o=a(219),l=a.n(o),m=a(255),p=a.n(m),u=function(e){return e?l()(e,{transform:function(e,t){if("script"===e.type)return console.log(e),s.a.isEmpty(e.children)?c.a.createElement(p.a,Object.assign({key:t},e.attribs)):c.a.createElement(p.a,Object.assign({key:t},e.attribs),s.a.map(e.children,function(e){return Object(o.convertNodeToElement)(e,t,s.a.noop())}))}}):null},g=(a(214),a(299)),d=a.n(g),h=function(e){return e?u(d()(e)):null},b=a(215).withPrefix,E=a(150),f=function(e){return E.startsWith(e,"#")||E.startsWith(e,"http")?e:b(e)},N=(a(301),a(78),a(79)),v=a.n(N),y=a(215),k=function(e){var t=e.children,a=e.to,n=e.activeClassName,s=e.partiallyActive,r=v()(e,["children","to","activeClassName","partiallyActive"]);return/^\/(?!\/)/.test(a)?c.a.createElement(y.Link,Object.assign({to:a,activeClassName:n,partiallyActive:s},r),t):c.a.createElement("a",Object.assign({href:a},r),t)};a.d(t,"b",function(){return r}),a.d(t,"c",function(){return u}),a.d(t,"d",function(){return h}),a.d(t,"e",function(){return f}),a.d(t,"a",function(){return k})},155:function(e,t,a){"use strict";var n=a(7),s=a.n(n),r=a(0),i=a.n(r),c=a(150),o=a.n(c),l=a(151),m=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return i.a.createElement("section",{id:o.a.get(this.props,"section.section_id"),className:"block text-block bg-"+o.a.get(this.props,"section.bg")+" outer"},i.a.createElement("div",{className:"inner"},i.a.createElement("div",{className:"grid"},o.a.get(this.props,"section.image")&&i.a.createElement("div",{className:"cell block-preview"},i.a.createElement("img",{src:Object(l.e)(o.a.get(this.props,"section.image")),alt:o.a.get(this.props,"section.title")})),i.a.createElement("div",{className:"cell block-content"},i.a.createElement("h2",{className:"block-title underline"},o.a.get(this.props,"section.title")),i.a.createElement("div",{className:"block-copy"},Object(l.d)(o.a.get(this.props,"section.content"))),o.a.get(this.props,"section.actions")&&i.a.createElement("p",{className:"block-buttons"},o.a.map(o.a.get(this.props,"section.actions"),function(e,t){return i.a.createElement(l.a,{key:t,to:Object(l.e)(o.a.get(e,"url")),className:"button secondary"},o.a.get(e,"label"))}))))))},t}(i.a.Component),p=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return i.a.createElement("section",{id:o.a.get(this.props,"section.section_id"),className:"block cta-block bg-accent outer"},i.a.createElement("div",{className:"inner-large"},i.a.createElement("div",{className:"grid"},i.a.createElement("div",{className:"cell block-content"},i.a.createElement("h2",{className:"block-title"},o.a.get(this.props,"section.title")),o.a.get(this.props,"section.subtitle")&&i.a.createElement("p",{className:"block-subtitle"},Object(l.c)(o.a.get(this.props,"section.subtitle")))),o.a.get(this.props,"section.actions")&&i.a.createElement("div",{className:"cell block-buttons"},o.a.map(o.a.get(this.props,"section.actions"),function(e,t){return i.a.createElement(l.a,{key:t,to:Object(l.e)(o.a.get(e,"url")),className:"button white large"},o.a.get(e,"label"))})))))},t}(i.a.Component),u=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return i.a.createElement("p",{className:"block-buttons"},o.a.map(o.a.get(this.props,"actions"),function(e,t){return i.a.createElement(l.a,{key:t,to:Object(l.e)(o.a.get(e,"url")),className:"button secondary"},o.a.get(e,"label"))}))},t}(i.a.Component),g=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return i.a.createElement("section",{id:o.a.get(this.props,"section.section_id"),className:"block faq-block bg-"+o.a.get(this.props,"section.bg")+" outer"},i.a.createElement("div",{className:"inner-small"},i.a.createElement("div",{className:"block-header"},i.a.createElement("h2",{className:"block-title"},o.a.get(this.props,"section.title")),o.a.get(this.props,"section.subtitle")&&i.a.createElement("p",{className:"block-subtitle"},Object(l.c)(o.a.get(this.props,"section.subtitle")))),o.a.get(this.props,"section.faqitems")&&i.a.createElement("dl",{className:"faq-accordion"},o.a.map(o.a.get(this.props,"section.faqitems"),function(e,t){return i.a.createElement(i.a.Fragment,{key:t},i.a.createElement("dt",{key:t,className:"accordion-header"},i.a.createElement("button",{className:"accordion-trigger"},i.a.createElement("div",{className:"accordion-title"},o.a.get(e,"question")),i.a.createElement("div",{className:"accordion-icon icon-plus"}))),i.a.createElement("dd",{key:t,className:"accordion-panel"},i.a.createElement("div",{className:"accordion-content"},Object(l.d)(o.a.get(e,"answer")))))}))))},t}(i.a.Component),d=(a(33),function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){var e=this;return i.a.createElement("section",{id:o.a.get(this.props,"section.section_id"),className:"block features-block bg-"+o.a.get(this.props,"section.bg")+" outer"},i.a.createElement("div",{className:"block-header inner-small"},i.a.createElement("h2",{className:"block-title"},o.a.get(this.props,"section.title")),o.a.get(this.props,"section.subtitle")&&i.a.createElement("p",{className:"block-subtitle"},Object(l.c)(o.a.get(this.props,"section.subtitle")))),o.a.get(this.props,"section.featureslist")&&i.a.createElement("div",{className:"inner"},o.a.map(o.a.get(this.props,"section.featureslist"),function(t,a){return i.a.createElement("div",{key:a,className:"block-item"},i.a.createElement("div",{className:"grid"},o.a.get(t,"image")&&i.a.createElement("div",{className:"cell block-preview"},i.a.createElement("img",{src:Object(l.e)(o.a.get(t,"image")),alt:o.a.get(t,"title")})),i.a.createElement("div",{className:"cell block-content"},i.a.createElement("h3",{className:"block-title underline"},o.a.get(t,"title")),i.a.createElement("div",{className:"block-copy"},Object(l.d)(o.a.get(t,"content"))),o.a.get(t,"actions")&&i.a.createElement(u,Object.assign({},e.props,{actions:o.a.get(t,"actions")})))))})))},t}(i.a.Component)),h=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return i.a.createElement("ul",{className:"social-links"},o.a.map(o.a.get(this.props,"pageContext.site.data.social.links"),function(e,t){return i.a.createElement("li",{key:t},i.a.createElement(l.a,{to:o.a.get(e,"url"),target:"_blank",rel:"noopener"},o.a.get(e,"title")))}))},t}(i.a.Component),b=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return i.a.createElement("form",{name:"subscribeForm",method:"POST","netlify-honeypot":"bot-field","data-netlify":"true",id:"subscribe-form",className:"subscribe-form"},i.a.createElement("div",{className:"screen-reader-text"},i.a.createElement("label",null,"Don't fill this out if you're human: ",i.a.createElement("input",{name:"bot-field"}))),i.a.createElement("div",{className:"form-row"},i.a.createElement("label",null,i.a.createElement("span",{className:"screen-reader-text"},"Email address"),i.a.createElement("input",{className:"subscribe-email",type:"email",name:"email",placeholder:"Enter Email Address..."}))),i.a.createElement("input",{type:"hidden",name:"form-name",value:"subscribeForm"}),i.a.createElement("button",{className:"button",type:"submit"},"Subscribe"))},t}(i.a.Component),E=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return i.a.createElement("footer",{id:"colophon",className:"site-footer"},i.a.createElement("div",{className:"footer-top outer"},i.a.createElement("div",{className:"inner"},i.a.createElement("div",{className:"footer-widgets"},i.a.createElement("div",{className:"widget footer-branding"},o.a.get(this.props,"pageContext.site.siteMetadata.footer.logo_img")?i.a.createElement("p",{className:"site-logo"},i.a.createElement(l.a,{to:Object(l.e)("/")},i.a.createElement("img",{src:Object(l.e)(o.a.get(this.props,"pageContext.site.siteMetadata.footer.logo_img")),alt:"Logo"}))):i.a.createElement("p",{className:"site-title"},i.a.createElement(l.a,{to:Object(l.e)("/")},o.a.get(this.props,"pageContext.site.siteMetadata.header.title"))),o.a.get(this.props,"pageContext.site.siteMetadata.footer.tagline")&&i.a.createElement("p",{className:"site-description"},o.a.get(this.props,"pageContext.site.siteMetadata.footer.tagline"))),(o.a.get(this.props,"pageContext.menus.secondary")&&o.a.get(this.props,"pageContext.site.siteMetadata.footer.has_nav")||o.a.get(this.props,"pageContext.site.siteMetadata.footer.has_social"))&&i.a.createElement("nav",{className:"widget footer-navigation"},i.a.createElement("div",{className:"footer-nav-inside"},o.a.get(this.props,"pageContext.menus.secondary")&&o.a.get(this.props,"pageContext.site.siteMetadata.footer.has_nav")&&i.a.createElement("div",{className:"secondary-nav"},i.a.createElement("h2",{className:"widget-title"},o.a.get(this.props,"pageContext.site.siteMetadata.footer.nav_title")),i.a.createElement("ul",{className:"secondary-menu"},o.a.map(o.a.get(this.props,"pageContext.menus.secondary"),function(e,t){return i.a.createElement("li",{key:t},i.a.createElement(l.a,{to:Object(l.e)(o.a.get(e,"url"))},o.a.get(e,"title")))}))),o.a.get(this.props,"pageContext.site.siteMetadata.footer.has_social")&&i.a.createElement("div",{className:"social-nav"},i.a.createElement("h2",{className:"widget-title"},o.a.get(this.props,"pageContext.site.siteMetadata.footer.social_title")),i.a.createElement(h,this.props)))),o.a.get(this.props,"pageContext.site.siteMetadata.footer.has_subscribe")&&i.a.createElement("div",{className:"widget footer-subscribe"},i.a.createElement("h2",{className:"widget-title"},o.a.get(this.props,"pageContext.site.siteMetadata.footer.subscribe_title")),o.a.get(this.props,"pageContext.site.siteMetadata.footer.subscribe_content")&&i.a.createElement("p",null,Object(l.c)(o.a.get(this.props,"pageContext.site.siteMetadata.footer.subscribe_content"))),i.a.createElement(b,this.props))))),i.a.createElement("div",{className:"site-info outer"},i.a.createElement("div",{className:"inner"},Object(l.c)(o.a.get(this.props,"pageContext.site.siteMetadata.footer.content"))," ",o.a.map(o.a.get(this.props,"pageContext.site.siteMetadata.footer.links"),function(e,t){return i.a.createElement(i.a.Fragment,{key:t},i.a.createElement(l.a,Object.assign({key:t,to:o.a.get(e,"url")},o.a.get(e,"new_window")?{target:"_blank",rel:"noopener"}:null),o.a.get(e,"text")),".")}))))},t}(i.a.Component),f=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){var e=this;return i.a.createElement("header",{id:"masthead",className:"site-header outer"},i.a.createElement("div",{className:"inner"},i.a.createElement("div",{className:"site-header-inside"},i.a.createElement("div",{className:"site-branding"},o.a.get(this.props,"pageContext.site.siteMetadata.header.logo_img")&&i.a.createElement("p",{className:"site-logo"},i.a.createElement(l.a,{to:Object(l.e)("/")},i.a.createElement("img",{src:Object(l.e)(o.a.get(this.props,"pageContext.site.siteMetadata.header.logo_img")),alt:"Logo"}))),"home"===o.a.get(this.props,"pageContext.frontmatter.template")||"blog"===o.a.get(this.props,"pageContext.frontmatter.template")?i.a.createElement("h1",{className:"site-title"},i.a.createElement(l.a,{to:Object(l.e)("/")},o.a.get(this.props,"pageContext.site.siteMetadata.header.title"))):i.a.createElement("p",{className:"site-title"},i.a.createElement(l.a,{to:Object(l.e)("/")},o.a.get(this.props,"pageContext.site.siteMetadata.header.title")))),o.a.get(this.props,"pageContext.menus.main")&&o.a.get(this.props,"pageContext.site.siteMetadata.header.has_nav")&&i.a.createElement(i.a.Fragment,null,i.a.createElement("nav",{id:"main-navigation",className:"site-navigation","aria-label":"Main Navigation"},i.a.createElement("div",{className:"site-nav-inside"},i.a.createElement("button",{id:"menu-close",className:"menu-toggle"},i.a.createElement("span",{className:"screen-reader-text"},"Open Menu"),i.a.createElement("span",{className:"icon-close","aria-hidden":"true"})),i.a.createElement("ul",{className:"menu"},o.a.map(o.a.get(this.props,"pageContext.menus.main"),function(t,a){return i.a.createElement("li",{key:a,className:"menu-item "+(o.a.get(e.props,"pageContext.url")===o.a.get(t,"url")?" current-menu-item":"")},i.a.createElement(l.a,{to:Object(l.e)(o.a.get(t,"url"))},o.a.get(t,"title")))}),o.a.get(this.props,"pageContext.site.siteMetadata.header.menu.actions")&&o.a.map(o.a.get(this.props,"pageContext.site.siteMetadata.header.menu.actions"),function(e,t){return i.a.createElement("li",{key:t,className:"menu-item menu-button"},i.a.createElement(l.a,{to:Object(l.e)(o.a.get(e,"url")),className:"button"},o.a.get(e,"label")))})))),i.a.createElement("button",{id:"menu-open",className:"menu-toggle"},i.a.createElement("span",{className:"screen-reader-text"},"Close Menu"),i.a.createElement("span",{className:"icon-menu","aria-hidden":"true"}))))))},t}(i.a.Component),N=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return i.a.createElement("section",{id:o.a.get(this.props,"section.section_id"),className:"block hero-block bg-accent outer"},i.a.createElement("div",{className:"inner"},i.a.createElement("div",{className:"grid"},o.a.get(this.props,"section.image")&&i.a.createElement("div",{className:"cell block-preview"},i.a.createElement("img",{src:Object(l.e)(o.a.get(this.props,"section.image")),alt:o.a.get(this.props,"section.title")})),i.a.createElement("div",{className:"cell block-content"},i.a.createElement("h2",{className:"block-title underline"},o.a.get(this.props,"section.title")),i.a.createElement("div",{className:"block-copy"},Object(l.d)(o.a.get(this.props,"section.content"))),o.a.get(this.props,"section.actions")&&i.a.createElement("p",{className:"block-buttons"},o.a.map(o.a.get(this.props,"section.actions"),function(e,t){return i.a.createElement(l.a,{key:t,to:Object(l.e)(o.a.get(e,"url")),className:"button white large"},o.a.get(e,"label"))}))))))},t}(i.a.Component),v=a(189),y=a.n(v),k=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){var e=o.a.orderBy(Object(l.b)(this.props.pageContext.pages,"/posts"),"frontmatter.date","desc").slice(0,3);return i.a.createElement("section",{id:o.a.get(this.props,"section.section_id"),className:"block posts-block bg-"+o.a.get(this.props,"section.bg")+" outer"},i.a.createElement("div",{className:"block-header inner-small"},i.a.createElement("h2",{className:"block-title"},o.a.get(this.props,"section.title")),o.a.get(this.props,"section.subtitle")&&i.a.createElement("p",{className:"block-subtitle"},Object(l.c)(o.a.get(this.props,"section.subtitle")))),i.a.createElement("div",{className:"inner"},i.a.createElement("div",{className:"post-feed"},o.a.map(e,function(e,t){return i.a.createElement("article",{key:t,className:"post post-card"},i.a.createElement("div",{className:"post-card-inside"},o.a.get(e,"frontmatter.thumb_img_path")&&i.a.createElement(l.a,{className:"post-card-thumbnail",to:Object(l.e)(o.a.get(e,"url"))},i.a.createElement("img",{className:"thumbnail",src:Object(l.e)(o.a.get(e,"frontmatter.thumb_img_path")),alt:o.a.get(e,"frontmatter.title")})),i.a.createElement("div",{className:"post-card-content"},i.a.createElement("header",{className:"post-header"},i.a.createElement("h3",{className:"post-title"},i.a.createElement(l.a,{to:Object(l.e)(o.a.get(e,"url")),rel:"bookmark"},o.a.get(e,"frontmatter.title")))),i.a.createElement("div",{className:"post-excerpt"},i.a.createElement("p",null,o.a.get(e,"frontmatter.excerpt"))),i.a.createElement("footer",{className:"post-meta"},i.a.createElement("time",{className:"published",datetime:y()(o.a.get(e,"frontmatter.date")).strftime("%Y-%m-%d %H:%M")},y()(o.a.get(e,"frontmatter.date")).strftime("%B %d, %Y"))))))}))))},t}(i.a.Component),C=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){var e=this;return i.a.createElement("section",{id:o.a.get(this.props,"section.section_id"),className:"block pricing-block bg-"+o.a.get(this.props,"section.bg")+" outer"},i.a.createElement("div",{className:"block-header inner-small"},i.a.createElement("h2",{className:"block-title"},o.a.get(this.props,"section.title")),o.a.get(this.props,"section.subtitle")&&i.a.createElement("p",{className:"block-subtitle"},Object(l.c)(o.a.get(this.props,"section.subtitle")))),o.a.get(this.props,"section.pricingplans")&&i.a.createElement("div",{className:"inner"},i.a.createElement("div",{className:"grid"},o.a.map(o.a.get(this.props,"section.pricingplans"),function(t,a){return i.a.createElement("div",{key:a,className:"cell plan"+(o.a.get(t,"highlight")?" highlight":"")},i.a.createElement("div",{className:"plan-inside"},i.a.createElement("h3",{className:"plan-name"},o.a.get(t,"title")),o.a.get(t,"price")&&i.a.createElement("div",{className:"plan-price"},o.a.get(t,"price")),i.a.createElement("div",{className:"plan-details"},Object(l.d)(o.a.get(t,"details"))),o.a.get(t,"actions")&&i.a.createElement(u,Object.assign({},e.props,{actions:o.a.get(t,"actions")}))))}))))},t}(i.a.Component),x=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return i.a.createElement("section",{id:o.a.get(this.props,"section.section_id"),className:"block reviews-block bg-"+o.a.get(this.props,"section.bg")+" outer"},i.a.createElement("div",{className:"block-header inner-small"},i.a.createElement("h2",{className:"block-title"},o.a.get(this.props,"section.title")),o.a.get(this.props,"section.subtitle")&&i.a.createElement("p",{className:"block-subtitle"},Object(l.c)(o.a.get(this.props,"section.subtitle")))),o.a.get(this.props,"section.reviews")&&i.a.createElement("div",{className:"inner"},i.a.createElement("div",{className:"grid"},o.a.map(o.a.get(this.props,"section.reviews"),function(e,t){return i.a.createElement("blockquote",{key:t,className:"cell review"},i.a.createElement("div",{className:"review-inside"},i.a.createElement("p",{className:"review-text"},Object(l.c)(o.a.get(e,"content"))),i.a.createElement("footer",{className:"review-footer"},o.a.get(e,"avatar")&&i.a.createElement("img",{className:"review-avatar",src:Object(l.e)(o.a.get(e,"avatar")),alt:"Author avatar"}),i.a.createElement("cite",{className:"review-author"},o.a.get(e,"author")))))}))))},t}(i.a.Component),j=a(303),w=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(j.Helmet,null,i.a.createElement("title",null,o.a.get(this.props,"pageContext.frontmatter.title")&&o.a.get(this.props,"pageContext.frontmatter.title")+" - ",o.a.get(this.props,"pageContext.site.siteMetadata.title")),i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),i.a.createElement("meta",{name:"google",content:"notranslate"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,700i",rel:"stylesheet"}),i.a.createElement("link",{rel:"stylesheet",href:Object(l.e)("assets/css/main.css")}),i.a.createElement("script",{src:"https://identity.netlify.com/v1/netlify-identity-widget.js"})),i.a.createElement("div",{id:"page",className:"site palette-"+o.a.get(this.props,"pageContext.site.siteMetadata.palette")},i.a.createElement(f,this.props),i.a.createElement("main",{id:"content",className:"site-content"},this.props.children),i.a.createElement(E,this.props)))},t}(i.a.Component);a.d(t,"a",function(){return w});t.b={ContentBlock:m,CtaBlock:p,CtaButtons:u,FaqBlock:g,FeaturesBlock:d,Footer:E,Header:f,HeroBlock:N,PostsBlock:k,PricingBlock:C,ReviewsBlock:x,Social:h,SubscribeForm:b,Layout:w}},215:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return d}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return u}),a.d(t,"useStaticQuery",function(){return g});var n=a(0),s=a.n(n),r=a(4),i=a.n(r),c=a(34),o=a.n(c);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"parsePath",function(){return c.parsePath}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(216),m=a.n(l);a.d(t,"PageRenderer",function(){return m.a});var p=s.a.createContext({}),u=function(e){return s.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})},g=function(e){s.a.useContext;var t=s.a.useContext(p);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function d(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},216:function(e,t,a){var n;e.exports=(n=a(300))&&n.default||n},237:function(e,t){},300:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),s=a.n(n),r=a(4),i=a.n(r),c=a(69),o=a(2),l=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return s.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l}}]);
//# sourceMappingURL=1-13fc515e397e14ba2da8.js.map