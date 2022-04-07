class SnapshotArray:
    def __init__(self, length: int):
        self.arr = []
        for i in range(length):
            self.arr.append({})
        self.snapid = 0

    def set(self, index: int, val: int) -> None:
        self.arr[index][self.snapid] = val

    def snap(self) -> int:
        self.snapid +=1
        return self.snapid-1

    def get(self, index: int, snap_id: int) -> int:

        for i in range(snap_id, -1, -1):
            # print(i, self.arr[index])
            if i in self.arr[index]:
                val  = self.arr[index][i]
                return val
        return 0


# Your SnapshotArray object will be instantiated and called as such:
# obj = SnapshotArray(length)
# obj.set(index,val)
# param_2 = obj.snap()
# param_3 = obj.get(index,snap_id)
