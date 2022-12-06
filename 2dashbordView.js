import { html } from '../../node_modules/lit-html/lit-html.js';

const dashTemplate = () => html`<section id="dashboard">
<h2>Job Offers</h2>

<!-- Display a div with information about every post (if any)-->
<div class="offer">
  <img src="./images/example1.png" alt="example1" />
  <p>
    <strong>Title: </strong><span class="title">Sales Manager</span>
  </p>
  <p><strong>Salary:</strong><span class="salary">1900</span></p>
  <a class="details-btn" href="">Details</a>
</div>
<div class="offer">
  <img src="./images/example2.png" alt="example2" />
  <p>
    <strong>Title: </strong
    ><span class="title">Senior Frontend Software Engineer</span>
  </p>
  <p><strong>Salary:</strong><span class="salary">7000</span></p>
  <a class="details-btn" href="">Details</a>
</div>
<div class="offer">
  <img src="./images/example3.png" alt="./images/example3.png" />
  <p>
    <strong>Title: </strong
    ><span class="title">Invoice Administrator</span>
  </p>
  <p><strong>Salary:</strong><span class="salary">1700</span></p>
  <a class="details-btn" href="">Details</a>
</div>

<!-- Display an h2 if there are no posts -->
<h2>No offers yet.</h2>
</section>

<!-- Register Page (Only for Guest users) -->
<section id="register">
<div class="form">
  <h2>Register</h2>
  <form class="login-form">
    <input
      type="text"
      name="email"
      id="register-email"
      placeholder="email"
    />
    <input
      type="password"
      name="password"
      id="register-password"
      placeholder="password"
    />
    <input
      type="password"
      name="re-password"
      id="repeat-password"
      placeholder="repeat password"
    />
    <button type="submit">register</button>
    <p class="message">Already registered? <a href="#">Login</a></p>
  </form>
</div>
</section>`

export function dashView(ctx){

    ctx.render(dashTemplate());
    
}