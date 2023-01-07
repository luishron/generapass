import React, { useCallback, useEffect, useState } from "react";
import { GeneratorResult } from "../generator-result/GeneratorResult";
import "./generator.scss";

export const GeneratorForm = () => {
  const [passwordLength, setPasswordLength] = useState(16); // Estado para almacenar la longitud de la contraseña
  const [includeUppercase, setIncludeUppercase] = useState(true); // Estado para almacenar si se deben incluir mayúsculas
  const [includeLowercase, setIncludeLowercase] = useState(true); // Estado para almacenar si se deben incluir minúsculas
  const [includeSymbols, setIncludeSymbols] = useState(true); // Estado para almacenar si se deben incluir símbolos
  const [includeNumbers, setIncludeNumbers] = useState(true); // Estado para almacenar si se deben incluir números
  const [password, setPassword] = useState(""); // Estado para almacenar la contraseña generada
  const generatePassword = useCallback(() => {
    // Crea una lista de caracteres que se pueden incluir en la contraseña
    let characters = [];
    if (includeUppercase)
      characters = characters.concat([
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ]);
    if (includeLowercase)
      characters = characters.concat([
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ]);
    if (includeSymbols)
      characters = characters.concat([
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "-",
        "_",
        "=",
        "+",
        "<",
        ">",
        "?",
      ]);
    if (includeNumbers)
      characters = characters.concat([
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
      ]);

    // Crea una contraseña vacía
    let password = "";

    // Añade caracteres aleatorios a la contraseña hasta que alcance la longitud deseada
    for (let i = 0; i < passwordLength; i++) {
      password += characters[Math.floor(Math.random() * characters.length)];
    }

    // Actualiza el estado de la contraseña
    setPassword(password);
  }, [
    includeLowercase,
    includeNumbers,
    includeSymbols,
    includeUppercase,
    passwordLength,
  ]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  // Función para copiar la contraseña al portapapeles
  const copyPassword = () => {
    // Selecciona el elemento de texto que contiene la contraseña
    const textarea = document.querySelector("#password");
    textarea.select();

    // Copia el texto seleccionado al portapapeles
    document.execCommand("copy");

    // Muestra un mensaje de éxito al usuario
    alert("Contraseña copiada al portapapeles");
  };
  return (
    <div className="content-container">
      <h1 className="text-center">Generate your secure password easily</h1>
      <section className="generator-form">
        <GeneratorResult password={password} copyPassword={copyPassword} />
        <form>
          <div className="input-group">
            <label htmlFor="passwordLength">Longitud de la contraseña:</label>
            <input
              type="number"
              id="passwordLength"
              className="input-length"
              value={passwordLength}
              onChange={(event) => setPasswordLength(event.target.value)}
              min="1"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="range"
              id="passwordLength"
              value={passwordLength}
              onChange={(event) => setPasswordLength(event.target.value)}
              min="1"
              max="99"
              required
            />
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="includeUppercase"
              checked={includeUppercase}
              onChange={(event) => setIncludeUppercase(event.target.checked)}
            />
            <label htmlFor="includeUppercase">Mayúsculas (ABC)</label>
          </div>
          <div className="checkbox-container ">
            <input
              type="checkbox"
              id="includeLowercase"
              checked={includeLowercase}
              onChange={(event) => setIncludeLowercase(event.target.checked)}
            />
            <label htmlFor="includeLowercase">Minúsculas (abc)</label>
          </div>
          <div className="checkbox-container ">
            <input
              type="checkbox"
              id="includeSymbols"
              checked={includeSymbols}
              onChange={(event) => setIncludeSymbols(event.target.checked)}
            />
            <label htmlFor="includeSymbols">Símbolos aleatorios (!#$)</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="includeNumbers"
              checked={includeNumbers}
              onChange={(event) => setIncludeNumbers(event.target.checked)}
            />
            <label htmlFor="includeNumbers">Números (123)</label>
          </div>
          {/* <br /> */}
          {/* <button type="submit" className="btn">
            Generar contraseña
          </button> */}
        </form>
      </section>
    </div>
  );
};
