let valuePercentage = document.querySelector('.percentage');
let barPercentage = document.querySelector('input[type="range"]');
let colors = document.querySelectorAll('input[type="color"]');
let selectTypes = document.querySelector('select[name="types"]');
let inputText = document.querySelector('input[type="text"]');

        
let types = [position_GradientHeatMap.top,
             position_GradientHeatMap.right,
             position_GradientHeatMap.left,
             position_GradientHeatMap.bottom,
             position_GradientHeatMap.top_right,
             position_GradientHeatMap.top_left,
             position_GradientHeatMap.bottom_right,
             position_GradientHeatMap.bottom_left];

valuePercentage.innerHTML = barPercentage.value;

for(let i=0;i<types.length;i++){
    let element = document.createElement('option');
    element.appendChild( document.createTextNode(types[i].substr(2)));
    element.value = types[i];
    element.selected = i==2;
    selectTypes.appendChild(element);
}
        
run = ()=>{
    let gHM = new GradientHeatMap(document.querySelector('.bar-color'),colors[0].value,colors[1].value,colors[2].value).run(selectTypes.value,barPercentage.value);
    // Assemble the script
    inputText.value = `new GradientHeatMap(obj,"${colors[0].value}","${colors[1].value}","${colors[2].value}",${barPercentage.value}).run(position_GradientHeatMap.${selectTypes.value.substr(3).replace(" ","_")});`;
};

run();

/**
 * Add listeners to objects
 */

barPercentage.addEventListener('input', ()=> { valuePercentage.innerHTML = barPercentage.value; run(); });

for(let i=0;i<colors.length;i++){
    colors[i].addEventListener('change', ()=> { run(); });
}

selectTypes.addEventListener('change', ()=> { run(); });
