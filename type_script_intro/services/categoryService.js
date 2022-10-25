var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var CategoryService = /** @class */ (function () {
    function CategoryService() {
        this.categories = [];
    }
    CategoryService.prototype.add = function (category) {
        this.categories.push(category);
    };
    CategoryService.prototype.getCategory = function () {
        return this.categories;
    };
    CategoryService.prototype.getByID = function (id) {
        var filteredCateg = this.categories.find(function (category) {
            return category.id == id;
        });
        return filteredCateg;
    };
    CategoryService.prototype.deleteById = function (id) {
        this.categories = this.categories.filter(function (category) {
            return category.id !== id;
        });
        return this.categories;
    };
    CategoryService.prototype.updateById = function (id) {
        var filteredCateg = this.categories.filter(function (category) {
            return category.id !== id;
        });
        return filteredCateg;
    };
    CategoryService.prototype.showUpdatedItem = function (id, isim) {
        var yeniCateg = this.categories.map(function (category) {
            return category.id == id ? __assign(__assign({}, category), { name: isim }) : category;
        });
        return yeniCateg;
    };
    return CategoryService;
}());
export { CategoryService };
