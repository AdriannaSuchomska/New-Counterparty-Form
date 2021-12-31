import React, { useState } from "react";
import { Previews } from "./image.jsx";
import { handleSubmit } from "./submit.jsx";
import { InputComponent } from "./InputComponent.jsx"
import useDropdown from "./useDropdown.jsx";


export const Add = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [ID, setID] = useState("");

    const types = ["Wybierz TYP", "Osoba", "Firma"];

    const [type, TypeDropdown] = useDropdown("", "Typ: ", types);


    return (
        <div className="Add">
            <form onSubmit={handleSubmit} >

                <InputComponent
                    label="Imię"
                    state={firstName}
                    setState={setFirstName}
                />

                <InputComponent
                    label="Nazwisko"
                    state={lastName}
                    setState={setLastName}
                />

                <TypeDropdown />

                <InputComponent
                    label="Pesel / NIP"
                    state={ID}
                    setState={setID}
                    type="number"
                />


                <Previews />

                <input type="submit" className="button" value="ZATWIERDŹ" />

            </form>

        </div>
    )
}
