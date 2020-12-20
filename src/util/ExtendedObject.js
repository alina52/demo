export const formatURL = (url, ...params) => {
    var res = url;
    if (params && params.forEach) {
        var i = 0;
        params.forEach(
            p =>
                (res = res.replace(
                    new RegExp("\\{" + i++ + "\\}", "g"),
                    encodeURIComponent(p)
                ))
        );
    }
    return res;
}

export const bind = parentObject => {
    if (!parentObject) {
        parentObject = Object;
    }
    parentObject.formatURL = formatURL;
}