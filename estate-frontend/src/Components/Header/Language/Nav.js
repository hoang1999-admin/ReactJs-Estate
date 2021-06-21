import React from "react";

function Nav(props) {
    return (

        <select
            className="custom-select " style={{ width: `120px` }}
            value={props.language}
            onChange={e => props.handleSetLanguage(e.target.value)}
        >
            <option value="Vietnamese">Việt Nam</option>
            <option value="English">Anh</option>
            <option value="French">Pháp</option>
            <option value="Thai">Thái Lan</option>
            <option value="Chinese">Trung Quốc</option>
            <option value="Korean">Hàn Quốc</option>
            <option value="Janpan">Nhật Bản</option>
            <option value="Indonesian">Indonesian</option>
            <option value="Russian">Nga</option>
            <option value="Italian">Italian</option>
        </select>

    );
}

export default Nav;
