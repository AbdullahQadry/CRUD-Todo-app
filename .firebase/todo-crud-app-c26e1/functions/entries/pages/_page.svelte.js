import { J as attr, B as pop, z as push } from "../../chunks/index.js";
import "firebase/auth";
import "../../chunks/firebase.js";
function Authinticate($$payload, $$props) {
  push();
  let email = "";
  let password = "";
  $$payload.out += `<div class="AuthContainer svelte-1jpksnq"><form class="box svelte-1jpksnq" action=""><div><svg width="80px" height="80px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" d=" 			M492,331.277V80.919c0-33.137-26.863-60-60-60H80c-33.137,0-60,26.863-60,60v350.163c0,33.137,26.863,60,60,60h352 			c33.071,0,59.889-26.758,59.995-59.804"></path></g><g><g><line style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="101.498" y1="113.466" x2="155.577" y2="113.466"></line><line style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="128.428" y1="116.593" x2="128.428" y2="211.389"></line></g><circle style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" cx="250.651" cy="162.427" r="48.961"></circle><g><g><path style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" d=" 					M172.307,349.573c0,26.183-14.532,46.901-37.587,47.304c-7.674,0.134-27.508,0.209-27.508,0.209l-0.193-95.026 					c0,0,17.844,0,26.913,0C159.221,302.06,172.307,323.39,172.307,349.573z"></path></g><circle style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" cx="272.18" cy="349.573" r="48.961"></circle></g><line style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="378.374" y1="113.466" x2="410.502" y2="113.466"></line><line style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="378.374" y1="208.006" x2="410.502" y2="208.006"></line><line style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="378.374" y1="302.546" x2="410.502" y2="302.546"></line><line style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="378.374" y1="397.086" x2="410.502" y2="397.086"></line></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg> <h1 class="svelte-1jpksnq">`;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<span>Login to your<br>favorite todo app</span>`;
  }
  $$payload.out += `<!--]--></h1> <div class="otherway svelte-1jpksnq">`;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div><p style="display:inline-block">Don't have an account?</p> <button class="switcher svelte-1jpksnq">Register</button></div>`;
  }
  $$payload.out += `<!--]--></div></div> <div class="formcontent svelte-1jpksnq">`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <label class="svelte-1jpksnq"><input${attr("value", email)} type="email" placeholder="Email" class="svelte-1jpksnq"></label> <label class="svelte-1jpksnq"><input${attr("value", password)} type="password" placeholder="Password" class="svelte-1jpksnq"></label> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <button type="submit" class="svelte-1jpksnq">`;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `Login`;
  }
  $$payload.out += `<!--]--></button></div></form></div>`;
  pop();
}
function _page($$payload) {
  Authinticate($$payload);
}
export {
  _page as default
};
