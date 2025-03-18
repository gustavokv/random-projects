let value_label = document.getElementById("value-label");
let unit_selected = 'length', original_value;
var value_to_convert, unit_from, unit_to, result;

value_label.innerText = `Enter the ${unit_selected} to convert`;

function unit_selector(unit){
    document.getElementById(unit_selected+'-btn').style.color = '#3D5467';
    document.getElementById(unit_selected+'-btn').style.backgroundColor = 'white';

    unit_selected = unit;
    value_label.innerText = `Enter the ${unit_selected} to convert`;

    document.getElementById(unit_selected+'-btn').style.color = 'white';
    document.getElementById(unit_selected+'-btn').style.backgroundColor = '#3D5467';
}

var form = document.getElementById('input-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    value_to_convert = document.getElementById('value-to-convert').value;
    original_value = value_to_convert;
    unit_from = document.getElementById('convert-from').value;
    unit_to = document.getElementById('convert-to').value;

    unit_from = unit_from.toLowerCase();
    unit_to = unit_to.toLowerCase();

    switch(unit_selected){
        case 'length':
            length_handler();
            break;
        case 'weight':
            weight_handler();
            break;
        case 'temperature':
            temperature_handler();
            break;
    }

    result = result.toFixed(2);

    document.getElementById('converter').style.display = 'none';
    document.getElementById('result').style.display = 'flex';

    document.getElementById('result-text').innerText = `${original_value} ${unit_from}S = ${result} ${unit_to}S`;
});

var reset = document.getElementById('reset');

reset.addEventListener('click', () => {
    document.getElementById('result').style.display = 'none';
    document.getElementById('converter').style.display = 'inline-block';
    form.reset();
});

function length_handler(){
    if(unit_from != 'meter'){
        switch(unit_from){
            case 'milimeter':
                value_to_convert /= 1000;
                break;
            case 'centimeter':
                value_to_convert /= 100;
                break;
            case 'kilometer':
                value_to_convert *= 1000;
                break;
            case 'inch':
                value_to_convert /= 39.37;
                break;
            case 'foot':
                value_to_convert /= 3.281;
                break;
            case 'yard':
                value_to_convert /= 1.094;
                break;
            case 'mile':
                value_to_convert *= 1609;
                break;
            default:
                break;
        }
    }

    switch(unit_to) {
        case 'milimeter':
            result = value_to_convert * 1000;
            break;
        case 'centimeter':
            result = value_to_convert * 100;
            break;
        case 'meter':
            result = value_to_convert;
            break;
        case 'kilometer':
            result = value_to_convert / 1000;
            break;
        case 'inch':
            result = value_to_convert * 39.37;
            break;
        case 'foot':
            result = value_to_convert * 3.281;
            break;
        case 'yard':
            result = value_to_convert * 1.094;
            break;
        case 'mile':
            result = value_to_convert / 1609;
            break;
    }
}

function weight_handler(){
    
}

function temperature_handler(){
    
}





