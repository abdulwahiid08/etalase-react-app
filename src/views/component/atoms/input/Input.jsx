function InputAtom(props) {
  const { type, name, id, placeholder, valueRef, handleValueInput } = props;

  // Handle Event
  // Parameter event berguna untuk menghandle semua apa yang terjadi dan mengakses element nya
  // Parameter type berguna untuk menentukan tipe element apa yang terjadi
  const handleEvent = (event, type) => {
    handleValueInput(event.target.name, event.target.value);
  };

  return (
    <input
      ref={valueRef}
      type={type}
      className="border border-slate-400 rounded w-full py-2 px-3 text-sm text-slate-500 placeholder:opacity-80"
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={(e) => handleEvent(e, type)}
    />
  );
}

export default InputAtom;
