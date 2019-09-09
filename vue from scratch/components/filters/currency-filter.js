Vue.filter('currency-filter',(value,currency)=> {
    return `${value}${currency}`;
});