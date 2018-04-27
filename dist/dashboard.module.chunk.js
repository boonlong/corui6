webpackJsonp(["dashboard.module"],{

/***/ "./node_modules/ngx-bootstrap/buttons/button-checkbox.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CHECKBOX_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonCheckboxDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
// tslint:disable:no-use-before-declare


// TODO: config: activeClass - Class to apply to the checked buttons
var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return ButtonCheckboxDirective; }),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
var ButtonCheckboxDirective = (function () {
    function ButtonCheckboxDirective() {
        /** Truthy value, will be set to ngModel */
        this.btnCheckboxTrue = true;
        /** Falsy value, will be set to ngModel */
        this.btnCheckboxFalse = false;
        this.state = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    // view -> model
    ButtonCheckboxDirective.prototype.onClick = function () {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    };
    ButtonCheckboxDirective.prototype.ngOnInit = function () {
        this.toggle(this.trueValue === this.value);
    };
    Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
        get: function () {
            return typeof this.btnCheckboxTrue !== 'undefined'
                ? this.btnCheckboxTrue
                : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
        get: function () {
            return typeof this.btnCheckboxFalse !== 'undefined'
                ? this.btnCheckboxFalse
                : false;
        },
        enumerable: true,
        configurable: true
    });
    ButtonCheckboxDirective.prototype.toggle = function (state) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    };
    // ControlValueAccessor
    // model -> view
    ButtonCheckboxDirective.prototype.writeValue = function (value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    };
    ButtonCheckboxDirective.prototype.setDisabledState = function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    ButtonCheckboxDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ButtonCheckboxDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ButtonCheckboxDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[btnCheckbox]',
                    providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    ButtonCheckboxDirective.ctorParameters = function () { return []; };
    ButtonCheckboxDirective.propDecorators = {
        'btnCheckboxTrue': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'btnCheckboxFalse': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'state': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.active',] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
    };
    return ButtonCheckboxDirective;
}());

//# sourceMappingURL=button-checkbox.directive.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/buttons/button-radio-group.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RADIO_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonRadioGroupDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
// tslint:disable:no-use-before-declare


var RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return ButtonRadioGroupDirective; }),
    multi: true
};
/**
 * A group of radio buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioGroupDirective = (function () {
    function ButtonRadioGroupDirective(el, cdr) {
        this.el = el;
        this.cdr = cdr;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    Object.defineProperty(ButtonRadioGroupDirective.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    ButtonRadioGroupDirective.prototype.writeValue = function (value) {
        this._value = value;
        this.cdr.markForCheck();
    };
    ButtonRadioGroupDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ButtonRadioGroupDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ButtonRadioGroupDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[btnRadioGroup]',
                    providers: [RADIO_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    ButtonRadioGroupDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    return ButtonRadioGroupDirective;
}());

//# sourceMappingURL=button-radio-group.directive.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/buttons/button-radio.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RADIO_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonRadioDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_radio_group_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/buttons/button-radio-group.directive.js");
// tslint:disable:no-use-before-declare



var RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return ButtonRadioDirective; }),
    multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioDirective = (function () {
    function ButtonRadioDirective(el, cdr, group, renderer) {
        this.el = el;
        this.cdr = cdr;
        this.group = group;
        this.renderer = renderer;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    Object.defineProperty(ButtonRadioDirective.prototype, "value", {
        /** Current value of radio component or group */
        get: function () {
            return this.group ? this.group.value : this._value;
        },
        set: function (value) {
            if (this.group) {
                this.group.value = value;
                return;
            }
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonRadioDirective.prototype, "disabled", {
        /** If `true` — radio button is disabled */
        get: function () {
            return this._disabled;
        },
        set: function (disabled) {
            this._disabled = disabled;
            this.setDisabledState(disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
        get: function () {
            return this.btnRadio === this.value;
        },
        enumerable: true,
        configurable: true
    });
    ButtonRadioDirective.prototype.onClick = function () {
        if (this.el.nativeElement.attributes.disabled || !this.uncheckable && this.btnRadio === this.value) {
            return;
        }
        this.value = this.uncheckable && this.btnRadio === this.value ? undefined : this.btnRadio;
        this._onChange(this.value);
    };
    ButtonRadioDirective.prototype.ngOnInit = function () {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    };
    ButtonRadioDirective.prototype.onBlur = function () {
        this.onTouched();
    };
    ButtonRadioDirective.prototype._onChange = function (value) {
        if (this.group) {
            this.group.onTouched();
            this.group.onChange(value);
            return;
        }
        this.onTouched();
        this.onChange(value);
    };
    // ControlValueAccessor
    // model -> view
    ButtonRadioDirective.prototype.writeValue = function (value) {
        this.value = value;
        this.cdr.markForCheck();
    };
    ButtonRadioDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ButtonRadioDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ButtonRadioDirective.prototype.setDisabledState = function (disabled) {
        if (disabled) {
            this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
            return;
        }
        this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    };
    ButtonRadioDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[btnRadio]',
                    providers: [RADIO_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    ButtonRadioDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_2__button_radio_group_directive__["a" /* ButtonRadioGroupDirective */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    ]; };
    ButtonRadioDirective.propDecorators = {
        'btnRadio': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'uncheckable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isActive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.active',] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
    };
    return ButtonRadioDirective;
}());

