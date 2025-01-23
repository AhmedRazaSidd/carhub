"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hello");
    if (manufacturer === "" && model === "") {
      return alert("Pleae fill in the search bar");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const params = [];

    if (manufacturer) {
      params.push(`manufacturer=${manufacturer}`);
    }

    if (model) {
      params.push(`model=${model}`);
    }

    const newPathName = `${pathname}?${params.join("&")}`;
    router.push(newPathName);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClass="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car"
        />
        <input
          type="text"
          name="model"
          placeholder="Tiguan"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="searchbar__input"
        />
        <SearchButton otherClass="sm:hidden" />
      </div>
      <SearchButton otherClass="max-sm:hidden" />
    </form>
  );
};

const SearchButton = ({ otherClass }: { otherClass: string }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClass}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

export default SearchBar;
