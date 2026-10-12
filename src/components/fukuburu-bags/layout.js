export const COLORS = ["orange", "green", "yellow", "blue", "pink"];
export const SIZES = ["XS", "S", "M", "L", "XL"];

export const BOARD_WIDTH = 900;
export const BOARD_HEIGHT = 450;

const CELLS = 5;
export const TILE_W = BOARD_WIDTH / CELLS;
const TILE_H = (BOARD_HEIGHT  * 1.2) / CELLS;
const ORIGIN = { x: TILE_W / 2, y: BOARD_HEIGHT / 2 };

export const BAG_WIDTH = TILE_W * 0.5;

export function getBagPosition(color, size) {
   const row = COLORS.indexOf(color);
   const col = SIZES.indexOf(size); 

   return {
    x: ORIGIN.x + (row + col) * (TILE_W / 2),
    y: ORIGIN.y + (row - col) * (TILE_H / 2),
    zIndex: row - col + SIZES.length // lower on screen = in front
   };
};