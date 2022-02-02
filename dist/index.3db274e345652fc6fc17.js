"use strict";(self.webpackChunkmybooks=self.webpackChunkmybooks||[]).push([[826,81,593,346,247],{91:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},824:(e,t,o)=>{o.d(t,{p:()=>a,T:()=>c});var r=o(140),n=o(7);const a=(e=s().getLibrary())=>{i(e),l(),d().changeBookStatus()},s=()=>{const e=JSON.parse(localStorage.getItem("myLibrary"))||[],t=()=>localStorage.setItem("myLibrary",JSON.stringify(e));return{getLibrary:()=>e,setLibrary:o=>{e.push(o),t()},removeBook:o=>{e.splice(o,1),t()},changeStatus:(o,r)=>{e[o].status=r,t()}}},c=(e,t,o)=>{s().setLibrary({name:e,author:t,status:o}),a()},i=e=>{const t=e.map((e=>`\n        <li class="books-container__item ${(0,n.K)()}">\n            <div>\n                <h3 class="books-container__title font-400">\n                ${e.name}\n                </h3>\n                <div class="books-container__circle ${d(e).bookClass()}"></div>\n                <p class="books-container__author">\n                    ${e.author}\n                </p>\n            </div>\n\n            <button class="books-container__delete button">\n                <div class="delete-button"></div>\n            </button>\n        </li>\n        `));(0,r.t)().booksContainer.innerHTML=t.join("")},l=()=>{const e=(0,r.t)().bookDelete;Array.from(e).forEach(((e,t)=>{e.addEventListener("click",(()=>{e.parentNode.remove(),s().removeBook(t),a()}))}))},d=e=>({bookClass:()=>e.status?"books-container__green":"books-container__red",changeBookStatus:()=>{const e=(0,r.t)().statusLight;Array.from(e).forEach(((e,t)=>{e.addEventListener("click",(()=>{e.classList.contains("books-container__red")?(s().changeStatus(t,!0),e.classList.remove("books-container__red"),e.classList.add("books-container__green")):(s().changeStatus(t,!1),e.classList.remove("books-container__green"),e.classList.add("books-container__red"))}))}))}})},7:(e,t,o)=>{o.d(t,{K:()=>n,W:()=>s});var r=o(140);const n=()=>{if("enabled"==a().getTheme())return c(),"dark-item"},a=e=>({setTheme:()=>{localStorage.setItem("darkMode",e)},getTheme:()=>localStorage.getItem("darkMode")}),s=()=>{"enabled"!==a().getTheme()?c():i()},c=()=>{l().defaultArray.forEach((e=>{e.classList.add("darkDefault")})),Array.from((0,r.t)().inputs).forEach((e=>{e.classList.add("form-container__input-dark")})),Array.from((0,r.t)().bookItems).forEach((e=>{e.classList.add("dark-item")})),(0,r.t)().moon.style.display="none",(0,r.t)().sun.style.display="block";a("enabled").setTheme()},i=()=>{l().defaultArray.forEach((e=>{e.classList.remove("darkDefault")})),Array.from((0,r.t)().inputs).forEach((e=>{e.classList.remove("form-container__input-dark")})),Array.from((0,r.t)().bookItems).forEach((e=>{e.classList.remove("dark-item")})),(0,r.t)().moon.style.display="block",(0,r.t)().sun.style.display="none";a(null).setTheme()},l=()=>({defaultArray:[(0,r.t)().body,(0,r.t)().themeBtn,(0,r.t)().formContainer,(0,r.t)().formContainerCloseBtn]})},140:(e,t,o)=>{o.d(t,{t:()=>r});const r=()=>({themeBtn:document.querySelector(".theme-button"),moon:document.querySelector(".moon"),sun:document.querySelector(".sun"),mainBtn:document.querySelector(".main__button"),form:document.querySelector(".form"),inputs:document.querySelectorAll(".form-container__input"),body:document.querySelector(".body"),formContainer:document.querySelector(".form-container"),formContainerCloseBtn:document.querySelector(".form-container__close-btn"),themeIcon:document.querySelector(".theme-icon"),filterBtn:document.querySelector(".filter-arrow"),backgroundOpacity:document.querySelector(".background-form"),bookName:document.querySelector(".input-name"),bookAuthor:document.querySelector(".input-author"),bookStatus:document.querySelector(".input-checkbox"),booksContainer:document.querySelector(".books-container"),bookItems:document.querySelectorAll(".books-container__item"),bookDelete:document.querySelectorAll(".books-container__delete"),statusLight:document.querySelectorAll(".books-container .books-container__circle"),filterButton:document.querySelector(".filter-button"),filterOptions:document.querySelector(".filter-options"),defaultOption:document.querySelector(".option-default"),readOption:document.querySelector(".option-read"),notreadOption:document.querySelector(".option-noread")})},603:(e,t,o)=>{o.d(t,{BQ:()=>a,gv:()=>c});var r=o(140),n=o(824);const a=()=>{Array.from((0,r.t)().inputs).forEach((e=>e.value="")),(0,r.t)().backgroundOpacity.classList.add("background-form__active"),(0,r.t)().formContainer.classList.add("form-container__active"),(0,r.t)().backgroundOpacity.addEventListener("click",s),(0,r.t)().formContainerCloseBtn.addEventListener("click",s)},s=()=>{(0,r.t)().backgroundOpacity.classList.remove("background-form__active"),(0,r.t)().formContainer.classList.remove("form-container__active"),(0,r.t)().bookName.classList.remove("input-error"),(0,r.t)().bookAuthor.classList.remove("input-error")},c=e=>{e.preventDefault();const t=(0,r.t)().bookName,o=(0,r.t)().bookAuthor,a=(0,r.t)().bookStatus,c=[t.checkValidity(),o.checkValidity()].some((e=>!e));t.checkValidity()||i(t),o.checkValidity()||i(o),c||((0,n.T)(t.value,o.value,a.checked),s())},i=e=>{if(e.nextElementSibling.dataset.error)return;const t=document.createElement("span");t.innerText="This field cannot be empty",t.classList.add("error-message"),t.dataset.error="invalidInput",e.parentNode.insertBefore(t,e.nextElementSibling),e.classList.add("input-error"),setTimeout((()=>{t.classList.add("error-message-hide")}),1e3),setTimeout((()=>{t.remove()}),2e3)}},529:(e,t,o)=>{var r=o(91),n=o.n(r),a=new URL(o(238),o.b),s=new URL(o(530),o.b);n()(a),n()(s);var c=o(140),i=o(7),l=o(603),d=o(824);document.addEventListener("DOMContentLoaded",(()=>{(0,i.K)(),(0,d.p)(),(0,c.t)().themeBtn.addEventListener("click",i.W),(0,c.t)().mainBtn.addEventListener("click",l.BQ),(0,c.t)().form.addEventListener("submit",l.gv)}))},238:(e,t,o)=>{e.exports=o.p+"e9b6bf140a68ede6e806.svg"},530:(e,t,o)=>{e.exports=o.p+"704ef22a6cba8586862d.svg"}},e=>{var t;t=529,e(e.s=t)}]);