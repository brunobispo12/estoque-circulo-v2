import { CirculoIcon } from "./utils/constants/imagesPath";

function App() {

  return (
    <div className="min-h-screen bg-smoke text-lg lg:text-base md:text-base">
      <div className="col-center justify-center min-h-screen gap-8">
        <img src={CirculoIcon} alt="" className="w-56 lg:w-64" />
        <div className="col-center gap-8 px-4 py-6 w-[28rem] h-96 bg-white rounded-lg">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl text-center">Bem-vindo</h1>
            <p>Faça login para continuar</p>
          </div>
          <form className="col-center justify-center w-3/4">
            <label className="flex flex-col gap-1 w-full">
              <p>Nome:</p>
              <input type="text" placeholder="Usuário" className="border border-gray-500 px-1 w-full rounded-md" />
            </label>
            <label className="flex flex-col mt-3 gap-1 w-full">
              <p>Senha:</p>
              <input type="password" placeholder="Senha" className="border border-gray-500 px-1 rounded-md" />
            </label>
            <label className="flex justify-center w-full mt-12">
              <button className="border border-gray-500 w-full rounded-md py[2px]">Entrar</button>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