//# sourceMappingURL=button-radio.directive.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/buttons/buttons.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_checkbox_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/buttons/button-checkbox.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_radio_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/buttons/button-radio.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_radio_group_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/buttons/button-radio-group.directive.js");




var ButtonsModule = (function () {
    function ButtonsModule() {
    }
    ButtonsModule.forRoot = function () {
        return { ngModule: ButtonsModule, providers: [] };
    };
    ButtonsModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [__WEBPACK_IMPORTED_MODULE_1__button_checkbox_directive__["a" /* ButtonCheckboxDirective */], __WEBPACK_IMPORTED_MODULE_2__button_radio_directive__["a" /* ButtonRadioDirective */], __WEBPACK_IMPORTED_MODULE_3__button_radio_group_directive__["a" /* ButtonRadioGroupDirective */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_1__button_checkbox_directive__["a" /* ButtonCheckboxDirective */], __WEBPACK_IMPORTED_MODULE_2__button_radio_directive__["a" /* ButtonRadioDirective */], __WEBPACK_IMPORTED_MODULE_3__button_radio_group_directive__["a" /* ButtonRadioGroupDirective */]]
                },] },
    ];
    /** @nocollapse */
    ButtonsModule.ctorParameters = function () { return []; };
    return ButtonsModule;
}());

