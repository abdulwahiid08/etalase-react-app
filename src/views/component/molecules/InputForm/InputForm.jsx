import InputAtom from "../../atoms/input/Input";
import LabelAtom from "../../atoms/input/Label";

function InputFormMolecule(props) {
  const { name, label, type, id, placeholder, valueRef, handleValueInput } =
    props; // nilai props didapat dari property Element Input form

  return (
    <div className="mb-3">
      <LabelAtom forName={name}>{label}</LabelAtom>
      <InputAtom
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        valueRef={valueRef}
        handleValueInput={handleValueInput}
      />
    </div>
  );
}

export default InputFormMolecule;
