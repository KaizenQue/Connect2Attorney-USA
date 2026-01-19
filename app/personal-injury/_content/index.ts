import { sexualabuselawsuitContent } from "./sexualabuselawsuit";
import { mvaContent } from "./mva";
import {slipnfallContent} from "./slipnfall";
import { trucklawsuitContent } from "./18wheeler";
import { LawsuitContent } from "./types";

export const CONTENT_BY_SLUG: Record<string, LawsuitContent> = {
    "sexual-abuse-lawsuit": sexualabuselawsuitContent,
    "motor-vehicle-accident-lawsuit": mvaContent,
    "slip-and-fall-injury-lawsuit": slipnfallContent,
    "18-wheeler-lawsuit": trucklawsuitContent,
};
