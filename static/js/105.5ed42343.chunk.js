"use strict";(self.webpackChunkbook_store_app=self.webpackChunkbook_store_app||[]).push([[105],{7611:(t,a,_)=>{_.r(a),_.d(a,{default:()=>y});var s=_(2791),c=_(3855),e=_(2049),r=_(7689);const l={cart:"styles_Cart_cart__68lFF",cart__container:"styles_Cart_cart__container__m4G19",cart__buttons:"styles_Cart_cart__buttons__WIs1j",cart__button:"styles_Cart_cart__button__EAiO6",cart__box:"styles_Cart_cart__box__z9fck",cart__value:"styles_Cart_cart__value__Ui7lS",cart__titles:"styles_Cart_cart__titles__sqsmn",cart__block:"styles_Cart_cart__block__hDME+",cart__buttonsBack:"styles_Cart_cart__buttonsBack__ikaxx",cart__totalSum:"styles_Cart_cart__totalSum__ufcxV",cart__totalPrice:"styles_Cart_cart__totalPrice__vRuAN",cart__emptyBlock:"styles_Cart_cart__emptyBlock__EWI3z",cart__empty:"styles_Cart_cart__empty__aVhhv",cart__titles2:"styles_Cart_cart__titles2__6Twf-",cart__pr:"styles_Cart_cart__pr__GV4K+",cart__qua:"styles_Cart_cart__qua__BIUes",img:"styles_Cart_img__USWty",cart__tit:"styles_Cart_cart__tit__4mnha",cart__pri:"styles_Cart_cart__pri__jSD9h",cart__quant:"styles_Cart_cart__quant__gNhaI",cart__totPr:"styles_Cart_cart__totPr__2lDmx"};const o=_.p+"static/media/cart.5a1c3c755c07e59db7d65be6bc8d8bfb.svg",n=_.p+"static/media/bin.68583426fd99d3a76201.png";var i=_(4164);const d="Modal_modal__backdrop__SvbA3",m="Modal_modal__content__QceYQ",u="Modal_gift__VaonD",h="Modal_modal__ok__pJA2H",p=_.p+"static/media/thanks.f01a28824a1307a6ccfd.jpg";var x=_(3329);const C=document.querySelector("#modal-root");function b(t){let{onClose:a}=t;(0,s.useEffect)((()=>{const t=t=>{"Escape"===t.code&&a()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}}),[a]);const _=t=>{t.currentTarget===t.target&&a()};return(0,i.createPortal)((0,x.jsx)("div",{className:d,onClick:_,children:(0,x.jsxs)("div",{className:m,children:[(0,x.jsx)("img",{src:p,alt:"Gift",className:u}),(0,x.jsx)("button",{className:h,onClick:_,children:"Ok"})]})}),C)}const j=t=>{let{goToBack:a,goToHome:_,handleClearCart:c,cart:e,handleRemoveFromCart:r}=t;const i=e.reduce(((t,a)=>t+parseFloat(a.totalPrice)),0).toFixed(2),[d,m]=(0,s.useState)(!1);return(0,x.jsxs)("main",{className:l.cart,children:[(0,x.jsxs)("section",{className:l.cart__container,children:[(0,x.jsxs)("section",{className:l.cart__buttons,children:[(0,x.jsxs)("section",{className:l.cart__buttonsBack,children:[(0,x.jsx)("button",{type:"button",onClick:()=>a(),className:l.cart__button,children:"Back"}),(0,x.jsx)("button",{type:"button",onClick:()=>_(),className:l.cart__button,children:"Home"})]}),(0,x.jsx)("section",{children:(0,x.jsx)("button",{type:"button",onClick:()=>{console.log("Opening modal"),m(!0),c()},className:l.cart__button,disabled:0===e.length,children:"Purchase"})})]}),(0,x.jsxs)("ul",{className:l.cart__box,children:[e.length>0?e.map(((t,a)=>(0,x.jsxs)("li",{className:l.cart__block,children:[(0,x.jsxs)("div",{className:l.cart__titles,children:[(0,x.jsx)("div",{children:"Title"}),(0,x.jsxs)("div",{className:l.cart__titles2,children:[(0,x.jsx)("span",{className:l.cart__pr,children:"Price"}),(0,x.jsx)("span",{className:l.cart__qua,children:"Quantity"}),(0,x.jsx)("span",{className:l.cart__tot,children:"Total"})]})]}),(0,x.jsxs)("div",{className:l.cart__value,children:[(0,x.jsx)("span",{className:l.cart__tit,children:t.title}),(0,x.jsx)("img",{src:n,alt:"Remove",onClick:()=>r(t),className:l.img}),(0,x.jsxs)("span",{className:l.cart__pri,children:["$",t.price]}),(0,x.jsx)("span",{className:l.cart__quant,children:t.quantity}),(0,x.jsxs)("span",{className:l.cart__totPr,children:["$",t.totalPrice]})]}),(0,x.jsx)("div",{className:l.cart__totalPrice,children:(0,x.jsxs)("span",{children:["Total Price: $",t.totalPrice]})})]},a))):(0,x.jsxs)("section",{className:l.cart__emptyBlock,children:[(0,x.jsx)("img",{src:o,alt:"Cart is empty"}),(0,x.jsx)("p",{className:l.cart__empty,children:"Your cart is empty..."})]}),e.length>0&&(0,x.jsx)("div",{className:l.cart__totalSum,children:(0,x.jsxs)("span",{children:["Total Sum: $",i]})})]})]}),d&&(0,x.jsx)(b,{onClose:()=>{console.log("Closing modal"),m(!1)}})]})},y=()=>{const t=(0,c.v9)((t=>t.books.cart))||[],a=(0,c.I0)(),_=(0,r.s0)();return(0,x.jsx)(j,{goToBack:()=>{_(-1)},goToHome:()=>{_("/")},handleClearCart:()=>{a((0,e.LL)())},cart:t,handleRemoveFromCart:t=>{a((0,e.h2)(t))}})}}}]);
//# sourceMappingURL=105.5ed42343.chunk.js.map