webpackJsonp(["notifications.module"],{

/***/ "./node_modules/ngx-bootstrap/alert/alert.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_config__ = __webpack_require__("./node_modules/ngx-bootstrap/alert/alert.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_decorators__ = __webpack_require__("./node_modules/ngx-bootstrap/utils/decorators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = (function () {
    function AlertComponent(_config, changeDetection) {
        var _this = this;
        this.changeDetection = changeDetection;
        /** Alert type.
         * Provides one of four bootstrap supported contextual classes:
         * `success`, `info`, `warning` and `danger`
         */
        this.type = 'warning';
        /** If set, displays an inline "Close" button */
        this.dismissible = false;
        /** Is alert visible */
        this.isOpen = true;
        /** This event fires immediately after close instance method is called,
         * $event is an instance of Alert component.
         */
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event fires when alert closed, $event is an instance of Alert component */
        this.onClosed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.classes = '';
        this.dismissibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        Object.assign(this, _config);
        this.dismissibleChange.subscribe(function (dismissible) {
            _this.classes = _this.dismissible ? 'alert-dismissible' : '';
            _this.changeDetection.markForCheck();
        });
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dismissOnTimeout) {
            // if dismissOnTimeout used as attr without binding, it will be a string
            setTimeout(function () { return _this.close(); }, parseInt(this.dismissOnTimeout, 10));
        }
    };
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     */
    AlertComponent.prototype.close = function () {
        if (!this.isOpen) {
            return;
        }
        this.onClose.emit(this);
        this.isOpen = false;
        this.changeDetection.markForCheck();
        this.onClosed.emit(this);
    };
    AlertComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'alert,bs-alert',
                    template: "<ng-template [ngIf]=\"isOpen\"> <div [class]=\"'alert alert-' + type\" role=\"alert\" [ngClass]=\"classes\"> <ng-template [ngIf]=\"dismissible\"> <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\"> <span aria-hidden=\"true\">&times;</span> <span class=\"sr-only\">Close</span> </button> </ng-template> <ng-content></ng-content> </div> </ng-template> ",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    /** @nocollapse */
    AlertComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__alert_config__["a" /* AlertConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    AlertComponent.propDecorators = {
        'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dismissible': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dismissOnTimeout': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onClose': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onClosed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_decorators__["a" /* OnChange */])(),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "dismissible", void 0);
    return AlertComponent;
}());

//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/alert/alert.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var AlertConfig = (function () {
    function AlertConfig() {
        /** default alert type */
        this.type = 'warning';
        /** is alerts are dismissible by default */
        this.dismissible = false;
        /** default time before alert will dismiss */
        this.dismissOnTimeout = undefined;
    }
    AlertConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    AlertConfig.ctorParameters = function () { return []; };
    return AlertConfig;
}());

//# sourceMappingURL=alert.config.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/alert/alert.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_component__ = __webpack_require__("./node_modules/ngx-bootstrap/alert/alert.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_config__ = __webpack_require__("./node_modules/ngx-bootstrap/alert/alert.config.js");




var AlertModule = (function () {
    function AlertModule() {
    }
    AlertModule.forRoot = function () {
        return { ngModule: AlertModule, providers: [__WEBPACK_IMPORTED_MODULE_3__alert_config__["a" /* AlertConfig */]] };
    };
    AlertModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_2__alert_component__["a" /* AlertComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_2__alert_component__["a" /* AlertComponent */]],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_2__alert_component__["a" /* AlertComponent */]]
                },] },
    ];
    /** @nocollapse */
    AlertModule.ctorParameters = function () { return []; };
    return AlertModule;
}());

//# sourceMappingURL=alert.module.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/alert/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_component__ = __webpack_require__("./node_modules/ngx-bootstrap/alert/alert.component.js");
/* unused harmony reexport AlertComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_module__ = __webpack_require__("./node_modules/ngx-bootstrap/alert/alert.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__alert_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_config__ = __webpack_require__("./node_modules/ngx-bootstrap/alert/alert.config.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__alert_config__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsModalRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var BsModalRef = (function () {
    function BsModalRef() {
        /**
         * Hides the modal
         */
        this.hide = Function;
    }
    BsModalRef.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BsModalRef.ctorParameters = function () { return []; };
    return BsModalRef;
}());

//# sourceMappingURL=bs-modal-ref.service.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/modal/bs-modal.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader_component_loader_factory__ = __webpack_require__("./node_modules/ngx-bootstrap/component-loader/component-loader.factory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_backdrop_component__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/modal-backdrop.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_container_component__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/modal-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_options_class__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/modal-options.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_modal_ref_service__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");






