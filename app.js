var color = ["#222f3e","#f368ae", "#03045E", "#00B4D8", "#C0A080", , "#ED5EDD", "#EFEFEF", , "#2666CF", "#F5F2E7", , "#F76E11", "#8A39E1", , "#EDCDBB", "#FA4EAB"];

var i = 0;
document.querySelector("button").addEventListener("click",
function(){
    i = i < color.length ? ++i : 0;
    document.querySelector("body").style.background = color[i]
})
