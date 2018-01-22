var app = new Vue({
    el: '#app',
    data: {
        stops: [],
    },
    mounted: function () {

    },
    methods : {
        setStops : function(json) {
            this.stops=json;
        }}

})

function exec() {
    /* Uncomment to see debug information in console */
    d3sparql.debug = true
    var endpoint = d3.select("#endpoint").property("value")
    var sparql = d3.select("#sparql").property("value")
    d3sparql.query(endpoint, sparql, render)
}
function render(json) {
    /* set options and call the d3spraql.xxxxx function in this library ... */
    var config = {
        "selector": "#result"
    }
//d3sparql.htmltable(json, config)
    app.setStops(json.results.bindings)
}

//search bar
function myFunction() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
