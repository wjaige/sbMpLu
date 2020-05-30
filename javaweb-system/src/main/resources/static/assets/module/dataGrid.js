/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/dataGrid.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dataGrid.js":
/*!*************************!*\
  !*** ./src/dataGrid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./js/dataGrid.js */ \"./src/js/dataGrid.js\");\n\n//# sourceURL=webpack:///./src/dataGrid.js?");

/***/ }),

/***/ "./src/js/dataGrid.js":
/*!****************************!*\
  !*** ./src/js/dataGrid.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** 数据列表组件 date:2020-05-04   License By http://easyweb.vip */\r\nlayui.define(['laytpl', 'laypage', 'form'], function (exports) {\r\n    var $ = layui.jquery;\r\n    var laytpl = layui.laytpl;\r\n    var laypage = layui.laypage;\r\n    var form = layui.form;\r\n    var MOD_NAME = 'DataGrid';\r\n    var loadingClass = 'ew-datagrid-loading';\r\n    var itemClass = 'ew-datagrid-item';\r\n    var loadMoreLoadingClass = 'ew-loading', loadMoreEndClass = 'ew-more-end';\r\n    // 默认分页参数\r\n    var defaultPage = {\r\n        limit: 10, layout: ['prev', 'page', 'next', 'skip', 'count', 'limit']\r\n    };\r\n    // 默认加载更多参数\r\n    var defaultMore = {\r\n        first: true, curr: 1, limit: 10, text: '加载更多', loadingText: '加载中...',\r\n        noMoreText: '没有更多数据了~', errorText: '加载失败，请重试'\r\n    };\r\n\r\n    /** DataGrid构造方法 */\r\n    var DataGrid = function (opt) {\r\n        // 配置项\r\n        this.options = $.extend(true, {\r\n            method: 'GET', request: {pageName: 'page', limitName: 'limit'}, useAdmin: false,\r\n            showError: function (res) {\r\n                $(this.elem).empty();\r\n            },\r\n            showEmpty: function (res) {\r\n                $(this.elem).empty();\r\n            },\r\n            showLoading: function () {\r\n                $(this.elem).addClass(loadingClass);\r\n            },\r\n            hideLoading: function () {\r\n                $(this.elem).removeClass(loadingClass);\r\n            }\r\n        }, opt);\r\n        if (opt.page) this.options.page = $.extend({}, defaultPage, opt.page === true ? {} : opt.page);\r\n        if (opt.loadMore) this.options.loadMore = $.extend({}, defaultMore, opt.loadMore === true ? {} : opt.loadMore);\r\n        // 兼容旧版本参数\r\n        if (typeof this.options.data === 'string') {\r\n            this.options.url = this.options.data;\r\n            this.options.data = undefined;\r\n        }\r\n        this.init();  // 初始化\r\n        this.bindEvents();  // 绑定事件\r\n    };\r\n\r\n    /** 初始化 */\r\n    DataGrid.prototype.init = function () {\r\n        var that = this;\r\n        var options = this.options;\r\n        var components = this.getComponents();\r\n        if ('static' === components.$elem.css('position')) components.$elem.css('position', 'relative');\r\n        // 渲染全选按钮\r\n        if (options.checkAllElem) {\r\n            var $old = components.$checkAll.find('input[lay-filter=\"' + components.checkAllFilter + '\"]');\r\n            $old.next('.layui-form-checkbox').remove();\r\n            $old.remove();\r\n            components.$checkAll.append([\r\n                '<input type=\"checkbox\"',\r\n                ' lay-filter=\"', components.checkAllFilter, '\"',\r\n                ' lay-skin=\"primary\" class=\"ew-datagrid-checkbox\" />'\r\n            ].join(''));\r\n            if (!components.$checkAll.hasClass('layui-form')) components.$checkAll.addClass('layui-form');\r\n            if (!components.$checkAll.attr('lay-filter')) components.$checkAll.attr('lay-filter', options.checkAllElem.substring(1));\r\n            form.render('checkbox', components.$checkAll.attr('lay-filter'));\r\n        }\r\n        // 渲染数据\r\n        if (options.url) {  // url加载模式\r\n            options.reqData = function (param, callback) {\r\n                if (!options.where) options.where = {};\r\n                options.where[options.request.pageName] = param.page;\r\n                options.where[options.request.limitName] = param.limit;\r\n                (options.useAdmin ? layui.admin : $).ajax({\r\n                    url: options.url,\r\n                    data: options.contentType && options.contentType.indexOf('application/json') === 0 ? JSON.stringify(options.where) : options.where,\r\n                    headers: options.headers,\r\n                    type: options.method,\r\n                    dataType: 'json',\r\n                    contentType: options.contentType,\r\n                    success: function (res) {\r\n                        callback(options.parseData ? options.parseData(res) : res);\r\n                    },\r\n                    error: function (xhr) {\r\n                        callback({code: xhr.status, msg: xhr.statusText, xhr: xhr});\r\n                    }\r\n                });\r\n            };\r\n        } else if (options.data) {  // 数据渲染模式\r\n            options.reqData = undefined;\r\n            if (options.loadMore) {  // 开启加载更多\r\n                that.renderLoadMore();\r\n                that.changeLoadMore(2);\r\n                that.renderBody(options.data, 0, false, true);\r\n                options.done && options.done(options.data, 1, options.data.length);\r\n            } else if (options.page) {  // 开启分页\r\n                options.page.count = options.data.length;\r\n                options.page.jump = function (obj, first) {\r\n                    options.showLoading();\r\n                    var start = (obj.curr - 1) * options.page.limit;\r\n                    var end = start + options.page.limit;\r\n                    if (end > options.data.length) end = options.data.length;\r\n                    var currData = [];\r\n                    for (var i = start; i < end; i++) currData.push(options.data[i]);\r\n                    options.page.data = currData;\r\n                    that.renderBody(currData, (obj.curr - 1) * obj.limit, false, true);\r\n                    options.hideLoading();\r\n                    if (options.data.length === 0) options.showEmpty && options.showEmpty({});\r\n                    options.done && options.done(currData, obj.curr, obj.count);\r\n                };\r\n                that.renderPage();\r\n            } else {  // 不分页\r\n                that.renderBody(options.data, 0, false, true);\r\n                if (options.data.length === 0) options.showEmpty && options.showEmpty({});\r\n                options.done && options.done(options.data, 1, options.data.length);\r\n            }\r\n        }\r\n        // 异步加载模式\r\n        if (!options.reqData) return;\r\n        if (options.loadMore) {  // 加载更多模式\r\n            that.renderLoadMore().click(function () {\r\n                if ($(this).hasClass(loadMoreLoadingClass)) return;\r\n                if (options.loadMore.first) options.loadMore.first = false;\r\n                else options.loadMore.curr++;\r\n                that.changeLoadMore(1);  // 设置加载中状态\r\n                options.reqData({page: options.loadMore.curr, limit: options.loadMore.limit}, function (res) {\r\n                    if (res.code != 0) {\r\n                        that.changeLoadMore(3);  // 加载失败\r\n                        options.loadMore.curr--;\r\n                        return;\r\n                    }\r\n                    that.changeLoadMore(0);  // 加载成功\r\n                    that.renderBody(res.data, (options.loadMore.curr - 1) * options.loadMore.limit, options.loadMore.curr !== 1);\r\n                    options.done && options.done(res.data, options.loadMore.curr, res.count || res.data.length);\r\n                    if (!res.data || res.data.length < options.loadMore.limit) that.changeLoadMore(2);  // 没有更多数据\r\n                });\r\n            }).trigger('click');\r\n        } else if (options.page) {  // 分页模式\r\n            options.showLoading();\r\n            options.reqData({page: 1, limit: options.page.limit}, function (res) {\r\n                options.hideLoading();\r\n                if (typeof res === 'string' || !res.data) return options.showError && options.showError(res);  // 加载失败\r\n                if (res.data.length === 0) return options.showEmpty && options.showEmpty(res);  // 空数据\r\n                options.page.count = res.count;\r\n                options.page.jump = function (obj, first) {\r\n                    if (first) return;\r\n                    options.showLoading();\r\n                    options.reqData({page: obj.curr, limit: obj.limit}, function (r) {\r\n                        options.hideLoading();\r\n                        if (typeof r === 'string' || !r.data) return options.showError && options.showError(r);  // 加载失败\r\n                        if (r.data.length === 0) return options.showEmpty && options.showEmpty(r);  // 空数据\r\n                        that.renderBody(r.data, (obj.curr - 1) * obj.limit);\r\n                        options.done && options.done(r.data, obj.curr, obj.count);\r\n                    });\r\n                };\r\n                that.renderPage();\r\n                that.renderBody(res.data);\r\n                options.done && options.done(res.data, 1, res.count);\r\n            });\r\n        } else {  // 不分页\r\n            options.showLoading();\r\n            options.reqData({}, function (res) {\r\n                options.hideLoading();\r\n                if (res.code != 0) return options.showError && options.showError(res);  // 加载失败\r\n                if (!res.data || res.data.length === 0) return options.showEmpty && options.showEmpty(res);  // 空数据\r\n                that.renderBody(res.data);\r\n                options.done && options.done(res.data, 1, res.data.length);\r\n            });\r\n        }\r\n    };\r\n\r\n    /** 绑定各项事件 */\r\n    DataGrid.prototype.bindEvents = function () {\r\n        var that = this;\r\n        var components = this.getComponents();\r\n\r\n        /* 事件公共返回对象 */\r\n        var commonMember = function (ext) {\r\n            var $item = $(this);\r\n            if (!$item.hasClass(itemClass)) {\r\n                var $temp = $item.parent('.' + itemClass);\r\n                $item = $temp.length > 0 ? $temp : $item.parentsUntil('.' + itemClass).last().parent();\r\n            }\r\n            var index = $item.data('index');\r\n            var obj = {\r\n                elem: $item,  // 当前item的dom\r\n                data: that.getData(index), //当前item的数据\r\n                index: index,  // 当前item索引\r\n                del: function () { // 删除item\r\n                    that.del(index);\r\n                },\r\n                update: function (fields, type) {  // 修改item\r\n                    that.update(index, fields, type);\r\n                }\r\n            };\r\n            return $.extend(obj, ext);\r\n        };\r\n\r\n        // item点击事件\r\n        components.$elem.off('click.item').on('click.item', '>.' + itemClass, function () {\r\n            layui.event.call(this, MOD_NAME, 'item(' + components.filter + ')', commonMember.call(this, {}));\r\n        });\r\n\r\n        // item双击事件\r\n        components.$elem.off('dblclick.itemDouble').on('click.itemDouble', '>.' + itemClass, function () {\r\n            layui.event.call(this, MOD_NAME, 'itemDouble(' + components.filter + ')', commonMember.call(this, {}));\r\n        });\r\n\r\n        // lay-event点击事件\r\n        components.$elem.off('click.tool').on('click.tool', '[lay-event]', function (e) {\r\n            layui.stope(e);\r\n            var $this = $(this);\r\n            layui.event.call(this, MOD_NAME, 'tool(' + components.filter + ')', commonMember.call(this, {\r\n                event: $this.attr('lay-event')\r\n            }));\r\n        });\r\n\r\n        // 绑定单选框事件\r\n        form.on('radio(' + components.radioFilter + ')', function (data) {\r\n            var d = that.getData(data.value);\r\n            d.LAY_CHECKED = true;  // 同时更新数据\r\n            layui.event.call(this, MOD_NAME, 'checkbox(' + components.filter + ')', {checked: true, data: d});\r\n        });\r\n\r\n        // 绑定复选框事件\r\n        form.on('checkbox(' + components.checkboxFilter + ')', function (data) {\r\n            var checked = data.elem.checked;\r\n            var d = that.getData(data.value);\r\n            d.LAY_CHECKED = checked;  // 同时更新数据\r\n            that.checkChooseAllCB();  // 联动全选按钮\r\n            layui.event.call(this, MOD_NAME, 'checkbox(' + components.filter + ')', {checked: checked, data: d});\r\n        });\r\n\r\n        // 绑定全选框事件\r\n        form.on('checkbox(' + components.checkAllFilter + ')', function (data) {\r\n            var checked = data.elem.checked;\r\n            var $cb = $(data.elem);\r\n            var $layCb = $cb.next('.layui-form-checkbox');\r\n            // 如果数据为空不能选中\r\n            if (!that.options.data || that.options.data.length <= 0) {\r\n                $cb.prop('checked', false);\r\n                $layCb.removeClass('layui-form-checked');\r\n                return;\r\n            }\r\n            // 联动操作\r\n            components.$elem.find('input[name=\"' + components.checkboxFilter + '\"]').each(function () {\r\n                var $this = $(this);\r\n                $this.prop('checked', checked);\r\n                var $temp = $this.next('.layui-form-checkbox');\r\n                if (checked) $temp.addClass('layui-form-checked');\r\n                else $temp.removeClass('layui-form-checked');\r\n            });\r\n            // 同步数据\r\n            for (var i = 0; i < that.options.data.length; i++) that.options.data[i].LAY_CHECKED = checked;\r\n            layui.event.call(this, MOD_NAME, 'checkbox(' + components.filter + ')', {checked: checked, type: 'all'});\r\n        });\r\n\r\n    };\r\n\r\n    /** 获取各个组件 */\r\n    DataGrid.prototype.getComponents = function () {\r\n        var that = this;\r\n        var $elem = $(that.options.elem);\r\n        var filter = $elem.attr('lay-filter');\r\n        if (!filter) {\r\n            filter = that.options.elem.substring(1);\r\n            $elem.attr('lay-filter', filter);\r\n        }\r\n        return {\r\n            $elem: $elem,  // 容器\r\n            templetHtml: $(that.options.templet).html(),  // 模板内容\r\n            $page: that.options.page && that.options.page.elem ? $('#' + that.options.page.elem) : undefined,  // 分页组件\r\n            $loadMore: that.options.loadMore && that.options.loadMore.elem ? $('#' + that.options.loadMore.elem) : undefined,  // 加载更多组件\r\n            filter: filter,  // 容器的lay-filter\r\n            checkboxFilter: 'ew_tb_checkbox_' + filter,  // 复选框的lay-filter\r\n            radioFilter: 'ew_tb_radio_' + filter,  // 单选框的lay-filter\r\n            checkAllFilter: 'ew_tb_checkbox_all_' + filter,  // 全选框的lay-filter\r\n            $checkAll: $(that.options.checkAllElem)  // 全选框组件\r\n        };\r\n    };\r\n\r\n    /**\r\n     * 渲染主体部分\r\n     * @param data 数据\r\n     * @param number 起始索引\r\n     * @param append 是否是追加模式\r\n     * @param ncd 是否不改变options的data\r\n     */\r\n    DataGrid.prototype.renderBody = function (data, number, append, ncd) {\r\n        if (!data) data = [];\r\n        var options = this.options;\r\n        var components = this.getComponents();\r\n        if (!number) number = 0;\r\n        var html = [];\r\n        for (var i = 0; i < data.length; i++) {\r\n            var d = data[i];\r\n            d.LAY_INDEX = i;\r\n            d.LAY_NUMBER = i + number + 1;\r\n            d.LAY_CHECKBOX_ELEM = [\r\n                '<input type=\"checkbox\" lay-skin=\"primary\"',\r\n                ' name=\"', components.checkboxFilter, '\"',\r\n                ' lay-filter=\"', components.checkboxFilter, '\"',\r\n                d.LAY_CHECKED ? ' checked=\"checked\"' : '',\r\n                ' class=\"ew-datagrid-checkbox\"',\r\n                ' value=\"' + i + '\" />'\r\n            ].join('');\r\n            d.LAY_RADIO_ELEM = [\r\n                '<input type=\"radio\"',\r\n                ' name=\"', components.radioFilter, '\"',\r\n                ' lay-filter=\"', components.radioFilter, '\"',\r\n                d.LAY_CHECKED ? ' checked=\"checked\"' : '',\r\n                ' class=\"ew-datagrid-radio\"',\r\n                ' value=\"', i, '\" />'\r\n            ].join('');\r\n            if (components.templetHtml === undefined) return console.error('DataGrid Error: Template [' + options.templet + '] not found');\r\n            laytpl(components.templetHtml).render(d, function (r) {\r\n                html.push(r);\r\n            });\r\n        }\r\n        if (append) {\r\n            if (!ncd) options.data = options.data.concat(data);\r\n            components.$elem.append(html.join(''));\r\n        } else {\r\n            if (!ncd) options.data = data;\r\n            components.$elem.html(html.join(''));\r\n        }\r\n        this.initChildren(number);\r\n        form.render('checkbox', components.filter);\r\n        form.render('radio', components.filter);\r\n        this.checkChooseAllCB();  // 联动全选按钮\r\n    };\r\n\r\n    /** 为所有item设置一些初始属性 */\r\n    DataGrid.prototype.initChildren = function (number) {\r\n        if (!number || !(this.options.page && this.options.page.data)) number = 0;\r\n        this.getComponents().$elem.children().each(function (index) {\r\n            var $this = $(this);\r\n            $this.attr('data-index', index);\r\n            $this.attr('data-number', index + number + 1);\r\n            $this.addClass(itemClass);\r\n        });\r\n    };\r\n\r\n    /** 渲染分页组件 */\r\n    DataGrid.prototype.renderPage = function () {\r\n        var options = this.options;\r\n        var components = this.getComponents();\r\n        components.$elem.next('.ew-datagrid-page,.ew-datagrid-loadmore').remove();\r\n        options.page.elem = 'ew-datagrid-page-' + options.elem.substring(1);  // 生成id\r\n        components.$elem.after('<div class=\"ew-datagrid-page ' + (options.page['class'] || '') + '\" id=\"' + options.page.elem + '\"></div>');\r\n        laypage.render(options.page);\r\n    };\r\n\r\n    /** 渲染加载更多组件 */\r\n    DataGrid.prototype.renderLoadMore = function () {\r\n        var options = this.options;\r\n        var components = this.getComponents();\r\n        components.$elem.next('.ew-datagrid-page,.ew-datagrid-loadmore').remove();\r\n        options.loadMore.elem = 'ew-datagrid-page-' + options.elem.substring(1);  // 生成id\r\n        components.$elem.after([\r\n            '<div id=\"', options.loadMore.elem, '\" ', 'class=\"ew-datagrid-loadmore ', options.loadMore['class'] || '', '\">',\r\n            '   <div>',\r\n            '      <span class=\"ew-icon-loading\">',\r\n            '         <i class=\"layui-icon layui-icon-loading-1 layui-anim layui-anim-rotate layui-anim-loop\"></i>',\r\n            '      </span>',\r\n            '      <span class=\"ew-loadmore-text\">', options.loadMore.text, '</span>',\r\n            '   </div>',\r\n            '</div>'].join(''));\r\n        return components.$elem.next();\r\n    };\r\n\r\n    /**\r\n     * 更改loadMore状态\r\n     * @param state 0正常、1加载中、2没有更多数据、3加载失败\r\n     */\r\n    DataGrid.prototype.changeLoadMore = function (state) {\r\n        var options = this.options;\r\n        var components = this.getComponents();\r\n        var $loadMoreText = components.$loadMore.find('.ew-loadmore-text');\r\n        components.$loadMore.removeClass(loadMoreLoadingClass + ' ' + loadMoreEndClass);\r\n        if (state === 0) {\r\n            $loadMoreText.html(options.loadMore.text);\r\n        } else if (state === 1) {\r\n            $loadMoreText.html(options.loadMore.loadingText);\r\n            components.$loadMore.addClass(loadMoreLoadingClass);\r\n        } else if (state === 2) {\r\n            $loadMoreText.html(options.loadMore.noMoreText);\r\n            components.$loadMore.addClass(loadMoreEndClass);\r\n        } else {\r\n            $loadMoreText.html(options.loadMore.errorText);\r\n        }\r\n    };\r\n\r\n    /**\r\n     * 修改item\r\n     * @param index 索引\r\n     * @param fields 修改的字段和值\r\n     * @param type 0整个item更新,1只更新item子元素,2只更新数据不更新item\r\n     */\r\n    DataGrid.prototype.update = function (index, fields, type) {\r\n        var that = this;\r\n        var components = this.getComponents();\r\n        var $item = components.$elem.children('[data-index=\"' + index + '\"]');\r\n        var number = $item.data('number');\r\n        if (number - index !== 1) $.extend(true, this.options.data[number - 1], fields);\r\n        else $.extend(true, this.options.data[index], fields);\r\n        if (2 === type) return;\r\n        laytpl(components.templetHtml).render(that.getData(index), function (html) {\r\n            if (type === 1) return $item.html($(html).html());\r\n            $item.before(html).remove();\r\n            that.initChildren(number - index - 1);\r\n        });\r\n    };\r\n\r\n    /** 删除item */\r\n    DataGrid.prototype.del = function (index) {\r\n        var components = this.getComponents();\r\n        var $item = components.$elem.children('[data-index=\"' + index + '\"]');\r\n        var number = $item.data('number');\r\n        $item.remove();\r\n        if (number - index !== 1) this.options.data.splice(number - 1, 1);\r\n        else this.options.data.splice(index, 1);\r\n        this.initChildren(number - index - 1);\r\n    };\r\n\r\n    /** 获取数据 */\r\n    DataGrid.prototype.getData = function (index) {\r\n        if (index === undefined) return this.options.data;\r\n        var components = this.getComponents();\r\n        var $item = components.$elem.children('[data-index=\"' + index + '\"]');\r\n        var number = $item.data('number');\r\n        if (number - index !== 1) return this.options.data[number - 1];\r\n        return this.options.data[index];\r\n    };\r\n\r\n    /** 获取选中行 */\r\n    DataGrid.prototype.checkStatus = function () {\r\n        var that = this;\r\n        var components = this.getComponents();\r\n        var checkboxFilter = components.checkboxFilter;\r\n        var radioFilter = components.radioFilter;\r\n        var list = [];\r\n        // 获取单选框选中数据\r\n        var $radio = components.$elem.find('input[name=\"' + radioFilter + '\"]');\r\n        if ($radio.length > 0) {\r\n            var index = $radio.filter(':checked').val();\r\n            if (index !== undefined) {\r\n                var d = that.getData(index);\r\n                if (d) list.push(d);\r\n            }\r\n        } else {  // 获取复选框数据\r\n            components.$elem.find('input[name=\"' + checkboxFilter + '\"]:checked').each(function () {\r\n                var index = $(this).val();\r\n                if (index !== undefined) {\r\n                    var d = that.getData(index);\r\n                    if (d) list.push(d);\r\n                }\r\n            });\r\n        }\r\n        return list;\r\n    };\r\n\r\n    /** 检查全选框状态 */\r\n    DataGrid.prototype.checkChooseAllCB = function () {\r\n        var components = this.getComponents();\r\n        var $cbAll = components.$checkAll.find('input[lay-filter=\"' + components.checkAllFilter + '\"]');\r\n        var isCheckAll = this.options.data.length !== 0;\r\n        for (var i = 0; i < this.options.data.length; i++) {\r\n            if (!this.options.data[i].LAY_CHECKED) {\r\n                isCheckAll = false;\r\n                break;\r\n            }\r\n        }\r\n        if (isCheckAll) {\r\n            $cbAll.prop('checked', true);\r\n            $cbAll.next('.layui-form-checkbox').addClass('layui-form-checked');\r\n        } else {\r\n            $cbAll.prop('checked', false);\r\n            $cbAll.next('.layui-form-checkbox').removeClass('layui-form-checked');\r\n        }\r\n    };\r\n\r\n    /** 重载(不会抖动) */\r\n    DataGrid.prototype.reload = function (opt) {\r\n        if (opt) {\r\n            if (opt.page) {\r\n                if (this.options.page) opt.page = $.extend({}, this.options.page, opt.page);\r\n                else opt.page = $.extend({}, defaultPage, opt.page);\r\n                if (this.options.loadMore) this.options.loadMore = undefined;\r\n            } else if (opt.loadMore) {\r\n                if (this.options.loadMore) opt.loadMore = $.extend({}, this.options.loadMore,\r\n                    opt.loadMore, {first: true, curr: 1});\r\n                else opt.loadMore = $.extend({}, defaultMore, opt.loadMore);\r\n                if (this.options.page) this.options.page = undefined;\r\n            }\r\n            $.extend(true, this.options, opt);\r\n        }\r\n        this.init();\r\n    };\r\n\r\n    /** 解析lay-data数据 */\r\n    function parseAttrData(data) {\r\n        if (!data) return;\r\n        try {\r\n            return new Function('return ' + data)();\r\n        } catch (e) {\r\n            console.error('element property data- configuration item has a syntax error: ' + data);\r\n        }\r\n    }\r\n\r\n    /** 外部方法 */\r\n    var dg = {\r\n        /* 渲染 */\r\n        render: function (options) {\r\n            // 绑定事件兼容旧版本\r\n            if (options.onItemClick) dg.onItemClick(options.elem, options.onItemClick);\r\n            if (options.onToolBarClick) dg.onToolBarClick(options.elem, options.onToolBarClick);\r\n            return new DataGrid(options);\r\n        },\r\n        /* 事件监听 */\r\n        on: function (events, callback) {\r\n            return layui.onevent.call(this, MOD_NAME, events, callback);\r\n        },\r\n        /* 兼容旧版本 */\r\n        onItemClick: function (id, callback) {\r\n            if (id.indexOf('#') === 0) id = id.substring(1);\r\n            return dg.on('item(' + id + ')', callback);\r\n        },\r\n        onToolBarClick: function (id, callback) {\r\n            if (id.indexOf('#') === 0) id = id.substring(1);\r\n            return dg.on('tool(' + id + ')', callback);\r\n        }\r\n    };\r\n\r\n    /** 自动渲染 */\r\n    dg.autoRender = function (elem) {\r\n        $(elem || '[data-grid]').each(function () {\r\n            try {\r\n                // 获取或补充容器id\r\n                var $this = $(this);\r\n                var elem = $this.attr('id');\r\n                if (!elem) {\r\n                    elem = 'ew-datagrid-' + ($('[id^=\"ew-datagrid-\"]').length + 1);\r\n                    $this.attr('id', elem);\r\n                }\r\n                // 初始化模板\r\n                var $tpl = $this.children('[data-grid-tpl]');\r\n                if ($tpl.length > 0) {\r\n                    $tpl.attr('id', elem + '-tpl');\r\n                    $this.after($tpl);\r\n                    // 获取参数\r\n                    var options = parseAttrData($this.attr('lay-data'));\r\n                    options.elem = '#' + elem;\r\n                    options.templet = '#' + elem + '-tpl';\r\n                    dg.render(options);\r\n                }\r\n            } catch (e) {\r\n                console.error(e);\r\n            }\r\n        });\r\n    };\r\n    dg.autoRender();\r\n\r\n    /** css样式 */\r\n    $('head').append([\r\n        '<style id=\"ew-css-datagrid\">',\r\n        '.ew-datagrid-loadmore, .ew-datagrid-page {',\r\n        '    text-align: center;',\r\n        '}',\r\n        '.ew-datagrid-loadmore {',\r\n        '    color: #666;',\r\n        '    cursor: pointer;',\r\n        '}',\r\n        '.ew-datagrid-loadmore > div {',\r\n        '    padding: 12px;',\r\n        '}',\r\n        '.ew-datagrid-loadmore > div:hover {',\r\n        '    background-color: rgba(0, 0, 0, .03);',\r\n        '}',\r\n        '.ew-datagrid-loadmore .ew-icon-loading {',\r\n        '    margin-right: 6px;',\r\n        '    display: none;',\r\n        '}',\r\n        '.ew-datagrid-loadmore.', loadMoreEndClass, ' {',\r\n        '    pointer-events: none;',\r\n        '}',\r\n        '.ew-datagrid-loadmore.', loadMoreLoadingClass, ' .ew-icon-loading {',\r\n        '    display: inline;',\r\n        '}',\r\n        '.', loadingClass, ':before {',\r\n        '    content: \"\\\\e63d\";',\r\n        '    font-family: layui-icon !important;',\r\n        '    font-size: 32px;',\r\n        '    color: #C3C3C3;',\r\n        '    position: absolute;',\r\n        '    left: 50%;',\r\n        '    top: 50%;',\r\n        '    margin-left: -16px;',\r\n        '    margin-top: -16px;',\r\n        '    z-index: 999;',\r\n        '    -webkit-animatione: layui-rotate 1s linear;',\r\n        '    animation: layui-rotate 1s linear;',\r\n        '    -webkit-animation-iteration-count: infinite;',\r\n        '    animation-iteration-count: infinite;',\r\n        '}',\r\n        '.ew-datagrid-checkbox + .layui-form-checkbox {',\r\n        '   padding-left: 18px;',\r\n        '}',\r\n        '.ew-datagrid-radio + .layui-form-radio {',\r\n        '   margin: 0;',\r\n        '   padding: 0;',\r\n        '   line-height: 22px;',\r\n        '}',\r\n        '.ew-datagrid-radio + .layui-form-radio .layui-icon {',\r\n        '   margin-right: 0;',\r\n        '}',\r\n        '</style>'].join('')\r\n    );\r\n\r\n    exports('dataGrid', dg);\r\n});\n\n//# sourceURL=webpack:///./src/js/dataGrid.js?");

/***/ })

/******/ });