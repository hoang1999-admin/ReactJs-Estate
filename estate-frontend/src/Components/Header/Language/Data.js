import React from "react";

function Data(props) {
    let content = {
        Vietnamese: {
            title: "Xin chào",
        },
        English: {
            title: "Hello",
        },
        French:{
            title: "Bonjour",
        },
        Thai:{
            title: "สวัสดี",
        },
        Chinese:{
            title: "你好",
        },
        Korean:{
            title: "안녕하세요",
        },
        Janpan:{
            title: "こんにちは",
        },
        Indonesian:{
            title: "Halo",
        },
        Russian:{
            title: "Привет",
        },
        Italian:{
            title: "Ciao",
        }
    };

    if(props.language === "Vietnamese")
    {
        (content = content.Vietnamese)
    }
    if(props.language === "English")
    {
        (content = content.English)
    }
    if(props.language === "French")
    {
        (content = content.French)
    }
    if(props.language === "Thai")
    {
        (content = content.Thai)
    }
    if(props.language === "Chinese")
    {
        (content = content.Chinese)
    }
    if(props.language === "Korean")
    {
        (content = content.Korean)
    }
    if(props.language === "Janpan")
    {
        (content = content.Janpan)
    }
    if(props.language === "Indonesian")
    {
        (content = content.Indonesian)
    }
    if(props.language === "Russian")
    {
        (content = content.Russian)
    }
    if(props.language === "Italian")
    {
        (content = content.Italian)
    }
    return (
        <a class="test" href={`/`}  >{content.title}</a>
    );
}

export default Data;