var BsModalService = (function () {
    function BsModalService(rendererFactory, clf) {
        this.clf = clf;
        // constructor props
        this.config = __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["e" /* modalConfigDefaults */];
        this.onShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        this.lastDismissReason = '';
        this.loaders = [];
        this._backdropLoader = this.clf.createLoader(null, null, null);
        this._renderer = rendererFactory.createRenderer(null, null);
    }
    /** Shows a modal */
    BsModalService.prototype.show = function (content, config) {
        this.modalsCount++;
        this._createLoaders();
        this.config = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["e" /* modalConfigDefaults */], config);
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    };
    BsModalService.prototype.hide = function (level) {
        var _this = this;
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout(function () {
            _this._hideModal(level);
            _this.removeLoaders(level);
        }, this.config.animated ? __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["d" /* TRANSITION_DURATIONS */].BACKDROP : 0);
    };
    BsModalService.prototype._showBackdrop = function () {
        var isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        var isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(__WEBPACK_IMPORTED_MODULE_2__modal_backdrop_component__["a" /* ModalBackdropComponent */])
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    };
    BsModalService.prototype._hideBackdrop = function () {
        var _this = this;
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        var duration = this.config.animated ? __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["d" /* TRANSITION_DURATIONS */].BACKDROP : 0;
        setTimeout(function () { return _this.removeBackdrop(); }, duration);
    };
    BsModalService.prototype._showModal = function (content) {
        var modalLoader = this.loaders[this.loaders.length - 1];
        var bsModalRef = new __WEBPACK_IMPORTED_MODULE_5__bs_modal_ref_service__["a" /* BsModalRef */]();
        var modalContainerRef = modalLoader
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["c" /* ModalOptions */], useValue: this.config })
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_5__bs_modal_ref_service__["a" /* BsModalRef */], useValue: bsModalRef })
            .attach(__WEBPACK_IMPORTED_MODULE_3__modal_container_component__["a" /* ModalContainerComponent */])
            .to('body')
            .show({ content: content, isAnimated: this.config.animated, initialState: this.config.initialState, bsModalService: this });
        modalContainerRef.instance.level = this.getModalsCount();
        bsModalRef.hide = function () {
            modalContainerRef.instance.hide();
        };
        bsModalRef.content = modalLoader.getInnerComponent() || null;
        return bsModalRef;
    };
    BsModalService.prototype._hideModal = function (level) {
        var modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    };
    BsModalService.prototype.getModalsCount = function () {
        return this.modalsCount;
    };
    BsModalService.prototype.setDismissReason = function (reason) {
        this.lastDismissReason = reason;
    };
    BsModalService.prototype.removeBackdrop = function () {
        this._backdropLoader.hide();
        this.backdropRef = null;
    };
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE */
    /** Scroll bar tricks */
    /** @internal */
    BsModalService.prototype.checkScrollbar = function () {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    BsModalService.prototype.setScrollbar = function () {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window
            .getComputedStyle(document.body)
            .getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = this.originalBodyPadding +
                this.scrollbarWidth + "px";
        }
    };
    BsModalService.prototype.resetScrollbar = function () {
        document.body.style.paddingRight = this.originalBodyPadding + "px";
    };
    // thx d.walsh
    BsModalService.prototype.getScrollbarWidth = function () {
        var scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["a" /* CLASS_NAME */].SCROLLBAR_MEASURER);
        this._renderer.appendChild(document.body, scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(document.body, scrollDiv);
        return scrollbarWidth;
    };
    BsModalService.prototype._createLoaders = function () {
        var loader = this.clf.createLoader(null, null, null);
        this.copyEvent(loader.onBeforeShow, this.onShow);
        this.copyEvent(loader.onShown, this.onShown);
        this.copyEvent(loader.onBeforeHide, this.onHide);
        this.copyEvent(loader.onHidden, this.onHidden);
        this.loaders.push(loader);
    };
    BsModalService.prototype.removeLoaders = function (level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach(function (loader, i) {
            loader.instance.level = i + 1;
        });
    };
    BsModalService.prototype.copyEvent = function (from, to) {
        var _this = this;
        from.subscribe(function () {
            to.emit(_this.lastDismissReason);
        });
    };
    BsModalService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BsModalService.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["RendererFactory2"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__component_loader_component_loader_factory__["a" /* ComponentLoaderFactory */], },
    ]; };
    return BsModalService;
}());

