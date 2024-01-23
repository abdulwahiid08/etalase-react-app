import React from "react";

function ButtonAdd(props) {
  const {
    variant,
    label,
    children,
    type = "button",
    onClick = () => {},
  } = props;
  // Type dan onClick memiliki nilai default jika tidak ada props yang dikirim
  return (
    <>
      <button
        className={`h-7 px-5 font-semibold rounded-md ${
          variant ?? "bg-black"
        } text-white hover:bg-slate-600 hover:ease-in duration-300`}
        type={type}
        onClick={onClick}
      >
        {/* Clean Code  */}
        {label ?? children ?? "Kosong"}
      </button>
    </>
  );
}

// function ButtonKurang() {
//    return(
//       <>
//          <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
//          Kurang Angka
//         </button>
//       </>
//    )
// };

export default ButtonAdd;
