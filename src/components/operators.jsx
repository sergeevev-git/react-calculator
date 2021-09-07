import React from "react";

const Symbol = ({ symbol, onClick }) => {
    return <div onClick={() => onClick(symbol)}>{symbol}</div>;
};

export default Symbol;