//# sourceMappingURL=bs-modal.service.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/modal/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bs_modal_ref_service__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* unused harmony reexport BsModalRef */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_backdrop_options__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/modal-backdrop.options.js");
/* unused harmony reexport ModalBackdropOptions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_container_component__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/modal-container.component.js");
/* unused harmony reexport ModalContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_backdrop_component__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/modal-backdrop.component.js");
/* unused harmony reexport ModalBackdropComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_options_class__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/modal-options.class.js");
/* unused harmony reexport ModalOptions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/modal.directive.js");
/* unused harmony reexport ModalDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_module__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/modal.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__modal_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bs_modal_service__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/bs-modal.service.js");
/* unused harmony reexport BsModalService */








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/modal/modal-backdrop.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalBackdropComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_options_class__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/modal-options.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__ = __webpack_require__("./node_modules/ngx-bootstrap/utils/theme-provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__ = __webpack_require__("./node_modules/ngx-bootstrap/utils/utils.class.js");




/** This component will be added as background layout for modals if enabled */
var ModalBackdropComponent = (function () {
    function ModalBackdropComponent(element, renderer) {
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
        get: function () {
            return this._isAnimated;
        },
        set: function (value) {
            this._isAnimated = value;
            // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        set: function (value) {
            this._isShown = value;
            if (value) {
                this.renderer.addClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].IN);
            }
            else {
                this.renderer.removeClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].IN);
            }
            if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["a" /* isBs3 */])()) {
                if (value) {
                    this.renderer.addClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].SHOW);
                }
                else {
                    this.renderer.removeClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].SHOW);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ModalBackdropComponent.prototype.ngOnInit = function () {
        if (this.isAnimated) {
            this.renderer.addClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].FADE);
            __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__["a" /* Utils */].reflow(this.element.nativeElement);
        }
        this.isShown = true;
    };
    ModalBackdropComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bs-modal-backdrop',
                    template: ' ',
                    host: { class: __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].BACKDROP }
                },] },
    ];
    /** @nocollapse */
    ModalBackdropComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    ]; };
    return ModalBackdropComponent;
}());

//# sourceMappingURL=modal-backdrop.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/modal/modal-backdrop.options.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ModalBackdropOptions */
var ModalBackdropOptions = (function () {
    function ModalBackdropOptions(options) {
        this.animate = true;
        Object.assign(this, options);
    }
    return ModalBackdropOptions;
}());

//# sourceMappingURL=modal-backdrop.options.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/modal/modal-container.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_options_class__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/modal-options.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__ = __webpack_require__("./node_modules/ngx-bootstrap/utils/theme-provider.js");



var ModalContainerComponent = (function () {
    function ModalContainerComponent(options, _element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.isShown = false;
        this.isModalHiding = false;
        this.config = Object.assign({}, options);
    }
    ModalContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isAnimated) {
            this._renderer.addClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].FADE);
        }
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        setTimeout(function () {
            _this.isShown = true;
            _this._renderer.addClass(_this._element.nativeElement, Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["a" /* isBs3 */])() ? __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].IN : __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].SHOW);
        }, this.isAnimated ? __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["d" /* TRANSITION_DURATIONS */].BACKDROP : 0);
        if (document && document.body) {
            if (this.bsModalService.getModalsCount() === 1) {
                this.bsModalService.checkScrollbar();
                this.bsModalService.setScrollbar();
            }
            this._renderer.addClass(document.body, __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].OPEN);
        }
        if (this._element.nativeElement) {
            this._element.nativeElement.focus();
        }
    };
    ModalContainerComponent.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.bsModalService.setDismissReason(__WEBPACK_IMPORTED_MODULE_1__modal_options_class__["b" /* DISMISS_REASONS */].BACKRDOP);
        this.hide();
    };
    ModalContainerComponent.prototype.onEsc = function (event) {
        if (!this.isShown) {
            return;
        }
        if (event.keyCode === 27) {
            event.preventDefault();
        }
        if (this.config.keyboard &&
            this.level === this.bsModalService.getModalsCount()) {
            this.bsModalService.setDismissReason(__WEBPACK_IMPORTED_MODULE_1__modal_options_class__["b" /* DISMISS_REASONS */].ESC);
            this.hide();
        }
    };
    ModalContainerComponent.prototype.ngOnDestroy = function () {
        if (this.isShown) {
            this.hide();
        }
    };
    ModalContainerComponent.prototype.hide = function () {
        var _this = this;
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        this.isModalHiding = true;
        this._renderer.removeClass(this._element.nativeElement, Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["a" /* isBs3 */])() ? __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].IN : __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].SHOW);
        setTimeout(function () {
            _this.isShown = false;
            if (document &&
                document.body &&
                _this.bsModalService.getModalsCount() === 1) {
                _this._renderer.removeClass(document.body, __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].OPEN);
            }
            _this.bsModalService.hide(_this.level);
            _this.isModalHiding = false;
        }, this.isAnimated ? __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["d" /* TRANSITION_DURATIONS */].MODAL : 0);
    };
    ModalContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'modal-container',
                    template: "\n    <div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n      <div class=\"modal-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
                    host: {
                        class: 'modal',
                        role: 'dialog',
                        tabindex: '-1',
                        '[attr.aria-modal]': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    ModalContainerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["c" /* ModalOptions */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    ]; };
    ModalContainerComponent.propDecorators = {
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click', ['$event'],] },],
        'onEsc': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['window:keydown.esc', ['$event'],] },],
    };
    return ModalContainerComponent;
}());

