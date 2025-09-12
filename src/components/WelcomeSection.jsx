import React from "react";
import { Link } from "react-router-dom";

function WelcomeSection() {
  return (
    // Container หลัก: จัดให้อยู่กลางจอทั้งแนวตั้งและแนวนอน
    <section className="bg-[#FFF5E4] min-h-screen flex justify-center items-center p-6">
      {/* Container: ครอบรูปและข้อความ */}
      {/* - flex flex-col: สำหรับจอมือถือ ให้เรียงจากบนลงล่าง
        - md:flex-row: สำหรับจอขนาดกลางขึ้นไป ให้เรียงจากซ้ายไปขวา
        - items-center: จัดให้อยู่กึ่งกลางแนวตั้ง
        - gap-12: เพิ่มช่องว่างระหว่างรูปกับข้อความ
      */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl">
        {/* ส่วนของรูปภาพ */}
        {/* - w-full: ทำให้รูปเต็มความกว้างของ container ในจอมือถือ
          - md:w-1/3: กำหนดความกว้าง 1 ใน 3 ส่วนสำหรับจอขนาดกลางขึ้นไป
        */}
        <img
          className="w-full md:w-1/5 max-w-xs md:max-w-full rounded-lg shadow-lg"
          // แก้ไข path รูปภาพ: ถ้าไฟล์อยู่ใน public ให้ใช้ path ตรงๆ จาก root
          src="/images/410216650_2060545460964420_2751086539103478532_n.jpg"
          alt="Wimonrat's profile"
        />

        {/* ส่วนของข้อความ */}
        {/* - w-full: ทำให้ข้อความเต็มความกว้างในจอมือถือ
          - md:w-2/3: กำหนดความกว้าง 2 ใน 3 ส่วนสำหรับจอขนาดกลางขึ้นไป
          - text-center md:text-left: จอมือถือจัดกลาง จอใหญ่จัดชิดซ้าย
        */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl sm:text-3xl font-bold mb-4 text-[#FF9494]">
            Hi, I'm <span className="text-red-800">Wimonrat Yongsungnern</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-8">
            This is my portfolio, which presents an overview of my academic
            background, educational institutions I have graduated from,
            professional experiences, and projects or works I have completed. If
            you are interested, you are welcome to explore and learn more about
            me.
          </p>
          <div className="flex justify-center md:justify-start text-lg font-bold">
            {" "}
            <Link
              to="/about"
              className="px-6 py-2 border-2 border-[#FF9494] text-[#FF9494] rounded-lg hover:bg-[#FFD1D1] hover:text-white transition duration-300"
            >
              See more about me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
