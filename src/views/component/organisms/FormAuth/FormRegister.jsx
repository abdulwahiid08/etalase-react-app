import Button from "../../atoms/button/ButtonSubmit";
import InputFormMolecule from "../../molecules/InputForm/InputForm";

function FormRegisterOrganism() {
  return (
    <form action="">
      <InputFormMolecule
        label="Email"
        type="text"
        name="email"
        id="email"
        placeholder="example@gmail.com"
      />
      <InputFormMolecule
        label="Username"
        type="text"
        name="username"
        id="username"
        placeholder="example"
      />
      <InputFormMolecule
        label="Password"
        type="password"
        name="password"
        id="password"
        placeholder="********"
      />
      <InputFormMolecule
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        placeholder="********"
      />
      <Button variant="bg-blue-700 w-full">Register</Button>
    </form>
  );
}

export default FormRegisterOrganism;