//# sourceMappingURL=modal-container.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/modal/modal-options.class.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ModalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return modalConfigDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLASS_NAME; });
/* unused harmony export SELECTOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TRANSITION_DURATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DISMISS_REASONS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var ModalOptions = (function () {
    function ModalOptions() {
    }
    ModalOptions.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    ModalOptions.ctorParameters = function () { return []; };
    return ModalOptions;
}());

var modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true,
    initialState: {}
};
var CLASS_NAME = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    SHOW: 'show' // bs4
};
var SELECTOR = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
var TRANSITION_DURATIONS = {
    MODAL: 300,
    BACKDROP: 150
};
var DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};
//# sourceMappingURL=modal-options.class.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/modal/modal.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__ = __webpack_require__("./node_modules/ngx-bootstrap/utils/facade/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__ = __webpack_require__("./node_modules/ngx-bootstrap/utils/theme-provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__ = __webpack_require__("./node_modules/ngx-bootstrap/utils/utils.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_backdrop_component__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/modal-backdrop.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_options_class__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/modal-options.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_loader_component_loader_factory__ = __webpack_require__("./node_modules/ngx-bootstrap/component-loader/component-loader.factory.js");
/* tslint:disable:max-file-line-count */
// todo: should we support enforce focus in?
// todo: in original bs there are was a way to prevent modal from showing
// todo: original modal had resize events







