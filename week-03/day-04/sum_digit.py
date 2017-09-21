# Given a non-negative int n, return the sum of its digits recursively (no loops). 
# Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
# divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

def sum_digits(n):
  if n <= 0:
    return 0
  else:
    return n % 10 + sum_digits(n // 10)

# def sumdigits(n):
#     return n and n%10 + sumdigits(n//10)

print(sum_digits(193))