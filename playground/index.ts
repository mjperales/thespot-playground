import { fetchHelper } from "../helpers/fetchHelper";
import findMaxCon from "../helpers/findMaxCon";
import writeToFile from "../helpers/writeToFile";
import jsonData from "../fixtures/hubspot-call-logs.json";
import { smallestNumber } from "../helpers/smallestNumber";
import { isPalindrome } from "../helpers/isPalindrome";
import { merge } from "../helpers/mergeSortedArray";
import { removeDuplicates } from "../helpers/removeDuplicates";
import { moveZeroes } from "../helpers/moveZeroes";
import { threeSum } from "../helpers/threeSum";
/**
 * That was a fun activity! Too bad I didn't get to the correct answer.
 *
 */

async function run() {
  // const data = await fetchHelper(
  //   "https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=94754b3abdc6de924fc5a2b1c0d2",
  //   "GET"
  // );
  // const newData = findMaxCon(jsonData);
  // const results = {
  //   results: newData,
  // };
  // const rsp = await fetchHelper(
  //   "https://candidate.hubteam.com/candidateTest/v3/problem/test-result?userKey=94754b3abdc6de924fc5a2b1c0d2",
  //   "POST",
  //   results
  // );
  // console.log(smallestNumber([1, 3, 6, 4, 1, 2]));
  // console.log(smallestNumber([1, 2, 3]));
  // console.log(smallestNumber([-1, -3]));
  // console.log(isPalindrome("A man, a plan, a canal: Panama"));
  // let nums1 = [1, 2, 3, 0, 0, 0];

  // console.log(merge(nums1, 3, [2, 5, 6], 3));
  // console.log(nums1);
  // let dedup = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  // console.log(removeDuplicates(dedup));
  // console.log(dedup);
  // let zeroes = [0, 1, 0, 3, 12];
  // console.log(moveZeroes(zeroes));
  // console.log(zeroes);
  const nums = [-2, 0, 0, 0, 2, 2, 2, -2, -2, -2, 1, -1, -1, 1, 1];
  console.log(threeSum(nums));
}

void (async () => await run())();
