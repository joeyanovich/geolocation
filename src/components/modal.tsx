export function Modal() {
  return (
    <div className="fixed top-20 flex items-start justify-center w-screen p-5 z-20">
      <div className="flex flex-col gap-5 max-w-96 p-5 rounded-2xl border border-slate-200 bg-slate-50">
        <div className="flex flex-col gap-2">
          <h2 className=" font-bold text-lg">Nome da rua</h2>
          <div className="p-px bg-slate-200"></div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="">
            <span className="font-bold">País</span>: Londres
          </p>
          <p className="">
            <span className="font-bold">Estado: </span>Henshaw Street
          </p>
          <p className="">
            <span className="font-bold">Cidade: </span>Browning Estate
          </p>
          <p className="">
            <span className="font-bold">Rua: </span>Inglaterra
          </p>
          <p className="">
            <span className="font-bold">CEP: </span>SE17 1PD
          </p>
        </div>
      </div>
    </div>
  );
}
