function exec() {
    var endpoint = "http://localhost:3030/MyDataVehicule/sparql"
    var sparql = "PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#> SELECT ?vehicule ?lat ?long WHERE { ?vehicule geo:lat ?lat; geo:long ?long. } LIMIT 1000 "
    d3sparql.query(endpoint, sparql, render)
}
function render(json) {
    var config = {
        "var_lat": "lat",
        "var_lng": "long",
        "width": 960,
        "height": 480,
        "radius": 5,
        "color": "#55C25E",
        "topojson": "world-50m.json",
        "selector": "#result"
    }
    console.log(json)
    d3sparql.coordmap(json, config)
}
function exec_offline() {
    d3.json("cache/ebi/biosamples.json", render)

}
function toggle() {
    d3sparql.toggle()
}