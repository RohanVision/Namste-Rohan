import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// We can use Describe to nested out
describe("Contact us page Test Cases", () => {
    // beforeAll(() => {
    //     console.log("Before All");
    // });

    // beforeEach(() => {
    //     console.log("Before Each");
    // });

    // afterAll(() => {
    //     console.log("After All");
    // });

    // afterEach(() => {
    //     console.log("After Each");
    // })

    it("should load contact us component", () => {

        render(<Contact />);
        // Querying
        const heading = screen.getByRole("heading");

        // Assertion / expection
        expect(heading).toBeInTheDocument();
    });

    it("should load button inside contact us component", () => {
        render(<Contact />);
        const button = screen.getByRole("button");

        // Assertion
        expect(button).toBeInTheDocument();
    });

    it("Should load input name inside Contact input", () => {
        render(<Contact />);
        const inputName = screen.getByPlaceholderText("name");

        // Assertion
        expect(inputName).toBeInTheDocument();
    });

    it("should load 2 input boxes on the contact component", () => {
        render(<Contact />)

        const inputBoxes = screen.getAllByRole("textbox")

        // console.log(inputBoxes.length);
        // Assertion
        expect(inputBoxes.length).toBe(2)
    });
})
