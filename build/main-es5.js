function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _content_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./content/content.component */
    "./src/app/content/content.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: 'designPatterns',
      children: [{
        path: '**',
        component: _content_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"]
      }]
    }, {
      path: '',
      pathMatch: 'full',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./navigation/navigation.component */
    "./src/app/navigation/navigation.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Refactorings';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["rout-root"]],
      decls: 7,
      vars: 0,
      consts: [[1, "row"], [1, "col-md-3"], [1, "col-md-9"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-column");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rout-navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutColumnComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'rout-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.sass']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/accordion */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/accordion/fesm2015/ngx-bootstrap-accordion.js");
    /* harmony import */


    var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/alert */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/alert/fesm2015/ngx-bootstrap-alert.js");
    /* harmony import */


    var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-bootstrap/buttons */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/buttons/fesm2015/ngx-bootstrap-buttons.js");
    /* harmony import */


    var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/carousel */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
    /* harmony import */


    var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-bootstrap/collapse */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");
    /* harmony import */


    var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-bootstrap/datepicker */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-bootstrap/pagination */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
    /* harmony import */


    var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-bootstrap/popover */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/popover/fesm2015/ngx-bootstrap-popover.js");
    /* harmony import */


    var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-bootstrap/progressbar */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm2015/ngx-bootstrap-progressbar.js");
    /* harmony import */


    var ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ngx-bootstrap/rating */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/rating/fesm2015/ngx-bootstrap-rating.js");
    /* harmony import */


    var ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ngx-bootstrap/sortable */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/sortable/fesm2015/ngx-bootstrap-sortable.js");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ngx-bootstrap/timepicker */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/timepicker/fesm2015/ngx-bootstrap-timepicker.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
    /* harmony import */


    var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ngx-bootstrap/typeahead */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/typeahead/fesm2015/ngx-bootstrap-typeahead.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var ngx_markdown__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ngx-markdown */
    "./node_modules/ngx-markdown/__ivy_ngcc__/fesm2015/ngx-markdown.js");
    /* harmony import */


    var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./navigation/navigation.component */
    "./src/app/navigation/navigation.component.ts");
    /* harmony import */


    var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @nebular/eva-icons */
    "./node_modules/@nebular/eva-icons/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _content_content_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./content/content.component */
    "./src/app/content/content.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_23__["MarkdownModule"].forRoot({
        loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClient"]
      }), ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"].forRoot(), ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__["AlertModule"].forRoot(), ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_7__["ButtonsModule"].forRoot(), ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__["BsDropdownModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["ModalModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginationModule"].forRoot(), ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_14__["PopoverModule"].forRoot(), ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_15__["ProgressbarModule"].forRoot(), ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_16__["RatingModule"].forRoot(), ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_17__["SortableModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_18__["TabsModule"].forRoot(), ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_19__["TimepickerModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_20__["TooltipModule"].forRoot(), ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_21__["TypeaheadModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_22__["NbMenuModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_22__["NbThemeModule"].forRoot({
        name: 'default'
      }), _nebular_theme__WEBPACK_IMPORTED_MODULE_22__["NbLayoutModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_25__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_22__["NbIconModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_24__["NavigationComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_26__["ContentComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_28__["HomeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_23__["MarkdownModule"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__["AlertModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_7__["ButtonsModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__["BsDropdownModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["ModalModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginationModule"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_14__["PopoverModule"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_15__["ProgressbarModule"], ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_16__["RatingModule"], ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_17__["SortableModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_18__["TabsModule"], ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_19__["TimepickerModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_20__["TooltipModule"], ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_21__["TypeaheadModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_22__["NbMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_22__["NbThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_22__["NbLayoutModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_25__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_22__["NbIconModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_24__["NavigationComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_26__["ContentComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_28__["HomeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_23__["MarkdownModule"].forRoot({
            loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClient"]
          }), ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"].forRoot(), ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__["AlertModule"].forRoot(), ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_7__["ButtonsModule"].forRoot(), ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__["BsDropdownModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["ModalModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginationModule"].forRoot(), ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_14__["PopoverModule"].forRoot(), ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_15__["ProgressbarModule"].forRoot(), ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_16__["RatingModule"].forRoot(), ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_17__["SortableModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_18__["TabsModule"].forRoot(), ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_19__["TimepickerModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_20__["TooltipModule"].forRoot(), ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_21__["TypeaheadModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_22__["NbMenuModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_22__["NbThemeModule"].forRoot({
            name: 'default'
          }), _nebular_theme__WEBPACK_IMPORTED_MODULE_22__["NbLayoutModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_25__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_22__["NbIconModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/content/content.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/content/content.component.ts ***!
    \**********************************************/

  /*! exports provided: ContentComponent */

  /***/
  function srcAppContentContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentComponent", function () {
      return ContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-markdown */
    "./node_modules/ngx-markdown/__ivy_ngcc__/fesm2015/ngx-markdown.js");

    var ContentComponent = /*#__PURE__*/function () {
      function ContentComponent(markdownService, router, route) {
        _classCallCheck(this, ContentComponent);

        this.markdownService = markdownService;
        this.router = router;
        this.route = route;
      }

      _createClass(ContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.filePath = "assets".concat(this.router.url, ".md");
          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"];
          })).subscribe(function (event) {
            return _this.filePath = "assets".concat(event.url, ".md");
          });
          this.markdownService.compile('');
        }
      }]);

      return ContentComponent;
    }();

    ContentComponent.ɵfac = function ContentComponent_Factory(t) {
      return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContentComponent,
      selectors: [["rout-content"]],
      decls: 1,
      vars: 1,
      consts: [[3, "src"]],
      template: function ContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "markdown", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.filePath);
        }
      },
      directives: [ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2FzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'rout-content',
          templateUrl: './content.component.html',
          styleUrls: ['./content.component.sass']
        }]
      }], function () {
        return [{
          type: ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["rout-home"]],
      decls: 2,
      vars: 0,
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2FzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'rout-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navigation/navigation.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/navigation/navigation.component.ts ***!
    \****************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var NavigationComponent = /*#__PURE__*/function () {
      function NavigationComponent() {
        _classCallCheck(this, NavigationComponent);

        this.menuItems = [{
          title: 'HOME',
          icon: 'home-outline',
          link: '/',
          home: true
        }, {
          title: 'DESIGN PATTERNS',
          icon: 'folder-outline',
          children: [{
            title: 'Creational',
            icon: 'layers-outline',
            children: [{
              title: 'Abstract Factory',
              icon: 'file-outline',
              link: 'designPatterns/creational/abstractFactory'
            }, {
              title: 'Builder',
              icon: 'file-outline',
              link: 'designPatterns/creational/builder'
            }, {
              title: 'Factory Method',
              icon: 'file-outline',
              link: 'designPatterns/creational/factoryMethod'
            }, {
              title: 'Prototype',
              icon: 'file-outline',
              link: 'designPatterns/creational/prototype'
            }, {
              title: 'Singleton',
              icon: 'file-outline',
              link: 'designPatterns/creational/singleton'
            }]
          }, {
            title: 'Structural',
            icon: 'layers-outline',
            children: [{
              title: 'Adapter',
              icon: 'file-outline',
              link: 'designPatterns/structural/adapter'
            }, {
              title: 'Bridge',
              icon: 'file-outline',
              link: 'designPatterns/structural/bridge'
            }, {
              title: 'Composite',
              icon: 'file-outline',
              link: 'designPatterns/structural/composite'
            }, {
              title: 'Decorator',
              icon: 'file-outline',
              link: 'designPatterns/structural/decorator'
            }, {
              title: 'Facade',
              icon: 'file-outline',
              link: 'designPatterns/structural/facade'
            }, {
              title: 'Flyweight',
              icon: 'file-outline',
              link: 'designPatterns/structural/flyweight'
            }, {
              title: 'Proxy',
              icon: 'file-outline',
              link: 'designPatterns/structural/proxy'
            }]
          }, {
            title: 'Behavioral',
            icon: 'layers-outline',
            children: [{
              title: 'Chain of Responsibility',
              icon: 'file-outline',
              link: 'designPatterns/behavioral/chainOfResponsibility'
            }, {
              title: 'Command',
              icon: 'file-outline',
              link: 'designPatterns/behavioral/command'
            }, {
              title: 'Interpreter',
              icon: 'file-outline',
              link: 'designPatterns/behavioral/interpreter'
            }, {
              title: 'Iterator',
              icon: 'file-outline',
              link: 'designPatterns/behavioral/iterator'
            }, {
              title: 'Mediator',
              icon: 'file-outline',
              link: 'designPatterns/behavioral/mediator'
            }, {
              title: 'Memento',
              icon: 'file-outline',
              link: 'designPatterns/behavioral/memento'
            }, {
              title: 'Observer',
              icon: 'file-outline',
              link: 'designPatterns/behavioral/observer'
            }, {
              title: 'State',
              icon: 'file-outline',
              link: 'designPatterns/behavioral/state'
            }, {
              title: 'Strategy',
              icon: 'file-outline',
              link: 'designPatterns/behavioral/strategy'
            }, {
              title: 'Template Method',
              icon: 'file-outline',
              link: 'designPatterns/behavioral/templateMethod'
            }, {
              title: 'Visitor',
              icon: 'file-outline',
              link: 'designPatterns/behavioral/visitor'
            }]
          }]
        }, {
          title: 'REFACTORINGS',
          icon: 'folder-outline',
          children: [{
            title: 'Composing Methods',
            icon: 'layers-outline',
            children: [{
              title: 'Extract Method',
              icon: 'file-outline'
            }, {
              title: 'Inline Method',
              icon: 'file-outline'
            }, {
              title: 'Inline Temp',
              icon: 'file-outline'
            }, {
              title: 'Replace Temp with Query',
              icon: 'file-outline'
            }, {
              title: 'Introduce Explaining Variable',
              icon: 'file-outline'
            }, {
              title: 'Split Temporary Variable',
              icon: 'file-outline'
            }, {
              title: 'Remove Assignments to Parameters',
              icon: 'file-outline'
            }, {
              title: 'Replace Method with Method Object',
              icon: 'file-outline'
            }, {
              title: 'Substitute Algorithm',
              icon: 'file-outline'
            }]
          }, {
            title: 'Moving Features',
            icon: 'layers-outline',
            children: [{
              title: 'Move Method',
              icon: 'file-outline'
            }, {
              title: 'Move Field',
              icon: 'file-outline'
            }, {
              title: 'Extract Class',
              icon: 'file-outline'
            }, {
              title: 'Inline Class',
              icon: 'file-outline'
            }, {
              title: 'Hide Delegate',
              icon: 'file-outline'
            }, {
              title: 'Remove Middle Man',
              icon: 'file-outline'
            }, {
              title: 'Introduce Foreign Method',
              icon: 'file-outline'
            }, {
              title: 'Introduce Local Extension',
              icon: 'file-outline'
            }]
          }, {
            title: 'Organizing Data',
            icon: 'layers-outline',
            children: [{
              title: 'Self Encapsulate Field',
              icon: 'file-outline'
            }, {
              title: 'replace Data Value with Object',
              icon: 'file-outline'
            }, {
              title: 'Change Value to Reference',
              icon: 'file-outline'
            }, {
              title: 'Change Reference to Value',
              icon: 'file-outline'
            }, {
              title: 'Replace Array with Object',
              icon: 'file-outline'
            }, {
              title: 'Duplicate Observed Data',
              icon: 'file-outline'
            }, {
              title: 'Change Unidirectional Association to Bidirectional',
              icon: 'file-outline'
            }, {
              title: 'Change Bidirectional Association to Unidirectional',
              icon: 'file-outline'
            }, {
              title: 'Replace Magic Number',
              icon: 'file-outline'
            }, {
              title: 'Encapsulate Field',
              icon: 'file-outline'
            }, {
              title: 'Encapsulate Collection',
              icon: 'file-outline'
            }, {
              title: 'Replace Record with Data Class',
              icon: 'file-outline'
            }, {
              title: 'Replace Type Code with Class',
              icon: 'file-outline'
            }, {
              title: 'Replace Type Code with Subclass',
              icon: 'file-outline'
            }, {
              title: 'Replace Type Code with State/Strategy',
              icon: 'file-outline'
            }, {
              title: 'Replace Subclass with Fields',
              icon: 'file-outline'
            }]
          }, {
            title: 'Simplify Conditional',
            icon: 'layers-outline',
            children: [{
              title: 'Decompose Conditional',
              icon: 'file-outline'
            }, {
              title: 'Consolidate Conditional Expression',
              icon: 'file-outline'
            }, {
              title: 'Consolidate Duplicate Conditional Fragments',
              icon: 'file-outline'
            }, {
              title: 'Remove Control Flag',
              icon: 'file-outline'
            }, {
              title: 'Replace Nested Conditional with Guard',
              icon: 'file-outline'
            }, {
              title: 'Replace Conditional with Polymorphism',
              icon: 'file-outline'
            }, {
              title: 'Introduce Null Object',
              icon: 'file-outline'
            }, {
              title: 'Introduce Assertion',
              icon: 'file-outline'
            }]
          }, {
            title: 'Simplify Method Calls',
            icon: 'layers-outline',
            children: [{
              title: 'Rename Method',
              icon: 'file-outline'
            }, {
              title: 'Add Parameter',
              icon: 'file-outline'
            }, {
              title: 'Remove Parameter',
              icon: 'file-outline'
            }, {
              title: 'Separate Query from Modifier',
              icon: 'file-outline'
            }, {
              title: 'Parameterize Method',
              icon: 'file-outline'
            }, {
              title: 'Replace Parameter with Explicit Methods',
              icon: 'file-outline'
            }, {
              title: 'Preserve Whole Object',
              icon: 'file-outline'
            }, {
              title: 'Replace Parameter with Method',
              icon: 'file-outline'
            }, {
              title: 'Introduce Parameter Object',
              icon: 'file-outline'
            }, {
              title: 'Remove Setting Method',
              icon: 'file-outline'
            }, {
              title: 'Hide Method',
              icon: 'file-outline'
            }, {
              title: 'Replace Constructor with Factory Method',
              icon: 'file-outline'
            }, {
              title: 'Encapsulate Downcast',
              icon: 'file-outline'
            }, {
              title: 'Replace Error Code with Exception',
              icon: 'file-outline'
            }, {
              title: 'Replace Exception with Test',
              icon: 'file-outline'
            }]
          }, {
            title: 'Dealing with Generalization',
            icon: 'layers-outline',
            children: [{
              title: 'Pull up field',
              icon: 'file-outline'
            }, {
              title: 'Pull up Method',
              icon: 'file-outline'
            }, {
              title: 'Pull up Constructor Body',
              icon: 'file-outline'
            }, {
              title: 'Pull Down Method',
              icon: 'file-outline'
            }, {
              title: 'Pull Down Field',
              icon: 'file-outline'
            }, {
              title: 'Extract Subclass',
              icon: 'file-outline'
            }, {
              title: 'Extract Superclass',
              icon: 'file-outline'
            }, {
              title: 'Extract Interface',
              icon: 'file-outline'
            }, {
              title: 'Collapse Hierarchy',
              icon: 'file-outline'
            }, {
              title: 'Form Template Method',
              icon: 'file-outline'
            }, {
              title: 'Replace Inheritance with Delegation',
              icon: 'file-outline'
            }, {
              title: 'Replace Delegation with Inheritance',
              icon: 'file-outline'
            }]
          }, {
            title: 'Big Refactorings',
            icon: 'layers-outline',
            children: [{
              title: 'Tease Apart Inheritance',
              icon: 'file-outline'
            }, {
              title: 'Convert Procedural Design to Objects',
              icon: 'file-outline'
            }, {
              title: 'Separate Domain from Presentation',
              icon: 'file-outline'
            }, {
              title: 'Extract Hierarchy',
              icon: 'file-outline'
            }]
          }]
        }, {
          title: 'REFACTORING TO PATTERNS',
          icon: 'folder-outline',
          children: [{
            title: 'Creation',
            icon: 'layers-outline',
            children: [{
              title: 'Replace Constructors with Creation Methods',
              icon: 'file-outline'
            }, {
              title: 'Move Creation Knowledge to Factory',
              icon: 'file-outline'
            }, {
              title: 'Encapsulate Classes with Factory',
              icon: 'file-outline'
            }, {
              title: 'Introduce Polymorphic Creation with Factory Method',
              icon: 'file-outline'
            }, {
              title: 'Encapsulate Composite with Builder',
              icon: 'file-outline'
            }, {
              title: 'Inline Singleton',
              icon: 'file-outline'
            }]
          }, {
            title: 'Simplification',
            icon: 'layers-outline',
            children: [{
              title: 'Compose Method',
              icon: 'file-outline'
            }, {
              title: 'Replace Conditional Logic with Strategy',
              icon: 'file-outline'
            }, {
              title: 'Move Embellishment to Decorator',
              icon: 'file-outline'
            }, {
              title: 'Replace State-Altering Conditionals with State',
              icon: 'file-outline'
            }, {
              title: 'Replace Implicit Tree with Composite',
              icon: 'file-outline'
            }, {
              title: 'Replace Conditional Dispatcher with Command',
              icon: 'file-outline'
            }]
          }, {
            title: 'Generalization',
            icon: 'layers-outline',
            children: [{
              title: 'Form Template Method',
              icon: 'file-outline'
            }, {
              title: 'Extract Composite',
              icon: 'file-outline'
            }, {
              title: 'Replace One/many Distinctions with Composite',
              icon: 'file-outline'
            }, {
              title: 'Replace Hard-Coded Notifications with Observer',
              icon: 'file-outline'
            }, {
              title: 'Unify Interfaces with Adapter',
              icon: 'file-outline'
            }, {
              title: 'Extract Adapter',
              icon: 'file-outline'
            }, {
              title: 'Replace Implicit Language with Interpreter',
              icon: 'file-outline'
            }]
          }, {
            title: 'Protection',
            icon: 'layers-outline',
            children: [{
              title: 'Replace Type Code with Class',
              icon: 'file-outline'
            }, {
              title: 'Limit Instantiation with Singleton',
              icon: 'file-outline'
            }, {
              title: 'Introduce Null Object',
              icon: 'file-outline'
            }]
          }, {
            title: 'Accumulation',
            icon: 'layers-outline',
            children: [{
              title: 'Move Accumulation to Collecting Parameter',
              icon: 'file-outline'
            }, {
              title: 'Move Accumulation to Visitor',
              icon: 'file-outline'
            }]
          }, {
            title: 'Utilities',
            icon: 'layers-outline',
            children: [{
              title: 'Chain Constructors',
              icon: 'file-outline'
            }, {
              title: 'Unify Interfaces',
              icon: 'file-outline'
            }, {
              title: 'Extract Parameter',
              icon: 'file-outline'
            }]
          }]
        }, {
          title: 'ENTERPRISE PATTERNS',
          icon: 'folder-outline',
          children: [{
            title: 'Domain Logic',
            icon: 'layers-outline',
            children: [{
              title: 'Transaction Script',
              icon: 'file-outline'
            }, {
              title: 'Domain Model',
              icon: 'file-outline'
            }, {
              title: 'Table Module',
              icon: 'file-outline'
            }, {
              title: 'Service Layer',
              icon: 'file-outline'
            }]
          }, {
            title: 'Data Source',
            icon: 'layers-outline',
            children: [{
              title: 'Table Data Gateway',
              icon: 'file-outline'
            }, {
              title: 'Row Data Gateway',
              icon: 'file-outline'
            }, {
              title: 'Active Record',
              icon: 'file-outline'
            }, {
              title: 'Data Mapper',
              icon: 'file-outline'
            }]
          }, {
            title: 'Behavioral Object-Relational',
            icon: 'layers-outline',
            children: [{
              title: 'Unit of Work',
              icon: 'file-outline'
            }, {
              title: 'Identity Map',
              icon: 'file-outline'
            }, {
              title: 'Lazy Load',
              icon: 'file-outline'
            }]
          }, {
            title: 'Structural Object-Relational',
            icon: 'layers-outline',
            children: [{
              title: 'Identity Field',
              icon: 'file-outline'
            }, {
              title: 'Foreign Key Mapping',
              icon: 'file-outline'
            }, {
              title: 'Association Table Mapping',
              icon: 'file-outline'
            }, {
              title: 'Dependent Mapping',
              icon: 'file-outline'
            }, {
              title: 'Embedded Value',
              icon: 'file-outline'
            }, {
              title: 'Serialized LOB',
              icon: 'file-outline'
            }, {
              title: 'Single Table Inheritance',
              icon: 'file-outline'
            }, {
              title: 'Class Table Inheritance',
              icon: 'file-outline'
            }, {
              title: 'Concrete Table Inheritance',
              icon: 'file-outline'
            }, {
              title: 'Inheritance Mappers',
              icon: 'file-outline'
            }]
          }, {
            title: 'Metadata Mapping Object-Relational',
            icon: 'layers-outline',
            children: [{
              title: 'Metadata Mapping',
              icon: 'file-outline'
            }, {
              title: 'Query Object',
              icon: 'file-outline'
            }, {
              title: 'Repository',
              icon: 'file-outline'
            }]
          }, {
            title: 'Web Presentation Patterns',
            icon: 'layers-outline',
            children: [{
              title: 'Model View Controller',
              icon: 'file-outline'
            }, {
              title: 'Page Controller',
              icon: 'file-outline'
            }, {
              title: 'Front Controller',
              icon: 'file-outline'
            }, {
              title: 'Template View',
              icon: 'file-outline'
            }, {
              title: 'Transform View',
              icon: 'file-outline'
            }, {
              title: 'Two Step View',
              icon: 'file-outline'
            }, {
              title: 'Application Controller',
              icon: 'file-outline'
            }]
          }, {
            title: 'Distribution',
            icon: 'layers-outline',
            children: [{
              title: 'Remote Facade',
              icon: 'file-outline'
            }, {
              title: 'Data Transfer Object',
              icon: 'file-outline'
            }]
          }, {
            title: 'Offline Concurrency',
            icon: 'layers-outline',
            children: [{
              title: 'Optimistic Offline Lock',
              icon: 'file-outline'
            }, {
              title: 'Pessimistic Offline Lock',
              icon: 'file-outline'
            }, {
              title: 'Coarse-Grained Lock',
              icon: 'file-outline'
            }, {
              title: 'Implicit Lock',
              icon: 'file-outline'
            }]
          }, {
            title: 'Session State Patterns',
            icon: 'layers-outline',
            children: [{
              title: 'Client Session State',
              icon: 'file-outline'
            }, {
              title: 'Server Session State',
              icon: 'file-outline'
            }, {
              title: 'Database Session State',
              icon: 'file-outline'
            }]
          }, {
            title: 'Base Patterns',
            icon: 'layers-outline',
            children: [{
              title: 'Gateway',
              icon: 'file-outline'
            }, {
              title: 'Mapper',
              icon: 'file-outline'
            }, {
              title: 'Layer Supertype',
              icon: 'file-outline'
            }, {
              title: 'Separated Interface',
              icon: 'file-outline'
            }, {
              title: 'Registry',
              icon: 'file-outline'
            }, {
              title: 'Value Object',
              icon: 'file-outline'
            }, {
              title: 'Money',
              icon: 'file-outline'
            }, {
              title: 'Special Case',
              icon: 'file-outline'
            }, {
              title: 'Plugin',
              icon: 'file-outline'
            }, {
              title: 'Service Stub',
              icon: 'file-outline'
            }, {
              title: 'Record Set',
              icon: 'file-outline'
            }]
          }]
        }];
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
      return new (t || NavigationComponent)();
    };

    NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavigationComponent,
      selectors: [["rout-navigation"]],
      decls: 1,
      vars: 1,
      consts: [[3, "items"]],
      template: function NavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-menu", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.menuItems);
        }
      },
      directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2FzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'rout-navigation',
          templateUrl: './navigation.component.html',
          styleUrls: ['./navigation.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/andrei.dana/Source/Angular/refactorings/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map