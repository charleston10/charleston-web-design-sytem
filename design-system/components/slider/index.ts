import { SliderContent } from "./slider.content";
import { SliderDescription } from "./slider.description";
import { SliderLabel } from "./slider.label";
import { SliderMessage } from "./slider.message";
import { SliderRange } from "./slider.range";
import { SliderRoot } from "./slider.root";
import { SliderThumb } from "./slider.thumb";
import { SliderTrack } from "./slider.track";

export const Slider = {
    Root: SliderRoot,
    Content: SliderContent,
    Track: SliderTrack,
    Range: SliderRange,
    Thumb: SliderThumb,
    Label: SliderLabel,
    Description: SliderDescription,
    Message: SliderMessage,
};

export { SliderContent, SliderDescription, SliderLabel, SliderMessage, SliderRange, SliderRoot, SliderThumb, SliderTrack };
export * from "./slider.types";
