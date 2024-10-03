export function Footer() {
  return (
    <>
      <div className="fixed bottom-0 flex items-center justify-start h-28 w-full px-40 text-slate-900 bg-slate-300 opacity-80">
        <div className="flex items-center justify-center w-full">
          <p className="font-bold text-center text-sm w-full text-slate-700">
            Feito com muito <span className="text-red-400">♥</span> por{" "}
            <a
              href="https://github.com/joeyanovich"
              className="underline text-slate-900"
            >
              Joey Dias
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
