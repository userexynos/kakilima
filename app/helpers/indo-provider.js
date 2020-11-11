export default check = (number) => {
    var providers = [
        {
            name: "Telkomsel",
            pattern: new RegExp(/^08(11|12|13|21|22|23|51|52|53)\d{1,8}$/)
        },
        {
            name: "Indosat",
            pattern: new RegExp(/^08(14|15|16|55|56|57|58)\d{1,8}$/)
        },
        {
            name: "XL",
            pattern: new RegExp(/^08(17|18|19|77|78)\d{1,8}$/)
        },
        {
            name: "Smartfren",
            pattern: new RegExp(/^08(81|82|83|84|85|86|87|88|89)\d{1,8}$/)
        },
        {
            name: "Tri",
            pattern: new RegExp(/^08(96|97|98|99|95)\d{1,10}$/)
        },
        {
            name: "AXIS",
            pattern: new RegExp(/^08(38|31|32|33)\d{1,8}$/)
        }
    ]
    var filter = providers.filter(item => item.pattern.test(number));
    
    if(filter.length) {
        return {
            check: true,
            name: filter[0].name
        }
    } else {
        return {
            check: false,
            name: null
        }
    }
}