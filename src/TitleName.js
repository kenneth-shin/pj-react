import React from "react";

function TitleName({name, isSpecial}){
    return (
        <div>
            {name}
            {isSpecial ? <b>***</b> : null}
        </div>
    );
}
export default TitleName;
