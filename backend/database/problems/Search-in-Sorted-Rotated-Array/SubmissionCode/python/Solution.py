class Solution:
    def searchInSortedRotatedArray(self, nums: List[int], target: int):
        lo = 0
        hi = len(nums) - 1
        while lo <= hi:
            mid: int = lo + int((hi-lo)/2)
            if nums[mid] == target: return mid
            if nums[mid] <= nums[hi]:
                if target > nums[mid] and target <= nums[hi]:
                    lo = mid + 1
                else: 
                    hi = mid - 1
            else:
                if target < nums[mid] and target >= nums[lo]:
                    hi = mid - 1
                else:
                    lo = mid + 1
        return -1
