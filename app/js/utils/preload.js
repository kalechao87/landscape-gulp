var Preload = function (a, b) {
    var c = b || {};
    this.source = a,
    this.count = 0,
    this.total = a.length,
    this.onload = c.onload,
    this.prefix = c.prefix || "",
    this.init();
};

Preload.prototype.init = function () {
    var a = this;
    a.source.forEach(function (b) {
        var c = b.replace(/[#\?].*$/, '').substr(b.lastIndexOf(".") + 1).toLowerCase(),
            d = a.prefix + b;

        switch (c) {
            case "js":
                a.script.call(a, d);
                break;
            case "css":
                a.stylesheet.call(a, d);
                break;
            case "svg":
            case "jpg":
            case "gif":
            case "png":
            case "jpeg":
                a.image.call(a, d);
                break;
        }
    })
},
Preload.prototype.getProgress = function () {
    return Math.round(this.count / this.total * 100);
},
Preload.prototype.image = function (a) {
    var b = document.createElement("img");
    this.load(b, a),
    b.src = a
},
Preload.prototype.stylesheet = function (a) {
    var b = document.createElement("link");
    this.load(b, a),
    b.rel = "stylesheet",
    b.type = "text/css",
    b.href = a,
    document.head.appendChild(b)
},
Preload.prototype.script = function (a) {
    var b = document.createElement("script");
    this.load(b, a),
    b.type = "text/javascript",
    b.src = a,
    document.head.appendChild(b)
},
Preload.prototype.load = function (a, b) {
    var c = this;
    a.onload = a.onerror = a.onabort = function (a) {
        c.onload && c.onload({
            count: ++c.count,
            total: c.total,
            item: b,
            type: a.type
        })
    }
};

/*
var resources = [

]

new Preload(resources, {
    onload: function (load) {
        var count = load.count, total = load.total, percent = Math.ceil(100 * count / total)
        console.log(count);
        // DOM变化
        // Load complete
        if (count == total) {

        }
    }
})
*/
