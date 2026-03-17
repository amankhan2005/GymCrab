import PropTypes from "prop-types";

export default function Conject({ title = "Conject", children }) {
  return (
    <section className="mx-auto max-w-4xl rounded-2xl border border-slate-700 bg-slate-900/70 p-6 text-center shadow-xl shadow-black/40 backdrop-blur">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
      <p className="mt-3 text-sm text-slate-300 sm:text-base">{children}</p>
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <button className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-400">
          Explore
        </button>
        <button className="rounded-lg border border-slate-500 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-700">
          Learn more
        </button>
      </div>
    </section>
  );
}

Conject.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
