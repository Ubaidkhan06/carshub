"use client";
import { CarProps } from "@/types";
import { calculateRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import { useState } from "react";
import { Button, CarDetails } from "..";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const {
    city_mpg,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;

  const handleClose = () => setIsOpen(false);

  const [isOpen, setIsOpen] = useState(false);

  const carRent = calculateRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 font-extrabold text-[32px]">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car, "angle")}
          alt="car"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex mt-2 w-full">
        <div className="flex group-hover:invisible w-full justify-between">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src={"/steering-wheel.svg"}
              width={20}
              height={20}
              alt="Steering Wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <Image src={"/tire.svg"} width={20} height={20} alt="Tyre" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <Image src={"/gas.svg"} width={20} height={20} alt="Tyre" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <Button
            handleClick={() => setIsOpen(true)}
            rightIcon="/right-arrow.svg"
            title="View More"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
          />
        </div>
      </div>

      <CarDetails isOpen={isOpen} closeModal={handleClose} car={car} />
    </div>
  );
};

export default CarCard;