var TRANSITION_DURATION = 300;
var BACKDROP_TRANSITION_DURATION = 150;
/** Mark any code with directive to show it's content in modal */
var ModalDirective = (function () {
    function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
        this._element = _element;
        this._renderer = _renderer;
        /** This event fires immediately when the `show` instance method is called. */
        this.onShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event is fired when the modal has been made visible to the user
         * (will wait for CSS transitions to complete)
         */
        this.onShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event is fired immediately when
         * the hide instance method has been called.
         */
        this.onHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event is fired when the modal has finished being
         * hidden from the user (will wait for CSS transitions to complete).
         */
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this.isNested = false;
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
    }
    Object.defineProperty(ModalDirective.prototype, "config", {
        get: function () {
            return this._config;
        },
        /** allows to set modal configuration via element property */
        set: function (conf) {
            this._config = this.getConfig(conf);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDirective.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        enumerable: true,
        configurable: true
    });
    ModalDirective.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.dismissReason = __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["b" /* DISMISS_REASONS */].BACKRDOP;
        this.hide(event);
    };
    // todo: consider preventing default and stopping propagation
    ModalDirective.prototype.onEsc = function (event) {
        if (!this._isShown) {
            return;
        }
        if (event.keyCode === 27) {
            event.preventDefault();
        }
        if (this.config.keyboard) {
            this.dismissReason = __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["b" /* DISMISS_REASONS */].ESC;
            this.hide();
        }
    };
    ModalDirective.prototype.ngOnDestroy = function () {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
            this._backdrop.dispose();
        }
    };
    ModalDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._config = this._config || this.getConfig();
        setTimeout(function () {
            if (_this._config.show) {
                _this.show();
            }
        }, 0);
    };
    /* Public methods */
    /** Allows to manually toggle modal visibility */
    ModalDirective.prototype.toggle = function () {
        return this._isShown ? this.hide() : this.show();
    };
    /** Allows to manually open modal */
    ModalDirective.prototype.show = function () {
        var _this = this;
        this.dismissReason = null;
        this.onShow.emit(this);
        if (this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */] && __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body) {
            if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.classList.contains(__WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* CLASS_NAME */].OPEN)) {
                this.isNested = true;
            }
            else {
                this._renderer.addClass(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* CLASS_NAME */].OPEN);
            }
        }
        this.showBackdrop(function () {
            _this.showElement();
        });
    };
    /** Allows to manually close modal */
    ModalDirective.prototype.hide = function (event) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.removeClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* CLASS_NAME */].IN);
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["a" /* isBs3 */])()) {
            this._renderer.removeClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* CLASS_NAME */].SHOW);
        }
        // this._addClassIn = false;
        if (this._config.animated) {
            this.timerHideModal = setTimeout(function () { return _this.hideModal(); }, TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    };
    /** Private methods @internal */
    ModalDirective.prototype.getConfig = function (config) {
        return Object.assign({}, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["e" /* modalConfigDefaults */], config);
    };
    /**
     *  Show dialog
     *  @internal
     */
    ModalDirective.prototype.showElement = function () {
        var _this = this;
        // todo: replace this with component loader usage
        if (!this._element.nativeElement.parentNode ||
            this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
            // don't move modals dom position
            if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */] && __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body) {
                __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.appendChild(this._element.nativeElement);
            }
        }
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
        this._renderer.setAttribute(this._element.nativeElement, 'aria-modal', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
        if (this._config.animated) {
            __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__["a" /* Utils */].reflow(this._element.nativeElement);
        }
        // this._addClassIn = true;
        this._renderer.addClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* CLASS_NAME */].IN);
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["a" /* isBs3 */])()) {
            this._renderer.addClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* CLASS_NAME */].SHOW);
        }
        var transitionComplete = function () {
            if (_this._config.focus) {
                _this._element.nativeElement.focus();
            }
            _this.onShown.emit(_this);
        };
        if (this._config.animated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    };
    /** @internal */
    ModalDirective.prototype.hideModal = function () {
        var _this = this;
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop(function () {
            if (!_this.isNested) {
                if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */] && __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body) {
                    _this._renderer.removeClass(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* CLASS_NAME */].OPEN);
                }
                _this.resetScrollbar();
            }
            _this.resetAdjustments();
            _this.focusOtherModal();
            _this.onHidden.emit(_this);
        });
    };
    // todo: original show was calling a callback when done, but we can use
    // promise
    /** @internal */
    ModalDirective.prototype.showBackdrop = function (callback) {
        var _this = this;
        if (this._isShown &&
            this.config.backdrop &&
            (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this._backdrop
                .attach(__WEBPACK_IMPORTED_MODULE_4__modal_backdrop_component__["a" /* ModalBackdropComponent */])
                .to('body')
                .show({ isAnimated: this._config.animated });
            this.backdrop = this._backdrop._componentRef;
            if (!callback) {
                return;
            }
            if (!this._config.animated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            var callbackRemove = function () {
                _this.removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    };
    /** @internal */
    ModalDirective.prototype.removeBackdrop = function () {
        this._backdrop.hide();
    };
    /** Events tricks */
    // no need for it
    // protected setEscapeEvent():void {
    //   if (this._isShown && this._config.keyboard) {
    //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
    //       if (event.which === 27) {
    //         this.hide()
    //       }
    //     })
    //
    //   } else if (!this._isShown) {
    //     $(this._element).off(Event.KEYDOWN_DISMISS)
    //   }
    // }
    // protected setResizeEvent():void {
    // console.log(this.renderer.listenGlobal('', Event.RESIZE));
    // if (this._isShown) {
    //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
    // } else {
    //   $(window).off(Event.RESIZE)
    // }
    // }
    ModalDirective.prototype.focusOtherModal = function () {
        if (this._element.nativeElement.parentElement == null)
            return;
        var otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[bsModal]');
        if (!otherOpenedModals.length) {
            return;
        }
        otherOpenedModals[otherOpenedModals.length - 1].focus();
    };
    /** @internal */
    ModalDirective.prototype.resetAdjustments = function () {
        this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
    };
    /** Scroll bar tricks */
    /** @internal */
    ModalDirective.prototype.checkScrollbar = function () {
        this.isBodyOverflowing = __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.clientWidth < __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* window */].innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    ModalDirective.prototype.setScrollbar = function () {
        if (!__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */]) {
            return;
        }
        this.originalBodyPadding = parseInt(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* window */]
            .getComputedStyle(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body)
            .getPropertyValue('padding-right') || 0, 10);
        if (this.isBodyOverflowing) {
            __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.style.paddingRight = this.originalBodyPadding +
                this.scrollbarWidth + "px";
        }
    };
    ModalDirective.prototype.resetScrollbar = function () {
        __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.style.paddingRight = this.originalBodyPadding + 'px';
    };
    // thx d.walsh
    ModalDirective.prototype.getScrollbarWidth = function () {
        var scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* CLASS_NAME */].SCROLLBAR_MEASURER);
        this._renderer.appendChild(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body, scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body, scrollDiv);
        return scrollbarWidth;
    };
    ModalDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[bsModal]',
                    exportAs: 'bs-modal'
                },] },
    ];
    /** @nocollapse */
    ModalDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_6__component_loader_component_loader_factory__["a" /* ComponentLoaderFactory */], },
    ]; };
    ModalDirective.propDecorators = {
        'config': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onShow': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click', ['$event'],] },],
        'onEsc': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keydown.esc', ['$event'],] },],
    };
    return ModalDirective;
}());

//# sourceMappingURL=modal.directive.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/modal/modal.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/modal-backdrop.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_directive__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/modal.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__positioning_index__ = __webpack_require__("./node_modules/ngx-bootstrap/positioning/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_loader_index__ = __webpack_require__("./node_modules/ngx-bootstrap/component-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_container_component__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/modal-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bs_modal_service__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/bs-modal.service.js");







