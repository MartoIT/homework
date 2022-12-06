import { html } from '../../node_modules/lit-html/lit-html.js';

const registerTamplete = () => html` <section id="register">
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
    <button type="submit" @click="${someFache}">register</button>
    <p class="message">Already registered? <a href="#">Login</a></p>
  </form>
</div>
</section>`


export function registerView(ctx){

    ctx.render(registerTamplete());
    
    
}



async function someFache(e){
 e.preventDefault()
  const form = new FormData(e.target.parentElement);
  const email = form.get('email');
  const password = form.get('password');
  const rePass = form.get('re-password');
  
  
  const response = await fetch('http://localhost:3030/users/register',{
    method: 'POST',
    headers: {
      'Content-Type': 'aplication/json'
    },
    body: JSON.stringify({
      email, 
      password,
      rePass
    })

  })

  const result = await response.json()
console.log(result)
  
  

  
}