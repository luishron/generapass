import React from "react";
import { HiOutlineArrowPath, HiOutlineSquare2Stack } from "react-icons/hi2";
import { limitString } from "../../utils/";
import "./generator-result.scss";

export const GeneratorResult = ({ password, copyPassword }) => {
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
          value={limitString(password, 24)}
          readOnly
        />
        <br />
        <span className="copy-password" onClick={copyPassword}>
          <HiOutlineSquare2Stack />
        </span>
        <span className="reset-password">
          <HiOutlineArrowPath />
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
      <br />
    </>
  );
};
