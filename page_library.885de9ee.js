!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequired7c6=r),r("6J3A5"),(d=r("4Nugj")).refs.libraryListButtons.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;var t=d.refs.libraryListButtons.querySelector(".is-active");t&&t.classList.remove("is-active");e.target.classList.add("is-active")}));var n=r("FJC5b");r("2e8uc");var o=r("d9uG3"),c=r("h0Lhl");r("6Nu6u");n=r("FJC5b");function s(e){var t=e.title,a=e.poster_path,r=e.release_date,o=e.genre_ids,c=e.id,s=e.vote_average.toFixed(1),d=r;d=d?r.slice(0,4):"No information";var l,i="https://image.tmdb.org/t/p/w500/".concat(a);return null===a&&(i="https://www.bworldonline.com/wp-content/uploads/2022/04/cinema02_14-01.jpg"),l=0===o.length?"No information":(0,n.createStringOfGenresForCard)(o),'\n    <li class="card__container" data-id="'.concat(c,'">\n    <a class="link card-film-link" href="#" aria-label="').concat(t,'">\n    <img class="card__poster" alt=\'poster\' data-id="').concat(c,'" src="').concat(i,'" height="574"  width="395"/>\n    <div class="description-wrapper">\n    <b class="card__film-name">').concat(t,'</b>\n    <p class="card__description">').concat(l,'<span class="film-year">').concat(d,'</span><span class="card__description-rating">').concat(s,"</span>\n    </p>\n    </div>\n    </a>\n    </li>")}var d=r("4Nugj"),l=new(0,r("jcFG7").Pagination);function i(e){d.refs.modalFilmBtnClose.removeEventListener("click",u),d.refs.modalBackdrop.removeEventListener("click",L),document.removeEventListener("keydown",p),d.refs.modalFilmBtnClose.addEventListener("click",m),d.refs.modalBackdrop.addEventListener("click",k),document.addEventListener("keydown",v);var t=c.default.load(o.WATCHED_KEY);t?(l.lastQuery=o.WATCHED_KEY,f(t),g(t)):console.log("wached storage is empty")}function u(){var e=c.default.load(o.QUEUE_KEY);l.calculateTotalPages(e.length),l.page>l.totalPages&&l.decrementPage(),g(e),l.renderMarkup()}function m(){var e=c.default.load(o.WATCHED_KEY);l.calculateTotalPages(e.length),l.page>l.totalPages&&l.decrementPage(),g(e),l.renderMarkup()}function f(e){l.resetPage(),l.calculateFilmsOnPage(),l.calculateTotalPages(e.length),l.renderMarkup()}function g(e){d.refs.filmListRef.innerHTML="";var t=(l.page-1)*l.filmsOnPage,a=t+l.filmsOnPage,r=e.slice(t,a);c.default.remove(o.FILMS),c.default.save(o.FILMS,r),d.refs.filmListRef.innerHTML=r.map(s).join(""),l.renderMarkup()}function v(e){"Escape"===e.code&&m()}function k(e){e.target===d.refs.modalBackdrop&&m()}function p(e){"Escape"===e.code&&u()}function L(e){e.target===d.refs.modalBackdrop&&u()}d.refs.watchedBtn.addEventListener("click",(function(e){return i(e)})),d.refs.queueBtn.addEventListener("click",(function(e){return function(e){d.refs.modalFilmBtnClose.removeEventListener("click",m),d.refs.modalBackdrop.removeEventListener("click",k),document.removeEventListener("keydown",v),d.refs.modalFilmBtnClose.addEventListener("click",u),d.refs.modalBackdrop.addEventListener("click",L),document.addEventListener("keydown",p);var t=c.default.load(o.QUEUE_KEY);t?(l.lastQuery=o.QUEUE_KEY,f(t),g(t)):console.log("wached storage is empty")}()})),d.refs.pagination.addEventListener("click",(function(e){if("UL"===e.target.nodeName)return;"btn__next"===e.target.className&&l.incrementPage();"btn__prev"===e.target.className&&l.decrementPage();if("dots"===e.target.className)return;"num"===e.target.className&&(l.page=Number(e.target.textContent));g(c.default.load(l.lastQuery))})),r("73ES2"),r("aZhHc");var y=r("6Urw1");r("bK1n4");var h=r("8TyPJ"),E=r("3SEMc"),S=r("jhf9f");r("bYz0O");var _=r("h6c0i"),b=(0,y.initializeApp)(h.firebaseConfig),q=(0,E.getAuth)(b);(0,E.onAuthStateChanged)(q,(function(e){e?S.refs.heroLibrary.classList.remove("hidden-tab"):S.refs.userLibrary.addEventListener("click",_.Notify.failure("Sorry, Your are not allowed to perform this action."))}));d=r("4Nugj");var w=r("4Vhfo");function N(){try{"dark"===localStorage.getItem("theme")?(document.querySelector("body").classList.add("dark"),document.querySelector(".hero").classList.add("dark"),document.querySelector(".themetoggle").classList.add("dark"),document.querySelector(".material-icons").classList.add("dark"),document.querySelector("header").classList.add("dark"),document.querySelector(".modal-dark").classList.add("dark"),document.querySelector(".day-nigth-btn-box").classList.add("dark"),document.querySelector(".container-footer").classList.add("dark"),document.querySelector(".card__container").classList.add("dark"),document.querySelector(".modal-film ").classList.add("dark"),document.querySelector(".card-list").classList.add("dark"),document.querySelector(".pagination__list").classList.add("dark")):(document.querySelector("body").classList.remove("dark"),document.querySelector(".hero").classList.remove("dark"),document.querySelector(".themetoggle").classList.remove("dark"),document.querySelector(".material-icons").classList.remove("dark"),document.querySelector("header").classList.remove("dark"),document.querySelector(".modal-dark").classList.remove("dark"),document.querySelector(".day-nigth-btn-box").classList.remove("dark"),document.querySelector(".container-footer").classList.remove("dark"),document.querySelector(".card__container").classList.remove("dark"),document.querySelector(".modal-film ").classList.remove("dark"),document.querySelector(".card-list").classList.remove("dark"),document.querySelector(".pagination__list").classList.remove("dark"))}catch(e){}}r("cbjz0"),r("cbjz0"),document.querySelector(".themetoggle").addEventListener("click",(function(e){e.preventDefault(),"dark"===localStorage.getItem("theme")?localStorage.removeItem("theme"):localStorage.setItem("theme","dark"),N()})),N(),(0,n.saveGenres)(),d.refs.pagination.removeEventListener("click",w.onChangePageClick),i()}();
//# sourceMappingURL=page_library.885de9ee.js.map