import { render, screen } from "@testing-library/react"
import RestaurantCard, { withDiscount } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import DATA_MOCK from "../mocks/mockResListData"
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props Data", () => {

    render(<RestaurantCard resData={MOCK_DATA} />);

    // Querying
    const name = screen.getByText("Chinese Wok");

    expect(name).toBeInTheDocument();
});
