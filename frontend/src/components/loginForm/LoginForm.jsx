import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logoMin from "../../assets/imgs/logoMin.png";
import setCookie from "../../hooks/Cookie";
import BF from "../../assets/imgs/bf.png";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = { email, password };
    const response = await axios.post("http://localhost:3000/auth", newItem);
    const data = response.data;
    if (data.message === "Login realizado com sucesso.") {
      navigate('/home'); // Redireciona para '/home'
      setCookie("token", data.token, 7);
    } else {
      setPassword("");
      setEmail("");
      setError("Email ou senha incorretos.");
    }
  };
  

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
    if (!rememberMe) {
      const credentials = { email, password };
      document.cookie = `credentials=${JSON.stringify(credentials)}; path=/`;
    } else {
      document.cookie =
        "credentials=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  };

  useEffect(() => {
    const cookies = document.cookie.split(";").map((cookie) =>
      cookie.trim()
    );
    const savedCredentialsCookie = cookies.find((cookie) =>
      cookie.startsWith("credentials=")
    );
    if (savedCredentialsCookie) {
      const savedCredentials = JSON.parse(
        savedCredentialsCookie.split("=")[1]
      );
      setEmail(savedCredentials.email);
      setPassword(savedCredentials.password);
      setRememberMe(true);
    }

  }, []);

  return (
    <>
      <div className="bg-white dark:bg-[#101010]">
        <div className="flex justify-center h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/3"
            style={{
              backgroundImage: `url(${BF})`,
            }}
          >
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Blade Fall
                </h2>
                <p className="max-w-xl mt-3 text-gray-300">
                  Bem vindo! Aqui só sex de qualidade
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <div className="flex justify-center mx-auto">
                  <img className="w-20" src={logoMin} alt="" />
                </div>

                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Faça o Login para acessar sua conta
                </p>
              </div>

              <div className="mt-8">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Endereço de Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                      placeholder="exemplo@exemplo.com"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-[#101010] dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="text-sm text-gray-600 dark:text-gray-200"
                      >
                        Senha
                      </label>
                      <a
                        href="/pt-br/forgot-password"
                        className="text-sm text-gray-400 focus:text-red-500 hover:text-red-500 hover:underline"
                      >
                        Esqueceu sua senha?
                      </a>
                    </div>

                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={handlePasswordChange}
                      placeholder="●●●●●●●●"
                      required
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-[#101010] dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40 font-black"
                    />
                    <div className="flex items-start mt-3">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:bg-red-400 focus:ring-3 focus:ring-primary-300 accent-red-500"
                          checked={rememberMe}
                          onChange={handleRememberMe}
                        ></input>
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-gray-500">
                          Lembre-se de mim
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-400 focus:outline-none focus:bg-red-400 focus:ring focus:ring-red-300 focus:ring-opacity-50"
                    >
                      Entrar
                    </button>
                  </div>
                </form>
                {error && (
                  <p className="mt-4 text-sm text-red-500 text-center">
                    {error}
                  </p>
                )}

                <p className="mt-6 text-sm text-center text-gray-400">
                  Tem interesse em uma vaga?{" "}
                  <a
                    href="/pt-br/sign-up"
                    className="text-red-500 focus:outline-none focus:underline hover:underline"
                  >
                    Cadastre-se
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;