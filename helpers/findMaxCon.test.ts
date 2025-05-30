import findMaxCon from "./findMaxCon";
import callRecords from "../fixtures/hubspot-call-logs.json";

describe("findMaxCon()", () => {
  test("find the max number of concurrent calls for each customer", () => {
    const newRecords = findMaxCon(callRecords);
    const customerId37801 = callRecords.callRecords.filter((item) => {
      const startDate = new Date(item.startTimestamp).toISOString();
      const arrStartDate = startDate.split("T");
      return item.customerId === 37801 && arrStartDate[0] === "2024-01-06";
    });

    expect(customerId37801.length).toBe(3);
    expect(
      newRecords.find((item) => item.customerId === 37801)?.callIds.length
    ).toBe(3);
  });
});
