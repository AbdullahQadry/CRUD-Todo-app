import { G as store_get, K as ensure_array_like, F as escape_html, J as attr, I as unsubscribe_stores, B as pop, z as push } from "../../../chunks/index.js";
import "firebase/auth";
import "../../../chunks/firebase.js";
import { w as writable } from "../../../chunks/index2.js";
import "firebase/firestore";
const authStore = writable({
  user: null,
  loading: true,
  data: {}
});
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let TodoList = [];
  let currentTodo = "";
  authStore.subscribe((curr) => {
    TodoList = curr.data.todos;
  });
  if (!store_get($$store_subs ??= {}, "$authStore", authStore).loading) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(TodoList);
    $$payload.out += `<div class="MainContainer svelte-1v5y2q7"><div class="HeaderContainer svelte-1v5y2q7"><div class="LogoTitle svelte-1v5y2q7"><svg width="50px" height="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" d=" 			M492,331.277V80.919c0-33.137-26.863-60-60-60H80c-33.137,0-60,26.863-60,60v350.163c0,33.137,26.863,60,60,60h352 			c33.071,0,59.889-26.758,59.995-59.804"></path></g><g><g><line style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="101.498" y1="113.466" x2="155.577" y2="113.466"></line><line style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="128.428" y1="116.593" x2="128.428" y2="211.389"></line></g><circle style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" cx="250.651" cy="162.427" r="48.961"></circle><g><g><path style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" d=" 					M172.307,349.573c0,26.183-14.532,46.901-37.587,47.304c-7.674,0.134-27.508,0.209-27.508,0.209l-0.193-95.026 					c0,0,17.844,0,26.913,0C159.221,302.06,172.307,323.39,172.307,349.573z"></path></g><circle style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" cx="272.18" cy="349.573" r="48.961"></circle></g><line style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="378.374" y1="113.466" x2="410.502" y2="113.466"></line><line style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="378.374" y1="208.006" x2="410.502" y2="208.006"></line><line style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="378.374" y1="302.546" x2="410.502" y2="302.546"></line><line style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="378.374" y1="397.086" x2="410.502" y2="397.086"></line></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg> <h2>Feeling productive today?</h2></div> <div class="CTA"><button class="svelte-1v5y2q7"><i class="fa-regular fa-floppy-disk" style="margin-right: 10px;"></i>Save</button> <button class="btn-outline svelte-1v5y2q7"><i class="fa-solid fa-arrow-right-from-bracket" style="margin-right: 10px;"></i>Logout</button></div></div> <div class="List svelte-1v5y2q7">`;
    if (TodoList.length === 0) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="EmptyList svelte-1v5y2q7"><i class="fa-solid fa-champagne-glasses wine svelte-1v5y2q7"></i> <h3>Nothing to do, horraaay!</h3></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <!--[-->`;
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let todo = each_array[index];
      $$payload.out += `<div class="TodoItem svelte-1v5y2q7"><div><input type="checkbox" class="svelte-1v5y2q7"> ${escape_html(index + 1)}. ${escape_html(todo)}</div> <div class="actions svelte-1v5y2q7"><i class="fa-regular fa-edit svelte-1v5y2q7" style="margin-right: 10px;"></i> <i class="fa-regular fa-trash-can svelte-1v5y2q7" style="margin-right: 10px;"></i></div></div>`;
    }
    $$payload.out += `<!--]--></div> `;
    {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div class="AddTodo svelte-1v5y2q7"><input${attr("value", currentTodo)} type="text" placeholder="What do you want to do next?" class="svelte-1v5y2q7"> <button class="svelte-1v5y2q7"><i class="fa-regular fa-square-plus" style="margin-right: 10px;"></i>Add</button></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