var ModalModule = (function () {
    function ModalModule() {
    }
    ModalModule.forRoot = function () {
        return {
            ngModule: ModalModule,
            providers: [__WEBPACK_IMPORTED_MODULE_6__bs_modal_service__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_4__component_loader_index__["a" /* ComponentLoaderFactory */], __WEBPACK_IMPORTED_MODULE_3__positioning_index__["a" /* PositioningService */]]
        };
    };
    ModalModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__["a" /* ModalBackdropComponent */],
                        __WEBPACK_IMPORTED_MODULE_2__modal_directive__["a" /* ModalDirective */],
                        __WEBPACK_IMPORTED_MODULE_5__modal_container_component__["a" /* ModalContainerComponent */]
                    ],
                    exports: [__WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__["a" /* ModalBackdropComponent */], __WEBPACK_IMPORTED_MODULE_2__modal_directive__["a" /* ModalDirective */]],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__["a" /* ModalBackdropComponent */], __WEBPACK_IMPORTED_MODULE_5__modal_container_component__["a" /* ModalContainerComponent */]]
                },] },
    ];
    /** @nocollapse */
    ModalModule.ctorParameters = function () { return []; };
    return ModalModule;
}());

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ "./src/app/views/notifications/alerts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Bootstrap Alerts</strong>\r\n          <div class=\"card-header-actions\">\r\n            <a href=\"https://valor-software.com/ngx-bootstrap/#/alerts\" target=\"_blank\">\r\n              <small className=\"text-muted\">docs</small>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <alert type=\"success\">\r\n            <strong>Well done!</strong> You successfully read this important alert message.\r\n          </alert>\r\n          <alert type=\"info\">\r\n            <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\r\n          </alert>\r\n          <alert type=\"warning\">\r\n            <strong>Warning!</strong> Better check yourself, you're not looking too good.\r\n          </alert>\r\n          <alert type=\"danger\">\r\n            <strong>Oh snap!</strong> Change a few things up and try submitting again.\r\n          </alert>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Alerts</strong>\r\n          <small>link</small>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <alert type=\"success\">\r\n            <strong>Well done!</strong> You successfully read <a href=\"#\" class=\"alert-link\">this important alert message</a>.\r\n          </alert>\r\n          <alert type=\"info\">\r\n            <strong>Heads up!</strong> This <a href=\"#\" class=\"alert-link\">alert needs your attention</a>, but it's not super important.\r\n          </alert>\r\n          <alert type=\"warning\">\r\n            <strong>Warning!</strong> Better check yourself, you're <a href=\"#\" class=\"alert-link\">not looking too good</a>.\r\n          </alert>\r\n          <alert type=\"danger\">\r\n            <strong>Oh snap!</strong> <a href=\"#\" class=\"alert-link\">Change a few things up</a> and try submitting again.\r\n          </alert>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Alerts</strong> <small>additional content</small>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <alert type=\"success\">\r\n            <h4 class=\"alert-heading\">Well done!</h4>\r\n            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\r\n            <p class=\"mb-0\">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\r\n          </alert>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Alerts</strong> <small>dismissing</small>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div *ngFor=\"let alert of alerts\">\r\n            <alert [type]=\"alert.type\" [dismissible]=\"dismissible\">{{ alert.msg }}</alert>\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"dismissible = !dismissible\">Toggle dismissible</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\">Reset</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Alerts</strong> <small>dynamic html</small>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div *ngFor=\"let alert of alertsHtml\">\r\n            <alert [type]=\"alert.type\"><span [innerHtml]=\"alert.msg\"></span></alert>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Alerts</strong> <small>dynamic content</small>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <alert type=\"success\">{{messages[index]}}</alert>\r\n\r\n          <div *ngIf=\"index !== messages.length -1; else elseBlock\">\r\n            <button class=\"btn btn-primary\" (click)=\"changeText()\">Change text</button>\r\n          </div>\r\n          <ng-template #elseBlock>\r\n            <button class=\"btn btn-primary\" (click)=\"index = 0\">Reset</button>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Alerts</strong> <small>dismiss on timeout</small>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <alert type=\"success\" dismissOnTimeout=\"5000\">\r\n            <strong>Well done!</strong> You successfully read this important alert message.\r\n          </alert>\r\n\r\n          <p>If you missed alert on top of me, just press <code>Add more</code> button</p>\r\n          <div *ngFor=\"let alert of alertsDismiss\">\r\n            <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\">{{ alert.msg }}</alert>\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"add()\">Add more</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Alerts</strong> <small>global styling</small>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <style>\r\n            .alert-md-color {\r\n              background-color: #7B1FA2;\r\n              border-color: #4A148C;\r\n              color: #fff;\r\n            }\r\n          </style>\r\n          <alert type=\"md-color\">\r\n            <strong>Well done!</strong> You successfully read this important alert message.\r\n          </alert>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Alerts</strong> <small>component level styling</small>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <alert type=\"md-local\">\r\n            <strong>Well done!</strong> You successfully read this important alert message.\r\n          </alert>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Alerts</strong> <small>configuring defaults</small>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <alert>\r\n            <strong>Well done!</strong> You successfully read this important alert message.\r\n          </alert>\r\n          <alert type=\"info\">\r\n            <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\r\n          </alert>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/notifications/alerts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAlertConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_alert__ = __webpack_require__("./node_modules/ngx-bootstrap/alert/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// such override allows to keep some initial values
function getAlertConfig() {
    return Object.assign(new __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_alert__["a" /* AlertConfig */](), { type: 'success' });
}
var AlertsComponent = /** @class */ (function () {
    function AlertsComponent(sanitizer) {
        this.dismissible = true;
        this.alerts = [
            {
                type: 'success',
                msg: "You successfully read this important alert message."
            },
            {
                type: 'info',
                msg: "This alert needs your attention, but it's not super important."
            },
            {
                type: 'danger',
                msg: "Better check yourself, you're not looking too good."
            }
        ];
        this.alertsHtml = [
            {
                type: 'success',
                msg: "<strong>Well done!</strong> You successfully read this important alert message."
            },
            {
                type: 'info',
                msg: "<strong>Heads up!</strong> This alert needs your attention, but it's not super important."
            },
            {
                type: 'danger',
                msg: "<strong>Warning!</strong> Better check yourself, you're not looking too good."
            }
        ];
        this.index = 0;
        this.messages = [
            'You successfully read this important alert message.',
            'Now this text is different from what it was before. Go ahead and click the button one more time',
            'Well done! Click reset button and you\'ll see the first message'
        ];
        this.alertsDismiss = [];
        this.alertsHtml = this.alertsHtml.map(function (alert) { return ({
            type: alert.type,
            msg: sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SecurityContext"].HTML, alert.msg)
        }); });
    }
    AlertsComponent.prototype.reset = function () {
        this.alerts = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    };
    AlertsComponent.prototype.changeText = function () {
        if (this.messages.length - 1 !== this.index) {
            this.index++;
        }
    };
    AlertsComponent.prototype.add = function () {
        this.alertsDismiss.push({
            type: 'info',
            msg: "This alert will be closed in 5 seconds (added: " + new Date().toLocaleTimeString() + ")",
            timeout: 5000
        });
    };
    AlertsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/views/notifications/alerts.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [
                "\n  .alert-md-local {\n    background-color: #009688;\n    border-color: #00695C;\n    color: #fff;\n  }\n  "
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_alert__["a" /* AlertConfig */], useFactory: getAlertConfig }]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], AlertsComponent);
    return AlertsComponent;
}());



