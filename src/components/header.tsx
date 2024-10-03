import { MapPinArea } from "@phosphor-icons/react";

export function Header() {
  return (
    <div className="fixed top-0 flex items-center justify-start h-16 sm:h-28 w-full px-5 lg:px-40 text-slate-900 bg-slate-300 opacity-80">
      <div className="flex items-center gap-2 max-w-full">
        <MapPinArea
          weight="fill"
          className="text-3xl sm:text-5xl lg:text-8xl"
        />
        <h1 className="font-extrabold sm:text-2xl lg:text-3xl w-full text-slate-700">
          <span className="text-slate-900">Geo</span>localização
        </h1>
      </div>
    </div>
  );
}
