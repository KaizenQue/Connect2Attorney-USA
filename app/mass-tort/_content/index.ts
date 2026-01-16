import { ozempicContent } from "./ozempic";
import { mesotheliomaContent } from "./mesothelioma";
import {depoproveraContent} from "./depoprovera";
import { roundupContent } from "./roundup";
import { talcumContent } from "./talcum";
import { LawsuitContent } from "./types";

export const CONTENT_BY_SLUG: Record<string, LawsuitContent> = {
    "ozempic-lawsuit": ozempicContent,
    "mesothelioma-lawsuit": mesotheliomaContent,
    "depo-provera-lawsuit": depoproveraContent,
    "roundup-lawsuit": roundupContent,
    "talcum-lawsuit": talcumContent,
};
