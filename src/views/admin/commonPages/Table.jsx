import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaRegTrashAlt  } from "react-icons/fa";

const Table = ({ headers, rows }) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-[#d0d2d6] text-center">
        <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
          <tr>
            {headers.map((item, i) => (
              <th key={i} className="py-3 px-4">
                {item}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="mt-5">
          <tr>
            <td colSpan={headers.length} className="h-3"></td>
          </tr>
          {rows.map((row, index) => (
            <tr
              key={index}
              className="hover:bg-[#43b3a0] justify-center items-center"
            >
              <td className="">{row.no}</td>
              <td className="whitespace-nowrap flex justify-center items-center py-2">
                <img
                  src={row.image}
                  alt={row.name}
                  className=" w-10 rounded-full"
                />
              </td>
              <td className="">{row.name}</td>
              <td className="">
                <div className="flex gap-2 w-20 mx-auto">
                  <p className="flex items-center justify-center bg-yellow-500 hover:bg-yellow-300 rounded-full w-8 h-8 mx-auto">
                    <Link className="">
                      <FaEdit className="text-black" />
                    </Link>
                  </p>
                  <p className="flex items-center  justify-center bg-red-500 hover:bg-red-300 rounded-full w-8 h-8 mx-auto">
                    <Link className="">
                      <FaRegTrashAlt  className="text-black" />
                    </Link>
                  </p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
