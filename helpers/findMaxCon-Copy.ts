interface CallRecordsInterface {
  callRecords: Array<CallRecordInterface>;
}

interface CallRecordInterface {
  customerId: number;
  callId: string;
  startTimestamp: number;
  endTimestamp: number;
}

interface ResultsInterface {
  customerId: number;
  date: string;
  maxConcurrentCalls: number;
  timestamp: number;
  callIds: string[];
}

export default function findMaxCon(data: CallRecordsInterface) {
  const updateRecords: ResultsInterface[] | [] = [];
  const { callRecords } = data;
  for (let x = 0; callRecords.length > x; x++) {
    if (
      !updateRecords.find(
        (item) => item.customerId === callRecords[x]?.customerId
      )
    ) {
      const newArray: string[] = [];
      const callIds = callRecords.filter((item) => {
        const startDate = new Date(item.startTimestamp);
        const endDate = new Date(item.endTimestamp);
        const recordStartDate = new Date(callRecords[x]?.startTimestamp || "");
        const recordEndDate = new Date(callRecords[x]?.endTimestamp || "");
        if (startDate >= recordStartDate || endDate < recordEndDate) {
          if (item.customerId === callRecords[x]?.customerId) {
            newArray.push(item.callId);
            return item;
          }
        }
      });
      const newJSDate = new Date(
        callRecords[x]?.startTimestamp || ""
      ).toISOString();
      const splitDate = newJSDate.split("T");
      let record: ResultsInterface = {
        customerId: callRecords[x]?.customerId || 0,
        date: splitDate[0] || "",
        maxConcurrentCalls: callRecords.filter((item) => {
          const startDate = new Date(item.startTimestamp);
          const endDate = new Date(item.endTimestamp);
          const recordStartDate = new Date(
            callRecords[x]?.startTimestamp || ""
          );
          const recordEndDate = new Date(callRecords[x]?.endTimestamp || "");
          if (startDate >= recordStartDate || endDate < recordEndDate) {
            if (item.customerId === callRecords[x]?.customerId) {
              return item;
            }
          }
        }).length,
        timestamp: callIds[callIds.length - 1]?.startTimestamp || 0,
        callIds: [...newArray],
      };

      updateRecords.push(record);
    }
  }

  return updateRecords;
}
