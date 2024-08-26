const nums = [1, 2, 3, 4, 7, 6, 7];

function twoSum(nums, target) {
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    console.log(complement);

    if (hashMap.has(complement)) {
      return [hashMap.get(complement), i];
    }
    hashMap.set(nums[i], i);
  }
  return [];
}

function groupAnagrams(strs) {
  const hashMap = new Map();

  for (let str of strs) {
    const key = str.split("").sort().join("");
    console.log(key);

    if (!hashMap.has(key)) {
      hashMap.set(key, []);
    }

    hashMap.get(key).push(str);
  }
  return Array.from(hashMap.values());
}
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));

const hash = new Map();
