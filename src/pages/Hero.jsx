import React from "react";
import Header from "@/components/Header";
import Bus from "/WelcomeBus.png";
import YellowEffect from "/YellowEffect.png";
import DarkBlueEffect from "/DarkBlueEffect.png";
import WhiteLogo from "/WhiteLogo.png";
import { Button } from "@/components/ui/button";
import CircleNumber from "@/components/CircleNumber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBus,
  faRoute,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
const Hero = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <div className="relative overflow-hidden w-full">
        <Header />
        <div className="relative container mx-auto min-h-screen w-full flex items-center ">
          <img
            src={YellowEffect}
            alt=""
            className="absolute top-[-100px] right-[-200px] md:w-[800px] md:top-[-150px] md:right-[-450px]"
          />
          <img
            src={DarkBlueEffect}
            alt=""
            className="absolute bottom-[-100px] left-[-200px] md:w-[800px] md:bottom-[-150px] md:left-[-450px] rotate-10"
          />
          <div className="flex flex-col text-center items-center px-8 md:flex-row-reverse md:px-10">
            <img src={Bus} alt="" className="w-3/4 md:w-1/2" />
            <div className="md:text-right">
              <h3 className="font-bold text-primary-dark text-3xl mb-2.5 -mt-4 md:text-5xl md:mb-5">
                سفّرني - Safferni
              </h3>
              <p className="md:text-xl">
                "سفّرني" هي منصة رائدة لتسهيل حجز تذاكر السفر في محطات الإنطلاق
                عبر جميع المحافظات السورية. نقدم لكم تجربة سفر سلسة ومريحة, حيث
                يمكنك حجز تذكرتك بكل سهولة وأمان, والإستمتاع برحلات خالية من
                المتاعب.
              </p>
              <Link to="booking">
                <Button
                  size="lg"
                  className="mt-2.5 bg-secondary-dark text-primary-dark font-bold hover:bg-secondary-light"
                >
                  احجز الآن
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="w-full relative top-0 left-0 overflow-x-hidden bg-primary-dark bg-cover "
          style={{ backgroundImage: "url(/Background_01.jpg)" }}
        >
          <div className="container mx-auto py-12 px-8">
            <img src={WhiteLogo} alt="" className="w-3xs mx-auto " />
            <h3 className="text-white font-black text-center text-3xl mb-4 md:mb-12">
              لـمـاذا سـفّرني ؟
            </h3>
            <ul className="text-white flex flex-col gap-8 md:gap-12 md:flex-row md:flex-wrap md:justify-center">
              <li className="md:w-1/3">
                <div className="flex items-baseline ">
                  <span className="text-primary-dark flex items-center justify-center font-bold w-[30px] h-[30px] rounded-full bg-secondary-dark ml-2">
                    1
                  </span>
                  <h4 className="inline-block font-bold text-xl text-secondary-light">
                    تجربة حجز سلسة وسريعة
                  </h4>
                </div>
                <p>
                  {" "}
                  - نقدم واجهة مستخدم بسيطة وبديهية تتيح لك حجز تذكرتك في دقائق
                  معدودة.
                  <br />- لا مزيد من الانتظار في الطوابير أو التعقيدات، كل ما
                  تحتاجه في مكان واحد.
                </p>
              </li>
              <li className="md:w-1/3">
                <div className="flex items-baseline ">
                  <span className="text-primary-dark flex items-center justify-center font-bold w-[30px] h-[30px] rounded-full bg-secondary-dark ml-2">
                    2
                  </span>
                  <h4 className="inline-block font-bold text-xl text-secondary-light">
                    تغطية شاملة لجميع المحافظات السورية
                  </h4>
                </div>
                <p className>
                  - سواء كنت مسافرًا من دمشق، حلب، اللاذقية، أو أي محافظة أخرى،
                  لدينا تغطية كاملة لجميع المحطات والوجهات.
                </p>
              </li>
              <li className="md:w-1/3">
                <div className="flex items-baseline ">
                  <span className="text-primary-dark flex items-center justify-center font-bold w-[30px] h-[30px] rounded-full bg-secondary-dark ml-2">
                    3
                  </span>
                  <h4 className="inline-block font-bold text-secondary-light text-xl">
                    أسعار تنافسية وعروض حصرية
                  </h4>
                </div>
                <p>
                  - استمتع بأسعار مميزة وعروض خاصة تجعل سفرك أكثر اقتصادية.
                  <br />- نوفر خيارات دفع متنوعة وآمنة لراحتك.
                </p>
              </li>
              <li className="md:w-1/3">
                <div className="flex items-baseline ">
                  <span className="text-primary-dark flex items-center justify-center font-bold w-[30px] h-[30px] rounded-full bg-secondary-dark ml-2">
                    4
                  </span>
                  <h4 className="inline-block font-bold text-secondary-light text-xl">
                    إدارة حجوزات مرنة
                  </h4>
                </div>
                <p>
                  - قم بتعديل أو إلغاء حجوزاتك بكل سهولة في أي وقت.
                  <br />- نوفر لك تحكمًا كاملاً في رحلاتك دون أي تعقيدات.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#FFFDF0] py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#001840] mb-4">
              أرقامنا تتحدث عنا
            </h2>
            <p className="text-[#666666] mb-12">
              نفخر بتقديم أفضل خدمة لعملائنا، وهذه الأرقام خير دليل على نجاحنا
              وتميزنا.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* عدد الأشخاص الذين خدمناهم */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <FontAwesomeIcon
                  icon={faUsers}
                  className="text-7xl text-primary-light mb-4"
                />
                <h3 className="text-4xl font-bold text-[#F5C400]">+50,000</h3>
                <p className="text-[#001840] mt-2">شخص خدمناهم</p>
              </div>

              {/* عدد الباصات */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <FontAwesomeIcon
                  icon={faBus}
                  className="text-7xl text-primary-light mb-4"
                />
                <h3 className="text-4xl font-bold text-[#F5C400]">+500</h3>
                <p className="text-[#001840] mt-2">باص متاح</p>
              </div>

              {/* عدد الرحلات */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <FontAwesomeIcon
                  icon={faRoute}
                  className="text-7xl text-primary-light mb-4"
                />
                <h3 className="text-4xl font-bold text-[#F5C400]">+10,000</h3>
                <p className="text-[#001840] mt-2">رحلة ناجحة</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="relative w-full  py-12 container mx-auto bg-secondary-lightest">
            <h3 className="text-center text-5xl font-bold mb-8 text-primary-dark">
              خطوات الحجز
            </h3>
            <div className="flex justify-center gap-28 z-50 relative items-center">
              <div className="w-3/4 top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute -z-10 h-1  bg-amber-300 "></div>
              <CircleNumber number="1" text="بحث" />
              <CircleNumber number="2" text="الرحلات" />
              <CircleNumber number="3" text="معلومات المسافرين" />
              <CircleNumber number="4" text="تأكيد الحجز" />
              <CircleNumber number="5" text="الدفع" />
            </div>
          </div> */}
      </div>
    </main>
  );
};

export default Hero;
