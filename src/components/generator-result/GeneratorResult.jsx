import React, { useCallback, useState } from "react";
import { HiOutlineArrowPath, HiOutlineSquare2Stack } from "react-icons/hi2";
import { limitString } from "../../utils/";
import "./generator-result.scss";

export const GeneratorResult = ({ password, handleReset }) => {
  const [isCopy, setIsCopy] = useState(false);

  const copyPassword = useCallback(async () => {
    const input = document.getElementById("password");
    const valor = input.dataset.value;

    try {
      await navigator.clipboard.writeText(valor);
      setIsCopy(true);
      setTimeout(() => {
        setIsCopy(false);
      }, 2500);
    } catch (err) {
      console.error("Error al intentar copiar el valor", err);
    }
  }, []);

  return (
    <>
      <div
        className={`generator-result ${
          password.length >= 16
            ? "highly"
            : password.length >= 12
            ? "medium"
            : password.length >= 8
            ? "low"
            : "unsafe"
        }`}
      >
        <input
          id="password"
          className="result-password"
          value={limitString(password, 20)}
          data-value={password}
          readOnly
        />

        <span className="copy-password" onClick={copyPassword}>
          <HiOutlineSquare2Stack size={32} />
          <span className={`tooltip ${isCopy ? "active" : ""}`}>
            Password copied!
          </span>
        </span>
        <span className="reset-password" onClick={handleReset}>
          <HiOutlineArrowPath size={32} />
        </span>
      </div>

      {password.length >= 16 ? (
        <p className="highly-text">Altamente segura</p>
      ) : password.length >= 12 ? (
        <p className="medium-text">Seguridad moderada</p>
      ) : password.length >= 8 ? (
        <p className="low-text">Seguridad baja</p>
      ) : (
        <p className="unsafe-text">Muy poco segura</p>
      )}
    </>
  );
};
