import React from "react";
import { Link } from "react-router-dom";

const Table = ({ headers, rows, iconbgColor, icon2bgColor }) => {
  return (
    <div className="relative ">
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
          <tr className="">
            <td colSpan={headers.length} className="h-3 "></td>
          </tr>
          {rows.map((row, index) => (
            <tr
              key={index}
              className="hover:bg-[#43b3a0] justify-center items-center border-b border-gray-400 h-[40px]"
            >
              {row.no && <td className="">{row.no}</td>}

              {row.image && (
                <td className="whitespace-nowrap flex justify-center items-center py-2 ">
                  <div className="relative group">
                    {/* Thumbnail Image */}
                    <img
                      src={row.image}
                      alt={row.name}
                      className="w-10 rounded-full"
                    />
                    {/* Full-Size Image on Hover */}
                    <div className="absolute hidden group-hover:block top-0 left-10">
                      <img
                        src={row.image}
                        alt={row.name}
                        className="w-auto h-auto max-w-none max-h-none z-10   transform translate-y-[-50%] shadow-lg border border-gray-300 rounded-full"
                        style={{ width: "300px", height: "300px" }} // Ensures the real image dimensions are shown
                      />
                    </div>
                  </div>
                </td>
              )}

              {row.name && <td className="">{row.name}</td>}
              {row.shopName && <td className="">{row.shopName}</td>}
              {row.email && <td className="">{row.email}</td>}
              {row.paymentStatus && <td className="">{row.paymentStatus}</td>}
              {row.status && <td className="">{row.status}</td>}
              {row.division && <td className="">{row.division}</td>}
              {row.district && <td className="">{row.district}</td>}

              {row.icon1 && row.icon2 ? (
                <td className="">
                  <div className="flex gap-2 w-20 mx-auto">
                    <p
                      className={` ${iconbgColor} flex items-center justify-center  rounded-full w-8 h-8 mx-auto`}
                    >
                      <Link className="">{row.icon1}</Link>
                    </p>
                    <p
                      className={`${icon2bgColor} flex items-center justify-center rounded-full w-8 h-8 mx-auto`}
                    >
                      <Link className="">{row.icon2}</Link>
                    </p>
                  </div>
                </td>
              ) : (
                <td className="">
                  <div className="mx-auto">
                    <p
                      className={` ${iconbgColor} flex items-center justify-center  rounded-full w-8 h-8 mx-auto`}
                    >
                      <Link className="">{row.icon1}</Link>
                    </p>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
