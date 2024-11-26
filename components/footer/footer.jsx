import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-green-600 py-6 px-4">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="flex items-center space-x-4">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Bangladesh_Nationalist_Party.svg"
            alt="Logo"
            width={40} // Match 10 * 4 (tailwind rem unit)
            height={40} // Match 10 * 4 (tailwind rem unit)
            className="h-10 w-10"
          />
          <div className="text-white font-bold text-xl">BNP Chattogram</div>
        </div>

        <div className="text-white space-y-2">
          <h2 className="font-bold text-lg">Address</h2>
          <p className="text-sm">
            Nasiman Bhaban, Kazir Dewri, Chattogram 4000
          </p>
          <h2 className="font-bold text-lg mt-4">Email</h2>
          <p className="text-sm">info@gmail.com</p>
          <h2 className="font-bold text-lg mt-4">Contact</h2>
          <p className="text-sm">+89016</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="text-center font-bold text-green-700 mb-2">
            March 2024
          </div>
          <table className="w-full text-center">
            <thead>
              <tr className="text-red-600">
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, weekIndex) => (
                <tr key={weekIndex}>
                  {[...Array(7)].map((_, dayIndex) => {
                    const day = weekIndex * 7 + dayIndex - 4;
                    return (
                      <td
                        key={dayIndex}
                        className={`p-2 ${
                          day === 0 || day > 31 ? "text-gray-400" : ""
                        } ${dayIndex === 0 ? "text-red-600" : ""}`}
                      >
                        {day > 0 && day <= 31 ? day : ""}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
