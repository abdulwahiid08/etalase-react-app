function LabelAtom(props) {
  const { children, forName } = props;

  return (
    <label
      htmlFor={forName}
      className="block text-slate-700 font-bold text-sm mb-2"
    >
      {children}
    </label>
  );
}

export default LabelAtom;
