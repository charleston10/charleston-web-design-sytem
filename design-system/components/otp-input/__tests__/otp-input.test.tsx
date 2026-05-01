import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { ThemeProvider } from "../../../theme";
import { OtpInput } from "../index";

describe("OtpInput", () => {
    it("accepts only digits and triggers onComplete when all slots are filled", async () => {
        const user = userEvent.setup();
        const onComplete = vi.fn();
        const onValueChange = vi.fn();

        render(
            <ThemeProvider>
                <OtpInput.Root maxLength={4} onComplete={onComplete} onValueChange={onValueChange}>
                    <OtpInput.Label>Verification code</OtpInput.Label>
                    <OtpInput.Content />
                </OtpInput.Root>
            </ThemeProvider>,
        );

        const firstInput = screen.getByLabelText("Digit 1 of 4");
        await user.type(firstInput, "1a2b3c4");

        expect(screen.getByLabelText("Digit 1 of 4")).toHaveValue("1");
        expect(screen.getByLabelText("Digit 2 of 4")).toHaveValue("2");
        expect(screen.getByLabelText("Digit 3 of 4")).toHaveValue("3");
        expect(screen.getByLabelText("Digit 4 of 4")).toHaveValue("4");

        expect(onValueChange).toHaveBeenLastCalledWith("1234");
        expect(onComplete).toHaveBeenCalledWith("1234");
    });
});
