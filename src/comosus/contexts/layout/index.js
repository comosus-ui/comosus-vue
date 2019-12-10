const Context = require("../../../classes/Context");
const column = require("./flex/column");
const row = require("./flex/row");
const autoGrid = require("./grid/autoGrid");
const namedGrid = require("./grid/namedGrid");
const padding = require("./padding");

// idk if placement context is the move for the containers, prob for items though
class PlacementContext extends Context {
  constructor() {
    super("layout", [padding, column, row, autoGrid, namedGrid]);
  }
}

module.exports = new PlacementContext();
