var ArrayUtilites;
(function (ArrayUtilites) {
    function reverseArray(array) {
        return array.slice(0).reverse();
    }
    ArrayUtilites.reverseArray = reverseArray;
    function lastItemOfArray(array) {
        return array.slice(0).pop();
    }
    ArrayUtilites.lastItemOfArray = lastItemOfArray;
    function firstItemOfArray(array) {
        return array.slice(0).shift();
    }
    ArrayUtilites.firstItemOfArray = firstItemOfArray;
    function concatenateArray(array1, array2) {
        return array1.concat(array2);
    }
    ArrayUtilites.concatenateArray = concatenateArray;
})(ArrayUtilites || (ArrayUtilites = {}));
