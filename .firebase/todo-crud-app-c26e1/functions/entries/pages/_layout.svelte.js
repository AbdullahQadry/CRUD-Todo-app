import { C as slot, B as pop, z as push } from "../../chunks/index.js";
import "../../chunks/firebase.js";
import "firebase/firestore";
import "firebase/auth";
function _layout($$payload, $$props) {
  push();
  $$payload.out += `<!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!---->`;
  pop();
}
export {
  _layout as default
};
