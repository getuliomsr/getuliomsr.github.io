var medicine_select = document.getElementById("medicines");
var result = document.getElementById("result");

var medicines = [{
  name: "Etomidato 2 mg/mL",
  dose_per_kg: 0.3,
  concentration: 2
},{
  name: "Midazolam 5 mg/mL",
  dose_per_kg: 0.2,
  concentration: 5
},{
  name: "Propofol 1%",
  dose_per_kg: 1.5,
  concentration: 10
},{
  name: "Succinilcolina 10 mg/mL",
  dose_per_kg: 1.5,
  concentration: 10
},{
  name: "Ketamina 50 mg/mL",
  dose_per_kg: 1.5,
  concentration: 50
},{
  name: "Fentanil 50 mcg/mL",
  dose_per_kg: 3,
  concentration: 50
}
];

for (let medicine of medicines) {
  option = document.createElement('option');

  option.setAttribute('value', medicine.name);
  option.appendChild(document.createTextNode(medicine.name));

  medicine_select.appendChild(option);
}

function calculate() {
  var medicine_select =  document.getElementById("medicines");
  var patient_weight = parseFloat(document.getElementById("weight").value);
  
  for (let medicine of medicines) {
  	if (medicine.name === medicine_select.value)
    {
    	  var dose_per_kg = parseFloat(medicine.dose_per_kg);
        var concentration = parseFloat(medicine.concentration);
        
        result.textContent = (dose_per_kg * patient_weight / concentration).toFixed(2);
    }
  }
}