/***/ }),

/***/ "./src/app/views/notifications/badges.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-align-justify\"></i> Bootstrap Badges\r\n          <div class=\"card-header-actions\">\r\n            <a href=\"http://coreui.io/docs/components/bootstrap-badge/\" class=\"card-header-action\" target=\"_blank\">\r\n              <small class=\"text-muted\">docs</small>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h1>Example heading\r\n            <span class=\"badge badge-secondary\">New</span>\r\n          </h1>\r\n          <h2>Example heading\r\n            <span class=\"badge badge-secondary\">New</span>\r\n          </h2>\r\n          <h3>Example heading\r\n            <span class=\"badge badge-secondary\">New</span>\r\n          </h3>\r\n          <h4>Example heading\r\n            <span class=\"badge badge-secondary\">New</span>\r\n          </h4>\r\n          <h5>Example heading\r\n            <span class=\"badge badge-secondary\">New</span>\r\n          </h5>\r\n          <h6>Example heading\r\n            <span class=\"badge badge-secondary\">New</span>\r\n          </h6>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <button type=\"link\" class=\"btn btn-primary\">Notifications\r\n            <span class=\"badge badge-light badge-pill\" style=\"position: static;\">9</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-align-justify\"></i> Bootstrap Badges\r\n          <small>contextual variations</small>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <span class=\"badge badge-primary\">Primary</span>\r\n          <span class=\"badge badge-secondary\">Secondary</span>\r\n          <span class=\"badge badge-success\">Success</span>\r\n          <span class=\"badge badge-danger\">Danger</span>\r\n          <span class=\"badge badge-warning\">Warning</span>\r\n          <span class=\"badge badge-info\">Info</span>\r\n          <span class=\"badge badge-light\">Light</span>\r\n          <span class=\"badge badge-dark\">Dark</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-align-justify\"></i> Bootstrap Badges\r\n          <small>pill badges</small>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <span class=\"badge badge-pill badge-primary\">Primary</span>\r\n          <span class=\"badge badge-pill badge-secondary\">Secondary</span>\r\n          <span class=\"badge badge-pill badge-success\">Success</span>\r\n          <span class=\"badge badge-pill badge-danger\">Danger</span>\r\n          <span class=\"badge badge-pill badge-warning\">Warning</span>\r\n          <span class=\"badge badge-pill badge-info\">Info</span>\r\n          <span class=\"badge badge-pill badge-light\">Light</span>\r\n          <span class=\"badge badge-pill badge-dark\">Dark</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-align-justify\"></i> Bootstrap Badges\r\n          <small>links</small>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <a href=\"#\" class=\"badge badge-primary\">Primary</a>\r\n          <a href=\"#\" class=\"badge badge-secondary\">Secondary</a>\r\n          <a href=\"#\" class=\"badge badge-success\">Success</a>\r\n          <a href=\"#\" class=\"badge badge-danger\">Danger</a>\r\n          <a href=\"#\" class=\"badge badge-warning\">Warning</a>\r\n          <a href=\"#\" class=\"badge badge-info\">Info</a>\r\n          <a href=\"#\" class=\"badge badge-light\">Light</a>\r\n          <a href=\"#\" class=\"badge badge-dark\">Dark</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--/.row-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/notifications/badges.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BadgesComponent = /** @class */ (function () {
    function BadgesComponent() {
    }
    BadgesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/views/notifications/badges.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], BadgesComponent);
    return BadgesComponent;
}());



