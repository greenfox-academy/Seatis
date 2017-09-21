# Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

def number_adder(n):
    if not n:
        return 0
    else:
        return n + number_adder(n-1)
print(number_adder(5))

# def number_adder(n):
#     if n == 1:
#         total = 1
#     else:
#         total = number_adder(n-1) + n
#     return total
# print(number_adder(10))
