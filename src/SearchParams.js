import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./UseDropdown";

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);
    const [AnimalDropdown, animal, setAnimal] = useDropdown(
        "Animal",
        "",
        ANIMALS
    );
    const [BreedDropDown, breed, setBreed] = useDropdown("Breed", "", breeds);

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Location"
                    />
                </label>
                <AnimalDropdown />
                <BreedDropDown />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;
