(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@font-face {\n  font-family: 'Maven Pro';\n  src: url(\"/assets/fonts/MavenPro-Medium.ttf\") format(\"truetype\"); }\n\nhtml {\n  height: 100%; }\n\nbody {\n  margin: 0;\n  font-family: 'Maven Pro', Verdana, sans-serif;\n  height: 100%; }\n\nmain {\n  z-index: 1;\n  position: relative;\n  height: 118%;\n  width: 70%;\n  top: -9%;\n  left: 15%;\n  color: #fafafa;\n  overflow: scroll; }\n\nmain > h1 {\n    text-align: center; }\n\nnav {\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  position: absolute; }\n\nnav.tlbr {\n    -webkit-transform: rotate(60deg);\n            transform: rotate(60deg); }\n\nnav.trbl {\n    -webkit-transform: rotate(-60deg);\n            transform: rotate(-60deg); }\n\nnav span {\n    pointer-events: none;\n    width: 100%;\n    text-align: center;\n    position: absolute;\n    display: block;\n    height: 100%; }\n\nnav span.pos-l {\n      -webkit-transform: rotate(-90deg);\n              transform: rotate(-90deg);\n      right: 20%; }\n\nnav span.pos-r {\n      -webkit-transform: rotate(90deg);\n              transform: rotate(90deg);\n      left: 20%; }\n\nnav span.pos-tl {\n      -webkit-transform: rotate(-90deg);\n              transform: rotate(-90deg);\n      right: 20%; }\n\nnav span.pos-tr {\n      -webkit-transform: rotate(90deg);\n              transform: rotate(90deg);\n      left: 20%; }\n\nnav span.pos-bl {\n      -webkit-transform: rotate(90deg);\n              transform: rotate(90deg);\n      left: -74%; }\n\nnav span.pos-br {\n      -webkit-transform: rotate(-90deg);\n              transform: rotate(-90deg);\n      right: -74%; }\n\nnav a {\n    pointer-events: all;\n    font-size: 20px; }\n\na.impressum-link,\na.copywrite-link {\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  display: block; }\n\na.copywrite-link {\n  right: auto;\n  left: 10px; }\n\n.view-box-wrapper {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100%; }\n\na {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\na:link, a:visited, a:active, a:hover {\n    text-decoration: none;\n    color: #fff; }\n\na:hover {\n    color: #ddd; }\n\na.dark:link, a.dark:visited, a.dark:active, a.dark:hover {\n    color: #4671D5; }\n\na.dark:link:hover, a.dark:visited:hover, a.dark:active:hover, a.dark:hover:hover {\n      color: #3661C5; }\n\n.brand {\n  position: fixed;\n  top: 5px;\n  left: 5px;\n  z-index: 1000; }\n\n.brand h1 {\n    display: inline-block;\n    margin: 0 0 0 6px;\n    top: 5px;\n    position: absolute;\n    text-shadow: 0px 0px 1px black; }\n\n.cell {\n  position: relative;\n  opacity: 0.4;\n  width: 100%;\n  height: 67.3%;\n  background-color: #000;\n  margin: 14.433% 0;\n  transition: all 500ms linear; }\n\n.cell:before, .cell:after {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: inherit;\n    top: 0;\n    left: 0; }\n\n.cell:before {\n    -webkit-transform: rotate(60deg);\n            transform: rotate(60deg); }\n\n.cell:after {\n    -webkit-transform: rotate(-60deg);\n            transform: rotate(-60deg); }\n\n.cell.active {\n    opacity: 0.95;\n    background-color: #4671d5; }\n\n.cell.logo {\n    background-color: rgba(0, 0, 0, 0.4); }\n\n.odd .cell {\n  margin: 0 -25.5% 0 25.5%; }\n\n.even .cell {\n  margin: 0 25.5% 0 -25.5%; }\n\nmain .content {\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%; }\n\nmain .content.resp-image img {\n    width: 100%; }\n\nmain .content .title, main .content img {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n\n.cell-bg {\n  fill: #FFD073; }\n\n.view-box {\n  position: relative;\n  width: 100%;\n  min-width: 320px;\n  max-width: 800px;\n  margin: 0 4px; }\n\n.view-box > div > div {\n  width: 100%;\n  height: 100%;\n  position: absolute; }\n\n.view-box > div {\n  width: 100%;\n  position: relative;\n  padding-bottom: 100%; }\n\n@media screen and (max-width: 320px) {\n  .cell nav span a {\n    font-size: 10px; }\n  .cell main {\n    font-size: 10px; }\n    .cell main table {\n      font-size: 10px; }\n    .cell main > h1 {\n      font-size: 12px; }\n    .cell main h1 {\n      font-size: 11px; }\n    .cell main h2 {\n      font-size: 10px; }\n    .cell main h3 {\n      font-size: 10px; }\n    .cell main h4 {\n      font-size: 10px; }\n    .cell main .icon:before {\n      -webkit-transform: scale(0.8);\n              transform: scale(0.8); }\n    .cell main .icon.small:before {\n      -webkit-transform: scale(0.48);\n              transform: scale(0.48); } }\n\n@media screen and (min-width: 321px) and (max-width: 800px) {\n  .cell nav span a {\n    font-size: 2.9vw; }\n  .cell nav span.pos-l {\n    right: 21%; }\n  .cell nav span.pos-r {\n    left: 21%; }\n  .cell nav span.pos-tl {\n    right: 21%; }\n  .cell nav span.pos-tr {\n    left: 21%; }\n  .cell nav span.pos-bl {\n    left: -73%; }\n  .cell nav span.pos-br {\n    right: -73%; }\n  .cell main {\n    font-size: 2.9vw; }\n    .cell main table {\n      font-size: 2.9vw; }\n    .cell main > h1 {\n      font-size: 4vw; }\n    .cell main h1 {\n      font-size: 3.6vw; }\n    .cell main h2 {\n      font-size: 3.4vw; }\n    .cell main h3 {\n      font-size: 3.2vw; }\n    .cell main h4 {\n      font-size: 3vw; } }\n\n@media screen and (min-width: 801px) {\n  .cell nav span a {\n    font-size: 20px; }\n  .cell main {\n    font-size: 18px; }\n    .cell main table {\n      font-size: 18px; }\n    .cell main > h1 {\n      font-size: 32px; }\n    .cell main h1 {\n      font-size: 30px; }\n    .cell main h2 {\n      font-size: 28px; }\n    .cell main h3 {\n      font-size: 26px; }\n    .cell main h4 {\n      font-size: 24px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbGVlL3Byb2plY3RzL2xvY2l0eS93ZWJzaXRlL3NyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF3QjtFQUN4QixpRUFBaUUsRUFBQTs7QUFHbkU7RUFDRSxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxVQUFTO0VBQ1QsOENBQTZDO0VBQzdDLGFBQVksRUFDYjs7QUFFRDtFQUNFLFdBQVU7RUFDVixtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLFdBQVU7RUFDVixTQUFRO0VBQ1IsVUFBUztFQUNULGVBQWM7RUFDZCxpQkFBZ0IsRUFJakI7O0FBWkQ7SUFVSSxtQkFBa0IsRUFDbkI7O0FBR0g7RUFDRSxZQUFXO0VBQ1gsYUFBWTtFQUNaLFdBQVU7RUFDVixtQkFBa0IsRUEyQ25COztBQS9DRDtJQU1JLGlDQUF3QjtZQUF4Qix5QkFBd0IsRUFDekI7O0FBUEg7SUFTSSxrQ0FBeUI7WUFBekIsMEJBQXlCLEVBQzFCOztBQVZIO0lBWUkscUJBQW9CO0lBQ3BCLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsbUJBQWtCO0lBQ2xCLGVBQWM7SUFDZCxhQUFZLEVBeUJiOztBQTFDSDtNQW1CTSxrQ0FBeUI7Y0FBekIsMEJBQXlCO01BQ3pCLFdBQVUsRUFDWDs7QUFyQkw7TUF1Qk0saUNBQXdCO2NBQXhCLHlCQUF3QjtNQUN4QixVQUFTLEVBQ1Y7O0FBekJMO01BMkJNLGtDQUF5QjtjQUF6QiwwQkFBeUI7TUFDekIsV0FBVSxFQUNYOztBQTdCTDtNQStCTSxpQ0FBd0I7Y0FBeEIseUJBQXdCO01BQ3hCLFVBQVMsRUFDVjs7QUFqQ0w7TUFtQ00saUNBQXdCO2NBQXhCLHlCQUF3QjtNQUN4QixXQUFVLEVBQ1g7O0FBckNMO01BdUNNLGtDQUF5QjtjQUF6QiwwQkFBeUI7TUFDekIsWUFBVyxFQUNaOztBQXpDTDtJQTRDSSxvQkFBbUI7SUFDbkIsZ0JBQWUsRUFDaEI7O0FBR0g7O0VBRUUsZ0JBQWU7RUFDZixhQUFZO0VBQ1os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LEVBT2hCO0lBZEg7TUFRWSxnQkFBZSxFQUFJO0lBUi9CO01BU1ksZ0JBQWUsRUFBSTtJQVQvQjtNQVVZLGdCQUFlLEVBQUk7SUFWL0I7TUFXWSxnQkFBZSxFQUFJO0lBWC9CO01BWVksZ0JBQWUsRUFBSTtJQVovQjtNQWFZLGdCQUFlLEVBQUksRUFBQSIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdNYXZlbiBQcm8nO1xuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9NYXZlblByby1NZWRpdW0udHRmJykgIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6ICdNYXZlbiBQcm8nLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1haW4ge1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTE4JTtcbiAgd2lkdGg6IDcwJTtcbiAgdG9wOiAtOSU7XG4gIGxlZnQ6IDE1JTtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gID5oMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbm5hdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgJi50bGJyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XG4gIH1cbiAgJi50cmJsIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNjBkZWcpO1xuICB9XG4gIHNwYW4ge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgICYucG9zLWwge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICAgIHJpZ2h0OiAyMCU7XG4gICAgfVxuICAgICYucG9zLXIge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgbGVmdDogMjAlO1xuICAgIH1cbiAgICAmLnBvcy10bCB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgICAgcmlnaHQ6IDIwJTtcbiAgICB9XG4gICAgJi5wb3MtdHIge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgbGVmdDogMjAlO1xuICAgIH1cbiAgICAmLnBvcy1ibCB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICBsZWZ0OiAtNzQlO1xuICAgIH1cbiAgICAmLnBvcy1iciB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgICAgcmlnaHQ6IC03NCU7XG4gICAgfVxuICB9XG4gIGEge1xuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5cbmEuaW1wcmVzc3VtLWxpbmssIFxuYS5jb3B5d3JpdGUtbGluayB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmEuY29weXdyaXRlLWxpbmsge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogMTBweDtcbn1cblxuLnZpZXctYm94LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuYSB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAmOmxpbmssICY6dmlzaXRlZCwgJjphY3RpdmUsICY6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogI2RkZDtcbiAgfVxuICAmLmRhcmsge1xuICAgICY6bGluaywgJjp2aXNpdGVkLCAmOmFjdGl2ZSwgJjpob3ZlciB7XG4gICAgICBjb2xvcjogIzQ2NzFENTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzM2NjFDNTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmJyYW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDVweDtcbiAgbGVmdDogNXB4O1xuICB6LWluZGV4OiAxMDAwO1xuICBoMSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMCAwIDAgNnB4O1xuICAgIHRvcDogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAxKTtcbiAgfVxufVxuXG4uY2VsbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3BhY2l0eTogMC40O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2Ny4zJTtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzY0QzdDQztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgbWFyZ2luOiAxNC40MzMlIDA7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBsaW5lYXI7XG4gICY6YmVmb3JlLCAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgfVxuICAmOmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xuICB9XG4gICY6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC02MGRlZyk7XG4gIH1cbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDAuOTU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NzFkNTtcbiAgfVxuICAmLmJsYW5rIHtcbiAgICAvLyBvcGFjaXR5OiAwLjE7XG4gICAgLy8gb3BhY2l0eTogMTtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICB9XG4gICYubG9nbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB9XG59XG5cbi5vZGQgLmNlbGwge1xuICBtYXJnaW46IDAgLTI1LjUlIDAgMjUuNSU7XG59XG5cbi5ldmVuIC5jZWxsIHtcbiAgbWFyZ2luOiAwIDI1LjUlIDAgLTI1LjUlO1xufVxuXG5tYWluIC5jb250ZW50IHtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAmLnJlc3AtaW1hZ2UgaW1nIHsgd2lkdGg6IDEwMCU7IH1cbiAgLnRpdGxlLCBpbWcgeyB1c2VyLXNlbGVjdDogbm9uZTsgfVxufVxuXG4uY2VsbC1iZyB7XG4gIGZpbGw6ICNGRkQwNzM7XG59XG5cbi52aWV3LWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMzIwcHg7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMCA0cHg7XG59XG5cbi52aWV3LWJveCA+IGRpdiA+IGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnZpZXctYm94ID4gZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XG59XG5cbiRjZWxsX21pbl93aWR0aDogMzIwO1xuJGNlbGxfbWF4X3dpZHRoOiA4MDA7XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRjZWxsX21pbl93aWR0aCArIDBweCkge1xuICAuY2VsbCB7XG4gICAgbmF2IHtcbiAgICAgIHNwYW4gYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWFpbiB7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICB0YWJsZSB7IGZvbnQtc2l6ZTogMTBweDsgfVxuICAgICAgJj5oMSAgeyBmb250LXNpemU6IDEycHg7IH1cbiAgICAgIGgxICAgIHsgZm9udC1zaXplOiAxMXB4OyB9XG4gICAgICBoMiAgICB7IGZvbnQtc2l6ZTogMTBweDsgfVxuICAgICAgaDMgICAgeyBmb250LXNpemU6IDEwcHg7IH1cbiAgICAgIGg0ICAgIHsgZm9udC1zaXplOiAxMHB4OyB9XG4gICAgICAuaWNvbiB7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC44KTtcbiAgICAgICAgfVxuICAgICAgICAmLnNtYWxsIHtcbiAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC40OCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRjZWxsX21pbl93aWR0aCArIDFweCkgYW5kIChtYXgtd2lkdGg6ICRjZWxsX21heF93aWR0aCArIDBweCkge1xuICAuY2VsbCB7XG4gICAgbmF2IHtcbiAgICAgIHNwYW4ge1xuICAgICAgICBhIHtcbiAgICAgICAgICBmb250LXNpemU6IDIuOXZ3O1xuICAgICAgICB9XG4gICAgICAgICYucG9zLWwge1xuICAgICAgICAgIHJpZ2h0OiAyMSU7XG4gICAgICAgIH1cbiAgICAgICAgJi5wb3MtciB7XG4gICAgICAgICAgbGVmdDogMjElO1xuICAgICAgICB9XG4gICAgICAgICYucG9zLXRsIHtcbiAgICAgICAgICByaWdodDogMjElO1xuICAgICAgICB9XG4gICAgICAgICYucG9zLXRyIHtcbiAgICAgICAgICBsZWZ0OiAyMSU7XG4gICAgICAgIH1cbiAgICAgICAgJi5wb3MtYmwge1xuICAgICAgICAgIGxlZnQ6IC03MyU7XG4gICAgICAgIH1cbiAgICAgICAgJi5wb3MtYnIge1xuICAgICAgICAgIHJpZ2h0OiAtNzMlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIG1haW4ge1xuICAgICAgZm9udC1zaXplOiAyLjl2dztcbiAgICAgIHRhYmxlIHsgZm9udC1zaXplOiAyLjl2dzsgfVxuICAgICAgJj5oMSAgeyBmb250LXNpemU6IDR2dzsgfVxuICAgICAgaDEgICAgeyBmb250LXNpemU6IDMuNnZ3OyB9XG4gICAgICBoMiAgICB7IGZvbnQtc2l6ZTogMy40dnc7IH1cbiAgICAgIGgzICAgIHsgZm9udC1zaXplOiAzLjJ2dzsgfVxuICAgICAgaDQgICAgeyBmb250LXNpemU6IDN2dzsgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkY2VsbF9tYXhfd2lkdGggKyAxcHgpIHtcbiAgLmNlbGwge1xuICAgIG5hdiB7XG4gICAgICBzcGFuIGEge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIG1haW4ge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgdGFibGUgeyBmb250LXNpemU6IDE4cHg7IH1cbiAgICAgICY+aDEgIHsgZm9udC1zaXplOiAzMnB4OyB9XG4gICAgICBoMSAgICB7IGZvbnQtc2l6ZTogMzBweDsgfVxuICAgICAgaDIgICAgeyBmb250LXNpemU6IDI4cHg7IH1cbiAgICAgIGgzICAgIHsgZm9udC1zaXplOiAyNnB4OyB9XG4gICAgICBoNCAgICB7IGZvbnQtc2l6ZTogMjRweDsgfVxuICAgIH1cbiAgfVxufVxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/lib??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mlee/projects/locity/website/src/styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map