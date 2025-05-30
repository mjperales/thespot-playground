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

interface SameCallRecord {
  [key: string]: string[];
}

export default function findMaxCon(data: CallRecordsInterface) {
  const recordExists: SameCallRecord = {};
  const results: ResultsInterface[] = [];
  const { callRecords } = data;

  for (let x = 0; callRecords.length > x; x++) {
    const arrayCallIds: string[] = [];
    const current = callRecords[x];
    if (current) {
      const startDate = new Date(current.startTimestamp || "").toISOString();
      const dateArr = startDate.split("T");
      const currentDateString = dateArr[0] || "";

      if (
        !recordExists[current.customerId] ||
        (recordExists[current.customerId] &&
          !recordExists[current.customerId].includes(currentDateString))
      ) {
        const matchingIdCalls = callRecords.filter((item) => {
          const itemStartDate = new Date(item.startTimestamp).toISOString();
          const itemDateArray = itemStartDate.split("T");
          if (
            item.customerId === current?.customerId &&
            itemDateArray[0] === dateArr[0]
          ) {
            // add callId to array
            arrayCallIds.push(item.callId);
            return item;
          }
        });

        // add new item to recordExists
        if (recordExists[current.customerId]) {
          recordExists[current.customerId].push(currentDateString);
        } else {
          recordExists[current?.customerId] = [currentDateString];
        }

        results.push({
          customerId: current.customerId,
          date: currentDateString,
          maxConcurrentCalls: matchingIdCalls.length,
          timestamp:
            matchingIdCalls[matchingIdCalls.length - 1]?.startTimestamp || 0,
          callIds: [...arrayCallIds],
        });
      }
    }
  }

  return results;
}
