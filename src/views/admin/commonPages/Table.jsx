import React from "react";
import { Link } from "react-router-dom";

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
            <tr key={index} className="hover:bg-[#3da896] mt-5 ">
              <td className="">{row.no}</td>
              <td className="flex justify-center items-center">
                <img
                  src={row.image}
                  alt={row.name}
                  className="h-10 w-10 rounded-full"
                />
              </td>
              <td className="">{row.name}</td>
              <td className="">
                <Link>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
