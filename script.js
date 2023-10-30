const convert = document.getElementsByClassName("convert");
const btn = document.getElementsByClassName("btn");
const wrapper = document.getElementsByClassName("wrapper");
console.log(wrapper[0]);
const converted_value = document.getElementById("converted_value");
const select = document.getElementsByTagName("select");
btn[0].addEventListener("click", () => {
  if (select[0].value === "Kelvin") {
    converted_value.value =
      Math.round(parseInt(convert[0].value) + 273.15) + `${" K"}`;
  } else if (select[0].value === "Celcius") {
    converted_value.value =
      Math.round(parseInt(convert[0].value) - 273.15) + `${" C"}`;
  }
});
