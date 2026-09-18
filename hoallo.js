elements.hoallo = {
    color: "#3a3a3a",
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    density: 7800,
    tempHigh: 10000,
    stateHigh: "molten_hoallo",
    conduct: 0
};

elements.molten_hoallo = {
    color: "#ff5500",
    behavior: behaviors.LIQUID,
    category: "states",
    state: "liquid",
    density: 7000,
    tempLow: 10000,
    stateLow: "hoallo",
    hidden: true
};