//# sourceMappingURL=buttons.module.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/buttons/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_checkbox_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/buttons/button-checkbox.directive.js");
/* unused harmony reexport ButtonCheckboxDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_radio_group_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/buttons/button-radio-group.directive.js");
/* unused harmony reexport ButtonRadioGroupDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_radio_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/buttons/button-radio.directive.js");
/* unused harmony reexport ButtonRadioDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buttons_module__ = __webpack_require__("./node_modules/ngx-bootstrap/buttons/buttons.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__buttons_module__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("./src/app/views/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
        data: {
            title: 'Dashboard'
        }
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card text-white bg-primary\">\r\n        <div class=\"card-body pb-0\">\r\n          <div class=\"btn-group float-right\" dropdown>\r\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\r\n              <i class=\"icon-settings\"></i>\r\n            </button>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n            </div>\r\n          </div>\r\n          <h4 class=\"mb-0\">9.823</h4>\r\n          <p>Members online</p>\r\n        </div>\r\n        <div class=\"chart-wrapper px-3\" style=\"height:70px;\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"lineChart1Data\"\r\n          [labels]=\"lineChart1Labels\"\r\n          [options]=\"lineChart1Options\"\r\n          [colors]=\"lineChart1Colours\"\r\n          [legend]=\"lineChart1Legend\"\r\n          [chartType]=\"lineChart1Type\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card text-white bg-info\">\r\n        <div class=\"card-body pb-0\">\r\n          <button type=\"button\" class=\"btn btn-transparent p-0 float-right\">\r\n            <i class=\"icon-location-pin\"></i>\r\n          </button>\r\n          <h4 class=\"mb-0\">9.823</h4>\r\n          <p>Members online</p>\r\n        </div>\r\n        <div class=\"chart-wrapper px-3\" style=\"height:70px;\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"lineChart2Data\"\r\n          [labels]=\"lineChart2Labels\"\r\n          [options]=\"lineChart2Options\"\r\n          [colors]=\"lineChart2Colours\"\r\n          [legend]=\"lineChart2Legend\"\r\n          [chartType]=\"lineChart2Type\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card text-white bg-warning\">\r\n        <div class=\"card-body pb-0\">\r\n          <div class=\"btn-group float-right\" dropdown>\r\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\r\n              <i class=\"icon-settings\"></i>\r\n            </button>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n            </div>\r\n          </div>\r\n          <h4 class=\"mb-0\">9.823</h4>\r\n          <p>Members online</p>\r\n        </div>\r\n        <div class=\"chart-wrapper\" style=\"height:70px;\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"lineChart3Data\"\r\n          [labels]=\"lineChart3Labels\"\r\n          [options]=\"lineChart3Options\"\r\n          [colors]=\"lineChart3Colours\"\r\n          [legend]=\"lineChart3Legend\"\r\n          [chartType]=\"lineChart3Type\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card text-white bg-danger\">\r\n        <div class=\"card-body pb-0\">\r\n          <div class=\"btn-group float-right\" dropdown>\r\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\r\n              <i class=\"icon-settings\"></i>\r\n            </button>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n            </div>\r\n          </div>\r\n          <h4 class=\"mb-0\">9.823</h4>\r\n          <p>Members online</p>\r\n        </div>\r\n        <div class=\"chart-wrapper px-3\" style=\"height:70px;\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"barChart1Data\"\r\n          [labels]=\"barChart1Labels\"\r\n          [options]=\"barChart1Options\"\r\n          [colors]=\"barChart1Colours\"\r\n          [legend]=\"barChart1Legend\"\r\n          [chartType]=\"barChart1Type\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-5\">\r\n          <h4 class=\"card-title mb-0\">Traffic</h4>\r\n          <div class=\"small text-muted\">November 2017</div>\r\n        </div><!--/.col-->\r\n        <div class=\"col-sm-7 d-none d-md-block\">\r\n          <button type=\"button\" class=\"btn btn-primary float-right\"><i class=\"icon-cloud-download\"></i></button>\r\n          <div class=\"btn-group btn-group-toggle float-right mr-3\" data-toggle=\"buttons\">\r\n            <label class=\"btn btn-outline-secondary\" [(ngModel)]=\"radioModel\" btnRadio=\"Day\" id=\"option1\">Day</label>\r\n            <label class=\"btn btn-outline-secondary\" [(ngModel)]=\"radioModel\" btnRadio=\"Month\" id=\"option2\">Month</label>\r\n            <label class=\"btn btn-outline-secondary\" [(ngModel)]=\"radioModel\" btnRadio=\"Year\" id=\"option3\">Year</label>\r\n          </div>\r\n        </div><!--/.col-->\r\n      </div><!--/.row-->\r\n      <div class=\"chart-wrapper\" style=\"height:300px;margin-top:40px;\">\r\n        <canvas baseChart class=\"chart\"\r\n        [datasets]=\"mainChartData\"\r\n        [labels]=\"mainChartLabels\"\r\n        [options]=\"mainChartOptions\"\r\n        [colors]=\"mainChartColours\"\r\n        [legend]=\"mainChartLegend\"\r\n        [chartType]=\"mainChartType\"></canvas>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n      <div class=\"row text-center\">\r\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\r\n          <div class=\"text-muted\">Visits</div>\r\n          <strong>29.703 Users (40%)</strong>\r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\r\n          <div class=\"text-muted\">Unique</div>\r\n          <strong>24.093 Users (20%)</strong>\r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 20%\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\r\n          <div class=\"text-muted\">Pageviews</div>\r\n          <strong>78.706 Views (60%)</strong>\r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 60%\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\r\n          <div class=\"text-muted\">New Users</div>\r\n          <strong>22.123 Users (80%)</strong>\r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 80%\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md mb-sm-2 mb-0\">\r\n          <div class=\"text-muted\">Bounce Rate</div>\r\n          <strong>40.15%</strong>\r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--/.card-->\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"brand-card\">\r\n        <div class=\"brand-card-header bg-facebook\">\r\n          <i class=\"fa fa-facebook\"></i>\r\n          <div class=\"chart-wrapper\">\r\n            <canvas baseChart class=\"chart\"\r\n            [datasets]=\"brandBoxChartData1\"\r\n            [labels]=\"brandBoxChartLabels\"\r\n            [options]=\"brandBoxChartOptions\"\r\n            [colors]=\"brandBoxChartColours\"\r\n            [legend]=\"brandBoxChartLegend\"\r\n            [chartType]=\"brandBoxChartType\"></canvas>\r\n          </div>\r\n        </div>\r\n        <div class=\"brand-card-body\">\r\n          <div>\r\n            <div class=\"text-value\">89k</div>\r\n            <div class=\"text-uppercase text-muted small\">friends</div>\r\n          </div>\r\n          <div>\r\n            <div class=\"text-value\">459</div>\r\n            <div class=\"text-uppercase text-muted small\">feeds</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"brand-card\">\r\n        <div class=\"brand-card-header bg-twitter\">\r\n          <i class=\"fa fa-twitter\"></i>\r\n          <div class=\"chart-wrapper\">\r\n            <canvas baseChart class=\"chart\"\r\n            [datasets]=\"brandBoxChartData2\"\r\n            [labels]=\"brandBoxChartLabels\"\r\n            [options]=\"brandBoxChartOptions\"\r\n            [colors]=\"brandBoxChartColours\"\r\n            [legend]=\"brandBoxChartLegend\"\r\n            [chartType]=\"brandBoxChartType\"></canvas>\r\n          </div>\r\n        </div>\r\n        <div class=\"brand-card-body\">\r\n          <div>\r\n            <div class=\"text-value\">973k</div>\r\n            <div class=\"text-uppercase text-muted small\">followers</div>\r\n          </div>\r\n          <div>\r\n            <div class=\"text-value\">1.792</div>\r\n            <div class=\"text-uppercase text-muted small\">tweets</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"brand-card\">\r\n        <div class=\"brand-card-header bg-linkedin\">\r\n          <i class=\"fa fa-linkedin\"></i>\r\n          <div class=\"chart-wrapper\">\r\n            <canvas baseChart class=\"chart\"\r\n            [datasets]=\"brandBoxChartData3\"\r\n            [labels]=\"brandBoxChartLabels\"\r\n            [options]=\"brandBoxChartOptions\"\r\n            [colors]=\"brandBoxChartColours\"\r\n            [legend]=\"brandBoxChartLegend\"\r\n            [chartType]=\"brandBoxChartType\"></canvas>\r\n          </div>\r\n        </div>\r\n        <div class=\"brand-card-body\">\r\n          <div>\r\n            <div class=\"text-value\">500+</div>\r\n            <div class=\"text-uppercase text-muted small\">contacts</div>\r\n          </div>\r\n          <div>\r\n            <div class=\"text-value\">292</div>\r\n            <div class=\"text-uppercase text-muted small\">feeds</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"brand-card\">\r\n        <div class=\"brand-card-header bg-google-plus\">\r\n          <i class=\"fa fa-google-plus\"></i>\r\n          <div class=\"chart-wrapper\">\r\n            <canvas baseChart class=\"chart\"\r\n            [datasets]=\"brandBoxChartData4\"\r\n            [labels]=\"brandBoxChartLabels\"\r\n            [options]=\"brandBoxChartOptions\"\r\n            [colors]=\"brandBoxChartColours\"\r\n            [legend]=\"brandBoxChartLegend\"\r\n            [chartType]=\"brandBoxChartType\"></canvas>\r\n          </div>\r\n        </div>\r\n        <div class=\"brand-card-body\">\r\n          <div>\r\n            <div class=\"text-value\">894</div>\r\n            <div class=\"text-uppercase text-muted small\">followers</div>\r\n          </div>\r\n          <div>\r\n            <div class=\"text-value\">92</div>\r\n            <div class=\"text-uppercase text-muted small\">circles</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Traffic &amp; Sales\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"callout callout-info\">\r\n                    <small class=\"text-muted\">New Clients</small>\r\n                    <br>\r\n                    <strong class=\"h4\">9,123</strong>\r\n                  </div>\r\n                </div><!--/.col-->\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"callout callout-danger\">\r\n                    <small class=\"text-muted\">Recuring Clients</small>\r\n                    <br>\r\n                    <strong class=\"h4\">22,643</strong>\r\n                  </div>\r\n                </div><!--/.col-->\r\n              </div><!--/.row-->\r\n              <hr class=\"mt-0\">\r\n              <div class=\"progress-group mb-4\">\r\n                <div class=\"progress-group-prepend\">\r\n                  <span class=\"progress-group-text\">\r\n                    Monday\r\n                  </span>\r\n                </div>\r\n                <div class=\"progress-group-bars\">\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 34%\" aria-valuenow=\"34\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 78%\" aria-valuenow=\"78\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"progress-group mb-4\">\r\n                <div class=\"progress-group-prepend\">\r\n                  <span class=\"progress-group-text\">\r\n                    Tuesday\r\n                  </span>\r\n                </div>\r\n                <div class=\"progress-group-bars\">\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 56%\" aria-valuenow=\"56\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 94%\" aria-valuenow=\"94\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"progress-group mb-4\">\r\n                <div class=\"progress-group-prepend\">\r\n                  <span class=\"progress-group-text\">\r\n                    Wednesday\r\n                  </span>\r\n                </div>\r\n                <div class=\"progress-group-bars\">\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 12%\" aria-valuenow=\"12\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 67%\" aria-valuenow=\"67\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"progress-group mb-4\">\r\n                <div class=\"progress-group-prepend\">\r\n                  <span class=\"progress-group-text\">\r\n                    Thursday\r\n                  </span>\r\n                </div>\r\n                <div class=\"progress-group-bars\">\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 91%\" aria-valuenow=\"91\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"progress-group mb-4\">\r\n                <div class=\"progress-group-prepend\">\r\n                  <span class=\"progress-group-text\">\r\n                    Friday\r\n                  </span>\r\n                </div>\r\n                <div class=\"progress-group-bars\">\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 22%\" aria-valuenow=\"22\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 73%\" aria-valuenow=\"73\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"progress-group mb-4\">\r\n                <div class=\"progress-group-prepend\">\r\n                  <span class=\"progress-group-text\">\r\n                    Saturday\r\n                  </span>\r\n                </div>\r\n                <div class=\"progress-group-bars\">\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 53%\" aria-valuenow=\"53\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 82%\" aria-valuenow=\"82\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"progress-group mb-4\">\r\n                <div class=\"progress-group-prepend\">\r\n                  <span class=\"progress-group-text\">\r\n                    Sunday\r\n                  </span>\r\n                </div>\r\n                <div class=\"progress-group-bars\">\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 9%\" aria-valuenow=\"9\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 69%\" aria-valuenow=\"69\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div><!--/.col-->\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"callout callout-warning\">\r\n                    <small class=\"text-muted\">Pageviews</small>\r\n                    <br>\r\n                    <strong class=\"h4\">78,623</strong>\r\n                  </div>\r\n                </div><!--/.col-->\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"callout callout-success\">\r\n                    <small class=\"text-muted\">Organic</small>\r\n                    <br>\r\n                    <strong class=\"h4\">49,123</strong>\r\n                  </div>\r\n                </div><!--/.col-->\r\n              </div><!--/.row-->\r\n              <hr class=\"mt-0\">\r\n              <div class=\"progress-group\">\r\n                <div class=\"progress-group-header\">\r\n                  <i class=\"icon-user progress-group-icon\"></i>\r\n                  <div>Male</div>\r\n                  <div class=\"ml-auto font-weight-bold\">43%</div>\r\n                </div>\r\n                <div class=\"progress-group-bars\">\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"progress-group mb-5\">\r\n                <div class=\"progress-group-header\">\r\n                  <i class=\"icon-user-female progress-group-icon\"></i>\r\n                  <div>Female</div>\r\n                  <div class=\"ml-auto font-weight-bold\">37%</div>\r\n                </div>\r\n                <div class=\"progress-group-bars\">\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"progress-group\">\r\n                <div class=\"progress-group-header align-items-end\">\r\n                  <i class=\"icon-globe progress-group-icon\"></i>\r\n                  <div>Organic Search</div>\r\n                  <div class=\"ml-auto font-weight-bold mr-2\">191.235</div>\r\n                  <div class=\"text-muted small\">(56%)</div>\r\n                </div>\r\n                <div class=\"progress-group-bars\">\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 56%\" aria-valuenow=\"56\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"progress-group\">\r\n                <div class=\"progress-group-header align-items-end\">\r\n                  <i class=\"icon-social-facebook progress-group-icon\"></i>\r\n                  <div>Facebook</div>\r\n                  <div class=\"ml-auto font-weight-bold mr-2\">51.223</div>\r\n                  <div class=\"text-muted small\">(15%)</div>\r\n                </div>\r\n                <div class=\"progress-group-bars\">\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 15%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"progress-group\">\r\n                <div class=\"progress-group-header align-items-end\">\r\n                  <i class=\"icon-social-twitter progress-group-icon\"></i>\r\n                  <div>Twitter</div>\r\n                  <div class=\"ml-auto font-weight-bold mr-2\">37.564</div>\r\n                  <div class=\"text-muted small\">(11%)</div>\r\n                </div>\r\n                <div class=\"progress-group-bars\">\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 11%\" aria-valuenow=\"11\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"progress-group\">\r\n                <div class=\"progress-group-header align-items-end\">\r\n                  <i class=\"icon-social-linkedin progress-group-icon\"></i>\r\n                  <div>LinkedIn</div>\r\n                  <div class=\"ml-auto font-weight-bold mr-2\">27.319</div>\r\n                  <div class=\"text-muted small\">(8%)</div>\r\n                </div>\r\n                <div class=\"progress-group-bars\">\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 8%\" aria-valuenow=\"8\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div><!--/.col-->\r\n          </div><!--/.row-->\r\n          <br>\r\n          <table class=\"table table-responsive-sm table-hover table-outline mb-0\">\r\n            <thead class=\"thead-light\">\r\n              <tr>\r\n                <th class=\"text-center\"><i class=\"icon-people\"></i></th>\r\n                <th>User</th>\r\n                <th class=\"text-center\">Country</th>\r\n                <th>Usage</th>\r\n                <th class=\"text-center\">Payment Method</th>\r\n                <th>Activity</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td class=\"text-center\">\r\n                  <div class=\"avatar\">\r\n                    <img src=\"assets/img/avatars/1.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                    <span class=\"avatar-status badge-success\"></span>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div>Yiorgos Avraamu</div>\r\n                  <div class=\"small text-muted\">\r\n                    <span>New</span> | Registered: Jan 1, 2015\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"flag-icon flag-icon-us h4 mb-0\" title=\"us\" id=\"us\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                      <strong>50%</strong>\r\n                    </div>\r\n                    <div class=\"float-right\">\r\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"fa fa-cc-mastercard\" style=\"font-size:24px\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"small text-muted\">Last login</div>\r\n                  <strong>10 sec ago</strong>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-center\">\r\n                  <div class=\"avatar\">\r\n                    <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                    <span class=\"avatar-status badge-danger\"></span>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div>Avram Tarasios</div>\r\n                  <div class=\"small text-muted\">\r\n\r\n                    <span>Recurring</span> | Registered: Jan 1, 2015\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"flag-icon flag-icon-br h4 mb-0\" title=\"br\" id=\"br\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                      <strong>10%</strong>\r\n                    </div>\r\n                    <div class=\"float-right\">\r\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"fa fa-cc-visa\" style=\"font-size:24px\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"small text-muted\">Last login</div>\r\n                  <strong>5 minutes ago</strong>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-center\">\r\n                  <div class=\"avatar\">\r\n                    <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                    <span class=\"avatar-status badge-warning\"></span>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div>Quintin Ed</div>\r\n                  <div class=\"small text-muted\">\r\n                    <span>New</span> | Registered: Jan 1, 2015\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"flag-icon flag-icon-in h4 mb-0\" title=\"in\" id=\"in\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                      <strong>74%</strong>\r\n                    </div>\r\n                    <div class=\"float-right\">\r\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 74%\" aria-valuenow=\"74\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"fa fa-cc-stripe\" style=\"font-size:24px\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"small text-muted\">Last login</div>\r\n                  <strong>1 hour ago</strong>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-center\">\r\n                  <div class=\"avatar\">\r\n                    <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                    <span class=\"avatar-status badge-secondary\"></span>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div>Enéas Kwadwo</div>\r\n                  <div class=\"small text-muted\">\r\n                    <span>New</span> | Registered: Jan 1, 2015\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"flag-icon flag-icon-fr h4 mb-0\" title=\"fr\" id=\"fr\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                      <strong>98%</strong>\r\n                    </div>\r\n                    <div class=\"float-right\">\r\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 98%\" aria-valuenow=\"98\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"fa fa-paypal\" style=\"font-size:24px\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"small text-muted\">Last login</div>\r\n                  <strong>Last month</strong>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-center\">\r\n                  <div class=\"avatar\">\r\n                    <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                    <span class=\"avatar-status badge-success\"></span>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div>Agapetus Tadeáš</div>\r\n                  <div class=\"small text-muted\">\r\n                    <span>New</span> | Registered: Jan 1, 2015\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"flag-icon flag-icon-es h4 mb-0\" title=\"es\" id=\"es\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                      <strong>22%</strong>\r\n                    </div>\r\n                    <div class=\"float-right\">\r\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 22%\" aria-valuenow=\"22\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"fa fa-google-wallet\" style=\"font-size:24px\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"small text-muted\">Last login</div>\r\n                  <strong>Last week</strong>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-center\">\r\n                  <div class=\"avatar\">\r\n                    <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                    <span class=\"avatar-status badge-danger\"></span>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div>Friderik Dávid</div>\r\n                  <div class=\"small text-muted\">\r\n                    <span>New</span> | Registered: Jan 1, 2015\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"flag-icon flag-icon-pl h4 mb-0\" title=\"pl\" id=\"pl\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                      <strong>43%</strong>\r\n                    </div>\r\n                    <div class=\"float-right\">\r\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"fa fa-cc-amex\" style=\"font-size:24px\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"small text-muted\">Last login</div>\r\n                  <strong>Yesterday</strong>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coreui_coreui_js_src_utilities___ = __webpack_require__("./node_modules/@coreui/coreui/js/src/utilities/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coreui_coreui_plugin_chartjs_custom_tooltips_js___ = __webpack_require__("./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/js/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        // lineChart1
        this.lineChart1Data = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Series A'
            }
        ];
        this.lineChart1Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart1Options = {
            tooltips: {
                enabled: false,
                custom: __WEBPACK_IMPORTED_MODULE_2__coreui_coreui_plugin_chartjs_custom_tooltips_js___["a" /* CustomTooltips */]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent'
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent',
                        }
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                            min: 40 - 5,
                            max: 84 + 5,
                        }
                    }],
            },
            elements: {
                line: {
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart1Colours = [
            {
                backgroundColor: Object(__WEBPACK_IMPORTED_MODULE_1__coreui_coreui_js_src_utilities___["a" /* getStyle */])('--primary'),
                borderColor: 'rgba(255,255,255,.55)'
            }
        ];
        this.lineChart1Legend = false;
        this.lineChart1Type = 'line';
        // lineChart2
        this.lineChart2Data = [
            {
                data: [1, 18, 9, 17, 34, 22, 11],
                label: 'Series A'
            }
        ];
        this.lineChart2Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart2Options = {
            tooltips: {
                enabled: false,
                custom: __WEBPACK_IMPORTED_MODULE_2__coreui_coreui_plugin_chartjs_custom_tooltips_js___["a" /* CustomTooltips */]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent'
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent',
                        }
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                            min: 1 - 5,
                            max: 34 + 5,
                        }
                    }],
            },
            elements: {
                line: {
                    tension: 0.00001,
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart2Colours = [
            {
                backgroundColor: Object(__WEBPACK_IMPORTED_MODULE_1__coreui_coreui_js_src_utilities___["a" /* getStyle */])('--info'),
                borderColor: 'rgba(255,255,255,.55)'
            }
        ];
        this.lineChart2Legend = false;
        this.lineChart2Type = 'line';
        // lineChart3
        this.lineChart3Data = [
            {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'Series A'
            }
        ];
        this.lineChart3Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart3Options = {
            tooltips: {
                enabled: false,
                custom: __WEBPACK_IMPORTED_MODULE_2__coreui_coreui_plugin_chartjs_custom_tooltips_js___["a" /* CustomTooltips */]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false
                    }],
                yAxes: [{
                        display: false
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart3Colours = [
            {
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
            }
        ];
        this.lineChart3Legend = false;
        this.lineChart3Type = 'line';
        // barChart1
        this.barChart1Data = [
            {
                data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
                label: 'Series A'
            }
        ];
        this.barChart1Labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
        this.barChart1Options = {
            tooltips: {
                enabled: false,
                custom: __WEBPACK_IMPORTED_MODULE_2__coreui_coreui_plugin_chartjs_custom_tooltips_js___["a" /* CustomTooltips */]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                        barPercentage: 0.6,
                    }],
                yAxes: [{
                        display: false
                    }]
            },
            legend: {
                display: false
            }
        };
        this.barChart1Colours = [
            {
                backgroundColor: 'rgba(255,255,255,.3)',
                borderWidth: 0
            }
        ];
        this.barChart1Legend = false;
        this.barChart1Type = 'bar';
        // mainChart
        this.mainChartElements = 27;
        this.mainChartData1 = [];
        this.mainChartData2 = [];
        this.mainChartData3 = [];
        this.mainChartData = [
            {
                data: this.mainChartData1,
                label: 'Current'
            },
            {
                data: this.mainChartData2,
                label: 'Previous'
            },
            {
                data: this.mainChartData3,
                label: 'BEP'
            }
        ];
        /* tslint:disable:max-line-length */
        this.mainChartLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        /* tslint:enable:max-line-length */
        this.mainChartOptions = {
            tooltips: {
                enabled: false,
                custom: __WEBPACK_IMPORTED_MODULE_2__coreui_coreui_plugin_chartjs_custom_tooltips_js___["a" /* CustomTooltips */]
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            drawOnChartArea: false,
                        },
                        ticks: {
                            callback: function (value) {
                                return value.charAt(0);
                            }
                        }
                    }],
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            maxTicksLimit: 5,
                            stepSize: Math.ceil(250 / 5),
                            max: 250
                        }
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.mainChartColours = [
            {
                backgroundColor: Object(__WEBPACK_IMPORTED_MODULE_1__coreui_coreui_js_src_utilities___["b" /* hexToRgba */])(Object(__WEBPACK_IMPORTED_MODULE_1__coreui_coreui_js_src_utilities___["a" /* getStyle */])('--info'), 10),
                borderColor: Object(__WEBPACK_IMPORTED_MODULE_1__coreui_coreui_js_src_utilities___["a" /* getStyle */])('--info'),
                pointHoverBackgroundColor: '#fff'
            },
            {
                backgroundColor: 'transparent',
                borderColor: Object(__WEBPACK_IMPORTED_MODULE_1__coreui_coreui_js_src_utilities___["a" /* getStyle */])('--success'),
                pointHoverBackgroundColor: '#fff'
            },
            {
                backgroundColor: 'transparent',
                borderColor: Object(__WEBPACK_IMPORTED_MODULE_1__coreui_coreui_js_src_utilities___["a" /* getStyle */])('--danger'),
                pointHoverBackgroundColor: '#fff',
                borderWidth: 1,
                borderDash: [8, 5]
            }
        ];
        this.mainChartLegend = false;
        this.mainChartType = 'line';
        // social box charts
        this.brandBoxChartData1 = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Facebook'
            }
        ];
        this.brandBoxChartData2 = [
            {
                data: [1, 13, 9, 17, 34, 41, 38],
                label: 'Twitter'
            }
        ];
        this.brandBoxChartData3 = [
            {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'LinkedIn'
            }
        ];
        this.brandBoxChartData4 = [
            {
                data: [35, 23, 56, 22, 97, 23, 64],
                label: 'Google+'
            }
        ];
        this.brandBoxChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.brandBoxChartOptions = {
            tooltips: {
                enabled: false,
                custom: __WEBPACK_IMPORTED_MODULE_2__coreui_coreui_plugin_chartjs_custom_tooltips_js___["a" /* CustomTooltips */]
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.brandBoxChartColours = [
            {
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
                pointHoverBackgroundColor: '#fff'
            }
        ];
        this.brandBoxChartLegend = false;
        this.brandBoxChartType = 'line';
        this.radioModel = 'Month';
    }
    DashboardComponent.prototype.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        // generate random values for mainChart
        for (var i = 0; i <= this.mainChartElements; i++) {
            this.mainChartData1.push(this.random(50, 200));
            this.mainChartData2.push(this.random(80, 100));
            this.mainChartData3.push(65);
        }
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/views/dashboard/dashboard.component.html")
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__ = __webpack_require__("./node_modules/ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_dropdown__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_buttons__ = __webpack_require__("./node_modules/ngx-bootstrap/buttons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_component__ = __webpack_require__("./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_routing_module__ = __webpack_require__("./src/app/views/dashboard/dashboard-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__dashboard_routing_module__["a" /* DashboardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_buttons__["a" /* ButtonsModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__dashboard_component__["a" /* DashboardComponent */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map