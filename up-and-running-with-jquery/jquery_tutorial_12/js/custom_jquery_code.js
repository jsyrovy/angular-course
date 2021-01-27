console.log($("#courses").find("li"));
console.log($("#courses").find("li").children());
console.log($("#courses").find("li").children().children());

const maths = $("#math_subjects");
const newEl1 = $("<li>New Element 1</li>");
const newEl2 = $("<li>New Element 2</li>");

maths.prepend(newEl1);
maths.append(newEl2);
