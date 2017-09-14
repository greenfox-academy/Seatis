# public int getSafePosition(int n) {
# 		// find value of L for the equation
# 		int valueOfL = n - Integer.highestOneBit(n);
# 		int safePosition = 2 * valueOfL  + 1;
		
# 		return safePosition;
def josephus(num):
    binary = bin(num)
    flag = True
    for i in range(2,len(binary)):
        if binary[i] == "1" and flag:
            highest_one_bit = len(binary) - i - 1
            flag = False
    valueOfL = num - 2**highest_one_bit
    safePosition = 2 * valueOfL  + 1
    return safePosition
print(josephus(int(input("Give me a number pls: "))))