import { object } from "prop-types";

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



export const isPrimitive = test => {
    return test !== Object(test)
}

export const deepCopy = object => {
    if(isPrimitive(object)) {
        return object;
    }
    var deepCopiedObject = null
    if(Array.isArray(object)) {
        deepCopiedObject = object.slice(0)
    }else {
        deepCopiedObject = Object.assign({}, object)
    }

    for (var props in object) {
        if (object.hasOwnProperty(props)) {
            deepCopiedObject[props] = deepCopy(object[props])
        }
    }

    return deepCopiedObject
}

export const bind = parentObject => {
    if (!parentObject) {
        parentObject = Object;
    }
    parentObject.formatURL = formatURL;
    parentObject.deepCopy = deepCopy;
    parentObject.isPrimitive = isPrimitive;
}