/***/ }),

/***/ "./src/app/views/notifications/modals.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-align-justify\"></i> Bootstrap Modals\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <!-- Button trigger modal -->\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"modal\" (click)=\"myModal.show()\">\r\n            Launch demo modal\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"modal\" (click)=\"largeModal.show()\">\r\n            Launch large modal\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"modal\" (click)=\"smallModal.show()\">\r\n            Launch small modal\r\n          </button>\r\n          <hr>\r\n          <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"primaryModal.show()\">\r\n            Primary modal\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" (click)=\"successModal.show()\">\r\n            Success modal\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-warning\" data-toggle=\"modal\" (click)=\"warningModal.show()\">\r\n            Warning modal\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" (click)=\"dangerModal.show()\">\r\n            Danger modal\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" (click)=\"infoModal.show()\">\r\n            Info modal\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n</div>\r\n\r\n<div bsModal #myModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Modal title</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"myModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>One fine body&hellip;</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"myModal.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<div bsModal #largeModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Modal title</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"largeModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>One fine body&hellip;</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"largeModal.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<div bsModal #smallModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Modal title</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"smallModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>One fine body&hellip;</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"smallModal.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n\r\n<div bsModal #primaryModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-primary\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Modal title</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"primaryModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>One fine body&hellip;</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"primaryModal.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-success\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Modal title</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"successModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>One fine body&hellip;</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"successModal.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-success\">Save changes</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n\r\n<div bsModal #warningModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-warning\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Modal title</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"warningModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>One fine body&hellip;</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"warningModal.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-warning\">Save changes</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<div bsModal #dangerModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-danger\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Modal title</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"dangerModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>One fine body&hellip;</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"dangerModal.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-danger\">Save changes</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<div bsModal #infoModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-info\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Modal title</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"infoModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>One fine body&hellip;</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"infoModal.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-info\">Save changes</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n"

/***/ }),

/***/ "./src/app/views/notifications/modals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ModalsComponent = /** @class */ (function () {
    function ModalsComponent() {
    }
    ModalsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/views/notifications/modals.component.html")
        })
    ], ModalsComponent);
    return ModalsComponent;
}());



/***/ }),

/***/ "./src/app/views/notifications/notifications-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alerts_component__ = __webpack_require__("./src/app/views/notifications/alerts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__badges_component__ = __webpack_require__("./src/app/views/notifications/badges.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_component__ = __webpack_require__("./src/app/views/notifications/modals.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        data: {
            title: 'Notifications'
        },
        children: [
            {
                path: 'alerts',
                component: __WEBPACK_IMPORTED_MODULE_2__alerts_component__["a" /* AlertsComponent */],
                data: {
                    title: 'Alerts'
                }
            },
            {
                path: 'badges',
                component: __WEBPACK_IMPORTED_MODULE_3__badges_component__["a" /* BadgesComponent */],
                data: {
                    title: 'Badges'
                }
            },
            {
                path: 'modals',
                component: __WEBPACK_IMPORTED_MODULE_4__modals_component__["a" /* ModalsComponent */],
                data: {
                    title: 'Modals'
                }
            }
        ]
    }
];
var NotificationsRoutingModule = /** @class */ (function () {
    function NotificationsRoutingModule() {
    }
    NotificationsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], NotificationsRoutingModule);
    return NotificationsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/notifications/notifications.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsModule", function() { return NotificationsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_alert__ = __webpack_require__("./node_modules/ngx-bootstrap/alert/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alerts_component__ = __webpack_require__("./src/app/views/notifications/alerts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__badges_component__ = __webpack_require__("./src/app/views/notifications/badges.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modals_component__ = __webpack_require__("./src/app/views/notifications/modals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notifications_routing_module__ = __webpack_require__("./src/app/views/notifications/notifications-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular


// Alert Component



// Modal Component


// Notifications Routing

var NotificationsModule = /** @class */ (function () {
    function NotificationsModule() {
    }
    NotificationsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__notifications_routing_module__["a" /* NotificationsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_alert__["b" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__alerts_component__["a" /* AlertsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__badges_component__["a" /* BadgesComponent */],
                __WEBPACK_IMPORTED_MODULE_6__modals_component__["a" /* ModalsComponent */]
            ]
        })
    ], NotificationsModule);
    return NotificationsModule;
}());



/***/ })

});
//# sourceMappingURL=notifications.module.chunk.js.map