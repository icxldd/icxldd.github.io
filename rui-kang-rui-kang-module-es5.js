function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rui-kang-rui-kang-module"], {
  /***/
  "./src/app/rui-kang/components/app/app.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/rui-kang/components/app/app.component.ts ***!
    \**********************************************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppRuiKangComponentsAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(titleService) {
        _classCallCheck(this, AppComponent);

        this.titleService = titleService;
        titleService.setTitle("EWMS APP");
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-app"]],
      decls: 11,
      vars: 0,
      consts: [[1, "center"], ["src", "../../../../assets/images/\u745E\u5EB7\u7269\u6D41/\u7269\u6D41\u7BA1\u7406\u7CFB\u7EDF/APP/1.jpg"], ["src", "../../../../assets/images/\u745E\u5EB7\u7269\u6D41/\u7269\u6D41\u7BA1\u7406\u7CFB\u7EDF/APP/2.jpg"], ["src", "../../../../assets/images/\u745E\u5EB7\u7269\u6D41/\u7269\u6D41\u7BA1\u7406\u7CFB\u7EDF/APP/6.jpg"], ["src", "../../../../assets/images/\u745E\u5EB7\u7269\u6D41/\u7269\u6D41\u7BA1\u7406\u7CFB\u7EDF/APP/9.jpg"], ["src", "../../../../assets/images/\u745E\u5EB7\u7269\u6D41/\u7269\u6D41\u7BA1\u7406\u7CFB\u7EDF/APP/10.jpg"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3J1aS1rYW5nL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-app',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/rui-kang/components/cs/cs.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/rui-kang/components/cs/cs.component.ts ***!
    \********************************************************/

  /*! exports provided: CsComponent */

  /***/
  function srcAppRuiKangComponentsCsCsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CsComponent", function () {
      return CsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var CsComponent =
    /*#__PURE__*/
    function () {
      function CsComponent(titleService) {
        _classCallCheck(this, CsComponent);

        this.titleService = titleService;
        titleService.setTitle("EWMS C/S");
      }

      _createClass(CsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CsComponent;
    }();

    CsComponent.ɵfac = function CsComponent_Factory(t) {
      return new (t || CsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]));
    };

    CsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CsComponent,
      selectors: [["app-cs"]],
      decls: 12,
      vars: 0,
      consts: [[1, "center"], ["src", "../../../../assets/images/\u745E\u5EB7\u7269\u6D41/\u7269\u6D41\u7BA1\u7406\u7CFB\u7EDF/CS/2.png"], ["src", "../../../../assets/images/\u745E\u5EB7\u7269\u6D41/\u7269\u6D41\u7BA1\u7406\u7CFB\u7EDF/CS/3.png"], ["src", "../../../../assets/images/\u745E\u5EB7\u7269\u6D41/\u7269\u6D41\u7BA1\u7406\u7CFB\u7EDF/CS/4.png"], ["src", "../../../../assets/images/\u745E\u5EB7\u7269\u6D41/\u7269\u6D41\u7BA1\u7406\u7CFB\u7EDF/CS/5.png"]],
      template: function CsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "> ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "> ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ">\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3J1aS1rYW5nL2NvbXBvbmVudHMvY3MvY3MuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cs',
          templateUrl: './cs.component.html',
          styleUrls: ['./cs.component.css']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/rui-kang/components/web/web.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/rui-kang/components/web/web.component.ts ***!
    \**********************************************************/

  /*! exports provided: WebComponent */

  /***/
  function srcAppRuiKangComponentsWebWebComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebComponent", function () {
      return WebComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var WebComponent =
    /*#__PURE__*/
    function () {
      function WebComponent(titleService) {
        _classCallCheck(this, WebComponent);

        this.titleService = titleService;
        titleService.setTitle("EWMS WEB");
      }

      _createClass(WebComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WebComponent;
    }();

    WebComponent.ɵfac = function WebComponent_Factory(t) {
      return new (t || WebComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]));
    };

    WebComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WebComponent,
      selectors: [["app-web"]],
      decls: 19,
      vars: 0,
      consts: [[1, "center"], ["src", "../../../../assets/images/\u745E\u5EB7\u7269\u6D41/\u7269\u6D41\u7BA1\u7406\u7CFB\u7EDF/WEB/1.jpg"], ["src", "../../../../assets/images/\u745E\u5EB7\u7269\u6D41/\u7269\u6D41\u7BA1\u7406\u7CFB\u7EDF/WEB/2.jpg"], ["src", "../../../../assets/images/\u745E\u5EB7\u7269\u6D41/\u7269\u6D41\u7BA1\u7406\u7CFB\u7EDF/WEB/3.jpg"], ["src", "../../../../assets/images/\u745E\u5EB7\u7269\u6D41/\u7269\u6D41\u7BA1\u7406\u7CFB\u7EDF/WEB/4.jpg"], ["src", "../../../../assets/images/\u745E\u5EB7\u7269\u6D41/\u7269\u6D41\u7BA1\u7406\u7CFB\u7EDF/WEB/4_2.jpg"], ["src", "../../../../assets/images/\u745E\u5EB7\u7269\u6D41/\u7269\u6D41\u7BA1\u7406\u7CFB\u7EDF/WEB/4_3.jpg"], ["src", "../../../../assets/images/\u745E\u5EB7\u7269\u6D41/\u7269\u6D41\u7BA1\u7406\u7CFB\u7EDF/WEB/4_4.jpg"], ["src", "../../../../assets/images/\u745E\u5EB7\u7269\u6D41/\u7269\u6D41\u7BA1\u7406\u7CFB\u7EDF/WEB/4_5.jpg"], ["src", "../../../../assets/images/\u745E\u5EB7\u7269\u6D41/\u7269\u6D41\u7BA1\u7406\u7CFB\u7EDF/WEB/4_6.jpg"]],
      template: function WebComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3J1aS1rYW5nL2NvbXBvbmVudHMvd2ViL3dlYi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-web',
          templateUrl: './web.component.html',
          styleUrls: ['./web.component.css']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/rui-kang/rui-kang.component.ts":
  /*!************************************************!*\
    !*** ./src/app/rui-kang/rui-kang.component.ts ***!
    \************************************************/

  /*! exports provided: RuiKangComponent */

  /***/
  function srcAppRuiKangRuiKangComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RuiKangComponent", function () {
      return RuiKangComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RuiKangComponent =
    /*#__PURE__*/
    function () {
      function RuiKangComponent() {
        _classCallCheck(this, RuiKangComponent);
      }

      _createClass(RuiKangComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RuiKangComponent;
    }();

    RuiKangComponent.ɵfac = function RuiKangComponent_Factory(t) {
      return new (t || RuiKangComponent)();
    };

    RuiKangComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RuiKangComponent,
      selectors: [["app-rui-kang"]],
      decls: 2,
      vars: 0,
      template: function RuiKangComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " rui-kang works!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3J1aS1rYW5nL3J1aS1rYW5nLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RuiKangComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-rui-kang',
          templateUrl: './rui-kang.component.html',
          styleUrls: ['./rui-kang.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/rui-kang/rui-kang.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/rui-kang/rui-kang.module.ts ***!
    \*********************************************/

  /*! exports provided: RuiKangModule */

  /***/
  function srcAppRuiKangRuiKangModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RuiKangModule", function () {
      return RuiKangModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _rui_kang_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./rui-kang.component */
    "./src/app/rui-kang/rui-kang.component.ts");
    /* harmony import */


    var _rui_kang_routing_module_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./rui-kang.routing.module.routing */
    "./src/app/rui-kang/rui-kang.routing.module.routing.ts");

    var RuiKangModule = function RuiKangModule() {
      _classCallCheck(this, RuiKangModule);
    };

    RuiKangModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RuiKangModule
    });
    RuiKangModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RuiKangModule_Factory(t) {
        return new (t || RuiKangModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _rui_kang_routing_module_routing__WEBPACK_IMPORTED_MODULE_3__["RuiKangRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RuiKangModule, {
        declarations: [_rui_kang_component__WEBPACK_IMPORTED_MODULE_2__["RuiKangComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _rui_kang_routing_module_routing__WEBPACK_IMPORTED_MODULE_3__["RuiKangRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RuiKangModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _rui_kang_routing_module_routing__WEBPACK_IMPORTED_MODULE_3__["RuiKangRoutingModule"]],
          declarations: [_rui_kang_component__WEBPACK_IMPORTED_MODULE_2__["RuiKangComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/rui-kang/rui-kang.routing.module.routing.ts":
  /*!*************************************************************!*\
    !*** ./src/app/rui-kang/rui-kang.routing.module.routing.ts ***!
    \*************************************************************/

  /*! exports provided: RuiKangRoutingModule */

  /***/
  function srcAppRuiKangRuiKangRoutingModuleRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RuiKangRoutingModule", function () {
      return RuiKangRoutingModule;
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


    var _components_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/app/app.component */
    "./src/app/rui-kang/components/app/app.component.ts");
    /* harmony import */


    var _components_web_web_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/web/web.component */
    "./src/app/rui-kang/components/web/web.component.ts");
    /* harmony import */


    var _components_cs_cs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/cs/cs.component */
    "./src/app/rui-kang/components/cs/cs.component.ts");

    var routes = [{
      path: 'app',
      component: _components_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
    }, {
      path: 'web',
      component: _components_web_web_component__WEBPACK_IMPORTED_MODULE_3__["WebComponent"]
    }, {
      path: 'cs',
      component: _components_cs_cs_component__WEBPACK_IMPORTED_MODULE_4__["CsComponent"]
    }, {
      path: '',
      pathMatch: 'full',
      redirectTo: 'cs'
    }];

    var RuiKangRoutingModule = function RuiKangRoutingModule() {
      _classCallCheck(this, RuiKangRoutingModule);
    };

    RuiKangRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RuiKangRoutingModule
    });
    RuiKangRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RuiKangRoutingModule_Factory(t) {
        return new (t || RuiKangRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RuiKangRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RuiKangRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=rui-kang-rui-kang-module-es5.js.map