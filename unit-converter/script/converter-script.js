let value_label = document.getElementById("value-label");
let unit_selected = 'length', original_value, unit_id_from, unit_id_to;
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
    value_to_convert = parseFloat(value_to_convert);
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

    result = parseFloat(result).toFixed(2);

    document.getElementById('converter').style.display = 'none';
    document.getElementById('result').style.display = 'flex';

    document.getElementById('result-text').innerText = `${original_value}${unit_id_from} = ${result}${unit_id_to}`;
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
                unit_id_from = 'mm';
                break;
            case 'centimeter':
                value_to_convert /= 100;
                unit_id_from = 'cm';
                break;
            case 'kilometer':
                value_to_convert *= 1000;
                unit_id_from = 'km';
                break;
            case 'inch':
                value_to_convert /= 39.37;
                unit_id_from = 'in';
                break;
            case 'foot':
                value_to_convert /= 3.281;
                unit_id_from = 'ft';
                break;
            case 'yard':
                value_to_convert /= 1.094;
                unit_id_from = 'yd';
                break;
            case 'mile':
                value_to_convert *= 1609;
                unit_id_from = 'mi';
                break;
            default:
                break;
        }
    }
    else unit_id_from = 'm';

    switch(unit_to) {
        case 'milimeter':
            result = value_to_convert * 1000;
            unit_id_to = 'mm';
            break;
        case 'centimeter':
            result = value_to_convert * 100;
            unit_id_to = 'cm';
            break;
        case 'meter':
            result = value_to_convert;
            unit_id_to = 'm';
            break;
        case 'kilometer':
            result = value_to_convert / 1000;
            unit_id_to = 'km';
            break;
        case 'inch':
            result = value_to_convert * 39.37;
            unit_id_to = 'in';
            break;
        case 'foot':
            result = value_to_convert * 3.281;
            unit_id_to = 'ft';
            break;
        case 'yard':
            result = value_to_convert * 1.094;
            unit_id_to = 'yd';
            break;
        case 'mile':
            result = value_to_convert / 1609;
            unit_id_to = 'mi';
            break;
        default:
            break;
    }
}

function weight_handler(){
    if(unit_from != 'gram'){
        switch(unit_from){
            case 'miligram':
                value_to_convert /= 1000;
                unit_id_from = 'mg';
                break;
            case 'kilogram':
                value_to_convert *= 1000;
                unit_id_from = 'kg';
                break;
            case 'ounce':
                value_to_convert *= 28.35;
                unit_id_from = 'oz';
                break;
            case 'pound':
                value_to_convert *= 453.6;
                unit_id_from = 'lb';
                break;
            default:
                break;
        }
    }
    else unit_id_from = 'g';

    switch(unit_to){
        case 'miligram':
            result = value_to_convert *= 1000;
            unit_id_to = 'mg';
            break;
        case 'gram':
            result = value_to_convert;
            unit_id_to = 'g';
        case 'kilogram':
            result = value_to_convert /= 1000;
            unit_id_to = 'kg';
            break;
        case 'ounce':
            result = value_to_convert /= 28.35;
            unit_id_to = 'oz';
            break;
        case 'pound':
            result = value_to_convert *= 453.6;
            unit_id_to = 'lb';
            break;
        default:
            break;
    }
}

function temperature_handler(){
    if(unit_from != 'celsius'){
        switch(unit_from){
            case 'fahrenheit':
                value_to_convert = (value_to_convert - 32) * 5/9;
                unit_id_from = 'ºF';
                break;
            case 'kelvin':
                value_to_convert -= 273.15;
                unit_id_from = 'ºK';
                break;
            default:
                break;
        }
    }
    else unit_id_from = 'ºC';

    switch(unit_to){
        case 'fahrenheit':
            result = (value_to_convert * 9/5) + 32;
            unit_id_to = 'ºF';
            break;
        case 'celsius':
            result = value_to_convert;
            unit_id_to = 'ºC';
            break;
        case 'kelvin':
            result = value_to_convert + 273.15;
            unit_id_to = 'ºK';
            break;
        default:
            break;
    }
}





