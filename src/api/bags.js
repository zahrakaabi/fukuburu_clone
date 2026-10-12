/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Utils
import { MOCK_BAGS_RESPONSE } from "../_mocks/_bags";

/* -------------------------------------------------------------------------- */
/*                               FETCH BAGS API                               */
/* -------------------------------------------------------------------------- */
const bags = MOCK_BAGS_RESPONSE;

export async function fetchBags() {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return bags;

    //@TO DO: later with backend
    // const res = await fetch("https://api.example.com/bags");
    // if (!res.ok) throw new Error("Failed to fetch bags")
    // return res.json();
};