// function Login() {
//   return (
//     <div>
//       <form data-testid="login-form">
//         <div>
//           <label>
//             Email
//             <input data-testid="email-input" type="email" placeholder="email" />
//           </label>
//         </div>
//         <div>
//           <label>
//             Password
//             <input
//               data-testid="password-input"
//               type="password"
//               placeholder="password"
//             />
//           </label>
//         </div>
//         <div>
//           <input data-testid="form-submit" type="submit" value="SUBMIT" />
//         </div>
//       </form>
//       <div>
//         <Link to="/">Go Back</Link>
//       </div>
//     </div>
//   );
// }
// export default Login;



import React, { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.token) {
        loginUser(data.token);
        history.push('/dashboard');
      } else {
        alert('Login failed!');
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
