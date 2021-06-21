import React, { useState } from "react";
import Data from "./Data";
import Nav from "./Nav";

function Text() {
    let languageStoredInLocalStorage = localStorage.getItem("language");
    let [language, setLanguage] = useState(
        languageStoredInLocalStorage ? languageStoredInLocalStorage : "Vietnamese"
    );

    return (
        <div className="row">
            <div className="col">
                <Nav
                    language={language}
                    handleSetLanguage={language => {
                        setLanguage(language);
                        storeLanguageInLocalStorage(language);
                    }}
                />
            </div>
            <div className="col">
                <Data language={language} />
            </div>
        </div>
    );
}

function storeLanguageInLocalStorage(language) {
    localStorage.setItem("language", language);
}

export default Text;
