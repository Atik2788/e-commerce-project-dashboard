import React from "react";
import { Link } from "react-router-dom";

const TableNew = ({
  headers,
  rows,
  iconbgColor,
  icon2bgColor,
  routerPage,
  icon3bgColor,
  editPage,
}) => {
  // console.log(routerPage);
  // console.log(editPage);
  console.log(rows);
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
              {row.no ? (
                <td className="">{row.no}</td>
              ) : (
                <td className="">{index + 1}</td>
              )}

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

              {row.images && (
                <td className="whitespace-nowrap flex justify-center items-center py-2 ">
                  <div className="relative group">
                    {/* Thumbnail Image */}
                    <img
                      src={row.images[0]}
                      alt={row.name}
                      className="w-10 rounded-full"
                    />
                    {/* Full-Size Image on Hover */}
                    <div className="absolute hidden group-hover:block top-0 left-10">
                      <img
                        src={row.images[0]}
                        alt={row.name}
                        className="w-auto h-auto max-w-none max-h-none z-10   transform translate-y-[-50%] shadow-lg border border-gray-300 rounded-full"
                        style={{ width: "300px", height: "300px" }} // Ensures the real image dimensions are shown
                      />
                    </div>
                  </div>
                </td>
              )}

              {row.name && (
                <td className="">
                  {row.name.length > 15
                    ? row.name.slice(0, 15) + "..."
                    : row.name}
                </td>
              )}
              {/* {row.name && (<td className="">{row.name.length > 15 ? row.name.slice(0, 15) + "..." : row.name}</td>)} */}
              {/* {row.shopName && <td className="">{row.shopName}</td>} */}
              {row.category && <td className="">{row.category}</td>}
              {row.brand && <td className="">{row.brand}</td>}
              {row.price && <td className="">${row.price}</td>}
              {row.discount !== undefined && row.discount !== null && (
                <td className="">
                  {row.discount === 0 ? (
                    <span>No Discount</span>
                  ) : (
                    `${row.discount}%`
                  )}
                </td>
              )}
              {/* {row.discount === 0 ? <span>No Discount</span>
                : <span>${row.discount}</span>  
            } */}
              {/* {row.discount && <td className="">{row.discount}%</td>} */}
              {row.stock && <td className="">{row.stock}</td>}
              {row.email && <td className="">{row.email}</td>}
              {row.paymentStatus && <td className="">{row.paymentStatus}</td>}
              {row.status && <td className="">{row.status}</td>}
              {row.division && <td className="">{row.division}</td>}
              {row.district && <td className="">{row.district}</td>}
              {row.orderStatus && <td className="">{row.orderStatus}</td>}

              <td className="">
                <div
                  className={`flex gap-1 ${
                    row.deleteIcon ? "w-30" : "w-20"
                  } mx-auto`}
                >
                  {row.editIcon && (
                    <p
                      className={`${iconbgColor} flex items-center justify-center rounded-full w-8 h-8 mx-auto`}
                    >
                      {routerPage ? (
                        <Link
                          to={routerPage(row.no)}
                          name={row.name}
                          className=""
                        >
                          {row.editIcon}
                        </Link>
                      ) : editPage ? (
                        <Link
                          to={editPage(row.no)}
                          name={row.name}
                          className=""
                        >
                          {row.editIcon}
                        </Link>
                      ) : (
                        <Link className="">{row.editIcon}</Link>
                      )}
                    </p>
                  )}

                  {row.viewIcon && (
                    <p
                      className={`${icon2bgColor} flex items-center justify-center rounded-full w-8 h-8 mx-auto`}
                    >
                      {routerPage ? (
                        <Link
                          to={routerPage(row.no)}
                          name={row.name}
                          className=""
                        >
                          {row.viewIcon}
                        </Link>
                      ) : (
                        <Link className="">{row.viewIcon}</Link>
                      )}
                    </p>
                  )}

                  {row.deleteIcon && (
                    <p
                      className={`${icon3bgColor} flex items-center justify-center rounded-full w-8 h-8 mx-auto`}
                    >
                      {routerPage ? (
                        <Link
                          to={routerPage(row.no)}
                          name={row.name}
                          className=""
                        >
                          {row.deleteIcon}
                        </Link>
                      ) : (
                        <Link className="">{row.deleteIcon}</Link>
                      )}
                    </p>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableNew;
