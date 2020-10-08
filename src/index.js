import Component from "./component";
import "./reset.css";
import "./styles.scss";

const root = document.getElementById("root");
const div = document.createElement("div");
div.textContent = "Hi webpack";
div.classList.add("block");
root.append(div);

console.log(Component);

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}
