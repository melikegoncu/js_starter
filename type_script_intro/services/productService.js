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
var ProductService = /** @class */ (function () {
    function ProductService() {
        this.products = [];
    }
    ProductService.prototype.add = function (product) {
        this.products.push(product);
    };
    ProductService.prototype.getProduct = function () {
        return this.products;
    };
    ProductService.prototype.getByID = function (id) {
        var filteredProduct = this.products.find(function (product) {
            return product.id == id;
        });
        return filteredProduct;
    };
    ProductService.prototype.deleteById = function (id) {
        this.products = this.products.filter(function (product) {
            return product.id !== id;
        });
        return this.products;
    };
    ProductService.prototype.updateById = function (id) {
        var filteredProduct = this.products.filter(function (product) {
            return product.id !== id;
        });
        return filteredProduct;
    };
    ProductService.prototype.showUpdatedItem = function (id, isim) {
        var yeniPro = this.products.map(function (product) {
            return product.id == id ? __assign(__assign({}, product), { name: isim }) : product;
        });
        return yeniPro;
    };
    return ProductService;
}());
export { ProductService };
